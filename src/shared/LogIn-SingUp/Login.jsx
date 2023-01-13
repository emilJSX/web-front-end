import { Button1, Container, Title, ButtonSignUp, Paragraph, Button2, Facebook, Goapp, Google, Apple, FacebookP, GoogleP, AppleP, ButtonOR, Dispno, Email, Password, ForgotPassword } from './Autho.style'
import { BiX } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { FaApple, FaGoogle } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function Login({ setShow, nextsteplog, backSign, setShowes }) {
    const [passwordUser, setPasswordUser] = useState("");
    const [emailUser, setEmailUser] = useState("");
    const [shower, setShower] = useState(false)

    const clickEmail = () => {
        setShower(!shower)
    }

    const navigate = useNavigate()

    const [getUserAuthToken, setUserAuthToken] = useState()

    const HundleClickToLogin = (click) => {
        click.preventDefault()
        axios.get("https://api.wishx.me/sanctum/csrf-cookie").then(() => {
          axios
            .post("https://api.wishx.me/api/v1/login", {
              xsrfHeaderName: 'X-XSRF-TOKEN',
              email: emailUser,
              password: passwordUser,
            }, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'content-type': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                }
            })
            .then((response) => {
              //set response in local storage
                localStorage.setItem('user', JSON.stringify(response.data))
                localStorage.setItem('UserToken=', response.data.data.token)
                document.cookie = "UserToken=" + response.data.data.token 
                setUserAuthToken(response.data.data.token)
                document.cookie = "UserMessage=" + response.data.data.message 
                console.log(JSON.stringify(response.data))
                navigate("/my-profile")
            })
            .catch(function (error) {
              console.error(error);
            });
        });
      }



        const HandleClickCheckLogin = () => {
            setTimeout(() => {
                setShowes(false)
            },600)
        }
      

    const [password, setPassword] = useState('password')

    return (
        <Container style={{ zIndex: '10' }}>
            <Button1 onClick={() => {
                let body = document.querySelector('body');
                body.setAttribute('style', 'overflow-y: scroll; overflow-x: hidden');
                setShow(false) || setShowes(false)
            }}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>Log in</Title>
            <Paragraph>Not a user?<Button2 onClick={backSign}>Sign up</Button2></Paragraph>
            <Facebook>
                <BsFacebook style={{ fontSize: "22px", color: "white", marginRight: '10px' }} />
                <FacebookP>Facebook</FacebookP>
            </Facebook>
            <Goapp>
                <Google>
                    <FaGoogle style={{ fontSize: "22px", marginRight: '10px', color: "#3800B0" }} />
                    <GoogleP>Google</GoogleP>
                </Google>
                <Apple>
                    <FaApple style={{ color: "white", fontSize: "25px", marginRight: '10px' }} />
                    <AppleP>Apple</AppleP>
                </Apple>
            </Goapp>
            <ButtonOR onClick={clickEmail}>
                Or via email
            </ButtonOR>

            {
                shower ? (<Dispno>
                    <form onSubmit={HundleClickToLogin}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Email
                                placeholder='Email'
                                onChange={(emailUser) => setEmailUser(emailUser.target.value)} />
                        </div>
                        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Password
                                placeholder='Password'
                                type={password ? 'password' : 'text'}
                                onChange={(passwordUser) => setPasswordUser(passwordUser.target.value)} />
                            <AiOutlineEye className='eye_button' onClick={() => { setPassword(!password) }}
                                style={{position: 'absolute'}} />

                        </div>

                        <ForgotPassword onClick={nextsteplog}>Forgot password</ForgotPassword>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <ButtonSignUp type='submit' onClick={HandleClickCheckLogin}>Log in</ButtonSignUp>
                        </div>
                    </form>

                </Dispno>) : ""
            }
        </Container>
    )
}

export default Login;