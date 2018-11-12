import {
  SAVE_USER,
  LOGIN_USER,
} from "../user-action/userActionTypes";

const initialState = {
  user: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: action.user
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default reducer;
