import { provide, ref, onMounted } from 'vue';
import type { Ref } from 'vue';

type CdekFormEvent = 'register-field' | 'validate-field' | 'change-field';

type RegisterOptions = { name: string; initialValue: string };
export type RegisterCallback = (options: RegisterOptions) => void;

type ValidateOptions = { name: string; validOrError: boolean | string };
export type ValidateCallback = (options: ValidateOptions) => void;

type ChangeOptions = { name: string; newValue: string };
export type ChangeCallback = (options: ChangeOptions) => void;

type CdekFormCallback = RegisterCallback | ValidateCallback | ChangeCallback;

export type useFormOptions = {
  'register-field': RegisterCallback;
  'validate-field': ValidateCallback;
  'change-field': ChangeCallback;
};

/**
 * @param cdekForm - ref с формы
 * @param callbacks - обработчики событий с полей
 */
export function useForm(
  cdekForm: Ref<null | HTMLElement>,
  callbacks: useFormOptions
) {
  const mounted = ref(false);

  provide('cdekFormRef', cdekForm);
  provide('cdekFormMounted', mounted);

  const addListenerOnForm = (
    eventName: CdekFormEvent,
    callback: CdekFormCallback
  ) => {
    cdekForm.value?.addEventListener(
      eventName,
      (e: any) => {
        e.stopPropagation();
        callback(e.detail);
      },
      false
    );
  };

  onMounted(() => {
    for (const key of Object.getOwnPropertyNames(
      callbacks
    ) as CdekFormEvent[]) {
      addListenerOnForm(key, callbacks[key]);
    }
    mounted.value = true;
  });

  return { cdekForm, mounted, addListenerOnForm };
}
