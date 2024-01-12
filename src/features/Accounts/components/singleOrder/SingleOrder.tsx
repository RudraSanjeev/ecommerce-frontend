import { ChangeEvent, useState } from "react";
import "./singleCart.scss";
import APIClient from "../../../../services/axios/apiClient";
import { useDispatch } from "react-redux";
import AuthService from "../../../../services/axios/AuthService";
import { updateCart } from "../../../../redux/cartSlice";
import axios from "axios";
export interface Products {
  id: string;
  image: string[];
  title: string;
  size: string[];
  color: string[];
  price: number | string;
  orderQuantity: number;
  paymentStatus: string;
  orderDate: string;
  paymentMode: string;
  orderStatus: string;
  total: string | number;
  discount?: string | number;
  MRP?: string | number;
}
const SingleCart = ({
  id,
  image,
  title,
  size,
  color,
  price,
  orderQuantity,
  discount,
  MRP,
}: Products) => {
  // console.log("title: " + title);
  // console.log("image: " + image[0]);
  // console.log("quantity: " + cartQuantity);
  const dispatch = useDispatch();
  const apiClient = new APIClient(`/carts`);
  const [currCartQuantity, setQuantity] = useState<number>(orderQuantity);

  const handleCartQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleCartUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(currCartQuantity);
    axios
      .patch(
        `http://localhost:8000/api/carts/${id}`,
        { items: { quantity: currCartQuantity } },
        {
          headers: {
            token: `Bearer ${AuthService.getToken()}`,
          },
        }
      )
      .then((res) => {
        dispatch(
          updateCart({
            cartItems: res.data.items,
            totalPrice: res.data.totalPrice,
          })
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // const handleCartDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   axios
  //     .delete(`http://localhost:8000/api/carts/${id}`, {
  //       headers: {
  //         token: `Bearer ${AuthService.getToken()}`,
  //       },
  //     }).then((res)=>{

  //     })

  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });

  //   apiClient.getAllCarts().then((res) => {
  //     dispatch(
  //       updateCart({
  //         cartItems: res.items,
  //         totalPrice: res.totalPrice,
  //       })
  //     );
  //   });
  // };

  const handleCartDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/api/carts/${id}`, {
        headers: {
          token: `Bearer ${AuthService.getToken()}`,
        },
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        apiClient.getAllCarts().then((res) => {
          dispatch(
            updateCart({
              cartItems: res.items,
              totalPrice: res.totalPrice,
            })
          );
        });
      });
  };
  const handleAddToWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/wishlists`, {
        headers: {
          token: `Bearer ${AuthService.getToken()}`,
        },
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="singleCartContainer">
      <div className="imageContainer">
        <img src={image[0]} alt="imgErr" />
      </div>
      <div className="cartInfo">
        <h3>{title || "no title"}</h3>
        {/* <small style={inStock ? { color: "green" } : { color: "red" }}>
          {inStock == true ? "inStock" : "Out of Stock"}
        </small> */}
        <small className="cartInfoSmallBold">
          size: <span>{size[0]} </span>
        </small>
        <small className="cartInfoSmallBold">
          color: <span>{color[0]}</span>
        </small>
        <div className="singleCartActionOption">
          <span className="singleCartActionSelect">
            <label htmlFor="Qty">Qty: </label>
            <select defaultValue={orderQuantity} onChange={handleCartQuantity}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </span>
          <span className="singleCartActionButton">
            <button onClick={handleCartUpdate}>Update</button>
          </span>
          <span className="singleCartActionButton">
            <button onClick={handleCartDelete}>delete</button>
          </span>
          <span className="singleCartActionButton">
            <button onClick={handleAddToWishlist}>Add to Wishlist</button>
          </span>
        </div>
      </div>
      <div className="cartPrice">
        <span className="singleCartPriceDiscount">{discount}% off</span>
        <span className="singleCartPrice">
          <sup>$</sup> {price}
        </span>
        <span className="singleCartMRP">
          M.R.P.<small> ${MRP}</small>
        </span>
      </div>
    </div>
  );
};

export default SingleCart;
