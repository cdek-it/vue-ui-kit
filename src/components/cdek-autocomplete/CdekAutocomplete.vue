<script lang="ts" setup>
import {
  computed,
  ref,
  onMounted,
  onBeforeUnmount,
  useSlots,
  watch,
} from 'vue';
import { debounce } from 'lodash';

import { CdekDropdownItem, CdekDropdownBox } from '../cdek-dropdown/';
import { CdekInput } from '../cdek-input/';

import type { IItemValue } from '../cdek-dropdown/CdekDropdown.types';
import type {
  Value,
  Item,
  ItemsUnion,
  FetchFunction,
  GetValueFn,
  GetTitleFn,
} from './types';
import {
  KeyboardKeys,
  transformItems,
  getTitleByValue,
  getSearchType,
  getSearchFn,
} from './helpers';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    /**
     * v-model
     *
     * Выбранное значение из доступных вариантов, НЕ строка, которую вводит пользователь
     *
     * `string | number`
     */
    modelValue: Value;
    /**
     * Готовый выпадающий список элементов
     *
     * Можно передать `string[]`, массив объектов по типу `{ value: string | number; title: string }`,
     * либо массив объектов вашего типа
     *
     * Если `string[]` - то и значением v-model и отображаемым названием будет строка
     *
     * Если объект заготовленного типа - то значением будет `value`, а названием `title`
     *
     * Если массив вашего типа - то необходимо передать `getValue` и `getTitle`, подробнее смотрите в истории
     *
     * Для передачи начального значения передайте корректное значение в `v-model` и `items` из одного объекта,
     * впоследствии значения будут браться из `fetchItems`
     */
    items?: ItemsUnion;
    /**
     * Асинхронная функция для поиска элементов.
     *
     * Должна принимать строку для поиска, введенную пользователем
     *
     * Должна отдавать `Promise` с результатом такого же типа, как и `items`
     *
     * Обработка результата происходит также, как в `items`
     */
    fetchItems?: FetchFunction;
    /**
     * Кастомная функция для получения `value` из объектов, попадет в `v-model`
     */
    getValue?: GetValueFn;
    /**
     * Кастомная функция для получения `title` из объектов, используется для отображения в списке
     */
    getTitle?: GetTitleFn;
    /**
     * Минимальная длина введеного значения, после которого будет отправлен
     * запрос (вызов функции fetchItems) или осуществлен поиск по списку элеметов items
     */
    minLength?: number;
    class?: string;
  }>(),
  {
    minLength: 3,
  }
);

const searchType = computed(() =>
  getSearchType(props.fetchItems, props.items, props.getTitle)
);

// null - не показываем dropdown
const showedItems = ref<ItemsUnion | null>(null);
const options = computed(() =>
  transformItems(showedItems.value, props.getValue, props.getTitle)
);

// Сохраняем название выбранного элемента, чтобы подставлять в инпут при закрытии дропдауна
const currentTitle = ref<string>(
  getTitleByValue(props.items, props.modelValue, props.getValue, props.getTitle)
);
const inputValue = ref<string>(currentTitle.value || '');

watch(
  () => props.modelValue,
  (value) => {
    // Пришло пустое значение
    if (!value) {
      // Отображаем пустое значение если сейчас заполнено
      if (currentTitle.value || inputValue.value) {
        currentTitle.value = '';
        inputValue.value = '';
      }

      return; // Не делаем emit, чтобы избежать зацикливания
    }

    const newTitle = getTitleByValue(
      props.items,
      value,
      props.getValue,
      props.getTitle
    );

    if (!newTitle) {
      // Если название не нашлось, значит мы его выбрали с результата fetchItems
      // либо значение было передано некорректно

      return;
    }

    currentTitle.value = newTitle;
    inputValue.value = newTitle;
  }
);

const isOpen = computed(() => {
  if (!showedItems.value) {
    return false;
  }

  if (hasNotFoundMessage.value && !showedItems.value.length) {
    return true;
  }

  return showedItems.value.length > 0;
});

// Подсвеченный элемент при управлении с клавиатуры
const highlightedEl = ref<number>(-1);

const cdekInputRef = ref<InstanceType<typeof CdekInput> | undefined>();
const autocompleteRef = ref<HTMLDivElement>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: Value): void;
  (e: 'select', value: string | Item | any): void;
}>();

const hasFocus = ref(false);

const checkInputValue = debounce(async (val: string) => {
  // обнуляем подсвеченный элемент
  highlightedEl.value = -1;

  const searchFn = getSearchFn(
    searchType.value,
    props.fetchItems,
    props.getTitle
  );

  try {
    const newItems = await searchFn(val, props.items);

    if (hasFocus.value) {
      showedItems.value = newItems;
      return;
    }

    showedItems.value = null;
  } catch {
    showedItems.value = null;
  }
}, 300);

const onChangeInput = (value: string) => {
  inputValue.value = value;

  if (value.length >= props.minLength) {
    return void checkInputValue(value);
  }

  if (value.length === 0) {
    currentTitle.value = '';
    emit('update:modelValue', '');
  }

  showedItems.value = null;
};

const closeDropdown = () => {
  showedItems.value = null;

  if (!currentTitle.value) {
    inputValue.value = '';
    return;
  }

  inputValue.value = currentTitle.value;
};

const onSelect = (value: IItemValue, index: number) => {
  if (!value || value.disabled) {
    return;
  }

  emit('select', showedItems.value?.[index]);

  closeDropdown();

  currentTitle.value = String(value.title);
  inputValue.value = String(value.title);

  emit('update:modelValue', value.value);
};

const onOutsideClick = (event: MouseEvent) => {
  if (!autocompleteRef.value?.contains(event.target as HTMLElement)) {
    closeDropdown();
  }
};
const highlight = (index: number) => {
  if (index < 0) {
    index = options.value.length - 1;
  }

  if (index > options.value.length - 1) {
    index = 0;
  }

  highlightedEl.value = index;
};

const onKeydown = (event: KeyboardEvent) => {
  if (!isOpen.value) {
    return;
  }

  if (event.key === KeyboardKeys.ArrowDown) {
    // Отменяем перемещение курсора в инпуте
    event.preventDefault();
    return void highlight(highlightedEl.value + 1);
  }

  if (event.key === KeyboardKeys.ArrowUp) {
    // Отменяем перемещение курсора в инпуте
    event.preventDefault();
    return void highlight(highlightedEl.value - 1);
  }

  if (event.key === KeyboardKeys.Enter) {
    event.stopImmediatePropagation();

    if (highlightedEl.value === -1 && options.value.length > 0) {
      highlight(0);
    }

    return void onSelect(
      options.value[highlightedEl.value],
      highlightedEl.value
    );
  }

  if (event.key === KeyboardKeys.Escape) {
    event.stopImmediatePropagation();
    return void closeDropdown();
  }
};

const onFocus = () => {
  hasFocus.value = true;
};

const onBlur = () => {
  hasFocus.value = false;
};

onMounted(() => {
  const input = cdekInputRef.value?.getControl();
  input?.addEventListener('keydown', onKeydown);
  document.addEventListener('click', onOutsideClick);
});

onBeforeUnmount(() => {
  const input = cdekInputRef.value?.getControl();
  input?.removeEventListener('keydown', onKeydown);
  document.removeEventListener('click', onOutsideClick);
});

const slots = useSlots();
const hasNotFoundMessage = computed(() => Boolean(slots['not-found']));
</script>

<template>
  <div class="cdek-autocomplete" :class="props.class" ref="autocompleteRef">
    <CdekInput
      v-bind="$attrs"
      :model-value="inputValue"
      @update:modelValue="onChangeInput"
      ref="cdekInputRef"
      @focus="onFocus"
      @blur="onBlur"
    >
      <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </CdekInput>
    <Transition>
      <CdekDropdownBox v-if="isOpen">
        <div
          class="cdek-autocomplete__not-found"
          v-if="options.length === 0 && inputValue?.length >= minLength"
        >
          <!-- @slot сообщение, в случае, если ничего не нашлось -->
          <slot name="not-found" />
        </div>
        <CdekDropdownItem
          v-for="(item, index) in options"
          :value="item"
          :active="index === highlightedEl"
          :key="item.value"
          @select="(item) => onSelect(item, index)"
        >
          {{ item.title }}
        </CdekDropdownItem>
      </CdekDropdownBox>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
@mixin slotted-svg-color($color) {
  :slotted(svg) {
    path {
      stroke: $color;
    }
  }
}

.cdek-autocomplete {
  $padding-left: 16px;
  position: relative;

  &__not-found {
    @include body-1;
    padding: 12px 16px;
  }

  .cdek-dropdown-box {
    margin-top: -14px;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}
</style>
