import { Link } from "react-router-dom";
import "./optionCardReviewOrder.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import WhereToVoteOutlinedIcon from "@mui/icons-material/WhereToVoteOutlined";
import bg3 from "../../assets/bg3.jpg";

const OptionCardAddress = () => {
  const [close, setClose] = useState<Boolean>(true);
  return (
    <div className="checkoutOptionCardReviewOrderContainer">
      {close && (
        <>
          <div className="checkoutOptionCardReviewOrder">
            <h3>3 Items and delivery</h3>
          </div>
          <div className="checkoutOptionCardReviewOrder">
            <div className="checkoutOptionCardReviewOrderInfo">
              <span>Delivery Date: 10 jan, 2024</span>
              <div className="checkoutOptionCardReviewOrderInfoProduct">
                <div className="checkoutOptionCardReviewOrderInfoProductImg">
                  <img src={bg3} alt="imgErr" />
                </div>
                <div className="checkoutOptionCardReviewOrderInfoProductImgDesc">
                  <span>addidas limited edition shoes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="checkoutOptionCardReviewOrder">
            <span onClick={() => setClose(false)}>Review</span>
          </div>
        </>
      )}

      {/* 2nd show */}

      {!close && (
        <div className="checkoutOptionCardReviewOrderOpenConatainer">
          <div className="checkoutOptionCardReviewOrderOpenHeading">
            <span className="headingText">3 Review items and delivery</span>
            <span
              className="checkoutOptionCardReviewOrderCloseButton"
              onClick={() => setClose(true)}
            >
              close{" "}
              <CloseIcon className="checkoutOptionCardReviewOrdercloseIcon" />
            </span>
          </div>
          <span className="hr"></span>

          <div className="checkoutOptionCardReviewOrderBox">
            <h3>Guaranteed delivery: 10 Jan 2024</h3>

            <div className="checkoutOptionCardReviewOrderBoxProduct">
              <div className="checkoutOptionCardReviewOrderBoxProductImg">
                <img src={bg3} alt="imgErr" />
              </div>
              <div className="checkoutOptionCardReviewOrderBoxProductInfo">
                <span className="checkoutOptionCardReviewOrderBoxProductInfoDesc">
                  addidas shoes
                </span>
                <span className="checkoutOptionCardReviewOrderBoxProductInfoPrice">
                  <small className="checkoutOptionCardReviewOrderBoxProductInfoPriceLineThrough">
                    $ 324234
                  </small>
                  <small className="checkoutOptionCardReviewOrderBoxProductInfoPriceText">
                    $324234
                  </small>
                </span>
                <span className="checkoutOptionCardReviewOrderBoxProductInfoQuantity">
                  <span className="checkoutOptionCardReviewOrderBoxProductInfoQuantityText">
                    Qty:
                  </span>
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </span>
              </div>
              <div className="checkoutOptionCardReviewOrderBoxProductDeliveryAddress">
                <span className="checkoutOptionCardReviewOrderBoxProductDeliveryAddressKey">
                  Delivery Address:
                </span>
                <span className="checkoutOptionCardReviewOrderBoxProductDeliveryAddressValue">
                  <small>
                    <WhereToVoteOutlinedIcon className="checkoutOptionCardReviewOrderBoxProductDeliveryAddressValueLink" />{" "}
                    wed, 10 jan, 2024
                  </small>
                  <small>mohali, punjab, 803212</small>
                </span>
              </div>
            </div>
            <span className="checkoutOptionCardUseThisReviewOrderButton">
              <button>Proceed to Pay</button>
              <span className="checkoutOptionCardUseThisReviewOrderButtonBox">
                <span className="checkoutOptionCardUseThisReviewOrderButtonBoxOrderTotal">
                  Order Total: $ 23423432
                </span>
                <small>
                  By placing your order, you agree to Amazon's
                  <Link
                    to="#"
                    className="checkoutOptionCardUseThisReviewOrderButtonBoxOrderTotalLink"
                  >
                    privacy notice
                  </Link>
                  and
                  <Link
                    to="#"
                    className="checkoutOptionCardUseThisReviewOrderButtonBoxOrderTotalLink"
                  >
                    conditions of use.
                  </Link>
                </small>
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptionCardAddress;
