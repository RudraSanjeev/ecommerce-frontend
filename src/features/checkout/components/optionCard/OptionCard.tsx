import { Link } from "react-router-dom";
import "./optionCard.scss";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
const OptionCard = () => {
  const [close, setClose] = useState<Boolean>(false);
  return (
    <div className="checkoutOptionCardContainer">
      <div className="checkoutOptionCardContainerLeft">
        {/* 1st show */}
        {close && (
          <>
            <div className="checkoutOptionCard">
              <h3>1. Delivery Address</h3>
            </div>
            <div className="checkoutOptionCard">
              <div className="checkoutOptionCardInfo">
                <span>name</span>
                <span>home name</span>
                <span>city</span>
                <span>state & pincode</span>
              </div>
            </div>
            <div className="checkoutOptionCard">
              <span>Change</span>
            </div>
          </>
        )}

        {/* 2nd show */}

        {!close && (
          <div className="checkoutOptionCardOpenConatainer">
            <div className="checkoutOptionCardOpenHeading">
              <span className="headingText">1. Select a delivery address</span>
              <span className="checkoutOptionCardCloseButton">
                close <CloseIcon className="checkoutOptionCardcloseIcon" />
              </span>
            </div>
            <span className="hr"></span>

            <div className="checkoutOptionCardAddressBox">
              <h3>Your Addresses</h3>
              <span className="hr"></span>
              <span className="checkoutOptionCardRadioSpan">
                <input type="radio" value="arrah, mohali" />
                <span>name, home name, city, state, pincode</span>
              </span>
              <span className="checkoutOptionCardAddNewAddress">
                <AddIcon className="checkoutOptionCardAddNewAddressIcon" />{" "}
                <Link to="#" className="checkoutOptionCardAddNewAddressLink">
                  Add new address
                </Link>
              </span>
              <span className="checkoutOptionCardUseThisAddressButton">
                <button>Use this address</button>
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="checkoutOptionCardContainerRight">
        <div className="checkoutOptionCardContainerRightOrderSummary">
          <div className="checkoutOptionCardContainerRightOrderSummaryButton">
            <button>Use this payment method</button>
            <small>
              Choose a payment method to continue checking out. You will still
              have a chance to review and edit your order before it is final
            </small>
          </div>
          <span className="hr"></span>
          <div className="checkoutOptionCardContainerRightOrderSummaryInfo">
            <h3>Order Summary</h3>
            <span className="checkoutOptionCardContainerRightOrderSummaryInfoItem">
              <small className="key">Items</small>
              <small className="value">$34242</small>
            </span>
            <span className="checkoutOptionCardContainerRightOrderSummaryInfoItem">
              <small className="key">Delivery</small>
              <small className="value">$40</small>
            </span>
            <span className="checkoutOptionCardContainerRightOrderSummaryInfoItem">
              <small className="key">Total</small>
              <small className="value">$342423442</small>
            </span>
            <span className="checkoutOptionCardContainerRightOrderSummaryInfoItem">
              <small className="key">Promotion Applied</small>
              <small className="value">$32</small>
            </span>
            <span className="hr"></span>
            <span className="checkoutOptionCardContainerRightOrderSummaryInfoTotal">
              <span className="keyTotal">Order Total</span>
              <span className="valueTotal">$ 43243432</span>
            </span>
          </div>

          <div className="checkoutOptionCardContainerRightOrderSummaryLink">
            <small>How are delivery costs calculated?</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionCard;
