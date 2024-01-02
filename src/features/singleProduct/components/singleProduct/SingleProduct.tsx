import "./singleProduct.scss";
import { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import policy1 from "../../assets/singleProductPolicies/icon-cod._CB485937110_.png";
import policy2 from "../../assets/singleProductPolicies/icon-returns._CB484059092_.png";
import policy3 from "../../assets/singleProductPolicies/icon-top-brand._CB617044271_.png";
import policy4 from "../../assets/singleProductPolicies/trust_icon_free_shipping_81px._CB630870460_.png";
import { Link } from "react-router-dom";

interface Props {
  id: number | string;
  images: string[];
  desc: string;
  price: number | string;
  discount: string | number;
}
[];
const SingleProduct = ({ images, desc, price, discount }: Props) => {
  const [currImage, setCurrImage] = useState<string>(images[0]);

  return (
    <div className="singleProductcontainer">
      <div className="imagesGrid">
        {images.map((item) => (
          <div
            key={item}
            className={
              item == currImage ? "singleImageBox currImage" : "singleImageBox"
            }
            onClick={() => setCurrImage(item)}
          >
            <img src={item} alt="imgErr" />
          </div>
        ))}
        <div className="currentImage">
          <img src={currImage} alt="" />
        </div>
      </div>
      <div className="singleProductInfo">
        <h2>{desc}</h2>
        <span className="HR"></span>
        <div className="priceAndDiscount">
          <span className="discount">- {discount} %</span>
          <span className="price">
            <sup>$</sup>
            {price}
          </span>
        </div>
        <small>
          M.R.P.: <s>$7999</s>
        </small>
        <span className="HR"></span>
        <span className="singleProductInfoOffer">
          <span className="singleProductOfferIcon">
            <LocalOfferOutlinedIcon /> Offer
          </span>
          <KeyboardArrowDownOutlinedIcon className="singleProductInfoDownArrow" />
        </span>
        <span className="HR"></span>
        <div className="singleProudctPolicies">
          <div className="singleProductPolicyBox">
            <img src={policy1} alt="imgErr" />
            <small>Cash on Delivery</small>
          </div>
          <div className="singleProductPolicyBox">
            <img src={policy2} alt="imgErr" />
            <small>Easy return</small>
          </div>
          <div className="singleProductPolicyBox">
            <img src={policy3} alt="imgErr" />
            <small>Top Brands</small>
          </div>
          <div className="singleProductPolicyBox">
            <img src={policy4} alt="imgErr" />
            <small>free delivery</small>
          </div>
        </div>
        <span className="HR"></span>

        <div className="singleProductSize">
          <label htmlFor="size">Size: </label>
          <select>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="singleProductColor">
          <label htmlFor="size">Color: </label>
          <select>
            <option value="red">red</option>
            <option value="yellow">yellow</option>
            <option value="blue">blue</option>
          </select>
        </div>
      </div>
      {/* buy option -- rightmost */}
      <div className="singleProductBuyOption">
        <span className="singleProductOptionAddress">
          <LocationOnOutlinedIcon /> Mohali, punjab
          <Link
            to="/"
            className="link"
            style={{ marginLeft: "10px", color: "#222" }}
          >
            update location
          </Link>
        </span>
        <span className="singleProductOptionInstock">instock </span>
        <span>
          <label htmlFor="Quantity">Quantity: </label>
          <select defaultValue=" 1" name="Quantity" id="Quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </span>
        <button className="singleProductAddToCart">Add to Cart</button>
        <button className="singleProductAddToWishlist">Add to Wishlist</button>
      </div>
    </div>
  );
};

export default SingleProduct;
