import { createStore, combineReducers } from 'redux';

import userReducer from './user/user-reducer/userReducerData';

const rootReducer = combineReducers({
    user: userReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;