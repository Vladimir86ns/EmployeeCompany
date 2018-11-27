import {
  GET_ALL_COMPANIES,
} from "../company-action/companyActionTypes";

const initialState = {
  allCompanies: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COMPANIES:
      return {
        ...state,
        allCompanies: action.allCompanies
      };
    default:
      return state;
  }
};

export default reducer;
