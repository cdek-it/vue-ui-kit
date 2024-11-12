import type { InjectionKey } from 'vue';
export const FormServiceKey = Symbol() as InjectionKey<FormService>;

import type { FieldsT, ErrorsT, RulesT } from './types';
import FormServiceControl from './FormServiceControl';

export default class FormService {
  readonly fields: FieldsT = {};
  readonly errors: ErrorsT = {};

  onShowErrorsSubscribers: Function[] = [];

  /**
   * @param name - название поля
   * @param initialValue
   */
  registerField(name: string, initialValue: string) {
    this.fields[name] = initialValue;
  }

  /**
   * @param name - название поля
   * @param newValue
   */
  changeField(name: string, newValue: string) {
    this.fields[name] = newValue;
  }

  /**
   * @param name - название поля
   * @param validOrError - true если валидно, название валидатора, если нет
   */
  validateField(name: string, validOrError: true | string) {
    this.errors[name] = validOrError;
  }

  getIsFormValid() {
    for (const key of Object.getOwnPropertyNames(this.errors)) {
      if (typeof this.errors[key] === 'string') {
        return false;
      }
    }

    return true;
  }

  showErrors() {
    [...this.onShowErrorsSubscribers].forEach((cb) => cb());
  }

  subscribeOnShowErrors(callback: Function) {
    this.onShowErrorsSubscribers.push(callback);
  }

  getFieldService(...args: [string, RulesT]) {
    return new FormServiceControl(this, ...args);
  }

  trimForm() {
    Object.entries(this.fields).forEach(([key, value]) => {
      if (typeof value === 'string') {
        this.fields[key] = value.trim();
      }
    });
  }

  clearForm() {
    Object.keys(this.fields).forEach((key: string) => {
      this.changeField(key, '');
    });
  }
}
