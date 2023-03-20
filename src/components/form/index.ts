import {
  changeLocale,
  addMessages,
  changeDefaultLocale,
} from './services/Validators';

export { default as CdekForm } from './cdek-form/CdekForm.vue';
export { default as CdekFormControl } from './cdek-form-control/CdekFormControl.vue';
export const formSettings = { changeLocale, addMessages, changeDefaultLocale };
