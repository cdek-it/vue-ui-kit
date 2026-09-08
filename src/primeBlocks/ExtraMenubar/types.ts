import type { Component } from 'vue';
import type { ExtraMenuItemModel } from '../ExtraMenuItem/types';

export interface ExtraMenubarProps {
  model?: ExtraMenuItemModel[];
  itemAs?: string | Component;
}
