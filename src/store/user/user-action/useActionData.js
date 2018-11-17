import { SAVE_USER, LOGIN_USER } from './userActionTypes';

export const saveUser = (user) => {
    return {
        type: SAVE_USER,
        user: user
    };
};

export const loginUser = () => {
    return {
        type: LOGIN_USER
    };
};