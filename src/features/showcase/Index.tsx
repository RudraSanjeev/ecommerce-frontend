import Banner from "./components/banner/Banner";
import FeaturedProductCards from "./components/featuredProductCards/FeaturedProductCards";
import ProductScroller from "./components/productScroller/ProductScroller";
import { bannerImages } from "./data/bannerData";
// import { productScrollerData } from "./data/productScrollerData";
import useProductScroller from "./hooks/useProductsScroller";

const Index = () => {
  const { products } = useProductScroller();

  const productData = products.map((item: any) => ({
    id: item._id,
    title: item.title,
    price: item.price,
    image: item.img[0],
  }));

  // console.log(products);
  return (
    <div className="showcase">
      <Banner images={bannerImages} />
      <FeaturedProductCards />
      <ProductScroller scrollerItems={productData} />
    </div>
  );
};

export default Index;
