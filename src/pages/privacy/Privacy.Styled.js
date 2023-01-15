import { Grid, Container } from "@mantine/core";
import styled from "styled-components";

export const PrivacyTopContainer = styled(Container)`
    padding: 25px;
    width: 37%;
    padding-bottom: 80px;

    @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
        width:100%;
    }

    @media screen and (min-width: ${({ theme })=> theme.breakPoints.sm}) and (max-width:${({theme})=> theme.breakPoints.lg}){
        width:100%;
    }

    .topsection p {
        font-size:14px;
        color: grey;
    }

    .topsection p {
        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            width: 100%;
            padding: 0px;
        }
    }

    .text_section p {
        padding-top: 30px;
        font-size: 14px;
        line-height: 25px;
    }

    .shipping_bgtext p {
        font-size:14px;
        line-height: 25px;
        padding-top: 25px;
    }

`

export const Privacy_policy_text = styled(Container)`
    font-size: 55px;
    margin-left: -15px;
    font-weight: 500;
    padding-top:30px;

    @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
        font-size: 40px;
        padding-top:20px;
        font-weight: bold;
    }
`

export const Terms_text = styled(Container)`
    font-size: 30px;
    margin-left: -15px;
    font-weight: 500;
    padding-top:50px;

    @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
        padding-top: 32px;
        font-weight: bold;
    }

`

export const Shipping_text = styled(Container)`
    font-size: 30px;
    margin-left: -15px;
    font-weight: 500;
    padding-top:50px;

    @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
        font-weight: bold;
    }
`

