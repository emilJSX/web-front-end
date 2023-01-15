import styled from "styled-components"

export const Main = styled.div`
    position: fixed;
    top:0;
    right:0;
    left:0;
    bottom: 0;
    width: 100vw;
    height: 100hv;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin:0;
    margin-top: -20px;
    z-index: 10;
    overflow: hidden;
`;

export const OpacityBlog = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(200, 200, 200);
    opacity: 0.5;
`

export const Container = styled.div`

    width: 480px;
    margin-top: 0px;
    height: auto;
    border-radius: 32px;
    background: white;
    @media (max-width: 480px) {
        width: 343px;
        border-radius: 24px;

        .trash{
            font-size: 10px;
            padding: 3px;
            border-radius: 50%;
            background: #F7F8FA;
            z-index: 9;
            color: #3800B0;
          }
          .trash2{
            font-size: 10px;
            padding: 3px;
            border-radius: 50%;
            background: #F7F8FA;
           
            z-index: 9;
            color: #3800B0;
          }
    }


    .fourth-x{
        font-size: 20px;
        display: block;
        float: right;
        padding-left: 5px;
      }
      .upload_fiveth{
        width: 21px;
        height: 21px;
        margin: 0;
        margin: 51px 189px 0 189px;
        color: #2D008D;
        
    }

    .otp_input_div{
        width: 400px;
        float: left;
        margin: 0 40px 40px 40px;
        height: 60px;
      }
      .otp_input{
        width: 100px;
      }
      .otp_input input{
        height: 56px;
        float: left;
        font-size: 91px;
        border: none;
        background-color:#F7F8FA;
        border-radius: 8px  ;
        font-family: monospace;
      
      }

      .otp_input input:hover{
        border: 1px solid #8866D0;
      }
      .otp_input input:focus{
        outline: 1px solid #8866D0;
      }

      @media only screen and (max-width: 480px) {
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

      .content_container{
         height: 60px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 30px;

          @media (min-width: 480px) {
            margin-right:120px;
            padding-top: 10px;
          }
         
          .edit_number{
            width: auto;
            margin: 0;
            margin-right: 30px;

            @media (min-width: 480px) {
                margin-right:120px;
            }
           }

          .send_message{
            width: auto;
            margin: 0;

            @media (min-width: 480px) {
                margin-left:17px;
            }
          }


          .timer{
            margin: 0;
            margin-left: 3px;
        }
    }

    .trash{
        font-size: 20px;
        padding: 3px;
        border-radius: 50%;
        background: #F7F8FA;
        z-index: 9;
        color: #3800B0;
        transform: translate(-100px, -5px)
    }

    .trash2{
        font-size: 20px;
        padding: 3px;
        border-radius: 50%;
        background: #F7F8FA;
        z-index: 9;
        color: #3800B0;
        transform: translate(-55px, -5px)
    }
    
`;
export const Button1 = styled.p`

    cursor:pointer;
    float: right;
    margin: 27px 27px 0 0;
    @media (max-width: 480px) {
        margin: 19px 19px 0 0;
    }
`;
export const Title = styled.h3`

    margin: 40px 344px 0 40px;
    font-size: 24px;
    text-align: start;
    font-weight: 600;
    font-family: sans-serif;
    color: #110035;
    @media (max-width: 480px) {
        margin: 32px 200px 0 32px;
    }
`;
export const Paragraph = styled.p`
 
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #110035;
    text-align: start;
    display: block;
    margin: 11px 250px 0 40px;
    font-family: sans-serif;
    @media (max-width: 480px) {
        margin: 11px 8px 0 32px;
        text-align: start;

    }
`;
export const Button2 = styled.button`
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    background: none;
    border:none;
    border-bottom: 1px dashed #0B0023;
    cursor:pointer;
    font-family: sans-serif;
`;
export const Facebook = styled.div`

    width:400px;
    height: 56px;   
    border-radius: 8px;
    margin: 19px auto 0 auto;
    background: #1A76F2;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 480px) {
      width: 279px;
    }

`;

export const FacebookP = styled.p`

    font-family: sans-serif;
    color: white;
    fontSize: 14px;
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const Goapp = styled.div`

    width:100%;
    height: 56px;   
    border-radius: 8px;
    //margin: 24px auto 0 auto;
    margin: 0;
    padding: 0;
    margin-top: 24px;
    display: flex;
    justify-content: center;
    // @media (max-width: 480px) {
    //     width: 279px;
    // }
`;
export const Google = styled.div`

    width: 188px;
    height: 56px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border: 1px solid #110035;
    @media (max-width: 480px) {
        width: 132px;
      }
`;

export const GoogleP = styled.p`

    font-size: 14px;
    font-weight: 600;
    font-family: sans-serif;
    margin: 0;
`;

export const Apple = styled.div`

    width: 188px;
    height: 56px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #110035;
    border: 1px solid #110035;
    @media (max-width: 480px) {
        width: 132px;
        margin-left: 11px;

      }
`;

export const AppleP = styled.p`

    font-size: 14px;
    font-weight: 600;
    font-family: sans-serif;
    margin: 0;    
    color: white;
`;
export const ButtonOR = styled.button`

    margin: 24px 354px 24px 40px;
    font-size: 13px;
    color: #110035;
    border: none;
    background: none;
    font-family: sans-serif;
    border-bottom: 1px dashed #0B0023;
    font-weight: 600;
    cursor: pointer;
    @media (max-width: 480px) {
        margin: 16px 215px 16px 32px;
      }
`;

export const Dispno = styled.div`

    width: 480px;
    height: auto;
    @media (max-width: 480px) {
        width: 343px;
    }

    .eye_button{
        transform: translate(150px, 30px);

        @media (max-width: 480px){
            transform: translate(100px, 30px);
        }
    }
`;

export const Email = styled.input`

    font-size: 14px;
    margin: 0 40px 0 40px;
    display: flex;
    padding: 16px;
    border: none;
    width: 368px;
    border-radius: 8px;
    background: #F7F8FA;
    font-family: sans-serif;
    @media (max-width: 480px) {
        width: 247px;
        margin: 12px 32px 0 32px

    }
    `;
export const Emails = styled.input`

    font-size: 14px;
    margin: 20px 40px 0 40px;
    display: flex;
    padding: 16px;
    border: none;
    width: 400px;
    border-radius: 8px;
    background: #F7F8FA;
    font-family: sans-serif;
    @media (max-width: 480px) {
        width: 280px;
        margin: 12px 32px 0 32px

    }
    `;

export const Password = styled.input`
    position: relative;
    font-size: 14px;
    display: flex;
    padding: 16px;
    border: none;
    width: 367px;
    border-radius: 8px 0 0 8px;
    background: #F7F8FA;
    font-family: sans-serif;
    margin: 12px 40px 0 40px;
    z-index: 0;
    @media (max-width: 480px) {
        width: 247px;
        border-radius: 8px;
        margin: 12px 32px 0 32px
    }
`;

export const InputChek = styled.input`

    color: black;
    margin: 14px 370px 14px 0;   
    border: 1.5px solid #8E93AF;
    border-radius: 6px;
    width: 20px;
    height: 20px;

    @media (max-width: 480px) {
        //margin: 14px 255px 14px 0px;   
        border-radius: 8px;
    }
`;

export const ParagraphChek = styled.p`

    font-family: sans-serif;
    font-weight: 400;
    font-size: 13px;
    color: #110035;
    //display: block;
    float: left;
    //margin: -31px 0 0 72px;
   
`;
export const ForgotPassword = styled.button`


    border: 0;
    background: none;
    width: 130px;
    height: 16px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 130%;
    letter-spacing: 0.01em;
    color: #3800B0;
    float: right;
    cursor: pointer;
    margin: 14px 40px 12px 0;
    @media (max-width: 480px) {
        margin: 16px 32px 12px 0px;   
    }
`;



export const ButtonSignUp = styled.button`

    width: 400px;
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
        margin: 0px 0px 32px 0px;   
        width: 279px;
    }
`