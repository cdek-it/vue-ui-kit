import type { FieldsT, ErrorsT } from '../services/types';

export type FormSubmitResult<ValuesT = FieldsT> = {
  isValid: boolean;
  errors?: ErrorsT;
  values?: ValuesT;
};

export type FormChangeResult<ValuesT = FieldsT> = {
  isValid: boolean;
  errors: ErrorsT;
  values: ValuesT;
};
