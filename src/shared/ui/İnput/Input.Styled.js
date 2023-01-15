import { Input } from "@mantine/core";
import styled from "styled-components";
import { css } from 'styled-components';

export const InputComponent = styled(Input)`
    
    input{
        background-color: ${({ theme }) => theme.colors.grey1};
        color: ${({ theme }) => theme.colors.grey5};
        font-weight: 500;
        font-size: 14px;
        padding: 16px;
        border:1px solid ${({ theme }) => theme.colors.grey1};
        transition: border 0.4s linear;
        letter-spacing: 0.5px;
        
        :focus {
            border:1px solid  ${({ theme }) => theme.colors.primary3};
        }
    }
`