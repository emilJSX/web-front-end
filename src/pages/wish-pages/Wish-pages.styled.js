import styled from "styled-components";

export const Main_page = styled.div`

    width: 100%;
    height: auto;
    background: #E5E5E5;
    padding-top: 24px;

    .columnFilter {
        position: relative;
        display: flex;
        cursor: pointer;
        .filterContent {
            border-radius: 20px;
            padding-top: 20px !important;
            width: 270px;
            position: absolute;
            left: -156px;
            top: 30px;
            display: flex;
            height: 500px;
            justify-content: left;
            flex-direction: column;
            text-align: left;
        }
      }
`;
export const Main_page_top = styled.div`

    width: 80.76%;
    height: auto;
    // background: red;
    margin: 0 auto 0 auto;
    display: flex;
`;
export const Left_div = styled.div`

    width: 49%;
    height: 760px;
    margin: 0;
    border-radius: 24px;
    float:left;
`;
export const Left_image = styled.img`

    width: 100%;
    height: auto;
    background: white;
    padding: 112.5px;
    border-radius: 24px;
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
`;

export const Right_div = styled.div`

    width: 49%;
    height: auto;
    border-radius: 24px;
    margin-left: 24px;
    float: left;
`;
export const Right_top_div = styled.div`

    width: 100%;
    height: 354px;
    background: white;
    border-radius: 24px;
`;
export const Top_title = styled.div`

    width: 85.58%;
    height: 24px;
    margin: 40px 48px 0 48px;
    float: left;
    .notification{
        font-size: 24px;
        color:#6033C0;
        float: right;
    }
`;
export const Photo = styled.img`

    width: 24px;
    height: 24px;
    float: left;
    border-radius: 50%;
    @media(max-width: 480px){
        float: left;
    }
    `;
export const Photos = styled.img`

    width: 24px;
    height: 24px;
    float: left;
    border-radius: 50%;
    margin: 12px;
    @media(max-width: 480px){
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
    @media(max-width: 480px){
        float: left;
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

`;
    export const Last_title = styled.p`

    width: 83%;
    height: 66pxpx;
    margin: 16px 48px 0 65px;
    float: left;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    color: #5D627D;
    line-height: 160%;

`;
export const Right_blue_div = styled.div`

    width: 100%;
    height: 396px;
    background: white;
    border-radius: 24px;
    margin-top: 24px;
`;
export const Blue_div = styled.div`

    width: 100%;
    height: 172px;
    background: #22006A;
    border-radius: 24px;
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
`;
export const Vashed = styled.p`

    font-size: 20px;
    color: #8E93AF;
    margin-left: 16px;
    font-family: 'Steppe';
    font-weight: 600;
    float: left;
`;

export const Congratulate = styled.div`

    width: 85.58%;
    height: 56px;
    margin: 56px 48px 40px 48px;
    float: left;
    background: blue;
    background: #E5E5E5;
    border-radius: 8px;
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
`;
export const Product = styled.button`

    width: 71.40%;
    height: 56px;
    float: left;
    font-size: 14px;
    border-radius: 8px;
    .special{
        border: 2px solid #3800B0;    }
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

    `;


    export const Hbd_title = styled.div`

    width: 92.79%;
    height: 24px;
    float: left;
    margin: 24px 24px 0 24px;
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
    }
    .minago{
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 140%;
    color: #8E93AF;
    float: right;
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
    `;

    export const Hbday = styled.div`
    

    float: left;
    width: 100%;
    height: 132px;
    margin-top: 16px;
    background: white;
    border-radius: 24px;

    `;
    export const Mcdonalds = styled.div`
    

    float: left;
    width: 100%;
    height: 152px;
    margin-top: 16px;
    background: white;
    border-radius: 24px;

    `;

    export const Picture = styled.img`

    width: 180px;
    height: 120px;
    float: left;
    border-radius: 8px;
    margin: 16px 24px 16px 19px;
    @media(max-width: 480px){
        float: left;
    }
    `;
    export const Mcago = styled.div`

    width: 62.16%;
    height: 24px;
    float: left;
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
    }
    .minago{
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 140%;
    color: #8E93AF;
    float: right;
    }
    @media(max-width: 480px){
        float: left;
    }
    `;
    export const Freecofe = styled.div`

    width: 62.16%;
    height: 24px;
    float: left;
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
    @media(max-width: 480px){
        float: left;
    }
    `;

    export const Bottom_div = styled.div`
    
        width: 100%;
        height: 1009px;
        background: white;
        margin-top: 72px;
        border-radius: 0 0 48px 48px; 
    `
    export const Bottom_div_title = styled.p`
    
        width: 80%;
        height: 48px;
        color: #110035;
        font-family: 'Steppe';
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 120%;
        margin: 0 auto;
        padding-top: 80px;
        padding-bottom: 64px;
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