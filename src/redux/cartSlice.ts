// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";

// interface CartItem {
//   productId: string;
//   quantity: number;
// }

// interface CartState {
//   cartItems: CartItem[];
//   totalPrice: number;
// }

// const initialState: CartState = {
//   cartItems: [],
//   totalPrice: 0,
// };

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItemToCart: (
//       state,
//       action: PayloadAction<{ productId: string; quantity: number }>
//     ) => {
//       const { productId, quantity } = action.payload;
//       const existingItem = state.cartItems.find(
//         (item) => item.productId === productId
//       );

//       if (existingItem) {
//         existingItem.quantity += quantity;
//       } else {
//         state.cartItems.push({
//           productId,
//           quantity,
//         });
//       }

//       state.totalPrice += quantity *   getProductPrice(productId);
//     },

//     removeItemFromCart: (
//       state,
//       action: PayloadAction<{ productId: string; quantity: number }>
//     ) => {
//       const { productId, quantity } = action.payload;
//       const existingItem = state.cartItems.find(
//         (item) => item.productId === productId
//       );

//       if (existingItem) {
//         existingItem.quantity -= quantity;

//         state.totalPrice -= quantity * getProductPrice(productId);

//         if (existingItem.quantity <= 0) {
//           state.cartItems = state.cartItems.filter(
//             (item) => item.productId !== productId
//           );
//         }
//       }
//     },

//     clearCart: (state) => {
//       state.cartItems = [];
//       state.totalPrice = 0;
//     },
//   },
// });

// const getProductPrice = async (productId: string) => {
//   // Replace this with your logic to fetch the product price based on productId
//   // For simplicity, I'm returning a static value.
//   //return 100; // Replace with your actual logic
//   const product = await axios.get(
//     `http://localhost:8000/api/products/${productId}`
//   );
//   return product.data.price;
// };

// export const { addItemToCart, removeItemFromCart, clearCart } =
//   cartSlice.actions;

// export default cartSlice.reducer;

// import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";

// interface CartItem {
//   productId: string;
//   quantity: number;
//   price: number; // New field to store the product price
// }

// interface CartState {
//   cartItems: CartItem[];
//   totalPrice: number;
// }

// const initialState: CartState = {
//   cartItems: [],
//   totalPrice: 0,
// };

// export const getProductPrice = createAsyncThunk(
//   "cart/getProductPrice",
//   async (productId: string) => {
//     const response = await axios.get(
//       `http://localhost:8000/api/products/${productId}`
//     );
//     return response.data.price;
//   }
// );

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItemToCart: (
//       state,
//       action: PayloadAction<{ productId: string; quantity: number }>
//     ) => {
//       const { productId, quantity } = action.payload;
//       const existingItem = state.cartItems.find(
//         (item) => item.productId === productId
//       );

//       if (existingItem) {
//         existingItem.quantity += quantity;
//       } else {
//         state.cartItems.push({
//           productId,
//           quantity,
//           price: 0, // Set to 0 initially; it will be updated when getProductPrice completes
//         });
//       }
//     },

//     removeItemFromCart: (
//       state,
//       action: PayloadAction<{ productId: string; quantity: number }>
//     ) => {
//       const { productId, quantity } = action.payload;
//       const existingItem = state.cartItems.find(
//         (item) => item.productId === productId
//       );

//       if (existingItem) {
//         existingItem.quantity -= quantity;

//         state.totalPrice -= quantity * existingItem.price;

//         if (existingItem.quantity <= 0) {
//           state.cartItems = state.cartItems.filter(
//             (item) => item.productId !== productId
//           );
//         }
//       }
//     },

//     clearCart: (state) => {
//       state.cartItems = [];
//       state.totalPrice = 0;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getProductPrice.fulfilled, (state, action) => {
//       const { productId, price } = action.payload;
//       const item = state.cartItems.find((item) => item.productId === productId);

//       if (item) {
//         item.price = price;
//         state.totalPrice += item.quantity * price;
//       }
//     });
//   },
// });

// export const { addItemToCart, removeItemFromCart, clearCart } =
//   cartSlice.actions;

// export default cartSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (
      state,
      action: PayloadAction<{
        productId: string;
        quantity: number;
        totalPrice: number;
      }>
    ) => {
      const { productId, quantity, totalPrice } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({
          productId,
          quantity,
        });
      }

      state.totalPrice = totalPrice;
    },

    removeItemFromCart: (
      state,
      action: PayloadAction<{
        productId: string;
        quantity: number;
        totalPrice: number;
      }>
    ) => {
      const { productId, quantity, totalPrice } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity -= quantity;

        if (existingItem.quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.productId !== productId
          );
        }
      }

      state.totalPrice = totalPrice;
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },

    updateCart: (
      state,
      action: PayloadAction<{ cartItems: CartItem[]; totalPrice: number }>
    ) => {
      state.cartItems = action.payload.cartItems;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart, updateCart } =
  cartSlice.actions;

export default cartSlice.reducer;
