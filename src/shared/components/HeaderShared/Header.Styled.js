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

    .dots-icon {
        display: flex;
        gap: 28px;

        @media (min-width: 375px) and (max-width: 992px) {
            position: absolute;
            right: 15px;
            top: 31px;
        }
    }

    .all-wishes-btn {
        @media (min-width: 768px) and (max-width: 828px) {
            width: 100px;
        }
    }

    section{
        display: flex;
        align-items: center;
    }

    .create-wish-btn {
        @media (min-width: 375px) and (max-width: 1050px){
            display: none;
        }
    }

    .container-mobile-menu {
        display: flex;
        margin-right: 340px;

        @media (min-width: 992px) and (max-width: 1050px) {
            margin-right: 155px;
        }
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
`;

export const Card = styled.div`
    position: absolute;
    right: 0;
    float: right;
    width: 202px;
    height: 45px;
    display: block;


    @media(max-width: 992px) {
        display: none;
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
    width: 145px;
    height: 22px;
    font-size: 16px;
    font-weight: 600;
    margin-left:12px;
`;
export const ProfilWish = styled.span`

    float: left;
    width: 110px;
    height: 22px;
    font-size: 12px;
    font-weight: 400;
    margin-left:5px;
    color: #5D627D;
    text-align: center;
`;
export const CardIcon = styled.div`

    // float: left;
     margin: 0px  -470px 0 -200px;
    width: 202px;
    height: 45px;

    @media (min-width: 375px) and (max-width: 992px) {
        margin: 0px -691px 0 -200px;
        position: absolute;
        top: 20px;
        right: 743px;
    }
`;


export const CreateWishBtn = styled.button`
    background-color: #3800B0;
    border: 1px solid #3800B0;
    color: #fff;
    font-size: 14px;
    display:flex;
    align-items:center;
    justify-content: center;
    border-radius: 8px;
    transition: 0.2s all;
    cursor: pointer;
    font-feature-settings: 'liga' off;
    font-weight: 600;
    position: absolute;
    padding: 11px;

    @media (min-width: 375px) and (max-width: 1050px) {
        display: none;
    }
`