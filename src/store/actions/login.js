import * as types from "../types.js";
import { login } from "../../api";

// 登录
export const loginAction = (email, password) => async (dispatch) => {
  const { code, data } = await login({ email, password });
  if (code === 0) {
    dispatch({ type: types.LOGIN, user: data });
    return Promise.resolve();
  }
  return Promise.reject(code);
};

// 注销登录
export const logoutAction = () => ({ type: types.LOGOUT });
