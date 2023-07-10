<script lang="ts" setup>
import { computed, ref, onMounted, onBeforeUnmount, useSlots } from 'vue';
import { debounce } from 'lodash';

import { CdekDropdownItem, CdekDropdownBox } from '../cdek-dropdown/';
import { CdekInput } from '../cdek-input/';

import type { IItemValue } from '../cdek-dropdown/CdekDropdown.types';
import type { Value, Item, ItemsUnion, FetchFunction } from './types';
import {
  KeyboardKeys,
  transformItems,
  getTitleByValue,
  getSearchType,
  getSearchFn,
} from './helpers';

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
     * Минимальная длина введеного значения, после которого будет отправлен
     * запрос (вызов функции fetchItems) или осуществлен поиск по списку элеметов items
     */
    minLength?: number;
    label?: string;
    placeholder?: string;
    /**
     * `true` - валидация пройдена, ошибку показывать не надо
     *
     * `string` - текст ошибки, ошибка показывается
     */
    validRes?: true | string;
    hideErrorMessage?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    small?: boolean;
    clearable?: boolean;
  }>(),
  {
    minLength: 3,
  }
);

const searchType = computed(() => getSearchType(props.fetchItems, props.items));

// null - не показываем dropdown
const showedItems = ref<ItemsUnion | null>(null);
const options = computed(() => transformItems(showedItems.value));

// Сохраняем название выбранного элемента, чтобы подставлять в инпут при закрытии дропдауна
const currentTitle = ref<string>(
  getTitleByValue(props.items, props.modelValue)
);
const inputValue = ref<string>(currentTitle.value || '');

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

const cdekInputRef = ref<typeof CdekInput>();
const autocompleteRef = ref<HTMLDivElement>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: Value): void;
  (e: 'select', value: Item): void;
}>();

const checkInputValue = debounce(async (val: string) => {
  // обнуляем подсвеченный элемент
  highlightedEl.value = -1;

  const searchFn = getSearchFn(searchType.value, props.fetchItems);

  try {
    showedItems.value = await searchFn(val, props.items);
  } catch {
    showedItems.value = null;
  }
}, 300);

const onChangeInput = (value: string) => {
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

const onSelect = (value: IItemValue) => {
  closeDropdown();

  currentTitle.value = String(value.title);
  inputValue.value = String(value.title);

  emit('update:modelValue', value.value);
  emit('select', value as Item);
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
    return void highlight(highlightedEl.value + 1);
  }

  if (event.key === KeyboardKeys.ArrowUp) {
    return void highlight(highlightedEl.value - 1);
  }

  if (event.key === KeyboardKeys.Enter) {
    event.stopImmediatePropagation();
    return void onSelect(options.value[highlightedEl.value]);
  }

  if (event.key === KeyboardKeys.Escape) {
    event.stopImmediatePropagation();
    return void closeDropdown();
  }
};

let input: HTMLInputElement;
onMounted(() => {
  input = cdekInputRef.value?.getControl();
  input.addEventListener('keydown', onKeydown);
  document.addEventListener('click', onOutsideClick);
});

onBeforeUnmount(() => {
  input.removeEventListener('keydown', onKeydown);
  document.removeEventListener('click', onOutsideClick);
});

const slots = useSlots();
const hasNotFoundMessage = computed(() => Boolean(slots['not-found']));
</script>

<template>
  <div
    class="cdek-autocomplete"
    :class="{
      'cdek-autocomplete_small': small && label,
    }"
    ref="autocompleteRef"
  >
    <CdekInput
      :label="label"
      :disabled="disabled"
      :small="small"
      :validRes="validRes"
      :hide-error-message="hideErrorMessage"
      :readonly="readonly"
      :clearable="clearable"
      :placeholder="placeholder"
      v-model="inputValue"
      ref="cdekInputRef"
      @update:modelValue="onChangeInput"
    >
      <template #icons-right>
        <slot name="icons-right" />
      </template>
      <template #icons-left>
        <slot name="icons-left" />
      </template>
      <template #tip="{ alert, info, ban, circle }">
        <slot
          name="tip"
          :alert="alert"
          :info="info"
          :ban="ban"
          :circle="circle"
        />
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
          @select="onSelect"
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
