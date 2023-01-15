import { Container } from "@mantine/core";
import styled from "styled-components";

export const BodyRating = styled.div`
`

export const Topprovide = styled.p`
    color: grey;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    padding: 50px 50px;
`

export const TopRatingTxt = styled.h3`
    font-size: 56px;
    font-weight: 600;
    color: #0B0023;
    text-align: center;
    padding-bottom: 50px;
`

export const RatingContainer = styled(Container)`
    margin: 25px 117px 0px 117px;

    @media (min-width: 375px) and (max-width: 768px){
        margin: 0px;
    }

    @media (min-width:768px) and (max-width: 1000px) {
        margin: 25px 15px 0px 15px;
    }

    .grid-root {
        @media (min-width: 375px) and (max-width: 768px){
            flex-direction: column-reverse;
        }
    }

    .col-root {
        @media (min-width: 375px) and (max-width: 768px) {
            margin: 0px 0px 0px 30px;
        }
    }

    .cash-set-container-insider{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: 30px;


        @media(max-width: 768px){
           width: 90%;
        }

        .link-label{
           font-family: 'Steppe';
           font-style: normal;
           font-weight: 500;
           font-size: 13px;
           line-height: 140%;
           font-feature-settings: 'liga' off;
           color: #0B0023;
           padding-bottom: 15px;
        }
        

            .cash-quantity-container input {
                @media (min-width: 375px) and (max-width: 445px) {
                    font-size: 10.5px !important;
                }

            }


        .cash-quantity-container{
           position: relative;
           width: 75%;
           height: 53px;
           padding-right: 10px;
           display: flex;
           align-items: center;

           @media (min-width: 768px) and (max-width: 1000px) {
            width: 100%;
           }

            @media (min-width: 1000px)and (max-width: 1230px) {
                width: 95%;
            }

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
           }

           .link-icon{
               position: absolute;
               transform: translate(20px, 0px);w
           }

           .copy-button{
               position: absolute;
               background: #F7F8FA;
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
    width: 77%;
    padding-top: 20px;
    padding-bottom: 70px;
    padding-right: 20px;

    @media (min-width: 375px) and (max-width:768px) {
        width: 97%;
        padding-bottom: 450px;
    }

    @media (min-width: 768px) and (max-width: 1000px) {
        width: 100%;
    }

    @media (min-width: 1000px)and (max-width: 1230px) {
        width: 95%;
    }
    
    @media(max-width: 768px){
        padding-left: 0;
        padding-right: 0;
    }
    
    .text-area-insider{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        width: 96%;
        
        @media(max-width: 768px){
            width: 90%;
        }
        .invite-label{
            font-family: 'Steppe';
            font-style: normal;
            font-weight: 500;
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
            top: 24px;
        }

        .telegram-icon{
            position: absolute;
            transform: translate(-20px, 12px);
            font-size: 20px;
            color: #3800B0;
            right: 0;
            top:22px;

            @media (min-width: 375px) and (max-width: 768px) {
                right: -30px;
            }

            @media(max-width: 768px){
                transform: translate(-40px, 12px);
            }
        }
    }

}

    .line {
        color: grey;
        margin-top: 10px;
    }
`

export const TitleOne = styled.h3`
    padding-bottom: 20px;
    color: #0C0E19;
    font-size: 24px;
    font-weight: 600;

    @media (min-width:375px) and (max-width: 768px) {
        padding-top: 75px;
    }

`

export const DescriptionOne = styled.p`
    color: #444860;
    font-size: 14px;
    font-weight: 500;
    width: 73%;
`

export const DescriptionTwo = styled.p`
    color: #444860;
    font-size: 14px;
    font-weight: 500;
    padding-top: 10px;
    width: 73%;
`


export const BonusPoints = styled.span`
    color: #0C0E19;
    font-size: 14px;
    font-weight: bold;
`

export const DescriptionInviteOne = styled.p`
    color: #0C0E19;
    font-size: 14px;
    font-weight:500;
    padding-bottom: 10px;
`

export const DescNumberOne = styled.span`
    color: #0C0E19;
    font-size: 16px;
    font-weight: bold;
`

export const DescriptionInviteTwo = styled.p`
    color: #0C0E19;
    font-size: 14px;
    font-weight:500;
    padding-bottom: 10px;
`

export const DescNumberTwo = styled.span`
    color: #0C0E19;
    font-size: 16px;
    font-weight: bold;
`

export const DescriptionInviteThree = styled.p`
    color: #0C0E19;
    font-size: 14px;
    font-weight:500;
    padding-bottom: 10px;
`

export const DescNumberThree = styled.span`
    color: #0C0E19;
    font-size: 16px;
    font-weight: bold;
`

export const TitleTwo = styled.h3`
    padding-top: 50px;
    padding-bottom: 20px;
    color: #0C0E19;
    font-size: 24px;
    font-weight: 600;
`

export const RatingBadges = styled.h3`
    padding-top: 50px;
    padding-bottom: 20px;
    color: #0C0E19;
    font-weight: 600;
    font-size: 24px;
`

export const RatingBadgedUserImage = styled.img`
    padding-bottom: 7px;
`

export const RatingBadgedSimpleUserTxt = styled.p`
    display: flex;
    gap: 10px;
    color: #0C0E19;
    font-weight: 600;
`

export const RatingBadgedSimpleUserTxtCount = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: grey;
`

export const RatingBadgedBlueImage = styled.img`
    padding-bottom: 7px;
`

export const RatingBadgedTrustedUserTxt = styled.p`
    display: flex;
    gap: 10px;
    color: #0C0E19;
    font-weight: 600;
`

export const RatingBadgedTrustedUserCount = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: grey;
`

export const RatingBadgedBronzeImage = styled.img`
    padding-bottom: 7px;
`

export const RatingBadgedSilverUserTxt = styled.p`
    display: flex;
    gap: 10px;
    color: #0C0E19;
    font-weight: 600;
`

export const RatingBadgedSilverUserCount = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: grey;
`

export const RatingBadgedGoldImage = styled.img`
    
`

export const RatingBadgedGoldUserTxt = styled.p`
    display: flex;
    gap: 10px;
    color: #0C0E19;
    font-weight: 600;
`

export const RatingBadgedGoldUserCount = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: grey;
`

export const RatingBlueSection = styled.div`
    background: #22006A;
    border-radius: 35px;

`

export const YourCurrentRatingTxt = styled.p`
    color: #FFFFFF;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    padding-top: 70px;
`

export const BrozeImageBlueSection = styled.img`
    width: 14%;
    margin: auto;
    padding-top: 130px;
`

export const SilverImageTxt = styled.p`
    color: #BFCEE3;
    font-weight: 500;
    text-align: center;
    font-size: 16px;
`

export const RatingCount = styled.p`
    font-size: 56px;
    font-weight: 600;
    color:#FFFFFF;
    text-align: center;
    padding-top: 15px;
`

export const RatingPoints = styled.p`
    font-size: 16px;
    font-weight: 600;
    color:#FFFFFF;
    text-align: center;
    padding-top: 10px;
`

export const EarnText = styled.p`
    font-size: 14px;
    font-weight: 600;
    color:#FFFFFF;
    text-align: center;
    padding-top: 120px;
    padding-bottom: 35px;
`

export const HistorySection = styled.div`
    @media (min-width: 375px) and (max-width: 467px) {
        float: none;
        position: absolute;
        margin-top: 1160px;
        margin-left: 30px;
    }

    @media(min-width: 467px) and (max-width:768px) {
        margin-top: 1045px;
        float: none;
        position: absolute;
        margin-left: 30px;
    }

`

export const HistoryText = styled.p`
    color: #0C0E19;
    font-weight: 600;
    font-size: 24px;
    padding-top: 70px;
`

export const HistoryAbout = styled.p`
    font-size: 14px;
    font-weight: 400;
    padding-top: 30px;

    @media (min-width: 375px) and (max-width: 400px) {
        font-size: 11px;
    }

    @media (min-width: 400px) and (max-width: 768px) {
        font-size: 12.5px;
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        font-size: 12px;
    }

`

export const HistoryAboutCount = styled.p`
    font-weight: 600;
    font-size: 14px;
    color: #0C0E19;
    float:right;

    @media (min-width: 375px) and (max-width: 500px) {
        font-size: 12px;
        margin-left: 7px;
    }

    @media (min-width: 500px) and (max-width: 768px) {
        font-size: 14px;
        margin-left: 20px;
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        font-size: 12px;
    }
`

export const AffiliateProgramContainer = styled(Container)`
    padding:0;
    padding-top: 170px;
    margin-left: -50px;

    @media (min-width: 375px) and (max-width: 768px){
        margin-left: 0px;   
        padding-top: 50px;
    }

    @media (min-width:768px) {
        margin-left:0px;
        padding-top: 120px;
    }
`

export const AffiliateProgramTxt = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: #0C0E19;
    padding-bottom: 30px;
`

export const AffiliateDescriptionOne = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: #0B0023;
    padding-bottom: 10px;
`

export const AffiliateDescriptionTwo = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: #0B0023;
    padding-bottom: 30px;
`

export const SharingContainer = styled.div`
    display: flex;
    gap: 20px;
    padding-bottom: 20px;
`

export const SharingTxt = styled.p`
    font-size: 13px;
    font-weight: 500;
    padding-top: 5px;
    color: #0B0023;

`

export const SharingSocialIcons = styled.div`
    display: flex;
    gap: 30px;
`