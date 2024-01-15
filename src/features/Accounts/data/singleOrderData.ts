import bg1 from "../assests/bg1.webp";
import bg2 from "../assests/bg2.jpg";
import bg3 from "../assests/bg3.jpg";
import bg4 from "../assests/bg3.jpg";

export const singleOrderData = [
  {
    id: "1",
    items: [
      {
        productId: {
          id: "a1",
          title: "MacBook m1",
          image: [bg1, bg2, bg3, bg4],
          currency: "INR",
          price: 32321,
          quantity: 3,
          size: "mini",
          color: "yellow",
        },
        quantity: 2,
        id: "b1",
      },
      {
        productId: {
          id: "a2",
          title: "MacBook m1",
          image: [bg2, bg1, bg3, bg4],
          currency: "INR",
          price: 32321,
          quantity: 3,
          size: "mini",
          color: "yellow",
        },
        quantity: 2,
        id: "b2",
      },
      {
        productId: {
          id: "a3",
          title: "MacBook m1",
          image: [bg3, bg1, bg2, bg4],
          currency: "INR",
          price: 32321,
          //   quantity: 3,
          size: "mini",
          color: "yellow",
        },
        quantity: 2,
        id: "b3",
      },
    ],
    paymentMode: "Cash on delivery",
    paymentStatus: "success",
    orderStatus: "pending",
    createdAt: "2024-01-13T07:24:18.456Z",
  },
  {
    id: "2",
    items: [
      {
        productId: {
          id: "a4",
          title: "MacBook m1",
          image: [bg4, bg1, bg2, bg3],
          currency: "INR",
          price: 32321,
          //   quantity: 3,
          size: "mini",
          color: "yellow",
        },
        quantity: 2,
        id: "b4",
      },
      //   {
      //     productId: {
      //       id: "a5",
      //       title: "MacBook m1",
      //       image: [bg1, bg2, bg3, bg4],
      //       currency: "INR",
      //       price: 32321,
      //       quantity: 3,
      //       size: "mini",
      //       color: "yellow",
      //     },
      //     quantity: 2,
      //     id: "b5",
      //   },
      //   {
      //     productId: {
      //       id: "a6",
      //       title: "MacBook m1",
      //       image: [bg1, bg2, bg3, bg4],
      //       currency: "INR",
      //       price: 32321,
      //       quantity: 3,
      //       size: "mini",
      //       color: "yellow",
      //     },
      //     quantity: 2,
      //     id: "b6",
      //   },
    ],
    paymentMode: "Cash on delivery",
    paymentStatus: "success",
    orderStatus: "pending",
    createdAt: "monday",
  },
];
