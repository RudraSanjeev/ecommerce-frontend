import { useState } from "react";
import "./singleWishlist.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import APIClient from "../../../../services/axios/apiClient";
import AuthService from "../../../../services/axios/AuthService";
import { addItemToCart } from "../../../../redux/cartSlice";
export interface Wishlist {
  _id: string | number;
  title: string;
  desc: string;
  img: string[];
  currency: string;
  price: string | number;
  quantity: number | string;
  size: string[];
  color: string[];
  inStock: Boolean;
}
const SingleWishlist = ({
  _id,
  title,
  desc,
  img,
  price,
  quantity,
  inStock,
}: Wishlist) => {
  const apiClient = new APIClient("/carts");
  const [cartQuantity, setCartQuantity] = useState<any>(1);
  const dispatch = useDispatch();

  const handleCartChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCartQuantity(e.target.value);
  };

  const handleCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
        // dispatch(addItemToCart({
        //    {productId: items[itemLen-2].productId,
        //   quantity: items[itemLen-2].quantity
        // }, totalPrice: res.totalPrice }));
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

  const handleWishlistDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const apiClientWishlist = new APIClient(`/wishlists/${_id}`);
    apiClientWishlist
      .deleteWishlist({
        headers: {
          token: `Bearer ${AuthService.getToken()}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="singleWishlistContainer">
      <div className="singleWishlistImgBox">
        <img src={img[0]} alt="imgErr" />
      </div>
      <div className="singleWishlistInfoBox">
        <span>{title}</span>
        <span>{desc}</span>
        <span>$ {price}</span>
        <span>
          {" "}
          {inStock ? (
            <span style={{ color: "green" }}>inStock</span>
          ) : (
            <span style={{ color: "red" }}>out of stock</span>
          )}
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
      </div>
      <div className="singleWishlistActionButton">
        <button className="addToCart" onClick={handleCart}>
          Add to Cart
        </button>
        <button className="deleteWishlist" onClick={handleWishlistDelete}>
          <DeleteIcon style={{ color: "orange", fontSize: "3rem" }} />
        </button>
      </div>
    </div>
  );
};

export default SingleWishlist;
