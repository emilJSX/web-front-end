import { Passworde,  ButtonSignUps, Div, EAdress, Titles, TopNavigator, PasswordContainer } from "./SetNewPassword.Style.js"
import { AiOutlineEye } from "react-icons/ai";
import React, { useState } from 'react';
import CustomBreadcrumb from "../../shared/components/breadcrumb";

function Finally() {
    const[password, setPassword] = useState('password')

    return (<>
       <PasswordContainer style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <TopNavigator className="sm-buttons-conatiner">
            <div className="flex items-center justify-center mb-4">
              <CustomBreadcrumb links={[
                {
                  title: 'Main',
                  to: '/'
                },
                {
                  title: 'Set Password',
                }
              ]} />
            </div>
        </TopNavigator>
        <Titles className="titles" style={{margin: '0', width: '100%', display: 'flex', justifyContent: 'center'}}>Set new password</Titles>
        <EAdress className="eadress" style={{margin: '0', width: '100%', display: 'flex', justifyContent: 'center'}}>For imddavidoff@gmail.com account</EAdress>
        <Div >
        <Passworde
            placeholder='New password'
            type={password ? 'password' : 'text'} 
            style={{width: '100%', display: 'flex', justifyContent: 'center'}}/>
        <AiOutlineEye className='eyes_button' onClick={() =>{setPassword(!password)}}/>

        <ButtonSignUps>Sign Up</ButtonSignUps>
        </Div>
       </PasswordContainer>
    </>)
}
export default Finally;