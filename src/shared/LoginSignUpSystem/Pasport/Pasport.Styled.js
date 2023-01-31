import styled from "styled-components"

export const Title = styled.h3`

margin: 40px 160px 0 40px;
font-size: 24px;
font-weight: 600;
font-family: sans-serif;
color: #110035;
text-align: left;
@media (max-width: 480px) {
    margin: 32px 32px 0 32px;   
    width: 279
}
`;

export const Paragraph = styled.p`

    font-size: 13px;
    font-weight: 400;
    color: #110035;
    margin: 16px 40px 0 40px;
    font-family: system-ui;
    text-align: left;
    @media (max-width: 480px) {
        margin: 16px 32px 0 32px;   
        width: 279
    }
`;

export const MainDiv = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 400px;
    height: 160px;
    background: #F7F8FA;
    border: 1px dashed #BFACE9;
    border-radius: 8px;
    margin: 24px 40px 0 40px;
    @media (max-width: 480px) {
        margin: 16px 32px 0 32px;   
        width: 279px;
    }
`;
export const Upload = styled.p`

width: 188px;
height: 18px;
font-family: sans-serif;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 130%;
letter-spacing: 0.01em;
color: #2D008D;
margin:0;
margin-bottom: 51px;
`;


export const List = styled.p`

color: #110035;
font-size: 13px;
font-family: system-ui;
text-align:start;
margin: 24px 40px 24px 40px;
`;

export const ListtoList = styled.li`

font-family: system-ui;
font-weight: 400;
font-size: 13px;
color: #110035;
margin-top: 10px;

`;

export const ButtonCon = styled.button`

    width: 294px;
    height: 56px;
    border-radius: 8px;
    border: none;
    margin-bottom: 40px;
    float: left;
    margin-left: 40px;
    background: #3800B0;
    color: white;
    font-size: 14px;
    font-family: system-ui;
    font-weight: 600;
    @media (max-width: 480px) {
        margin: 0 0 0 32px;   
        width: 173px;
    }
`;

export const ButtonLater = styled.button`

    
    border-radius: 8px;
    border: 1px solid #BFACE9;
    margin-bottom: 40px;
    float: right;
    margin-right: 40px;
    padding: 18px 24px;
    background: none;
    color: #3800B0;
    font-size: 14px;
    font-family: system-ui;
    font-weight: 600;
    letter-spacing: 0.8px;
    @media (max-width: 480px) {
        margin: 0 32px 32px 0;   
       
    }
`;


export const DivImg = styled.div`

    width: 400px;
    height: 41px;
    margin: 24px 40px 0 40px;
    @media (max-width: 480px) {
        margin: 16px 0 0 32px;   
        width: 279px;
    }
`
export const Image = styled.img`

    width: 40px;
    height: 40px;
    float: left;
    margin-right: 24px;
    z-index: 0;
`