import styled from "styled-components";

export const ProfileEditing = styled.div`
  overflow: hidden;
  margin: auto;

  display: flex;
  justify-content:center;

  .modal-header{
    background: red;
  }

`

export const LittleContainer = styled.div`
   
   @media(min-width: 1200px){
      display: flex;
      flex-direction: column;
      align-items: start;
      width: 50%;
      max-width: 1000px;
   }

   @media(max-width: 1200px){
      width: 100%;
   }
`


export const Header = styled.div`

   .top-buttons{
     width: 100%;
     height: 50px;
     color: #0B0023;
     font-family: 'Inter';
     font-style: normal;
     font-weight: 400;
     font-size: 14px;
     line-height: 160%;
     display: flex;
     align-items: center;
     justify-content: start;

     @media(min-width: 1200px){
      padding-left: 65px;   
   }
    
   @media (max-width: 1200px) {
     height: 50px;
     justify-content: center;
   }
   
   @media (max-width: 645px) {
      padding-left: 30px;
      justify-content: start;
   }
      
 }
      
   .main-page-title{
     height: 80px;
     width: 100%;
     display: flex;
     align-items: center;
     font-family: 'Steppe';
     font-style: normal;
     font-weight: 600;
     font-size: 56px;
     line-height: 140%;
     font-feature-settings: 'liga' off;
     color: #0B0023;
     display: flex;
     justify-content: start;
     
     @media(min-width: 1200px){
        padding-left: 60px;   
     }
      
      @media (max-width: 1200px) {
        height: 70px;
        font-size: 40px;
        justify-content: center;
      }
      
      @media(max-width: 645px){
         padding-left: 30px;
         justify-content: start;
         
      }
            
   }
`


export const EditingButtons = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  z-index: 10;

  @media(max-width: 1200px){
   justify-content: center;
   margin: 0;
  }

  @media(min-width: 1200px){
    margin-left: 40px;
  }

  
  @media(max-width: 645px){
   padding: 0;
   justify-content: start;
  }


  .insider{
      display: flex;
      padding: 0;
      border: 1px solid #e3dfe3;
      border-radius: 10px;
    
    @media(max-width: 1000px){
      padding-left: 30px;
    }
  }

  .editing-buttons{
     width: 200px;
     min-wdith: 200px;
     height: 56px;
     font-family: 'Steppe';
     font-style: normal;
     font-weight: 600;
     font-size: 14px;
     line-height: 130%;
     font-feature-settings: 'liga' off;
     color: #3800B0;
     background: #FFFFFF;
     border: 0;

       @media (max-width: 420px) {
         width: 180px;
         min-width: 180px;
       }
   }

   #editing-buttons1{
      background: #EBE5F7;
      border: 2px solid #3800B0;
      border-radius: 8px;
   }

   #editing-buttons2{
      border-top: 2px solid #EBE5F7;
      border-bottom: 2px solid #EBE5F7;
   }

   #editing-buttons3{
      border-top: 2px solid #EBE5F7;
      border-bottom: 2px solid #EBE5F7;
   }

   #editing-buttons4{
      border-top: 2px solid #EBE5F7;
      border-bottom: 2px solid #EBE5F7;
      border-right: 2px solid #EBE5F7;
      border-radius: 8px;
   }

`

export const Section = styled.div`
  width: 100%;
`

export const EditingItem = styled.div`

`

export const ProfilePicture = styled.div`
  
  height: 150px;
  width: 100%;
  padding-left: 50px;
  display: flex; 
  align-items: center;


  .image-figure{
    height: 50px;
    width: 50px;
    background: #EBE5F7;
    border-radius: 100%;
    overflow: hidden;

    .profile-pucture{
      height: 100%;
      width: 100%;
      object-fit: cover;
      border: 0;
    }
  }

  .upload-profile-picture{
   font-family: 'Steppe';
   font-style: normal;
   font-weight: 600;
   cursor: pointer;
   font-size: 20px;
   line-height: 130%;
   letter-spacing: 0.01em;
   font-feature-settings: 'liga' off;
   color: #3800B0;
   margin-left: 30px;
  }

  @media(max-width: 1200px){
   justify-content: center;
   padding: 0;
}

@media(max-width: 645px){
     padding-left: 30px;
     justify-content: start;

  }
`


export const  EditingInputs = styled.div`
  width: 100%;
  padding-left: 40px;

  @media(max-width: 1200px){
   display: flex;
   padding: 0;
   justify-content: center;
  }

  @media(max-width: 645px){
    display: flex;
    justify-content: center;
    padding: 0;
  }

  .editing-inputs{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    padding-left: 30px;
    gap: 16px;
    width: 550px;
    height: 56px;
    background: #F7F8FA;
    border-radius: 8px;
    border: 0;

    @media(max-width: 1200px){
      width: 550px;
    }
    
    @media (max-width: 645px) {
     width: 90%;
      }
    }
 
`
export const GenderButtons = styled.div`

   width: 100%;
   height: 100px;
   display: flex;
   align-items: center;
   padding-left: 50px;
   justify-content: start;

   .female-button{
      width: 86px;
      min-width: 86px;
      height: 40px;
      background: #FFFFFF;
      border: 2px solid #ECEEF7;
      border-radius: 8px;

      font-family: 'Steppe';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 130%;
      font-feature-settings: 'liga' off;
      color: #2D3043;
      z-index: 3;

      @media(max-width: 645px){
         width: 40%;
      }

      &:focus {
         background: #ECEEF7 !important;
         border: 2px solid #2D3043 !important;
      }
   }

   .male-button{
      width: 86px;
      min-width: 86px;
      height: 40px;
      background: #FFFFFF;
      border: 2px solid #ECEEF7;
      border-radius: 8px;
      font-family: 'Steppe';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 130%;
      margin-left: 5px;
      letter-spacing: 0.01em;
      font-feature-settings: 'liga' off;
      color: #444860;
      transform: translate(-5px, 0px);

      @media(max-width: 645px){
         width: 40%;
      }

      &:focus {
         background: #ECEEF7 !important;
         border: 2px solid #2D3043 !important;
      }
   }

   @media(max-width: 1200px){
      display: flex;
      justify-content: center;
   }

   @media(max-width: 645px){
      display: flex;
      justify-content: center;
      width:100%;
      padding: 0;
   }
`


export const MainInputs = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   padding-bottom: 40px;

   @media(max-width: 1200px){
      padding: 0;
      align-items: center;
   }

   @media(min-width: 1200px){
      padding-left: 50px;
      align-items: start;
   }
   // @media(min-width: 645px){
   //    padding-left: 50px;
   //    align-items: start;
   // }

   @media (max-width: 645px) {
      display: flex;
      align-items: center;
      width: 100%;
   }

   .seclect-container{
      position: relative;
      display: flex;
      justify-content: start;
      width: 550px;      

      @media (max-width: 645px) {
         width: 90%;
      }
   }

   .change-button {
      font-size: 14px;
      color: #3800B0;
      font-weight: 700;
      text-decoration : none;
      position: absolute;
      right: 20px;
      top: 20px;
}
   }

   .multi-select{
      height: 80px;
      width: 100%;
      display: flex;
      align-items: center;


      .info_input-multi{
          width: 100%;
         div{

            max-width: 550px;
              background: #F7F8FA;

            @media(max-width: 645px){
              max-width: 90%;
            }

            div{

               div{

                     input{
                       width: 550px;
                       height: 100%;
                       @media(max-width: 645px){
                        width: 330px;
                       }
                     }

                  height: 53px;
                  border: 0;
                  background: #F7F8FA;

               }
            }
         }
   
         @media (max-width: 645px) {
            display: flex;
            justify-content: center;
            width: 100%;
         }
      }
   }

   .country-selection{
      padding-left: 25px;
      padding-right: 25px;
      display: flex;
      font-family: 'Steppe';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
      color: #8E93AF;
      align-items: center;
      justify-content: space-between;
      width: 550px;
      height: 56px;
      background: #F7F8FA;
      border: 0;    

      .country-name{
        font-size: 16px;
        margin: 0;
      }

      @media (max-width: 1200px) {
        padding-left: 25px;
        padding-right: 25px;
         width: 100%;
      }
   }

   .countries-list{
      height: 280px;
      overflow-y: auto;
      position: absolute;
      margin-top: 50px;
      width: 550px;
      border: 1px solid black;
      border-radius: 8px;
      background: #F7F8FA;
      width: 100%;
      z-index: 10;
      display: none;

      .option{
         height: 40px;
         display: flex;
         align-items: center;
         padding-left: 30px;
         font-family: 'Steppe';
         font-style: normal;
         font-weight: 500;
         font-size: 18px;
         line-height: 140%;
         color: #8E93AF;
      }

      .option:hover{
         background: gray;
         color: white;
         cursor: pointer;
      }

      @media (max-width: 645px) {
         width: 90%;
      }
   }

   .email-container{
      max-width: 550px;
      width: 550px;
      height: 56px;
      position: relative;
      max-height: 56px;
      margin-top: 30px;
      display: flex;
      background: #F7F8FA;
      
      @media (max-width: 645px) {
         width: 90%;
      }

      .info-input-email{
         padding-left: 30px;
         font-family: 'Steppe';
         font-style: normal;
         font-weight: 500;
         font-size: 16px;
         line-height: 140%;
         color: black;
         width: 100%;
         height: 100%;
         background: #F7F8FA;
         border: 0;    

      }

      button{
         border: 0;
         transform: translate(-20px, 0px);
         background: #F7F8FA;
         font-family: 'Steppe';
         font-style: normal;
         font-weight: 600;
         font-size: 14px;
         line-height: 130%;
         letter-spacing: 0.01em;
         font-feature-settings: 'liga' off;
         color: #3800B0;
      }
   }


   .info_input{
      padding-left: 30px;
      margin-top: 30px;
      font-family: 'Steppe';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
      color: #8E93AF;
      width: 550px;
      height: 56px;
      background: #F7F8FA;
      border: 0;    

      @media (max-width: 645px) {
         width: 90%;
      }
   }

   .wish-me-input-title{
      height: 100px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;

      @media (max-width: 1200px) {
         display: flex;
         justify-content: center;
      }


      @media (max-width: 645px) {
         display: flex;
         justify-content: center;
      }


      .wish-me-title{
         font-family: 'Steppe';
         font-style: normal;
         font-weight: 500;
         font-size: 20px;
         line-height: 140%;
         color: #0C0E19;
         margin: 0;

         @media (max-width: 645px) {
            padding-left: 10px;
            font-size: 16px;
         }
      }

      .info_input-small{
         padding-left: 30px;
         margin-left: 10px;
         font-family: 'Steppe';
         font-style: normal;
         font-weight: 500;
         font-size: 16px;
         line-height: 140%;
         color: #8E93AF;
         width: 450px;
         height: 56px;
         background: #F7F8FA;
         border: 0;    

         @media (max-width: 645px) {
            width: 70%;
         }

      }
   }

   .main-title-container{
      height: 100px;
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: start;

      .main-title{
         width: 550px;
         

         @media (max-width: 645px) {
            display: flex;
            justify-content: start;
            width: 100%;
            padding-left: 40px;
            padding-right: 40px;
            
         }
      }

      @media(max-width: 1200px){
         display: flex;
         justify-content: center;
      }
   }

   .interests-input-container{
      width: auto;
      display: flex;
      justify-content: start;

      @media(max-width: 1200px){
         width: auto;
         justify-content: center;
      }

      @media(max-width: 645px){
        width: 100%;
        justify-content: center;
      }
   }

   .text-area-container{
       width: 100%;
       height: 200px;
       display: flex;
       align-items: center;
       justify-content: start;

       @media(max-width: 1200px){
         justify-content: center;
       }

       @media(max-width: 645px){
         width: 90%;
         justify-content: center;
         
       }

       .text-area{
         padding-left: 20px;
         font-family: 'Steppe';
         font-style: normal;
         font-weight: 500;
         font-size: 16px;
         line-height: 140%;
         color: black;
         width: 550px;
         padding-top: 10px;
         height: 180px;
         background: #F7F8FA;
         border: 0;    
       }
   }

   .buttons-container{
      width: 550px;
      display: flex;
      flex-direction: column;
      align-items: center;


      @media(max-width: 645px){
        width: 100%;
        display: flex;
        justify-content: center;
        padding-bottom: 100px;
      }

      .save-button{
         margin-top: 30px;
         width: 550px;
         height: 56px;
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

         @media(max-width: 645px){
            width: 90%;
         }
      }

      .cancel-button{
         margin-top: 30px;
         width: 550px;
         height: 56px;
         border-radius: 8px;
         ont-family: 'Steppe';
         font-style: normal;
         font-weight: 600;
         font-size: 14px;
         line-height: 130%;
         letter-spacing: 0.01em;
         font-feature-settings: 'liga' off;
         color: #3800B0;
         border: 1px solid #3800B0;


         @media(max-width: 645px){
            width: 90%;
         }
      }
   }
`

export const PasswordSettings = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media(max-width: 1200px){
   align-items: center;
  }

  @media(max-width: 645px){
   align-items: start;
  }


  .password-change-title{
     display: flex;
     align-items: flex-end;
     height: 100px;
     width: 550px;
     font-family: 'Steppe';
     font-style: normal;
     font-weight: 600;
     font-size: 33px;
     line-height: 120%;
     font-feature-settings: 'liga' off;
     color: #000000;

     @media(min-width: 1200px){
      padding-left: 50px;
     }

     @media(max-width: 1200px){
       padding: 0;
       display: flex;
       justify-content: center;
     }

     @media(max-width: 645px){
       width: 100%;
       display: flex;
       justify-content: start;
       padding-left: 40px;
     }
  }

  .confirm-button{

     height: 100px;

     @media(min-width: 1200px){
       padding-left: 50px;
     }

     @media(max-width: 1200px){
       justify-content: center;
     }
     

     @media(max-width: 645px){
       width: 100%;
       display: flex;
       justify-content: center;
       padding: 0;
     }

     .password-save-button{
        margin-top: 30px;
        width: 535px;
        height: 56px;
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

        @media(max-width: 645px){
         width: 90%;
        }
     }
   }

   .connetc-sosial-netwok-title{
      height: 150px;
      width: 100%;
      font-family: 'Steppe';
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 120%;
      font-feature-settings: 'liga' off;
      color: #000000;
      display: flex;
      align-items: center;

      @media(max-width: 645px){
        justify-content: start !important;
        padding-left: 40px;
      }


      @media(max-width: 1200px){
         justify-content: center;

      }

      @media(min-width: 1200px){
         padding-left: 50px;

      }
   }

   
`


export const PasswordSettingsInputs = styled.div`
   width: 550px;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   
   @media(min-width: 1200px){
     padding-left: 50px;   
   }

   @media(max-width: 1200px){
      padding: 0;
   }

   @media(max-width: 645px){
     width: 100%;
     //padding-left: 50px;
     align-items: center;
   }

   svg{
     position: absolute;
     right: 0;

     @media(min-width: 645px){
       transform: translate(0px, 13.5px)
     }

     @media(max-width: 645px){
       transform: translate(-60px, 8px)
      }
      
    }
    
    `
    
   export const Password = styled.input`
    
    padding-left: 30px;
    width: 100%;
    margin-top: 30px;
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    color: #8E93AF;
    width: 550px;
    height: 56px;
    background: #F7F8FA;
    padding-right: 20px;
    border: 0;    
    
    @media (max-width: 645px) {
        display: flex;
        align-items: center;
        height: 56px;
        width: 90%;
        border-radius: 8px;
     }
`


export const SosialMediaButtons = styled.div`
   padding-left: 40px;
   padding-bottom: 80px;
   

   @media(max-width: 645px){
      width: 100%;
      padding-left: 0;
      padding-bottom: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .facebook-button{
      width: 550px;
      height: 56px;
      background: #1A76F2;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;

      .facebook-icon{
         font-size: 30px;
         color: white;
         margin-right: 10px;
      }

      .facebook-title{
         color: white;
         font-size: 30px;
         font-family: 'Steppe';
         font-style: normal;
         font-weight: 600;
         font-size: 14px;
         line-height: 130%;
         letter-spacing: 0.01em;
         font-feature-settings: 'liga'
        
      }

      @media(max-width: 645px){
        width: 90%;
      }
   }

   .google-button{
      width: 550px;
      height: 56px;
      background: #FFFFFF;
      border-radius: 8px;
      border: 2px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;

      .google-icon{
         font-size: 30px;
         color: #3800B0;
         margin-right: 10px;
      }

      .google-title{
         color: black;
         font-size: 30px;
         font-family: 'Steppe';
         font-style: normal;
         font-weight: 600;
         font-size: 14px;
         line-height: 130%;
         letter-spacing: 0.01em;
         font-feature-settings: 'liga'
      }


      @media(max-width: 645px){
         width: 90%;
      }
   }

   .apple-button{
      width: 550px;
      height: 56px;
      background: #110035;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;

      .apple-icon{
         font-size: 30px;
         color: #FFFFFF;
         margin-right: 10px;
      }

      .apple-title{
         color: white;
         font-size: 30px;
         font-family: 'Steppe';
         font-style: normal;
         font-weight: 600;
         font-size: 14px;
         line-height: 130%;
         letter-spacing: 0.01em;
         font-feature-settings: 'liga'
      }


      @media(max-width: 645px){
         width: 90%;
      }
   }
`


export const PictureUpload = styled.div`
  width: 100%;
   padding-bottom: 50px;
`


export const PictureUploadComponents = styled.div`
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: start;

      @media(max-width: 645px){
        align-items: center;
      }

      @media(max-width: 1200px){
         padding: 0;
         align-items: center;
      }

      @media(min-width: 1200px){
        padding-left: 50px;
      }


    .title{
      height: 100px;
      width: 550px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      font-feature-settings: 'liga' off;
      color: #110035;


      @media(min-width: 645px){
         height: 120px;
         display: flex;
         align-items: center;
      }
      
      @media(max-width: 645px){
         width: 90%;
         height: auto;
         text-align: center;
      }
   }

   #photo-uploader{
      display: none;
   }

   .upload-picture-treams{
      width: 100%;
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: start;

      @media(max-width: 1200px){
         align-items: center;
      }

      @media(max-width: 645px){
         align-items: start;
      }

      ul{
         font-family: 'Inter';
         font-style: normal;
         font-weight: 400;
         font-size: 14px;
         line-height: 160%;
         font-feature-settings: 'liga' off;
         color: #110035;
         padding-left: 20px;

         @media(max-width: 1200px){
            padding-right: 100px;
         }
         

         @media(max-width: 645px){
            padding-right: 0;
            padding-left: 60px;
         }
      }

     ul li{
        list-style: inside;
        margin-top: 10px;

        @media(max-width: 645px){
         font-size: 14px; 
        }
     }
   }

   .save-to-verification{
      margin-top: 40px;
      width: 550px;
      height: 56px;
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

      @media(max-width: 645px){
         width: 90%;
      }
   }

   .trems-head-title{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      font-feature-settings: 'liga' off;
      color: #110035;

      @media(max-width: 1200px){
         padding-right: 400px;
      }

      @media(max-width: 645px){
         padding-right: 0;
        padding-left: 40px;
      }
   }
`

export const PictureDropDown = styled.div`
  width: 550px;
  height: 250px;
  background: #F7F8FA;
  border: 1px dashed #BFACE9;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3800B0;

  .upload-icon-and-title:hover{
     cursor: pointer;

     svg{
       text-decoration: underline;
     }

     .upload-picture-title{
      text-decoration: underline;
     }
  }

  svg{
    width: 100%;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .upload-picture-title{
    width: 100%;
    font-size: 20px;
  }

  @media(min-width: 645px){
     
  }

  @media(max-width: 645px){
    width: 90%;

  }

`


export const StatusPedding = styled.div`
  display: none;
  @media(max-width: 645px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }

.status-pedding-title{
   height: 100px;
   display: flex;
   align-items: center;
   padding-left: 50px;
   font-family: 'Steppe';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 120%;
   font-feature-settings: 'liga' off;
   color: #110035;

   @media(max-width: 1200px){
      padding: 0;
      display: flex;
      justify-content: center;
   }

   @media(max-width: 645px){
      padding: 0;
      width: 90%;
      justify-content: start;
      align-items: flex-end;
      padding-left: 10px;
      padding-bottom: 20px;
   }
}

.status-pedding-main-title{
   padding-left: 50px;
   width: 550px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 160%;
   font-feature-settings: 'liga' off;
   color: #110035;

   @media(max-width: 1200px){
      display: flex;
      justify-content: center;
      text-align: center;
      padding: 0;
      width: 100%;
   }

   @media(max-width: 645px){
     display: flex;
     justify-content: center;
     text-align: start;
     padding-left: 10px;
     width: 90%;
     font-size: 15px;
   }
}

.contact-administration-title{
   padding-left: 50px;
   height: 40px;
   display: flex;
   align-items: flex-end;
   font-family: 'Steppe';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 130%;
   letter-spacing: 0.01em;
   font-feature-settings: 'liga' off;
   color: #3800B0;

   @media(max-width: 1200px){
      display: flex;
      justify-content: center;
   }

   @media(max-width: 645px){
      display: flex;
      justify-content: start;
      width: 90%;
      padding-left: 10px;
   }
}

.contact-administration-title:hover{
   text-decoration: underline;
   cursor: pointer;
}

`

export const Compleated = styled.div`
    display: none;
   .compleated-icon{
      height: 120px;
      display: flex;
      align-items: center;
      padding-left: 50px;
      padding-top: 20px;

      .compleated-icon-item{
         height: 50px;
         width: 50px;
         border: 4px solid black;
         border-radius: 100%;
         background: #00FF9E;
         display: flex;
         font-size: 20px;
         justify-content: center;
         align-items: center;
      }

      @media(max-width: 1200px){
         padding-left: 0;
         justify-content: center;
      }

      @media(max-width: 645px){
         padding-left: 0;
         justify-content: center;
      }
   }

   .verification-compleated-title{
      padding-left: 50px;
      padding-top: 20px;
      padding-bottom: 30px;
      font-family: 'Steppe';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
      font-feature-settings: 'liga' off;
      color: #110035;

      @media(max-width: 1200px){
         display: flex;
         justify-content: center;
         padding-left: 0px;
         width: 100%;
         font-size: 18px;
      }

      @media(max-width: 645px){
         display: flex;
         justify-content: center;
         padding-left: 0px;
         width: 100%;
         font-size: 18px;
      }
   }

   .moderator-compleating{
      padding-left: 50px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      font-feature-settings: 'liga' off;
      color: #110035;

      @media(max-width: 1200px){
         padding-left: 0px;
         display: flex;
         justify-content: center;
      }

      @media(max-width: 645px){
         padding-left: 0px;
         display: flex;
         justify-content: center;
      }
   }

   .contact-administration-title{
      padding-left: 50px;
      height: 40px;
      display: flex;
      align-items: flex-end;
      font-family: 'Steppe';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 130%;
      letter-spacing: 0.01em;
      font-feature-settings: 'liga' off;
      color: #3800B0;

      @media(max-width: 1200px){
         display: flex;
         justify-content: center;
         width: 100%;
         padding-left: 20px;
      
      }
      

      @media(max-width: 645px){
         display: flex;
         justify-content: center;
         width: 100%;
         padding-left: 20px;
      }
   }

   .contact-administration-title:hover{
      text-decoration: underline;
      cursor: pointer;
   }
`

export const SosialMediaSelection = styled.div`
   width: 100%;
   border-radius: 8px;
   flex-direction: column;
   padding-left: 50px;

   @media(max-width: 1200px){
      padding: 0;
      display: flex;
      align-items: center;
   }
   
   @media(max-width: 645px){
      padding: 0;
      display: flex;
      align-items: center;
   }
   
   .sosial-media{
      height: 53px;
      width: 550px;
      margin-bottom: 30px;
      background: #F7F8FA;
      display: flex;
      align-items: center;
      padding-left: 30px;

      .facebook{
         height: 25px;
         width: 25px;
         color: #3800B0;
      }

      .instagram{
         height: 25px;
         width: 25px;
         color:  #3800B0;
      }

      .tiktok{
         height: 25px;
         width: 25px;
         color: #3800B0;
      }

      .twitter{
         height: 25px;
         width: 25px;
         color:  #3800B0;
      }

      .telegram{
         height: 25px;
         width: 25px;
         color:  #3800B0;
      }

      .whatsapp{
         height: 25px;
         width: 25px;
         color:  #3800B0;;
      }

      // .sosial-media-name-title{
      //    margin: 0;
      //    font-family: 'Steppe';
      //    font-style: normal;
      //    font-weight: 500;
      //    font-size: 14px;
      //    line-height: 140%;
      //    color: #8E93AF;
      //    margin-left: 20px;
      // }


      .sosial-media-intputs{
         background: #F7F8FA;
         height: 100%;
         width: 90%;
         margin-left: 25px;
         padding-left: 20px;
         border: 0;
      }


      .sosial-media-intputs:focus{
         border: 0;
      }

      @media(max-width: 645px){
         width: 90%;
      }
   }
`

export const SaveButton = styled.div`
   height: 50px;
   width: 100%;
   padding-bottom: 100px;

   @media(max-width: 1200px){
      display: flex;
      justify-content: center;
   }

   @media(max-width: 645px){
      display: flex;
      justify-content: center;
   }

   .save-button{
      width: 550px;
      height: 53px;
      border: 0;
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

      @media(max-width: 645px){
         width: 90%;
      }
   }

`

