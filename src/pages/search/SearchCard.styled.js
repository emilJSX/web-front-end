import styled from "styled-components";

export const GridBody= styled.div`

  .griddiv{
    width: 80%;
    margin: 58px auto; 
  }

  @media (min-width: 1200px) and ()
  
  .griddivwish{
    width: 80%;
    margin: 58px auto 0 auto;
     
    @media(max-width: 1605px){
      width: 85%;
    }

    @media(max-width: 1500px){
      width: 88%;
    }

    @media(max-width: 1300px){
      width: 90%;
    }
  }
  .check{
    float:right;
    color: #1A76F2; 
    font-size:17px;
    margin:4px;
}
  @media (min-width: 375px) and (max-width: 420px){
  
    margin: 0;

    
    .griddiv{
      width: 344px;
      margin: 35px auto;
    }
    .gridcol{
      margin:0;
      width: 164px;
      padding: 0;
    }
    .check{
      float:right;
      color: #1A76F2; 
      font-size:15px;
      margin: 0;
  }
  }
  `
  export const Wrapper = styled.div`
   background: #FFFFFF;
   border: 1px solid #EBE5F7;
   border-radius: 24px;

   width: 23%;
   min-width: 230px;
   margin: 5px auto;
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
@media (min-width: 375px) and (max-width: 420px){

  width:164px;
  
  margin: 40px auto 0 auto;
  float: left;
}


`
export const ImgWrapper = styled.img`
height: 321px;
width: 100%;
object-fit: cover;
border-radius: 24px;
@media (min-width: 375px) and (max-width: 420px){
  width:164px;
  height:164px;
  border-radius: 16px;
`
export const ContentWrapper = styled.div`
padding: 30px;
@media (min-width: 375px) and (max-width: 420px){
  width: 100%;
  height:100%;
  padding: 16px;
}
`

export const Titles = styled.h5`
font-size: 20px;
color: #110035;
@media (min-width: 375px) and (max-width: 420px){
   font-size: 14px;
   width:132px;
   margin: 16px auto 0 auto  
}
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
@media (min-width: 375px) and (max-width: 420px){
  font-size: 12px;
}
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
export const Loading = styled.p`
display: none;
@media (min-width: 375px) and (max-width: 420px){
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  font-family: sans-serif;
  line-height: 130%;
  letter-spacing: 0.01em;
  color: #3800B0;
  margin-bottom: 40px;

}
`
