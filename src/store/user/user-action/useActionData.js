import { SAVE_USER, LOGIN_USER } from './userActionTypes';

export const saveUser = (state) => {
    return {
        type: SAVE_USER,
        state: state
    };
};

export const loginUser = () => {
    return {
        type: LOGIN_USER
    };
};