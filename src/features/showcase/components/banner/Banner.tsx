import "./Banner.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface Props {
  images: string[];
}
const Banner = ({ images }: Props) => {
  const settings = {
    infinite: true,
    arrows: true,
    // variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bannerContainer">
      <div className=" slick-prev ">prev</div>
      <Slider {...settings} className="bannerSlider">
        {images.map((item, index) => (
          <img key={index} src={item} alt="imageUrl" />
        ))}
      </Slider>
      <div className=" slick-next">Next</div>
    </div>
  );
};

export default Banner;
