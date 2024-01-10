import axios, { AxiosRequestConfig } from "axios";
import AuthService from "./AuthService";

export interface FetchResponse<T> {
  data: T[];
  items?: any;
  totalPrice?: any;
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});

axiosInstance.interceptors.request.use((config) => {
  // Include the token in the request headers
  const token = AuthService.getToken();
  if (token) {
    config.headers.token = `Bearer ${token}`;
  }
  return config;
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAllProducts = (config?: AxiosRequestConfig): Promise<FetchResponse<T>> => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => {
        // console.log(res.data);

        return res.data;
      });
  };

  getSingleProduct = (
    config?: AxiosRequestConfig
  ): Promise<FetchResponse<T>> => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => {
        // console.log(res);
        return res.data;
      });
  };

  addToCart = (
    data: any,

    config?: AxiosRequestConfig
  ): Promise<FetchResponse<T>> => {
    return axiosInstance
      .post<FetchResponse<T>>(this.endpoint, data, config)
      .then((res) => {
        // console.log(res);
        return res.data;
      });
  };

  getAllCarts = (config?: AxiosRequestConfig): Promise<FetchResponse<T>> => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => {
        // console.log(res);
        return res.data;
      });
  };
}

export default APIClient;
