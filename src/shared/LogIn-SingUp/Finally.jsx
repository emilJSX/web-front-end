import { Passworde,  ButtonSignUps, Div, EAdress, Titles } from "./Finally.style"
import { AiOutlineEye } from "react-icons/ai";
import { useState } from 'react';

function Finally() {
    const[password, setPassword] = useState('password')

    return (<>
        <Titles>Set new password</Titles>
        <EAdress>For imddavidoff@gmail.com account</EAdress>
        <Div>
        <Passworde
            placeholder='New password'
            type={password ? 'password' : 'text'} />
        <AiOutlineEye className='eyes_button' onClick={() =>{setPassword(!password)}}/>

        <ButtonSignUps>Sign Up</ButtonSignUps>
        </Div>
    </>)
}
export default Finally;