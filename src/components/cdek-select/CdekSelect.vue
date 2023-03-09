<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import type { Component } from 'vue';
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import { CdekDropdownItem, CdekDropdownBox } from '../cdek-dropdown/';
import ChevronUpIcon from './svg/chevron-up.svg?component';
import AlertTriangleIcon from './svg/alert-triangle.svg?component';
import BanIcon from './svg/ban.svg?component';
import CircleCheckIcon from './svg/circle-check.svg?component';
import InfoCircleIcon from './svg/info-circle.svg?component';

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
    modelValue: Primitive | Array<Primitive>;
    items: Array<ISelectOption> | Array<Primitive>;
    label?: string;
    validRes?: true | string;
    disabled?: boolean;
    readonly?: boolean;
    small?: boolean;
    multiple?: boolean;
  }>(),
  {}
);

const itemsIsObject = computed(() => typeof props.items[0] === 'object');

const options = computed(() => {
  if (itemsIsObject.value) {
    return props.items as Array<ISelectOption>;
  }

  return props.items.map(
    (item) => ({ value: item, title: item } as ISelectOption)
  );
});

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
</script>

<template>
  <div
    class="cdek-select"
    :class="{
      'cdek-select_small': small && label,
    }"
  >
    <Listbox
      v-model="value"
      :disabled="disabled || readonly"
      :multiple="multiple"
    >
      <ListboxButton as="div" v-slot="{ open }">
        <div
          class="cdek-select__control"
          :class="{
            'cdek-select__control_error': isError,
            'cdek-select__control_user-event': isUserEvent,
            'cdek-select__control_disabled': disabled,
            'cdek-select__control_readonly': readonly,
            'cdek-select__control_right-icon': hasRightIcon,
            'cdek-select__control_small': small,
            'cdek-select__control_open': open,
          }"
        >
          <ListboxLabel
            v-if="label"
            class="cdek-select__label"
            :class="{
              'cdek-select__label_filled': multiple
                ? value.length > 0
                : Boolean(value.value),
              'cdek-select__label_error': isError,
              'cdek-select__label_readonly': readonly,
              'cdek-select__label_small': small,
              'cdek-select__label_open': open,
            }"
          >
            {{ label }}
          </ListboxLabel>
          <div
            class="cdek-select__value"
            :class="{
              'cdek-select__value_error': isError,
              'cdek-select__value_readonly': readonly,
              'cdek-select__value_no-label': !label,
              'cdek-select__value_small': small,
              'cdek-select__value_open': open,
            }"
          >
            {{
              props.multiple
                ? value.map((item) => item.title).join(', ')
                : value.title
            }}
          </div>

          <ChevronUpIcon
            class="cdek-select__arrow"
            v-if="!readonly"
            :class="{
              'cdek-select__arrow_red': isError,
              'cdek-select__arrow_grey': disabled,
              'cdek-select__arrow_open': open,
            }"
          />
        </div>
      </ListboxButton>
      <ListboxOptions :as="CdekDropdownBox">
        <ListboxOption
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
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
    <div class="cdek-select__tip">
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

.cdek-select {
  $padding-left: 16px;
  position: relative;

  &_small {
    padding-top: 20px;
  }

  &__control {
    $this: &;
    $outline-width: 2px;

    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    height: 56px;
    width: 100%;
    border: none;

    outline: solid $outline-width transparent;
    padding-inline: calc(#{$padding-left} - #{$outline-width});
    padding-block: 6px;

    box-sizing: border-box;
    background: $Surface_Neutral;
    box-shadow: inset 0px 1px 2px rgba(0, 33, 52, 0.05);
    border-radius: 8px;
    transition: background-color 0.3s ease, outline-color 0.3s ease;

    &_user-event {
      @include media-hover {
        background: $Primary_10;
      }

      &#{$this}_error {
        @include media-hover {
          background: $Error_10;
        }
      }

      &#{$this}_open {
        background: $Primary;
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

  &__value {
    @include body-1;

    background: unset;
    border: unset;
    outline: unset;
    flex-grow: 1;
    color: $Bottom;
    caret-color: $Primary;
    align-self: flex-end;
    transition: color 0.3s ease;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

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

    &_open {
      color: $Peak;
    }

    &_no-label {
      align-self: center;
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

    &_filled {
      @include caption-1;

      top: 8px;
      transform: translateY(0);
    }

    .cdek-select__control:not(:focus-within) &_error#{$this}_filled {
      color: $Error;
    }

    &_open:not(&_small) {
      color: $Peak;
    }

    &_small {
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
