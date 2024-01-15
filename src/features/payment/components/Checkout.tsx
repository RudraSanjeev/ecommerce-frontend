import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Axios from "axios"; // Import Axios library

interface Props {
  onPaymentSuccess: any;
}

export default function CheckoutForm({ onPaymentSuccess }: Props) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    Axios.post("/retrieve-payment-intent", { clientSecret })
      .then((response) => {
        const paymentIntent = response.data.paymentIntent;

        switch (paymentIntent?.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            onPaymentSuccess(); // Notify the parent component about the success
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      })
      .catch((error) =>
        console.error("Error retrieving payment intent:", error)
      );
  }, [stripe, onPaymentSuccess]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await Axios.post("/confirm-payment", {
        elements,
        confirmParams: {
          return_url: "http://localhost:3000",
        },
      });

      if (
        data.error?.type === "card_error" ||
        data.error?.type === "validation_error"
      ) {
        setMessage(data.error.message || "");
      } else {
        setMessage("An unexpected error occurred.");
      }
    } catch (error) {
      console.error("Error confirming payment:", error);
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
