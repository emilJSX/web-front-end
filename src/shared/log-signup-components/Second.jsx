import { Container, Button1,ButtonSignUp } from './Autho.style'
import { Title, Number, Calendar, Selects, Options} from './Second.style';
import { BiX } from "react-icons/bi";
import "react-datepicker/dist/react-datepicker.css"; //import reat-datepicker css
import React , { useRef } from "react";



function Second({ setShow, setShowes, nextstep }) {

    const ref = useRef()

    return (
        <Container>
            <Button1 onClick={() => { setShow(false) || setShowes(false) }}><BiX style={{ fontSize: "20px" }} /></Button1>
            <Title>Your information</Title>
                <Selects>
                    <Options value="">Country</Options>
                    <Options value="">Azerbaijan</Options>
                </Selects>
            <Number id='number' type='number' placeholder='Phone number' />
            <Calendar id='calendar'
            placeholder='Date of birth' 
            type="text"
            ref={ref}   
            onFocus={() => (ref.current.type = "date")}
            onBlur={() => (ref.current.type = "text")}/>
            <ButtonSignUp onClick={nextstep}>Continue</ButtonSignUp>

        </Container>
    )
}
export default Second;