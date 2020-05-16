import * as types from "../types";

const defaultState = {
  users: [],
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.GET_USERS: // 获取用户列表
      newState.users = action.users;
      return newState;
    case types.DELETE_USER: // 删除用户
      newState.users = newState.users.filter((item) => item.id !== action.id);
      return newState;
    default:
      return newState;
  }
};
