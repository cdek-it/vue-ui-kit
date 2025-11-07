import {
  changeLocale,
  addMessages,
  changeDefaultLocale,
} from './services/Validators';

export * from './base-form';
export * from './base-form-control';
export const formSettings = { changeLocale, addMessages, changeDefaultLocale };
