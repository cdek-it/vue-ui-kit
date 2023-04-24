import type { FieldsT, ErrorsT } from '../services/types';

export type FormSubmitResult = {
  isValid: boolean;
  errors?: ErrorsT;
  values?: FieldsT;
};
