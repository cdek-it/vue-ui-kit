import { useToast } from 'primevue/usetoast';
import type { ToastMessageOptions } from 'primevue/toast';

export const ExtraToastMessageIcon = {
  success: 'success',
  info: 'info',
  warn: 'warn',
  error: 'error',
} as const;

export type ExtraToastMessageIconValues =
  (typeof ExtraToastMessageIcon)[keyof typeof ExtraToastMessageIcon];

export type ExtraToastMessageSeverity =
  | 'success'
  | 'info'
  | 'warn'
  | 'error'
  | 'secondary'
  | 'contrast';

export interface ExtraToastMessageOptions {
  severity?: ExtraToastMessageSeverity;
  summary?: string;
  detail?: unknown;
  closable?: boolean;
  life?: number;
  group?: string;
  styleClass?: unknown;
  contentStyleClass?: unknown;
  icon?: string;
}

type ExtraToastPayload = ToastMessageOptions & { icon?: string };

export function useExtraToast() {
  const toast = useToast();

  const add = (config: ExtraToastMessageOptions) => {
    const severity = config.severity || 'info';
    const icon: string | ExtraToastMessageIconValues = config?.icon || severity;

    const payload: ExtraToastPayload = {
      ...config,
      closable: config?.closable ?? false,
      icon,
    };

    toast.add(payload);
  };

  return {
    add,
    remove: toast.remove,
    removeGroup: toast.removeGroup,
    removeAllGroups: toast.removeAllGroups,
  };
}
