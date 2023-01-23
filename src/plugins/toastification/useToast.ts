import { useToast, POSITION, TYPE } from 'vue-toastification';
import { CdekToaster } from '@/components/cdek-toaster';
import type { ToasterProps } from '@/components/cdek-toaster';

export default function useCustomToast() {
  const toast = useToast();

  function toastAlias(
    settings: ToasterProps,
    type: 'info' | 'success' | 'error' = 'info'
  ) {
    const isMobile = window.matchMedia('(max-width: 768px)');
    const position = isMobile.matches
      ? POSITION.BOTTOM_CENTER
      : POSITION.TOP_RIGHT;

    settings.type || (settings.type = type);

    return toast({ component: CdekToaster, props: settings }, { position });
  }

  type ArgsT = [ToasterProps];

  function customToast(...args: ArgsT) {
    return toastAlias(...args);
  }

  customToast.info = function customToastInfo(...args: ArgsT) {
    return toastAlias(...args, TYPE.INFO);
  };

  customToast.success = function customToastSuccess(...args: ArgsT) {
    return toastAlias(...args, TYPE.SUCCESS);
  };

  customToast.error = function customToastSuccess(...args: ArgsT) {
    return toastAlias(...args, TYPE.ERROR);
  };

  customToast.dismiss = toast.dismiss;
  customToast.clear = toast.clear;

  customToast.update = function updateCustomToast(
    id: any,
    settings: ToasterProps
  ) {
    toast.update(id, { content: { component: CdekToaster, props: settings } });
  };

  return customToast;
}
