import { useEffect, useState } from "react";
import APIClient from "../../../services/axios/apiClient";
// import axios from "axios";
// import { Products } from "../components/productScroller/ProductScroller";

const useSingleProduct = (productId: any) => {
  // here also you can pass limit to get spefic no of products
  const apiClient = new APIClient(`/products/${productId}`);

  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    apiClient
      .getSingleProduct()
      .then((res) => {
        setProduct(res);
        // setProduct(res);
      })
      .catch((res) => console.log(res));
  }, [productId]);

  return { product };
};

export default useSingleProduct;
