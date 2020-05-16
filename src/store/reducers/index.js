import { combineReducers } from "redux";

import loginReducer from "./login";
import userReducer from "./user";

export default combineReducers({
  loginReducer,
  userReducer,
});
