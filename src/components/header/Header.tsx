import "./header.scss";
import logo from "../../assets/header/navLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [show, setShow] = useState<Boolean>(true);
  const { fullName } = useSelector((state: any) => state.user.userInfo);
  // console.log(fullName);
  // console.log(token);
  return (
    <div className="headerContainer">
      <div className="headerLogo">
        <img src={logo} alt="navLogoErr" />
      </div>
      <div className="headerSearch">
        <input type="text" placeholder="search Here" />
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className="headerOption">
        <span className="headerOptionItem">
          <select name="En">
            <option value="english">🇮🇳 En</option>
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
              <button>
                <Link to="/login" className="link" style={{ color: "#000" }}>
                  Login
                </Link>
              </button>
            </div>
            <div className="userInfo">
              <span>Your Orders</span>
              <span>Your Cart Items </span>
              <span>Your Wishlists </span>
            </div>
          </div>
        </span>
        <span className="headerOptionItem">
          <small>Returs</small>
          <h4>& Orders</h4>
        </span>
        <span className="headerOptionItem">
          <small id="cartNumber">0</small>
          <ShoppingCartOutlinedIcon />
        </span>
      </div>
    </div>
  );
};

export default Header;
