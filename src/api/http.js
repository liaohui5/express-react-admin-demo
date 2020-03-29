import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5555';

// 全局请求拦截器
axios.interceptors.request.use(requestConfig => {
  console.log('========== 请求 ==========');
  console.log(requestConfig);
  return requestConfig;
}, err => {
  console.warn('========== 请求错误 ==========');
  console.log(err);
  Promise.reject(err);
});


// 全局响应拦截器
axios.interceptors.response.use(response => {
  console.log('========== 响应 ==========');
  console.log(response);
  return response;
}, err => {
  console.warn('========== 响应错误 ==========');
  console.log(err);
  Promise.reject(err);
});


export default axios;
