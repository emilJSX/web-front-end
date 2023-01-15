import styled from "styled-components"


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
margin: 19px 736px 0 507px;    
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
`;