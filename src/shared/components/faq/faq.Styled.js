import { Grid, Container } from "@mantine/core";
import styled from "styled-components";

export const FaqContainer = styled(Container) `
    padding-top: 120px;
    padding-bottom: 50px;

    height: auto;

    .main-container{
        @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
           display: none;
        }

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}){
            display: flex;
        }
    }

    .main-container .right-col{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .navigator-section {
        border: 2px solid rgb(229 228 228);
        border-radius: 6px;
        background: white;
        width:60%;
        
        margin-left: 100px;
        padding: 0;
        width: 60%;
        margin-top: 12px;
        display: grid;

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.xs}){
            display: inline-flex;
            overflow: scroll;
            width: 346%;
            margin-left: 0px;
        }
    }

    .faq-txt {
        padding-left: 100px;
        padding-bottom: 30px;
        font-size: 37px;
        font-weight: 600;

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.xs}){
            text-align: center;
            padding-left: 0px;
        }
    }

    .navigator-section button {
        
        color: #160046;

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.xs}){
            margin-top: 0px;
        }
    }

    button{
        height: 45px;
    }

    .first-btn {
      
      border: 3px solid #3800B0;
      border-radius: 5px;
      width: 100%;
      margin: 0;
      background: rgb(222 229 255);
      font-family: 'Steppe';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 130%;
      letter-spacing: 0.01em;
      font-feature-settings: 'liga' off;
      color: #3800B0;

    }

    .another-btn{
        width: 100%;
        margin: 0;
        background: rgb(222 229 255);
        font-family: 'Steppe';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 130%;
        letter-spacing: 0.01em;
        font-feature-settings: 'liga' off;  
        background: #FFFFFF;
    }
    

    .another-btn:hover{
        background: rgb(222 229 255);
    }

    .faq-sect {
        border: 1px solid rgb(229 228 228);
        position: initial;
        border-radius: 10px;
        box-shadow: none;
        margin-top: 10px;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 20px;

        @media screen and (max-width: ${({theme}) => theme.breakPoints.xs}) {

            width: 210%;
        }
    }
    
    }

    .faq-sect Typography {
        color: rgba(17, 0, 53, 1);
    }

    .faq {

        width:80%;
    }

    .faq-content {
        color: rgba(17, 0, 53, 1);  
        font-size: 18px;
        font-family: 'Steppe';
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        display: flex;
        align-items: center;
        font-feature-settings: 'liga'

        @media screen and (max-width: ${({theme}) => theme.breakPoints.xs}) {
            font-size: 14px;
        }
    }  

    .another-btn {
        background: white;

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.xs}){
            margin-left: 30px;
        }
    }

    .main-container-sm{
        
        width: 100% !important;
        
        @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
            display: flex;
            margin: 0 !important;
        }
 
        @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}){
             display: none;
        }
    }

    .main-container-sm .left-col-sm{
        width: 100%;
        overflow: scroll;
    }

    .main-container-sm .right-col-sm{
        margin-top: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;
        padding: 0;
    }

    .main-container-sm .right-col-sm .faq{
        width: 100%;
    }

    .another-btn:hover{
        background: rgb(222 229 255);
    }


    .main-container-sm .right-col-sm .faq .faq-sect-sm{
        margin-top: 10px;
        border: 1px solid rgb(229 228 228);
        position: initial;
        border-radius: 10px;
        box-shadow: none;

        width: 90%;
        padding: 0;
        margin: 0;

        margin-top: 20px;
        padding-top:10px;
        padding-bottom: 20px;
    }
    
    .main-container-sm .right-col-sm .faq{
        display: flex;
        align-items: center;
        flex-direction: column;

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
            width: 100%;
        }
    }

    .main-container-sm .left-col-sm .navigator-section-sm{
        width: 100%;
        display: flex;
        padding-left: 20px;
    }

    .main-container-sm .left-col-sm .navigator-section-sm button{
        margin: 0;
        height: 66px; 
        width: 181px;
        min-width: 181px;
    }

    .main-container-sm .left-col-sm .navigator-section-sm .another-btn{
        font-family: 'Steppe';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 130%;
        
        display: flex;
        justify-content: center;
        letter-spacing: 0.01em;
        font-feature-settings: 'liga' off;
        
        color: #160046;
    }

    .faq-title{
        color: #3800B0;
    }

`


export const ImageSector = styled(Container)`
    width: 60%;

    .foto_faq {
        width: 100%;
    }
`