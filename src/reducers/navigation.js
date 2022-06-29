import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  CHANGE_ACTIVE_SIDEBAR_ITEM,
  CHANGE_DASHBOARD_TITLE,
} from "../actions/navigation.js";

const initialState = {
  sidebarOpened: false,
  activeItem: JSON.parse(localStorage.getItem('staticSidebar')) ? window.location.pathname : null,
  industryName: "",
};

export default function runtime(state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return Object.assign({}, state, {
        sidebarOpened: true,
      });
    case CLOSE_SIDEBAR:
      return Object.assign({}, state, {
        sidebarOpened: false,
      });
    case CHANGE_ACTIVE_SIDEBAR_ITEM:
      return {
        ...state,
        activeItem: action.activeItem,
      };
    case CHANGE_DASHBOARD_TITLE:
      return {
        ...state,
        industryName: state.industryName,
      }
    default:
      return state;
  }
}
