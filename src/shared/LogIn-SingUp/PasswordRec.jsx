import { Container,Button1, Emails,  } from "./Autho.style";
import { BiX } from "react-icons/bi";
import { Paragraph } from "./Fiveth.style";
import { ButtonSignUp } from "./Seventh.style";
import { Title } from "./Third.style";


function PasswordRec({setShow,setShowes, nextsteplog}) {
    return(
        <Container style={{zIndex: '10'}}>
            <Button1 onClick={() => { 
                  let body = document.querySelector('body');
                  body.setAttribute('style', 'overflow-y: scroll; overflow-x: hidden');
                setShow(false) || setShowes(false) }}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>Password recovery</Title>
            <Paragraph>Enter your email. We’ll send recovery link</Paragraph> 
            <Emails className="email" type="email" placeholder="Email"/> 
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <ButtonSignUp onClick={nextsteplog}>Continue</ButtonSignUp>
            </div>          
        </Container>
    )
}
export default PasswordRec;