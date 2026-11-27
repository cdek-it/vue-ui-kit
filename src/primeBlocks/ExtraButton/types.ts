export interface ExtraButtonProps {
  label?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text' | 'link';
  severity?: 'base' | 'danger' | 'warning' | 'success' | 'info';
  size?: 'small' | 'base' | 'large' | 'xlarge';
  rounded?: boolean;
  fluid?: boolean;
  disabled?: boolean;
  loading?: boolean;
}
