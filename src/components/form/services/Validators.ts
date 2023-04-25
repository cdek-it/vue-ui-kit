import Multitone, { getInstanceFactory } from '../../../services/Multitone';
import type { RulesT } from './types';

import { alpha, required, email } from '@vee-validate/rules';

type MessagesT = { default: string; [locale: string]: string };
const messages: {
  [validator: string]: MessagesT;
} = {
  alpha: {
    default: 'Доступны только буквы',
    ru: 'Доступны только буквы',
  },
  required: {
    default: 'Обязательное поле',
    ru: 'Обязательное поле',
  },
  email: {
    default: 'Введите корректный email',
    ru: 'Введите корректный email',
  },
};

type ValidatorsObj = { [validator: string]: (val: string) => true | string };

class Validators extends Multitone {
  locale = 'ru';
  changeLocaleCallbacks: Array<() => void> = [];

  vd: ValidatorsObj = {
    alpha: this.withMessage.bind(this, alpha, 'alpha'),
    required: this.withMessage.bind(this, required, 'required'),
    email: this.withMessage.bind(this, email, 'email'),
  };

  withMessage(
    validator: any,
    messageKey: string,
    value: unknown
  ): true | string {
    const isValid = validator(value, { locale: this.locale });

    return isValid
      ? true
      : messages[messageKey][this.locale] || messages[messageKey].default;
  }

  parseRules(rules: RulesT) {
    const resultRules: ValidatorsObj = {};

    if (typeof rules === 'string') {
      const ruleNames = rules.split('|');
      for (const rn of ruleNames) {
        if (this.vd[rn]) {
          resultRules[rn] = this.vd[rn];
        }
      }
    }

    if (typeof rules === 'object') {
      return rules;
    }

    return resultRules;
  }

  subscribeOnLanguageChange(clb: () => void) {
    this.changeLocaleCallbacks.push(clb);
  }

  triggerLanguageChange() {
    for (const clb of this.changeLocaleCallbacks) {
      clb();
    }
  }
}

export const getValidators = getInstanceFactory<Validators>(Validators);

type ExtraMessagesT = { [locale: string]: string };
/**
 * Добавление переводов для глобальных валидаторов
 *
 * @param key - название валидатора
 * @param extraMessages - сообщения (для нового валидатора обязательно добавить default значение)
 */
export const addMessages = (
  key: string,
  extraMessages: ExtraMessagesT | MessagesT
) => {
  if (messages[key]) {
    messages[key] = { ...messages[key], ...extraMessages };
  } else {
    messages[key] = extraMessages as MessagesT;
  }
};

export const changeLocale = (locale: string) => {
  const validatorsService = getValidators();
  validatorsService.locale = locale;
  validatorsService.triggerLanguageChange();
};

export const changeDefaultLocale = (locale: string) => {
  for (const key in messages) {
    if (messages[key][locale]) {
      messages[key].default = messages[key][locale];
    }
  }
};
