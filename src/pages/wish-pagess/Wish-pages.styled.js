import styled from "styled-components";

export const Main_page = styled.div`
    height: auto;
    background: #E5E5E5;
    padding-top: 24px;
    display: flex;
    justify-content: center;
    overflow: hidden;

    .content-container{
        max-width: 1700px;
        min-width: 1200px;
        padding-bottom: 30px;
    }

    .modal-backdrop{
        .modal {
            .modal-dialog{
                .modal-content{
                    width: 480px;
                  border-radius: 32px;
                }
            }
        }
    }
    
`;
export const Main_page_top = styled.div`

    width: 80.76%;
    height: auto;
    margin: 0 auto 0 auto;
    display: flex;
    @media (min-width: 375px) and (max-width: 450px){
        display: flex;
        width:  343px;
        justify-content: end;
    }
`;
export const Left_div = styled.div`

    width: 49%;
    height: 760px;
    margin: 0;
    border-radius: 24px;
    float:left;
    @media (min-width: 375px) and (max-width: 450px){
        width: 100%;

    }
    
    .save-changes-button:hover{
        background: #E5E5E5;
    }
`;
export const Left_image = styled.img`

    width: 100%;
    height: auto;
    background: white;
    padding: 112.5px;
    border-radius: 24px;

    @media (min-width: 375px) and (max-width: 450px){
        float: left;
        margin-left: -18px;
    }
`;
export const Left_buttons = styled.div`

    width: 664px;
    // background: white;
    margin-top: 15px;
    font-family: 'Steppe';
    font-weight: 600;
    font-size: 14px;
    color: #3800B0;
    padding: 10px 0 ;

    #plus {
        display: none;

        @media (min-width: 375px) and (max-width: 450px) {
            display: block;
            margin: 0;
            margin-left: 284px;
            font-size: 26px;
            margin-top: -25px;
        }
    }

    .facebook{
        margin:0;
        margin-left: 76px;
        font-size: 22px;
        margin-top: -22px;
    }
    .twitter{
        margin:0;
        margin-left: 130px;
        font-size: 22px;
        margin-top: -22px;
    }
    .telegram{
        margin:0;
        margin-left: 184px;
        font-size: 22px;
        margin-top: -22px;
    }
    .whatsapp{
        margin:0;
        margin-left: 236px;
        font-size: 22px;
        margin-top: -22px;
    }
    .mail{
        margin:0;
        margin-left: 292px;
        font-size: 22px;
        margin-top: -22px;
    }
    .link{
        margin:0;
        margin-left: 346px;
        font-size: 24px;
        margin-top: -22px;
    }
    

    @media (min-width: 375px) and (max-width: 450px){
        width: 100%;
        margin: 830px 0 0  0; 
        .mail, .link{
            display: none;
        }

    }
`;

export const Left_report = styled.button`

    width: 85px;
    // background: white;
    margin-top: 16px;
    font-family: 'Steppe';
    font-weight: 600;
    font-size: 14px;
    color: #8E93AF;
    
    
    .warning{
        float: left;
        font-size: 20px;
    }

    @media (min-width: 375px) and (max-width: 450px){
        display: none;
    }
`;

export const Right_div = styled.div`

    width: 49%;
    height: auto;
    border-radius: 24px;
    margin-left: 24px;
    float: left;
    @media (min-width: 375px) and (max-width: 450px){
        width: 100%;
        float: left;
        margin: 359px 0 0 -360px;
    }
`;
export const Right_top_div = styled.div`

    width: 100%;
    height: 365px;
    background: white;
    border-radius: 24px;
    @media (min-width: 375px) and (max-width: 450px){
        width: 343px;
        margin: 0 auto;
        height: 454px;
        float: left;
    }
    
`;
export const Top_title = styled.div`

    width: 85.58%;
    height: 24px;
    margin: 40px 48px 0 48px;
    float: left;
    .notification{
        font-size: 24px;
        margin-right: 10px;
        color:#6033C0;
        float: right;
    }
    @media (min-width: 375px) and (max-width: 450px){
        width: 295px;
        height: 74px;
        margin: 24px 24px 0 24px;
        .notification{
            float: right;
            margin-top: -75px;
            margin-right: 30px;
        }
    }

    .title{
        float: left;
        font-family: 'Steppe';
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        margin-left: 12px;

        @media (min-width: 375px) and (max-width: 450px) {
            font-weight: 500;
            font-size: 13px;
            line-height: 140%;
            margin-left: 40px;
            float: none;
        }
    }

    .minago{
        font-family: 'Steppe';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 140%;
        color: #8E93AF;
        float: right;

        @media (min-width: 375px) and (max-width: 450px) {
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 140%;
            color: #8E93AF;
            margin-left: 40px;
            float: none;
        }
    }

    .dots-menu {
        float: right;
        font-size: 23px;
    }

    @media (min-width: 375px) and (max-width: 450px) {
        .dots-menu {
            float: right;
            margin-top: -74px;
            font-size: 21px;
        }
    }

`;
export const Photo = styled.img`

    width: 24px;
    height: 24px;
    margin-top: -4px;
    float: left;
    border-radius: 50%;
    @media (min-width: 375px) and (max-width: 450px){
        float: left;
        width: 32px;
        height: 32px;
        margin-top: 2px;
    }
    `;

    export const PhotoMacDon = styled.img`
        width: 24px;
        height: 24px;
        margin-top: -4px;
        float: left;
        border-radius: 50%;

        @media (min-width: 375px) and (max-width: 450px){
            float: left;
            width: 32px;
            height: 32px;
            margin-left: 17px;
            margin-top: 2px;
        }
    `
export const Photos = styled.img`

    width: 24px;
    height: 24px;
    float: left;
    border-radius: 50%;
    margin: 12px;
    @media (min-width: 375px) and (max-width: 450px){
        float: left;
    }
    `;
export const Birthday = styled.p`

    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #0C0E19;
    float: left;
    margin-left: 12px;
    @media (min-width: 375px) and (max-width: 450px){
        float: left;
        width: 259px;
        height:42px;
        margin: 8px 60px 0 0;
        
        .forbirthday{
            display: block
        }
    }
    `;
    export const Middle_title = styled.p`

    width: 83%;
    height: 144px;
    margin: 24px 48px 0 65px;
    float: left;
    font-family: 'Steppe';
    font-weight: 600;
    font-size: 40px;
    color: #0C0E19;
    line-height: 120%;

    @media (min-width: 375px) and (max-width: 450px){
        width: 277px;
        height: 190px;
        margin: 16px 24px 0 24px;
        font-size: 32px;
        line-break: auto;
        font-style: normal;

    }

    @media(max-width: 1332px){
        font-size: 37px;
    }

    @media(max-width: 1237px){
        font-size: 35px;
    }

`;
    export const Last_title = styled.p`

    width: 83%;
    height: 66px;
    margin: 16px 48px 0 65px;
    float: left;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    color: #5D627D;
    line-height: 160%;

    @media (min-width: 375px) and (max-width: 450px){
        width: 295px;
        height: 110px;
        margin: 16px 24px 24px 24px;
        line-break: auto;

    }

    @media(max-width: 1332px){
        margin-top: 25px !important;
    }

    @media(max-width: 1237px){
        margin-top: 8px;
    }

`;
export const Right_blue_div = styled.div`

    width: 100%;
    height: 396px;
    background: white;
    border-radius: 24px;
    margin-top: 24px;

    @media (min-width: 375px) and (max-width: 450px){
        margin-top: 525px;
        height: 369px;
    }
    
`;

export const RightBlueDivForThree = styled.div`
    width: 100%;
    height: 270px;
    background: white;
    border-radius: 24px;
    margin-top: 24px;

    @media (min-width: 375px) and (max-width: 450px){
        margin-top: 525px;
        height: 270px;
    }
`

export const Right_BlueDivSecon = styled.div`
    width: 100%;
    height: 555px;
    background: white;
    border-radius: 24px;
    margin-top: 24px;

    @media (min-width: 375px) and (max-width: 450px){
        margin-top: 525px;
        height: 565px;
    }
` 
export const Blue_div = styled.div`

    width: 100%;
    height: 172px;
    background: #22006A;
    border-radius: 24px;

    @media (min-width: 375px) and (max-width: 450px){
        display: table;
        height: 120px;
    }
`;
export const Blue_top_div = styled.div`
    

    float: left;
    width: 85.58%;
    height: 20px;
    margin: 40px 48px 0 48px;

    .raised{
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #00FF9E;
    float: left;
    }
    .percant{
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: white;
    float: left;
    margin-left: 16px;
    }
    .left8{
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: white;
    float: right;
    }

    @media (min-width: 375px) and (max-width: 450px){
        width: 295px;
        height:20px;
        margin: 20px 24px 0  24px;
    }
    
`;

export const Blue_loading_div = styled.div`
    

    float: left;
    display: block;
    width: 85.58%;
    height: 4px;
    border-radius: 56px;
    margin: 24px 48px 0 48px;
    background: rgba(255, 255, 255, 0.1);
    
    .colorpart{
        width: 18%;
        height: 4px;
        float: left;
        background: #00FF9E;
        border-radius: 56px;

    }

    @media (min-width: 375px) and (max-width: 450px){
        width: 295px;
        margin: 16px 24px 0 24px;
        .colorpart{
            width: 33%;
        }
    }
    `;

    export const Blue_button_div = styled.div`
    

    float: left;
    width: 85.58%;
    height: 20px;
    margin: 24px 48px 0 48px;
  
    .percant{
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: white;
    float: left;
    }
    .left8{
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: white;
    float: right;
    }

    @media (min-width: 375px) and (max-width: 450px){
        width: 295px;
        margin: 16px 24px 0 24px;
    }
`;
export const Vashed = styled.p`

    font-size: 20px;
    color: #8E93AF;
    margin-left: 16px;
    font-family: 'Steppe';
    font-weight: 600;
    margin-top: -5px;
    float: left;

    @media (min-width: 375px) and (max-width: 450px) {
        width: 80%;
        margin-left: 20px;
        margin-top: 5px;
    }

    @media (min-width: 1200px) and (max-width: 1269px){
        margin-left: 4px;
    }
`;

export const Congratulate = styled.div`

    width: 85.58%;
    height: 56px;
    margin: 56px 48px 40px 48px;
    float: left;
    background: blue;
    background: #E5E5E5;
    border-radius: 8px;

    @media (min-width: 375px) and (max-width: 450px){
        width: 311px;
        height: 128px;
        margin: 9px 16px 0 16px;
    }
`;
export const Congratulate_button = styled.button`

    width: 25.78%;
    height: 56px;
    float: right;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Steppe';
    color: white;
    border-radius: 8px;
    background: #3800B0;

    @media (min-width: 375px) and (max-width: 450px){
        width: 100%;
        margin: 14px 0 0 0 ;
    }
`;
export const Product = styled.button`

    width: 71.40%;
    height: 56px;
    float: left;
    font-size: 14px;
    border-radius: 8px;
    .burgerclass:focus{
        border: 2px solid #3800B0;    }
    
    @media (min-width: 375px) and (max-width: 450px){
        width: 100%;
    }
`;
export const Product_part = styled.button`

    width: 16.21%;
    height: 56px;
    float: left;
    font-size: 13px;
    border-radius: 8px;
    line-height: 120%;
    text-align: center;
    color: #8E93AF;
    .burger{
        font-size: 18px;
    }
`;
export const Product_other = styled.button`

    width: 18%;
    height: 56px;
    float: left;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;
    color: #8E93AF;
    
`;

export const All_congrulation = styled.div`
    

    float: left;
    width: 100%;
    height: 28px;
    margin-top: 24px;
    color: #1A1C29;
    font-size: 20px;
    font-family: 'Steppe';
    font-weight: 600;
    .eight{
        color: #8E93AF;
        margin-left: 16px;
    }
    .filterclass{
        font-size: 24px;
        color: #3800B0;
        float: right;
    }
    
    `;
export const Hbd = styled.div`
    

    float: left;
    width: 100%;
    height: 196px;
    margin-top: 16px;
    background: white;
    border-radius: 24px;

    @media (min-width: 375px) and (max-width: 450px){
        width: 343px;
        height: 220px;
    }

    `;


    export const Hbd_title = styled.div`

    width: 92.79%;
    height: 24px;
    float: left;
    margin: 24px 24px 0 24px;
    .give{
        color: #8E93AF;
        margin-left: 3px;
    }
    .title{
    float: left;
    font-family: 'Steppe';
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    margin-left: 12px;

    @media (min-width: 375px) and (max-width: 450px) {
        float: none;
        margin-left: 40px;
    }
    }
    .minago{
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 140%;
    color: #8E93AF;
    float: right;
    @media (min-width: 375px) and (max-width: 450px) {
        float: none;
        margin-left: 40px;
    }
    }

    .minago-you {
        font-family: 'Steppe';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 140%;
        color: #8E93AF;
        float: right;
    }

    @media (min-width: 375px) and (max-width: 450px){
        width: 311px;
        height: 33px;
        margin: 16px 16px 0 16px;
        
 
        .minago-you {
             float: left;
             margin: 0 0 0 -105px;
             padding-top: 20px;
        }
        .minagos{
             float: left;
             margin: 0 0 0 -173px;
             padding-top: 20px;
        }
     }

    `;
    export const Hbd_name = styled.div`

    width: 92.79%;
    height: 28px;
    float: left;
    margin: 24px 24px 0 24px;
    font-size: 20px;
    color: #1A1C29;
    font-weight: 600;
    .twofive{
        font-family: 'Steppe';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        color: #6033C0;
        float: right;
    }
    .like{
        float: right;
        margin-left: 8px; 
    }

    @media (min-width: 375px) and (max-width: 450px){
        width: 287px;
        height: 48px;
        margin: 16px 16px 0 20px;
        .twofive{
             float: right;
             margin: 20px 0 0 0;
             width: 20px;
        }
        .like{
             float: right;
             margin:-35px 0 0 0;
        }
     }
    `;
    export const Hbd_footer = styled.div`

    width: 92.79%;
    height: 52px;
    float: left;
    margin: 24px;
    border-radius: 48px;
    border: 2px solid #EBE5F7;
    .twominag{
         font-family: 'Steppe';
         font-weight: 500;
         font-size: 13px;
         color: #8E93AF;
         float: right;
         padding: 15px 15px 15px 0;
         width: 15%;

         @media(max-width: 1380px){
            font-size: 12px;
         }

         @media(max-width: 1300px){
            font-size: 11px;
         }

         @media(max-width: 1218px){
            font-size: 10px;
         }
    }
    .twominago{
         font-family: 'Steppe';
         font-weight: 500;
         font-size: 20px;
         color: #8E93AF;
         float: right;
         margin: 14px 14px;

         @media (min-width: 375px) and (max-width: 450px) {
            margin: -35px 14px;
        }
    }
   .thank{
        font-family: 'Steppe';
        font-weight: 500;
        font-size: 14px;
        color: #0C0E19;
        margin: 14px 0;
        width:72%;
        float: left;
        
   }
   .thanks{
        font-family: 'Steppe';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        margin: 14px 0;
        width:72%;
        float: left;
        color: #8E93AF;
        
   }

   @media (min-width: 375px) and (max-width: 450px){
    width: 311px;
    height: 83px;
    margin: 16px;
    border-radius: 12px;

    @media (min-width: 375px) and (max-width: 450px) {

    }

    .thank{
        width: 251px;
        height: 40px;
    }
    .twominag{
        width: 251px;
        height: 18px;
        margin: -25px 10px 0 0px;
    }
}
    `;


    export const HbdFooterYou = styled.div`
    width: 92.79%;
    height: 52px;
    float: left;
    margin: 24px;
    border-radius: 48px;
    border: 2px solid #EBE5F7;

    .twominag{
        font-family: 'Steppe';
        font-weight: 500;
        font-size: 13px;
        color: #8E93AF;
        float: right;
        padding: 15px 15px 15px 0;
        width: 15%;
   }
   .twominago{
        font-family: 'Steppe';
        font-weight: 500;
        font-size: 20px;
        color: #8E93AF;
        float: right;
        margin: 14px 14px;

       @media (min-width: 375px) and (max-width: 450px) {
           margin: -35px 14px;
       }
   }
  .thank{
       font-family: 'Steppe';
       font-weight: 500;
       font-size: 14px;
       color: #0C0E19;
       margin: 14px 0;
       width:72%;
       float: left;
       
  }
  .thanks{
       font-family: 'Steppe';
       font-style: normal;
       font-weight: 500;
       font-size: 14px;
       line-height: 140%;
       margin: 14px 0;
       width:72%;
       float: left;
       color: #8E93AF;
       
  }
  @media (min-width: 375px) and (max-width: 450px){
   width: 311px;
   height: 85px;
   margin-top: 5px !important;
   margin: 16px;
   border-radius: 12px;
   .thank{
       width: 251px;
       height: 40px;
   }
   .twominag{
       width: 251px;
       height: 18px;
       margin: -25px 10px 0 0px;
   }
}
`

    export const Hbday = styled.div`
    

    float: left;
    width: 100%;
    height: 132px;
    margin-top: 16px;
    background: white;
    border-radius: 24px;

    @media (min-width: 375px) and (max-width: 450px){
           

        .minago-you {
            float: left;
            margin: 20px 0 0 -103px;
        }
        .minagos{
            float: left;
            margin: 0 0 0 -173px;
            padding-top: 20px;
       }
    }

    `;
    export const Mcdonalds = styled.div`
    

    float: left;
    width: 100%;
    height: 152px;
    margin-top: 16px;
    background: white;
    border-radius: 24px;

    @media (min-width: 375px) and (max-width: 450px) {
        height: 260px;
    }

    `;

    export const MacdonalsOne = styled.div`
        float: left;
        width: 100%;
        height: 152px;
        margin-top: 16px;
        background: white;
        border-radius: 24px;

        @media (min-width: 375px) and (max-width: 450px) {
            height: 200px;
        }
    `

    export const Picture = styled.img`

    width: 180px;
    height: 120px;
    float: left;
    border-radius: 8px;
    margin: 16px 24px 16px 19px;
    @media(max-width: 480px){
        float: left;
        object-fit: cover;
        width: 310px;
    }
    `;

    export const MacdonalsOnePicture = styled.img`
        width: 180px;
        height: 120px;
        float: left;
        border-radius: 8px;
        margin: 16px 24px 16px 19px;

        @media(max-width: 480px){
            float: left;
            object-fit: cover;
            width: 310px;
            height: 120px;
            border-radius: 8px;
            margin: 16px 24px 16px 19px;
            float: left;
        }
    `
    export const Mcago = styled.div`

    width: 97%;
    height: 24px;
    margin: 24px 24px 0 0;
    .give{
        color: #8E93AF;
    }
    .title{
    float: left;
    font-family: 'Steppe';
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    margin-left: 12px;

    @media (min-width: 375px) and (max-width: 450px) {
        float: none;
        margin-left: 60px;
    }
    }
    .minago{
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 140%;
    color: #8E93AF;
    float: right;

        @media (min-width: 375px) and (max-width: 450px){
            margin-left: 60px;
            float: none;
        }
    }
    @media(max-width: 480px){
        // float: left;
    }
    `;
    export const Freecofe = styled.div`

    width: 98%;
    height: 24px;
    margin: 24px 24px 0 0;
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    color: #0B0023;
    .check{
        float: right;
        font-size: 20px;
        color: linear-gradient(206.3deg, #EEDEC7 12.6%, #C08B65 71.69%), linear-gradient(206.06deg, #BFCEE3 11.59%, #67768C 82.29%);
    }
    @media (min-width: 375px) and (max-width: 450px){
        float: left;
        margin-left: 22px;
        width: 90%;
    }
    `;

    export const ActiveMac = styled.p`
        font-size:13px;
        color: #3800B0;
        padding-top: 5px;

        @media (min-width: 375px) and (max-width: 450px){
            display: none;  
        }
        
    `

    export const Bottom_div = styled.div`
    
        width: 100%;
        height: 925px;
        background: white;
        margin-top: 72px;
        border-radius: 0 0 48px 48px; 

        @media (min-width: 375px) and (max-width: 450px) {
            display: none;
        }
    `
    export const Bottom_div_title = styled.p`
    
        width: 80%;
        height: 48px;
        color: #110035;
        font-family: 'Steppe';
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        margin: -30px 43px 45px 9px;
        padding-top: 43px;
        padding-bottom: 60px;
        `
    export const Bottom_div_show = styled.p`
    
        width: 80%;
        // height: 56px;
        color: #3800B0;
        font-family: 'Steppe';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        margin: 64px auto 0 auto;
        border-radius: 8px;
        border: 1px solid #BFACE9;
        text-align: center; 
        padding: 19px 0;
        `