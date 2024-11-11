<script lang="ts" setup>
import { computed, useSlots } from 'vue';
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

export type Primitive = string | number | boolean;

type Value = string | number;

export type GetValueFn = (item: any) => Value;
export type GetTitleFn = (item: any) => string;

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
    items: Array<IItemValue> | Array<Primitive> | Array<any>;
    label?: string;

    /**
     * `true` - валидация пройдена, ошибку показывать не надо
     *
     * `string` - текст ошибки, ошибка показывается
     */
    validRes?: true | string;
    /**
     * `true` - место под ошибку **не** зарезервировано, текст ошибки **не** будет показываться, даже если она есть
     *
     * `false` - место под ошибку зарезервировано, текст ошибки будет показываться
     *
     * более приоритетный параметр, чем `showErrorIfExist`
     */
    hideErrorMessage?: boolean;
    /**
     * `true` - место под ошибку **не** зарезервировано, текст ошибки будет показываться
     *
     * `false` - место под ошибку зарезервировано, текст ошибки будет показываться
     */
    showErrorIfExist?: boolean;
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
  { hideErrorMessage: false, showErrorIfExist: false }
);

const getNewValue = (item: IItemValue | Primitive) => {
  if (props.getValue) {
    return props.getValue(item);
  }

  if (typeof item === 'object' && item.value) {
    return item.value;
  }

  return item;
};

const getNewTitle = (item: IItemValue | Primitive) => {
  if (props.getTitle) {
    return props.getTitle(item);
  }

  if (typeof item === 'object' && item.title) {
    return item.title;
  }

  return item;
};

const itemsIsObject = computed(() => typeof props.items[0] === 'object');
const options = computed(() => {
  if (itemsIsObject.value) {
    if (props.getValue || props.getTitle) {
      return props.items.map((item: IItemValue | Primitive) => {
        return Object.assign(item, {
          value: getNewValue(item),
          title: getNewTitle(item),
        });
      }) as Array<IItemValue>;
    }

    return props.items as Array<IItemValue>;
  }

  return props.items.map(
    (item) =>
      ({
        value: getNewValue(item),
        title: getNewTitle(item),
      } as IItemValue)
  );
});

const isError = computed(() => typeof props.validRes === 'string');

const slots = useSlots();
const hasTip = computed(() => !!slots['tip']);

const isReservedTipSpace = computed(() => {
  if (props.hideErrorMessage) {
    // показываем блок только если есть подсказка
    return hasTip.value;
  }

  if (props.showErrorIfExist) {
    // показываем блок, если есть подсказка или ошибка
    return hasTip.value || isError.value;
  }

  // по умолчанию резервируем место под ошибку
  return true;
});

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
              (Array.isArray(value) && value.length > 0) || Boolean((value as any).value)
                ? $style['prefix-select__label_filled']
                : '',
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
    <div :class="$style['prefix-select__tip']" v-if="isReservedTipSpace">
      <template v-if="isError && !hideErrorMessage">
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
