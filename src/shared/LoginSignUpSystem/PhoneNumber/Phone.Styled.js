import styled from "styled-components"

export const Title = styled.h3`

    margin: 40px 90px 0 40px;
    font-size: 24px;
    font-weight: 600;
    font-family: sans-serif;
    color: #110035;
    text-align: left;
    @media (max-width: 480px) {
        margin: 32pxpx 32px 0 32px;
        width: 279px;
    }
`;
export const Paragraph = styled.p`

    font-family: system-ui;
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    display: block;
    width: 400px;
    height: 42px;
    margin: 16px 40px 0 40px;
    color: #110035;
    @media (max-width: 480px) {
        margin: 16px 32px 0 32px;
        width: 279px; 

    }

`
export const Edit = styled.button`



    margin: 16px 110px 25px 40px;
    font-size: 13px;
    color: #110035;
    border: none;
    background: none;
    font-family: sans-serif;
    border-bottom: 1px dashed #0B0023;
    font-weight: 600;
    cursor: pointer;
    float: left;
    @media (max-width: 480px) {
        width: 131px;
        margin: 12px 32px 0 32px;

    }
`;
export const Againsms = styled.button`



    margin: 16px 0 0 0;
    font-size: 13px;
    color: #110035;
    border: none;
    background: none;
    font-family: sans-serif;
    border-bottom: 1px dashed #0B0023;
    font-weight: 600;
    cursor: pointer;
    float: left;
    @media (max-width: 480px) {
        width: 115px;
        margin: 16px 32px 0 32px;

    }

`;
export const Second = styled.p`

    margin: 16px 40px 0 -20px;
    color: #5D627D;
    font-size: 13px;
    font-weight: 400;
    float: left;
    display: block;    
    font-family: system-ui;
`

