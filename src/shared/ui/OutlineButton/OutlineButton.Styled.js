// import { Button } from "@mantine/core";
import styled from "styled-components";
import { Button } from "../Button";

export const OutlinedButtonStyle = styled(Button)`
    padding: 12px 16px;
    border: 1px solid #baa9e2;
    border-radius: 8px;
    background-color: #EBE5F7;
    color:#3800B0;
    height:40px;

:hover {
    border: 1px solid #bface9;
    background-color: #bface9;
}

:active {
    background-color: '#EBE5F7';
    border: 1px solid '#baa9e2';
}



`;