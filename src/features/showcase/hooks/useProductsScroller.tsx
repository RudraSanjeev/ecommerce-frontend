import { useEffect, useState } from "react";
import APIClient from "../../../services/axios/apiClient";
// import { Products } from "../components/productScroller/ProductScroller";

const useProductScroller = () => {
  // here also you can pass limit to get spefic no of products
  const apiClient = new APIClient("/products");

  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    apiClient.getAllProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return { products };
};

export default useProductScroller;
