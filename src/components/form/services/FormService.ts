import type { InjectionKey } from 'vue';
export const FormServiceKey = Symbol() as InjectionKey<FormService>;

import type { FieldsT, ErrorsT, RulesT } from './types';
import FormServiceControl from './FormServiceControl';

export default class FormService {
  readonly fields: FieldsT = {};
  readonly errors: ErrorsT = {};

  submitSubscribers: Function[] = [];

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

  triggerSubmit() {
    for (const cb of this.submitSubscribers) {
      cb();
    }
  }

  subscribeOnSubmit(callback: Function) {
    this.submitSubscribers.push(callback);
  }

  getFieldService(...args: [string, RulesT]) {
    return new FormServiceControl(this, ...args);
  }
}
