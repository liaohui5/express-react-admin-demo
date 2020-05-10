import axios from "axios";

axios.defaults.baseURL = 'http://localhost:2333';

// 全局请求拦截器
axios.interceptors.request.use(config => {
  console.log('========== 请求 ==========');
  console.log(config);
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.token = token;
  }
  return config;
}, err => {
  console.warn('========== 请求错误 ==========');
  console.log(err);
  Promise.reject(err);
});


// 全局响应拦截器
axios.interceptors.response.use(response => {
  console.log('========== 响应 ==========');
  console.log(response.data);
  return response.data;
}, err => {
  console.warn('========== 响应错误 ==========');
  console.log(err);
  Promise.reject(err);
});


export default axios;
