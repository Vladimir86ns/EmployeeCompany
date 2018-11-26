import axios from '../../../../axios';

import { GET_ALL_COMPANIES } from './companyActionTypes';

export const fetchCompanies = () => {
  return dispatch => {
    axios.get('/company/all')
    .then(success => {
      dispatch({
        type: GET_ALL_COMPANIES,
        allCompanies: success.data.data
      });
    })
    .catch(error => {
      alert(error)
    });
  }
}