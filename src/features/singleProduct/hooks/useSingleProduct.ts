import { useEffect, useState } from "react";
import APIClient from "../../../services/axios/apiClient";
// import { Products } from "../components/productScroller/ProductScroller";

const useSingleProduct = (productId: any) => {
  // here also you can pass limit to get spefic no of products
  const apiClient = new APIClient(`/products/${productId}`);

  const [product, setProduct] = useState<any>({});
  console.log(productId);
  useEffect(() => {
    apiClient
      .getSingleProduct()
      .then((res) => {
        setProduct(res);
        console.log(res);
      })
      .catch((res) => console.log(res));
  }, []);

  return { product };
};

export default useSingleProduct;
