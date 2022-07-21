import {
    FINDPW_REQUEST,
    FINDPW_FAILURE,
    FINDPW_SUCCESS
  } from "../actions/findPassword.js";


export default function findPassword(state = {
  isFetching: false,
  errorMessage: '',
}, action) {
  switch (action.type) {
    case FINDPW_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FINDPW_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: '',
      });
    case FINDPW_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload,
      });
    default:
      return state;
  }
}