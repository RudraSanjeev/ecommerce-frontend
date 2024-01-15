import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import addressReducer from "./addressSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    address: addressReducer,
  },
});
