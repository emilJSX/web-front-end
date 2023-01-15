import { TextInput } from "@mantine/core";
import styled from "styled-components";

export const CustomSearchBar = styled(TextInput)`
    input {
        border-radius:8px;
        font-size:14px;
        color:${({ theme }) => theme.colors.grey5};
        font-weight:500;
        border:0px;
        background-color:${({ theme }) => theme.colors.grey1};
        :focus {
            border-color:none;
        }
    }

    
    @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
        display:none;
    }

`