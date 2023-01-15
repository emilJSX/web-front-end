import styled from "styled-components"
import { style } from "styled-system";


export const Titles = styled.p`

    font-size: 56px;
    font-family: sans-serif;
    font-weight: 600;
    margin: 20px 0 0 507px;
    letter-spacing: 1px;
    width: 535px;
    text-align: start;
    @media (max-width: 480px) {
        width: 343px;
        margin: 12px 2px 0 2px
    }
`;
export const EAdress = styled.p`

    font-size: 24px;
    font-family: sans-serif;
    font-weight: 600;
    letter-spacing: 0.7px;
    margin: 20px 0 0 507px;
    width: 457px;
    @media (max-width: 480px) {
        text-align: start;
        width: 343px;
        margin:32px 2px 24px 2px

    }
`;
export const Div = styled.div`

width: 436px;   
margin-top: 50px;
@media (max-width: 480px) {
    width: 343px;
    height: 300px;
    margin: 24px 2px 0 2px
}
`;
export const Passworde = styled.input`

    font-size: 14px;
    display: flex;
    padding: 16px;
    border: none;
    width: 404px;
    border-radius: 8px;
    background: #F7F8FA;
    font-family: sans-serif;
    margin: 12px auto 24px auto;
    float:left;
    z-index: 0;
    @media (max-width: 480px) {
        width: 311px;
        border-radius: 8px;
        margin: 12px 2px 0 2px


        .otp_input_div{
            width: 280px;
            margin: 22px 32px 32px 32px;
            height: 60px;
          }
          .otp_input{
            width: 70px;
          }
          .otp_input input{
            height: 56px;
            float: left;
            font-size: 60px;
            border: none;
            background-color:#F7F8FA;
            border-radius: 8px  ;
            font-family: monospace;
          
          }
    }


    .eye_button{
        font-size: 21px;
        z-index: 9;
        float: right;
        margin: -48px 40px 0 0;
        padding: 10px 10px 17px 10px;
        background: #F7F8FA;
        border-radius: 0 8px 8px 0;
        color: #3800B0;
        cursor: pointer;
      }
      .eyes_button{
        font-size: 21px;
        z-index: 9;
        float: left;
        margin: 12px 0px 0px -80px;
        padding: 10px 10px 17px 10px;
        background: #F7F8FA;
        border-radius: 0 8px 8px 0;
        color: #3800B0;
        cursor: pointer;
      }
`;
export const ButtonSignUps = styled.button`

    width: 436px;
    height: 56px;
    border-radius: 8px;
    border: none;
    margin-bottom: 40px;
    background: #3800B0;
    color: white;
    font-size: 14px;
    font-family: system-ui;
    font-weight: 600;
    @media (max-width: 480px) {
        float: left;
        margin: 24px 0px 32px 2px;   
        width: 343px;
    }
`

export const TopNavigator = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  padding-top: 30px;
  padding-left: 20px;
  
  @media (min-width: 480px){
      justify-content: center;
     
  }


  @media (max-width: 480px){
    justify-content: flex-start;
   }

  p{
    margin: 0;

    @media (min-width: 480px){
        padding-right: 350px;
    }

  }
`

export const PasswordContainer = styled.div`
  .titles{
    @media (max-width: 480px){
        padding-left: 20px;
    }
  }

  .eadress{
    @media (max-width: 480px){
        height: 100px;
        display: flex;
        align-items: center;
        padding-left: 20px;
    }

    @media (min-width: 480px){
       padding: 0;
    }
  }


  .eyes_button{
    @media (max-width: 480px){
        transform: translate(300px, -65px);
    }

    @media (min-width: 480px){
        transform: translate(380px, -65px);
    }
  }
`