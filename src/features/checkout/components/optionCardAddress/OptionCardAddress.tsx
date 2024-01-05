// import { Link } from "react-router-dom";
import "./optionCardAddress.scss";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
// import CheckoutUserAddress from "../checkoutuserAddress/CheckoutUserAddress";
// import CheckoutUserAddress from "../checkoutuserAddress/CheckoutUserAddress";
// import OrderSummary from "../OrderSummary/OrderSummary";
const OptionCardAddress = () => {
  const [close, setClose] = useState<Boolean>(true);
  // const [showNewAddressComponent, setNewAddressComponent] =
  //   useState<Boolean>(false);
  return (
    <div className="checkoutOptionCardAddressContainer">
      {/* <div className="checkoutOptionCardAddressContainerLeft"> */}
      {/* 1st show */}
      {close && (
        <>
          <div className="checkoutOptionCardAddress">
            <h3>1. Delivery Address</h3>
          </div>
          <div className="checkoutOptionCardAddress">
            <div className="checkoutOptionCardAddressInfo">
              <span>name</span>
              <span>home name</span>
              <span>city</span>
              <span>state & pincode</span>
            </div>
          </div>
          <div className="checkoutOptionCardAddress">
            <span onClick={() => setClose(false)}>Change</span>
          </div>
        </>
      )}

      {/* 2nd show */}

      {!close && (
        <div className="checkoutOptionCardAddressOpenConatainer">
          <div className="checkoutOptionCardAddressOpenHeading">
            <span className="headingText">1. Select a delivery address</span>
            <span
              className="checkoutOptionCardAddressCloseButton"
              onClick={() => setClose(true)}
            >
              close <CloseIcon className="checkoutOptionCardAddresscloseIcon" />
            </span>
          </div>
          <span className="hr"></span>

          <div className="checkoutOptionCardAddressBox">
            <h3>Your Addresses</h3>
            <span className="hr"></span>
            <span className="checkoutOptionCardAddressRadioSpan">
              <input type="radio" value="arrah, mohali" />
              <span>name, home name, city, state, pincode</span>
            </span>
            <span className="checkoutOptionCardAddNewAddress">
              <AddIcon className="checkoutOptionCardAddNewAddressIcon" />{" "}
              <span
                className="checkoutOptionCardAddNewAddressLink"
                // onClick={() => setNewAddressComponent(!showNewAddressComponent)}
              >
                Add new address
              </span>
            </span>
            <span className="checkoutOptionCardUseThisAddressButton">
              <button>Use this address</button>
            </span>
          </div>
        </div>
      )}
      {/* new address components -- make absolute */}
      {/* <div className="checkoutNewAddressComonent">
        <CheckoutUserAddress />
      </div> */}
    </div>
  );
};

export default OptionCardAddress;
