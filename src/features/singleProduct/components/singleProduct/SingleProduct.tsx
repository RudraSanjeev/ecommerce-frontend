import "./singleProduct.scss";
import { ChangeEvent, useEffect, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import policy1 from "../../assets/singleProductPolicies/icon-cod._CB485937110_.png";
import policy2 from "../../assets/singleProductPolicies/icon-returns._CB484059092_.png";
import policy3 from "../../assets/singleProductPolicies/icon-top-brand._CB617044271_.png";
import policy4 from "../../assets/singleProductPolicies/trust_icon_free_shipping_81px._CB630870460_.png";
import { Link, useNavigate } from "react-router-dom";
import APIClient from "../../../../services/axios/apiClient";
import AuthService from "../../../../services/axios/AuthService";
import { addItemToCart } from "../../../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export interface Product {
  _id: number | string;
  img: string[];
  title: string;
  price: number | string;
  currency: string;
  size: string[] | number[];
  color: string[];
  inStock: string;
  quantity: string;
  discount?: string | number;
}
[];
const SingleProduct = ({
  _id,
  img,
  title,
  price,
  discount,
  currency,
  size,
  color,
  inStock,
  quantity,
}: Product) => {
  const apiClient = new APIClient("/carts");
  const [currImage, setCurrImage] = useState<string>(img[0] || "");
  const [cartQuantity, setCartQuantity] = useState<any>(1);
  const nav = useNavigate();

  const { city, state, pincode } = useSelector(
    (state: any) =>
      state.address.currentAddress || {
        city: "",
        state: "",
        pincode: "",
      }
  );
  const token = AuthService.getToken();

  const dispatch = useDispatch();
  useEffect(() => {
    setCurrImage(img[0]);
  }, [img, _id]);

  const handleCartChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCartQuantity(e.target.value);
  };

  const handleCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!token) {
      nav("/login");
      return;
    }
    apiClient
      .addToCart(
        { items: { productId: _id, quantity: parseInt(cartQuantity) } },
        {
          headers: {
            token: `Bearer ${AuthService.getToken()}`,
          },
        }
      )
      .then((res) => {
        const items = res.items;
        const itemLen = items.length;

        {
          res.items &&
            dispatch(
              addItemToCart({
                productId: items[itemLen - 1].productId,
                quantity: parseInt(cartQuantity),
                totalPrice: res.totalPrice,
              })
            );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="singleProductcontainer">
      <div className="imagesGrid">
        {img?.map((item) => (
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
        <h2>{title}</h2>
        <span className="HR"></span>
        <div className="priceAndDiscount">
          <span className="discount">- {discount} %</span>
          <span className="price">
            <sup>{currency == "INR" ? "Rs" : "$"}</sup>
            {price}
          </span>
        </div>
        <small>
          M.R.P.: <s>{currency == "INR" ? "Rs" : "$"}7999</s>
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
            {size.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="singleProductColor">
          <label htmlFor="size">Color: </label>
          <select>
            {color.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* buy option -- rightmost */}

      <div className="singleProductBuyOption">
        <span className="singleProductOptionAddress">
          {/* {city},{state} {pincode} */}
          <LocationOnOutlinedIcon /> {city}, {state} {pincode}
          <Link
            to={token ? "/accounts/address" : "/login"}
            className="link"
            style={{ marginLeft: "10px", color: "#222" }}
          >
            update location
          </Link>
        </span>
        <span
          className="singleProductOptionInstock"
          style={inStock ? {} : { color: "red" }}
        >
          {inStock ? "instock" : "out of stock"}{" "}
        </span>
        <span>
          <label htmlFor="Quantity">Quantity: </label>
          <select defaultValue="1" name="Quantity" onChange={handleCartChange}>
            {[...Array(quantity)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </span>
        <button className="singleProductAddToCart" onClick={handleCart}>
          Add to Cart
        </button>
        <button className="singleProductAddToWishlist">Add to Wishlist</button>
      </div>
    </div>
  );
};

export default SingleProduct;
