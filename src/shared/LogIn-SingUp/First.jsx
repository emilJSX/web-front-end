import { Button1, Container, Title, ButtonSignUp ,Paragraph, Button2, ParagraphChek,Facebook, Goapp, Google, Apple, FacebookP, GoogleP,AppleP, ButtonOR, Dispno, Email, Password, InputChek } from './Autho.style'
import { BiX } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { FaApple, FaGoogle } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



function First({setShow, nextstep, nextsteplog}) {

    const[shower, setShower]= useState(false)
    const[password, setPassword] = useState('password')

    // Register API
    const[getName, setGetName] = useState("")
    const[getEmail, setGetEmail] = useState("")
    const[getPassword, setGetPassword] = useState("")
    // END Register API
    
    const navigate = useNavigate()

    const clickEmail = () =>{
        setShower(!shower)
    }

    // Parsing Extract the Name from an Email Address
        const HandleGetRegister = (click) => {
            const get_email = getEmail;
            const result_getname = get_email.split('@')[0];
            setGetName(result_getname)
            click.preventDefault()
            axios
              .post("https://api.wishx.me/api/v1/register", {
                  name: getEmail.split("@")[0],
                  email: getEmail,
                  password: getPassword,
                  confirm_password: getPassword,
              }, {
                  headers: {
                      'Access-Control-Allow-Origin': '*',
                      'Access-Control-Allow-Headers': '*',
                      'content-type': 'application/json',
                      'Access-Control-Allow-Credentials': true,
                  }
              })
              .then((response) => {
                var getUserToken = Array(response.data.data.token)
                var GetResultRegisterToken = (String(getUserToken))
                localStorage.setItem('UserToken=', GetResultRegisterToken)
                document.cookie = "UserToken=" + GetResultRegisterToken 
                  toast.success("Successfuly register", {
                    position: toast.POSITION.TOP_RIGHT
                });
                navigate('/profile-edit')
              })
              .catch(function (error) {
                toast.error("Please check credentials", {
                    position: toast.POSITION.TOP_RIGHT
                });
              });
        }



    return (
        <Container style={{zIndex: '10', overflow: "hidden"}}>
            <ToastContainer />
            <Button1 onClick={() => { 
               let body = document.querySelector('body');
               body.setAttribute('style', 'overflow-y: scroll; overflow-x: hidden');
                setShow(false) }}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>Sign Up</Title>
            <Paragraph>Already have account?<Button2 onClick={nextsteplog}>Log in</Button2></Paragraph>
            <Facebook>
                <BsFacebook style={{marginRight: '10px', fontSize:"22px", color:"white"}}/>
                <FacebookP>Facebook</FacebookP>
            </Facebook>
            <Goapp>
                <Google>
                    <FaGoogle style={{fontSize:"22px", color:"#3800B0", marginRight: '10px'}}/>
                    <GoogleP>Google</GoogleP>  
                </Google>
                <Apple>
                    <FaApple style={{color:"white", fontSize:"25px", marginRight: '10px'}}/>
                    <AppleP>Apple</AppleP>
                </Apple>
            </Goapp>
            <ButtonOR  onClick={clickEmail}>
                Or via email
            </ButtonOR>
            
             {
                shower ? (<Dispno>
                    <form onSubmit={HandleGetRegister}>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <Email
                                placeholder='Email' style={{width: '400px'}}
                                onChange={(get_useremail) => setGetEmail(get_useremail.target.value) }
                            />
                        </div>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <Password
                                placeholder='Password'
                                onChange={(get_userpassword) => setGetPassword(get_userpassword.target.value)}
                                type={password ? 'password' : 'text'} style={{width: '400px'}}/>
                        </div>
                        <AiOutlineEye className='eye_button' onClick={() =>{setPassword(!password)}}
                                      style={{float: 'right'}}/>
                        <div style={{width: '100%', display: 'flex', paddingLeft: '40px', paddingBottom: '12px'}}>
                            <InputChek type="checkbox" style={{ margin: '0'}}/>
                            <Link target="_blank" to="/privacy"><ParagraphChek style={{marginLeft: '10px'}}>Terms of use</ParagraphChek></Link>
                        </div>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <ButtonSignUp type="submit">Sign Up</ButtonSignUp>
                            {/*onClick={nextstep}*/}
                        </div>
                    </form>


            </Dispno>) : ""
             }
        </Container>
    )
}

export default First;