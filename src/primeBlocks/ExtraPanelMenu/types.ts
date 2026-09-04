import type { Component } from 'vue';
import type { ExtraMenuItemModel } from '../ExtraMenuItem/types';

export interface ExtraPanelMenuProps {
  model?: ExtraMenuItemModel[];
  multiple?: boolean;
  itemAs?: string | Component;
}
