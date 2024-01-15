import "./app.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SingleProduct from "./features/singleProduct/Index";
// import Register from "./features/authentication/Index";
import { Register, Login } from "./features/authentication/Index";
import CartContainer from "./features/cart/Index";
// import Checkout from "./features/checkout/Index";
import Payment from "./features/payment/components/payment";
// import AddUserAddress from "./features/address/components/singleAddress/AddUserAddress";
import {
  Account,
  Address,
  AddressForm,
  OrderContainer,
  WishlistContainer,
} from "./features/Accounts/Index";
// import APIClient from "./services/axios/apiClient";

const App = () => {
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
          path: "/carts",
          element: <CartContainer />,
        },
        {
          path: "/checkout",
          element: <Payment />,
        },
        {
          path: "/accounts",
          element: <Account />,
        },
        {
          path: "/accounts/address",
          element: <Address />,
        },
        {
          path: "/accounts/address/add",
          element: <AddressForm />,
        },
        {
          path: "/accounts/orders",
          element: <OrderContainer />,
        },
        {
          path: "/accounts/wishlists",
          element: <WishlistContainer />,
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
