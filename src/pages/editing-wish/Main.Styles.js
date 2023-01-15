import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  
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
   }

   .container-insider{
      width: 70%;

      @media(max-width: 768px){
         width: 100%;
      }
   }

   .container-insider-sm{
      width: 40%;
      display: flex;
      align-items: center;

      @media(max-width: 768px){
         width: 100%;
      }
      
      .content-container{
         width: 100%;
         transform: translate(0px, -86px);

         @media(max-width: 768px){
            transform: translate(0px, 0px);
            display: flex;
            flex-direction: column;
            align-items: center;
         }

         img{
            width: 100%;
            height: 200px;
               
            @media(max-width: 768px){
               max-width: 400px;
            }
         }

         .change-photo-button-container{
            width: 100%;
            display: flex;
            justify-content: center;
            padding-top: 10px;
            padding-bottom: 10px;

            .change-photo-button{
               width: 102px;
               height: 18px;
               font-family: 'Steppe';
               font-style: normal;
               font-weight: 600;
               font-size: 14px;
               line-height: 130%;
               letter-spacing: 0.01em;
               font-feature-settings: 'liga' off;
               color: #3800B0;
               background: #FFFFFF;
               border: 0;
            }

            .delete-photo{
               font-family: 'Steppe';
               font-style: normal;
               font-weight: 600;
               font-size: 14px;
               line-height: 130%;
               letter-spacing: 0.01em;
               font-feature-settings: 'liga' off;
               color: #8E93AF;
               background: #FFFFFF;
               border: 0;
            }
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
   padding-bottom: 20px;

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
   padding-top: 50px;

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
        background: #F7F8FA;
        border-radius: 8px;
        padding-left: 30px;
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
              color: #8E93AF;
              border: 0;
            }
          }
  
          .cash-type-container{
              width: 30%;
              height: 53px;
              padding-left: 10px;
              padding-right: 10px;
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

        @media(max-width: 768px){
         padding-left: 0;
         display: flex;
         justify-content: center;
        }

        textarea{
            height: 200px;
            width: 100%;
            background: #F7F8FA;
            border-radius: 8px;
            padding-top: 20px;
            padding-left: 20px;
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