import { Container, Grid } from '@mantine/core';
import styled from "styled-components";

export const Body = styled.div`
background: #f1f1f1c9;
display: flex;
justify-content: center;
padding-bottom: 50px;

.leftsection-style {
    width: auto;
}


.main-container{
    max-width: 1600px;
    width: 100%;

    @media(max-width: 480px){
        width: 100%;
    }
}

.rainbow {
    @media (min-width: 375px) and (max-width: 420px) {
        height: 113px !important;
        margin-left: 6px;
        margin-top: 13px;
    }
}

.col-one {
    position: relative; 
    z-index: 10;
    min-width: 30%;
}

.col-two {

    min-width: 70%;

    @media(max-width: 1200px) and (min-width: 375px){
       display: flex; 
       justify-content: center;
    }


    .tabs{

        @media(min-width: 375px) and (max-width: 1200px){
            width: 95%;
        }

        .tab-panel{
             .cart-div{
                overflow: hidden;
                display: flex;
                justify-content: center;
                margin: 0;
             }
        }

        .tab-panel-2{

            @media(max-width: 992px){
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }
}

.main-grid {
    margin: 0px !important;
    display: flex;
    justify-content: center;
}

.main-tab {
    display: flex;
    border: 2px solid hwb(261 75% 16%);
    padding-left: 0px;
    width: 87%;
    border-radius: 9px;
    background: #FFFFFF;
}

.tab-classes {
    display: flex;
}



.btn-section {
    display: flex;
    width: 100%;
    border: 1px solid #8f75bc;
    border-radius: 9px;
    overflow: hidden;

    @media(min-width: 768px) and (max-width: 1100px){
        max-width: 735px;
    }

    @media (max-width: 625px) {
        min-width: 120%;   
        padding-right: 20px; 
    }

    .tabname:focus {
        background: black;
    }

    .btn-section tab:focus {
        background: black;
    }
}

.btn-sectiondesctop {
    display: flex;
    width: 56.5%;
    border: 1px solid #8f75bc;
    border-radius: 9px;

    @media (min-width: 1200px) and (max-width: 1235px) {
        width: 53%; 
    }

    @media (min-width: 1235px) and (max-width: 1300px) {
        width: 53.8%; 
    }

    @media (min-width: 1300px) and (max-width: 1350px) {
        width: 54.3%; 
    }

    @media (min-width: 1350px) and (max-width: 1400px) {
        width: 54.8%; 
    }

    @media (min-width: 1400px) and (max-width: 1415px) {
        width: 55%; 
    }

    @media (min-width: 1400px) and (max-width: 1500px) {
        width: 55%; 
    }

    @media (min-width: 1550px) and (max-width: 1600px) {
        width: 57%; 
    }

    @media (min-width: 1600px) and (max-width: 1650px) {
        width: 58%; 
    }

    @media (min-width: 1650px) and (max-width: 1700px) {
        width: 58.5%; 
    }
}


.tabnameSelected {
    width: 33.3%;
    color: #3800B0;
    background: #EBE5F7;
    border: 3px solid #3800B0;
    border-radius: 9px;
    padding: 15px 0px;
    
    text-align: center;
    cursor: pointer;

    @media(max-width: 625px){
        font-size: small;
    }

    @media(max-width: 427px){
        font-size: 12px;
    }


    @media(max-width: 406px){
        font-size: 10px;
    }
    
}



.tabname:focus {
    background: #EBE5F7;
    border: 1px solid #3800B0;
    color: #3800B0;
}



.react-tabs__tab--selected{
    
    color: #3800B0;
    border: 2px solid #3800B0;
    padding: 11px 0;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
    height: 47px;
    background: #EBE5F7;
    width: 33.3%;
}



.mantine-Slider-bar{
    background: #3800B0;
}



.loading{
    width: 100%;
    height: 30px;
    font-size: 4px;
    display: flex;
    align-items: center;
}



.mantine-vl2f9f{
    height: 4px;
}



.mantine-d21okt::before {
    height: 4px;
}



.Facebook{
    margin-left: 10px;
    color: #2D008D;
    font-size: 23px;
}



.twitter{
    margin-left: 10px;
    color: #2D008D;
    font-size: 23px;
}



.telegram{
    margin-left: 10px;
    color: #2D008D;
    font-size: 23px;
}



.whatsapp{
    margin-left: 10px;
    color: #2D008D;
    font-size: 23px;
}



.mail{
    margin-left: 10px;
    color: #2D008D;
    font-size: 23px;
}



.link{
    margin-left: 10px;
    color: #2D008D;
    font-size: 23px;
}



.bluechek{
    color: blue;
    font-size: 16px;     
}


.main-tab {
    display: flex;
    border: 2px solid hwb(261 75% 16%);
    padding-left: 0px;
    width: 100%;
    border-radius: 9px;
    background: #FFFFFF;
    owerflow: scroll;

}


.tabname {
    width: 33.3%;
    background: #FFFFFF;
    color: #160046;
    padding-top: 18px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    margin: 0;
    font-weight: bold;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;

    
    @media(max-width: 625px){
        font-size: small;
    }

    @media(max-width: 427px){
        font-size: 12px;
    }


    @media(max-width: 406px){
        font-size: 10px;
    }
}

.tabname:focus {
    background: #EBE5F7;
    border: 1px solid #3800B0;
    color: #3800B0;
}

.tabname2 {
    width: 53.3%;
    color: #160046;
    padding: 11px 0px;
    text-align: center;
    cursor: pointer;
    margin-left: -17px;
    flex: none;
    display: none;

    @media (max-width: 420px) {
        display: block;
    }
}


.react-tabs__tab--selected{
    
    color: #3800B0;
    border: 2px solid #3800B0;
    padding: 11px 0;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
    height: 47px;
    background: #EBE5F7;
    width: 33.3%;

    a{
        
    }
}

    .loading{
       width: 100%;
       height: 4px;      
    }



    .Facebook{
        color: #2D008D;
        font-size: 23px;
    }


    .twitter{
        color: #2D008D;
        font-size: 23px;
    }


    .telegram{
        color: #2D008D;
        font-size: 23px;
    }



    .whatsapp{
        color: #2D008D;
        font-size: 23px;
    }



    .mail{
        color: #2D008D;
        font-size: 23px;
    }



    .link{
        color: #2D008D;
        font-size: 23px;
    }

    
    .mantine-vl2f9f{
        height: 4px;
        width: 75px;
    }



    .mantine-d21okt::before {
        height: 4px;
        width: 100%;
        position: absolute;
    }
}
`;


export const CardLong = styled.div`
    margin-top: 24px;
    width: 93%;
    height: 320px;
    background: white;
    border: 1px solid #EBE5F7;
    border-radius: 24px;
    margin-left: -69px;
}

    @media(max-width: 1100px) and (min-width: 1000px){
        height: 260px;
        width: 93%;
        margin-left: -52px;
    }

    @media(min-width: 1100px) and (max-width: 1400px){
        height: 300px;
        width: 93%;
        margin-left: -52px;
    }

    @media(min-width: 768px) and (max-width: 1000px){
        height: 260px;
        max-width: 725px;
    }

    @media(min-width: 580px) and (max-width: 768px){
        height: 230px;
    }

    @media(min-width: 480px) and (max-width: 580px){
        height: 200px;
    }

    @media(max-width: 480px){
        width: 100%;
        height: 144px;
        border-radius: 16px;
    }

    .other-container{
        height: 100%;
        width: 65%;
        display: flex;
        flex-direction: column;
        padding-left: 30px;
        padding-right: 30px;
    }

    .image-container-1{
        height: 100%;
        width: 40%;

        img{
           margin: 0;
           padding: 0;
           width: 100%;
           height: 100%;
        }
    }

    .content-title{
        width: 70%;
        height: 100%;


        p{
            margin: 0;
        }
    }

    .com-cont {
       height: 100%;
       width: 100%;
       display: flex;


       .main-button{
          width: 100%;
          height: 30%;
          display: flex;
          justify-content: center;
          align-items: center;
       }
    }

    .cont-text {
        height: 100%;
        display: flex;
        
        .image-container{
            height: 100%;
            width: 35%;


            img{
                width: 100%;
            }
        }
    }

    // @media (min-width: 375px) and (max-width: 420px) {
    //     width: 153%;
    // } 
`;

export const Imagess = styled.img`

    border-radius: 24px;
    height: 100%;

   

    @media(max-width: 480px){
        width: 144px;
        border-radius: 16px;
    }
`;

export const Title = styled.p`

    height: 30%;
    width: 100%;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 120%;
    display: flex;
    align-items: center;
    font-feature-settings: 'liga' off;
    color: #110035;

    @media (min-width: 992px) and (max-width: 1120px) {
        height: 18%;
    }

    @media(max-width: 680px){
        font-size: 18px;
    }

    .second-card-title{
        padding-left: 30px;
        padding-right: 30px;


        @media(max-width: 500px){
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    @media(max-width: 480px){
        //height: 46px;
        border-radius: 16px;
        font-size: 14px;
        float: right;
        text-align: start;
    }

    @media (min-width: 1100px) and (max-width: 1400px) {
        font-size: 20px;
    }


    @media (min-width: 1300px) and (max-width: 1500px) {
        font-size: 20px;
    }

    @media (min-width: 1500px) and (max-width: 1600px) {
        font-size: 23px;
    }

    
`;
export const TargetFinal = styled.div`

    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    width: 100%;
    margin: 0;

    @media (min-width: 1200px) and (max-width: 1400px) {
        height: 35px;
    }

    @media(max-width: 480px){
        display: none;
    }
`;
export const Target = styled.p`

    height: 22px;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    opacity: 0.72;

    text-align: start;
    margin: 0;
  
    @media(max-width: 480px){
        display: none;
    }
`;
export const Final = styled.p`

    height: 22px;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    opacity: 0.72;
    margin: 0;
    text-align: end;
    margin-right: 17px;
  

    @media (min-width: 1200px) and (max-width: 1300px) {
        //width: 307px;
    }

    @media (min-width: 1300px) and (max-width: 1400px) {
        //margin: -20px 40px 0 16px;
       // width: 400px;
    }
    
    @media (min-width: 1400px) and (max-width: 1500px) {
       // width: 398px;
    }

    @media (min-width: 1500px) and (max-width: 1600px) {
       // width: 394px;
    }

    @media(max-width:480px){
        display: none;
    }
`;

export const Price = styled.div`

    height: 50px;
    display: flex;
    justify-content: space-between;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    width: 100%;
    margin: 0;
  

    @media(max-width:480px){
        display: none;
    }
`;

export const Firstprice = styled.p`

    height: 100%;
    display: flex;
    align-items: center;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    opacity: 0.72;
    text-align: start;
    margin: 0;
`;
export const Lastprice = styled.p`

    height: 100%;
    display: flex;
    align-items: center;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    opacity: 0.72;
    margin: 0;
    text-align: end; 
`;

export const LastDiv = styled.div`
  
    width: 100%;
    height: 90px;
    display: flex;
    align-items: flex-start;
    padding-bottom: 10px;
    border-radius: 8px;

    .edit-details-btn {

        @media (min-width: 992px) and (max-width: 1350px) {
            display: flex;
            margin-top: 13px;
        }

    }

    @media (min-width: 992px) and (max-width: 1020px) {
        flex-flow: wrap;
        margin-top: -35px;
        display: flex;
        justify-content: center;
        margin-left: -65px;
        width: 135%;
    }

    @media (min-width: 1020px) and (max-width: 1220px) {
        flex-flow: wrap;
        margin-top: -35px;
        display: flex;
        justify-content: center;
        margin-left: -65px;
        width: 130%;
    }

    @media (min-width: 1220px) and (max-width: 1350px) {
        display: flex;
        justify-content: center;
        flex-flow: wrap;
        margin-top: -35px;
    }


`;
export const SosialN = styled.div`
    width: 80%;
    height: 56px;
    display: flex;
    background: #F7F8FA;
    border: 1px solid #EBE5F7;
    border-radius: 8px;
    padding: 18px;
    display: flex;

    a {
        margin-left: 10px;
        cursor: pointer;
    }
`;
export const Edit = styled.div`
    border: 1px solid #3800B0;
    border-radius: 8px;
    padding:16px 18px;
    font-size: 14px;
    cursor: pointer;
    font-family: sans-serif;
    color: #3800B0;
    font-weight: 600;
    margin-left: 10px;

`;
export const Details = styled.div`
    background:#3800B0;
    border-radius: 8px;
    padding:16.5px 20px;
    font-size: 14px;
    font-family: 'Steppe';
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
    margin-left: 10px;

`;
export const LeftSection = styled(Container)`
    background: white;
    z-index: 10;
    border-radius: 20px;
    width: 75%;
    margin-top: -360px;
    position: sticky;
    margin-left: 92px;
    top:0;

    
    
    @media (min-width: 992px) and (max-width: 1100px) {
        margin-top: -244px;
    }
    
    @media (min-width: 1100px) and (max-width: 1200px) {
        margin-top: -270px;
    }
    
    @media (min-width: 1200px) and (max-width: 1300px) {
        margin-top: -310px;
    }
    
    @media (min-width: 1300px) and (max-width: 1400px) {
        margin-top: -325px;
    }
    
    
    @media(max-width: 992px) and (min-width: 420px){
        margin-top: -100px;
    }
    
    @media(max-width: 992px){
        margin-top: -13px;
        width: auto;
    }
    
    @media (min-width: 375px) and (max-width: 992px) {
        border-radius: unset !important;
        margin-left: 4px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        margin: auto !important;
        margin-top: -14px !important;
        margin-left: 7px !important;
    }





    .tomcruse {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

        figure{
          width: 80px;
        }

        @media (max-width: 500px) {
            display: none;
        }
    }


    #tomcrusemobile {
        display: none;

        @media (max-width: 500px) {
            width: 90px;
            display: inline-table;
            transform: translate(0px, -40px);
        }

        figure{
            div{
                img{
                    border: 5px solid white;
                    height: 90px;
                }
            }
        }
    }
`

export const Namesurname = styled.h1`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    //text-align: center;
    font-size: 24px;
    font-weight: 600;
    margin-top: 10px;
`;

export const TagName = styled.p `
    max-width: 100%;
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    margin-top: 15px;
`;

export const Text = styled.p`
    max-width: 100%;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 12px;

    @media (max-width: 420px) {
        padding-bottom: 15px;
    }

`;
export const DateSection = styled.div `
    background: #F7F8FA;
    padding-top: 20px;
    padding-bottom: 1px;
    border-radius: 10px;
    height: 72px;
    width: 100%;

    @media (max-width: 420px) {
        display: none;
    }
`;

export const Date = styled.h4`
    font-size: 16px;
    text-align: center;
    font-weight: 600;

    @media (max-width: 420px) {
        font-size: 11px;
        width: 130px;
        margin-left: 16px;
        margin-top: 6px;
    }
`;

export const DateText = styled.p`
    font-size: 12px;
    font-weight: 600;
    text-align: center;

    @media (max-width: 420px) {
        color: grey;
    }
`;

export const FollowersSection = styled.div`

    background: #F7F8FA;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 1px;
    border-radius: 10px;
    height: 72px;
    width: 100%;
    margin-top: 12px;

    @media (max-width: 420px) {
        display: none;
    }
`;

export const Follower = styled.p`
    font-weight: 600;
    float: left;
    width: 128.5px;
    text-align: center;

    @media (max-width: 420px) {
        font-size: 11px;
        margin-left: 8px;
    }

`;

export const Following = styled.p`
    font-weight: 600;
    float: right;
    width: 128.5px;
    text-align: center;

    @media (max-width: 420px) {
        font-size: 11px;
    }
`;

export const SocialSection = styled.div`

    background: #F7F8FA;
    display: flex;
    justify-content: center;
    padding-bottom: 1px;
    border-radius: 10px;
    height: 57px;
    width: 100%;
    margin-top: 12px;

    @media (max-width: 500px) {
        display: none;
    }

`;


export const ButtonSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .second-btn {
        margin: 12px 7px 12px 11px;
        width: 90%;
        background: #FFFFFF;
        border: 1px solid #8f75bc;
        border-radius: 8px;
        color: #3800B0;
        height: 56px;

        @media (max-width: 420px) {
            display: none;
        }
    }
`;

export const Joined = styled.p `
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 13px;
    color: #5D627D;
    padding-bottom: 24px;

    @media (max-width: 420px) {
        display: flex;
        justify-content: center;
        padding-top: 20px;
    }
`;

export const UserDesc = styled.p`
    display: none;
    
    @media(max-width: 480px){
        height: 40px;
        display: flex;
        align-items: center;
        font-size: 12px;
    }
`

export const LeftRightPriceDisplay = styled.div`
    display: none;
    gap: 50px;
    height: 40px;
    font-size: 10px;
    
    @media (max-width: 480px) {
        display: flex;
        align-items: center;
    }
`

export const LeftPrice = styled.p`

`

export const RightPrice = styled.p`

`

export const MenuScrollCards = styled.div`
    display: flex;
    width: 100%;
    overflow: auto;
    width: 92.7%;
    z-index: 10;
    

    @media(max-width: 625px){
       width: 110%;
    }

    @media(min-width: 768px) and (max-width: 1100px){
        justify-content: center;
    }  
`
export const MenuScrollCardsDesktop = styled.div`
    display: flex;
    width: 153%;
    justify-content: end;
    margin-left: -288px;
    padding-top: 27px;

    @media (min-width: 1200px) and (max-width: 1300px) {
        margin-left: -413px;
    }

`

export const ButtonOne = styled.button`
`
export const ButtonTwo = styled.button`
`
export const ButtonThree = styled.button`
`

export const DisplayDateBirthaySection = styled.div`
    background: #F7F8FA;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 1px;
    border-radius: 10px;
    height: 70px;
    width: 100%;
    display: none;

    @media (max-width: 420px) {
        display: flex;
    }
`

export const MobileBtnSection = styled.div`
    display: none;

    @media (max-width: 420px) {
        margin-top: 20px;
        display: flex;
        justify-content: space-evenly;
        overflow: scroll;

        .fb-icon {
            font-size: 46px !important;
            border: 2px solid #8f75bc;
            border-radius: 25px;
            padding: 9px;
            overflow: visible;
        }

        .insta-icon {
            font-size: 46px !important;
            //margin: 14px 15px 14px -5px;
            border: 2px solid #8f75bc;
            border-radius: 25px;
            height: 47px;
            padding: 9px;
            overflow: visible;
        }

        .mobile-btn {
           // margin: 12px 7px 12px 11px;
            width: 130px;
            background: #FFFFFF;
            border: 1px solid #8f75bc;
            border-radius: 8px;
            color: #3800B0;
            height: 50px;
        }

    }
`

export const FotoSection = styled(Container)`
    padding-top: 20px;
    padding-bottom: 10px;
    width: 100%;
    padding: 10px 85px 0px 85px;

    @media (min-width: 375px) and (max-width: 992px) {
        padding: 0 !important;
        display: flex;
        justify-content: center;
        width: 95.5%;
        display: none;
    }
    
    .rainbow {
        @media (min-width: 375px) and (max-width: 500px) {
            border-radius: unset !important;
            border-top-left-radius: 15px !important;
            border-top-right-radius: 15px !important;
        }
        border-radius: 15px ;

    }

    body { 
        
    }
`

export const MobileTopCoverImageSection = styled.div`
    display: none;

    @media (min-width: 375px) and (max-width: 992px) {
        display: block; 
        width: 98.8%;
        margin-left: 7px;
    }
`
