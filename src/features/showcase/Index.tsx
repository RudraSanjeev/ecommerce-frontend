import Banner from "./components/banner/Banner";
import { bannerImages } from "./data/bannerData";

const Index = () => {
  return (
    <div className="showcase">
      <Banner images={bannerImages} />
    </div>
  );
};

export default Index;
