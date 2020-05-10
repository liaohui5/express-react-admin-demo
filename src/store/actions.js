import * as types from "./types.js";
import * as api from "../api/index";

// 登录
export const loginAction = (email, password) => async (dispatch) => {
  const { code, data } = await api.login({ email, password });
  if (code !== 0) {
    console.log("登录失败", data);
    return;
  }
  return dispatch({ type: types.LOGIN, payload: data });
};

// 用户列表
export const getUsersAction = () => async (dispatch) => {
  const { code, data } = await api.getUsers();
  if (code !== 0) {
    console.log("用户数据获取失败");
    return;
  }
  return dispatch({ type: types.GET_USERS, payload: data });
};

// 删除用户(id 为1的不能删)
export const removeUserAction = (id) => async (dispatch) => {
  if (id === 1) {
    return alert("删除失败");
  }
  const { code } = await api.removeUser(id);
  if (code === 0) {
    return dispatch({ type: types.DELETE_USER, payload: id });
  } else {
    alert("删除失败");
  }
};

// 创建用户信息
export const createUserAction = (user) => async () => {
  const { code } = await api.createUser(user);
  return code === 0 ? Promise.resolve() : Promise.reject(code);
};

// 修改用户信息
export const updateUserAction = ({ id, user }) => async () => {
  const { code } = await api.updateUser(id, user);
  return code === 0 ? Promise.resolve() : Promise.reject(code);
};

// 获取用户详情信息
export const getUserDetailAction = (id) => async () => {
  const res = await api.getUserDetail(id);
  return res.code === 0 ? Promise.resolve(res.data) : Promise.reject(res.code);
};
