import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  
`

const FormData = styled.form`

`

export const InputEmailUser = styled.input`
   background-color: #F7F8FA;
   color: #969BB8;
   border: none;
   font-weight: 500;
   width: 100%;
   font-size: 14px;
   padding: 11px;
   padding-left: 15px;
   border-radius: 5px;
   border: 1px solid #F7F8FA;
   -webkit-transition: border 0.4s linear;
   transition: border 0.4s linear;
   -webkit-letter-spacing: 0.5px;
   -moz-letter-spacing: 0.5px;
   -ms-letter-spacing: 0.5px;
   letter-spacing: 0.5px;

   &:focus {
      border:1px solid #8866D0;
  }
`


export const InputMessageUser = styled.textarea`
   background-color: #F7F8FA;
   color: #969BB8;
   font-weight: 500;
   height: 120px !important;
   border-radius: 5px;
   font-size: 14px;
   width: 100%;
   padding: 16px;
   border: none;
   border: 1px solid #F7F8FA;
   -webkit-transition: border 0.4s linear;
   transition: border 0.4s linear;
   -webkit-letter-spacing: 0.5px;
   -moz-letter-spacing: 0.5px;
   -ms-letter-spacing: 0.5px;
   letter-spacing: 0.5px;

   &:focus {
      border:1px solid #8866D0;
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
                padding-left: 41px;

                li{
                    padding-top: 10px;
                    padding-bottom: 10px;
                    list-style:  inside;
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
                display: flex;
                align-items: flex-end;

                @media(max-width: 768px){
                    align-items: start;
                    justify-content: center;
                    width: 100%;
                }

                .brochure-image{
                   @media(max-width: 768px){
                     height: 50px;
                     width: 80px;
                   }
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

export const Container = styled.div`
   max-width: 1000px;
   width: 1000px;
   display: flex;

   @media(max-width: 1000px){
      width: 100%;
   }

   @media(max-width: 768px){
      flex-direction: column;
      align-items: center;
   }

   .container-insider{
      width: 70%;

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
         padding-right: 0;
         width: 100%;
      }
      
      .content-container{
         width: 90%;
         border: 2px dotted #5c00ba54;
         margin-top: 40px;
         height: 280px;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         background: #F7F8FA;
         border-radius: 8px;
        

         @media(max-width: 768px){
            transform: translate(0px, 0px);
            // display: flex;
            // flex-direction: column;
            // align-items: center;
         }

        svg{
            color: #2D008D;
            height: 30px;
            width: 30px;
        }

        h5{
            margin: 0;
            transform: translate(0px, 20px);
            font-family: 'Steppe';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 130%;
            letter-spacing: 0.01em;
            font-feature-settings: 'liga' off;
            color: #2D008D;
        }

        p{
            margin: 0;
            transform: translate(0px, 20px);
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 160%;
            text-align: center;
            font-feature-settings: 'liga' off;
            color: #8E93AF;
        }
      }

      .content-container:hover{
           h5{
             text-decoration: underline;
           }

           p{
            text-decoration: underline;
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

   .if-not-singed-in{
      width: 90%;
      margin-top: 50px;
      padding-top: 30px;
      padding-bottom: 30px;
      margin-bottom: 50px;
      background: #F7F8FA;
      border-radius: 16px;

      @media(min-width: 768px){
         display: none;
      }

      .sing-up-title{
         font-family: 'Steppe';
         font-style: normal;
         font-weight: 600;
         font-size: 24px;
         line-height: 120%;
         display: flex;
         align-items: flex-end; 
         font-feature-settings: 'liga' off;
         padding-left: 50px;
         padding-bottom: 20px;
         color: #110035;
      }

      .aleready-have-account-block{
         width: 100%;
         padding-left: 50px;
         padding-bottom: 10px;
         display: flex;

         .aleready-have-account-title{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 160%;
            font-feature-settings: 'liga' off;
            color: #110035;
         }

         .log-in-title{
            font-family: 'Steppe';
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 130%;
            text-align: center;
            letter-spacing: 0.01em;
            font-feature-settings: 'liga' off;
            color: #110035;
            display: flex;
            align-items: center;
            transform: translate(10px, 2px);
         }
      }

      .log-in-with-facebook-block{
         width: 100%;
         padding-top: 10px;
         padding-bottom: 10px;
         display: flex;
         justify-content: center;

         .log-in-with-facebook-button{
            width: 70%;
            height: 56px;
            background: #1A76F2;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;

            .facebook-icon{
               color: #FFFFFF;
               font-size: 25px;
            }

            .facebook-title{
               transform: translate(10px, 2px);
               font-family: 'Steppe';
               font-style: normal;
               font-weight: 600;
               font-size: 14px;
               line-height: 130%;
               letter-spacing: 0.01em;
               font-feature-settings: 'liga' off;
               color: #FFFFFF;
               margin: 0;
            }
         }

         .log-in-with-google-button{
            width: 30%;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
            background: #F7F8FA;
            border-radius: 10px;
            border: 2px solid black;
            padding: 5px;
            
            .google-icon{
               font-size: 20px;
               color: #3800B0;
            }

            .google-title{
               transform: translate(0px, 2px);
               font-family: 'Steppe';
               font-style: normal;
               margin-left: 5px;
               font-weight: 600;
               font-size: 14px;
               line-height: 130%;
               letter-spacing: 0.01em;
               font-feature-settings: 'liga' off;
               color: #110035;
            }
         }

         .log-in-with-apple-button{
            width: 30%;
            height: 56px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 20px;
            border-radius: 10px;
            background: #110035;
            padding: 5px;

            .apple-icon{
               font-size: 20px;
               color: #FFFFFF;
            }

            .apple-title{
               transform: translate(0px, 2px);
               margin-left: 5px;
               font-family: 'Steppe';
               font-style: normal;
               font-weight: 600;
               font-size: 14px;
               line-height: 130%;
               letter-spacing: 0.01em;
               font-feature-settings: 'liga' off;
               color: #FFFFFF;
            }
         }
      }

      .or-via-email-block{
         width: 100%;
         padding-left: 50px;
         padding-top: 20px;
         padding-bottom: 5px;
         font-family: 'Steppe';
         font-style: normal;
         font-weight: 600;font-size: 13px;
         line-height: 130%;
         letter-spacing: 0.01em;
         font-feature-settings: 'liga' off;
         color: #110035;
      }
   }

`

export const Hedaer = styled.div`
   width: 100%;
   padding-top: 20px;


   .path-title{
       height: 50px;
       padding-left: 50px;
       color: #0B0023;
       font-family: 'Inter';
       font-style: normal;
       font-weight: 400;
       font-size: 14px;
       line-height: 160%;
       font-feature-settings: 'liga';
       margin: 0;
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
   }
`


export const Section = styled.div`
   width: 100%;

   .multiselect-interest input{
      height: 46px;
   }

   .description-title{
      padding-left: 50px;
      font-family: 'Steppe';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
      font-feature-settings: 'liga' off;
      color: #0B0023;
   }

   .wish-name{
     padding-top: 20px;
     padding-left: 50px;
     padding-bottom: 20px;
     width: 100%;

     @media(max-width: 768px){
       padding-left: 0;
       display: flex;
       justify-content: center;
     }

     input{
        border: 0;
        height: 53px;
        width: 100%;
        padding-left: 30px;
        background: #F7F8FA;
        font-family: 'Steppe';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        color: #8E93AF;
        border-radius: 8px;
        color: #8E93AF;

        @media(max-width: 768px){
          width: 90%;
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

         @media(max-width: 768px){
            width: 90%;
         }

         .cash-quantity-container{
            width: 70%;
            height: 53px;
            padding-right: 10px;
  
            input{
              height: 100%;
              width: 100%;
              background: #F7F8FA;
              border-radius: 8px;
              padding-left: 30px;
              font-family: 'Steppe';
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 140%;
              color: #8E93AF;
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
        display: flex;
        padding-top: 20px;
        padding-left: 50px;
        padding-bottom: 20px;
        flex-direction: column;

        @media(max-width: 768px){
         padding-left: 0;
         align-items: center;
        }

        textarea{
            height: 200px;
            width: 100%;
            background: #F7F8FA;
            border-radius: 8px;
            padding-top: 20px;
            padding-left: 20px;
            font-family: 'Steppe';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 140%;
            color: #8E93AF;
            border: 0;

            @media(max-width: 768px){
               width: 90%;
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

      .multi-select-insider{
         width: 100%;

         @media(max-width: 768px){
            width: 90%;
         }

         div{
            div{
               div{
                  div{
                     background: #F7F8FA;
                     border: 0;
                  }
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