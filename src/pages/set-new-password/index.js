import { Passworde, ButtonSignUps, Div, EAdress, Titles, TopNavigator, PasswordContainer } from "./SetNewPassword.Style.js"
import { AiOutlineEye } from "react-icons/ai";
import React, { useState } from 'react';
import CustomBreadcrumb from "../../shared/components/breadcrumb";
import OtpInput from "react-otp-input";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Finally() {
  const [password, setPassword] = useState('password')
  const [otpEmailCode, setOtp] = useState()
  const [getNewPassword, setNewPassword] = useState()
  const [getEmail, setEmail] = useState()

  const [getErrorOtp, setErrorOtp] = useState()

  const navigate = useNavigate()

  const handleChange = (otp) => {
    setOtp(otp)
  };

  const { state } = useLocation()


  const GetRecoveryNewPassword = () => {

    if (otpEmailCode?.length === 0) {
      setErrorOtp("You must be send otp code, check your email")
    } else {
      axios.post("https://api.wishx.me/api/v1/profiles/store/new-password", {
        email: getEmail,
        new_password: getNewPassword,
        otp: otpEmailCode,
      }).then((getResultNewPassord) => {
        navigate("/")
      }).catch((err) => {
        setErrorOtp("Your email or otp code is wrong, please check again")
      })
    }
  }



  return (<>
    <PasswordContainer style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <TopNavigator className="sm-buttons-conatiner">
        <div className="flex items-center justify-center mb-4">
          <CustomBreadcrumb links={[
            {
              title: 'Main',
              to: '/'
            },
            {
              title: 'Set Password',
            }
          ]} />
        </div>
      </TopNavigator>
      <Titles className="titles" style={{ margin: '0', width: '100%', display: 'flex', justifyContent: 'center' }}>Set new password</Titles>
      <EAdress className="eadress" style={{ margin: '0', width: '100%', display: 'flex', justifyContent: 'center' }}>For {state.userRecovery_email} account</EAdress>
      <div className="otp-container">
        <h3>OTP code</h3>
        <OtpInput
          className='otp_input'
          value={otpEmailCode}
          style={{justifyContent: "center"}}
          onChange={handleChange}
          numInputs={6}
          separator={<span> </span>}
        />
        {getErrorOtp && (
          <p className="mt-4  text-red-600 text-xs">
            {getErrorOtp}
          </p>
        )}
      </div>
      <Div >
        <Passworde
          placeholder='Email'
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }} />
        <Passworde
          placeholder='New password'
          required
          type={password ? 'password' : 'text'}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }} />
        <AiOutlineEye className='eyes_button' onClick={() => { setPassword(!password) }} />

        <ButtonSignUps onClick={GetRecoveryNewPassword}>Save</ButtonSignUps>
      </Div>
    </PasswordContainer>
  </>)
}
export default Finally;