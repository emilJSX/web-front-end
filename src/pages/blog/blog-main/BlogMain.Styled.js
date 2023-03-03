import { Grid, Container } from "@mantine/core";
import styled from "styled-components";

export const BlogMainSection = styled(Container) `
    padding-top: 50px;
    padding-left: 150px;
    overflow-x: hidden;
    padding-right: 130px;


    .all-btn {
        border: 2px solid #3800B0;
        color: #3800B0;
        height: 50px;
        border-radius: 10px;
        background: rgb(222 229 255);
        text-transform: capitalize;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 6px;
        padding-bottom: 6px;
    }

    @media(max-width: 1120px){
        padding-left: 120px;
        padding-right: 100px;
    }

    @media(max-width: 1085px){
        padding-left: 110px;
        padding-right: 90px;
    }

    @media(max-width: 1040px){
        padding-left: 100px;
        padding-right: 80px;
    }

    @media(max-width: 1010px){
        padding-left: 95px;
        padding-right: 75px;
    }

    @media(max-width: 990px){
        padding-left: 80px;
        padding-right: 60px;
    }

    @media(max-width: 950px){
        padding-left: 40px;
        padding-right: 20px;
    }


    @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}){
        padding-left:15px;
        padding-right:15px;
    }

    .grid-card-root {
        margin:0px;
    }

    .grid-root {
        @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}){
            display: block;
        }
    }

    .col-root-img {
        @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}){
            max-width: 97.6%;
        }

        @media (min-width: 355px) and (max-width: 370px) {
            max-width: 97.7%;
        }
        @media (min-width: 370px) and (max-width: 390px) {
            max-width: 97.8%;
        }
        @media (min-width: 390px) and (max-width: 400px) {
            max-width: 97.9%;
        }
        @media (min-width: 400px) and (max-width: 431px) {
            max-width: 98.2%;
        }
    }


    .instruction h2 {
        font-size: 50px;
        font-weight: 600;
        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            font-size: 40px;
        }
    }

    .instruction p {
        color: grey;
        padding-bottom: 10px;
        font-size: 13px;
    }

    .img-section {
        object-fit: cover;
        width: 98%;
        height: auto;
        margin-left: 8px;

        @media screen and (min-width: ${({ theme })=> theme.breakPoints.sm}){
            height: 100%
        }

        @media (min-width: 430px){
           width: 99%
        }

        figure{

           @media screen and (min-width: ${({ theme })=> theme.breakPoints.sm}){
             height: 100%
           }

           div{
              @media screen and (min-width: ${({ theme })=> theme.breakPoints.sm}){
                height: 100%
              }

              img{
                  @media screen and (min-width: ${({ theme })=> theme.breakPoints.sm}){
                    //height: 100% !important;
                  } 
              }
           }
        }

    }

    .Mui-selected {
        border-radius: 5px;
        background-color: #3800B0 !important;
        color: white;
        font-weight: bold;
    }
`

export const ButtonSection = styled(Grid) `
    padding-top: 30px;
    display: flex;
    padding-bottom: 100px;

    @media (max-width: 1000px){
        flex-direction: column-reverse;
        padding-bottom: 50px;
        gap: 18px;
    }

    
    .btn-section {

        border: 2px solid rgb(229 228 228);
        border-radius:13px;
        overflow: hidden;


        @media(max-width: 590px){
            width: 110%;
            overflow: scroll;
        }

        .btn-container{
            width: 100%;
            height: 100%;
            display: flex;

            @media(max-width: 1000px){
                width: 100%;
            }

            li{
                font-size: 14px;
            }

            @media(max-width: 590px){
                width: 112%;
                overflow: scroll;
            }
        }
    }


    button{

        margin: 0 !important;

        @media(max-width: 1520px){
            font-size: 14px;
        }

        @media(max-width: 1376px){
            font-size: 13px;
        }

        @media(max-width: 1324px){
            font-size: 12px;
        }

        @media(max-width: 1250px){
            font-size: 12px;
        }

        @media(max-width: 1200px){
            font-size: 10px;
        }
    }


    .other-btn {
        background: white;
        padding-left: 20px;
        padding-right: 20px;
        border: none;
        color: black;
        height: 50px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        text-transform: capitalize;

        @media(max-width: 1500px){
            padding-left: 20px;
            padding-right: 20px;
        }

        @media(max-width: 1290px){
            padding-left: 15px;
            padding-right: 15px;
        }

        @media(max-width: 1100px){
            padding-left: 12px;
            padding-right: 12px;
        }

        @media(max-width: 1000px){
            min-width: 49px;
        }



        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            margin-left: 33px;
        }
    }

    .input-section {
       @media(min-width: 1000px){
          flex: 1;
         padding-right: 0 !important;
       }

       @media(max-width: 1000px){
         width: 100%;
         display: flex;
         justify-content: center;
       }

        .inp-sect{
            width: 100%;
            height: 100%;
        }

    }

`

export const CardTopSection = styled(Container) `
    background: #0B0023;
    border-radius: 20px;
    padding: 0px !important;

    

    .mantine-Image-image {
        border-radius: 17px;

      @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}) {
        max-height: 240px;
      }       
    }

    .read-section h2 {
        font-size: 40px;
        color: white;
        font-weight: 600;
        margin-bottom: 16px;

        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            width: 197%;
            font-size: 21px;
        }
    }

    .txt {
        font-size: 16px;
        color: #EBE5F7;
        padding-top: 10px;
        padding-bottom: 10px;
        width: 90%;
        margin-bottom: 16px;

        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            font-size: 15px;
            color: #EBE5F7;
            width: 231%;
            padding-right: 25px;
            padding-top: 10px;
        }
    }

    .top-txt {
        padding-bottom: 10px;
        color: grey;
        font-size: 15px;
    }

    .read-section a {
        text-decoration: none;
        color: white;
        font-weight: 600;
        font-size: 14px;
    }

    .read-section {
        padding-top:20px;
        padding-left: 30px;
        
        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            padding-left: 15px;
          padding-bottom: 24px;
        }
    }
`

export const BlogCard = styled(Container) `
    padding: 0px;
    padding-top: 50px;
    margin: 0;

    .date-category {
        color: grey;
        font-size: 14px;
        font-weight: 400;
    }
    
    .title-card {
        color: #0B0023;
        font-weight: 600;
        font-size: 24px;
    }

    .card-blog {
        &:hover {
            background: white !important;
        }
    }
 
    .text-card {
        padding-bottom: 15px;
        padding-top: 10px;
        font-size: 16px;
    }

    .read-article {
        color: #3800B0 !important;
        font-size: 14px;
        padding: 0;
        margin: 0;
        text-decoration: none;
        font-weight: 600;
    }
`

export const PaginationSection = styled(Container) `
    display: flex;
    justify-content: center;
    padding-bottom: 70px;
    padding-top: 50px;

    @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
        padding-left: 0px;
        padding-right: 0px;
    }
`






