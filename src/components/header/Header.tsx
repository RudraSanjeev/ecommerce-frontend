import "./header.scss";
import logo from "../../assets/header/navLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../../services/axios/AuthService";
import { useNavigate } from "react-router-dom";
import { updateLogin } from "../../redux/userSlice";
import APIClient from "../../services/axios/apiClient";
import { Product } from "../../features/singleProduct/components/singleProduct/SingleProduct";
import React from "react";
const Header = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState<Boolean>(true);
  const [searchProduct, setSearchProduct] = useState<Product[]>([]);
  const { fullName } = useSelector((state: any) => state.user.userInfo);
  const { cartItems } = useSelector((state: any) => state.cart);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.value) {
      const apiClient = new APIClient(
        `/products/search/?keyword=${e.target.value}`
      );
      apiClient
        .getAllMatchProducts()
        .then((res: any) => {
          setSearchProduct(res);
        })
        .catch((err) => console.log(err));
    } else {
      setSearchProduct([]);
    }
  };
  // console.log(searchProduct);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, id: any) => {
    e.preventDefault();
    nav(`/products/${id}`);
    setSearchProduct([]);
  };
  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(
      updateLogin({
        fullName: null,
        token: null,
      })
    );
    nav("/");
  };
  return (
    <div className="headerContainer">
      <Link to="/" style={{ textDecoration: "none", color: "initial" }}>
        <div className="headerLogo">
          <img src={logo} alt="navLogoErr" />
        </div>
      </Link>
      <div className="headerSearch">
        <input
          type="text"
          id="search-input"
          placeholder="search Here"
          onChange={handleSearch}
        />
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className="headerOption">
        <span className="headerOptionItem">
          <select name="En">
            <option value="hindi">🇮🇳 En</option>
            <option value="hindi">🇮🇳 Hi</option>
          </select>
        </span>
        <span className="headerOptionItem" onClick={() => setShow(!show)}>
          <small style={{ cursor: "pointer" }}>
            Hello, {fullName ? fullName : "sign in"}
          </small>
          <h4>
            Acounts & Lists
            <span>
              <ArrowDropDownIcon />
            </span>
          </h4>
          <div
            className="loginCard"
            style={show ? { display: "none" } : { display: "flex" }}
          >
            <ArrowDropUpIcon className="upArrow" />
            <div className="login">
              {AuthService.getToken() ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <button>
                  <Link
                    to="/login"
                    className="link"
                    style={{ color: "initial", textDecoration: "none" }}
                  >
                    Login
                  </Link>
                </button>
              )}
            </div>
            {AuthService.getToken() && (
              <div className="userInfo">
                <Link
                  to="/accounts"
                  style={{ textDecoration: "none", color: "initial" }}
                >
                  <span>Accounts </span>
                </Link>
                <Link
                  to="/accounts/orders"
                  style={{ textDecoration: "none", color: "initial" }}
                >
                  <span>Your Orders</span>
                </Link>

                <Link
                  to="/accounts/wishlists"
                  style={{ textDecoration: "none", color: "initial" }}
                >
                  <span>Your Wishlists </span>
                </Link>
              </div>
            )}
          </div>
        </span>
        <span className="headerOptionItem">
          <small>Returs</small>
          <h4>& Orders</h4>
        </span>
        <Link to="/carts" style={{ textDecoration: "none", color: "initial" }}>
          <span className="headerOptionItem">
            <small id="cartNumber">{cartItems.length}</small>
            <ShoppingCartOutlinedIcon />
          </span>
        </Link>
      </div>
      {searchProduct.length > 0 && (
        <div className="searchBox">
          {searchProduct.map((item) => (
            <React.Fragment key={item._id}>
              <div
                className="singleSearchProduct"
                key={item._id}
                onClick={(e) => handleClick(e, item._id)}
              >
                <div className="singleSearchProductImgBox">
                  <img src={item.img[0] || ""} alt="imgErr" />
                </div>
                <div className="singleSearchProductInfoBox">
                  <span>{item.title}</span>
                </div>
              </div>
              {/* <span className="HR"></span> */}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
