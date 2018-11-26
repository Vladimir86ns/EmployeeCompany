import {
  INVALID_FORM,
  RESET_FORM
} from "../form-action/formActionTypes";

const initialState = {
  form: {
    valid: true,
    errorMessages: {}
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INVALID_FORM:
      return {
        ...state,
          valid: false,
          errorMessages: action.errorMessages
      };
    case RESET_FORM:
      return {
        ...state,
          valid: true,
          errorMessages: action.errorMessages
      };
    default:
      return state;
  }
};

export default reducer;
