import {
    RESETNN_REQUEST,
    RESETNN_FAILURE,
    RESETNN_SUCCESS
  } from "../actions/resetNickname.js";


  export default function resetNickname(state = {
    isFetching: false,
    errorMessage: '',
  }, action) {
    switch (action.type) {
      case RESETNN_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
        });
      case RESETNN_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          errorMessage: '',
        });
      case RESETNN_FAILURE:
        return Object.assign({}, state, {
          isFetching: false,
          errorMessage: action.payload,
        });
      default:
        return state;
    }
  }