import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./checkoutUserAddress.scss";
import AddUserAddress from "../../../address/components/singleAddress/AddUserAddress";
const CheckoutUserAddress = () => {
  return (
    <div className="checkoutUserAddress">
      <div className="checkoutUserAddressheading">
        <span className="checkoutUserAddressHeadingText">
          Enter a new delivery address
        </span>
        <span className="checkoutUserAddressClose">
          <CloseOutlinedIcon />
        </span>
      </div>
      <AddUserAddress />
    </div>
  );
};

export default CheckoutUserAddress;
