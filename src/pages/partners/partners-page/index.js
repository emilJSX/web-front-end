import React from "react";
import macfoto from '../../../style/icons/macbigfotopartners.png'
import maclittle from '../../../style/icons/maclittlepng.png';
import { CardDataContainer, CardDataMainDiv, CongratulateCount, CongratulateSection, CongratulateTxt, GiftGivenCount, GiftGivenSection, GiftGivenTxt, GiftsCongratulateSection, IconsSection, MacBigFotoSection, McDonaldsImg, McDonaldsTopTxt, McDondaltsTxtImgSection, Name, PartnersPageContainer, PartnersPageManagment, Picture, RecentlyGivenCouponsTxt, Tag, Text, TextCounsIconsSection } from "./PartnersPage.styled";
import { Grid } from "@mantine/core";
import { HiBadgeCheck, HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
import { BsFacebook, BsTwitter, BsWhatsapp, BsTelegram } from 'react-icons/bs';
import { Carddata } from "./CardData";
import { MdVerified } from "react-icons/md";

const PartnersPage = () => {
    return (
        <PartnersPageContainer>
            <MacBigFotoSection src={macfoto} />

            <PartnersPageManagment>Main {'>'} Partners {'>'} McDonalds</PartnersPageManagment>

            <McDondaltsTxtImgSection>
                <McDonaldsImg src={maclittle} />
                <McDonaldsTopTxt>McDonalds</McDonaldsTopTxt>
            </McDondaltsTxtImgSection>
            <TextCounsIconsSection>
                <Grid>
                    <Grid.Col md={6}>
                        <Text>
                            An American-based multinational fast food chain, founded in 1940 as 
                            a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States.
                        </Text>
                    </Grid.Col>
                    <Grid.Col md={4}>
                        <GiftsCongratulateSection>
                            <GiftGivenSection>
                                <GiftGivenCount>54 540</GiftGivenCount>
                                <GiftGivenTxt>Gifts given</GiftGivenTxt>
                            </GiftGivenSection>

                            <CongratulateSection>
                                <CongratulateCount>1 250</CongratulateCount>
                                <CongratulateTxt>Congratulates</CongratulateTxt>
                            </CongratulateSection>
                        </GiftsCongratulateSection>
                    </Grid.Col>
                    <Grid.Col md={2}>
                        <IconsSection>
                            <BsFacebook style={{ color: '#3800B0' }} />
                            <BsTwitter style={{ color: '#3800B0' }}  />
                            <BsTelegram style={{ color: '#3800B0' }}  />
                            <BsWhatsapp style={{ color: '#3800B0' }}  />
                        </IconsSection>
                    </Grid.Col>
                </Grid>
            </TextCounsIconsSection>

            <RecentlyGivenCouponsTxt>Recently given coupons</RecentlyGivenCouponsTxt>
                <CardDataMainDiv>
                    <Grid>
                        {Carddata.usersdata.map(({ picture, title, tag })=> (
                            <Grid.Col sm={4} md={3} lg={3}>
                                <CardDataContainer>
                                    <Picture src={picture} />
                                    <Name>{title} <MdVerified style={{ float: 'right', color: "#1A76F2" }} /></Name>
                                    <Tag>{tag}</Tag>
                                </CardDataContainer>
                            </Grid.Col>
                        ))} 
                    </Grid>
                </CardDataMainDiv>
        </PartnersPageContainer>
    )
}

export default PartnersPage;