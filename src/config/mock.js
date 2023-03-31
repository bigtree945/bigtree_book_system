// 导入axios
import axios from "axios";

// 创建对象
const instance = axios.create({
    baseURL:"/mock",
    timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        // 获取存储在本地的token，添加到请求头
        config.headers["token"] = sessionStorage.getItem("token");
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response;
    },
    function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

// 封装方法
export const post = (url="",data={},headers={}) => instance.post(url,data,{headers}).then(res=>res.data).catch(err=>err)

export const get = (url="",params={},headers={}) => instance.get(url,{params,headers}).then(res=>res.data).catch(err=>err)