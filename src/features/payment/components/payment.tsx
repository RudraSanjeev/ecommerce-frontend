import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Axios from "axios"; // Import Axios library
import CheckoutForm from "./Checkout";

const stripePromise = loadStripe(
  "pk_test_51N8gzOSIpaoty1me02OgdOgBMW2jXp90HiPuosxjmubXif4eLV7ptSSFxUQy5diqJ2rC7kHNo7GpYBKc09wPCkW300d2rfKo1S"
);

export default function Payment() {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    Axios.post(
      "http://localhost:8000/api/orders",
      {
        paymentMode: "Cash on delivery",
        deliveryAddressId: "65a23a9ae1b208f68c858fdf",
      },
      {
        headers: {
          token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWEyMzkwOWUxYjIwOGY2OGM4NThmY2QiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDUyNTU2ODIsImV4cCI6MTcwNTI1OTI4Mn0.gaXLhturoFLacQPmpOXPPeUMpc5jhfrp0DJyDXnxcQQ`,
        },
      }
    )
      .then((response) => setClientSecret(response.data.paymentToken))
      .catch((error) => console.error("Error fetching client secret:", error));
  }, []);

  const handlePaymentSuccess = () => {
    // Handle successful payment, e.g., update the order status on the server
    setPaymentSuccess(true);
  };

  const appearance = {
    theme: "stripe",
  };

  const options: any = {
    clientSecret,
    appearance,
  };

  return (
    <div className="Payment">
      {clientSecret && !paymentSuccess && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm onPaymentSuccess={handlePaymentSuccess} />
        </Elements>
      )}
      {paymentSuccess && (
        <div>Payment successful! Thank you for your order.</div>
      )}
    </div>
  );
}
