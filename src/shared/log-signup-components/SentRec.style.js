import styled from "styled-components"


export const Paragraphs = styled.p`

    font-family: system-ui;
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    width: 400px;
    margin:-20px 40px 40px 40px;
    color: #110035;
    float: left;
    line-height: 20.8px;
    letter-spacing: 0.45px;
    @media (max-width: 480px) {
        margin: -20px 32px 32px 32px;
        width: 279px;
        text-align: start;
    }
`;
export const Send = styled.button`



    font-size: 13px;
    color: #110035;
    border: none;
    background: none;
    font-family: sans-serif;
    border-bottom: 1px dashed #0B0023;
    font-weight: 600;
    cursor: pointer;
    margin: 0;

`;

export const Seconds = styled.span`

    color: #5D627D;
    margin-left: 5px;
    `