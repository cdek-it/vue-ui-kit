<script lang="ts" setup>
import { computed } from 'vue';
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import { CdekDropdownItem, CdekDropdownBox } from '../cdek-dropdown/';
import type { IItemValue } from '../cdek-dropdown/CdekDropdown.types';
import ChevronUpIcon from './svg/chevron-up.svg?component';
import AlertTriangleIcon from './svg/alert-triangle.svg?component';
import BanIcon from './svg/ban.svg?component';
import CircleCheckIcon from './svg/circle-check.svg?component';
import InfoCircleIcon from './svg/info-circle.svg?component';

export type Primitive = string | number | boolean;

const props = withDefaults(
  defineProps<{
    /**
     * Обновляется при выборе из поля value выбранного из массива items элемента
     *
     * `string | number | boolean` - в случае, когда multiple = false
     *
     * `Array<string | number>` - в случае, когда multiple = true
     */
    modelValue: Primitive | Array<Primitive>;
    /**
     * Элементы выпадающего списка.
     * `Array<string | number> | Array<IItemValue>`
     * [Описание модели](/cdek-vue-ui-kit?path=/story/ui-kit-cdekdropdown--primary)
     */
    items: Array<IItemValue> | Array<Primitive>;
    label?: string;

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
    /**
     * Если true, то можно выбрань несколько вариантов из списка, в modelValue запишется массив значений
     */
    multiple?: boolean;
  }>(),
  {}
);

const itemsIsObject = computed(() => typeof props.items[0] === 'object');

const options = computed(() => {
  if (itemsIsObject.value) {
    return props.items as Array<IItemValue>;
  }

  return props.items.map(
    (item) => ({ value: item, title: item } as IItemValue)
  );
});

const isError = computed(() => typeof props.validRes === 'string');

const isUserEvent = computed(() => !props.disabled && !props.readonly);

const emit = defineEmits<{
  (e: 'update:modelValue', value: Primitive | Array<Primitive>): void;
  (e: 'select', item: IItemValue | Array<IItemValue>): void;
}>();

const value = computed({
  get() {
    if (props.multiple) {
      return options.value.filter((item) =>
        ((props.modelValue as Array<Primitive>) || []).includes(item.value)
      );
    }
    return (
      options.value.find((item) => props.modelValue === item.value) ||
      ({} as IItemValue)
    );
  },
  set(newValue) {
    emit('select', newValue);

    if (Array.isArray(newValue)) {
      emit(
        'update:modelValue',
        newValue.map((item) => item.value)
      );
      return;
    }
    emit('update:modelValue', newValue.value);
  },
});
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
            'cdek-select__control_small': small,
            'cdek-select__control_open': open,
          }"
        >
          <ListboxLabel
            v-if="label"
            class="cdek-select__label"
            :class="{
              'cdek-select__label_filled': Array.isArray(value)
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
              Array.isArray(value)
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
        <span class="error" v-show="!hideErrorMessage">{{ validRes }}</span>
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

      &#{$this}_error:not(&#{$this}_open) {
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
      cursor: default;
      background: $Input_Disable;
    }

    &_readonly {
      cursor: default;
      background: transparent;
      box-shadow: unset;
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

    .cdek-select__control:not(:focus-within)
      &_error#{$this}_filled:not(&#{$this}_open) {
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

  &__arrow {
    stroke: $Primary;
    margin-right: 6px;
    transform: rotate(180deg);
    transition: transform 0.2s ease;

    &_open {
      stroke: $Peak;
      transform: rotate(0deg);
    }

    &_red:not(&_open) {
      stroke: $Error;
    }

    &_grey {
      stroke: $Button_Disable;
    }
  }
}
</style>
