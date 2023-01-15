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
        gap:32px;
        @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
                display:none;
            }
    }
`   