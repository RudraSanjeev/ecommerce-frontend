import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios"; // Import Axios library
import CheckoutForm from "./Checkout";
import AuthService from "../../../services/axios/AuthService";
import "./payment.scss";
const stripePromise = loadStripe(
  "pk_test_51OHngASIg5uZxo3zYPaBcaFDcBglgldAeg7HXOYtGpVz6mElNmw9Jh5RVXlIhAZM4TakxUVbCmrtMwTZ2gAEzBOy00tVRvTU6d"
);

const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios
      .post(
        "http://localhost:8000/api/orders",
        {
          paymentMode: "Cash on delivery",
          deliveryAddressId: "65a11897e97584a2f5ab21dd",
        },
        {
          headers: {
            token: `Bearer ${AuthService.getToken()}`,
          },
        }
      )
      .then((response) => {
        // console.log(response.data.newOrder.paymentToken);
        setClientSecret(response.data.newOrder.paymentToken);
      })
      .catch((error) => console.error("Error fetching client secret:", error));
  }, []);

  const appearance = {
    theme: "stripe",
  };

  const options: any = {
    clientSecret,
    appearance,
  };

  return (
    <div className="Payment">
      {clientSecret ? (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      ) : (
        <span>error we get while fetching client secret</span>
      )}
    </div>
  );
};

export default Payment;
