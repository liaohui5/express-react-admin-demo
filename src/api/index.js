import http from './http';

// 登录
export const login = (user) => http.post('/api/login', user);

// 获取用户列表
export const getUsers = () => http.get('/api/users');

// 删除用户
export const removeUser = id => http.delete('/api/user', {data: {id}});
