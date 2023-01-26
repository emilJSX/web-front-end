import styled from "styled-components";
import { Container, Grid } from '@mantine/core';

export const SettingSection = styled(Container)`
    max-width: 500px;
    padding-bottom: 70px;
    .top-rule {
        font-size: 14px;
        color: grey;
        padding-top: 30px;
    }

    .setting-txt {
        color: #0B0023;
        font-size: 56px;
        padding-bottom: 70px;
        padding-top: 15px;
        font-weight: 600;
        padding-top: 30px;
    }

    .save-btn {
        background: 3800B0;
        color: white;
        border-radius: 10px;
        height: 50px;
    }
    
    .mantine-NativeSelect-input {
        font-size: 13px;
        background: #F7F8FA !important; 
        border: none !important;
        border-radius: 8px !important; 
        height: 58px !important;
    }

`
