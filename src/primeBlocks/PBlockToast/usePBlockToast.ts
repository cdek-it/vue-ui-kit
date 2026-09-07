import type { HintedString } from '@primevue/core';
import { useToast } from 'primevue/usetoast';
import type { ToastMessageOptions } from 'primevue/toast';

export const PBlockToastMessageIcon = {
  success: 'success',
  info: 'info',
  warn: 'warn',
  error: 'error',
} as const;

export type PBlockToastMessageIconValues =
  (typeof PBlockToastMessageIcon)[keyof typeof PBlockToastMessageIcon];

export interface PBlockToastMessageOptions extends ToastMessageOptions {
  severity?: HintedString<PBlockToastMessageIconValues>;
  icon?: string;
}

export function usePBlockToast() {
  const toast = useToast();

  const add = (config: PBlockToastMessageOptions) => {
    const severity = config.severity || 'info';
    const icon: string | PBlockToastMessageIconValues =
      config?.icon || severity;

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
