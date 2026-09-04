import type { Component } from 'vue';
import type { ExtraMenuItemModel } from '../ExtraMenuItem/types';

export interface ExtraMegaMenuProps {
  model?: ExtraMenuItemModel[];
  orientation?: 'horizontal' | 'vertical';
  itemAs?: string | Component;
}
