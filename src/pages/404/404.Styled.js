import { Grid, Container } from "@mantine/core";
import styled from "styled-components";

export const ErrorSection = styled(Container) `
    padding-top: 100px;

    .text h2 {
        font-size: 35px;
        color: #6033C0;
        text-align: center;
        padding-top: 30px;
    }
`

export const ErrorImage = styled(Container) `
    display: flex;
    justify-content: center;
`

export const Buttons = styled(Container) `
    display: flex;
    padding-top: 35px;
    padding-bottom: 200px;
    justify-content: center;

    .btn {
        margin-left:15px;
    }
`

export const padding_section = styled(Container) `
    padding-left: 45px;
`