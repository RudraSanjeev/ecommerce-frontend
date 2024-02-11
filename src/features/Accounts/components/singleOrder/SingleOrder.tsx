import "./singleOrder.scss";
interface Orders {
  id: string | number;
  items: [
    {
      productId: {
        id: string | number;
        title: string;
        img: string[];
        currency: string;
        price: string | number;
        quantity: number | string;
        size: string;
        color: string;
      };
      quantity: number | string;
      id: number | string;
    }
  ];
  paymentMode: string;
  paymentStatus: string;
  orderStatus: string;
  createdAt: string;
}
const SingleOrder = ({ items, orderStatus, createdAt }: Orders) => {
  // const multiple = items.length;
  // console.log(items);
  const createdAtDate = new Date(createdAt);

  // Convert to a local date string with time
  const formattedDate = createdAtDate.toLocaleString();
  // console.log(formattedDate);
  // console.log(id);

  return (
    <div className="singleOrderHistoryContainer">
      <div className="singleOrderHistoryImgBox">
        {items.length > 1 ? (
          items.map((item) => (
            <div key={item.id} className="singleOrderHistoryMultipleItemImgBox">
              <img src={item.productId.img[0]} alt="imgErr" />
            </div>
          ))
        ) : (
          <img
            src={items[0].productId.img[0] || ""}
            alt="imgErr"
            style={{ width: "100px", height: "100px" }}
          />
        )}
      </div>
      <div className="singleOrderHistoryInfoBox">
        {items.map((item) => (
          <span key={item.id}>{item.productId.title}</span>
        ))}
      </div>
      <div className="singleOrderHistoryPriceBox">
        {items.map((item) => (
          <span> $ {item.productId.price}</span>
        ))}
      </div>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: orderStatus === "pending" ? "goldenrod" : "green",
          }}
        >
          {orderStatus}
        </span>
        <span>{formattedDate}</span>
      </span>
    </div>
  );
};

export default SingleOrder;
