import {
  changeLocale,
  addMessages,
  changeDefaultLocale,
} from './services/Validators';

export * from './cdek-form';
export { default as CdekFormControl } from './cdek-form-control/CdekFormControl.vue';
export const formSettings = { changeLocale, addMessages, changeDefaultLocale };
