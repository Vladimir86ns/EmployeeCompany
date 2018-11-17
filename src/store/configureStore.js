import { createStore, combineReducers, compose } from 'redux';

import userReducer from './user/user-reducer/userReducerData';

const rootReducer = combineReducers({
    user: userReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
};

export default configureStore;