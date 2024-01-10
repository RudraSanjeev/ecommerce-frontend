// // import { updateStart, updateSuccess, updateFailure } from "./userSlice";
// // export const updateUser = async (user, dispatch) => {
// //   dispatch(updateStart());
// //   try {
// //     const res = await axios.post("http://localhost:8800/api/users/1/update", user);
// //     dispatch(updateSuccess(res.data));
// //   } catch (err) {
// //     dispatch(updateFailure());
// //   }
// // };

// import axios, { AxiosError } from "axios";
// import { useDispatch } from "react-redux";
// import { loginStart, loginSuccess, loginFailure } from "./userSlice";

// export interface LoginResponse {
//   accessToken: string;
//   fullName: string;
// }

// const URL = "http://localhost:8000/api/auth";

// class AuthService {
//   private static TOKEN_KEY = "token";
//   private static USER_NAME = "username";

//   static login = async ({ email, password }: LoginEntity) => {
//     const dispatch = useDispatch();
//     dispatch(loginStart());

//     try {
//       const response = await axios.post<LoginResponse>(URL + "/login", {
//         email: email,
//         password: password,
//       });

//       const { accessToken, fullName } = response.data;

//       // Save token and username to local storage
//       localStorage.setItem(AuthService.TOKEN_KEY, accessToken);
//       localStorage.setItem(AuthService.USER_NAME, fullName);

//       // Dispatch the user information to Redux store
//       dispatch(loginSuccess({ token: accessToken, username: fullName }));

//       return { token: accessToken, username: fullName };
//     } catch (error: AxiosError) {
//       console.error("Login failed:", error);
//       dispatch(loginFailure());
//       throw error; // Propagate the error to the calling code
//     }
//   };

//   // ... other methods

//   static logout = (): void => {
//     // Remove token and username from local storage on logout
//     localStorage.removeItem(AuthService.TOKEN_KEY);
//     localStorage.removeItem(AuthService.USER_NAME);
//   };
// }

// export default AuthService;
