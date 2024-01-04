import "./cartContainer.scss";
import { singleCartData } from "../../data/singleCartData";
import SingleCart from "../singleCart/SingleCart";

interface Props {
  total: number;
  quantity: number;
}

const CartContainer = ({ total, quantity }: Props) => {
  return (
    <div className="cartContainer">
      <div className="cartContainerLeft">
        <div className="cartContainerHeading">
          <h1>Shopping Cart</h1>
          <small>Price</small>
        </div>
        <span className="hr"></span>

        {singleCartData.map((item) => (
          <div key={item.id} className="singleCartBox">
            <SingleCart {...item} />
            <span className="hr"></span>
          </div>
        ))}

        <div className="cartContainerSubTotal">
          <h3>Subtotal: $ {total}</h3>
        </div>
      </div>
      <div className="cartContainerRight">
        <div className="cartContainerProceedToBuy">
          <h3>Cart Summary</h3>
          <span>Items: {quantity}</span>
          <span>Subtotal: $ {total}</span>
          <button>Proceed to Buy</button>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
