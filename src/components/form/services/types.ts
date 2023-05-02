export type FieldsT = { [key: string]: string };
export type ErrorsT = { [key: string]: true | string };

export type ValidateResultT = true | { key: string; message?: string };

export type RuleValidator = (val: string) => true | string;
type RulesObjectT = {
  [key: string]: true | string | RuleValidator;
};
export type RulesT = undefined | string | RulesObjectT;
