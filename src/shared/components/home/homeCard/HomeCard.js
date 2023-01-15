import React from "react";
import { Progress } from "@mantine/core";
import {
  Wrapper,
  ImgWrapper,
  ContentWrapper,
  Title,
  UserWrapper,
  UserAbout,
  UserName,
  UserDesc,
  UserPhoto,
  PriceWrapper,
  Container,
  Prices,
  LeftPrice,
  RightPrice,
  ProgressWrapper
} from "./HomeCard.styled";

const HomeCard = () => {
  return (
    <Wrapper>
      <ImgWrapper src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQw-hlv7i310uSbfkX1uRviUJbSu4KLjESSw&usqp=CAU"></ImgWrapper>
      <ContentWrapper>
        <Title>Light, fluffy, delicious red velvet donuts.</Title>
       
        <UserWrapper>
          <UserAbout>
            <UserName>Wade Warren</UserName>
            <UserDesc>for birthday on 25 Nov 2022</UserDesc>
          </UserAbout>
          <UserPhoto src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQw-hlv7i310uSbfkX1uRviUJbSu4KLjESSw&usqp=CAU"></UserPhoto>
        </UserWrapper>

        <PriceWrapper>
          <ProgressWrapper>
            <Progress size="sm" sections={[{ value: 50, color: "#3800B0" }]} />
          </ProgressWrapper>
          <Prices>
            <LeftPrice>$2,542 raised</LeftPrice>
            <RightPrice>$8,558 left</RightPrice>
          </Prices>
        </PriceWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HomeCard;
