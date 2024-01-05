import "./home.scss";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import OptionCardAddress from "../../components/optionCardAddress/OptionCardAddress";
import OptionCardPayment from "../../components/OptionCardPayment/OptionCardPayment";
import OptionCardReviewOrder from "../../components/optionCardReviewOrder/OptionCardReviewOrder";
const Home = () => {
  return (
    <div className="checkoutHomeContainer">
      <div className="checkoutHomeContainerLeft">
        <OptionCardAddress />
        <span className="hr"></span>
        <OptionCardPayment />
        <span className="hr"></span>
        <OptionCardReviewOrder />
        <span className="hr"></span>
      </div>
      <div className="checkoutHomeContainerRight">
        <OrderSummary />
      </div>
    </div>
  );
};

export default Home;
