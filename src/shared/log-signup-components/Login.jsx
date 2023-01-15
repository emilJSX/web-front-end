import { Button1, Container, Title, ButtonSignUp ,Paragraph, Button2,Facebook, Goapp, Google, Apple, FacebookP, GoogleP,AppleP, ButtonOR, Dispno, Email, Password, ForgotPassword } from './Autho.style'
import { BiX } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { FaApple, FaGoogle } from "react-icons/fa";
import { useState } from 'react';



function Login({setShow, nextsteplog, backSign, setShowes}) {

    const[shower, setShower]= useState(false)

    const clickEmail = () =>{
        setShower(!shower)
    }
   
    
    const[password, setPassword] = useState('password')

    return (
      <Container>
        <Button1 onClick={() => { setShow(false) || setShowes(false) }}><BiX style={{ fontSize: "20px" }} /></Button1>
        <Title>Log in</Title>
        <Paragraph>Not a user?<Button2 onClick={backSign}>Sign up</Button2></Paragraph>
        <Facebook>
            <BsFacebook style={{margin:"17px 14px 0 -77px" ,fontSize:"22px", color:"white"}}/>
            <FacebookP>Facebook</FacebookP>
        </Facebook>
        <Goapp>
            <Google>
                <FaGoogle style={{fontSize:"22px", margin:"16px 60px auto 0", color:"#3800B0"}}/>
                <GoogleP>Google</GoogleP>  
            </Google>
            <Apple>
                <FaApple style={{color:"white", fontSize:"25px", margin:"13px 60px auto 0"}}/>
                <AppleP>Apple</AppleP>
            </Apple>
        </Goapp>
        <ButtonOR  onClick={clickEmail}>
            Or via email
        </ButtonOR>
        
         {
            shower ? (<Dispno>
            <Email 
            placeholder='Email'/>
            <Password
             placeholder='Password' 
             type={password ? 'password' : 'text'}/>
             <AiOutlineEye className='eye_button' onClick={() =>{setPassword(!password)}}/>
             <ForgotPassword  onClick={nextsteplog}>Forgot password</ForgotPassword>
            <ButtonSignUp>Log in</ButtonSignUp>

        </Dispno>) : ""
         }
    </Container>
    )
}

export default Login;