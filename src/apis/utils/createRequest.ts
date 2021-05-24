import axios from "axios";

/**
 * @description 创建基础请求
 */
export const baseRequest = axios.create({
  baseURL: import.meta.env.VITE_API,
  timeout: 10000,
});

