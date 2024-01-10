// import { useParams } from "react-router-dom";
// import SingleProduct from "./components/singleProduct/SingleProduct";
// import { singleMobileData } from "./data/singleMobileData";
// import useSingleProduct from "./hooks/useSingleProduct";
// import { useEffect, useState } from "react";

// const Index = () => {
//   const { productId } = useParams();
//   const [item, setItems] = useState<any>({
//     id: "",
//     images: [],
//     title: "",
//     price: "",
//   });

//   const { product } = useSingleProduct(productId);
//   useEffect(() => {
//     setItems({
//       id: product._id,
//       images: product.img,
//       title: product.title,
//       price: product.price,
//     });
//   }, [product]);

//   console.log(item);

//   return (
//     <div>
//       {/* <SingleProduct {...singleMobileData[0]} />
//       {item.id !== "" ? (
//         <SingleProduct {...item} />
//       ) : (
//         <SingleProduct {...singleMobileData[0]} />
//       )} */}
//       <SingleProduct {...singleMobileData[0]} />
//     </div>
//   );
// };

// export default Index;

// // id: 1,
// // images: [
// //   "https://res.cloudinary.com/drdard8os/image/upload/v1704776900/mernEcomerce/product/mobiles/1/2_o0ia9j.jpg",
// //   "https://res.cloudinary.com/drdard8os/image/upload/v1704776899/mernEcomerce/product/mobiles/1/3_nmuj7s.jpg",
// // ],
// // title: "All new Iphone 15 pro max",
// // price: 180000,
// // discount: 65,

import { useParams } from "react-router-dom";
import SingleProduct from "./components/singleProduct/SingleProduct";
// import { singleMobileData } from "./data/singleMobileData";
import useSingleProduct from "./hooks/useSingleProduct";
import { useEffect, useState } from "react";

const Index = () => {
  const { productId } = useParams();
  const [item, setItems] = useState<any>({
    id: "",
    images: [],
    title: "",
    price: "",
    currency: "",
    size: [],
    color: [],
    inStock: "",
    quantity: 0,
    discount: "40",
  });

  const { product } = useSingleProduct(productId);

  useEffect(() => {
    // Check if the product has any properties before updating the state
    if (Object.keys(product).length > 0) {
      setItems({
        id: product._id,
        images: product.img,
        title: product.title,
        price: product.price,
        currency: product.currency,
        size: product.size,
        color: product.color,
        inStock: product.inStock,
        quantity: product.quantity,
        discount: "40",
      });
    }
  }, [product]);

  // console.log(item);

  return (
    <div>
      {Object.keys(product).length > 0 ? (
        <SingleProduct {...item} />
      ) : (
        // <SingleProduct {...singleMobileData[0]} />
        <div>NO item found</div>
      )}
    </div>
  );
};

export default Index;
