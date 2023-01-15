import { Container, Button1 } from './Autho.style'
import { BiX } from "react-icons/bi";
import { Againsms, Edit, Paragraph, Second, Title } from './Third.style';
import OtpInput from 'react-otp-input';
import { useState } from 'react';


function Third({setShow, setShowes,nextstep}) {

    const[otp, setOtp] = useState()

    const handleChange = (otp) => {
        setOtp(nextstep)
        setOtp( otp )
    };


    return(
        <Container>
            <Button1 onClick={() => { setShow(false) || setShowes(false) }}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>Confirm your phone number</Title>
            <Paragraph>Enter the code we sent to you by phone to number <br/> +994 55 814 41 91</Paragraph>
            <Edit >Edit phone number</Edit>
            <Againsms>Send SMS Again</Againsms>
            <Second>1:59</Second>
            <div className='otp_input_div'>
            <OtpInput
            className='otp_input'
            value={otp}
            onChange={handleChange}
            numInputs={4}
            separator={<span> </span>}
            /></div>
        </Container>
    )
}

export default Third;