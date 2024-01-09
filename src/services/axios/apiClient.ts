import axios, { AxiosRequestConfig } from "axios";
import AuthService from "./AuthService";

export interface FetchResponse<T> {
  data: T[];
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});

axiosInstance.interceptors.request.use((config) => {
  // Include the token in the request headers
  const token = AuthService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getSingleProduct = (
    config?: AxiosRequestConfig
  ): Promise<FetchResponse<T>> => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => {
        console.log(res);
        return res.data;
      });
  };

  getAllProducts = (config?: AxiosRequestConfig): Promise<FetchResponse<T>> => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
