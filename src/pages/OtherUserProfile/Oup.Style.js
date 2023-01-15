import { Container, Grid } from '@mantine/core';
import styled from "styled-components";

export const Body = styled.div`
background: #E5E5E5;

.owl-theme {
    padding-top: 80px;
    width: 865px !important;

    @media (min-width: 320px) and (max-width: 450px) {
        width: 153% !important;
    }

    @media(min-width: 420px) and (max-width: 450px) {
        margin-left: -132px;
    }
}

.tabpanel:focus {
    background:black;
}

.owl-stage {
    width: 600% !important;
}

.owl-nav {
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    margin-top: -360px;
    float: right;
    font-size: 61px;
    margin-right: -8px;

    @media (min-width: 320px) and (max-width: 450px) {
        display: none;
    }
}

.owl-next {
    color: #3800B0 !important;
}

.owl-next:hover {
    background: none !important;
}

.owl-prev {
    color: #3800B0 !important;
}

.owl-prev:hover {
    background: none !important;  
}

.grid-root-active-wishes {
    max-width: 886px;
    padding-top: 25px;

    @media (min-width:1275px) and (max-width: 1500px) {
        max-width: 870px;
    }

    @media (min-width:1500px) and (max-width: 1600px) {
        max-width: 885px;
    }

    @media (min-width:1550px) and (max-width: 1600px) {
        max-width: 890px;
    }

    @media (min-width:1600px) and (max-width: 1650px) {
        max-width: 900px;
    }

    @media (min-width:1650px) and (max-width: 1700px) {
        max-width: 910px;
    }
}

.col-root-cards {
    @media (max-width: 450px) {
        min-width: 144%;
        margin-left: 8px;
        padding-top: 30px;
    }

    @media (min-width: 420px) and (max-width: 450px) {
        margin-left: -133px;
    }
}

.rainbow {
    @media (min-width: 375px) and (max-width: 450px) {
        height: 200px !important;
    }

    @media (min-width: 355px) and (max-width: 375px) {
        width: 323px;
    }

    @media (min-width: 365px) and (max-width: 375px) {
        width: 335px;
    }
}

.firsttabname {
    margin-right:110px;
}

.col-one {
    padding-left: 195px;

    @media (min-width: 1200px) and (max-width: 1700px) {
        padding-bottom: 40px;
    }
}

.main-grid {
    margin: 0px !important;
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
    width: 56.5%;
    border: 1px solid #8f75bc;
    border-radius: 9px;

    @media (max-width: 450px) {
        overflow: scroll;
        width: 95%;
        margin-left: 9px;   
    }

    @media (min-width: 420px) and (max-width: 450px) {
        margin-left: -129px;
        width: 145%;    
        margin-top: 351px;
    }

    @media (min-width: 1200px) and (max-width: 1290px) {
        width: 98.5%;
    }

    @media (min-width: 1290px) and (max-width: 1325px) {
        width: 96%;
    }

    @media (min-width: 1325px) and (max-width: 1380px) {
        width: 94%;
    }

    @media (min-width: 1380px) and (max-width: 1405px) {
        width: 92%;
    }

    @media (min-width: 1405px) and (max-width: 1450px) {
        width: 92%;
    }

    @media (min-width: 1420px) and (max-width: 1450px) {
        width: 90.5%;
    }

    @media (min-width: 1450px) and (max-width: 1480px) {
        width:88.5%;
    }

    @media (min-width: 1480px) and (max-width: 1500px) {
        width:88%;
    }

    @media (min-width: 1480px) and (max-width: 1500px) {
        width:88%;
    }

    @media (min-width: 1500px) and (max-width: 1525px) {
        width:87%;
    }

    @media (min-width: 1525px) and (max-width: 1550px) {
        width:86%;
    }

    @media (min-width: 1550px) and (max-width: 1575px) {
        width:85%;
    }

    @media (min-width: 1575px) and (max-width: 1600px) {
        width:84%;
    }

    @media (min-width: 1600px) and (max-width: 1630px) {
        width:83%;
    }

    @media (min-width: 1630px) and (max-width: 1660px) {
        width:82%;
    }

    @media (min-width: 1660px) and (max-width: 1680px) {
        width:81%;
    }
    
    @media (min-width: 1680px) and (max-width: 1700px) {
        width:80%;
    }
}




.tabname {
    width: 39.3%;
    color: #160046;
    padding: 5px 0px;
    text-align: center;
    cursor: pointer;
    margin: 0px 16px;

    @media (min-width: 355px) and (max-width: 375px) {
        margin: 0px -5px;
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
    width: 440px;
    font-size: 4px;
    float: right;
    margin: 0;
    margin: -173px 40px 0 35px;
}
.mantine-vl2f9f{
    height: 4px;
}
.mantine-d21okt::before {
    height: 4px;
}
.Facebook{
    float: right;
    margin-right: 150px;
    color: #2D008D;
    font-size: 23px;
}
.twitter{
    float: right;
    margin-right: 120px;
    color: #2D008D;
    font-size: 23px;
    margin-top: -25px;
}
.telegram{
    float: right;
    margin-right: 90px;
    color: #2D008D;
    font-size: 23px;
    margin-top: -25px;
}
.whatsapp{
    float: right;
    margin-right: 60px;
    color: #2D008D;
    font-size: 23px;
    margin-top: -25px;
}
.mail{
    float: right;
    margin-right: 30px;
    color: #2D008D;
    margin-top: -25px;
    font-size: 23px;
}
.link{
    float: right;
    margin-right: 0px;
    color: #2D008D;
    font-size: 23px;
    margin-top: -25px;
}
.bluechek{
    color: blue;
    font-size: 16px;
    float: right;
    margin: 4px 17px 0 -30px;

    @media (min-width: 375px) and (max-width: 385px) {
        margin: 4px 35px 0 -61px;
    }

    @media (min-width: 385px) and (max-width: 400px) {
        margin: 4px 45px 0 -61px;
    }

    @media (min-width: 400px) and (max-width: 450px) {
        margin: 4px 60px 0 -61px;
    }
    
}
@media ( max-width: 480px){
    
.col-one {
        padding-left: 132px;
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
    width: 58.3%;
    color: #160046;
    padding: 11px 22px;
    text-align: center;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-left: 0px;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;

    @media (min-width: 355px) and (max-width: 375px) {
        padding: 11px 26px;
        font-size: 14px;    
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

    @media (max-width: 450px) {
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
}
    .loading{
       width: 167px;
       height: 4px;
       float: right;
       margin: -46px 16px 0 0;
    }
    .Facebook{
        float: right;
        margin-right: 150px;
        color: #2D008D;
        font-size: 23px;
    }
    .twitter{
        float: right;
        margin-right: 120px;
        color: #2D008D;
        font-size: 23px;
        margin-top: -25px;
    }
    .telegram{
        float: right;
        margin-right: 90px;
        color: #2D008D;
        font-size: 23px;
        margin-top: -25px;
    }
    .whatsapp{
       display: none; 
    }
    .mail{
        display: none;
    }
    .link{
       display: none;
    }
    
    .mantine-vl2f9f{
        height: 4px;
        width: 75px;
    }
    .mantine-d21okt::before {
        height: 4px;
        width: 167px;
        position: absolute;
    }
}
`;


export const CarouselSection = styled.div`
    padding-top: 35px;
    padding-bottom: 45px;
    background: white;
    margin-right: -235px;
    display: flex;
    justify-content: center;
    flex-flow: wrap;
    border-radius: 15px;

    .carousel-img {
        border-radius: 10px;
    }
`

export const NameCarousel = styled.div`
    padding-top: 20px;
    font-size: 20px;
    display: flex;
    justify-content: center;
`

export const CarouselImage = styled.div`
`

export const VerifiedImg = styled.img`
width: 12% !important;
`

export const Username = styled.div`
    padding-top: 10px;
`


export const CardLong = styled.div`
    margin-top: 24px;
    width: 87%;
    height: 321px;
    background: white;
    border: 1px solid #EBE5F7;
    border-radius: 24px;
    @media(max-width: 480px){
        width: 350px;
        height: 144px;
        border-radius: 16px;
        margin: 16px 16px 0 -2px;
    }
`;

export const Imagess = styled.img`

    border-radius: 24px;
    height: 321px;
    width: 321px;
    @media(max-width: 480px){
        width: 144px;
        height: 144px;
        border-radius: 16px;

    }
`;

export const Title = styled.p`

    height: 29px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 120%;
    display: flex;
    align-items: flex-end;
    font-feature-settings: 'liga' off;
    color: #110035;
    float: left;
    margin: -271px 0 0 349px;
    @media(max-width: 480px){
        width: 170px;
        height: 46px;
        border-radius: 16px;
        font-size: 14px;
        margin: -144px 16px 0 0;
        float: right;
        text-align: start;
    }
`;
export const TargetFinal = styled.p`

    height: 22px;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    width: 440px;
    float: right;
    margin: 0;
    margin: -203px 87px 0 40px;
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
    width: 440px;
    text-align: start;
    margin: 0;
    // margin: -203px 40px 0 40px;
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
    width: 440px;
    margin: 0;
    text-align: end;
    margin: -20px 40px 0 16px;
    @media(max-width:480px){
        display: none;
    }
`;

export const Price = styled.p`

    height: 22px;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    width: 440px;
    float: right;
    margin: 0;
    margin: -154px 88px 0 40px;
    @media(max-width:480px){
        display: none;
    }
`;

export const Firstprice = styled.p`

    height: 22px;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    opacity: 0.72;
    width: 440px;
    text-align: start;
    margin: 0;
    // margin: -203px 40px 0 40px;
`;
export const Lastprice = styled.p`

    height: 22px;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    opacity: 0.72;
    width: 440px;
    margin: 0;
    text-align: end;
    margin: -20px 40px 0 16px;
    
`;
export const LastDiv = styled.div`
  
    width: 440px;
    height: 56px;
    float: right;
    border-radius: 8px;
    margin: -108px 88px 0 35px;
    @media(max-width: 480px){
       display: none;
    }

`;
export const SosialN = styled.div`
  
    width: 270px;
    height: 56px;
    float: left;
    background: #F7F8FA;
    border: 1px solid #EBE5F7;
    border-radius: 8px;
    padding: 18px;
`;
export const Edit = styled.div`
  
    
    float: left;
    border: 1px solid #3800B0;
    border-radius: 8px;
    padding:16px 18px;
    font-size: 14px;
    font-family: sans-serif;
    color: #3800B0;
    font-weight: 600;
`;
export const Details = styled.div`
  
    
    float: left;
    background:#3800B0;
    border-radius: 8px;
    padding:16.5px 20px;
    font-size: 14px;
    font-family: 'Steppe';
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
    margin-left: 9px;
`;
export const LeftSection = styled(Container)`
    background: white;
    border-radius: 20px;
    margin-left: -46px;
    width: 307px;
    margin-top: -170px;
    position: sticky;
    top:0;

    @media (min-width: 355px) and (max-width:375px) {
        margin-left: -116px;
        width: 323px;
        margin-top: -130px;
        height: 360px;
        position: relative;
    }

    @media (min-width: 365px) and (max-width: 375px) {
        width: 335px;
    }

    @media (min-width: 375px) and (max-width:378px) {
        width: 346px;
        margin-left: -117px;
        margin-top: -76px;
        height: 360px;
        position: relative;
    }

    @media (min-width: 378px) and (max-width:380px) {
        width: 349px;
        margin-left: -117px;
        margin-top: -76px;
        height: 360px;
        position: relative;
    }

    @media (min-width: 380px) and (max-width:385px) {
        width: 351px;
        margin-left: -117px;
        margin-top: -76px;
        height: 360px;
        position: relative;
    }

    @media (min-width: 382px) and (max-width:385px) {
        width: 354px;
        margin-left: -117px;
        margin-top: -76px;
        height: 360px;
        position: relative;
    }

    @media (min-width: 385px) and (max-width:390px) {
        width: 358px;
        margin-left: -117px;
        margin-top: -76px;
        height: 360px;
        position: relative;
    }

    @media (min-width: 390px) and (max-width:393px) {
        width: 362px;
        margin-left: -117px;
        margin-top: -76px;
        height: 360px;
        position: relative;
    }

    @media (min-width: 393px) and (max-width:396px) {
        width: 366px;
        margin-left: -117px;
        margin-top: -76px;
        height: 360px;
        position: relative;
    }

    @media (min-width: 397px) and (max-width:400px) {
        width: 370px;
        margin-left: -117px;
        margin-top: -76px;
        height: 360px;
        position: relative;
    }

    @media (min-width: 401px) and (max-width:406px) {
        width: 375px;
        margin-left: -117px;
        margin-top: -76px;
        height: 360px;
        position: relative;
    }

    @media (min-width: 406px) and (max-width:410px) {
        width: 380px;
        margin-left: -117px;
        margin-top: -76px;
        height: 360px;
        position: relative;
    }
    // Iphone 11
    @media (min-width: 410px) and (max-width:415px) {
        width: 383px;
        margin-left: -117px;
        margin-top: -76px;
        height: 390px;
        position: relative;
    }

    @media (min-width: 415px) and (max-width:421px) {
        width: 388px;
        margin-left: -117px;
        margin-top: -76px;
        height: 360px;
        position: relative;
    }

    @media (min-width: 450px) and (max-width:430px) {
        width: 388px;
        margin-left: -117px;
        margin-top: -76px;
        height: 360px;
        position: relative;
    }
    
    @media (min-width: 1200px) and (max-width: 1300px) {
        margin-left: -150px;
    }

    @media (min-width: 1300px) and (max-width: 1400px) {
        margin-left: -110px;
    }

    @media (min-width: 1400px) and (max-width: 1500px) {
        margin-left: -60px;
    }

    @media (min-width: 1500px) and (max-width: 1600px) {
        margin-left: -10px;
    }

    @media (min-width: 1600px) and (max-width: 1675px) {
        margin-left: 27px;
    }

    @media (min-width: 1675px) and (max-width: 1725px) {
        margin-left: 50px;
    }
    



    .tomcruse {
        width: 85%;
        padding-top: 20px;
        padding-bottom: 10px;
        padding-left: 100px;
        padding-right: 45px;
        text-align: center;

        @media (max-width: 500px) {
            display: none;
        }
    }

    #tomcrusemobile {
        display: none;


        @media (max-width: 500px) {
            width: 83%;
            padding-top: 20px;
            padding-bottom: 10px;
            padding-left: 132px;
            padding-right: 51px;
            text-align: center;
            margin-top: -50px;
            display: inline-table;
        }

        @media (min-width: 389px) and (max-width: 400px) {
            width: 80%;
        }

        @media (min-width: 401px) and (max-width: 410px) {
            width: 78%;
        }

        @media (min-width: 410px) and (max-width: 421px) {
            width: 76%;
        }

        @media (min-width: 355px) and (max-width: 365px){
            width: 84%;
            padding-left: 107px;
        }

        @media (min-width: 365px) and (max-width: 375px) {
            padding-left: 115px;
        }
    }
`

export const Namesurname = styled.h1`
    max-width: 290px;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 10px;
    margin-right: 30px;

    @media (max-width: 450px) {
        margin-left: 35px;
    }

    @media (min-width: 414px) and (max-width: 420px) {
        margin-top: -40px;
    }
`;

export const TagName = styled.p`
    max-width: 290px;
    text-align: center;
    font-weight: 600;
    font-size: 14px;

    @media (max-width: 450px) {
        margin-left:22px;
    }

    @media (min-width: 355px) and (max-width: 375px) {
        margin-left: 7px;
    }
`;
export const Text = styled.p`
    max-width: 290px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    margin-top: 12px;

    @media (max-width: 450px) {
        padding-bottom: 15px;
        margin-left: 25px;
    }

    @media (min-width: 355px) and (max-width: 375px) {
        margin-left: 17px;
    }

`;
export const DateSection = styled.div`
    background: #F7F8FA;
    padding-top: 20px;
    padding-bottom: 1px;
    border-radius: 10px;
    margin: 0px 10px;
    height: 72px;
    width: 257px;
    margin: 0px 24px 0 9px;

    @media (max-width: 450px) {
        display: none;
    }
`;

export const Date = styled.h4`
    font-size: 16px;
    text-align: center;
    font-weight: 600;

    @media (max-width: 450px) {
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

    @media (max-width: 450px) {
        color: grey;
    }
`;

export const FollowersSection = styled.div`

    background: #F7F8FA;
    padding-top: 20px;
    padding-bottom: 1px;
    border-radius: 10px;
    margin: 0px 10px;
    height: 72px;
    width: 257px;
    margin: 0px 24px 0 9px;
    margin-top: 12px;

    @media (max-width: 450px) {
        display: none;
    }
`;

export const Follower = styled.p`
    font-weight: 600;
    float: left;
    width: 128.5px;
    text-align: center;

    @media (max-width: 450px) {
        font-size: 11px;
        margin-left: 8px;
    }

`;

export const Following = styled.p`
    font-weight: 600;
    float: right;
    width: 128.5px;
    text-align: center;

    @media (max-width: 450px) {
        font-size: 11px;
    }
`;

export const SocialSection = styled.div`

    background: #F7F8FA;
    padding-top: 20px;
    padding-bottom: 1px;
    border-radius: 10px;
    margin: 0px 10px;
    height: 57px;
    width: 257px;
    margin: 0px 24px 0 9px;
    margin-top: 12px;

    @media (max-width: 450px) {
        display: none;
    }

`;
export const ButtonSection = styled.div`


    .second-btn {
        margin: 12px 7px 12px 11px;
        width: 257px;
        background: #FFFFFF;
        border: 1px solid #8f75bc;
        border-radius: 8px;
        color: #3800B0;
        height: 56px;

        @media (max-width: 450px) {
            display: none;
        }
    }
`;

export const Joined = styled.p`
    max-width: 290px;
    text-align: center;
    font-weight: 600;
    font-size: 13px;
    color: #5D627D;
    padding-bottom: 24px;

    @media (max-width: 450px) {
        display: flex;
        float: left;
        padding-top: 7px;
    }
`;

export const UserDesc = styled.p`
    display: none;

    @media (max-width:450px) {
        display: block;
        margin-top: -74px;
        margin-left: 159px;
        font-size: 12px;
    }
`

export const LeftRightPriceDisplay = styled.div`
    display: none;
    gap: 50px;
    margin-left: 159px;
    padding-top: 20px;
    font-size: 10px;

    @media (max-width: 500px) {
        display: flex;
    }
`

export const LeftPrice = styled.p`
`

export const RightPrice = styled.p`

`

export const MenuScrollCards = styled.div`
    display: flex;
    width: 153%;

    @media (min-width: 1200px) and (max-width:1700px) {
        width: 100%;
    }

    @media (min-width: 420px) and (max-width: 450px) {
        width: 100%;
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
    padding-top: 20px;
    padding-bottom: 1px;
    border-radius: 10px;
    margin: 0px 10px;
    height: 70px;
    width: 300px;
    margin: 0px 16px 3px 7px;
    display: none;

    @media (max-width: 450px) {
        display: flex;
        margin-left: 20px;
    }

    @media (min-width: 355px) and (max-width:375px) {
        margin-left: 18px;
    }
`

export const MobileBtnSection = styled.div`
    display: none;

    @media (max-width: 450px) {
        display: flex;
        overflow: scroll;

        .fb-icon {
            font-size: 46px !important;
            margin: 14px 15px 5px 0px;
            border: 1px solid #8f75bc;
            border-radius: 50%;
            padding: 10px;
            overflow: visible;
        }

        .follow-btn {
            margin: 12px 7px 12px 11px;
            width: 118px;
            background: #3800B0;
            border: 1px solid #8f75bc;
            border-radius: 8px;
            color: white;
            height: 50px;
        }
        
        .test-insta-icon {
            // border: 1px solid #8f75bc;
            // border-radius: 50%;
            // padding: 13px;
        }

        .insta-icon {
            font-size: 46px !important;
            margin: 14px 15px 5px -8px;
            overflow: visible;
            border: 1px solid #8f75bc;
            border-radius: 50%;
            padding: 10px;
        }

        .mobile-btn {
            margin: 12px 7px 12px 3px;
            width: 118px;
            background: #FFFFFF;
            border: 1px solid #8f75bc;
            border-radius: 8px;
            color: #3800B0;
            height: 50px;
            font-size: 12px !important;
        }
    }
`

export const FotoSection = styled(Container)`
    padding-top: 20px;
    max-width: 88%;
    max-width: 1270px;
    padding-bottom: 10px;

    .rainbow {
        border-radius: 15px !important;
    }

    body { 
        
    }
`

export const Seconddiv = styled.div`

    width: 450px;
    height: 46px;
    float: right;
    margin:-210px 25px 0 0;
    display: block;

    @media (max-width: 450px) {
        display: block;
    }
`;
export const Views = styled.p`

    width: 96px;
    height: 46px;
    float: left;
    text-align: start;
    font-size: 24px;
    font-weight: 600;

    @media (max-width: 450px) {
        display: none;
    }
`;
export const Lastdiv = styled.div`

    width: 450px;
    height: 56px;
    float: right;
    margin: 50px 20px 0 20px;
    display: block;
    background: #2D008D;
    border-radius: 8px;

    .star-card {
        @media (max-width: 450px) {
            margin: 8px 0px 0px 16px !important;
        }
    }

    @media (max-width: 450px) {
        width: 171px;
        height: 37px;
        float: right;
        margin: 155px -7px 0px 13px;
        display: block;
        background: #2D008D;
        border-radius: 8px;
    }

`;
export const Targets = styled.p`

    width: 170px;
    height: 20px;
    float: right;
    margin: 18px 16px 0 0;
    display: block;
    color: #EBE5F7;
    font-size: 14px;

    @media (max-width: 450px) {
        width: 100px;
        height: 20px;
        float: left;
        margin: 11px 0 0 13px;
        display: block;
        color: #00FF9E;
        font-size: 14px;
        display: none;
    }
`;
export const Raised = styled.p`

    width: 100px;
    height: 20px;
    float: left;
    margin: 18px 0 0 16px;
    display: block;
    color: #00FF9E;
    font-size: 14px;

    @media (max-width: 450px) {
        margin: 10px 0px 0px 16px;
    }
`;
export const CardSecond = styled.div`
    margin-top: 24px;
    width: 666px;
    height: 186px;
    background: white;
    border: 1px solid #EBE5F7;
    border-radius: 24px;
    @media(max-width: 480px){
        width: 343px;
        height: 240px;
        border-radius: 16px;
        margin: 16px 16px 0 16px;
    }
`;
export const Hood = styled.div`
    margin: 34px 0 0 33px;
    width: 600px;
    height: 24px;
    float: left;

    @media(max-width: 480px){
        width: 300px;
        height: 62px;
        border-radius: 16px;
        margin: 16px 16px 0 16px;
    }
`;
export const Parag = styled.p`

    width: auto;
    height: 20px;
    margin-top: 2px;
    margin-left: 6px;
    float: left;
    font-size: 14px;
    font-weight: 500;
    font-family: revert;
    text-align: start;
    @media (max-width: 450px) {
        display: none;
    }
`;
export const Photo = styled.img`

    width: 24px;
    height: 24px;
    margin-left: 6px;
    float: left;
    border-radius: 50%;
    @media(max-width: 480px){
        float: right;
    }
    `;
export const Person = styled.p`

    width: auto;
    height: 20px;
    margin-top: 2px;
    margin-left: 6px;
    float: left;
    color:#0C0E19;
    font-size: 14px;
    font-weight: 600;

`;
export const Parags = styled.p`

    width: auto;
    height: 20px;
    margin-top: 2px;
    float: right;
    font-size: 14px;
    font-weight: 500;
    font-family: revert;

    @media(max-width: 480px){
        float: left;
        margin-top: 7px;
        margin-right: 43px;
        display: none;
    }
`;
export const Titles = styled.div`
    margin: 24px 0 0 33px;
    width: 600px;
    height: 24px;
    float: left;
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    color: #1A1C29;
    @media(max-width: 480px){
        width: 290px;
        height: 24px;
        margin: 42px 16px 0 23px;
    }
`;
export const Third = styled.div`
    margin: 24px 0 0 27px;
    width: 606px;
    height: 24px;
    float: left;
    @media(max-width: 480px){
        width: 334px;
        height: 71px;
        border-radius: 16px;
        margin: 16px 16px 0 26px;
    }
`;
export const Pass = styled.a`
    margin-top: 2px;
    float: right;
    color: #3800B0;
    font-weight: 600;
    font-size: 12px;  

    @media(max-width: 480px){
        margin-right: 45px;
        margin-top: 40px; 
    }
`;
export const CardLonger = styled.div`
    margin-top: 24px;
    width: 98%;
    height: 520px;
    border: 1px solid #EBE5F7;
    border-radius: 24px;
    margin-bottom: 64px;
    @media (min-width: 375px) and (max-width: 410px) {
        width: 343px;
        height: 144px;
        border-radius: 16px;
        margin: 1px -2px 400px 20px;
    }

    @media (min-width: 410px) and (max-width: 450px) {
        width: 343px;
        height: 144px;
        border-radius: 16px;
        margin: 1px -2px 400px 40px;
    }
 
  
`;
export const NotWishes = styled.p`

    width: 510px;
    height: 48px;
    float: right;
    font-weight: 600;
    font-family: revert;
    margin : 64px 165px  0 165px;
    font-size: 40px;
    color: #6033C0;

    @media (min-width: 375px) and (max-width: 450px) {
        width: 255px;
        height: 48px;
        float: none;
        font-weight: 600;
        font-family: revert;
        margin: 30px 157px 0 46px;
        font-size: 28px;
        color: #6033C0;
        text-align: center;
    }
`;
export const Buttons = styled.div`

    width: 326px;
    height: 56px;
    margin : 136px auto  0  auto;

    @media (min-width: 375px) and (max-width: 450px) {
        width: 151px;
        display: grid;
        height: 56px;
        gap: 20px;
        margin: 59px 94px 0px auto;
    }
`;
export const Buttonleft = styled.button`

    width: 150px;
    background: #3800B0;
    height: 56px;
    float: left;
    border-radius: 8px;
    text-align: center;
    color: white;
    font-size: 14px;
`;
export const Buttonright = styled.button`

    width: 150px;
    height: 56px;
    float: right;
    border-radius: 8px;
    text-align: center;
    color: #3800B0;
    border: 1px solid #3800B0;
    font-size: 14px;
`;
export const Glasses = styled.img`

    width: 262px;
    height: 240px;
    margin : 24px auto  0  auto;

    @media (min-width: 375px) and (max-width: 450px) {
        width: 180px;
        height: 150px;
        margin: 101px auto 0 auto;
    }

`;

export const Division = styled.div`
    margin-top: 24px;
    width: 98%;
    height: 260px;
    border-radius: 24px;
    margin-bottom: 109px;
    @media(max-width: 480px){
        width: 343px;
        height: 144px;
        border-radius: 16px;
        margin: 16px 16px 0 16px;
    }
    .swiper {
        width: 840px;
        height: 200px;
      }
      
      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        border-radius: 16px;

      
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }
     
  
`;
export const Maybe = styled.p`

      width: 840px;
      height: 29px;
      font-size: 24px;
      font-weight: 600;
      font-family: 'Steppe';
      text-align: start;
      margin-bottom:24px;

`
export const Picture = styled.img`

      width: 80px;
      height: 80px;
      text-align: start;
      margin:-96px 46px 0 11px;
      border-radius: 50%;
      display:block;
`
export const Name = styled.p`

      width:177px;
      height: 28px;
      font-size: 20px;
      font-weight: 600;
      font-family: 'Steppe';
      text-align: center;
      margin-top:24px;
      margin-bottom:4px;
      margin-left:-176px;
      display:block;
`
export const Tag = styled.p`

      font-size: 14px;
      font-weight: 500;
      font-family: 'Steppe';
      text-align: center;
      margin-bottom:-74px;
      margin-left:-128px;

      display:block;
`

export const DisplayOnButtonText = styled.p`
    display: none;

    @media (max-width: 450px) {
        display: block;
        margin: -75px 1px 1px 162px;
        font-size: 11px;
    }
`

export const Paragraf = styled.p`

    width: auto;
    height: 20px;
    margin-top: 2px;
    margin-left: 6px;
    float: left;
    font-size: 14px;
    font-weight: 500;
    font-family: revert;
    text-align: start;
    @media(max-width: 480px){
        display: none;
    }
`;
export const Paragrap = styled.p`
    display: none;
    width: auto;
    height: 20px;
    margin-top: 2px;
    margin-left: 6px;
    float: left;
    font-size: 14px;
    font-weight: 500;
    display: none
    font-family: revert;
    text-align: start;

    @media (max-width: 480px){
        display: block;
        margin-top: 40px;
        margin-left: 7px;
    }
`;

export const DisplayTopText = styled.p`
    color: #0C0E19;
    font-size: 14px;
    display: none;

    @media (max-width: 450px) {
        display: block;
        margin-top: 5px;
    }
`

export const DisplayBirthdaytext = styled.p`
    display: none;

    @media (max-width: 450px) {
        color: grey;
        font-size: 13px;
        display: block;
        padding: 7px;
    }
`

export const DisplayTime = styled.p`
    display: none;

    @media (max-width: 450px) {
        display: block;
        font-size: 13px;
        color: grey;
        margin: -1px 6px;
    } 

`

export const DisplayTopImgCard = styled.div`
    margin-top: -60px !important;
`
export const AlertText = styled.p`
    font-size: 13px;
    color: #8E93AF;

    @media (max-width: 450px) {
        display: flex;
        gap: 15px;
        padding-right: 10px;
        float: right;
        padding-top: 7px;
    }

    @media (min-width: 355px) and (max-width: 375px) {
        padding-right: 3px;
    }

    @media (min-width:1200px) and (max-width: 1700px) {
        display: flex;
        position: absolute;
        margin-left: 107px;
        gap: 7px;
        padding-top: 10px;
    }

    .report-img {
        margin-top: 2px;
    }


`

export const Buttondiv = styled.div`
    width: 191px;
    height: 40px;
    margin: 20px 0px 0 15px;
    display: block;
    background: #2D008D;
    border-radius: 8px;


    @media (min-width: 375px) and (max-width: 450px) {
        width: 200px;
        height: 37px;
        display: block;
        float: none;
        margin: 20px 0px 0 48px;
        background: #2D008D;
        border-radius: 8px;
    }

    .star-card {
        margin: 8px 0px 0px 28px;

        @media (min-width: 375px) and (max-width: 450px) {
            margin: 7px 0px 0px 32px !important;
        }
    }

`

export const RaisedText = styled.p`
    width: 100px;
    height: 20px;
    float: left;
    margin: 12px 0 0 10px;
    display: block;
    color: #00FF9E;
font-size: 14px;

    @media (max-width: 450px) {
        margin: 10px 0px 0px 16px;
    }
`

export const TargetText = styled.p`
    width: 170px;
    height: 20px;
    float: right;
    margin: 18px 16px 0 0;
    display: block;
    color: #EBE5F7;
    font-size: 14px;

    @media (max-width: 450px) {
        width: 100px;
        height: 20px;
        float: left;
        margin: 11px 0 0 13px;
        display: block;
        color: #00FF9E;
        font-size: 14px;
        display: none;
    }
`