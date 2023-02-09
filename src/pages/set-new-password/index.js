import {
  Passworde,
  ButtonSignUps,
  Div,
  EAdress,
  Titles,
  TopNavigator,
  PasswordContainer,
} from "./SetNewPassword.Style.js";
import { AiOutlineEye } from "react-icons/ai";
import React, { useState } from "react";
import CustomBreadcrumb from "../../shared/components/breadcrumb";
import OtpInput from "react-otp-input";
import { myaxios } from "../../api/myaxios.js";
import { useLocation, useNavigate } from "react-router-dom";

function Finally() {
  const [showPass, setShowPass] = useState(false);
  const [getNewPassword, setNewPassword] = useState();
  const [otp, setOtp] = useState();
  const { state } = useLocation();
  const [otpError, setOtpError] = useState();
  const navigate = useNavigate();

  const handleNewPassword = async () => {
    if (otp?.length === 0) {
      setOtpError("otp code must have 6 numeric characters");
    } else {
      await myaxios
        .post("/api/v1/profiles/store/new-password", {
          email: state.recoveryEmail,
          otp: otp,
          new_password: getNewPassword,
        })
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          if (err.response.status === 404)
            setOtpError("Your email or otp code is wrong, please check again");
          else {
            setOtpError("Something went wrong ...");
          }
        });
    }
  };

  return (
    <>
      <PasswordContainer
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TopNavigator className="sm-buttons-conatiner">
          <div className="flex items-center justify-center mb-4">
            <CustomBreadcrumb
              links={[
                {
                  title: "Main",
                  to: "/",
                },
                {
                  title: "Set Password",
                },
              ]}
            />
          </div>
        </TopNavigator>
        <Titles
          className="titles"
          style={{
            margin: "0",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Set new password
        </Titles>
        <EAdress
          className="eadress"
          style={{
            margin: "0",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          For {state.recoveryEmail} account
        </EAdress>
        <div className="otp-container">
          <h3>OTP code</h3>
          <OtpInput
            className="otp_input"
            value={otp}
            style={{ justifyContent: "center" }}
            onChange={(e) => setOtp(e)}
            numInputs={6}
            separator={<span> </span>}
          />
          {otpError && <p className="mt-4  text-red-600 text-xs">{otpError}</p>}
        </div>
        <Div>
          <Passworde
            placeholder="Email"
            type="email"
            value={state.recoveryEmail}
            required
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
            disabled={state.recoveryEmail}
          />
          <Passworde
            placeholder="New password"
            required
            type={!showPass ? "password" : "text"}
            onChange={(e) => setNewPassword(e.target.value)}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          />
          <AiOutlineEye
            className="eyes_button cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          />

          <ButtonSignUps onClick={handleNewPassword}>Save</ButtonSignUps>
        </Div>
      </PasswordContainer>
    </>
  );
}
export default Finally;
