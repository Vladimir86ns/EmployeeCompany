import { INVALID_FORM, RESET_FORM } from './formActionTypes';

export const invalidForm = (errorMessages) => {
  return {
    type: INVALID_FORM,
    errorMessages
  };
};

export const resetForm = () => {
  return {
    type: RESET_FORM,
    errorMessages: {}
  };
};