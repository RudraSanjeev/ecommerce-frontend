import "./productScroller.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export interface Products {
  scrollerItems: {
    id: string | number;
    title: string;
    price: number | string;
    image: string;
    discount?: string;
  }[];
}
const ProductScroller = ({ scrollerItems }: Products) => {
  const settings = {
    infinite: true,
    arrows: true,
    // variableWidth: true,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  return (
    <div className="productScrollerContainer">
      <h1>Today’s Deals</h1>
      <Slider {...settings} className="productSlider">
        {scrollerItems.map((item) => (
          <div className="ProductSliderCard" key={item.id}>
            <div className="image">
              <img src={item.image} alt="productImgErr" />
            </div>
            <div className="productSliderInfo">
              <span>{item.title}</span>
              <div className="priceAndDiscounts">
                <span className="price"> $ {item.price}</span>
                <span className="discount"> {item.discount || "40% OFF"}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductScroller;
