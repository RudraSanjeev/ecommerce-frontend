import "./featuredProductCards.scss";
import { data } from "../../data/featuredProductCardsData";
import FeaturedProductCard from "../featuredProductCard/FeaturedProductCard";
const FeaturedProductCards = () => {
  return (
    <div className="featuredProductCardsContainer">
      {data.map((item) => (
        <FeaturedProductCard
          key={item.id}
          heading={item.heading}
          products={item.products}
        />
      ))}
    </div>
  );
};

export default FeaturedProductCards;
