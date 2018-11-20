
import { REDIRECT_NAVIGATOR, RESET_NAVIGATOR } from './navigatorActionTypes';

export const redirectTo = (componentName) => {
  return {
    type: REDIRECT_NAVIGATOR,
    componentName
  };
};

export const resetNavigator = () => {
  return {
    type: RESET_NAVIGATOR,
    componentName: ''
  };
};

