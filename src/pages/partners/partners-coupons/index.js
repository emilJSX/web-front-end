import { Grid, Input } from "@mantine/core";
import {React, useState} from "react";
import { BsSearch } from "react-icons/bs";
import {AiOutlineClose} from 'react-icons/ai'
import gift from '../../../style/icons/giftpartners.svg'
import close from '../../../style/icons/closebluesection.svg'
import { Tab, TabPanel, Tabs } from "react-tabs";
import { CongratulateSection } from "../partners-page/PartnersPage.styled";
import { BlueMainSection, BlueSectionDescription, BlueSectionText, CloseSVG, CloseSVGAction, CongratulateCount, CongratulateTxt, GiftGivenCount, GiftGivenSection, GiftGivenTxt, GiftSection, GiftSVG, InputNearTabs, LoadingTxt, PartnersCardContainer, PartnersCardImage, PartnersCardsTxt, PartnersCardTitle, PartnersCount, PartnersMainContainer, PartnersManagment, PartnersSection, PartnersText, PartnersTxt, SeacrhIconContainer, TabsInputDiv, TabsMainContainer } from "./PartnersCoupons.styled";
import { PartnersInfo } from "./PartnersData";
import { Component } from "react";
import { PartnersInfoTwo } from "./PartnersCardTwoTest";


class Partners extends Component {
    constructor(props) {
        super(props)
        this.state = {isClose: false}
        this.onToggle = this.onToggle.bind(this)
    }

    onToggle(e) {
        this.setState({isClose: !this.state.isClose})
    }
    render() {

        return (
            <PartnersMainContainer fluid>
                <PartnersManagment>Main {">"} Partners</PartnersManagment>
                <PartnersTxt>Partners</PartnersTxt>
    
                <Tabs defaultValue="all">
                <Grid className="tab-search-mobile">
                    <Grid.Col md={6}>
                        <TabsMainContainer >
                            <Tab value="all"><button className='editing-buttons'>All</button></Tab>
                            <Tab value="travel"><button className='editing-buttons'>Travel</button></Tab>
                            <Tab value="sport"><button className='editing-buttons'>Sport</button></Tab>
                            <Tab value="gadgets"><button className='editing-buttons'>Gadgets</button></Tab>
                            <Tab value="foto-video"><button className='editing-buttons'>Foto & Video</button></Tab>
                            <Tab value="clothes"><button className='editing-buttons'>Clothes</button></Tab>
                        </TabsMainContainer>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <SeacrhIconContainer>
                            <InputNearTabs className="search-icon-section" placeholder="Search by partners" />
                            <a href="#"><BsSearch className="search-icon" /></a>
                        </SeacrhIconContainer>
                    </Grid.Col>
                </Grid>
                <BlueMainSection style={{ display: this.state.isClose ? "none" : "block"}}>
                    <Grid className="grid-blue-section">
                        <Grid.Col md={7}>
                            <BlueSectionText>Our partners give coupons for holidays and birthdays</BlueSectionText>
                            <BlueSectionDescription>Select the categories you are interested in in your personal account and get cool coupons.</BlueSectionDescription>
                            <GiftGivenSection>
                                <PartnersSection>
                                    <PartnersCount>30+</PartnersCount>
                                    <PartnersText>Partners</PartnersText>
                                </PartnersSection>
    
                                <GiftSection>
                                    <GiftGivenCount>54 540</GiftGivenCount>
                                    <GiftGivenTxt>Gifts given</GiftGivenTxt>
                                </GiftSection>
    
                                <CongratulateSection>
                                    <CongratulateCount>1 250</CongratulateCount>
                                    <CongratulateTxt>People was congratulated</CongratulateTxt>
                                </CongratulateSection>
                            </GiftGivenSection>
                        </Grid.Col>
                        <Grid.Col md={5}>
                            <CloseSVGAction onClick={this.onToggle}> <AiOutlineClose className="close-blue" src={close}/> </CloseSVGAction>
                            <GiftSVG src={gift}/>
                        </Grid.Col>
                    </Grid>
                </BlueMainSection>
    
                <PartnersCardsTxt>Partners</PartnersCardsTxt>
    
                    <TabPanel value="all">
                        <Grid>
                            {PartnersInfo.data.map(({ url, title }) => (
                                <Grid.Col sm={4} lg={3} xl={3} md={3}>
                                    <PartnersCardContainer>
                                        <PartnersCardImage src={url} />
                                        <PartnersCardTitle>{title}</PartnersCardTitle>
                                    </PartnersCardContainer>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </TabPanel>
                    <TabPanel value="travel">
                        <Grid>
                            {PartnersInfoTwo.data.map(({ url, title }) => (
                                <Grid.Col md={3}>
                                    <PartnersCardContainer>
                                        <PartnersCardImage src={url} />
                                        <PartnersCardTitle>{title}</PartnersCardTitle>
                                    </PartnersCardContainer>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </TabPanel>
                    <TabPanel value="sport">
                        <Grid>
                            {PartnersInfo.data.map(({ url, title }) => (
                                <Grid.Col md={3}>
                                    <PartnersCardContainer>
                                        <PartnersCardImage src={url} />
                                        <PartnersCardTitle>{title}</PartnersCardTitle>
                                    </PartnersCardContainer>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </TabPanel>
                    <TabPanel value="gadgets">
                        <Grid>
                            {PartnersInfoTwo.data.map(({ url, title }) => (
                                <Grid.Col md={3}>
                                    <PartnersCardContainer>
                                        <PartnersCardImage src={url} />
                                        <PartnersCardTitle>{title}</PartnersCardTitle>
                                    </PartnersCardContainer>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </TabPanel>
                    <TabPanel value="foto-video">
                        <Grid>
                            {PartnersInfo.data.map(({ url, title }) => (
                                <Grid.Col md={3}>
                                    <PartnersCardContainer>
                                        <PartnersCardImage src={url} />
                                        <PartnersCardTitle>{title}</PartnersCardTitle>
                                    </PartnersCardContainer>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </TabPanel>
                    <TabPanel value="clothes">
                        <Grid>
                            {PartnersInfoTwo.data.map(({ url, title }) => (
                                <Grid.Col md={3}>
                                    <PartnersCardContainer>
                                        <PartnersCardImage src={url} />
                                        <PartnersCardTitle>{title}</PartnersCardTitle>
                                    </PartnersCardContainer>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </TabPanel>
                </Tabs>
    
                <LoadingTxt>Loading</LoadingTxt>
    
            </PartnersMainContainer>
        )
    }
}

export default Partners;