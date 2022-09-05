import { Container, Grid, Image, Button, Slider, Progress } from '@mantine/core';
import '../home/Home.Styled'
import { Prices } from '../../shared/components/home/homeCard/HomeCard.styled';
import { Wrapper, ImgWrapper, Title, ContentWrapper, UserWrapper, UserAbout, UserName, UserPhoto, PriceWrapper, ProgressWrapper } from '../../shared/components/home/homeCard/HomeCard.styled';
import React from "react";
import { Body, ButtonSection, DateSection, LeftSection, CardLong, FollowersSection, Follower, Following, Details, Edit, Final, Date, DateText, Text, TagName, Firstprice, Namesurname, Imagess, LastDiv, Lastprice, Price, SosialN, Target, TargetFinal, SocialSection, Joined, UserDesc, LeftRightPriceDisplay, LeftPrice, RightPrice, MenuScrollCards, DisplayDateBirthaySection, MobileBtnSection, FotoSection, AlertImage, AlertText, Buttondiv, RaisedText, TargetText, AlertTextDesktop } from './Oup.Style'
import rainbow from './../../style/icons/rainbowfoto.png'
import estetika from '../../style/icons/estetika.png'
import tomcruse from '../../style/icons/tomcruse.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Carddata } from './CardData';
import { BsFacebook, BsTwitter, BsWhatsapp, BsInstagram, BsTelegram } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { RiLinksFill } from 'react-icons/ri';
import { HiBadgeCheck, HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
import alertimg from '../../style/icons/alert.png'
import { Lastdiv, Seconddiv, Views, Targets, Raised, CardSecond, Hood, Parag, Photo, Person, Parags, Titles, Third, Pass, CardLonger, NotWishes, Division, Maybe, Picture, Name, Tag, Buttons, Buttonleft, Buttonright, Glasses, DisplayOnButtonText, DisplayUsernameText, DisplayBirthdaytext, DisplayTime, DisplayTitle, DisplayTextToTheWish, DisplayCountLike, DisplayButtonTheWish, Paragraf, Paragrap, DisplayTopText, DisplayTopImgCard } from './Oup.Style';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiAlertTriangle } from "react-icons/fi";
import file1 from "../../style/icons/file1.png"
import { Component } from 'react';

class OtherUserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(min-width: 500px)").matches };
    }
    componentDidMount() {
        const handler = e => this.setState({ matches: e.matches });
        window.matchMedia("(min-width: 500px)").addEventListener('change', handler);
    }

    render() {
        return (
            <Body>
                <FotoSection fluid>
                    {this.state.matches && <Image id='rainbow' radius="lg" className='rainbow' src={rainbow} height={300} />}
                    {!this.state.matches && <Image id='rainbow' radius="lg" className='rainbow' src={rainbow} height={200} />}

                </FotoSection>
                <Grid className='main-grid'>
                    <Grid.Col className='col-one' span={4}>
                        <LeftSection>
                            <DisplayTopImgCard>
                                <Image radius="100px" style={{ border: '3px solid white !important;' }} id='tomcrusemobile' className="tomcrusemobile" height={85} src={tomcruse} />
                            </DisplayTopImgCard>

                            <Image radius="100px" className="tomcruse" height={85} src={tomcruse} />
                            <Namesurname>Ilya Davidov<HiBadgeCheck className='bluechek' /></Namesurname>
                            <TagName>@ cucuruz</TagName>
                            <Text>Spec, Child, Chaos and Shadow</Text>

                            <DateSection>
                                <Date>5 November 1992</Date>
                                <DateText>Birthdate</DateText>
                            </DateSection>
                            <DisplayDateBirthaySection>
                                <Date>5 Nov 1992 <DateText>Birthdate</DateText></Date>
                                <Follower>144 <DateText>followers</DateText></Follower>
                                <Following>156 <DateText>followings</DateText></Following>
                            </DisplayDateBirthaySection>
                            <FollowersSection>
                                <Follower>144 <br /> <span style={{ fontSize: "12px" }}>followers</span></Follower>
                                <Following>156 <br /> <span style={{ fontSize: "12px" }}>followings</span></Following>
                            </FollowersSection>
                            <SocialSection>
                                <BsFacebook style={{ float: "left", color: "#2D008D", fontSize: "23px", margin: "0 0 0 94px" }} />
                                <BsInstagram style={{ float: "right", color: "#2D008D", fontSize: "23px", margin: "0 94px 0 0" }} />
                            </SocialSection>
                            <ButtonSection>
                                <Button className='second-btn'>Edit</Button>
                            </ButtonSection>
                            <MobileBtnSection>
                                <Button className='follow-btn'>Follow</Button>
                                <Button className='mobile-btn'>Edit profile</Button>
                                <BsFacebook className='fb-icon' style={{ color: "#2D008D", fontSize: "23px" }} />
                                <BsInstagram className='insta-icon' style={{ color: "#2D008D", fontSize: "23px" }} />
                                <BsTelegram className='insta-icon' style={{ color: "#2D008D", fontSize: "23px" }} />
                            </MobileBtnSection>
                            <Joined>Joined November 2021 </Joined>
                            <AlertText><FiAlertTriangle className='report-img' />Report</AlertText>

                        </LeftSection>
                    </Grid.Col>

                    <Grid.Col span={8}>
                        <Tabs defaultValue="com">
                            <MenuScrollCards>
                                <div className='btn-section'>
                                    <Tab value="act" id='firsttabname' className="tabname">Active wishes <span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>4</span></Tab>
                                    <Tab variant='button' className="tabname" value="com" >Complete wishes <span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>4</span></Tab>
                                    <Tab value="con" className="tabname">Congratulations <span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>6</span></Tab>
                                </div>
                            </MenuScrollCards>
                            {/* <MenuScrollCards className="main-tab">
                                    <div className='tab-classes'>
                                        <Tab value="act" id='firsttabname' className="tabname">Active wishes <span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>4</span></Tab>
                                        <Tab value="com" className="tabname">Complete wishes<span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>4</span></Tab>
                                        <Tab value="con" className="tabname">Congratulations<span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>6</span></Tab>
                                    </div>
                                </MenuScrollCards> */}
                            <TabPanel value="act">
                                <Grid className='grid-root-active-wishes'>
                                    {(Carddata.data) ? (Carddata.data.map(({ url, title, username, userdesc, userphoto, leftprice, rightprice }) => (

                                        <Grid.Col className='col-root-cards' xs={2} sm={2} md={4} lg={4}>
                                            <Wrapper className="cart-item" onMouseOver={(e) => {
                                                e.currentTarget.setAttribute('style', 'border: 1px solid #3800B0;');
                                                e.currentTarget.children[0].children[0].setAttribute('style', 'visibility: visible');
                                                e.currentTarget.children[0].children[1].setAttribute('style', 'visibility: visible');

                                            }} onMouseOut={(e) => {
                                                e.currentTarget.setAttribute('style', 'border: 1px solid #EBE5F7;')
                                                e.currentTarget.children[0].children[0].setAttribute('style', 'visibility: hidden');
                                                e.currentTarget.children[0].children[1].setAttribute('style', 'visibility: hidden');
                                            }}>
                                                {/* <div className="image-container"> */}
                                                {/* <button className='congralute-button'>Congralute</button> */}
                                                {/* <div className="image-background"></div> */}
                                                <ImgWrapper src={url}></ImgWrapper>
                                                {/* </div> */}
                                                <ContentWrapper>
                                                    <Title>{title}</Title>

                                                    <UserWrapper>
                                                        <UserAbout>
                                                            <UserName>{username}</UserName>
                                                            <UserDesc style={{ display: 'none' }}>{userdesc}</UserDesc>
                                                        </UserAbout>
                                                        <UserPhoto src={userphoto}></UserPhoto>
                                                    </UserWrapper>

                                                    <PriceWrapper>
                                                        <ProgressWrapper>
                                                            <Progress size="sm" sections={[{ value: 50, color: "#3800B0" }]} />
                                                        </ProgressWrapper>
                                                        <Prices>
                                                            <LeftPrice>{leftprice}</LeftPrice>
                                                            <RightPrice>{rightprice}</RightPrice>
                                                        </Prices>
                                                    </PriceWrapper>
                                                </ContentWrapper>
                                            </Wrapper>
                                        </Grid.Col>
                                    ))) :

                                        (<div>
                                            <CardLonger>
                                                <NotWishes>User doesn’t have any wishes</NotWishes>
                                                <Buttons>
                                                    <Buttonleft>Create a wish</Buttonleft>
                                                    <Buttonright>Explore wishes</Buttonright>
                                                </Buttons>
                                                <Glasses src={file1} />
                                            </CardLonger>
                                        </div>
                                        )}
                                </Grid>

                            </TabPanel>

                            <TabPanel value="com">
                                <Grid className='grid-root-active-wishes'>
                                    {(Carddata.data) ? (Carddata.data.map(({ url, title, username, userdesc, userphoto, leftprice, rightprice }) => (

                                        <Grid.Col className='col-root-cards' xs={2} sm={2} md={4} lg={4}>
                                            <Wrapper className="cart-item" onMouseOver={(e) => {
                                                e.currentTarget.setAttribute('style', 'border: 1px solid #3800B0;');
                                                e.currentTarget.children[0].children[0].setAttribute('style', 'visibility: visible');
                                                e.currentTarget.children[0].children[1].setAttribute('style', 'visibility: visible');

                                            }} onMouseOut={(e) => {
                                                e.currentTarget.setAttribute('style', 'border: 1px solid #EBE5F7;')
                                                e.currentTarget.children[0].children[0].setAttribute('style', 'visibility: hidden');
                                                e.currentTarget.children[0].children[1].setAttribute('style', 'visibility: hidden');
                                            }}>
                                                {/* <div className="image-container"> */}
                                                {/* <button className='congralute-button'>Congralute</button> */}
                                                {/* <div className="image-background"></div> */}
                                                <ImgWrapper src={url}></ImgWrapper>
                                                {/* </div> */}
                                                <ContentWrapper>
                                                    <Title>{title}</Title>

                                                    <UserWrapper>
                                                        <UserAbout>
                                                            <UserName>{username}</UserName>
                                                            <UserDesc style={{ display: 'none' }}>{userdesc}</UserDesc>
                                                        </UserAbout>
                                                        <UserPhoto src={userphoto}></UserPhoto>
                                                    </UserWrapper>

                                                    <PriceWrapper>

                                                        <ProgressWrapper>
                                                            <Progress style={{ display: 'none' }} size="sm" sections={[{ value: 50, color: "#3800B0" }]} />
                                                        </ProgressWrapper>
                                                        <Buttondiv>
                                                            <span className='star-card' style={{ float: "left", fontSize: "20px" }}>✨</span>
                                                            <RaisedText>$2 542 raised</RaisedText>
                                                        </Buttondiv>
                                                        <Prices style={{ display: 'none' }}>
                                                            <LeftPrice>{leftprice}</LeftPrice>
                                                            <RightPrice>{rightprice}</RightPrice>
                                                        </Prices>
                                                    </PriceWrapper>
                                                </ContentWrapper>
                                            </Wrapper>
                                        </Grid.Col>
                                    ))) :

                                        (<div>
                                            <CardLonger>
                                                <NotWishes>User doesn’t have any wishes</NotWishes>
                                                <Buttons>
                                                    <Buttonleft>Create a wish</Buttonleft>
                                                    <Buttonright>Explore wishes</Buttonright>
                                                </Buttons>
                                                <Glasses src={file1} />
                                            </CardLonger>
                                            
                                        </div>
                                        )}
                                </Grid>
                            </TabPanel>
                            {/* <TabPanel value="con">
                                {
                                    (Carddata.data) ? (Carddata.data.map((index) => (

                                        <CardSecond>
                                            <Hood>
                                                <span style={{ float: "left", marginTop: "4px", fontSize: "16px" }}>☕</span>
                                                <Parag>$10 to</Parag>
                                                <Photo src='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/31jPSK41kEL.jpg' />
                                                <Person>{index.person}</Person>
                                                <Parag>Birthday {index.date}</Parag>
                                                <Parags>{index.time} min ago</Parags>
                                                <DisplayTopText><span style={{ color: 'grey' }}>$10 to </span> Andrew Retriver’s</DisplayTopText>
                                                <DisplayBirthdaytext>Birthday on 25 Dec 2022</DisplayBirthdaytext>
                                                <DisplayTime>2 min ago</DisplayTime>
                                            </Hood>
                                            <Titles>{index.title}</Titles>
                                            <Third>
                                                <Paragraf>22 people like this congratulation</Paragraf>
                                                <Paragrap>22 like</Paragrap>
                                                <Pass href='#'><HiArrowNarrowRight style={{ float: "left", margin: "2px 5px" }} /> To the wish</Pass>
                                            </Third>
                                        </CardSecond>
                                    ))) :
                                        (<div>
                                            <CardLonger>
                                                <NotWishes>Yo don’t have any wishes</NotWishes>
                                                <Buttons>
                                                    <Buttonleft>Create a wish</Buttonleft>
                                                    <Buttonright>Explore wishes</Buttonright>
                                                </Buttons>
                                                <Glasses src={file1} />
                                            </CardLonger>
                                            <Division>
                                                <Maybe>Maybe you know  <HiArrowNarrowRight style={{ float: "right", fontSize: "20px", color: "#3800B0" }} /><HiArrowNarrowLeft style={{ float: "right", fontSize: "20px", color: "#3800B0" }} /></Maybe>
                                                <Swiper
                                                    slidesPerView={4.5}
                                                    spaceBetween={16}
                                                    slidesPerGroup={5}
                                                    loop={true}
                                                    loopFillGroupWithBlank={true}
                                                    modules={[Pagination, Navigation]}
                                                    className="mySwiper"
                                                >
                                                    {
                                                        Carddata.popular.map((index) => (
                                                            <SwiperSlide>
                                                                <Picture src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5ODc1NTM4NjMyOTc2Mzcz/gettyimages-693134468.jpg" />
                                                                <Name>{index.title}<HiBadgeCheck style={{ color: "blue", margin: "2px 0 0 5px", float: "right" }} /></Name>
                                                                <Tag>{index.time}</Tag>
                                                            </SwiperSlide>
                                                        ))
                                                    }

                                                </Swiper>
                                            </Division>
                                        </div>
                                        )

                                }
                            </TabPanel> */}
                        </Tabs>
                    </Grid.Col>
                </Grid>
            </Body>
        )
    }
}

export default OtherUserProfile;