import { Container,Button1, Title,  } from "./Autho.style";
import { BiX } from "react-icons/bi";
import { Paragraph } from "./Fiveth.style";
import { ButtonSignUp } from "./Seventh.style";


function Seventh({setShow, setShowes}) {
    return(
        <Container style={{zIndex: '10'}}>
            <Button1 onClick={() => { 
                   let body = document.querySelector('body');
                   body.setAttribute('style', 'overflow-y: scroll; overflow-x: hidden');
                setShow(false) || setShowes(false) }}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>Verification</Title>
            <Paragraph>Thank you, the photo has been sent to the moderators for verification. The status will be visible in your account.</Paragraph>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
               <ButtonSignUp>Continue</ButtonSignUp>
            </div>
        </Container>
    )
}
export default Seventh;