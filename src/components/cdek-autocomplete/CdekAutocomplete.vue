<script lang="ts" setup>
import { computed, ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import type { Component } from 'vue';
import { CdekDropdownItem, CdekDropdownBox } from '../cdek-dropdown/';
import type { IItemValue } from '../cdek-dropdown/CdekDropdownItem.vue';
import { CdekInput } from '../cdek-input/';

export type Primitive = string | number | boolean | symbol;

const props = withDefaults(
  defineProps<{
    modelValue: Primitive;
    items: Array<IItemValue> | Array<string>;
    fetchItems?: (query: string) => Promise<Array<IItemValue> | Array<string>>;
    debounce?: number;
    minLength?: number;
    label?: string;
    placeholder?: string;
    validRes?: true | string;
    disabled?: boolean;
    readonly?: boolean;
    small?: boolean;
    clearable?: boolean;
  }>(),
  {
    debounce: 300,
    minLength: 3,
  }
);

const transformItems = (items: Array<IItemValue> | Array<string> = []) => {
  if (typeof items[0] === 'object') {
    return items as Array<IItemValue>;
  }

  return items.map((item) => ({ value: item, title: item } as IItemValue));
};

const transformedItems = transformItems(props.items);
const state = reactive({
  items: props.items,
  isOpen: false,
  activeIndex: transformedItems.findIndex(
    (option) => option.value === props.modelValue
  ),
  selectedValue: transformedItems.find(
    (item) => item.value === props.modelValue
  ),
});

const inputValue = ref<string>(
  state.selectedValue ? String(state.selectedValue?.title) : ''
);

const inputControl = ref();
const autocompleteRef = ref();

const options = computed(() => transformItems(state.items));

const emit = defineEmits<{
  (e: 'update:modelValue', value: Primitive): void;
}>();

const onClear = () => {
  emit('update:modelValue', '');
  state.selectedValue = undefined;
};

let timeout: ReturnType<typeof setTimeout>;
const onChangeInput = (value: string) => {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    if (value.length >= props.minLength) {
      state.activeIndex = -1;
      if (props.fetchItems) {
        props.fetchItems(value).then((fetchedItems) => {
          state.items = fetchedItems;
        });
      } else {
        if (typeof props.items[0] === 'string') {
          state.items = (props.items as Array<string>).filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
          );
        } else {
          state.items = (props.items as Array<IItemValue>).filter((item) =>
            String(item.title).toLowerCase().includes(value.toLowerCase())
          );
        }
      }
    } else {
      state.items = props.items;
    }
    if (value.length === 0) {
      onClear();
    }
  }, props.debounce);
};

const openDropdown = () => {
  state.isOpen = true;
};

const closeDropdown = () => {
  state.isOpen = false;

  if (!state.selectedValue) {
    inputValue.value = '';
  }

  setActive(
    options.value.findIndex((item) => item.value === state.selectedValue?.value)
  );

  if (state.selectedValue) {
    inputValue.value = String(state.selectedValue.title);
  }
};

const onSelect = (value: IItemValue) => {
  closeDropdown();
  setActive(options.value.findIndex((option) => option.value === value.value));
  state.selectedValue = value;
  inputValue.value = String(value.title);

  emit('update:modelValue', value.value);
};

const onFocus = () => {
  if (
    options.value.length ||
    String(inputValue.value).length >= props.minLength
  ) {
    openDropdown();
  }
};

const onOutsideClick = (event: MouseEvent) => {
  if (!autocompleteRef.value.contains(event.target)) {
    closeDropdown();
  }
};

const setActive = (index: number) => {
  if (index < 0) {
    index = options.value.length - 1;
  }
  if (index > options.value.length - 1) {
    index = 0;
  }

  state.activeIndex = index;
};

const onKeydown = (event: KeyboardEvent) => {
  if (!state.isOpen) {
    return;
  }

  switch (event.key) {
    case 'ArrowDown':
      setActive(state.activeIndex + 1);
      break;

    case 'ArrowUp':
      setActive(state.activeIndex - 1);
      break;

    case 'Enter':
      onSelect(options.value[state.activeIndex]);
      break;

    case 'Escape':
      closeDropdown();
      break;
  }
};

let input: HTMLInputElement;
onMounted(() => {
  input = inputControl.value.getControl();
  input.addEventListener('focus', onFocus);
  input.addEventListener('keydown', onKeydown);
  document.addEventListener('click', onOutsideClick);
});

onBeforeUnmount(() => {
  input.removeEventListener('focus', onFocus);
  input.removeEventListener('keydown', onKeydown);
  document.removeEventListener('click', onOutsideClick);
});
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
      :readonly="readonly"
      :clearable="clearable"
      v-model="inputValue"
      ref="inputControl"
      @update:modelValue="onChangeInput"
    />
    <Transition>
      <CdekDropdownBox v-if="state.isOpen">
        <!-- @slot сообщение, в случае, если ничего не нашлось -->
        <div
          class="cdek-autocomplete__not-found"
          v-if="options.length === 0 && inputValue?.length >= minLength"
        >
          <slot name="not-found" />
        </div>
        <CdekDropdownItem
          v-for="(item, index) in options"
          :value="item"
          :active="index === state.activeIndex"
          :selected="state.selectedValue?.value === item.value"
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
