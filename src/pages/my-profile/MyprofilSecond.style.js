import styled from "styled-components";

export const Seconddiv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;

  @media (max-width: 420px) {
    display: block;
  }
`;
export const Views = styled.p`
  width: 33.3%;
  height: 46px;

  text-align: start;
  font-size: 24px;
  font-weight: 600;

  .title {
    font-size: 12px;

    @media (max-width: 583px) {
      font-size: 10px;
    }
  }

  @media (max-width: 680px) {
    font-size: 20px;
  }

  @media (max-width: 583px) {
    font-size: 18px;
  }

  @media (max-width: 420px) {
    display: none;
  }
`;
export const Lastdiv = styled.div`
  width: 90%;
  height: 56px;
  display: flex;
  background: #2d008d;
  border-radius: 8px;

  @media (max-width: 570px) {
    height: 100%;
  }

  .star-card {
    font-size: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    width: 10%;
    justify-content: center;

    @media (max-width: 600px) {
      width: 20% !important;
    }
  }
`;
export const Targets = styled.p`
  width: 50%;
  height: 100%;
  display: flex;
 
  align-items: center;
  color: #ebe5f7;
  font-size: 14px;
  padding-right: 15px;

  @media (max-width: 680px) {
    display: none;
  }
`;
export const Raised = styled.p`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  color: #00ff9e;
  font-size: 14px;

  @media (max-width: 680px) {
    width: 90%;
    display: flex;
    justify-content: center;
  }
`;
export const CardSecond = styled.div`
  margin-top: 24px;
  width: 772px;
  height: 186px;
  background: white;
  border: 1px solid #ebe5f7;
  border-radius: 24px;

  @media (max-width: 1150px) and (min-width: 992px) {
    width: 100%;
  }

  @media (max-width: 992px) {
    width: 772px;
  }

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 350px;
    border-radius: 16px;
  }
`;
export const Hood = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  .coffee-icon {
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    width: 91%;
    height: 62px;
    border-radius: 16px;
  }
`;
export const Parag = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: revert;
  text-align: start;
  width: 10%;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 420px) {
    display: none;
  }
`;

export const Parag1 = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: revert;
  text-align: start;
  width: 35%;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 420px) {
    display: none;
  }
`;

export const Photo = styled.img`
  width: 4%;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
`;

export const Person = styled.p`
  width: 32%;
  height: 20px;
  color: #0c0e19;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
`;
export const Parags = styled.p`
  width: auto;
  height: 20px;
  margin-top: 2px;
  float: right;
  font-size: 14px;
  font-weight: 500;
  font-family: revert;

  @media (max-width: 480px) {
    float: left;
    margin-top: 7px;
    margin-right: 43px;
    display: none;
  }
`;
export const Titles = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  width: 100%;
  height: 50px;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #1a1c29;

  @media (max-width: 480px) {
    width: 290px;
    height: 24px;
    margin: 42px 16px 0 23px;
  }
`;
export const Third = styled.div`
  width: 100%;
  height: 24px;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 20px;

  @media (max-width: 480px) {
    width: 85%;
    height: 71px;
    border-radius: 16px;
    margin: 16px 16px 0 26px;
  }
`;
export const Pass = styled.a`
  margin-top: 2px;
  float: right;
  color: #3800b0;
  font-weight: 600;
  font-size: 12px;

  @media (max-width: 480px) {
    margin-right: -10px;
    margin-top: 40px;
  }
`;
export const CardLonger = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px 72px 48px auto;
  max-width: 520px;

  @media (max-width: 992px) {
    margin: 48px auto;
  }
`;
export const NotWishes = styled.p`
  font-weight: 600;
  font-size: 30px;
  color: #6033c0;
  text-align: center;
  margin-bottom: 8px;
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;
export const Buttonleft = styled.button`
  background: #3800b0;
  border-radius: 8px;
  text-align: center;
  color: white;
  font-size: 14px;
  margin-right: 34px;
  padding: 16px 24px;
`;
export const Buttonright = styled.button`
  border-radius: 8px;
  text-align: center;
  color: #3800b0;
  border: 1px solid #3800b0;
  font-size: 14px;
  padding: 16px 24px;
`;
export const Glasses = styled.img`
  width: 262px;
  margin-top: 24px;
  align-self: center;
`;

export const Division = styled.div`
  margin-top: 24px;
  width: 98%;
  height: 100%;
  border-radius: 24px;
  margin-bottom: 109px;
  @media (max-width: 480px) {
    width: 343px;
    height: 144px;
    border-radius: 16px;
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
  font-family: "Steppe";
  text-align: start;
  margin-bottom: 24px;
`;
export const Picture = styled.img`
  width: 80px;
  height: 80px;
  text-align: start;
  border-radius: 50%;
  display: block;
`;
export const Name = styled.p`
  width: 177px;
  height: 28px;
  font-size: 20px;
  font-weight: 600;
  font-family: "Steppe";
  text-align: center;
  margin-top: 24px;
  margin-bottom: 4px;
  display: block;
`;
export const Tag = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: "Steppe";
  text-align: center;
  display: block;
`;

export const DisplayOnButtonText = styled.p`
  display: none;
  height: 45px;
  padding-top: 10px;
  width: 100%;

  @media (max-width: 420px) {
    display: block;
    padding-left: 20px;
    font-size: 11px;
  }
`;

export const Paragraf = styled.p`
  width: auto;
  height: 20px;
  float: left;
  font-size: 14px;
  font-weight: 500;
  font-family: revert;
  text-align: start;
  @media (max-width: 480px) {
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
        margin-left: -4px;
    }
`;

export const DisplayTopText = styled.p`
  color: #0c0e19;
  font-size: 14px;
  display: none;

  @media (max-width: 420px) {
    display: block;
    margin-top: 5px;
  }
`;

export const DisplayBirthdaytext = styled.p`
  display: none;

  @media (max-width: 420px) {
    color: grey;
    font-size: 13px;
    display: block;
    padding: 7px;
  }
`;

export const DisplayTime = styled.p`
  display: none;

  @media (max-width: 420px) {
    display: block;
    font-size: 13px;
    color: grey;
    margin: -1px 6px;
  }
`;

export const DisplayTopImgCard = styled.div`
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    height: 60px;
  }
`;
