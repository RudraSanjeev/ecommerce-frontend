import "./featuredProductCard.scss";
interface Props {
  heading: string;
  products: {
    id: number | string;

    title: string;
    image: string;
  }[];
}
const FeaturedProductCard = ({ heading, products }: Props) => {
  return (
    <div className="featuredProductCardContainer">
      <h3>{heading}</h3>
      <div className="cardGrid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <div className="image">
              <img src={item.image} alt="cardImgErr" />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductCard;
