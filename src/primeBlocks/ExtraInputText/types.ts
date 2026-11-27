export type ExtraInputTextLabelPosition = 'default' | 'float';

export type ExtraInputTextSize = 'sm' | 'base' | 'lg' | 'xlg';

// Публичный API обёртки.
export interface ExtraInputTextSpecProps {
  placeholder?: string;
  label?: string;
  labelPosition?: ExtraInputTextLabelPosition;
  clearable?: boolean;
  caption?: string;
  info?: string;
  size?: ExtraInputTextSize;
  type?: 'text' | 'password';
}

// Расширение для Vue-реализации (v-model + UI state props)
export interface ExtraInputTextProps extends ExtraInputTextSpecProps {
  modelValue?: string;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  required?: boolean;
  fluid?: boolean;
}
