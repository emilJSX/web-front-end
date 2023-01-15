import styled from "styled-components";

export const Wrapper = styled.div`
background: #FFFFFF;
border: 1px solid #EBE5F7;
border-radius: 24px;

.image-container{

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

   .image-background {
      position: absolute;
      height: 100%;
      width: 100%;
      opacity: 0.5;
      background: black;
      z-index: 1;
      display:flex;
      justify-content: center;
      align-items:center;
      border-radius: 24px;
      visibility: hidden;
    }

        .congralute-button{
          position: absolute;
          width: 50%;
          height: 60px;
          background: white;
          z-index: 2;
          border: 0;
          border-radius: 8px;
          visibility: hidden;
          
          &:hover{
            background: #EBE5F7;
            box-shadow: 0px 5px 10px 2px rgba(10, 10, 10, 10);
          }
        }
    }

}

`
export const ImgWrapper = styled.img`
height: 255px;
width: 100%;
border-radius: 24px;
object-fit: cover;
`
export const ContentWrapper = styled.div`
padding: 30px;
`

export const Title = styled.h5`
font-size: 20px;
color: #110035;
`
export const UserWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 20px 0px 10px 0px;
`
export const UserAbout = styled.div``
export const UserName = styled.h6`
font-weight: 600;
font-size: 14px;
`
export const UserDesc = styled.p`
color: #110035;
font-weight: 400;
font-size: 13px;
opacity: 0.72;
`
export const UserPhoto = styled.img`
border-radius: 24px;
width: 40px;
height: 40px;
`

export const PriceWrapper = styled.div``
export const Prices = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: #110035;
opacity: 0.72;
font-weight: 400;
font-size: 13px;
`
export const LeftPrice = styled.p``
export const RightPrice = styled.p``

export const ProgressWrapper = styled.div`
margin: 16px 0px;
`
