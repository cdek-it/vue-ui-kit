import Multitone, { getInstanceFactory } from '../../../services/Multitone';
import type { RulesT, RuleValidator } from './types';

import { alpha, required, email, regex } from '@vee-validate/rules';

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
  regex: {
    default: 'Недопустимый формат',
    ru: 'Недопустимый формат',
  },
};

type ValidatorsObj = {
  [validator: string]: (params: object, val: string) => true | string;
};

type ValidatorsResult = {
  [validator: string]: (val: string) => true | string;
};

class Validators extends Multitone {
  locale = 'ru';
  changeLocaleCallbacks: Array<() => void> = [];

  vd: ValidatorsObj = {
    alpha: this.withMessage.bind(this, alpha, 'alpha'),
    required: this.withMessage.bind(this, required, 'required'),
    email: this.withMessage.bind(this, email, 'email'),
    regex: this.withMessage.bind(this, regex, 'regex'),
  };

  withMessage(
    validator: any,
    messageKey: string,
    extraParams: object,
    value: unknown
  ): true | string {
    let params = { locale: this.locale };
    extraParams && (params = { ...params, ...extraParams });

    const isValid = validator(value, params);

    return isValid
      ? true
      : messages[messageKey][this.locale] || messages[messageKey].default;
  }

  parseRules(rules: RulesT) {
    const resultRules: ValidatorsResult = {};

    if (typeof rules === 'string') {
      const ruleNames = rules.split('|');
      for (const rn of ruleNames) {
        this.parseStringRule(rn, resultRules);
      }
    }

    if (typeof rules === 'object') {
      for (const key in rules) {
        // Обработка правила regex
        if (key === 'regex' && rules[key] instanceof RegExp) {
          this.parseRegexRule(rules[key] as unknown as RegExp, resultRules);
          continue;
        }

        // Обработка <название_глобального_валидатора>: true
        if (typeof rules[key] === 'boolean' && rules[key]) {
          this.parseStringRule(key, resultRules);
          continue;
        }

        // Обработка кастомной функции
        if (typeof rules[key] === 'function') {
          this.parseFunctionRule(key, rules[key] as RuleValidator, resultRules);
        }
      }
    }

    return resultRules;
  }

  parseStringRule(ruleName: string, result: ValidatorsResult) {
    if (this.vd[ruleName]) {
      result[ruleName] = this.vd[ruleName].bind(this, {});
    }
  }

  parseFunctionRule(
    key: string,
    validator: RuleValidator,
    result: ValidatorsResult
  ) {
    result[key] = validator;
  }

  parseRegexRule(regex: RegExp, result: ValidatorsResult) {
    result.regex = this.vd.regex.bind(this, { regex: regex });
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
