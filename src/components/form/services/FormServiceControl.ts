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
    this.formService.subscribeOnSubmit(this.showError.bind(this));
    getValidators().subscribeOnLanguageChange(
      this.changeErrorMessageIfShowed.bind(this)
    );
  }

  /**
   * Регистрация поля в форме
   */
  register(initialValue: string) {
    this.formService.registerField(this.fieldName, initialValue);
    this.saveValidation();
  }

  /**
   * Обновление валидаторов при изменении
   */
  updateValidators(rules: RulesT) {
    this.parseRules(rules);
    this.saveValidation();
    this.changeErrorMessageIfShowed();
  }

  /**
   * Изменение значения в поле
   */
  change(newValue: string) {
    this.formService.changeField(this.fieldName, newValue);
    this.saveValidation();
    this.showError();
  }

  /**
   * Сохранение результата валидации форме
   *
   * Сохранение и показывание ошибки - это разные операции
   * В форме всегда хранится актуальная информация по валидации, но
   * она не всегда показывается в форме
   *
   * На данный момент механизм показа ошибки - после первого изменения
   */
  saveValidation() {
    this.formService.validateField(this.fieldName, this.errorKey);
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
  changeErrorMessageIfShowed() {
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

  /**
   * Валидно ли значение с учетом текущих валидаторов
   */
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
