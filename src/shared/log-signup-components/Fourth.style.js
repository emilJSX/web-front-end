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

    font-family: system-ui;
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    width: 400px;
    height: 21px;
    margin: 16px 0 0 40px;
    color: #110035;
    float: left;
    line-height: 20.8px;
    letter-spacing: 0.45px;
    @media (max-width: 480px) {
        margin: 16px 32px 0 32px;
        width: 279px;
        text-align: start;
    }
`;

export const Time = styled.span`

    color: #5D627D;
    font-size: 13px;
    font-weight: 400;
    display: block;    
    font-family: system-ui;
    float: right;
    margin-right: 42px;

    @media (max-width: 480px) {
        float: right;
        margin: 0;
        margin-right: 184px;
    }
`;

export const Interest = styled.div`

    width: 400px;
    height: 80px;
    margin: 61px 40px 24px 40px;
    background: none;
    @media (max-width: 480px) {
        width: 279px;
        margin: 71px 0 66px 32px;
    }
`;
export const Autotravel = styled.p`

    margin:0;
    margin-bottom: 8px;
    margin-right: 8px;
    float: left;
    background: #22006A;
    border-radius: 8px;
    font-size: 14px ;
    font-family: system-ui;
    color: white;
    padding: 8px  14px 9px 12px

`;
export const  Notdark = styled.p`

    margin:0;
    margin-bottom: 8px;
    margin-right: 8px;
    background: #EBE5F7;
    border-radius: 8px;
    font-family: system-ui;
    color: #110035;
    font-weight: 500;
    padding: 8px 12px;
    float: left;
    display: block;
    
`;

