import bg1 from "../assets/bg1.webp";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";

export const singleCartData = [
  {
    id: 1,
    image: bg1,
    productInfos: {
      desc: "MacBook pro M3",

      inStock: true,
      size: "pro max",
      color: "white",
      price: 1800000,
      discount: 10,
      MRP: 3700000,
    },
  },
  {
    id: 2,
    image: bg2,
    productInfos: {
      desc: "Iphone 15 pro max",

      inStock: false,
      size: "M3",
      color: "silver",
      price: 3600000,
      discount: 30,
      MRP: 4700000,
    },
  },
  {
    id: 3,
    image: bg3,
    productInfos: {
      desc: "Adidas shoes limited Collection",
      inStock: true,
      size: "8",
      color: "white",
      price: 1800000,
      discount: 10,
      MRP: 3700000,
    },
  },
];
