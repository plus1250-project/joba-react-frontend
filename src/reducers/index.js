import { combineReducers } from "redux";
import navigation from "./navigation.js";
import industry from "./industry";
import register from "./register.js";
import auth from "./auth.js";


export default combineReducers({
  register,
  auth,
  navigation,
  industry,
});