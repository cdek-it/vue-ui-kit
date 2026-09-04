export type ExtraToastWidth = 'sm' | 'md' | 'lg' | 'xlg';

export type ExtraToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'center';

export interface ExtraToastProps {
  group?: string;
  position?: ExtraToastPosition;
  width?: ExtraToastWidth;
}
