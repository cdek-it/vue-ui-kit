export type ExtraToggleButtonSize = 'small' | 'base' | 'large' | 'xlarge';

export interface ExtraToggleButtonProps {
  modelValue?: boolean;
  onIcon?: string;
  offIcon?: string;
  onLabel?: string;
  offLabel?: string;
  baseIcon?: string;
  baseLabel?: string;
  size?: ExtraToggleButtonSize;
  iconPos?: 'left' | 'right';
  iconOnly?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}
