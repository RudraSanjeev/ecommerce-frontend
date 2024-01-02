import SingleProduct from "./components/singleProduct/SingleProduct";
import { singleMobileData } from "./data/singleMobileData";
// import { policiesData } from "./data/singleMobileData";

const Index = () => {
  // const propsData = [...item, policiesData]
  return (
    <div>
      {singleMobileData.map((item) => (
        <SingleProduct {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Index;
