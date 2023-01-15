import { Container,Button1, Title,  } from "./Autho.style";
import { BiX } from "react-icons/bi";
import { Paragraph } from "./Fiveth.style";
import { ButtonSignUp } from "./Seventh.style";


function Seventh({setShow, setShowes}) {
    return(
        <Container>
            <Button1 onClick={() => { setShow(false) || setShowes(false) }}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>Verification</Title>
            <Paragraph>Thank you, the photo has been sent to the moderators for verification. The status will be visible in your account.</Paragraph>
            <ButtonSignUp>Continue</ButtonSignUp>
        </Container>
    )
}
export default Seventh;