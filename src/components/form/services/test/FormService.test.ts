import { describe, test, expect, vi } from 'vitest';
import FormService from '../FormService';
import FormServiceControl from '../FormServiceControl';

describe('FormService:', () => {
  test('Регистрирует поля с переданными значениями', () => {
    const service = new FormService();
    service.registerField('name', 'Jane');
    service.registerField('surname', 'Doe');
    expect(service.fields).toEqual({ name: 'Jane', surname: 'Doe' });
  });
  test('Меняет значение переданного поля на новое значение', () => {
    const service = new FormService();
    service.registerField('name', 'Jane');
    service.registerField('surname', 'Doe');
    service.changeField('name', 'John');
    expect(service.fields).toEqual({ name: 'John', surname: 'Doe' });
  });
  test('Сохраняет название валидатора, который вызвал ошибку', () => {
    const service = new FormService();
    service.registerField('name', 'Jane');
    service.validateField('name', 'digits');
    expect(service.errors).toEqual({ name: 'digits' });
  });
  test('Вызывает callback, когда триггерится submit', () => {
    const mockCallback = vi.fn();
    const service = new FormService();
    service.subscribeOnShowErrors(mockCallback);
    service.showErrors();
    expect(mockCallback).toBeCalledTimes(1);
  });
  test('Возвращает FormServiceControl для конкретного поля', () => {
    const service = new FormService();
    service.registerField('name', 'Jane');
    const control = service.getFieldService('name', 'required');
    expect(control).toBeInstanceOf(FormServiceControl);
    expect(control.formService).toEqual(service);
    expect(control.fieldName).toBe('name');
    expect(control.rules).toBeTypeOf('object');
    expect((control.rules as any).required).toBeTypeOf('function');
  });
  test('Очищает поля, когда вызван clearForm', () => {
    const service = new FormService();
    service.registerField('name', 'Jane');
    service.registerField('surname', 'Doe');
    service.clearForm();
    expect(service.fields).toEqual({ name: '', surname: '' });
  });
  test('getIsFormValid работает корректно', () => {
    const service = new FormService();
    service.registerField('name', 'Jane');
    service.validateField('name', 'digits');
    expect(service.getIsFormValid()).toBeFalsy();
    service.validateField('name', true);
    expect(service.getIsFormValid()).toBeTruthy();
  });
});
