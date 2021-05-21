import { message } from 'ant-design-vue';
import { AxiosInstance } from "axios"

/**
 * @description 请求错误
 */
 function useErrorRequest(axiosIns: AxiosInstance) {
  axiosIns.interceptors.request.use((request) => {
    console.log('拦截请求错误', request);
    return request;
  }, function(error) {
    console.log('eee',error);
    
    return Promise.reject(error)
  });
}

/**
 * @description 响应错误
 */
function useErrorResponse(axiosIns: AxiosInstance) {
  axiosIns.interceptors.response.use((response) => {
    console.log('拦截响应错误', response);
    return response;
  }, function(error) {
    message.error(error.message)
    return Promise.reject(error)
  });
}

/**
 * @description 拦截错误
 */
export default function interceptError (axiosIns: AxiosInstance) {
  useErrorRequest(axiosIns)
  useErrorResponse(axiosIns);
}