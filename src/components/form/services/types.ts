export type FieldsT = { [key: string]: string };
export type ErrorsT = { [key: string]: true | string };

export type ValidateResultT = true | { key: string; message?: string };

type RuleValidator = (val: string) => boolean | string;
type RulesObjectT = {
  [key: string]: boolean | string | RuleValidator;
};
export type RulesT = undefined | string | RulesObjectT;
