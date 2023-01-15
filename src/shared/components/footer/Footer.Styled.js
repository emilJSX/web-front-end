import styled from "styled-components";
import { Footer } from '@mantine/core'
export const FooterComponent = styled(Footer)`
    background-color:${({ theme }) => theme.colors.primary10};
    padding:74px 161px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:656px;

    @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
        height:887px;
        padding:74px 32px;
    }

    .footer-head, .footer-main,.footer-main div ,.footer-bottom, ul,h3{
        display:flex;

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
        flex-direction:column;
    }
    }

    .footer-head,.footer-bottom{
        justify-content:space-between;
        align-items:center;
    }


    ul{
        gap:32px;
        align-items:center;
        a{
            color:#fff;
        }

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
        margin-top:40px;
    }
    }

    .footer-main{
        align-self: center;
        color:${({ theme }) => theme.colors.primary1};
        font-size: 72px;

        div{
            display:flex;
            gap:32px;
            align-items: center;
        }

        #p2{
                color:${({ theme }) => theme.colors.green}
        }

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
        font-size:40px;
        div{
            gap:0px;
        }
    }
    }


    .footer-bottom{
        gap:40px;
        font-size:14px;
        div:not(.bottom-connector){
            width:100%;
            display:flex;
            justify-content: space-between;
            color:#ffffff56;
            a{
                color:#fff;
                display: flex;
                align-items: center;
            }

            p{
                margin: 0;
            }
        }

        div:last-child{
            a:last-child{
                color:#ffffff56;
            }
        }
        
        
        .bottom-connector{
            height:100%;
            width:3px;
            background-color: #ffffff32;
        }

       
            @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
            display:none;
            }
    }

    .bottom-sm{
        display:none;
        @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
        display:flex;
        flex-direction:column;
        width:100%;

        .bottom-connector{
            border: 2px solid #0b0023;
            width:0px;
            background-color:#fff;
        }
      
        div:first-child {
            display:flex;
            justify-content: center;
            a{
                color:white;
            }

            .private-police-title{
                margin-right: 10px;
            }

            .treams-of-service{
                margin-left: 10px;
            }
        }

        div:last-child {
            display:flex;
            flex-direction:column;
            align-items:center;
            margin-top:32px;
            gap:32px;
            color:#ffffff56;

            a{
                color:#ffffff56;
            }
            
        }

    }

    }

    /*--- */

    ul:last-child{
        @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
        flex-direction:row;
    }}

    /* ul{
        @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
        
    }} */
`