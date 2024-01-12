import "./Account.scss";
import order from "../../assests/order.png";
import address from "../../assests/address.png";
import wishlist from "../../assests/wishlist.png";
const Account = () => {
  return (
    <div className="yourAccountContainer">
      <div className="yourAccountWrapper">
        <h1>Your Account</h1>
        <div className="yourAccountWrapperBoxes">
          <div className="yourAccountSingleBox">
            <div className="yourAccountSingleBoxImg">
              <img src={order} alt="imgErr" />
            </div>
            <div className="yourAccountSingleBoxInfo">
              <h3>your Orders</h3>
              <p>Track, return or but things again</p>
            </div>
          </div>
          <div className="yourAccountSingleBox">
            <div className="yourAccountSingleBoxImg">
              <img src={address} alt="imgErr" />
            </div>
            <div className="yourAccountSingleBoxInfo">
              <h3>your Addresses</h3>
              <p>Edit address for orders and gifts</p>
            </div>
          </div>
          <div className="yourAccountSingleBox">
            <div className="yourAccountSingleBoxImg">
              <img src={wishlist} alt="imgErr" />
            </div>
            <div className="yourAccountSingleBoxInfo">
              <h3>your Wishlists</h3>
              <p>Edit Your wishlist here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
