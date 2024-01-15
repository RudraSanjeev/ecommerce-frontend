import "./orderContainer.scss";
import { singleOrderData } from "../../data/singleOrderData";
// import SingleOrder from "../singleOrder/SingleOrder";
import { SetStateAction, useEffect, useState } from "react";
import APIClient from "../../../../services/axios/apiClient";

import AuthService from "../../../../services/axios/AuthService";
import SingleOrder from "../singleOrder/SingleOrder";

const OrderContainer = () => {
  const apiClient = new APIClient("/orders");

  const [orderProducts, setOrderProducts] = useState<any[]>([]);

  useEffect(() => {
    const newOrderData: SetStateAction<any[]> = [];
    apiClient
      .getAllOrdersOfParticularUser({
        headers: {
          token: `Bearer ${AuthService.getToken()}`,
        },
      })
      .then((order: any) => {
        for (let i = 0; i < order.length; i++) {
          const orderData = {
            id: order[i]._id,
            items: order[i].items,
            // paymentMode: order[i].paymentMode,
            paymentStatus: order[i].paymentStatus,
            orderDate: order[i].createdAt,
            orderStatus: order[i].orderStatus,
            createdAt: order[i].createdAt,
            // total: order[i].total,
          };
          newOrderData.push(orderData);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setOrderProducts(newOrderData);
      });
  }, []);

  return (
    <div className="cartContainer">
      <div className="cartContainerLeft">
        <div className="cartContainerHeading">
          <h1>Your Orders</h1>
          <small>Price</small>
        </div>
        <span className="hr"></span>

        {orderProducts.map((item: any) => (
          <div key={item.id} className="singleCartBox">
            <SingleOrder {...item} />
            <span className="hr"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderContainer;
