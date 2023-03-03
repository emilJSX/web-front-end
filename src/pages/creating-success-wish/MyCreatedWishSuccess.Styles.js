import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  height: 1200px;  

  @media(max-width: 768px){
    height: auto;
  }
`

export const Temp = styled.div`
    width: 160%;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    
    @media(max-width: 768px){
        width: 100%;
    }
    
    .promote-block{
        width: 90%;
        background: #EBE5F7;
        border-radius: 16px;
        padding-top: 15px;
        padding-bottom: 15px;
        display: flex;
        z-index: 10;

        @media(max-width: 768px){
            padding-top: 5px;
            padding-bottom: 5px;
        }

        .titles-block{
            height: 100%;
            width: 60%;

            @media(max-width: 768px){
                width: 70%;
            }

            .main-title{
                font-family: 'Steppe';
                font-style: normal;
                font-weight: 600;
                font-size: 20px;
                line-height: 140%;
                color: #2D008D;
                padding-top: 20px;
                padding-bottom: 20px;
                padding-left: 30px;
                margin: 0;
            }

            ul{
                margin: 0; 
                width: 100%;
                padding-left: 60px;

                li{
                    padding-top: 10px;
                    padding-bottom: 10px;
                    list-style: inherit;
                    font-family: 'Steppe';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 140%;
                    color: #2D008D;
                }
            }
        }

        .promote-and-button{
            height: 100%;
            width: 40%;
            display: flex;

            @media(max-width: 768px){
                width: 30%;
                flex-direction: column;
            }

            .brochure{
                width: 70%;
                height: 100%;

                @media(max-width: 768px){
                    width: 100%;
                }
            }

            .button{
                height: 100%;
                width: 30%;
                display: flex;
                justify-content: center;
                align-items: center;
                     
                @media(max-width: 768px){
                    width: 100%;
                    align-items: flex-end;
                    padding-bottom: 20px;
                }
                
                
                button{
                    height: 40px;
                    width: 50px;
                    background: #EBE5F7;
                    border-radius: 8px;
                    font-family: 'Steppe';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 13px;
                    line-height: 130%;
                    letter-spacing: 0.01em;
                    font-feature-settings: 'liga' off;
                    color: #3800B0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-top: 3px;
                    border: 0.1px solid #3800B0;
                }
            }
        }
    }
`

export const CartContainer = styled.div`
   display: flex;
   justify-content: center;
   width: 100%;
  
  @media(max-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

   .cover{
      //width: 90%;
      border-radius: 32px;
      //padding-top: 100px;
      //padding-bottom: 100px;
      //min-width: 375px;
     background: #EBE5F7;
     padding: 32px 72px;
     margin: 0 16px;

      @media(min-width: 768px){
         display: none;
      }
      
   }
`

export const Container = styled.div`
   max-width: 1000px;
   width: 1000px;
   height: 100%;
   display: flex;

   @media(max-width: 1000px){
      width: 100%;
   }

   @media(max-width: 768px){
      flex-direction: column-reverse;
   }

   .container-insider{
      width: 60%;

      @media(max-width: 768px){
         width: 100%;
      }
   }

   .container-insider-sm{
      width: 40%;
      padding-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media(max-width: 768px){
         display: none;
         width: 100%;
      }
      
      .content-container{
         width: 100%;
         height: auto;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         border-radius: 8px;
        

         @media(max-width: 768px){
            transform: translate(0px, 0px);
            // display: flex;
            // flex-direction: column;
            // align-items: center;
         }

        .edit-button{
            margin-top: 10px;
            height: 53px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            button{
                background: #FFFFFF;
                font-family: 'Steppe';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 130%;
                letter-spacing: 0.01em;
                font-feature-settings: 'liga' off;
                color: #3800B0;
                border: 0;
            }
        }
   }

   .save-changes-button-container{
      width: 100%;
      display: flex;
      justify-content: center;
      padding-top: 20px;
      padding-bottom: 20px;

      .save-changes-button{
         height: 53px;
         width: 90%;
         font-family: 'Steppe';
         font-style: normal;
         font-weight: 600;
         font-size: 14px;
         line-height: 130%;
         letter-spacing: 0.01em;
         font-feature-settings: 'liga' off;
         background: #3800B0;
         border-radius: 8px;
         color: #FFFFFF;
         border: 0;
      }
   }

`

export const Hedaer = styled.div`
   width: 100%;
   padding-top: 20px;


   .path-title{
       height: 50px;
       padding-left: 50px;
       color: #a59fb3;
       font-family: 'Inter';
       font-style: normal;
       font-weight: 400;
       font-size: 14px;
       line-height: 160%;
       font-feature-settings: 'liga';
       margin: 0;

     @media(max-width: 768px) {
       padding-left: 24px;
     }
   }

   .edit-wish-title{
     font-family: 'Steppe';
     font-style: normal;
     font-weight: 600;
     font-size: 56px;
     line-height: 140%;
     font-feature-settings: 'liga' off;
     padding-left: 50px;
     color: #0B0023;
     margin: 0;
     
     @media(max-width: 768px) {
       font-size: 40px;
       padding-left: 20px;
       line-height: 1.1;
     }
   }
`


export const Section = styled.div`
   width: 100%;

   .description-title{
      padding-left: 50px;
      padding-top: 20px;
      padding-bottom: 20px;
      font-family: 'Steppe';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
      font-feature-settings: 'liga' off;
      color: #0B0023;

     @media(max-width: 768px) {
       padding-left: 24px;
       padding-right: 24px;
     }
   }

   .wish-name{
     display: flex;
     padding-top: 20px;
     padding-left: 50px;
     padding-bottom: 20px;
     width: 100%;

     @media(max-width: 768px){
       padding-left: 0;
       justify-content: space-evenly;
     }

     .icon-container{
         background: #3800B0;
         border-radius: 100%;
         margin-right: 15px;
         display: flex;
         justify-content: center;
         align-items: center;
         height: 56px;
         width: 56px;

         @media(max-width: 768px){
            margin: 0;
         }

         svg{
           color: #FFFFFF;
           font-size: 25px;
         }
     }

   }

   .cash-set-container{
       padding-top: 20px;
       padding-left: 50px;
       padding-bottom: 20px;
       display: flex;
       width: 100%;

       @media(max-width: 768px){
         padding-left: 0;
         justify-content: center;
       }

       .cash-set-container-insider{
         width: 100%;
         display: flex;
         flex-direction: column;


         @media(max-width: 768px){
            width: 90%;
         }

         .link-label{
            font-family: 'Steppe';
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            padding-bottom: 5px;
            line-height: 140%;
            font-feature-settings: 'liga' off;
            color: #0B0023;
         }

         .cash-quantity-container{
            position: relative;
            width: 100%;
            height: 53px;
            padding-right: 10px;
            display: flex;
            align-items: center;

            @media(max-width: 768px){
                width: 103%;
                padding: 0;
            }

            @media(max-width: 410px){
               width: 105%;
            }

            .copy-icon{
                color: #3800B0;
                transform: translate(-30px, 0px);
                width: 22px;
                margin-left: -14px;
                cursor: pointer;
            }

            .link-icon{
                position: absolute;
                transform: translate(20px, 0px);w
            }

            .copy-button{
                position: absolute;
                transform: translate(-70px, 0px);
                font-family: 'Steppe';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 130%;
                letter-spacing: 0.01em;
                font-feature-settings: 'liga' off;
                color: #3800B0;
                border: 0;
                right: 0;
            }
  
            input{
              height: 100%;
              width: 100%;
              background: #F7F8FA;
              border-radius: 8px;
              padding-left: 50px;
              font-family: 'Steppe';
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 140%;
              color: #0C0E19;
              border: 0;
            }
          }
  
          .cash-type-container{
              width: 30%;
              height: 53px;
              padding-left: 10px;
              padding-right: 10px;
              font-family: 'Steppe';
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 140%;
              color: #8E93AF;
              cursor: pointer;

              @media(max-width: 768px){
               padding-right: 0;
              }
  
              .cash-selection{
                 position: relative;
                 height: 100%;
                 width: 100%;
                 display: flex;
                 background: #F7F8FA;
                 border-radius: 8px;

                 .cash-type{
                    display: flex;
                    justify-content: center;
                    align-items: center; 
                    height: 100%;
                    width: 80%;
                    margin: 0;
                 }
    
                 .icon{
                     height: 100%;
                     width: 20%;
                     display: flex;
                     justify-content: center;
                     align-items: center;
                     
                     svg{
                       height: 20px;
                       width: 20px;
                     }
                 }

                 .cash-selection-block{
                   position: absolute;
                   width: 100%;
                   background: #FFFFFF;
                   border: 1px solid black;
                   z-index: 100px;
                   transform: translate(0px, 60px);

                   .cash-selection-block-list{
                     margin: 0;
                     padding: 0;
                     width: 100%;
                      
                     .cash-selection-block-list-item{
                        width:100%;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        display: flex;
                        justify-content: center;
                        background: #F7F8FA;
                        cursor: pointer;
                     }

                     .cash-selection-block-list-item:hover{
                        background: gray;
                     }
                   }
                 }
              }
         }
      }
    }

    .text-area{
        width: 100%;
        padding-top: 20px;
        padding-left: 50px;
        padding-bottom: 20px;
        padding-right: 20px;
        
        @media(max-width: 768px){
            padding-left: 0;
            padding-right: 0;
            display: flex;
            justify-content: center;
        }
        
        .text-area-insider{
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            width: 100%;
            
            @media(max-width: 768px){
                width: 90%;
            }
            .invite-label{
                font-family: 'Steppe';
                font-style: normal;
                font-weight: 500;
                padding-bottom: 5px;
                font-size: 13px;
                line-height: 140%;
                font-feature-settings: 'liga' off;
                color: #0B0023;
            }
    
            input{
                height: 53px;
                width: 100%;
                background: #F7F8FA;
                border-radius: 8px;
                padding-left: 50px;
                font-family: 'Steppe';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 140%;
                color: #8E93AF;
                border: 0;
    
                @media(max-width: 768px){
                   width: 100%;
                }
            }
    
            .envelope-icon{
                position: absolute;
                transform: translate(20px, 12px);
                left: 0;
            }
    
            .telegram-icon{
                position: absolute;
                transform: translate(-20px, 12px);
                font-size: 20px;
                cursor: pointer;
                color: #3800B0;
                right: 0;

                @media(max-width: 768px){
                    transform: translate(-40px, 12px);
                }
            }
        }

    }

   .multi-select{
      width: 100%;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 50px;

      @media(max-width: 768px){
        padding-left: 0;
        display: flex;
        justify-content: center;
      }

      .sended-peoples-email{
         width: 100%;

         @media(max-width: 768px){
            display: flex;
            flex-direction: column;
            align-items: center;
         }

         .sent-invitations-title{
           
            font-family: 'Steppe';
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 140%;
            font-feature-settings: 'liga' off;
            color: #0B0023;

            @media(max-width: 768px){
               width: 90%;
            }
         }
        
         .email-inputs{
            display: flex;
            align-items: center;
            position: relative;
            margin-top: 12px;
            width: 100%;
            height: 53px;

            .resend-button{
               position: absolute;
               background: #FFFFFF;
               font-family: 'Steppe';
               font-style: normal;
               font-weight: 600;
               font-size: 12px;
               line-height: 130%;
               letter-spacing: 0.01em;
               font-feature-settings: 'liga' off;
               color: #3800B0;
               transform: translate(-50px, 0px);
               border: 0;
               right: 0;
            }
            
            @media(max-width: 768px){
               justify-content: center;
            }
            
            
            svg{
               position: absolute;
               color: #0B0023;
               right: 0;
               transform: translate(-120px, 0px);
            }

            .email-input-text-area{
               border: 1px solid #E5E5E5;
               padding-left: 20px;
               font-family: 'Inter';
               font-style: normal;
               font-weight: 400;
               font-size: 14px;
               line-height: 160%;
               font-feature-settings: 'liga' off;
               color: #0C0E19;
               display: flex;
               align-items: center;
               border-radius: 8px;
               width: 95%;
               height: 95%;

               @media(max-width: 768px){
                  width: 90%;
               }
            }
         }
     
      }

   }

   .date-fo-birth-container{
      width: 100%;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 50px;
      display: flex;

      @media(max-width: 768px){
         padding-left: 0;
         display: flex;
         justify-content: center;
      }

      .date-fo-birth-container-insider{
         width: 100%;
         display: flex;

         @media(max-width: 768px){
            width: 90%;
         }

         .date{
            height: 53px;
            width: 50%;
   
            div{
   
               height: 100%;
   
               div{
   
                  height: 100%;
   
                  div{
   
                     height: 100%;
   
                     input{
                        padding-top: 10px;
                        padding-bottom: 10px;
                     }
                  }
               }
            }
         }
   
         .date-of-birth{
            height: 53px;
            width: 50%;
            padding-left: 10px;
            
   
            input{
               height: 100%;
               width: 100%;
               padding-left: 20px;
               border-radius: 8px;
               font-family: 'Steppe';
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 140%;
              color: #8E93AF;
               background: #F7F8FA;
               border: 0;
            }
   
         }      
      }


   }
   
   .aviable-group{
      width: 100%;
      padding-top: 20px;
      padding-left: 50px;
      padding-bottom: 20px;

      @media(max-width: 768px){
         padding-left: 30px;
      }
   }
`


export const Wrapper = styled.div`
background: #FFFFFF;
border: 1px solid #EBE5F7;
border-radius: 24px;
  max-width: 321px;
  width: 100%;

.image-container{

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

   .image-background {
      position: absolute;
      height: 100%;
      width: 100%;
      opacity: 0.5;
      background: black;
      z-index: 1;
      display:flex;
      justify-content: center;
      align-items:center;
      border-radius: 24px;
      visibility: hidden;
    }

        .congralute-button{
          position: absolute;
          width: 50%;
          height: 60px;
          background: white;
          z-index: 2;
          border: 0;
          border-radius: 8px;
          visibility: hidden;
          
          &:hover{
            background: #EBE5F7;
            box-shadow: 0px 5px 10px 2px rgba(10, 10, 10, 10);
          }
        }
    }

}

`

export const ImgWrapper = styled.img`
//height: 321px;
width: 100%;
border-radius: 24px;
`
export const ContentWrapper = styled.div`
padding: 30px;

  @media(max-width: 768px) {
    padding: 16px;
  }
`

export const Title = styled.h5`
font-size: 20px;
font-weight: bold;
color: #110035;
  
  @media(max-width: 768px) {
    font-size: 14px;
  }
`
export const UserWrapper = styled.div`
//height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
margin: 20px 0px 30px 0px;
`
export const UserAbout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
   
`
export const UserName = styled.h6`
//height: 80%;
margin-bottom: 0;
font-weight: 600;
font-size: 14px;
display: flex;
align-items: flex-end;
padding-bottom: 5px;

  @media(max-width: 768px) {
    font-size: 12px;
  }

`
export const UserDesc = styled.p`
height: 20%;
color: #110035;
font-weight: 400;
font-size: 13px;
opacity: 0.72;

  @media(max-width: 768px) {
    font-size: 12px;
  }
`
export const UserPhoto = styled.img`
border-radius: 24px;
transform: translate(0px, 15px);
width: 40px;
height: 40px;

  @media(max-width: 768px) {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`

export const PriceWrapper = styled.div``
export const Prices = styled.div`
display: flex;
justify-content: space-between;
color: #110035;
opacity: 0.72;
font-weight: 400;
font-size: 13px;
`
export const LeftPrice = styled.p`
  @media(max-width: 768px) {
    font-size: 12px;
  }
`
export const RightPrice = styled.p`
  @media(max-width: 768px) {
    font-size: 12px;
  }
`

export const ProgressWrapper = styled.div`
margin: 16px 0px;
`