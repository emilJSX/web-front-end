import { Container, Button1, ButtonSignUp } from './Autho.style'
import { BiX } from "react-icons/bi";
import { Autotravel, Interest, Notdark, Paragraph, Time, Title } from './Fourth.style';

function Fourth({setShow, setShowes,nextstep}) {
    return(
        <Container>
            <Button1 onClick={() => { setShow(false) || setShowes(false)}}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>Choose your interests</Title>
            <Paragraph>Partners will send you gifts based on your interests<Time>Max 5</Time></Paragraph>
            <Interest>
                <Autotravel>Auto<BiX className='fourth-x'/></Autotravel>
                <Autotravel>Travel<BiX className='fourth-x'/></Autotravel>
                <Notdark>Sport</Notdark>
                <Notdark>Gadgets</Notdark>
                <Notdark>Foto & Video</Notdark>
                <Notdark>Clothes</Notdark>
            </Interest>
            <ButtonSignUp onClick={nextstep}>Continue</ButtonSignUp>
        </Container>
    )   
}
 export default Fourth;