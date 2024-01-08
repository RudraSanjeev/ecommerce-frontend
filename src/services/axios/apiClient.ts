// import axios, { AxiosRequestConfig } from 'axios';

// // export interface FetchResponse<T> {
// //   count: number;
// //   next: string | null;
// //   results: T[];
// // }

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:8000/api',
// //   params: {
// //     key: 'e53bba19d7914970889f528d70c8e06d',
// //   },
// });

// class APIClient<T> {
//   endpoint: string;

//   constructor(endpoint: string) {
//     this.endpoint = endpoint;
//   }

// //   getAll = (config: AxiosRequestConfig) => {
// //     return axiosInstance
// //       .get<FetchResponse<T>>(this.endpoint, config)
// //       .then((res) => res.data);
// //   };

// //   get = (id: number | string) => {
// //     return axiosInstance
// //       .get<T>(this.endpoint + '/' + id)
// //       .then((res) => res.data);
// //   };

// }

// export default APIClient;

// APIClient.ts

import axios, { AxiosRequestConfig } from "axios";
import AuthService from "./AuthService";

export interface FetchResponse<T> {
  //   count: number;
  //   next: string | null;
  //   results: T[];
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

  getAll = (config?: AxiosRequestConfig): Promise<FetchResponse<T>> => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string): Promise<T> => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
}

export default APIClient;
