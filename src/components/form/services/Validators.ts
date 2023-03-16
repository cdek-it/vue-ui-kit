import Multitone, { getInstanceFactory } from '../../../services/Multitone';
import type { RulesT } from './types';

import { alpha, required } from '@vee-validate/rules';

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
};

type ValidatorsObj = { [validator: string]: (val: string) => true | string };

class Validators extends Multitone {
  locale = 'ru';

  vd: ValidatorsObj = {
    alpha: this.withMessage.bind(this, alpha, 'alpha'),
    required: this.withMessage.bind(this, required, 'required'),
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
}

export const getValidators = getInstanceFactory<Validators>(Validators);

export const addMessages = (key: string, extraMessages: MessagesT) => {
  if (messages[key]) {
    messages[key] = { ...messages[key], ...extraMessages };
  } else {
    messages[key] = extraMessages;
  }
};

export const changeLocale = (locale: string) => {
  const validatorsService = getValidators();
  validatorsService.locale = locale;
};

export const changeDefaultLocale = (locale: string) => {
  for (const key in messages) {
    if (messages[key][locale]) {
      messages[key].default = messages[key][locale];
    }
  }
};
