import type { Component } from 'vue';

export interface IItemValue {
  value: string | number;
  title: string | number;
  icon?: Component;
  disabled?: boolean;
  color?: string;
  [props: string]: any;
}

export type Primitive = string | number | boolean;
