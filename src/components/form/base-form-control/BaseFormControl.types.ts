export type FieldChangeResult<ValueT = string> = {
  isValid: boolean;
  error?: true | string;
  value: ValueT;
};
