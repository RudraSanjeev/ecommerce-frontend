import { useSelector } from "react-redux";
import CartContainer from "./components/cartContainer/CartContainer";

const Index = () => {
  const { cartItems, totalPrice } = useSelector((state: any) => state.cart);
  // console.log(cartItems);
  return (
    <div>
      <CartContainer total={totalPrice} quantity={cartItems.length} />
    </div>
  );
};

export default Index;
