import type { HintedString } from '@primevue/core';
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

export interface ExtraToastMessageOptions extends ToastMessageOptions {
  severity?: HintedString<ExtraToastMessageIconValues>;
  icon?: string;
}

export function useExtraToast() {
  const toast = useToast();

  const add = (config: ExtraToastMessageOptions) => {
    const severity = config.severity || 'info';
    const icon: string | ExtraToastMessageIconValues = config?.icon || severity;

    toast.add({
      ...config,
      closable: config?.closable || false,
      // @ts-ignore
      icon,
    });
  };

  return {
    add,
    remove: toast.remove,
    removeGroup: toast.removeGroup,
    removeAllGroups: toast.removeAllGroups,
  };
}
