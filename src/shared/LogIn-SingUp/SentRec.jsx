import { Container,Button1  } from "./Autho.style";
import { BiX } from "react-icons/bi";
import { Paragraph } from "./Fiveth.style";
import { ButtonSignUp } from "./Seventh.style";
import { Title } from "./Third.style";
import { Paragraphs, Seconds, Send } from "./SentRec.style";
import { Link } from "react-router-dom";


function SentRec({setShow, setShowes, nextsteplog}) {
    return(
        <Container style={{zIndex: '10'}}>
            <Button1 onClick={() => { 
                  let body = document.querySelector('body');
                  body.setAttribute('style', 'overflow-y: scroll; overflow-x: hidden');
                setShow(false) || setShowes(false) }}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>We sent recovery link</Title>
            <Paragraph>For recovery, please follow the link in your email.</Paragraph> 
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                 <Link to='/set-new-password'>
                  <ButtonSignUp>Ok</ButtonSignUp>
                 </Link>
            </div>
            <Paragraphs>Didn’t get an email?<Send>Send Again</Send><Seconds>1:59</Seconds></Paragraphs>
        </Container>
    )
}
export default SentRec;