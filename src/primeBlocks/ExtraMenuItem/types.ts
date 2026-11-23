import type { Component } from 'vue';

export interface ExtraMenuItemModel {
  label?: string | (() => string);
  icon?: string;
  url?: string;
  target?: string;
  items?: ExtraMenuItemModel[] | ExtraMenuItemModel[][];
  disabled?: boolean;
  visible?: boolean;
}

export interface ExtraMenuItemProps extends ExtraMenuItemModel {
  description?: string;
  badge?: string;
  as?: string | Component;
  root?: boolean;
  // TODO(spec): перенести expanded в исходную спецификацию ExtraMenuItem.
  expanded?: boolean;
}
