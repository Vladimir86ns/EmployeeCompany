import { createStore, combineReducers, compose , applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import userReducer from './user/user-reducer/userReducerData';
import navigatorReducer from './navigator/navigator-reducer/navigatorReducerData';
import formReducer from './form/form-reducer/formReducerData';
import companyReducer from './company/company-reducer/companyReducerData';

const rootReducer = combineReducers({
    user: userReducer,
    navigator: navigatorReducer,
    formValidation: formReducer,
    company: companyReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;