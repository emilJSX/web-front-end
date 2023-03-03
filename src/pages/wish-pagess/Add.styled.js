import styled from "styled-components";

export const Right_blue_div = styled.div`

  width: 100%;
  height: 570px;
  background: white;
  border-radius: 24px;
  margin-top: 24px;

  .give {
    color: #8E93AF;
  }

  .title {
    float: left;
    font-family: 'Steppe';
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    margin-left: 12px;
  }

  .minago {
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 140%;
    color: #8E93AF;
    float: right;
    margin-left: auto;
  }
`;

export const Right_blue_bottom = styled.div`

  width: 85.58%;
  //height: 284px;
  border-radius: 24px;
  margin: 24px 48px 40px 48px;
  float: right;

  @media (max-width: 450px) {
    width: 100%;
    //width: 99.58%;
    height: auto;
    //height: 287px;
    border-radius: 24px;
    //margin: -9px 1px 40px 29px;
    margin: 24px 0;
    //float: right;
  }

  .twofive {
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    color: #6033C0;
    float: right;

    @media (max-width: 450px) {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #6033C0;
      padding-right: 12px;
      float: right;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 20px;
      }
    }
  }

  .like {
    float: right;
    margin-left: 8px;
  }
`;
export const Paragraph = styled.p`

  width: 86.64%;
  font-family: 'Steppe';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #1A1C29;
  float: left;

  @media (max-width: 450px) {
    width: 83.64%;
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    padding-left: 24px;
    color: #1A1C29;
    float: left;
  }

`;

export const Photoone = styled.img`
  max-width: 100px;
  height: 80px;
  border-radius: 8px;
  margin: 0 6px;
`
export const Phototwo = styled.img`
  max-width: 120px;
  height: 80px;
  border-radius: 8px;
  margin: 0 6px;
`;
export const Blue_right_div = styled.div`

  //width: 66.6%;
  //height: 72px;
  float: left;
  margin: 48px 0 48px 48px;

  @media (max-width: 450px) {
    margin: 26px -16px 49px 15px;
    float: none;
  }

  @media (min-width: 1200px) and (max-width: 1700px) {
    margin: 30px 0 48px 30px;
  }

  .praise {
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #00FF9E;
    float: left;
  }

  .hundred {
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    margin-left: 16px;
    margin-top: 2px;
    color: white;
    float: left;
  }

  .bradley {
    float: left;
    display: block;
    color: white;
    height-line: 140%;
    font-size: 14px;
    margin-top: 12px;
    width: 70%;
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;

    @media (max-width: 450px) {
      width: 90%;
    }
  }
`;
export const Blue_left_div = styled.p`

  //width: 26%;
  //height: 72px;
  //float: left;
  margin: 38px 32px 48px 0;
  padding-left: 25px;
  font-size: 69px;
`;

export const Right_three_div = styled.div`

  width: 100%;
  height: 297px;
  background: white;
  border-radius: 24px;
  margin-top: 24px;
`;
export const Time_div = styled.div`

  width: 120%;
  //height: 45px;
  margin: 40px 22px 40px 48px;

  @media (max-width: 450px) {
    margin: 2px 11px 40px 25px;
  }

  @media (min-width: 1260px) and (max-width: 1355px) {
    margin: 37px 22px 39px 6px;
  }


`;
export const Time_div_p = styled.p`

  font-family: 'Steppe';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 80%;
  text-align: start;
  color: #0C0E19;
  margin-right: 48px;
  display: inline-block;
  @media (max-width: 450px) {
    padding-top: 25px;
  }

  .bottomword {
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 130%;
  }

  .dot {
    color: #B5BAD5;
    margin: 0 2px;
  }
`;

export const Right_blue_four = styled.div`

  width: 100%;
  //height: 362px;
  background: white;
  border-radius: 24px;
  margin-top: 24px;
`;
export const Send_div = styled.div`

  border-radius: 8px;
  padding: 24px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 450px) {
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SendDivButton = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  margin-right: 16px;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  
  span {
    position: absolute;
    top: -4px;
    right: -4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ECEEF7;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .trashone {
   
  }
`

export const Send_div_photo = styled.div`

  background: #F7F8FA;
  border-radius: 8px;
  z-index: 0;
  display: flex;
  align-items: center;
  width: max-content;

  .imgicon {
    font-size: 14px;
    margin: 21px 8px 21px 14px;
    color: #3800B0;
    //float: left;
  }

  .attach {
    font-family: 'Steppe';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 130%;
    color: #3800B0;
    margin: 21px 21px 21px 0;
    //float: left;
    z-index: 0;


  }
`;

export const Button_send = styled.button`
  border-radius: 8px;
  background: #3800B0;
  height: 56px;
  padding: 0 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0.01em;
  font-feature-settings: 'liga' off;
  color: #FFFFFF;
  
  @media (max-width: 450px) {
    margin-top: 16px;
  }
`