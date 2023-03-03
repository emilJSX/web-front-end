import { Container } from "@mantine/core";
import styled from "styled-components";

export const PartnersPageContainer = styled(Container)`
`

export const MacBigFotoSection = styled.img`
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    height: 280px;
    width: 100%;
    object-fit: cover;
  
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    min-width: calc(100% + 32px);
    margin: 0 -16px;
    height: auto;
  }
`

export const PartnersPageManagment = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: grey;
    padding-top: 50px;
`

export const McDonaldsTopTxt = styled.p`
    font-size: 56px;
    font-weight: 600;
    color: #0B0023;

  @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
    font-weight: 600;
    font-size: 40px;
    line-height: 110%;
  }

`

export const McDonaldsImg = styled.img`
    border-radius: 50%;
    width: 80px;

  @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
    width: 40px;
    height: 40px;
  }

`

export const McDondaltsTxtImgSection = styled.div`
    display: flex;
    gap: 30px;
    padding-top: 30px;
  
  @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
    padding-top: 0;
    gap: 16px;
  }
`

export const TextCounsIconsSection = styled.div`
    padding-top: 20px;
`

export const Text = styled.p`
    font-size: 13px;
    font-weight: 400;
    color: #0B0023;

  @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
    color: #5D627D;
  }
`

export const GiftGivenSection = styled.div`
`

export const GiftGivenCount = styled.p`
    color: #0B0023;
    font-size: 24px;
    font-weight: 600;
`

export const GiftGivenTxt = styled.p`
    color: #0B0023;
    font-size: 14px;
    font-weight: 600;
`


export const CongratulateSection = styled.div`
`

export const CongratulateCount = styled.p`
    color: #0B0023;
    font-size: 24px;
    font-weight: 600;
`

export const CongratulateTxt = styled.p`
    color: #0B0023;
    font-size: 14px;
    font-weight: 600;
`

export const GiftsCongratulateSection = styled.div`
    display: flex;
    gap: 55px;
`

export const IconsSection = styled.div`
    display: flex;
    gap:25px;
    padding-top: 12px;

    @media (max-width: 1000px) {
        font-size: 25px;
    }
`

export const RecentlyGivenCouponsTxt = styled.p`
    color: #0B0023;
    font-size: 30px;
    font-weight: 600;
    padding-top: 40px;
`


export const CardDataContainer = styled.div`
    padding-bottom: 50px;
`


export const Picture = styled.img`
      object-fit: cover;
      width: 40%;
      margin: 0 auto;
      border-radius: 50%;
`
export const Name = styled.p`
    margin-left: 15px;
    font-size: 22px;
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 5px;
    padding-top: 20px;
    color: #0C0E19;
    
    font-weight: 600;

  @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
    font-size: 16px;
    line-height: 1.2;
  }
`
export const Tag  = styled.p`
    font-size: 14px;
    text-align: center;
    font-weight: 500;
    color: #0C0E19;
`

export const CardDataMainDiv = styled.div`
    padding-top: 80px;
    padding-bottom: 0px;
`