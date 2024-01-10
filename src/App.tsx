import "./app.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SingleProduct from "./features/singleProduct/Index";
// import Register from "./features/authentication/Index";
import { Register, Login } from "./features/authentication/Index";
import CartContainer from "./features/cart/Index";
import Checkout from "./features/checkout/Index";
import AddUserAddress from "./features/address/components/singleAddress/AddUserAddress";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import APIClient from "./services/axios/apiClient";
import { updateCart } from "./redux/cartSlice";
import axios from "axios";
import AuthService from "./services/axios/AuthService";
const App = () => {
  // const apiClient = new APIClient("/carts");

  const dispatch = useDispatch();

  // Fetch cart data from API on page load
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        // Replace the following with your API endpoint to fetch cart data
        // const response = await APIClient("your/api/endpoint");
        const res = await axios.get("http://localhost:8000/api/carts", {
          headers: {
            token: `Bearer ${AuthService.getToken()}`,
          },
        });
        const data = await res.data;
        console.log("APP FILE " + data);

        // Dispatch the updateCart action with the fetched cart data
        // dispatch(updateCart(data.cartItems, data.totalPrice));
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, [dispatch]);

  const Layout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products/:productId",
          element: <SingleProduct />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/cart",
          element: <CartContainer />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/address",
          element: <AddUserAddress />,
        },
      ],
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
