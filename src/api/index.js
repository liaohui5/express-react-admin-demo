import http from './http';
export const login = (user) => http.post('/api/login', user);
