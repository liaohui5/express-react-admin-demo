import http from "./http";

// 登录
export const login = (user) => http.post("/api/login", user);

// 获取用户列表
export const getUsers = () => http.get("/api/users");

// 获取用户详情信息
export const getUserDetail = (id) => http.get(`/api/user/${id}`);

// 创建用户信息
export const createUser = (user) => http.post("/api/user", user);

// 删除用户
export const removeUser = (id) => http.delete("/api/user", { data: { id } });

// 修改用户信息
export const updateUser = (id, user) => http.patch(`/api/user/${id}`, user);

