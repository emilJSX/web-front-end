import { Container } from "@mantine/core";
import styled from "styled-components";

export const PartnersMainContainer = styled(Container)`
margin: 20px 120px 0px 120px;

@media (max-width: 768px) {
  margin: 0px;
}

.tab-search-mobile {
  @media (min-width: 375px) and (max-width: 992px) {
    flex-direction: column-reverse;
  }
}

.search-icon {
    position: relative;
    top: -37px;
    float: right;
    color: #3800B0;
    font-weight: bold;
    font-size: 20px;     
    right: 17px;   
}



.grid-blue-section {
  @media (min-width: 375px) and (max-width: 992px){
    flex-direction: column-reverse;
  }
}


.search-icon-section {
  width: 100%;
}


.editing-buttons{
    width: 100px;
    min-wdith: 200px;
    height: 56px;
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #3800B0;
    border-radius: 10px;
    background: #FFFFFF;
    border: 0;

    &:focus{
        background: #EBE5F7;
        border: 1px solid #3800B0;
    }

      @media (max-width: 420px) {
        width: 180px;
        min-width: 180px;
      }
  }
`

export const PartnersManagment = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: grey;
    padding-top: 30px;
`

export const PartnersTxt = styled.p`
    color: #0B0023;
    padding-top: 20px;
    font-size: 56px;
    font-weight: 600;

`

export const TabsMainContainer = styled.div`
  display: flex;
  gap: 4.5px;
  border: 1px solid grey;
  border-radius: 10px;

  @media (min-width: 375px) and (max-width: 1550px) {
    overflow-y: scroll;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

export const TabsInputDiv = styled.div`
display: -webkit-box;
`

export const SeacrhIconContainer = styled.div`
` 

export const InputNearTabs = styled.input`  
  width: 100%;
  height: 57px;
  background: #F7F8FA;
  border-radius: 10px;
  padding-left: 15px;
  color: grey;

`


// BLUE SECTION 


export const BlueMainSection = styled.div`
  background: #2D008D;
  padding: 30px;
  border-radius: 32px;
  margin-top: 20px;

  .close-blue {
    color: #FFFFFF;
    font-weight: bold;
    float: right;
    font-size: 20px;  
  }
`

export const BlueSectionText = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: #00FF9E;

  @media (min-width:375px) and (max-width: 455px) {
    font-size: 20px;
  }

  @media (min-width:455px) and (max-width: 500px) {
    font-size: 25px;
    padding-top: 30px;
  }

  @media (min-width:500px) and (max-width: 545px) {
    font-size: 25px;
    padding-top: 33px;
  }

  @media (min-width:545px) and (max-width: 600px) {
    font-size: 25px;
    padding-top: 50px;
  }

  @media (min-width:600px) and (max-width: 768px) {
    font-size: 25px;
    padding-top: 120px;
  }

  @media (min-width:768px) and (max-width: 850px) {
    font-size: 30px;
    padding-top: 130px;
  }

  @media (min-width:850px) and (max-width: 992px) {
    font-size: 28px;
    padding-top: 140px;
  }

  @media (min-width: 992px) and (max-width: 1100px) {
    font-size: 25px;
  }

  @media (min-width: 1100px) and (max-width: 1233px) {
    font-size: 27px;
  }
`

export const BlueSectionDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
  width: 80%;
  padding-top: 35px;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`


export const GiftGivenSection = styled.div`
  display: flex;
  gap: 70px;
  padding-top: 20px;

  @media (max-width: 500px) {
    flex-flow: wrap;
    gap: 35px;
  }
`

export const PartnersCount = styled.p`
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 600;
`

export const PartnersText = styled.p`
  color:#FFFFFF;
  font-size: 14px;
  font-weight: 600;
`

export const GiftSection = styled.div`

`

export const PartnersSection = styled.div`
`

export const GiftGivenCount = styled.p`
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 600;
`

export const GiftGivenTxt = styled.p`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;

  @media (min-width: 500px) and (max-width: 550px){
    width: 85px;
  }

  @media (min-width: 768px) and (max-width: 790px) {
    width: 85px;
  }

  @media (min-width: 992px) and (max-width: 1127px) {
    width: 85px;
  }
`

export const CongratulateCount = styled.p`
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 600;
`

export const CongratulateTxt = styled.p`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;

  @media (min-width: 992px) and (max-width: 1127px) {
    width: 189px;
  }
`

export const GiftSVG = styled.img`
  width: 40%;
  margin: 40px auto;
`

export const CloseSVGAction = styled.a`
  cursor: pointer;
`

export const CloseSVG = styled.img`
  width: 10%;
  color: white;
  font-weight: bold;
`

// END BLUE SECTION


export const PartnersCardsTxt = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: #0B0023;
  padding-top: 20px;
`

export const PartnersCardContainer = styled.div`
  border: 1px solid #ecebec;
  border-radius: 24px;
  padding: 31px;

  @media (min-width: 768px) and (max-width: 992px) {
    padding: 14px;
  }

  @media (max-width:500px) {
    margin: 20px;
  }
`

export const PartnersCardImage = styled.img`
  width: 55%;
  border-radius: 15%;
  margin: 0 auto;
`

export const PartnersCardTitle = styled.p`
  font-size: 24px;
  padding-top: 10px;
  color: #110035;
  font-weight: 600;
  text-align: center;
`

export const LoadingTxt = styled.p`
  font-size: 16px;
  padding-top: 70px;
  padding-bottom: 70px;
  font-weight: 600;
  color: #3800B0;
  text-align: center;
`