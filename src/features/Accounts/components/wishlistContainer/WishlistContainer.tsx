import "./wishlistContainer.scss";
// import { singlWishlistData } from "../../data/singleWishlistData";
import { SetStateAction, useEffect, useState } from "react";
import APIClient from "../../../../services/axios/apiClient";

import AuthService from "../../../../services/axios/AuthService";
import SingleWishlist, { Wishlist } from "../singleWishlist/SingleWishlist";

const WishlistContainer = () => {
  const apiClient = new APIClient("/wishlists");

  const [wishlistProducts, setWishlistProducts] = useState<Wishlist[]>([]);

  useEffect(() => {
    const newOrderData: SetStateAction<any[]> = [];
    apiClient
      .getAllWishlist({
        headers: {
          token: `Bearer ${AuthService.getToken()}`,
        },
      })
      .then((order: any) => {
        for (let i = 0; i < order.items.length; i++) {
          // const orderData = {
          //   id: order.items[i].productId._id,
          //   title: order.items[i].productId.title,

          //   // total: order[i].total,
          // };
          newOrderData.push(order.items[i].productId);
        }
        setWishlistProducts(newOrderData);
      })

      .catch((err) => console.log(err));
    // .finally(() => {
    //   setWishlistProducts(newOrderData);
    // });
  }, [wishlistProducts]);

  // console.log(wishlistProducts);

  return (
    <div className="cartContainer">
      <div className="cartContainerLeft">
        <div className="cartContainerHeading">
          <h1>Your Wishlist</h1>
          <small>Action</small>
        </div>
        <span className="hr"></span>

        {wishlistProducts.map((item: Wishlist) => (
          <div key={item._id} className="singleCartBox">
            <SingleWishlist {...item} />
            <span className="hr"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistContainer;
