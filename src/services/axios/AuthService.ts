// AuthService.ts

import axios, { AxiosError } from "axios";

export interface RegisterEntity {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}
export interface LoginEntity {
  email: string;
  password: string;
}

const URL = "https://ecommerce-4b3v.onrender.com/api/auth";
class AuthService {
  private static TOKEN_KEY = "token";
  private static USER_NAME = "username";
  // : Promise<string>
  static login = ({ email, password }: LoginEntity) => {
    // Make an API call to authenticate the user
    return axios
      .post(URL + "/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // Assuming the server responds with a token upon successful login
        const token = response.data.accessToken;
        const username = response.data.fullName;
        // Save token to local storage
        localStorage.setItem(AuthService.TOKEN_KEY, token);
        localStorage.setItem(AuthService.USER_NAME, username);
        return { token, username };
      })
      .catch((error: AxiosError) => {
        // Handle login error (e.g., incorrect credentials, server error)
        console.error("Login failed:", error);
        throw error; // Propagate the error to the calling code
      });
  };

  static logout = (): void => {
    // Remove token from local storage on logout
    localStorage.removeItem(AuthService.TOKEN_KEY);
    localStorage.removeItem(AuthService.USER_NAME);
  };

  static getToken = (): string | null => {
    // Retrieve token from local storage
    return localStorage.getItem(AuthService.TOKEN_KEY);
  };
  static getUsername = (): string | null => {
    // Retrieve token from local storage
    return localStorage.getItem(AuthService.USER_NAME);
  };
  static register = ({
    fullName,
    email,
    password,
    phoneNumber,
  }: RegisterEntity) => {
    const userInfo = {
      fullName,
      email,
      password,
      phoneNumber,
    };
    return axios
      .post(URL + "/register", userInfo)
      .then((res) => {
        return res.data;
      })
      .catch((error: AxiosError) => {
        throw error; // Propagate the error to the calling code
      });
  };
  static forgotPassword = (email: string) => {
    return axios
      .post(URL + "/reset-password", { email })
      .then((res) => {
        return res;
      })
      .catch((error: AxiosError) => {
        throw error; // Propagate the error to the calling code
      });
  };
  static updatePassword = (password: string, token: string) => {
    return axios
      .post(URL + `/update-password/${token}`, { password })
      .then((res) => {
        return res;
      })
      .catch((error: AxiosError) => {
        throw error; // Propagate the error to the calling code
      });
  };
}

export default AuthService;
