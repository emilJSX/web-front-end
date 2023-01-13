import { Grid, Container } from "@mantine/core";
import styled from "styled-components";

export const BlogPostSection = styled(Container) `
    text-align: center;
    oveflow: hidden;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .colapostimg{
        display: flex;
        justify-content: center;

        .mantine-Image-figure{
            overflow: hidden;

            @media screen and (max-width: ${({ theme }) => theme.breakPoints.temp}) {
                width: 343px;
                height: 240px;
            }

            @media screen and (min-width: ${({ theme }) => theme.breakPoints.temp}) {
                width: 896px;
                height: 440px;
            }
        }
    }

    .first-image-container{
        overflow: hidden;

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.temp}) {
            width: 343px;
            height: 240px;
        }

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.temp}) {
            width: 664px;
            height: 400px;
        }
    }

    .icon{
        width: 100% !important;
        height: 10px !important;
    }

    .rule-section p {
        font-size: 14px;
        color: grey;
        padding-top: 30px;
    }
    
    .main-txt h1 {
        font-size: 50px;
        font-weight: 600;

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
            font-size: 40px;
            padding-top: 10px;
        }
    }

    .dot-main {
        font-size: 40px;
        margin: 2px;
    }

    .main-txt p {
        font-size: 13px;
        color: grey;
        padding-top: 10px;

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
            padding-bottom: 20px;
        }
    }

    .mt-5{
        display: flex;
        justify-content: center;
    }

    .first-txt {
        text-align: start;

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.temp}) {
            width: 60%;
        }

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.temp}) {
            width: 80%;
        }
    }

    .custom-txt {
        padding-top: 50px;
        display: flex;
        justify-content: center;

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.temp}) {
            width: 60%;
        }

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.temp}) {
            width: 80%;
        }
    }

    .second-txt {
        text-align: start;
        padding-top: 30px;

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.temp}) {
            width: 60%;
        }

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.temp}) {
            width: 80%;
        }
    }

    .colagrid {
        width: 82% !important;
        padding-left: 150px;
    }

    .finishing-touch {
        text-align: start;
        font-size: 20px;
        padding-top: 10px;
        font-weight: 600;
    }

    .social-icons {
        display: flex;
        justify-content: center;
        gap: 30px;
        padding-top: 20px;
        padding-bottom: 50px;

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.temp}) {
           padding-right: 200px;
        }

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.temp}) {
           padding-right: 0;
        }
    }
}
`

export const OtherBlogPost = styled(Container) `
    max-width: 1180px !important;
    padding-bottom: 100px;
    
    .blogposttop-text {
        font-size: 35px;
        padding-top: 30px;
        padding-bottom: 50px;
        font-weight: 500;
        padding-left: 10px;
    }

    .date-category {
        color: grey;
        font-size: 13px;
        font-weight: 300;
    }
    
    .title-card {
        color: #0B0023;
        font-weight: 600;
        font-size: 25px;
    }

    .text-card {
        font-size: 14px;
        color: #110035;
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

export const BlogOtherCard = styled(Container) `

`

export const ColaImg = styled(Container) `
    .colapostimg {
        border: 0;
        padding-left: 50px;
        padding-top: 20px;
        border-radius: 25px !important;
        height: 300px !important;
        width: 95% !important; 
    }
`

export const LineImage = styled(Container)`
    .line-flex {
        display: flex;
        justify-content: center;
        overflow: hidden;
    }
`

export const BottomSection = styled(Container) `

`