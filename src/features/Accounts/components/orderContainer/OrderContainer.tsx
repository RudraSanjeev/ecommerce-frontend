import "./orderContainer.scss";
// import { singleCartData } from "../../data/singleCartData";
// import SingleOrder from "../singleOrder/SingleOrder";
import { useEffect, useState } from "react";
import APIClient from "../../../../services/axios/apiClient";
// import { useSelector } from "react-redux";
// import { Products } from "../singleOrder/SingleOrder";
import AuthService from "../../../../services/axios/AuthService";

const OrderContainer = () => {
  const apiClientOrder = new APIClient("/orders");

  const [orderProducts, setOrderProducts] = useState<any[]>([]);

  //   useEffect(() => {
  //     const fetchProductDetails = async () => {
  //       const newCartProducts: any[] = [];

  //       apiClientOrder
  //         .getAllOrdersOfParticularUser({
  //           headers: {
  //             token: `Bearer ${AuthService.getToken()}`,
  //           },
  //         })
  //         .then((order) => {
  //           //   console.log(order);

  //           for (let i = 0; i < order.items.length; i++) {
  //             const item = order.items[i];
  //             const apiClient = new APIClient(`/products/${item.productId}`);

  //             apiClient.getproduct().then((product) => {
  //               const singleProduct = {
  //                 id: product._id,
  //                 image: product.img,
  //                 title: product.title,
  //                 size: product.size,
  //                 color: product.color,
  //                 price: product.price,
  //                 orderQuantity: product.quantity,
  //                 paymentStatus: product.paymentStatus,
  //                 orderDate: product.createdAt,
  //                 paymentMode: product.paymentMode,
  //                 orderStatus: product.orderStatus,
  //                 total: product.total,
  //                 discount: "40% off",
  //                 MRP: "42433",
  //               };

  //               newCartProducts.push(singleProduct);
  //             });
  //           }
  //         })
  //         .catch((err) => console.log(err))
  //         .finally(() => {
  //           console.log(newCartProducts);
  //           setOrderProducts(newCartProducts);
  //         });
  //     };
  //     fetchProductDetails();
  //   }, []);
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const order = await apiClientOrder.getAllOrdersOfParticularUser({
          headers: {
            token: `Bearer ${AuthService.getToken()}`,
          },
        });

        const newCartProducts = [];

        // Check if order.items exists before trying to access its length
        if (order.items && Array.isArray(order.items)) {
          for (let i = 0; i < order.items.length; i++) {
            const item = order.items[i];
            const apiClient = new APIClient(`/products/${item.productId}`);
            const product = await apiClient.getproduct();

            const singleProduct = {
              id: product._id,
              image: product.img,
              title: product.title,
              size: product.size,
              color: product.color,
              price: product.price,
              orderQuantity: product.quantity,
              paymentStatus: product.paymentStatus,
              orderDate: product.createdAt,
              paymentMode: product.paymentMode,
              orderStatus: product.orderStatus,
              total: product.total,
              discount: "40% off",
              MRP: "42433",
            };

            newCartProducts.push(singleProduct);
          }
        }

        setOrderProducts(newCartProducts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, []); // Empty dependency array to run the effect only once

  console.log(orderProducts);

  return (
    <div className="cartContainer">
      <div className="cartContainerLeft">
        <div className="cartContainerHeading">
          <h1>Your Orders</h1>
          <small>Price</small>
        </div>
        <span className="hr"></span>

        {/* {orderProducts.map((item) => (
          <div key={item.id} className="singleCartBox">
            <SingleOrder {...item} />
            <span className="hr"></span>
          </div>
        ))} */}
        {/* {singleCartData.map((item) => (
          <div key={item.id} className="singleCartBox">
            <SingleCart {...item} />
            <span className="hr"></span>
          </div>
        ))} */}

        <div className="cartContainerSubTotal">
          <h3>Subtotal: $ {0}</h3>
        </div>
      </div>
      {/* <div className="cartContainerRight">
        <div className="cartContainerProceedToBuy">
          <h3>Cart Summary</h3>
          <span>Items: {quantity}</span>
          <span>Subtotal: $ {total}</span>
          <button>Proceed to Buy</button>
        </div>
      </div> */}
    </div>
  );
};

export default OrderContainer;
