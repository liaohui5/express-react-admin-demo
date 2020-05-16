import * as types from "../types";

const defaultState = {
  authUser: null,
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.LOGIN: // 登录
      localStorage.setItem("token", action.user.token);
      newState.authUser = action.user;
      break;
    case types.LOGOUT: // 注销登录
      localStorage.removeItem("token");
      newState.authUser = null;
      break;
    default:
      return newState;
  }
  return newState;
};
