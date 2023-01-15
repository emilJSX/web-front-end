import styled from "styled-components"

export const Title = styled.h3`

    margin: 40px 227px 0 40px;
    font-size: 24px;
    font-weight: 600;
    font-family: sans-serif;
    color: #110035;
    @media (max-width: 480px) {
        margin: 32px 98px 0 32px;   
    }
`;

export const Number = styled.input`

    font-size: 14px;
    margin: 16px 40px 0 40px;
    display: flex;
    padding: 16px;
    border: none;
    width: 368px;
    border-radius: 8px;
    background: #F7F8FA;
    font-family: sans-serif;
    @media (max-width: 480px) {
        width: 247px;
        margin: 16px 32px 0 32px;

    }
`;
export const Calendar = styled.input`

    font-size: 14px;
    margin: 16px 40px 16px 40px;
    display: flex;
    padding: 16px;
    border: none;
    width: 368px;
    border-radius: 8px;
    background: #F7F8FA;
    font-family: sans-serif;
    z-index: 0;
    @media (max-width: 480px) {
        width: 247px;
        margin: 16px 32px 16px 32px;
    }
`;

export const Selects = styled.select`

margin: 24px 40px 0 40px;
background: #F7F8FA;
border-radius: 8px;
width: 400px;
padding: 16px;
font-size: 14px;
font-family: sans-serif;
border: none;
color:#8E93AF;
@media (max-width: 480px) {
    width: 279px;
    margin: 16px 32px 0 32px;

}

`;

export const Options = styled.option`

background: #F7F8FA;
font-size: 14px;
font-family: sans-serif;

`