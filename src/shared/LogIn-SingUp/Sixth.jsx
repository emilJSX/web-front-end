import { Container, Button1 } from "./Autho.style";
import { BiX } from "react-icons/bi";
import { CgTrash } from "react-icons/cg";
import { RiFileDownloadLine } from "react-icons/ri";
import { ButtonCon, ButtonLater, DivImg, Image, List, ListtoList, MainDiv, Paragraph, Title, Upload } from "./Fiveth.style";
import TestImage from '../../assets/images/50a8343b26e4ea599ea4c76556db95d3.png';
import TestImage1 from '../../assets/images/86dd3c4e9ee1a89490042c6a4a8895fb.png';

export default function Sixth({setShow, setShowes,nextstep}) {
    return(
        <Container style={{zIndex: '10'}}>
            <Button1 onClick={() => { 
                   let body = document.querySelector('body');
                   body.setAttribute('style', 'overflow-y: scroll; overflow-x: hidden');
                setShow(false) || setShowes(false)}}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>You have successfully registered</Title>
            <Paragraph>But in order to start raising funds for yourself, you need to pass verification. Just send a photo of your passport.</Paragraph>
            <MainDiv>
                <RiFileDownloadLine className="upload_fiveth" style={{height: '50px', width: '50px'}}/>
                <Upload>Upload photo of passport</Upload>
            </MainDiv>
            <DivImg>
                <CgTrash className="trash"/>
                <CgTrash className="trash2"/>
                <Image src={TestImage}/>
                <Image src={TestImage1}/>
            </DivImg>
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