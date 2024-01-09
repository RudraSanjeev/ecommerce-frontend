import { useParams } from "react-router-dom";
import SingleProduct from "./components/singleProduct/SingleProduct";
// import { singleMobileData } from "./data/singleMobileData";
import useSingleProduct from "./hooks/useSingleProduct";
// import { policiesData } from "./data/singleMobileData";

const Index = () => {
  // const propsData = [...item, policiesData]
  const { productId } = useParams();
  // console.log(productId);
  const { product } = useSingleProduct(productId);
  // const  {id: product._id} = product;
  console.log(product);
  const items = {
    id: product._id,
    images: product.img,
    title: product.title,
    price: product.price,
  };

  return (
    <div>
      {/* {singleMobileData.map((item) => (
        <SingleProduct {...item} key={item.id} />
      ))} */}
      <SingleProduct {...items} />
    </div>
  );
};

export default Index;
