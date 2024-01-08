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

const URL = "http://localhost:8000/api/auth";
class AuthService {
  private static TOKEN_KEY = "token";
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

        // Save token to local storage
        localStorage.setItem(AuthService.TOKEN_KEY, token);

        return token;
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
  };

  static getToken = (): string | null => {
    // Retrieve token from local storage
    return localStorage.getItem(AuthService.TOKEN_KEY);
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
}

export default AuthService;
