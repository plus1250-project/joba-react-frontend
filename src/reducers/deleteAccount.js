import {
    DELACC_REQUEST,
    DELACC_FAILURE,
    DELACC_SUCCESS
  } from "../actions/deleteAccount.js";


  export default function deleteAccount(state = {
    isFetching: false,
    errorMessage: '',
  }, action) {
    switch (action.type) {
      case DELACC_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
        });
      case DELACC_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          errorMessage: '',
        });
      case DELACC_FAILURE:
        return Object.assign({}, state, {
          isFetching: false,
          errorMessage: action.payload,
        });
      default:
        return state;
    }
  }