import { Container } from "@mantine/core";
import styled from "styled-components";

export const ContactsMainContainer = styled.div`
    margin: 30px 655px 0px 400px;

    @media (min-width: 1000px) and (max-width: 1200px) {
        margin: 30px 229px 0px 223px;
    }

    @media (min-width: 768px) and (max-width: 1000px) {
        margin: 30px 173px 0px 74px;
    }

    @media (min-width: 500px) and (max-width: 650px) {
        margin: 30px 173px 0px 40px;
    }

    @media (min-width: 650px) and (max-width: 768px){
        margin: 30px 173px 0px 140px;
    }

    @media (min-width: 375px) and (max-width: 500px){
        margin: 30px 173px 0px 30px;
    }

    .btn-section {
        display: flex;
        width: 56.5%;
        border-radius: 9px;
    }

    .firsttabname {
        margin-right:110px;
    }

    .facebook-button{
        width: 600px;
        height: 56px;
        background: #1A76F2;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (min-width: 375px) and (max-width: 400px) {
            width: 335px;   
        }

        @media (min-width: 400px) and (max-width: 500px) {
            width: 355px;
        }

        @media (min-width: 500px) and (max-width: 768px) {
            width: 410px;
        }
  
        .facebook-icon{
           font-size: 25px;
           color: white;
           margin-right: 10px;
        }
  
        .facebook-title{
           color: white;
           font-size: 14px;
           font-family: 'Steppe';
           font-style: normal;
           padding-top: 5px;
           font-weight: 600;
           font-size: 14px;
           line-height: 130%;
           letter-spacing: 0.01em;
           font-feature-settings: 'liga'
          
        }
    }

    .editing-buttons{
        width: 200px;
        min-wdith: 200px;
        height: 56px;
        font-family: 'Steppe';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #3800B0;
        border-radius: 10px;
        background: #FFFFFF;
        border: 0;

        &:focus{
            background: #EBE5F7;
            border: 1px solid #3800B0;
        }
   
          @media (max-width: 420px) {
            width: 180px;
            min-width: 180px;
          }
      }
`

export const TabTopContainer = styled.div`
height: 150px;
width: 100%;
display: flex;
align-items: center;

@media (min-width: 500px) and (max-width: 768px) {
    width: 410px;
}

@media (min-width: 375px) and (max-width: 400px) {
    width: 345px;
}

@media (min-width: 400px) and (max-width: 500px) {
    width: 370px;
}

@media(max-width: 1200px){
 justify-content: center;
 margin: 0;
}

@media (min-width: 1000px) and (max-width: 1200px) {
    width: 600px;
}

@media(min-width: 768px) and (max-width: 1000px){
    width: 610px;
}


@media(max-width: 645px){
 padding: 0;
 justify-content: start;
}


.insider{
    display: flex;
    padding: 0;
    border: 1px solid #e3dfe3;
    border-radius: 10px;
  
    @media(min-width: 375px) and (max-width: 768px) {
        overflow-y: scroll;
    }
}

.editing-buttons{
   width: 200px;
   min-wdith: 200px;
   height: 56px;
   font-family: 'Steppe';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 130%;
   font-feature-settings: 'liga' off;
   color: #3800B0;
   background: #FFFFFF;
   border: 0;

     @media (max-width: 420px) {
       width: 180px;
       min-width: 180px;
     }
 }

 #editing-buttons1{
    background: #EBE5F7;
    border: 2px solid #3800B0;
    border-radius: 8px;
 }

 #editing-buttons2{
    border-top: 2px solid #EBE5F7;
    border-bottom: 2px solid #EBE5F7;
 }

 #editing-buttons3{
    border-top: 2px solid #EBE5F7;
    border-bottom: 2px solid #EBE5F7;
 }

 #editing-buttons4{
    border-top: 2px solid #EBE5F7;
    border-bottom: 2px solid #EBE5F7;
    border-right: 2px solid #EBE5F7;
    border-radius: 8px;
 }
`

export const ContactsNavigator = styled.p`
    color: grey;
    font-weight: 400;
    font-size: 14px;
    width: 110%;
`

export const ContactsTxt = styled.h1`
    color: #0B0023;
    font-size: 56px;
    font-weight: 600;
    padding-top: 20px;
`
export const TabContainer = styled.div`
    display: flex;
    gap: 50px;
`

export const UserContentDiv = styled.div`
    margin: 15px 0px 30px 0px;
    width: 600px;
    height: 24px;
    float: left;

    @media (min-width: 500px) and (max-width: 768px) {
        width: 410px;
    }

    .check{
        font-size: 16px;
        color: #1A76F2;
        float: left;
        margin: 11px 6px;
    }

    @media (min-width: 375px) and (max-width: 400px) {
        width: 300px;
        margin: 0px 16px 0 -6px;
        padding-bottom: 68px;
    }

    @media (min-width: 400px) and (max-width: 500px) {
        width: 357px;
    }
`

export const UserImage = styled.img`
    width: 37px;
    height: 37px;
    margin-left: 6px;
    float: left;
    border-radius: 50%;
    `

export const UserUsername = styled.p`
    width: auto;
    height: 20px;
    margin-top: 10px;
    margin-left: 6px;
    float: left;
    color:#0C0E19;
    font-size: 14px;
    font-weight: 600;
`

export const Subscribebtn = styled.a`
    width: auto;
    height: 20px;
    margin-top: 10px;
    float: right;
    font-size: 14px;
    font-weight: 600;
    color: #3800B0;
    text-decoration: none;
    font-family: revert;

`

export const Unsubscribe = styled.a`
    width: auto;
    height: 20px;
    margin-top: 10px;
    float: right;
    font-size: 14px;
    font-weight: 600;
    color: #8E93AF;
    font-family: revert;
    text-decoration: none;

`

export const SubscribeDiv = styled.div`

`

export const FacebookTxt = styled.p`
    color: #0B0023;
    font-size: 24px;
    font-weight: 600;
    width: 300px;
    padding-bottom: 20px;
`

export const SuggestionTxt = styled.p`
    color: #0B0023;
    font-size: 24px;
    font-weight: 600;
    padding-top: 60px;
    padding-bottom: 15px;
`


// Dont Data glases section

export const DontHaveDataSection = styled.div`
    margin-top: 24px;
    width: 500px;
    height: 520px;
    margin-left: 60px;

    @media (min-width: 768px) and (max-width: 1000px) {
        width: 500px;
        margin-bottom: 0px !important;
    }

    @media (min-width: 500px) and (max-width: 768px) {
        margin-left: 0px;
        width: 410px;
    }

    @media (min-width: 375px) and (max-width: 500px) {
        margin-left: -23px;
        width: 360px;
    }
    
`

export const DontHaveDataText = styled.p`
    width: 510px;
    height: 48px;
    font-weight: 600;
    text-align:center;
    font-size: 40px;
    color: #6033C0;

    @media (min-width: 375px) and (max-width: 420px) {
        margin-left: 15px;
        width: 327px;
        font-size: 26px;
        padding-bottom: 80px;
    }

    @media (min-width: 420px) and (max-width: 550px) {
        margin-left: 10px;
        width: 390px;
        font-size: 26px;
        padding-bottom: 80px;
    }

    @media (min-width: 550px) and (max-width: 768px) {
        margin-left: 10px;
        width: 390px;
        font-size: 26px;
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        padding-bottom: 100px;
    }
`

export const ButtonSection = styled.div`
    width: 326px;
    height: 56px;
    display: flex;
    justify-content: center;
    margin: 20px auto 0 auto;


`

export const ButtonFind = styled.button`
    width: 150px;
    background: #3800B0;
    height: 56px;
    float: left;
    border-radius: 8px;
    text-align: center;
    color: white;
    font-size: 14px;

    @media (min-width: 768px) and (max-width: 1200px){
        margin-top: 50px;
    }

    @media (min-width: 1200px) {
        margin-top: 50px;
    }
    
`

export const GlasesImg = styled.img`
    width: 262px;
    height: 240px;
    margin : 70px auto  0  auto;

    @media (min-width: 375px) and (max-width: 500px) {
        width: 200px;
        height: 200px;
        padding-top: 40px;
        margin: 24px auto 0 auto;
    }

    @media (min-width: 500px) and (max-width: 768px) {
        width: 200px;
        height: 200px;
        padding-top: 50px;
        margin: 24px auto 0 auto;
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        margin: 24px auto 0 auto;
        margin-top: 90px;
    }
`