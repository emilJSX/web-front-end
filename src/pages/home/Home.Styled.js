import { Grid, Container } from "@mantine/core";
import styled from "styled-components";
import confettiImage from "../../assets/images/confetti-mask.png";

export const HomeConatiner = styled(Container)`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: ${({ theme }) => theme.colors.primary8};

`;

export const HomeTop = styled(Grid)`
  /* padding-top:24px; */

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding-left: 20px;
    padding-right: 20px;
  }

  .how-it-works {
    margin-left: 10px;
    @media screen and (max-width: ${({ theme }) => theme.breakPoints.xs}) {
        display:none;
    }
  }

  .col-left,
  .col-right {
    position: relative;
    @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
      display: none;
    }
  }

  .rightImageContainer {
    display: flex;
    gap: 24px;
    flex-direction: column;
    position: absolute;
    left: 10px;
    transition: 3s;
    bottom: 0;
  }

  .leftImageContainer {
    display: flex;
    gap: 24px;
    flex-direction: column;
    position: absolute;
    right: 10px;
    transition: 3s;
    top: 0;
    bottom: 0;
  }

  .col-center {
    background-color: ${({ theme }) => theme.colors.primary1};
    border-radius: 24px;
    padding: 21px 32px;
    /* width: 100%; */
    height: 939px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    #last-e {
      display: flex;
      gap: 10px;
      overflow: auto;
      /* ::-webkit-scrollbar {
        display: none;
        } */
    }
  }

  .colCenterHeader {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #head-logo {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    gap: 5px;
  }

  .colCenterCenter {
    /* border: 1px solid red; */
    #head {
      display: flex;
      justify-content: center;
      gap: 24px;
      align-items: center;

      p {
        font-weight: 600;
        font-size: clamp(2.5rem, 72px, 4.5rem);
        color: ${({ theme }) => theme.colors.primary5};
        text-align: center;
        
        @media (min-width: 1100px) and (max-width: 1284px) {
          font-size: 55px;
        }

        @media (min-width: 993px) and (max-width: 1100px) {
          font-size: 51px;
        }

        @media (min-width: 375px) and (max-width: 550px) {
          font-size: 40px;
        }
      }

      @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
        flex-direction: column;
      }

      #fireworkIcon {
        @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
          order: 1;
        }
      }
    }
  }
  #head-center {
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary5};
    padding-inline-end: 10%;

    @media (min-width: 375px) and (max-width: 768px) {
      text-align: center;
      font-weight: 500;
      font-size: 14px;
      margin-left: 8px;
      color: #3800B0;
      padding-inline-end: 14%;
      margin-top: 6px;
    }

    p {
      @media (min-width: 375px) and (max-width: 768px) {
        width: 73px;
      }
    }

    #1 {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  #head-end {
    display: flex;
    gap: 32px;
    font-weight: 600;
    font-size: 14px;
    /* color:${({ theme }) => theme.colors.primary5}; */

    .log-buttons {
      @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
        display: none;
      }
    }
  }

  .head-menu {
    border: 1px solid ${({ theme }) => theme.colors.primary2};
    border-radius: 20px;
    padding: 5px;

    :active {
      .mantine-t0y1bq {
        background-color: ${({ theme }) => theme.colors.primary1};
      }
    }
  }

  .colCenterBottom {
    /* border:1px solid yellow; */
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 120px;
    button {
      margin-top: 48px;
      height: 72px;
      width: 256px;
      padding: 12px 24px;
      border-radius: 40px;
    }

    p {
      color: ${({ theme }) => theme.colors.primary5};
      font-weight: 600;
      font-size: 20px;
      min-width: 60px;
      margin: 0;

      @media (min-width: 1125px) and (max-width: 1395px) {
        font-size: 15px;
      }

      @media (min-width: 1396px) and (max-width: 1462px) {
        font-size: 14px;
      }

      
      @media (min-width: 993px) and (max-width: 1032px) {
        font-size: 13px;
      }
      
      @media (min-width: 1033px) and (max-width: 1124px) {
        font-size: 14px;
      }
    }

    div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      width: 100%;

      p:last-child {
        border: 1px solid rgba(247, 248, 250, 0.4);
        padding: 16px 24px;
        background: rgba(247, 248, 250, 0.4);
        border-radius: 16px;
        width: 296px;
        height: 61px;
        margin-top: 2px;
        @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
          /* flex-direction: column; */
          width: 100%;
        }
      }

      @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
        flex-direction: column;
        width: 100%;
        margin-top: 56px;
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}) {
      padding: 0;
    }
  }

  .descirbe-input {
    width: 100%;
    input {
      font-weight: 600;
      font-size: 20px;
      color: #baa9e2;
      padding: 16px 24px;
      height: 56px;
      border-radius: 16px;
      ::placeholder {
        color: #baa9e2;
      }

      @media (min-width: 1125px) and (max-width: 1395px) {
        font-size: 15px;
      }

      @media (min-width: 993px) and (max-width: 1124px) {
        font-size: 14px;
      }
    }
  }

  .arrow-down {
    padding: 12px, 16px;
  }
`;


export const WishCreationInput = styled.input`
  width: 100%;
  color: #969BB8;
  font-weight: 600;
  font-size: 20px;
  padding: 16px 24px;
  height: 56px;
  border-radius: 16px;
  border: 1px solid #F7F8FA;

  &:focus {
    border: 1px solid red;
  }
`

export const WishCreationButton = styled.button`

display:flex;
align-items:center;
background-color: #3800B0;
border: 1px solid #3800B0;
color: white;
justify-content: center;
gap: ${({ size }) => size !== 'm' ? '8px' : '12px'};
height: ${({ size }) => size == 'm' ? '40px' : '40px'};
/* padding: ${({ size }) => size == 'm' ? '12px 24px' : '12px 16px'}; */
padding: ${({ size, variant }) => {
    if (variant !== 'white') return size == 'm' ? '5px 12px' : '12px 16px';
    else 0;
}};
border-radius: 8px;
transition: 0.2s all;
cursor: pointer;
font-feature-settings: 'liga' off;
font-weight: 600;
letter-spacing: 0.01em;
background-color:${({ variant, theme }) => {
    if (variant == 'default') return theme.colors.primary5;
    else if (variant == 'outlined') return 'inherit';
    else if (variant == 'white') return 'inherit';
    else return theme.primary5;
}};
border: ${({ variant }) => variant !== 'white' ? '1px' : '0px'} solid ${({ variant, theme }) => {
    if (variant == 'default') return theme.colors.primary5;
    else if (variant == 'outlined') return theme.colors.primary2;
    else return theme.primary5;
}};
font-size: ${({ size }) => {
    if (size == 'm') return '14px';
    if (size == 's') return '13px';
    if (size == 'xs') return '12px';
    else return '14px';
}};

:hover {
    box-shadow:${({ variant }) => variant == 'default' ? '0px 8px 16px rgba(34, 0, 106, 0.24)' : 'none'};
    filter:${({ variant }) => variant == 'outlined' ? ' drop-shadow(0px 4px 8px rgba(56, 0, 176, 0.32))' : 'none'};
    border:${({ variant, theme }) => {
    if (variant == 'outlined') return `1px solid ${theme.colors.primary3}`;
    else if (variant == 'default') return `1px solid ${theme.colors.primary6}`;
    else '0px solid';
}};
  background: #30058b;
  color:${({ variant, theme }) => {
    if (variant == 'default') return '#fff';
    else if (variant == 'outlined') return theme.colors.primary5;
    else if (variant == 'white') return theme.colors.primary3;
    else return '#fff';
}};
    

a{
    color:${({ variant, theme }) => {
    if (variant == 'default') return '#fff';
    else if (variant == 'outlined') return theme.colors.primary5;
    else if (variant == 'white') return theme.colors.primary3;
    else return '#fff';
}}};

 };

 :active {
    box-shadow:none;
    filter:none;
    background-color:${({ variant, theme }) => {
    if (variant == 'default') return theme.colors.primary7;
    else if (variant == 'outlined') return 'inherit';
    else if (variant == 'white') return 'inherit';
    else return theme.primary7;
}};
    
    border:${({ variant, theme }) => {
    if (variant == 'outlined') return `1px solid ${theme.colors.primary3}`;
    else if (variant == 'default') return `1px solid ${theme.colors.primary6}`;
    else '0px solid';
}};

    color:${({ variant, theme }) => {
    if (variant == 'default') return '#fff';
    else if (variant == 'outlined') return theme.colors.primary5;
    else if (variant == 'white') return theme.colors.primary6;
    else return '#fff';
}};

 }



`


export const HomeCenter = styled.div`
z-index: 10;
display: flex;
flex-direction: column;
width: 100%;
position: relative;
background: #fff;
border-top-left-radius: 35px;
border-top-right-radius: 35px;
overflow: hidden;



.promo-view-container {
  background-color: ${({ theme }) => theme.colors.primary7};
  height: 800px;
  border-radius: 32px;
  position: relative;
  display: flex;
  flex-direction: column;


  .background{
    height: 30%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:flex-end;
    background-image: url(${confettiImage});
    padding-bottom: 50px;
    p{
       color: white;
       font-size: 50px;
    }
  }
 
  .slide-show{
    width: 100%;
    height: 70%;
    overflow: hidden;
      
    @media screen and (max-width: ${({ theme }) => theme.breakPoints.lg}) {
      display: none;
    }


    .slide-show-container{
      height: 60%;
      width: 100%;
      display:flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
          height:90%
      }

      .buttonLeft{
        height: 60px;
        width: 60px;
        margin-right: 20px;
        border-radius: 30px;
        background: #160046;
        border: 0;

        @media screen and (min-width: ${({ theme }) => theme.breakPoints.extra_small}) and (max-width: ${({ theme }) => theme.breakPoints.sm}){
          display: none;
        }

        svg{
          color:white;
          font-size: 20px;
        }
      }

      .slider{

          height: 280px;
          max-width:1230px;
  
         @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
            height: 90%;
         }

         .carousel{
           height: 100%;
           
           .carousel-inner{
             height: 90%;
               
             .active{
                 height: 100%;
             }

           }

           .carousel-control-prev{
            left: -110px !important;
            top: 113px;
            height: 50px;
            width: 50px;
            background: black;
            border-radius: 50px;

                    
            i{
              font-size: 30px;
            }
           }
           
           .carousel-control-next{
            right: -105px !important;
            top: 110px;
            height: 50px;
            width: 50px;
            background: black;
            border-radius: 50px;

            i{
               font-size: 30px;
            }
         }

          .carousel-indicators{
            bottom: -100px;
          }

           
         }

         .carousel .carousel-control-prev .carousel-control-prev-icon {
             font-size:100px;
             width: 40%;
         }

         .carousel .carousel-control-next .carousel-control-next-icon {
            width: 40%;
        }

        .insider{
          display: flex;
          height: 100%;
        }
          
        .slider-content{
          height: 100%;
          width: 598px;
          margin-right: 10px;
          margin-left: 10px;
          background: #160046;
          border-radius: 32px;
          display: flex;
          transition: 3s;

          @media screen and (max-width: ${({ theme }) => theme.breakPoints.xl}){
             width: 48%;
             max-width: 48%;
          }

          @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
            flex-direction: column;
            width: auto;
          }


          
          @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}){
            flex-direction: column;
            width: auto;
          }

          @media screen and (min-width: ${({ theme }) => theme.breakPoints.extra_small}) and (max-width: ${({ theme }) => theme.breakPoints.xs}){
            transform: translate(100px, 0px)
          }



          .image{
            position: relative;
            height: 100%;
            width: 50%;
            display:flex;
            justify-content: center;
            align-items: center;

            @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
              width: 280px
            }

            @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}){
               width: 250px;
            }

            .icon{
              position: absolute;
              height: 48px;
              width: 48px;
              z-index: 1;
              top: 12px;
              right: 12px;
              border: 4px solid #160046;
              border-radius: 24px; 
              background: #160046;

              img{
                height: 95%;
                width: 95%;
                margin-left: 1px;
                margin-top: 1px;
              }
                
              @media screen and (max-width: ${({ theme }) => theme.breakPoints.xl}){
                right: 12px;
                top: 12px;
              }

              @media screen and (max-width: ${({ theme }) => theme.breakPoints.lg}){
                right: 12px;
                top: 12px;
              }
                
              
              @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
                 left: 12px;
                 top: 74%;
              }

              @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}){
                  left: 12px;
                  bottom: 0px;
              }
            }

         
          }

            img{
              height: 90%;
              width: 90%;
              border-radius: 24px;
              object-fit: cover;
            }           
          }

          .title{
            height: 100%;
            width: 50%;
            padding-bottom: 20px;
            padding-top: 20px;
            padding-left: 20px;

            @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
              width: 100%
            }
            
            .top{
              height: 20%;
              width: 100%;

              .user-name{
                color:white;
                font-family: 'Steppe';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 140%;
                height: 50%;
                display: flex;
                aling-items: center;
                width: 120%;
              }

              .summ{
                color: white;
                height: 50%;
                display: flex;
                align-items: center;
                color: #FFFFFF;
                opacity: 0.56;
                font-family: 'Steppe';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 140%;
              }
            }

            .center{
              height: 60%;
              width: 100%;
              display: flex;
              justify-content: center;
              aling-items: center;
              flex-direction: column;

              .main-subtitle{
                font-family: 'Steppe';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 140%;
                color: #FFFFFF;

                opacity: 0.56;

              }
              
              @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
               display:block;
               padding-top:5px;
              }
              
              .main-title{
                font-family: 'Steppe';
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 120%;
                color: #FFFFFF;
              }
            }

            .bottom{
              height: 20%;
              width: 100%;
              display: flex;
              align-items: center;
              cursor: pointer;

              .bottom-title{
                color: white;

              }

              .bottom .bottom-title{
                margin-left: 60px;
              }
            }
          }
        }
      }
        

      .buttonRight{
        height: 60px;
        width: 60px;
        margin-left: 20px;
        border-radius: 30px;
        background: #160046;
        border: 0;
        
        @media screen and (max-width: ${({ theme }) => theme.breakPoints.lg}){
          margin-left: 0;
        }
        
        @media screen and (min-width: ${({ theme }) => theme.breakPoints.extra_small}) and (max-width: ${({ theme }) => theme.breakPoints.sm}){
          display: none;
        }

        svg{
          color:white;
          font-size: 20px;
        }
      }
    }


    .slide-show-sm{
      width: 100%;
      height: 70%;

     

      @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}){
        display: none;
      }
    }

    .buttons{
      height: 40%;
      width: 100%;

      @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
         height: 10%;
      }

      @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}){
        height: 10%;
        
      }
    }
  }

}

.popular-wishes-viewer-container {
  height: 500px;
  background-color: #fff;
  overfow: hidden;
}

  .popular-wishes-viewer-container {
    height: 500px;
    background-color: #fff;
  }
`;
// ______________________________

export const GridCutoms = styled(Grid)`
  .GridCebter {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
`;
export const GifwRAP = styled.div`
  text-align: center;
  color: #110035;
  overflow: hidden;
`;
export const Gifname = styled.p`
  font-weight: 600;
  font-size: 48px;
  line-height: 140%;
`;
export const GifDesc = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
`;
export const GifImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;
export const GifHeader = styled.h5`
  font-weight: 600;
  font-size: 37px;
  line-height: 120%;
  color: #110035;
  margin: 80px 0px 30px 0px;
`;

export const WishesText = styled.h2`
  padding-bottom: 50px;
  padding-top: 100px;

  .wishes-text {
  font-size: 40px;
  color: #110035;
  font-weight: bold;
}
`

export const WishesBtn = styled(Container)`
  width: 100%;
  padding-top: 30px;
  .wish-btn {
    width: 100%;
    background: white;
    color: #3800B0;
  }

  .partner-btn {
    width: 100%;
    background: white;
    color: #3800B0;
    margin-top: 50px;
  }

  .owl-carousel{
    padding-top:50px;
  }

  .owl-carousel .owl-nav .owl-prev {
    font-size: 50px;
    color: #3800B0;
    position: absolute;
    top: 45%;
    left: -10%;

    @media screen and (max-width: ${({ theme }) => theme.breakPoints.xs}){
      display: none;
    }
  }

  .owl-carousel .owl-nav .owl-prev:hover {
    background: white;
  }

  .owl-carousel .owl-nav .owl-next:hover {
    background: white;
  }

  .owl-carousel .owl-nav .owl-next {
    font-size: 50px;
    color: #3800B0;
    position: absolute;
    top: 45%;
    right: -10%;

    @media screen and (max-width: ${({ theme }) => theme.breakPoints.xs}){
      display: none;
    }
  }

  .owl-carousel .owl-item img {
    border-radius: 50px;
  }
`

export const PartnersText = styled(Container)`
  .partners-text {
    font-weight: 600;
    font-size: 37px;
    margin-left: -22%;
    padding-top: 100px;

    @media screen and (max-width: ${({ theme }) => theme.breakPoints.xs}){
      text-align: center;
      margin-left: 0px;
      font-size: 30px;
    }
  }
`

export const InsiderContainer = styled(Container)`
   background: #00FF9E;
   height: 800px;
   border-radius: 32px;

   @media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}){
    display flex;
    justify-content: center;
    height: 650px;
   }

   @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}){
    display flex;
    justify-content: center;
    height: 550px;
   }

   @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}){
    display flex;
    justify-content: center;
    height: 450px;
   }

   @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
    display flex;
    justify-content: center;
    height: auto;
   }

   @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}){
    display flex;
    justify-content: center;
    height: auto;
   }
    
    
    .insider-lg{
      width: 100%;
      height: 100%;
      display: flex;

      @media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}){
        width: 1400px;
      }

      @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
        flex-direction: column;
        padding-top: 50px;
        padding-bottom: 50px;
      }

      .title{
        height: 100%;
        width: 40%;

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
          width: 100%;
          height: auto;
        }
        
        .top{
          height: 50%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
            height: 200px;
            align-items: center;
          }

          .top-title{
            margin: 0;
            width: 50%;

            font-family: 'Steppe';
            font-style: normal;
            font-weight: 600;
            font-size: 60px;
            line-height: 120%;

            font-feature-settings: 'liga' off;

            @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}){
              font-family: 'Steppe';
              font-size: 40px;
            }

            @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}){
              font-family: 'Steppe';
              font-size: 40px;
              width: 318px;
            }

            @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
              font-family: 'Steppe';
              font-size: 80px;
              width: 90%;
              align-items: end;
              text-align:center;
            }

            @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}){
              font-family: 'Steppe';
              font-size: 70px;
              width: 90%;
              text-align:center;
              align-items: center;
            }

            @media screen and (max-width: ${({ theme }) => theme.breakPoints.xs}){
              font-family: 'Steppe';
              font-size: 45px;
              width: 90%;
              text-align:center;
              align-items: center;
            }
            
          }
        }

        .bottom{
          height: 50%;
          width: 100%;
          display:flex;
          justify-content: center;
          align-items:center;
          padding-bottom: 20px;
           
          @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
            height: 600px;
            align-items: start;
          }

          @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}){
            height: 600px;
            align-items: start;
          }

          .bottom-title{
            width: 60%;
            margin-left: 60px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 160%;
            margin: 0;


            @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}){
              font-size: 13px;
              width: 320px;
            }

            @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-size: 30px;
              line-height: 160%;

              display: flex;
              align-items: flex-end;
              text-align: center;
              font-feature-settings: 'liga' off;
              color: #1A1C29;     
              flex: none;
              order: 1;
              align-self: stretch;
              flex-grow: 0;
              width: 90%;
              align-items:start;
             
              padding-top: 50px;
              
            }

            @media screen and (max-width: ${({ theme }) => theme.breakPoints.xs}){
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-size: 30px;
              width: 90%;
              align-items:start;
             
              padding-top: 50px;
              
            }

            
            @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}){
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-size: 30px;
              width: 90%;
              align-items:start;
            }

            @media screen and (max-width: ${({ theme }) => theme.breakPoints.xs}){
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-size: 25px;
              width: 90%;
              align-items:start;
              text-align: center;   
            }
          }
        }
      }

      .content{
        height: 100%;
        width: 60%;
        display: flex;
        align-items: center;
        padding-left: 50px;
        

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
          padding: 0;
          width: 100%;
          justify-content: center;
          align-items: start;
       }

       @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}){
        padding: 0;
        width: 100%;
        justify-content: center;
        align-items: start;
     }


        
        .box{
          height: 85%;
          width: 90%;
          border-radius: 25px;
          background: #2D3043;
          display: flex;

          @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
            flex-direction: column-reverse;
             align-items: start;  
             height: 1000px;
          }

          @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
            width: 99%;
            height: 1000px;
          }

         @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}){
           width: 99%;
         }

          .left{
            height: 100%;
            width: 50%;

            @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
              width: 100%;
            }

            .top{
              height: 50%;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: flex-end;
              padding-bottom: 10px;

              .top-insider{
                height: 90%;
                width: 90%;
                background: #1A1C29;
                border-radius: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                i{
                  color: white;
                  font-size: 40px;

                  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}){
                    font-size: 20px;
                  }
                }

                .download-content{
                  color: #FFFFFF;
                  font-size: 16px;
                  margin-top: 10px;

                  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}){
                    font-size: 10px;
                  }
                }

                .apple-title{
                  font-family: 'Steppe';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 45px;
                  line-height: 120%;
                  color: white;

                  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}){
                    font-size: 40px;
                  }

                  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}){
                    font-size: 20px;
                  }
                }
              }
            }

            .bottom{
              height: 50%;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: flex-start;
              padding-top: 10px;

              .bottom-insider{
                 height: 90%;
                width: 90%;
                background: #1A1C29;
                border-radius: 24px;

                height: 90%;
                width: 90%;
                background: #1A1C29;
                border-radius: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                i{
                  color: white;
                  font-size: 40px;

                  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}){
                    font-size: 20px;
                  }
                }

                .download-content{
                  color: #FFFFFF;
                  font-size: 16px;
                  margin-top: 10px;

                  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}){
                    font-size: 10px;
                  }
                }

                .apple-title{
                  font-family: 'Steppe';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 45px;
                  line-height: 120%;
                  color: white;

                  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}){
                    font-size: 40px;
                  }

                  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}){
                    font-size: 20px;
                  }
                }
              }

            }
          }

       

          .right{
            height: 100%;
            width: 50%;
            display:flex;
            align-items:center;
            justify-content:center;

            @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
              width: 100%;
              justify-content:center;
            }

            .central{
              position: relative;
              height: 90%;
              width: 90%;
              background: #1A1C29;
              border-radius: 24px;
              margin: 0;

              @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
                display: flex;
                justify-content: center;
              }

              .iphone-image{
                position: absolute;
                height: 120%;
                transform: translate(20px, -80px)
              }
            }
          }
        }
    }
  }
`


export const Item = styled.div`
   .owl-carousel{
    
      height: 100%;

      .owl-stage-outer{
        
        height: 100%;

         .owl-stage{

            height: 100%;

            .owl-item {
              
              height: 100%;
              display: flex;
              justify-content: center;

              .item{

                height: 90%;
                width: 80%;
                background: #160046;
                border-radius: 32px;

                @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
                   width: 300px;
                }
    

                .slider-content{

                  height: 100%;

                  

                  .image{
                    position: relative;
                    height: 50%;
                    padding-left: 20px;
                    padding-right: 20px;
                    padding-top: 20px;
                    border-radius: 24px;

                    .icon{
                      position: absolute;
                      border-radius: 50px;
                      height: 40px;
                      width: 40px;
                      left: 20px;
                      bottom: 0;
                      overflow: hidden;
                      right: 12px;
                      border: 4px solid #160046;
                      border-radius: 24px; 
                      background: #160046;

                    }

                    img{
                      height: 100%;
                      width: 100%;
                    }

                  }

                  .title{

                    height: 50%;

                  }
                }
              }
            }
            
            .owl-item.active {
              
              height: 100%;
              display: flex;
              justify-content: center;

              @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
                min-width: 300px;
                transform: translate(30px, 0px);
              }

              .item{

                height: 90%;
                width: 80%;
                background: #160046;
                border-radius: 32px;

                @media screen and (max-width: ${({ theme }) => theme.breakPoints.md}){
                   width: 300px;
                }
    

                .slider-content{

                  height: 100%;

                  .image{
                    position: relative;
                    height: 50%;
                    padding-left: 20px;
                    padding-right: 20px;
                    padding-top: 20px;
                    border-radius: 24px;

                    .icon{
                      position: absolute;
                      border-radius: 50px;
                      height: 40px;
                      width: 40px;
                      left: 20px;
                      bottom: 0;
                      overflow: hidden;

                    }

                    img{
                      height: 100%;
                      width: 100%;
                    }

                  }

                  .title{

                    height: 50%;
                    width: 50%;
                    padding-left: 20px;
                    padding-bottom: 20px;
                    padding-top: 20px;
                    
                    .top{
                      height: 20%;
                      width: 100%;
        
                      .user-name{
                        color:white;
                        font-family: 'Steppe';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 140%;
                        height: 50%;
                        display: flex;
                        aling-items: center;
                        width: 200px;
        
                      }
        
                      .summ{
                        color: white;
                        height: 50%;
                        display: flex;
                        align-items: center;
                        color: #FFFFFF;
                        opacity: 0.56;
                        font-family: 'Steppe';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 140%;
                      }
                    }

                    .center{
                      height: 60%;
                      width: 100%;
                      display: flex;
                      justify-content: center;
                      aling-items: center;
                      flex-direction: column;
        
                      .main-subtitle{
                        font-family: 'Steppe';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 11px;
                        line-height: 140%;
                        color: #FFFFFF;
        
                        opacity: 0.56;
        
                      }


                      .main-title{
                        font-family: 'Steppe';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 120%;
                        color: #FFFFFF;
                        width: 200px;
                        
                      }
                    }

                    .bottom{
                      height: 20%;
                      width: 100%;
                      display: flex;
                      align-items: center;
        
                      .bottom-title{
                        
                        color: white;
        
                      }
                    }

                  }
                }
              }
            }
         }

      }

   }
`

export const ButtonDefault = styled.button`

`