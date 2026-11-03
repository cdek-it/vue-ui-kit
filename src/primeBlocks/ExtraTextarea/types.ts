export type ExtraTextareaLabelPosition = 'default' | 'float' | 'left';

export type ExtraTextareaSize = 'sm' | 'base' | 'lg';

// Spec-first публичный API (textarea spec)
export interface ExtraTextareaSpecProps {
  placeholder?: string;
  label?: string;
  labelPosition?: ExtraTextareaLabelPosition;
  caption?: string;
  info?: string;
  size?: ExtraTextareaSize;
  autoResize?: boolean;
  resize?: 'none' | 'vertical';
}

// Расширение для Vue-реализации (v-model + UI state props)
export interface ExtraTextareaProps extends ExtraTextareaSpecProps {
  modelValue?: string;
  rows?: number;
  cols?: number;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  required?: boolean;
  fluid?: boolean;
}
