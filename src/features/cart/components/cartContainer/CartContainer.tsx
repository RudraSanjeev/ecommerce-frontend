import "./cartContainer.scss";
// import { singleCartData } from "../../data/singleCartData";
import SingleOrder from "../singleCart/SingleCart";
import { useEffect, useState } from "react";
import APIClient from "../../../../services/axios/apiClient";
import { useSelector } from "react-redux";
import { Products } from "../singleCart/SingleCart";
import { Link } from "react-router-dom";
interface Props {
  total: number;
  quantity: number;
}

const OrderContainer = ({ total, quantity }: Props) => {
  const { cartItems } = useSelector((state: any) => state.cart);

  // const [cartProducts, setCartProducts] = useState<Products[]>([]);
  const [cartProducts, setCartProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const newCartProducts: any[] = [];

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        const apiClient = new APIClient(`/products/${item.productId}`);

        try {
          const res = await apiClient.getproduct();

          const singleProduct = {
            id: res._id,
            image: res.img,
            title: res.title,
            inStock: res.inStock,
            size: res.size,
            color: res.color,
            price: res.price,
            cartQuantity: item.quantity,
            discount: "40% off",
            MRP: "42433",
          };

          newCartProducts.push(singleProduct);
        } catch (err) {
          console.log(err);
        }
      }

      setCartProducts(newCartProducts);
    };

    fetchProductDetails();
  }, [cartItems]);
  // console.log(cartProducts);

  return (
    <div className="cartContainer">
      <div className="cartContainerLeft">
        <div className="cartContainerHeading">
          <h1>Your Carts</h1>
          <small>Price</small>
        </div>
        <span className="hr"></span>

        {cartProducts.map((item) => (
          <div key={item.id} className="singleCartBox">
            <SingleOrder {...item} />
            <span className="hr"></span>
          </div>
        ))}
        {/* {singleCartData.map((item) => (
          <div key={item.id} className="singleCartBox">
            <SingleCart {...item} />
            <span className="hr"></span>
          </div>
        ))} */}

        <div className="cartContainerSubTotal">
          <h3>Subtotal: $ {total}</h3>
        </div>
      </div>
      <div className="cartContainerRight">
        <div className="cartContainerProceedToBuy">
          <h3>Cart Summary</h3>
          <span>Items: {quantity}</span>
          <span>Subtotal: $ {total}</span>
          <Link
            to="/checkout"
            style={{
              textDecoration: "none",
              color: "initial",
            }}
          >
            <button>Proceed to Buy</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderContainer;
