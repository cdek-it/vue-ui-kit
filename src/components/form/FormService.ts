import type { InjectionKey } from 'vue';
export const FormServiceKey = Symbol() as InjectionKey<FormService>;

export type FieldsT = { [key: string]: string };
export type ErrorsT = { [key: string]: true | string };

class FormServiceControl {
  constructor(public formService: FormService, public fieldName: string) {}

  register(initialValue: string) {
    this.formService.registerField(this.fieldName, initialValue);
  }

  change(newValue: string) {
    this.formService.changeField(this.fieldName, newValue);
  }

  validate(validOrError: true | string) {
    this.formService.validateField(this.fieldName, validOrError);
  }

  get value() {
    return this.formService.fields[this.fieldName];
  }
}

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

  getFieldService(name: string) {
    return new FormServiceControl(this, name);
  }
}
