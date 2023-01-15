import { Container, Button1 } from "./Autho.style";
import { BiX } from "react-icons/bi";
import { RiFileDownloadLine } from "react-icons/ri";
import { ButtonCon, ButtonLater, List, ListtoList, MainDiv, Paragraph, Title, Upload } from "./Fiveth.style";


export default function Fiveth({setShow, setShowes,nextstep}) {
    return(
        <Container style={{zIndex: '10'}}>
            <Button1 onClick={() => { 
                   let body = document.querySelector('body');
                   body.setAttribute('style', 'overflow-y: scroll; overflow-x: hidden');
                setShow(false) || setShowes(false) }}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>You have successfully registered</Title>
            <Paragraph>But in order to start raising funds for yourself, you need to pass verification. Just send a photo of your passport.</Paragraph>
            <MainDiv>
                <RiFileDownloadLine className="upload_fiveth"  style={{height: '50px', width: '50px'}}/>
                <Upload>Upload photo of passport</Upload>
            </MainDiv>
            <List>
                The photo must be:
                <ul>
                    <ListtoList> Original. Do not edit or change it;</ListtoList>
                    <ListtoList>Light. Make sure there is enough light when shooting</ListtoList>
                    <ListtoList>Clear. All information should be easy to read.</ListtoList>
                </ul>
            </List>
            <ButtonCon onClick={nextstep}>Continue</ButtonCon>
            <ButtonLater>Later</ButtonLater>
        </Container>
    )
}