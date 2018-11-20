import axios from '../../../../axios';

import { SAVE_USER, LOGIN_USER } from './userActionTypes';
import { redirectTo } from '../../navigator/navigator-action/navigatorActionData'
import { invalidForm } from '../../form/form-action/formActionData';

export const saveUser = (userData) => {
  return dispatch => {
    let {first_name, last_name, email, password, password_confirm, company_id} = userData;

    axios.post('/employee/register-employee', {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value,
      password_confirm: password_confirm.value,
      company_id: company_id.value
    })
    .then(success =>{
        dispatch({
          type: SAVE_USER,
          user: success.data
        });
        dispatch(redirectTo('Home'))
      }
    )
    .catch(err => {
      dispatch(invalidForm(err.response.data))
    })
  }
};

export const loginUser = (credentials) => {
  return dispatch => {
    let {email, password} = credentials;

    axios.get(`/employee/login-employee?email=${email.value}&password=${password.value}`)
    .then(success =>{
      dispatch({
        type: LOGIN_USER,
        user: success.data
      });
      dispatch(redirectTo('Home'))
    })
    .catch(err => {
      dispatch(invalidForm(err.response.data))
    });
  }
};