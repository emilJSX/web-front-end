import { Container,Button1, Emails,  } from "./Autho.style";
import { BiX } from "react-icons/bi";
import { Paragraph } from "./Fiveth.style";
import { ButtonSignUp } from "./Seventh.style";
import { Title } from "./Third.style";


function PasswordRec({setShow,setShowes, nextsteplog}) {
    return(
        <Container>
            <Button1 onClick={() => { setShow(false) || setShowes(false) }}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>Password recovery</Title>
            <Paragraph>Enter your email. We’ll send recovery link</Paragraph> 
            <Emails className="email" type="email" placeholder="Email"/>           
            <ButtonSignUp onClick={nextsteplog}>Continue</ButtonSignUp>
        </Container>
    )
}
export default PasswordRec;