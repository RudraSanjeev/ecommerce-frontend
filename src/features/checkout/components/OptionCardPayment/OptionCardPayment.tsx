import { Link } from "react-router-dom";
import "./OptionCardPayment.scss";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import paymentLogo from "../../assets/paymentOptionImg.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import OrderSummary from "../OrderSummary/OrderSummary";
const OptionCardAddress = () => {
  const [close, setClose] = useState<Boolean>(true);
  return (
    <div className="checkoutOptionCardPaymentContainer">
      {/* <div className="checkoutOptionCardAddressContainerLeft"> */}
      {/* 1st show */}
      {close && (
        <>
          <div className="checkoutOptionCardPayment">
            <h3>2 Payment method</h3>
          </div>
          <div className="checkoutOptionCardPayment">
            <div className="checkoutOptionCardPaymentInfo">
              <span>Pay on Delivery</span>
            </div>
          </div>
          <div className="checkoutOptionCardPayment">
            <span onClick={() => setClose(false)}>Change</span>
          </div>
        </>
      )}

      {/* 2nd show */}

      {!close && (
        <div className="checkoutOptionCardPaymentOpenConatainer">
          <div className="checkoutOptionCardPaymentOpenHeading">
            <span className="headingText">2 Select payment method</span>
            <span
              className="checkoutOptionCardPaymentCloseButton"
              onClick={() => setClose(true)}
            >
              close <CloseIcon className="checkoutOptionCardPaymentcloseIcon" />
            </span>
          </div>
          <span className="hr"></span>

          <div className="checkoutOptionCardPaymentBox">
            <h3>Another payment method</h3>
            <span className="hr"></span>
            <span className="checkoutOptionCardPaymentRadioSpan">
              <input type="radio" value="arrah, mohali" />
              <span>Credit Card or Debit Card</span>
            </span>
            <span className="checkoutOptionCardPaymentImg">
              <img src={paymentLogo} alt="imgErr" />
            </span>
            <span className="checkoutOptionCardAddNewPayment">
              <AddIcon className="checkoutOptionCardAddNewPaymentIcon" />{" "}
              <Link to="#" className="checkoutOptionCardAddNewPaymentLink">
                Enter Card details
              </Link>{" "}
              <small>
                <NavigateNextIcon className="checkoutOptionCardPaymentRightArrowIcon" />{" "}
                Amazon accepts all major credit & cards
              </small>
            </span>
            <span className="checkoutOptionCardUseThisPaymentButton">
              <button>Use this payment method</button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptionCardAddress;
