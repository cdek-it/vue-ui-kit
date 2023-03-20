import type FormService from './FormService';
import type { RulesT, ValidateResultT } from './types';
import { getValidators } from './Validators';

export default class FormServiceControl {
  error?: true | string;

  constructor(
    public formService: FormService,
    public fieldName: string,
    public rules?: RulesT
  ) {
    this.rules = getValidators().parseRules(this.rules);
  }

  init() {
    this.register('');
    this.formService.subscribeOnSubmit(this.showError.bind(this));
    getValidators().subscribeOnLanguageChange(this.showError.bind(this));
  }

  register(initialValue: string) {
    this.formService.registerField(this.fieldName, initialValue);
    this.saveValidation(this.errorKey);
  }

  change(newValue: string) {
    this.formService.changeField(this.fieldName, newValue);
    this.saveValidation(this.errorKey);
    this.showError();
  }

  saveValidation(validOrError: true | string) {
    this.formService.validateField(this.fieldName, validOrError);
  }

  showError() {
    this.error = this.errorMessage;
  }

  get value() {
    return this.formService.fields[this.fieldName];
  }

  get isValid(): ValidateResultT {
    if (!this.rules) {
      return true;
    }

    for (const key of Object.getOwnPropertyNames(this.rules)) {
      const validOrError = (this.rules as any)[key](this.value);

      if (typeof validOrError === 'string') {
        return { key, message: validOrError };
      }

      if (!validOrError) {
        return { key };
      }
    }

    return true;
  }

  get errorMessage(): true | string {
    if (typeof this.isValid === 'boolean') {
      return this.isValid;
    }

    return this.isValid?.message || this.isValid.key;
  }

  get errorKey(): true | string {
    if (typeof this.isValid === 'boolean') {
      return this.isValid;
    }

    return this.isValid.key;
  }
}
