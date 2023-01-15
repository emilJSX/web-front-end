import { Container,Button1  } from "./Autho.style";
import { BiX } from "react-icons/bi";
import { Paragraph } from "./Fiveth.style";
import { ButtonSignUp } from "./Seventh.style";
import { Title } from "./Third.style";
import { Paragraphs, Seconds, Send } from "./SentRec.style";


function SentRec({setShow, setShowes, nextsteplog}) {
    return(
        <Container>
            <Button1 onClick={() => { setShow(false) || setShowes(false) }}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>We sent recovery link</Title>
            <Paragraph>For recovery, please follow the link in your email.</Paragraph> 
            <ButtonSignUp onClick={nextsteplog}>Ok</ButtonSignUp>
            <Paragraphs>Didn’t get an email?<Send>Send Again</Send><Seconds>1:59</Seconds></Paragraphs>
        </Container>
    )
}
export default SentRec;