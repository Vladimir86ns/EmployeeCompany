import {
  REDIRECT_NAVIGATOR,
  RESET_NAVIGATOR
} from "../navigator-action/navigatorActionTypes";

const initialState = {
  navigator: {
    redirect: false,
    componentName: ''
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REDIRECT_NAVIGATOR:
      return {
        ...state,
          redirect: true,
          componentName: action.componentName
      };
    case RESET_NAVIGATOR:
      return {
        ...state,
          redirect: false,
          componentName: action.componentName
      };
    default:
      return state;
  }
};

export default reducer;
