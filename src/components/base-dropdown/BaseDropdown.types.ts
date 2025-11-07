import type { Component } from 'vue';

export interface IItemValue {
  /**
   * Индекс элемента в оригинальном массиве `items`
   */
  index?: number;
  value: string | number;
  title: string | number;
  icon?: Component;
  disabled?: boolean;
  color?: string;
  [props: string]: any;
}

export type Primitive = string | number | boolean;
