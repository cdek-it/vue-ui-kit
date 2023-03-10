<script lang="ts" setup>
import { computed, useSlots, ref } from 'vue';
import type { Component } from 'vue';
import {
  Combobox,
  ComboboxLabel,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/vue';
import { CdekDropdownItem, CdekDropdownBox } from '../cdek-dropdown/';

export type Primitive = string | number | boolean | symbol;

export interface ISelectOption {
  value: Primitive;
  title: string;
  disabled?: boolean;
  icon?: Component;
  color?: string;
  [props: string]: any;
}

const props = withDefaults(
  defineProps<{
    modelValue: Primitive | Array<string>;
    items: Array<ISelectOption> | Array<string>;
    fetchItems?: (query: string) =>  Promise<Array<ISelectOption> | Array<string>>;
    debounce?: number;
    minLength?: number;
    label?: string;
    validRes?: true | string;
    disabled?: boolean;
    readonly?: boolean;
    small?: boolean;
    multiple?: boolean;
  }>(),
  {
    debounce: 300,
    minLength: 3
  }
);

const transformItems = (items: Array<ISelectOption> | Array<string>) => {
  if (typeof items[0] === 'object') {
    return items as Array<ISelectOption>;
  }

  return items.map(
      (item) => ({ value: item, title: item } as ISelectOption)
  );
}

const items = ref(props.items)
const options = computed( () => transformItems(items.value));

const isError = computed(() => typeof props.validRes === 'string');
const isUserEvent = computed(() => !props.disabled && !props.readonly);

const emit = defineEmits<{
  (e: 'update:modelValue', value: Primitive | Array<Primitive>): void;
}>();

const value = computed({
  get() {
    if (props.multiple) {
      return options.value.filter((item) =>
        (props.modelValue || []).includes(item.value)
      );
    }
    return (
      options.value.find((item) => props.modelValue === item.value) ||
      ({} as ISelectOption)
    );
  },
  set(newValue) {
    if (props.multiple && Array.isArray(props.modelValue)) {
      emit(
        'update:modelValue',
        newValue.map((item) => item.value)
      );
      return;
    }
    emit('update:modelValue', newValue.value);
  },
});
const slots = useSlots();
const hasRightIcon = computed(() => Boolean(slots['icons-right']));

let timeout: NodeJS.Timeout;
const onChangeInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  if(timeout) {
    clearTimeout(timeout)
  }
  timeout = setTimeout(() => {
    if(props.fetchItems) {
      props.fetchItems(value).then((fetchedItems) => {
        items.value = fetchedItems
      })
    }
  }, props.debounce)
}
</script>

<template>
  <div
    class="cdek-autocomplete"
    :class="{
      'cdek-autocomplete_small': small && label,
    }"
  >
    <Combobox
      v-model="value"
      :disabled="disabled || readonly"
      :multiple="multiple"
    >
      <div
        class="cdek-autocomplete__control"
        :class="{
          'cdek-autocomplete__control_error': isError,
          'cdek-autocomplete__control_user-event': isUserEvent,
          'cdek-autocomplete__control_disabled': disabled,
          'cdek-autocomplete__control_readonly': readonly,
          'cdek-autocomplete__control_right-icon': hasRightIcon,
          'cdek-autocomplete__control_small': small,
          'cdek-autocomplete__control_open': open,
        }"
      >
        <ComboboxLabel
          v-if="label"
          class="cdek-autocomplete__label"
          :class="{
            'cdek-autocomplete__label_filled': multiple
              ? value.length > 0
              : Boolean(value.value),
            'cdek-autocomplete__label_error': isError,
            'cdek-autocomplete__label_readonly': readonly,
            'cdek-autocomplete__label_small': small,
            'cdek-autocomplete__label_open': open,
          }"
        >
          {{ label }}
        </ComboboxLabel>
        <div v-if="hasLeftIcon" class="cdek-autocomplete__left-icon">
          <slot name="icons-left" />
        </div>
        <ComboboxInput
          class="cdek-autocomplete__input"
          :class="{
            'cdek-autocomplete__input_error': isError,
            'cdek-autocomplete__input_readonly': readonly,
            'cdek-autocomplete__input_no-label': !label,
            'cdek-autocomplete__input_small': small,
            'cdek-autocomplete__input_open': open,
          }"
          @change="onChangeInput"
        />
      </div>
      <ComboboxOptions :as="CdekDropdownBox">
        <ComboboxOption
          v-for="item in options"
          v-slot="{ selected, active }"
          :key="item.value"
          :value="item"
          :disabled="item.disabled"
          as="template"
        >
          <CdekDropdownItem
            :value="item"
            :disabled="item.disabled"
            :selected="selected"
            :active="active"
          >
            {{ item.title }}
          </CdekDropdownItem>
        </ComboboxOption>
      </ComboboxOptions>
    </Combobox>
    <div class="cdek-autocomplete__tip">
      <template v-if="isError">
        <BanIcon />
        <span class="error">{{ validRes }}</span>
      </template>

      <!-- @slot Предоставлены классы и стандартные иконки, примеры в историях -->
      <slot
        v-else
        name="tip"
        :alert="AlertTriangleIcon"
        :ban="BanIcon"
        :circle="CircleCheckIcon"
        :info="InfoCircleIcon"
      />
    </div>
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

  &_small {
    padding-top: 20px;
  }

  &__control {
    $this: &;
    $outline-width: 2px;

    position: relative;
    display: flex;
    align-items: center;
    height: 56px;

    outline: solid $outline-width transparent;
    padding-inline: calc(#{$padding-left} - #{$outline-width});
    padding-block: 6px;

    box-sizing: border-box;
    background: $Surface_Neutral;
    box-shadow: inset 0px 1px 2px rgba(0, 33, 52, 0.05);
    border-radius: 8px;
    transition: background-color 0.3s ease, outline-color 0.3s ease;
    cursor: text;

    &_user-event {
      @include media-hover {
        background: $Primary_10;
      }

      &:focus-within {
        background: $Peak;
        outline-color: $Primary;
      }

      &#{$this}_error {
        @include media-hover {
          background: $Error_10;
        }

        &:focus-within {
          background: $Peak !important;
          outline-color: $Error;
        }
      }
    }

    &_error {
      background: $Error_5;
    }

    &_disabled {
      background: $Input_Disable;
    }

    &_readonly {
      background: transparent;
      box-shadow: unset;
    }

    &_right-icon {
      padding-right: 8px;
    }

    &_small {
      height: 36px;
      padding-right: 0;
      padding-block: 0;
    }
  }

  &__input {
    @include body-1;

    background: unset;
    border: unset;
    outline: unset;
    flex-grow: 1;
    color: $Bottom;
    caret-color: $Primary;
    align-self: flex-end;

    &_error {
      caret-color: $Error;
    }

    &[disabled] {
      color: $Bottom_66;
    }

    &_readonly,
    &_readonly[disabled] {
      color: $Bottom;
    }

    &_no-label {
      align-self: center;
    }

    &:not(&_no-label) {
      &::placeholder {
        transition: color 0.2s ease;
        color: transparent;
      }

      &:focus {
        &::placeholder {
          color: $Button_Disable;
        }
      }
    }

    &_small {
      align-self: center;
      padding-block: 6px;
    }
  }

  &__label {
    $this: &;

    @include body-1;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: $Bottom_60;
    transition: all 0.3s ease;

    &_filled,
    .cdek-autocomplete__control:focus-within:not(.cdek-autocomplete__control_disabled) & {
      @include caption-1;

      top: 8px;
      transform: translateY(0);
    }

    .cdek-autocomplete__control:not(:focus-within) &_error#{$this}_filled {
      color: $Error;
    }

    &_small {
      @include body-1;

      &.cdek-autocomplete__label_filled,
      .cdek-autocomplete__control:focus-within:not(.cdek-autocomplete__control_disabled) & {
        @include caption-1;

        top: -22px;
        transform: translateX(-17px);

        &#{$this}_readonly {
          top: -11px;
          transform: translateX(0);
        }

        &#{$this}_error {
          color: $Error;
        }
      }
    }
  }

  &__tip {
    @include caption-1;

    padding-left: $padding-left;
    margin-top: 4px;
    color: $Bottom_66;

    min-height: 16px;

    :slotted(.tertiary) {
      color: $Tertiary;
    }

    :slotted(.attention) {
      color: $Attention;
    }

    .error,
    :slotted(.error) {
      color: $Error;
    }

    :slotted(.success) {
      color: $Success;
    }

    svg,
    :slotted(svg) {
      vertical-align: text-bottom;
      margin-right: 4px;
    }
  }

  @mixin right-icon {
    width: 36px;
    height: 36px;
    background: transparent;
    border: none;
    padding: 6px;
    outline: none;
    cursor: pointer;
  }

  &__arrow {
    stroke: $Primary;
    margin-right: 6px;
    transform: rotate(180deg);
    transition: transform 0.2s ease;

    &_open {
      stroke: $Peak;
      transform: rotate(0deg);
    }

    &_red {
      stroke: $Error;
    }

    &_grey {
      stroke: $Button_Disable;
    }
  }

  &__right-icon {
    :slotted(button) {
      @include right-icon;
    }

    @include slotted-svg-color($Primary);

    &_red {
      @include slotted-svg-color($Error);
    }

    &_grey {
      @include slotted-svg-color($Button_Disable);
    }

    &_white {
      @include slotted-svg-color($Peak);
    }
  }
}
</style>
