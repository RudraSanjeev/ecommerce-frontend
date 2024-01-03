import "./singleCart.scss";
interface Props {
  image: string;
  productInfos: {
    desc: string;
    inStock: Boolean;
    size: number | string;
    color: string;
    price: number | string;
    discount: string | number;
    MRP: string | number;
  };
}
const SingleCart = ({ image, productInfos }: Props) => {
  const { desc, inStock, size, color, price, discount, MRP } = productInfos;
  return (
    <div className="singleCartContainer">
      <div className="imageContainer">
        <img src={image} alt="imgErr" />
      </div>
      <div className="cartInfo">
        <h3>{desc}</h3>
        <small style={inStock ? { color: "green" } : { color: "red" }}>
          {inStock == true ? "inStock" : "Out of Stock"}
        </small>
        <small className="cartInfoSmallBold">
          size: <span>{size} </span>
        </small>
        <small className="cartInfoSmallBold">
          size: <span>{color}</span>
        </small>
        <div className="singleCartActionOption">
          <span className="singleCartActionSelect">
            <label htmlFor="Qty">Qty: </label>
            <select defaultValue={1}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </span>
          <span className="singleCartActionButton">
            <button>Update</button>
          </span>
          <span className="singleCartActionButton">
            <button>delete</button>
          </span>
          <span className="singleCartActionButton">
            <button>Add to Wishlist</button>
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
