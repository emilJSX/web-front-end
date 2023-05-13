import React, { useEffect, useState } from "react";
import { Grid, Image, TextInput } from "@mantine/core";
import {
  BlueContainer,
  PaymentBody,
  PaymentContainer,
  WishLogo,
  ArrowWishLogoContainer,
  WishXText,
  MobileDetailsArrow,
  MobileDetailsText,
  PayWishTxt,
  Cost,
  WatchImage,
  WatchTxtCost,
  WatchTxt,
  WatchCost,
  SubtotalSection,
  SubtotalCost,
  SubtotalTxt,
  SubTotalContainer,
  SalesTxtCost,
  SalestaxTxt,
  BottomTextSection,
  StripeTxt,
  TermsTxt,
  PrivacyTxt,
  PoweredStripeTxt,
  InputContainer,
  OrPayWithCardText,
  MobileWatchImage,
  PayWishMobile,
  PayWishCostMobile,
  StripeTxtMobile,
  PoweredTextMobile,
  TermsPrivacyContainer,
  TermsTextMobile,
  PrivacyTextMobile,
} from "./Payment.styled";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { ReactComponent as Wishlogo } from "../../style/icons/wishy.svg";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { Link, useLocation, useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { myaxiosprivate } from "../../api/myaxios";
import { enqueueSnackbar } from "notistack";
// pk_test_51N3xZaLOlAPVVM1WMKwN1XSivRkzdLysAtEETTo505UI7ze3Yvu1USFJzQ6AX4GhcF1OvKU10cPwCBC7GeRkhcRj00phSw8cOv
const stripePromise = loadStripe(
  "pk_test_51N3xZaLOlAPVVM1WMKwN1XSivRkzdLysAtEETTo505UI7ze3Yvu1USFJzQ6AX4GhcF1OvKU10cPwCBC7GeRkhcRj00phSw8cOv"
);
const Payment = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  useEffect(() => {
    if (!state) {
      navigate("/wish-list");
      enqueueSnackbar("You need to choose wish to go to Payments page");
    }
  }, []);
  const [clientSecret, setClientSecret] = useState(null);
  useEffect(() => {
    myaxiosprivate
      .post("/api/v1/payments/stripe-intent", {
        amount: state && +state.amount * 100,
        type: state && state.paymentType,
        wish_id: state && state.wishData.id,
        currency: "usd",
        stripe: `pk_test_51N3xZaLOlAPVVM1WMKwN1XSivRkzdLysAtEETTo505UI7ze3Yvu1USFJzQ6AX4GhcF1OvKU10cPwCBC7GeRkhcRj00phSw8cOv`,
      })
      .then(({ data }) => {
        setClientSecret(data.client_secret);
      });
  }, [state]);

  return (
    <PaymentBody>
      <PaymentContainer fluid>
        <Grid>
          <Grid.Col md={6}>
            <BlueContainer>
              <ArrowWishLogoContainer>
                <AiOutlineArrowLeft
                  style={{
                    color: "grey",
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginTop: 5,
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(-1)}
                />
                <Wishlogo /> <WishXText>WishX</WishXText>
              </ArrowWishLogoContainer>
              <MobileDetailsArrow>
                <MobileDetailsText>Details</MobileDetailsText>
                <IoIosArrowDown style={{ color: "grey", fontSize: "15px" }} />
              </MobileDetailsArrow>

              <MobileWatchImage
                src={`${process.env.REACT_APP_API_URL}/${state?.wishData?.image}`}
                className="rounded-md"
              />
              <PayWishMobile>Pay WISHX</PayWishMobile>
              <PayWishCostMobile>${state?.amount}</PayWishCostMobile>

              <PayWishTxt>Pay WISHX</PayWishTxt>
              <Cost>${state?.amount}</Cost>

              <WatchTxtCost>
                <WatchImage
                  src={`${process.env.REACT_APP_API_URL}/${state?.wishData?.image}`}
                  className="rounded-md"
                />
                <WatchTxt>
                  {state?.wishData?.title}
                  for {state?.wishData?.user?.name}’s Birthday
                </WatchTxt>
                <WatchCost>${state?.wishData?.price}</WatchCost>
              </WatchTxtCost>
              <SubTotalContainer>
                <SubtotalSection>
                  <SubtotalTxt>Gift Price</SubtotalTxt>
                  <SubtotalCost>${state?.actualAmount}</SubtotalCost>
                </SubtotalSection>
                <hr className="line" />
                  {console.log(state)}
                <SubtotalSection>
                  <SalestaxTxt>Processing fee</SalestaxTxt>
                  <SalesTxtCost>${state?.processing_fee}</SalesTxtCost>
                </SubtotalSection>
                <hr className="line" />
                <SubtotalSection>
                  <SalestaxTxt>Service fee</SalestaxTxt>
                  <SalesTxtCost>${state?.service_fee}</SalesTxtCost>
                </SubtotalSection>
                <hr className="line" />
                <SubtotalSection>
                  <SubtotalTxt>Total due</SubtotalTxt>
                  <SubtotalCost>${state?.amount}</SubtotalCost>
                </SubtotalSection>
                <hr className="line" />
              </SubTotalContainer>

              <BottomTextSection>
                <PoweredStripeTxt>
                  Powered by <StripeTxt>stripe</StripeTxt>
                </PoweredStripeTxt>
                <hr style={{ writingMode: "tb-rl" }} />
                <Link to="/privacy" target="_blank">
                  <TermsTxt className="mx-1">Terms & Privacy</TermsTxt>
                </Link>
              </BottomTextSection>
            </BlueContainer>
          </Grid.Col>
          <Grid.Col md={6}>
            {stripePromise && clientSecret && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm state={state} clientSecret={clientSecret} />
              </Elements>
            )}
          </Grid.Col>
        </Grid>
      </PaymentContainer>
    </PaymentBody>
  );
};

export default Payment;
{
  /* <Grid.Col md={6}>
<InputContainer>
  <button className="log-in-with-apple-button">
    <FaApple className="apple-icon" />
    <h5 className="apple-title">Pay</h5>
  </button>

  <div
    className="mt-5 mb-5"
    style={{
      width: "100%",
      height: "12px",
      borderBottom: "1px solid grey",
      textAlign: "center",
    }}
  >
    <span
      style={{
        fontSize: "14px",
        color: "grey",
        backgroundColor: "#F3F5F3",
        padding: "0 10px",
      }}
    >
      Or pay with card
    </span>
  </div>

  <OrPayWithCardText></OrPayWithCardText>

  <TextInput style={{ width: "100%" }} label="Email" />

  <div className="address mt-4">
    <p className="dis mb-3">Card information</p>
    <input
      class="form-control"
      type="text"
      placeholder="1234 1234 1234 1234"
    />
    <div className="d-flex">
      <input
        className="form-control zip"
        type="text"
        placeholder="MM/YY"
      />
      <input
        className="form-control state"
        type="text"
        placeholder="CVC"
      ></input>
    </div>
  </div>

  <TextInput
    style={{ width: "100%" }}
    label="Name on card"
    className="mt-4"
  />

  <div className="address mt-4">
    <p className="dis mb-3">Country or region</p>
    <select
      className="form-select"
      aria-label="Default select example"
    >
      <option selected hidden>
        United States
      </option>
      <option value="1">United States</option>
      <option value="2">Australia</option>
      <option value="3">Canada</option>
    </select>
    <div className="d-flex">
      <input
        className="form-control zip"
        type="text"
        placeholder="ZIP"
      />
    </div>
  </div>

  <button className="pay-btn mt-5">
    <h5 className="pay-title">Pay</h5>
  </button>

  <PoweredTextMobile>
    Powered by <StripeTxtMobile>stripe</StripeTxtMobile>
  </PoweredTextMobile>
  <TermsPrivacyContainer>
    <TermsTextMobile>Terms</TermsTextMobile>
    <PrivacyTextMobile>Privacy</PrivacyTextMobile>
  </TermsPrivacyContainer>
</InputContainer>
</Grid.Col> */
}
