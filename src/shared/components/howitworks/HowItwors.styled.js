import {Container} from "@mantine/core";
import styled from "styled-components";

export const HIWContainer = styled(Container)`
    padding: 0px;
    margin-top: 60px;

    .mantine-15pjuqq{
        height: 100%;
    }

    .hiw-txt{
        font-size: 24px !important;
        height: 30%;

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.xl}){
            height: 20%;
        }
    }

    .img-girl {

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}){
            border-radius: 15px;
        }
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .grid-one {
        padding: 0px;
        
    }

    .grid-hiw {
        margin: 0px;
    }

    .grid-two {
        background: #160046;
        @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}){
            border-radius: 16px;
        }
    }

    .hiw-txt {
        font-size: 20px;
        color: white;
        text-align: center;
        padding-top: 30px;
    }

    .counter {
        font-size: 15px;
        color: white;
        text-align: center;
        padding-top: 50px;
        padding-bottom: 20px;
    }

    .title-txt{
        font-size: 40px;
        color: white;
        width: 70%;
        margin-left:110px;
        font-weight: 500;
        text-align: center;
        padding-bottom: 30px;
    }

    .text-sect {
        font-size: 15px;
        text-align: center;
        color: grey;
        font-weight: 300;
        width: 35%;
        margin-left: 235px;
        padding-top: 20px;
    }

    .owl-carousel.owl-drag .owl-item{
        height: 80%;
    }

    .owl-carousel.owl-loaded {
        height: 68%;
    }

    .owl-carousel .owl-stage-outer{
        height: 80;
    }

   .owl-stage-outer{
        height: 70%;
    }

    .owl-carousel .owl-nav .owl-prev {
        font-size: 40px;
        padding-right: 35px !important;
        color: white;
    }

    .owl-carousel .owl-nav .owl-next {
        font-size: 40px;
        margin-right:10px;
        color: white;
    }

    .owl-carousel .owl-nav .owl-next:hover {
        background: none;
    }

    .owl-carousel .owl-nav .owl-prev {
        background: none;
    }
    
     
    .owl-item .item{
        display: flex;
        flex-direction: column;

        height: 80%;
        
        p{
            margin: 0;
            display:flex;
            justify-content: center;
            font-size: 30px;
            height: 
        }


        h1{
            margin: 0;
            width: 100%;
            justify-content: center;
        }
    }
    
`

export const HiwSliderSection = styled(Container)`
    
`