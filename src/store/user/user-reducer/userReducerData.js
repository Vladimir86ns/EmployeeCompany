import axios from '../../../../axios';

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
      let {firstName, lastName, email, password, confirmPassword} = action.state;

      let user = axios.post('/employee/register-employee', {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password_confirm: confirmPassword,
        company_id: 4
      }
      ).then(suc => suc.data).catch(err => alert('need to implement'))


      return {
        ...state,
        user: user
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
