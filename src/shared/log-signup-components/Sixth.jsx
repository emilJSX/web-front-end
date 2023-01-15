import { Container, Button1 } from "./Autho.style";
import { BiX } from "react-icons/bi";
import { CgTrash } from "react-icons/cg";
import { RiFileDownloadLine } from "react-icons/ri";
import { ButtonCon, ButtonLater, DivImg, Image, List, ListtoList, MainDiv, Paragraph, Title, Upload } from "./Fiveth.style";


export default function Sixth({setShow, setShowes,nextstep}) {
    return(
        <Container>
            <Button1 onClick={() => { setShow(false) || setShowes(false)}}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>You have successfully registered</Title>
            <Paragraph>But in order to start raising funds for yourself, you need to pass verification. Just send a photo of your passport.</Paragraph>
            <MainDiv>
                <RiFileDownloadLine className="upload_fiveth"/>
                <Upload>Upload photo of passport</Upload>
            </MainDiv>
            <DivImg>
                <CgTrash className="trash"/>
                <CgTrash className="trash2"/>
                <Image src="https://scontent.fgyd20-1.fna.fbcdn.net/v/t39.30808-6/301187479_5490751787679431_3613677571604259600_n.jpg?stp=dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wiz0inYpUF4AX8YCpJn&_nc_ht=scontent.fgyd20-1.fna&oh=00_AT_ncFBXmmNgmvN0-Peb_i5V1KGnFHXxCZP6cO1aRj88yw&oe=630A9A0F"/>
                <Image src="https://scontent.fgyd20-2.fna.fbcdn.net/v/t39.30808-6/301375556_5631863283537541_66070249954002251_n.jpg?stp=dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=gMZIp1E68L0AX9UGeLP&_nc_ht=scontent.fgyd20-2.fna&oh=00_AT9eSUaseAeBstqjhr0woEIcdadSEQ1zq-AgG0Xx094s-A&oe=630B747B"/>
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