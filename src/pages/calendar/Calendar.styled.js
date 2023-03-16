import styled from "styled-components";

export const Mainpage = styled.div`

    background: #E5E5E5;
    width: 100%;
    height: auto;
`;
export const Toppage = styled.div`

    width: 100%;
    height: 126px;
    float: left;
    background: rgba(247, 248, 250, 0.64);
`;
export const Title = styled.div`

    width: 261px;
    height: 78px;
    font-size: 56px;
    color: #0B0023;
    font-weight: 600;
    font-family: 'Steppe';
    margin: 24px 0 24px 24px;
    float: left;

    @media (min-width: 500px) and (max-width: 597px) {
        width: 177px;
        height: 78px;
        font-size: 40px;
        color: #0B0023;
        font-weight: 600;
        font-family: 'Steppe';
        margin: 33px 0 24px 4px;
        float: left;
    }

    @media (max-width: 500px) {
        font-size: 20px;
    }
`;
export const Datediv = styled.div`

    width: 350px;
    height: 56px;
    margin: 35px 0 35px 24px;
    float: left;

    @media (max-width: 400px) {
        display: block;
        margin: -58px 0 35px 60px;
    }

    @media (min-width: 400px) and (max-width: 500px) {
        display: block;
        margin: -58px 0 35px 70px;
    }

    .left{
        padding: 17px 17px;
        width: 56px;
        height: 56px;
        border-radius: 8px;
        background: white;
        border: 1px solid #BFACE9;
        color: #3800B0;
        float: left;
        cursor: pointer;
        margin-right: 8px;
    }
    .right{
        padding: 17px 17px;
        width: 56px;
        height: 56px;
        border-radius: 8px;
        background: white;
        border: 1px solid #BFACE9;
        color: #3800B0;
        float: left;
        cursor: pointer;
    }
`;
export const Dateblue    = styled.div`

    width: 195px;
    height: 56px;
    border-radius: 8px;
    float: left;
    background: #3800B0;
    margin-right: 8px;

    .getFormatDay {
        display: none;

        @media (min-width: 375px) and (max-width: 500px) {
            display: flex;
        }
    }
    .calendar{
        color: white;
        float: left;
        font-size: 20px;
        margin: 17px 0 17px 26px;
    }
    .month_year{
        font-family: 'Steppe';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: white;
        display: flex;
        gap: 6px;
        margin: 19px 0 19px 14px;
        float: left;
    }
`;
export const ShowToday = styled.div`

    padding: 19px 24px;
    margin: 35px 24px 35px 0;
    border: 1px solid #BFACE9;
    border-radius: 8px;
    float: right;
    text-align: center;
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #3800B0;

    @media (max-width: 950px) {
        display: none;
    }

`;
export const Big_calendar_bigdiv = styled.div`

   width: 99.5%;
   padding-left: 24px;
   height: auto;
   justify-content: center;
   float:left;
   background: rgba(247, 248, 250, 0.64);
   .calendar_item: focus{
    border: 2px solid #3800B0;
   }

   @media (max-width: 500px) {
    display: none;
   }
`;
export const Calendar_first_empty = styled.div`

   width: 924px;
   height: 176px;
   margin-bottom:16px;
   margin-right:16px;
   float: left;

   @media (max-width: 1204px) {
    display: none;
   }
   `;
   export const Calendar_item = styled.button`

   width: 219px;
   height: 176px;
   background: white;
   border-radius: 16px;
   margin-bottom:16px;
   float: left;
   margin-right:16px;
   display: block;
   .numberblack{
    font-size: 16px;
    font-weight: 600;
    width: 188px;
    height: 17px;
    margin: 0 auto;
    color: black;
    text-align: start;
   }
   `;
   export const Calendar_item_item = styled.div`

   width: 219px;
   height: 144px;
   `;
   export const Calendar_item_into = styled.div`

   width: 188px;
   height: 110px;
   border-radius: 16px;
   margin: 16px auto 0 auto;
   `;
   export const Person_item = styled.div`
   
   width: 100%;
   height: 20px;
   display: block;
   margin-bottom: 10px;
   `;
   export const Person_item_second = styled.div`
   
   width: 100%;
   height: 20px;
   display: flex;
   margin-top: 10px;
   `;
    export const Photo_cycle = styled.img`
    
        width: 20px;
        height: 20px;
        float: left;
        border-radius: 50%;
    `;
    export const Photo_right_one = styled.img`
        width: 20px;
        height: 20px;
        float: right;
        margin-left: 4px;
    `;
    export const Photo_right_two = styled.img`
        width: 20px;
        height: 20px;
        float: right;
    `;
    export const User_name = styled.p`
    
        height: 20px;
        margin: 4px 6px;
        float: left;
        font-family: 'Steppe';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 130%;
        color: #0C0E19;
    `;
    export const All_wishes = styled.p`
    
        height: 20px;
        margin: 4px 0;
        float: left;
        font-family: 'Steppe';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 130%;
        color: #3800B0;
    `;

    export const Small_main = styled.div`

        background: #B4B0B0;
        width: 100%;
        height: 100vh;
    `;
    export const Small_main_page = styled.div`

        @media (max-width: 520px) {
            width: auto;
            height: auto;
        }
    `;
    export const Small_top_page = styled.div`

        background: white;
        width: 472px;
        height: 22px;
        padding: 16px 0;
        margin: 0 16px;
        .close{
            font-size: 16px;
            color: #0B0023;
            float: right;
        }
        @media (max-width: 520px) {
            display: none;
        }
    `;
    export const Small_top_p = styled.div`
    
    font-family: 'Steppe';
    font-style: normal;
    margin-top: -40px;
    padding-bottom: 30px;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;  
    color: #110035;
    `;

    export const Small_middle_page = styled.div`

        width: 472px;
        height: 380px;
        background: #ECEEF7;
        border-radius: 24px;
        margin: 0 16px 16px 16px;      
        @media (max-width: 520px) {
            width: 343px;
        }  
    `;
    export const Middle_page_top = styled.div`

        height: 40px;
        .check{
            font-size: 16px;
            color: #1A76F2;
            float: left;
            margin: 15px 0;
        }
        .up{
            font-size: 24px;
            color: #1A76F2;
            float: right;
            margin: 8px 0;
        }
        @media (max-width: 520px) {
        width: 311px;
        }
    `;
    export const Middle_top_photo = styled.img`

        width: 40px;
        height: 40px;
        float: left;
        border-radius: 50%;

        `;
    export const Middle_top_word = styled.p`

        font-family: 'Steppe';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        color: #000000;
        margin: 12px 6px 12px 12px;
        float: left;

        `;
    export const Birthday = styled.p`

        font-family: 'Steppe';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 140%;
        margin: 0 auto;
        color: #000000;
        width: 440px;
        height: 20px;
        text-align: start;
        @media (max-width: 520px) {
            width: 100%;
        }
        `;

    export const Card = styled.div`

        width: 375px;
        height: 120px;
        margin: 12px 16px;
        background: white;
        border-radius: 16px;
        margin: 16px 16px 0 0px;
        @media (max-width: 520px) {
            width: 100%;
        }
    `;

    export const Card_photo = styled.img`

    width: 120px;
    height: 120px;
    object-fit: cover;
    float: left;
    border-radius: 16px;

    `;

    export const Card_title = styled.p`

    width: 220px;
    height: 44px;
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    color: #110035;
    margin: 14px 16px 0 16px;
    float: left;
    @media (max-width: 520px) {
        white-space: normal;
        overflow: hidden !important;
        margin: 0 16px;
        width: 55%;
        height: 44px;
        font-size: 11px;
        padding-top: 11px;
    }

    `;

    export const Loading_big = styled.div`
    
        width: 190px;
        height: 4px;
        background: #EBE5F7;
        border-radius: 56px;
        margin: 14px 16px 0 16px;
        float: left;
        @media (max-width: 520px) {
            width: 55%;
        }
    `
    export const Loading_blue = styled.div`
    
        width: 98px;
        height: 4px;
        background: #3800B0;
        border-radius: 56px;
        float: left;
    `;

    export const Price_div = styled.div`
    
    width: 190px;
    height: 21px;
    margin: 14px 16px 0 16px;
    float: left;
    .pleft{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 160%;
        color: #110035;
        opacity: 0.72;
        float: left;
    }
    .pright{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 160%;
        color: #110035;
        opacity: 0.72;
        float: right;
    }
    @media (max-width: 520px) {
        width: 55%;
        .pleft{
            width: 40%;
        }
    }
`;


export const MobileCalendar = styled.div`
    display: none;

    @media (max-width: 500px) {
        display: block;
    }

`

export const BlurCount = styled.p`
    font-size: 12px;
    font-weight: bold;
    position: absolute;
`