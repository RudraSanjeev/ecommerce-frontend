import "./navbar.scss";
// import LockIcon from "@mui/icons-material/Lock";
import lockLogo from "../../assets/secured-ssl._CB485936980_.png";
import logo from "../../assets/amazon.png";
const Navbar = () => {
  return (
    <div className="checkoutNavbarContainer">
      <div className="checkoutNavbarLogo">
        <img src={logo} alt="logoImgErr" />
      </div>
      <div className="checkoutNavbarHeading">
        <span>Checkout</span>
      </div>
      <div className="checkoutNavbarLock">
        <img src={lockLogo} alt="lockImgErr" />
      </div>
    </div>
  );
};

export default Navbar;
