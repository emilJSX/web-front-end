import { Grid, Container } from "@mantine/core";
import styled from "styled-components";

export const ContactContainer = styled(Container)`
    overflow: hidden;

    .contact-top {
        background-color: #2D008D;
        border-radius: 50px;
    }

    .contact-bottom {
      .mantine-Container-root .sc-eKBdFk .domdww .mantine-15pjuqq{
        align-items: center;
      }
    }

    .grid-contact-top {
        @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
            width:100%;
            margin: 0;
        }
    }

    .toggle p {
        color: grey;
        font-size: 14px;
        text-align: center;
        padding-top: 130px;
    }

    .content h2 {
        font-size: 50px;
        color: white;
        font-weight: 500;
        text-align: center;
        padding-top: 30px;
    }

    .info p {
        font-size: 17px;
        padding-top: 32px;
        padding-bottom: 10px;
        font-weight: 200;
        text-align: center;
        color: white;
    }

    .info ul {
        padding-top: 5px;
    }

    .info ul li {
        font-size: 18px;
        list-style: none;
        color: white;
        text-align:center;
        line-height: 35px;
    }

    .envelope-img {
        display: flex;
        justify-content: center;
        padding-top: 120px;
        padding-bottom: 127px;
    }

    
`
export const ContactSecondSection = styled(Container) `
    
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    height: 100%;
    font-weight: 200;
   
    @media screen and (max-width: ${({theme}) => theme.breakPoints.lg}) {
      padding-top: 50px;
      padding-bottom: 50px;
    }


    .input-section-one {
        padding-top:40px;
    }
    
    .input-section-two {
        border: 1px solid white;
        padding-top:20px;
    }

    .send-button {
        background-color: #3800B0;
        color: white;
        width:100%;
        height: 50px;
        margin-top: 40px;
    }

`

export const Modal = styled.div`
   position: fixed;
   width: 100vw;
   height: 100vh;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   justify-content: center;
   align-items: center;
`
   
export const ModalOpacity = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
   background: black;
   opacity: 0.5;
`

export const ModalSection = styled.div`
   height: 440px;
   width: 480px;
   background: #FFFFFF;
   border-radius: 32px;
   overflow: hidden;
   z-index: 10;
`

export const ModalHeader = styled.div`
   height: 20%;
   width: 100%;
   display: flex;

   .header-title{
     height: 100%;
     width: 90%;
     transform: translate(0px,20px);
     text-align: center;
     font-style: normal;
     font-weight: 900;
     font-size: 24px;
     line-height: 124%;
     display: flex;
     align-items: center;
     justify-content: center;
     font-feature-settings: 'liga';
     //font-family: 'Steppe';
   }

   button{
      height: 100%;
      width: 10%;

      svg{
        font-size: 25px;
      }
   }

`

export const ModalBody = styled.div`
  height: 60%;
  width: 100%;

  .image{
    height: 60%;
    width: 100%;
    padding-left: 50px;

    .cat-image{
        height: 100%;
        width: 170px;
        background: #FFFFFF;
    }
  }

  .title{
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: center;

    .title-text{
        display: flex;
        align-items: center;
        width: 80%;
        height: 100%;
    }
  }
  
`

export const ModalFooter = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .close-button{
    width: 80%;
    height: 53px;
    background: #3800B0;
    border-radius: 8px;
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.01em;
    font-feature-settings: 'liga' off;
    color: #FFFFFF;
  }

`
