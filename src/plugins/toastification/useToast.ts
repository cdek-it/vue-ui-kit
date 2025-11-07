import { useToast, POSITION, TYPE } from '../toastification/lib';
import BaseToaster from '../../components/base-toaster/BaseToaster.vue';
import type { ToasterProps } from '../../components/base-toaster/BaseToaster.vue';
import type { ToasterSettings } from './lib/types';

type ToastAliasProps = ToasterProps | string;
export default function useCustomToast() {
  const toast = useToast();

  function toastAlias(
    props: ToastAliasProps,
    settings: ToasterSettings = {},
    type: 'info' | 'success' | 'error' = 'info'
  ) {
    const isMobile = window?.matchMedia('(max-width: 768px)');

    let position = isMobile.matches
      ? POSITION.BOTTOM_CENTER
      : POSITION.TOP_RIGHT;

    if (settings.position) {
      position = settings.position;
    }

    if (typeof props === 'string') {
      const title = props;
      props = {
        title,
      } as ToasterProps;
    }

    props.type || (props.type = type);

    return toast(
      { component: BaseToaster, props },
      { position, timeout: settings.timeout || 5000 }
    );
  }

  type ArgsT = [ToastAliasProps, ToasterSettings?];

  function customToast(...args: ArgsT) {
    return toastAlias(...args);
  }

  customToast.info = function customToastInfo(...args: ArgsT) {
    return toastAlias(args[0], args[1], TYPE.INFO);
  };

  customToast.success = function customToastSuccess(...args: ArgsT) {
    return toastAlias(args[0], args[1], TYPE.SUCCESS);
  };

  customToast.error = function customToastError(...args: ArgsT) {
    return toastAlias(args[0], args[1], TYPE.ERROR);
  };

  customToast.dismiss = toast.dismiss;
  customToast.clear = toast.clear;

  customToast.update = function updateCustomToast(
    id: any,
    settings: ToasterProps
  ) {
    toast.update(id, { content: { component: BaseToaster, props: settings } });
  };

  return customToast;
}
