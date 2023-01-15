import { Container, Button1, ButtonSignUp } from './Autho.style'
import { BiX } from "react-icons/bi";
import { Autotravel, Interest, Notdark, Paragraph, Time, Title } from './Fourth.style';

function Fourth({setShow, setShowes,nextstep}) {
    return(
        <Container style={{zIndex: '10'}}>
            <Button1 onClick={() => { 
                    let body = document.querySelector('body');
                    body.setAttribute('style', 'overflow-y: scroll; overflow-x: hidden');
                setShow(false) || setShowes(false)}}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>Choose your interests</Title>
            <Paragraph>Partners will send you gifts based on your interests<Time>Max 5</Time></Paragraph>
            <Interest style={{display: 'flex', flexWrap: 'wrap'}}>
                <Autotravel>Auto<BiX className='fourth-x'/></Autotravel>
                <Autotravel>Travel<BiX className='fourth-x'/></Autotravel>
                <Notdark>Sport</Notdark>
                <Notdark>Gadgets</Notdark>
                <Notdark>Foto & Video</Notdark>
                <Notdark>Clothes</Notdark>
            </Interest>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <ButtonSignUp onClick={nextstep}>Continue</ButtonSignUp>
            </div>
        </Container>
    )   
}
 export default Fourth;