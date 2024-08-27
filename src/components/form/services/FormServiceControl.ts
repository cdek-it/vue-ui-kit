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
    this.parseRules(this.rules);
  }

  /**
   * Переводит RulesT в RulesObjectT, чтобы валидаторы всегда были объектом
   */
  parseRules(rules: RulesT) {
    this.rules = getValidators().parseRules(rules);
  }

  /**
   * Запускается после монтирования в компонент, чтобы
   * реактивность нормально реагировала
   */
  init(initialValue: string) {
    this.register(initialValue || '');
    this.formService.subscribeOnShowErrors(this.showError.bind(this));
    getValidators().subscribeOnLanguageChange(
      this.changeErrorMessage.bind(this)
    );
  }

  /**
   * Регистрация поля в форме
   */
  register(initialValue: string) {
    this.formService.registerField(this.fieldName, initialValue);
    this.validateField();
  }

  /**
   * Обновление валидаторов при изменении
   */
  updateValidators(rules: RulesT) {
    this.parseRules(rules);
    this.validateField();
    this.changeErrorMessage();
  }

  /**
   * Изменение значения в поле
   */
  change(newValue: string) {
    this.formService.changeField(this.fieldName, newValue);
    this.validateField();
    this.showError();
  }

  /**
   * Показать ошибку в форме
   */
  showError() {
    this.error = this.errorMessage;
  }

  /**
   * Изменить сообщение об ошибке, если оно показывается сейчас
   *
   * Необходимо после смены языка (чтобы показать сообщение на другом языке)
   * и после смены валидаторов (другие валидаторы = другие ошибки)
   */
  changeErrorMessage() {
    this.validateField();

    if (this.error) {
      this.showError();
    }
  }

  /**
   * Текущее значение поля, хранится в форме
   */
  get value() {
    return this.formService.fields[this.fieldName];
  }

  isValid: ValidateResultT = true;

  /**
   * Валидно ли значение с учетом текущих валидаторов
   */
  validateField() {
    if (!this.rules) {
      this.saveValidation(true);

      return;
    }

    for (const key of Object.getOwnPropertyNames(this.rules)) {
      const validOrError = (this.rules as any)[key](this.value);

      if (typeof validOrError === 'string') {
        this.saveValidation({ key, message: validOrError });

        return;
      }

      if (!validOrError) {
        this.saveValidation({ key });

        return;
      }
    }

    this.saveValidation(true);
  }

  saveValidation(result: ValidateResultT) {
    this.isValid = result;
    this.formService.validateField(this.fieldName, this.errorKey);
  }

  /**
   * Сообщение об ошибке
   */
  get errorMessage(): true | string {
    if (typeof this.isValid === 'boolean') {
      return this.isValid;
    }

    return this.isValid?.message || this.isValid.key;
  }

  /**
   * Название валидатора, который не прошел успешно
   */
  get errorKey(): true | string {
    if (typeof this.isValid === 'boolean') {
      return this.isValid;
    }

    return this.isValid.key;
  }
}
