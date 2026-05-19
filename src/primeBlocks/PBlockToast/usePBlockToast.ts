import type { HintedString } from '@primevue/core';
import { useToast } from 'primevue/usetoast';
import type { ToastMessageOptions } from 'primevue/toast';

export const PBlockToastMessageIcon = {
  success: 'ti-circle-check',
  info: 'ti-info-circle',
  warn: 'ti-alert-triangle',
  error: 'ti-alert-circle',
} as const;

type PBlockToastMessageIconClass =
  (typeof PBlockToastMessageIcon)[keyof typeof PBlockToastMessageIcon];

export interface PBlockToastMessageOptions extends ToastMessageOptions {
  severity?: HintedString<'success' | 'info' | 'warn' | 'error'>;
  icon?: PBlockToastMessageIconClass;
}

export function usePBlockToast() {
  const toast = useToast();

  const add = (config: PBlockToastMessageOptions) => {
    const severity = config.severity || 'info';
    const icon: PBlockToastMessageIconClass =
      PBlockToastMessageIcon[severity as keyof typeof PBlockToastMessageIcon] ||
      PBlockToastMessageIcon.info;

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
