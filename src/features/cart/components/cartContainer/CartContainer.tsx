import "./cartContainer.scss";
import { singleCartData } from "../../data/singleCartData";
import SingleCart from "../singleCart/SingleCart";

interface Props {
  total: number;
}

const CartContainer = ({ total }: Props) => {
  return (
    <div className="cartContainer">
      <div className="cartContainerHeading">
        <h1>Shopping Cart</h1>
        <small>Price</small>
      </div>
      <span className="hr"></span>

      {singleCartData.map((item) => (
        <>
          <SingleCart {...item} key={item.id} />
          <span className="hr"></span>
        </>
      ))}

      <div className="cartContainerSubTotal">
        <h3>Subtotal: $ {total}</h3>
      </div>
    </div>
  );
};

export default CartContainer;
