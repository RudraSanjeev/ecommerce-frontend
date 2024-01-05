import "./OrderSummary.scss";
const OrderSummary = () => {
  return (
    <div className="checkoutOptionCardContainerRightOrderSummary">
      <div className="checkoutOptionCardContainerRightOrderSummaryButton">
        <button>Use this payment method</button>
        <small>
          Choose a shipping address and payment method to calculate shipping,
          handling and tax.
        </small>
      </div>
      <span className="hr"></span>
      <div className="checkoutOptionCardContainerRightOrderSummaryInfo">
        <h3>Order Summary</h3>
        <span className="checkoutOptionCardContainerRightOrderSummaryInfoItem">
          <small className="key">Items</small>
          <small className="value">$34242</small>
        </span>
        <span className="checkoutOptionCardContainerRightOrderSummaryInfoItem">
          <small className="key">Delivery</small>
          <small className="value">$40</small>
        </span>
        <span className="checkoutOptionCardContainerRightOrderSummaryInfoItem">
          <small className="key">Total</small>
          <small className="value">$342423442</small>
        </span>
        <span className="checkoutOptionCardContainerRightOrderSummaryInfoItem">
          <small className="key">Promotion Applied</small>
          <small className="value">$32</small>
        </span>
        <span className="hr"></span>
        <span className="checkoutOptionCardContainerRightOrderSummaryInfoTotal">
          <span className="keyTotal">Order Total</span>
          <span className="valueTotal">$ 43243432</span>
        </span>
      </div>
      <span className="hr"></span>
      <div className="checkoutOptionCardContainerRightOrderSummaryLink">
        <small>How are delivery costs calculated?</small>
      </div>
    </div>
  );
};

export default OrderSummary;
