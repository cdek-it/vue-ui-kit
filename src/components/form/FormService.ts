import type { InjectionKey } from 'vue';
export const FormServiceKey = Symbol() as InjectionKey<FormService>;

export type FieldsT = { [key: string]: string };
export type ErrorsT = { [key: string]: true | string };

export default class FormService {
  readonly fields: FieldsT = {};
  readonly errors: ErrorsT = {};

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
}
