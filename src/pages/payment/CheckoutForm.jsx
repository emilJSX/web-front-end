import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
function CheckoutForm({ slug }) {
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    if (!stripe && !elements) {
      return;
    }
    await stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `http://localhost:3000/wish/${slug}`,
        },
        redirect: "if_required",
      })
      .then((res) => {
        console.log(res);
        setSucceeded(true);
        setError(null);
        setProcessing(false);
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
  };
  return (
    <form className="mt-10" onSubmit={handleSubmit}>
      <PaymentElement onChange={handleChange} />
      <button
        className="pay-btn mt-5"
        type="submit"
        disabled={processing || disabled || succeeded}
      >
        <span className="pay-title">
          {processing ? <p>Processing</p> : "Pay"}
        </span>
      </button>
    </form>
  );
}

export default CheckoutForm;
