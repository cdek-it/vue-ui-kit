<script lang="ts" setup>
import { computed } from 'vue';
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue';
import BaseDropdownBox from '../base-dropdown/BaseDropdownBox.vue';
import BaseDropdownItem from '../base-dropdown/BaseDropdownItem.vue';
import type { IItemValue } from '../base-dropdown/BaseDropdown.types';
import ChevronUpIcon from './svg/chevron-up.svg?component';
import AlertTriangleIcon from './svg/alert-triangle.svg?component';
import BanIcon from './svg/ban.svg?component';
import CircleCheckIcon from './svg/circle-check.svg?component';
import InfoCircleIcon from './svg/info-circle.svg?component';

export type Primitive = string | number;

type Value = string | number;

export type GetValueFn = (item: IItemValue | Object) => Value;
export type GetTitleFn = (item: IItemValue | Object) => string;

const props = withDefaults(
  defineProps<{
    /**
     * Обновляется при выборе из поля value выбранного из массива items элемента
     *
     * `string | number` - в случае, когда multiple = false
     *
     * `Array<string | number>` - в случае, когда multiple = true
     */
    modelValue: Primitive | Array<Primitive>;
    /**
     * Элементы выпадающего списка.
     *
     * `Array<string | number> | Array<IItemValue> | Array<Object>`
     *
     * Подробнее о типе `IItemValue` в [документации](/?path=/docs/ui-kit-cdekselect-types--page)
     */
    items: Array<IItemValue> | Array<Primitive> | Array<Object>;
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
    /**
     * Кастомная функция для получения `value` из объектов
     */
    getValue?: GetValueFn;
    /**
     * Кастомная функция для получения `title` из объектов, используется для отображения в списке
     */
    getTitle?: GetTitleFn;
  }>(),
  {}
);

const getNewValue = (item: IItemValue | Primitive | Object) => {
  if (props.getValue) {
    return props.getValue(item);
  }

  if (typeof item === 'object' && 'value' in item) {
    return item.value;
  }

  return item;
};

const getNewTitle = (item: IItemValue | Primitive | Object) => {
  if (props.getTitle) {
    return props.getTitle(item);
  }

  if (typeof item === 'object' && 'title' in item) {
    return item.title;
  }

  return item;
};

const itemsIsObject = computed(() => typeof props.items[0] === 'object');

const options = computed(() => {
  if (itemsIsObject.value) {
    if (props.getValue || props.getTitle) {
      return props.items.map((item: IItemValue | Object, index: number) => {
        return {
          ...item,
          index,
          value: getNewValue(item),
          title: getNewTitle(item),
        };
      }) as Array<IItemValue>;
    }

    return props.items as Array<IItemValue>;
  }

  return props.items.map(
    (item, index) =>
      ({
        value: getNewValue(item),
        title: getNewTitle(item),
        index,
      } as IItemValue)
  );
});

const isError = computed(() => typeof props.validRes === 'string');

const isUserEvent = computed(() => !props.disabled && !props.readonly);

const emit = defineEmits<{
  (e: 'update:modelValue', value: Primitive | Array<Primitive>): void;
  /**
   * Выбранный элемент/элементы (в зависимости от `multiple`)
   *
   * В первом аргументе придет выбранный элемент с оригинального `items` без изменений
   */
  (
    e: 'select',
    item:
      | IItemValue
      | Array<IItemValue>
      | Object
      | Array<Object>
      | Primitive
      | Array<Primitive>
  ): void;
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
    if (Array.isArray(newValue)) {
      const selectedItems = newValue.map((item) =>
        typeof item.index === 'number' ? props.items[item.index] : item
      );
      emit('select', selectedItems);

      emit(
        'update:modelValue',
        newValue.map((item) => item.value)
      );
      return;
    }

    const selectedItem =
      typeof newValue.index === 'number'
        ? props.items[newValue.index]
        : newValue;
    emit('select', selectedItem);

    emit('update:modelValue', newValue.value);
  },
});

const isFilled = computed(() => {
  return Array.isArray(value.value)
    ? value.value.length > 0
    : 'value' in value.value;
});
</script>

<template>
  <div
    :class="[
      $style['prefix-select'],
      small && label ? $style['prefix-select_small'] : '',
    ]"
  >
    <Listbox
      v-model="value"
      :disabled="disabled || readonly"
      :multiple="multiple"
    >
      <ListboxButton as="div" v-slot="{ open }">
        <div
          :class="[
            $style['prefix-select__control'],
            isError ? $style['prefix-select__control_error'] : '',
            isUserEvent ? $style['prefix-select__control_user-event'] : '',
            disabled ? $style['prefix-select__control_disabled'] : '',
            readonly ? $style['prefix-select__control_readonly'] : '',
            small ? $style['prefix-select__control_small'] : '',
            open ? $style['prefix-select__control_open'] : '',
          ]"
        >
          <ListboxLabel
            v-if="label"
            :class="[
              $style['prefix-select__label'],
              isFilled ? $style['prefix-select__label_filled'] : '',
              isError ? $style['prefix-select__label_error'] : '',
              readonly ? $style['prefix-select__label_readonly'] : '',
              small ? $style['prefix-select__label_small'] : '',
              open ? $style['prefix-select__label_open'] : '',
            ]"
          >
            {{ label }}
          </ListboxLabel>
          <slot name="selectedOption" :value="value">
            <div
              :class="[
                $style['prefix-select__value'],
                isError ? $style['prefix-select__value_error'] : '',
                readonly ? $style['prefix-select__value_readonly'] : '',
                !label ? $style['prefix-select__value_no-label'] : '',
                small ? $style['prefix-select__value_small'] : '',
                open ? $style['prefix-select__value_open'] : '',
              ]"
            >
              {{
                Array.isArray(value)
                  ? value.map((item) => item.title).join(', ')
                  : value.title
              }}
            </div>
          </slot>

          <ChevronUpIcon
            v-if="!readonly"
            :class="[
              $style['prefix-select__arrow'],
              isError ? $style['prefix-select__arrow_red'] : '',
              disabled ? $style['prefix-select__arrow_grey'] : '',
              open ? $style['prefix-select__arrow_open'] : '',
            ]"
          />
        </div>
      </ListboxButton>
      <ListboxOptions :as="BaseDropdownBox">
        <ListboxOption
          v-for="item in options"
          v-slot="{ selected, active }"
          :key="item.value"
          :value="item"
          :disabled="item.disabled"
          as="template"
        >
          <slot name="option" :option="item">
            <BaseDropdownItem
              :value="item"
              :disabled="item.disabled"
              :selected="selected"
              :active="active"
            >
              {{ item.title }}
            </BaseDropdownItem>
          </slot>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
    <div :class="$style['prefix-select__tip']">
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

<style lang="scss" scoped module>
@mixin slotted-svg-color($color) {
  :slotted(svg) {
    path {
      stroke: $color;
    }
  }
}

.prefix-select {
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
    box-shadow: inset 0 1px 2px rgba(0, 33, 52, 0.05);
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

    .prefix-select__control:not(:focus-within)
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
