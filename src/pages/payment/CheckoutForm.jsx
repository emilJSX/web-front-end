import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { myaxios, myaxiosprivate } from "../../api/myaxios";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import ErrorModal from "./ErrorModal";
function CheckoutForm({ state, clientSecret }) {
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [errorModal, setErrorModal] = useState(false);
  const [errorModalText, setErrorModalText] = useState("");
  const [error, setError] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
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
          return_url: `https://wishx.me/wish/${state?.wishData?.slug}`,
        },
        redirect: "if_required",
      })
      .then(({ error }) => {
        if (error) {
          setErrorModal(true);
          setErrorModalText(error.message);
          setSucceeded(false);
          setError(null);
          setProcessing(false);
        } else {
          myaxios
            .post("/api/v1/wish/comments/store", {
              wish_id: state && state.wishData.id,
              amount: state && +state.actualAmount,
              amount_type: state && state.paymentType,
              message: state && state.message,
              user_name: state && state.name,
              payment_private_type: state && state.amountVisibilty,
              name_private_type: state && state.wisherVisibility,
              message_private_type: state && state.wisherVisibility,
              client_secret: clientSecret,
            })
            .then(({ data }) => {
              navigate(`/wish/${state.wishData.slug}`, {
                state: {
                  slug: state?.wishData?.slug,
                  name: state?.name,
                },
              });
              enqueueSnackbar("Payment succesfull");
            })
            .catch((err) => enqueueSnackbar(err.message));
          setSucceeded(true);
          setError(null);
          setProcessing(false);
        }
      })
      .catch((err) => enqueueSnackbar(err.message));
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
  };
  return (
    <>
      <form className="mt-10" onSubmit={handleSubmit}>
        <PaymentElement onChange={handleChange} />
        <button
          className="pay-btn my-5 hover:shadow-md hover:bg-[#2D008D]"
          type="submit"
          disabled={processing || disabled || succeeded}
        >
          <span className={disabled ? "pay-title " : "pay-title !text-white"}>
            {processing ? <p>Processing</p> : "Pay"}
          </span>
        </button>
      </form>
      <ErrorModal
        open={errorModal}
        handleClose={() => setErrorModal(false)}
        content={errorModalText}
      />
    </>
  );
}

export default CheckoutForm;
