import { Container } from "@mantine/core";
import styled from "styled-components";

export const MessagesContainer = styled(Container)`
    background: #F7F8FA;

    .root-grid-for-mobile {
        @media (min-width: 375px) and (max-width: 1200px) {
            display: none;
        }
    }

    .hr-deletesection {
        margin-top: 20px;
    }
`

export const MobileDivDisplay = styled.div`
    display: none;
    @media (min-width: 375px) and (max-width: 1200px) {
        display: block;
    }
`

export const SearchContainer = styled.div`
    padding-bottom: 50px;
    margin-top: 20px;
`

export const BackIconImageDiv = styled.div`
    display: flex;

    .arrow-back-icon {
        color: #3800B0;
        font-size: 38px;
        padding-top: 4px;
        padding-right: 12px;
        float: left;
    }
`

export const LeftMessageSection = styled.div`
    .search-icon {
        position: relative;
        top:10px;
        float: right;
        color: #3800B0;
        font-weight: bold;
        font-size: 20px;     
        right: 17px;   
    }

    .select-dot {
        float: right;
        margin-top: -42px;
        font-size: 35px;
        color: #3800B0;

        @media (min-width: 1200px) and (max-width: 1305px) {
            margin-top: -8px;
        }
    }
`

export const SearchInput = styled.input`
    border: none;
    width: 23%;
    height: 40px;
    position: absolute;
    background: #f6f6f6;
    color: #8E93AF;
    padding-left: 15px;

    @media (min-width: 375px) and (max-width: 750px) {
        width: 94%;
    }

    @media (min-width: 750px) and (max-width: 992px) {
        width: 97%;
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        width: 31%;
    }
`

export const MessageUserSection = styled.div`
    display: flex;
`

export const MessageUserFoto = styled.img`
    border-radius: 50%;
    width: 15%;
`

export const MessageUsername = styled.h3`
    margin-left: 10px;
    font-size: 13px;
    margin-top: 5px;
    color: #0C0E19;
    font-weight: 600;
`

export const MessageUserInfo = styled.p`
    float: right;
    margin-right: 115px;
    margin-top: -20px;
    font-size: 12.7px;
    color: #8E93AF;

    @media (min-width: 1200px) and (max-width: 1305px) {
        float: right;
        margin-right: 123px;
        margin-top: -20px;
        font-size: 12px;
        color: #3800B0;
    }
`

export const MessageTime = styled.p`
    float: right;
    margin-top: -30px;
    margin-right: 34px;
    font-size: 12px;
    color: #8E93AF;

    @media (min-width: 1200px) and (max-width: 1305px) {
        float: right;
        margin-top: 4px;
        margin-right: 77px;
        font-size: 12px;
        color: #3800B0;
    }
}
`
export const MessageClickButton = styled.button`
    padding: 5px;
    &:focus{ 
        border: 3px solid #8866D0;
        border-right-width: 5px;
        border-bottom-width: 5px;
        border-radius: 12px;

        .username {
            color: #3800B0;
            font-weight: 600;
        }

        .info-message {
            color: #8866D0;
            font-weight: 400;
        }

        .message-time {
            color: #8866D0;
            font-weight: 400;
        }
    }
`

export const UlListMessage = styled.ul`
`

export const LiListMessage = styled.li`
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 5px 10px #0000000f;
    margin-bottom: 7px;
    width: 342px;

`


// message don't clicked

export const UllistMessageDclicked = styled.ul`

`

export const BlockText = styled.div`

`

export const LiListMessageDclicked = styled.li`
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 5px 10px #0000000f;
    margin-bottom: 7px;
    width: 342px;

`

export const MessageClickButtondclicked = styled.button`
    padding: 5px;

    &:focus{ 
        border: 3px solid #8866D0;
        border-right-width: 5px;
        border-bottom-width: 5px;
        border-radius: 12px;

        .username {
            color: #3800B0 !important;
            font-weight: 600;
        }

        .info-message {
            color: #8866D0;
            font-weight: 400;
        }

        .message-time {
            color: #8866D0;
            font-weight: 400;
        }
    }
`

export const MessageUserSectiondclicked = styled.div`
    display: flex;
`

export const MessageUsernamedclicked = styled.h3`
    margin-left: 10px;
    font-size: 13px;
    margin-top: 5px;
    color: #0C0E19;
    font-weight: 600;
`

export const MessageUserFotodclicked = styled.img`
    border-radius: 50%;
    width: 15%;
`

export const MessageUserInfodclicked = styled.h3`
    float: right;
    margin-right: 115px;
    margin-top: -20px;
    font-size: 12.7px;
    color: #3800B0;

    @media (min-width: 1200px) and (max-width: 1305px) {
        float: right;
        margin-right: 123px;
        margin-top: -20px;
        font-size: 12px;
        color: #3800B0;
    }
`

export const MessageTimedclicked = styled.h3`
    float: right;
    margin-top: -30px;
    margin-right: 34px;
    font-size: 12px;    
    color: #3800B0;

    @media (min-width: 1200px) and (max-width: 1305px) {
        float: right;
        margin-top: 4px;
        margin-right: 77px;
        font-size: 12px;
        color: #3800B0;
    }
`

export const MessageScroll = styled.div`
    overflow: auto;
    height: 830px;
`


// Message section

export const MessageSectionUser = styled.div`
    margin-top: 20px;
    height: 50px;
    padding: 5px;
    box-shadow: 0px 5px 20px #0000000f;
`

export const MessageTopUserFoto = styled.img`
    float: left;
    border-radius: 50px;
    width: 41px;
`


export const MessageTopUsername = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: 600;

    @media (min-width: 375px) and (max-width: 1200px) {
        padding-left: 10px;
    }

`

export const OnlineTxt = styled.p`
    color: #93989A;
    text-align: center;
    font-size: 12px;
    font-weight: 400;

    @media (min-width: 375px) and (max-width: 1200px) {
        color: #93989A;
        padding-left: 45px;
        margin-top: 23px;
        font-size: 12px;
        font-weight: 400;
        margin-left: -147px;
    }
`

export const MessageItem = styled.div`
    margin-left: auto;
    margin-bottom: 5rem;
`

export const MessageContent = styled.div`

`

export const MessageDate = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #8E93AF;
    text-align: center;
    padding-top: 20px;
    margin-left: 35px;
`

export const LeftMessage = styled.div`
    float: left;
    background: #ECEEF7;
    padding: 15px;
    border-top-left-radius: 24px;
    border-bottom-right-radius: 24px;
    border-top-right-radius: 24px;
    color: #0C0E19;
    font-size: 12px;
    font-weight: 600;
`

export const RightMessage = styled.div`
    float: right;
    padding-top: 70px;
    padding-right: 20px;
`

export const MessageDeletePopupSection = styled.div`
    padding: 10px;
    box-shadow: 0px -1px 0px #0000000f;
    display: flex;
    gap: 20px;
    padding-top: 30px;

    .trash-icon {
        color: #3800B0;
        background: #ECEEF7;
        padding: 5px;
        font-size: 30px;
        position: absolute;
        border-radius: 10px;
    }

    .trash-icon1 {
        color: #3800B0;
        background: #ECEEF7;
        padding: 5px;
        font-size: 30px;
        position: absolute;
        border-radius: 10px;
    }

`

export const ImageSectionOne = styled.div`
position: relative;
.trash-icon {
    color: #3800B0;
    background: #ECEEF7;
    padding: 5px;
    font-size: 25px;
    top: -10px;
    position: absolute;
    border-radius: 10px;
    right: 0;
}
`
export const ImageSectionTwo = styled.div`
    position: relative;
    .trash-icon1 {
    color: #3800B0;
    background: #ECEEF7;
    padding: 5px;
    font-size: 25px;
    top: -10px;
    position: absolute;
    border-radius: 10px;
    right: -8px;
}
`

export const DeleteSectionImageOne = styled.img`
    width: 100%;
    height: 50px;
`

export const DeleteSectionImageTwo = styled.img`
    width: 100%;
    height: 50px;
`

export const TrashBackgroundDiv = styled.img`
`

export const ClearAllAttaches = styled.p`
    font-size: 12px;
    font-weight: 600;
    color: #3800B0;
`

export const TrashIconAttachesDiv = styled.p`
    gap: 10px;
    float: right;
    display: flex;
    padding-top:40px;
    box-shadow: 0px -1px 0px #0000000f;
`

export const DeleteImageContainer = styled.div`
    padding-top:55px;
`

export const MessageUserInputContainer = styled.div`
    padding-top: 20px;
    @media (min-width: 375px) and (max-width: 1200px) {
        padding-bottom: 30px;
    }
    .gallery-icon {
        color: #3800B0;
        font-size: 25px;
        border-radius: 70px;
        position: relative;
        left: 10px;
        top: 5px;
    }


    .user-message-input input[name="user-input-message"] {
        color: #8E93AF;
        font-weight: 500;
        font-size: 14px;
        border: none;
        width: 100%;
        padding-left: 50px;
        position: absolute;

        &:focus{
            border: 1px solid #3800B0 !important;
        }
    }

    .send-icon {
        color: #3800B0;
        font-size: 25px;
        position: relative;
        float: right;
        right: 10px;
        top: 6px;
    }
`

export const MessageUserInput = styled.input`
    color: #8E93AF;
    font-weight: 500;
    font-size: 14px;
    border: none;
    width: 48.5%;
    padding: 7px;
    position: absolute;
    padding-left: 50px;

`

export const MessageInputUserDiv = styled.div`
`


// --------------------------------------------------------------Right Section--------------------------------------------------------------

export const RightSection = styled(Container)`
    background: white;
    border-radius: 20px;
    width: 307px;
    margin-top: 17px;

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
    
        @media (min-width: 400px) and (max-width: 420px) {
            margin: 4px 60px 0 -61px;
        }
        
    }

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

    @media (min-width: 1600px) and (max-width: 1675px) {
        margin-left: 27px;
    }

    @media (min-width: 1675px) and (max-width: 1725px) {
        margin-left: 50px;
    }
    



    .tomcruse {
        width: 80%;
        padding-top: 20px;
        padding-bottom: 10px;
        padding-left: 86px;
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

export const DisplayTopImgCard = styled.div`
    margin-top: -60px !important;
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
        width: 118px;
        background: #FFFFFF;
        border: 1px solid #8f75bc;
        border-radius: 8px;
        color: #3800B0;
        height: 50px;

        @media (max-width: 450px) {
            display: none;
        }
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
`;

export const Joined = styled.p`
    max-width: 290px;
    text-align: center;
    font-weight: 600;
    padding-top: 15px;
    font-size: 13px;
    color: #5D627D;
    padding-bottom: 24px;

    @media (max-width: 450px) {
        display: flex;
        float: left;
        padding-top: 7px;
    }
`;

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

    @media (min-width:992px) and (max-width: 1700px) {
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

export const CardLong = styled.div`
    margin-top: 24px;
    width: 87%;
    padding-top: 100px;
    height: 321px;
    border-radius: 24px;
    margin-left: 14px;

    .slider{
        width: 170px;
        font-size: 4px;
        float: right;
        margin: 0;
        margin: -50px 72px 0 35px;
    
        @media (min-width: 992px) and (max-width: 1300px) {
            margin: -40px 34px 0 6px;
            width: 170px;
        }
    
        @media (min-width: 1300px) and (max-width: 1500px) {
            margin: -50px -5px 0 35px;
            width: 170px;
        }
    
        @media (min-width: 1400px) and (max-width: 1500px) {
            margin: -50px 25px 0 35px;
            width: 170px;
        }
    
        @media (min-width: 1500px) and (max-width: 1600px) {
            margin: -50px 23px 0 35px;
            width: 170px;
        }
    
        @media (min-width: 1600px) and (max-width: 1700px) {
            margin: -50px 23px 0 35px;
            width: 170px;
        }
    }


    @media(max-width: 480px){
        width: 350px;
        height: 144px;
        border-radius: 16px;
        margin: 16px 16px 0 -2px;
    }

    .com-cont {
        @media (min-width: 1200px) and (max-width: 1700px) {
            width: 800px;
        }

    
    }

    .cont-text {
        @media (min-width: 1200px) and (max-width: 1300px) {
            width: 290px;
        }

        @media (min-width: 1300px) and (max-width: 1400px) {
            width: 260px;
            padding-top: 25px;
        }

        @media (min-width: 1400px) and (max-width: 1500px) {
            padding-top: 25px;
            width: 307px;
        }

        @media (min-width: 1500px) and (max-width: 1600px) {
            padding-top: 25px;
            width: 307px;
        }

        @media (min-width: 1600px) and (max-width: 1700px) {
            padding-top: 25px;
            width: 307px;
        }
    }

    @media (min-width: 375px) and (max-width: 420px) {
        width: 153%;
    }
`;

export const Imagess = styled.img`
    border-radius: 24px;
    width: 35%;

    @media (min-width: 992px) and (max-width: 1300px) {
        width: 30%
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
    margin: -93px 0 0 168px;
    @media(max-width: 480px){
        width: 170px;
        height: 46px;
        border-radius: 16px;
        font-size: 14px;
        margin: -144px 16px 0 0;
        float: right;
        text-align: start;
    }

    @media (min-width: 992px) and (max-width: 1300px) {
        margin: -76px 0 0 87px;
        font-size: 13px;
    }


    @media (min-width: 1300px) and (max-width: 1400px) {
        margin: -93px 0 0 95px;
        font-size: 12px;
    }

    @media (min-width: 1401px) and (max-width: 1500px) {
        margin: -93px 0 0 113px;
        font-size: 13px;
    }

    @media (min-width: 1500px) and (max-width: 1600px) {
        font-size: 14px;
        margin: -93px 0 0 113px;
    }

    @media (min-width: 1600px) and (max-width: 1700px) {
        margin: -93px 0 0 114px;
        font-size: 14px;
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

    @media (min-width: 1200px) and (max-width: 1300px) {
        margin: -203px 24px 0 40px;
    }

    @media (min-width: 1300px) and (max-width: 1400px) {
        margin: -203px 29px 0 40px;
    }

    @media (min-width: 1400px) and (max-width: 1500px) {
        margin: -203px 28px 0 40px;
    }

    @media(min-width: 1500px) and (max-width: 1600px){
        margin: -203px 6px 0 40px;
    }

    @media(min-width: 1500px) and (max-width: 1600px){
        margin: -203px 6px 0 40px;
    }

    @media(min-width: 1600px) and (max-width: 1700px){
        margin: -203px -21px 0 40px;
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

    @media (min-width: 1200px) and (max-width: 1300px) {
        width: 307px;
    }

    @media (min-width: 1300px) and (max-width: 1400px) {
        margin: -20px 40px 0 16px;
        width: 400px;
    }
    
    @media (min-width: 1400px) and (max-width: 1500px) {
        width: 398px;
    }

    @media (min-width: 1500px) and (max-width: 1600px) {
        width: 394px;
    }

    @media(max-width:480px){
        display: none;
    }
`;

export const Firstprice = styled.p`

    height: 22px;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #110035;
    opacity: 0.72;
    width: 100px;
    text-align: start;
    margin: 0;
    // margin: -203px 40px 0 40px;
`;

export const Lastprice = styled.p`

    height: 22px;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #110035;
    opacity: 0.72;
    width: 185px;
    margin: 0;
    text-align: end;
    margin: -22px 40px 0 16px;

    @media (min-width: 992px) and (max-width: 1300px) {
        width: 155px;
    }

    @media (min-width: 1300px) and (max-width: 1400px) {
        margin: -23px 47px 0 16px;
        width: 150px;
    }  

    @media (min-width: 1400px) and (max-width: 1500px) {
        width: 175px;
    }

    @media (min-width: 1500px) and (max-width: 1600px) {
        width: 185px;
    }

    @media (min-width: 1600px) and (max-width: 1700px) {
        width: 185px;
    }
    
`;

export const Price = styled.p`
    height: 22px;
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #110035;
    float: right;
    margin: 0;
    margin: -30px 1px 0 40px;

    @media (min-width: 992px) and (max-width: 1300px) {
        margin: -30px -6px 0 35px;
    }

    @media (min-width: 1300px) and (max-width: 1400px) {
        margin: -30px -48px 0 40px;
    }

    @media (min-width: 1400px) and (max-width: 1500px) {
        margin: -30px -35px 0 40px;
    }

    @media (min-width: 1500px) and (max-width: 1600px) {
        margin: -30px -49px 0 40px;
    }

    @media (min-width: 1600px) and (max-width: 1700px) {
        margin: -30px -45px 0 40px;
    }

    @media(max-width:480px){
        display: none;
    }
`;


export const UserLastWishText = styled.h3`
    color: #0C0E19;
    margin-left: 14px;
    font-size: 16px;
    font-weight: 600;
`