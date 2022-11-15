import {
    RESETPW_REQUEST,
    RESETPW_FAILURE,
    RESETPW_SUCCESS
  } from "../actions/resetPassword.js";


export default function resetPassword(state = {
  isFetching: false,
  errorMessage: '',
}, action) {
  switch (action.type) {
    case RESETPW_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RESETPW_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: '',
      });
    case RESETPW_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload,
      });
    default:
      return state;
  }
}