import styled from "styled-components";
import { Header } from '@mantine/core';

export const HeaderContainer = styled(Header)`
    height:88px;
    background: #FFF;
    box-shadow: 0px 2px 2px rgba(38, 33, 48, 0.06), 0px 0px 16px -8px rgba(38, 33, 48, 0.06);
    border-radius: 0px 0px 16px 16px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:16px;

    section{
        display: flex;
        align-items: center;
    }

    .logoSection{
        gap:32px;
        ul{
            display: flex;
            list-style-type: none;
            gap:32px;
            @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
                display:none;
            }
        }

        li{
            button{
                color:${({ theme }) => theme.colors.grey7}
               
            }
        }

        svg{
            cursor: pointer;
        }
    }

    .log-in-out-Section{
        //gap:32px;
        @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
                display:none;
            }
    }
`;

export const Card = styled.div`

    float: right;
    margin: 0px 16px 0 -450px;
    width: 202px;
    height: 45px;
    display: block;

    @media (min-width: 1400px) and (max-width: 1600px) {
        margin: 0px 16px 0 -99px;
    }
`;
export const ProfilP = styled.span`

    float: left;
    width: 45px;
    height: 45px;
    background:#EBE5F7;
    color:#8866D0;
    font-size: 16px;
    text-align: center;
    font-weight: 600;
    border-radius: 50%;
    padding-top: 10px;
    
`;
export const ProfilName = styled.span`

    float: left;
    width: 110px;
    height: 22px;
    font-size: 14px;
    font-weight: 600;
    margin-left:12px;
`;
export const ProfilWish = styled.span`

    float: left;
    width: 100px;
    height: 22px;
    font-size: 12px;
    font-weight: 400;
    margin-left:12px;
    color: #5D627D;
    text-align: center;
`;
export const CardIcon = styled.div`

    // float: left;
    margin: 0px -524px 0px -14px;
    width: 202px;
    height: 45px;

    @media (min-width: 1400px) and (max-width: 1600px) {
        margin: 0px -158px 0px -14px;
    }
`;


export const HeaderLoginHomePage = styled.div`
height:88px;
    background: #FFF;
    box-shadow: 0px 2px 2px rgba(38, 33, 48, 0.06), 0px 0px 16px -8px rgba(38, 33, 48, 0.06);
    border-radius: 0px 0px 16px 16px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:16px;

    section{
        display: flex;
        align-items: center;
    }

    .logoSection{
        gap:32px;
        ul{
            display: flex;
            list-style-type: none;
            gap:32px;
            @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
                display:none;
            }
        }

        li{
            button{
                color:${({ theme }) => theme.colors.grey7}
               
            }
        }

        svg{
            cursor: pointer;
        }
    }

    .log-in-out-Section{
        //gap:32px;
        @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
                display:none;
            }
    }
`