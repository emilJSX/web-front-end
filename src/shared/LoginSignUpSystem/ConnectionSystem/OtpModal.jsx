import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import OtpInput from "react-otp-input";
import { myaxios } from "../../../api/myaxios";
import { Container, Title } from "../Login/Login.Styled";
import {
  Button1,
  Main,
  OpacityBlog,
  Paragraph,
} from "../Register/Register.Styled";
import OtpTimer from "./OtpTimer";

function OtpModal({ status, handleRegister, show }) {
  const [otpError, setOtpError] = useState();
  const [otp, setOtp] = useState();
  const [message, setMessage] = useState("");
  const sendOtpAgain = async () => {
    await myaxios
      .get("api/v1/recovery/get-code", {
        params: {
          email: email,
        },
      })
      .then((res) => {
        if (res?.status === 200) setMessage("Check your email");
      })
      .catch((err) => {
        setOtpError(err.message);
      });
  };
  return (
    <Main>
      <OpacityBlog></OpacityBlog>
      <Container style={{ zIndex: "10", overflow: "hidden" }}>
        <form>
          <Button1
            onClick={() => {
              localStorage.removeItem("token");
              show(false);
            }}
          >
            <BiX style={{ fontSize: "20px" }} />
          </Button1>
          <Title>Confirm your email </Title>
          <Paragraph>Enter the code we sent to your email </Paragraph>
          <div className="content_container" style={{ height: "60px" }}>
            {/* <Edit className='edit_number'>Edit phone number</Edit> */}
            <OtpTimer passRecover={sendOtpAgain} initialStatus={status} />
          </div>
          {message && (
            <p className="mx-14 mt-2 mb-3 text-green-500 text-xs">{message}</p>
          )}
          <div className="otp_input_div">
            <OtpInput
              className="otp_input"
              value={otp}
              onChange={(e) => setOtp(e)}
              numInputs={6}
              separator={<span> </span>}
            />
          </div>
          {otpError && (
            <p className="mx-14 mt-2 mb-3 text-red-500 text-xs">{otpError}</p>
          )}
          <div className="otpsend-btn">
            <button
              onClick={() => {
                handleRegister(otp);
                show(false);
              }}
            >
              Confirm
            </button>
          </div>
        </form>
      </Container>
    </Main>
  );
}

export default OtpModal;
