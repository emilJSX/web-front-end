import styled from "styled-components"

export const Main = styled.div`

    width: 100%;
    height: 100vh;
    background-color: rgba(200, 200, 200);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin:0;
    margin-top: -20px;
    z-index: 0;
`;
export const Container = styled.div`

    width: 480px;
    margin-top: 0px;
    height: auto;
    border-radius: 32px;
    background: white;
    @media (max-width: 480px) {
        width: 343px;
        border-radius: 24px;
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
    @media (max-width: 480px) {
      width: 279px;
    }

`;

export const FacebookP = styled.p`

    font-family: sans-serif;
    color: white;
    fontSize: 14px;
    margin:-23px 0 0 23px;
`;

export const Goapp = styled.div`

    width:400px;
    height: 56px;   
    border-radius: 8px;
    margin: 24px auto 0 auto;
    @media (max-width: 480px) {
        width: 279px;
      }
`;
export const Google = styled.div`

    width: 188px;
    height: 56px;
    border-radius: 8px;
    float: left;
    border: 1px solid #110035;
    @media (max-width: 480px) {
        width: 132px;
      }
`;

export const GoogleP = styled.p`

    font-size: 14px;
    font-weight: 600;
    font-family: sans-serif;
    margin: -23px 0 0 34px;
`;

export const Apple = styled.div`

    width: 188px;
    height: 56px;
    border-radius: 8px;
    float: left;
    margin-left: 20px;
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
    margin: -23px 0 0 34px;    
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
    width: 368px;
    border-radius: 8px;
    background: #F7F8FA;
    font-family: sans-serif;
    @media (max-width: 480px) {
        width: 247px;
        margin: 12px 32px 0 32px

    }
    `;

export const Password = styled.input`

    font-size: 14px;
    display: flex;
    padding: 16px;
    border: none;
    width: 328px;
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
    float: left
    display: block;
    @media (max-width: 480px) {
        margin: 14px 255px 14px 0px;   
        border-radius: 8px;
    }
`;

export const ParagraphChek = styled.p`

    font-family: sans-serif;
    font-weight: 400;
    font-size: 13px;
    color: #110035;
    display: block;
    float: left;
    margin: -31px 0 0 72px;
   
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