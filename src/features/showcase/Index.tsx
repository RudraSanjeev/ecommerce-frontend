import Banner from "./components/banner/Banner";
import FeaturedProductCards from "./components/featuredProductCards/FeaturedProductCards";
import ProductScroller from "./components/productScroller/ProductScroller";
import { bannerImages } from "./data/bannerData";
import { productScrollerData } from "./data/productScrollerData";
const Index = () => {
  return (
    <div className="showcase">
      <Banner images={bannerImages} />
      <FeaturedProductCards />
      <ProductScroller scrollerItems={productScrollerData} />
    </div>
  );
};

export default Index;
