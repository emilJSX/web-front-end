import { Grid, Image, Button, Slider, Loader } from '@mantine/core';
import React, { useEffect, useState } from "react";
import { Body, ButtonSection, DateSection, LeftSection, CardLong, FollowersSection, Follower, Following, Details, Edit, Final, Date, DateText, Text, TagName, Firstprice, Namesurname, Imagess, LastDiv, Lastprice, Price, SosialN, Target, TargetFinal, Title, SocialSection, Joined, UserDesc, LeftRightPriceDisplay, LeftPrice, RightPrice, MenuScrollCards, DisplayDateBirthaySection, MobileBtnSection, FotoSection, MenuScrollCardsDesktop, MobileTopCoverImageSection, ShowBirtdayInWish } from './MyProfile.style'
import estetika from '../../style/icons/estetika.png'
import tomcruse from '../../style/icons/tomcruse.png'
import { Tab, Tabs, TabPanel } from 'react-tabs';
import { Carddata } from './CardData';
import { BsFacebook, BsTwitter, BsWhatsapp, BsTelegram } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { RiLinksFill } from 'react-icons/ri';
import { HiBadgeCheck, HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
import { 
    Lastdiv, 
    Seconddiv, 
    Views, 
    Targets, 
    Raised, 
    CardSecond,
    Hood, 
    Parag, 
    Parag1,
    Photo, 
    Person,
    Parags, 
    Titles, 
    Third, 
    Pass, 
    CardLonger, 
    NotWishes, 
    Division,
    Maybe, 
    Picture,
    Name,
    Tag,
    Buttons,
    Buttonleft,
    Buttonright,
    Glasses,
    DisplayOnButtonText,
    DisplayBirthdaytext,
    DisplayTime,
    Paragraf,
    Paragrap,
    DisplayTopText,
    DisplayTopImgCard } from './MyprofilSecond.style';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import file1 from "../../style/icons/file1.png"
import { Component } from 'react';
import instagram from '../../style/icons/instagram.svg'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';




const MyProfile = () => {
    const [wait, setWait] = useState(true)
    const [UserInfoProfile, setUserInfoProfile] = useState()
    const [getJoined, setJoined] = useState()
    var testNumber = 1222
    var tabs_storage = [
        { value: 'act', id: '1', className: 'tabnameSelected tabButton', title: 'Active wishes', spanTitle: UserInfoProfile?.wishes?.active?.length},
        { value: 'com', id: '2', className: 'tabname tabButton', title: 'Complete wishes', spanTitle: UserInfoProfile?.wishes?.complete?.length },
        { value: 'con', id: '3', className: 'tabname tabButton', title: 'Congratulations', spanTitle: '0' }
    ];



    
    
    //     const handler = e => this.setState({ matches: e.matches });
    //     window.matchMedia("(min-width: 500px)").addEventListener('change', handler);
    const getUserToken = localStorage.getItem("UserToken=")
    
    useEffect(() => {
        axios.get("https://api.wishx.me/api/v1/user", {
            headers: {
                'Authorization': `Bearer ${getUserToken}`,
                'Access-Control-Allow-Origin' : "*"
                }
            }).then((userData) => {
                const UserInfoProfile = userData.data.data
                setUserInfoProfile(UserInfoProfile)
                axios.get("https://api.wishx.me/api/v1/user/other", {
                    params: {
                        user_id: userData.data.data.user_id
                    },
                        headers: {
                            'Authorization': `Bearer ${getUserToken}`,
                            'Access-Control-Allow-Origin' : "*"
                        }
                    }).then((getJoinedData) => {
                        setJoined(getJoinedData.data.data.info.joined)
                    })
                }).catch((err)=> {
                    console.log(err)
                })
                
                axios.get("https://api.wishx.me/api/v1/wish/get", {
                    headers: {
                        'Authorization': `Bearer ${getUserToken}`,
                        'Access-Control-Allow-Origin' : "*"
                }        
            }).then((dataUserWish) => {
                const getUserWishes = dataUserWish.data.data
                setUserInfoProfile(getUserWishes)
            })
            
        }, [])
        
        var navigate = useNavigate()
        
        function getWishesListRoute() {
            navigate('/wish-list')
        }

        function getWishIdEdit(wish_id) {
            const GetProfileWishId = wish_id
            navigate('/wish-edit', {state: GetProfileWishId})
        }
        
        const getWithProfileToEdit =()=> {
            navigate('/profile-edit')
        }
        
        function getContactsFollowsPage() {
            navigate("/contacts-profile")
    }

    function getWishIdForResultPage(id) {
        navigate("/my-wish", {state: {id}})
    }

        return (
            <Body>
                <div className='main-container'>
                    <div>
                        <FotoSection fluid>
                        <img id='rainbow' radius="lg" className='rainbow' src={estetika} height={300} />
                            {/* {this.state.matches && <Image id='rainbow' radius="lg" className='rainbow' src={estetika} height={300} />} */}
                            {/* {!this.state.matches && <Image id='rainbow' radius="lg" className='rainbow' src={estetika} height={300} />} */}
                        </FotoSection>
                    </div>
                    <Grid className='main-grid'>

                        <Grid.Col className='col-one' xl={3} lg={3} md={3} sm={12} xs={12}>
                            <div className='leftsection-style'>
                                <MobileTopCoverImageSection>
                                    <img id='rainbow' radius="lg" className='rainbow' src={estetika} height={300} />
                                </MobileTopCoverImageSection>
                                <LeftSection>
                                    <DisplayTopImgCard>
                                        <Image radius="100px" style={{ border: '3px solid white !important;' }} id='tomcrusemobile' className="tomcrusemobile" height={85} src={`https://api.wishx.me/${UserInfoProfile?.info?.avatar}`} />
                                    </DisplayTopImgCard>
                                    
                                    <Image radius="100px" className="tomcruse" height={80} src={UserInfoProfile?.info?.avatar == null ? "https://cdn-icons-png.flaticon.com/512/1144/1144760.png" :  `https://api.wishx.me/${UserInfoProfile?.info?.avatar}`} />
                                    <Namesurname>{UserInfoProfile?.info?.full_name == null ? "Does not exist" : UserInfoProfile?.info?.full_name}</Namesurname> 
                                    {/* <HiBadgeCheck className='bluechek' /> */}
                                    <TagName>@ {UserInfoProfile?.info?.slug == null ? "Does not exist" : UserInfoProfile?.info?.slug}</TagName>
                                    <Text>Spec, Child, Chaos and Shadow</Text>

                                    <DateSection>
                                        <Date>{UserInfoProfile?.info?.dob == null ? "Does not exist" : UserInfoProfile?.info?.dob }</Date>
                                        <DateText>Birthdate</DateText>
                                    </DateSection>
                                    <DisplayDateBirthaySection>
                                        <Date>{UserInfoProfile?.info?.dob == null ? "Does not exist" : UserInfoProfile?.info?.dob} <DateText>Birthdate</DateText></Date>
                                        <Follower onClick={getContactsFollowsPage}>{UserInfoProfile?.contacts?.followers} <DateText>followers</DateText></Follower>
                                        <Following onClick={getContactsFollowsPage}>{UserInfoProfile?.contacts?.follows} <DateText>followings</DateText></Following>
                                    </DisplayDateBirthaySection>
                                
                                    <FollowersSection>
                                        <Follower onClick={getContactsFollowsPage}>{UserInfoProfile?.contacts?.followers} <br /> <span style={{ fontSize: "12px" }}>followers</span></Follower>
                                        <Following onClick={getContactsFollowsPage}>{UserInfoProfile?.contacts?.follows}  <br /> <span style={{ fontSize: "12px" }}>followings</span></Following>
                                    </FollowersSection>
                                    <SocialSection>
                                        <a href={UserInfoProfile?.social?.facebook} target="_blank"><BsFacebook style={{
                                            color: "#2D008D", fontSize: "23px", height: '100%', display: 'flex',
                                            alignItems: 'center', marginRight: '10px', justifyContent: 'flex-end'
                                        }} /> </a>
                                        <a href={UserInfoProfile?.social?.instagram} target="_blank">
                                            <Image src={instagram} style={{
                                                color: "#2D008D", fontSize: "23px", height: '100%',
                                                display: 'flex', alignItems: 'center', marginLeft: '10px', justifyContent: 'flex-start'
                                            }} />

                                        </a>
                                    </SocialSection>
                                    <ButtonSection>
                                        <Button className='second-btn' onClick={getWithProfileToEdit}>Edit profile</Button>
                                    </ButtonSection>
                                    <MobileBtnSection>
                                        <Button className='mobile-btn' onClick={getWithProfileToEdit}>Edit profile</Button>
                                        <BsFacebook className='fb-icon' style={{ color: "#2D008D" }} />
                                        <Image src={instagram} className='insta-icon' style={{ color: "#2D008D", fontSize: "23px" }} />
                                        <BsTelegram className='insta-icon' style={{ color: "#2D008D" }} />
                                    </MobileBtnSection>
                                    <Joined>Joined {getJoined}</Joined>
                                </LeftSection>
                            </div>
                        </Grid.Col>

                        <Grid.Col xl={7} lg={7} md={7} sm={12} xs={12} className='col-two'>
                            <Tabs defaultValue="com" className='tabs'>
                                <MenuScrollCards>
                                    <div className='btn-section'>
                                        {tabs_storage.map((tab) => (<Tab value={tab.value} id={tab.id} className={tab.className} onClick={(e) => {
                                            document.querySelectorAll('.tabButton').forEach(x => x.id.includes(e.currentTarget.id) ? x.className = 'tabnameSelected tabButton' :
                                                x.className = 'tabname tabButton');
                                        }}
                                        >{tab.title}<span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>{tab.spanTitle}</span></Tab>))}
                                    </div>
                                </MenuScrollCards>

                                <TabPanel value="act" className='tab-panel'>
                                    <Grid className='cart-div'>
                                        
                                        {
                                        wait ? UserInfoProfile?.wishes?.active.length !== 0 ? UserInfoProfile?.wishes?.active?.map((userDataWish) => (
                                                <CardLong >
                                                    <div className='cont-text'>
                                                        <div className='image-container'>
                                                            <Imagess id={userDataWish.id} onClick={(e)=>getWishIdForResultPage(e.target.id)} src={`https://api.wishx.me/${userDataWish.image}`} />
                                                        </div>
                                                        <div className='other-container'>
                                                            <Title id={userDataWish.id} onClick={(e)=>getWishIdForResultPage(e.target.id)}>{userDataWish.title}</Title>
                                                            <TargetFinal><Target>Target: ${userDataWish.price}</Target><Final>Final: {userDataWish.date}</Final></TargetFinal>
                                                            <ShowBirtdayInWish>for birthday on {UserInfoProfile?.info?.dob}</ShowBirtdayInWish>
                                                            <UserDesc></UserDesc>
                                                            <Slider className='loading' defaultValue={40} disabled />
                                                            <LeftRightPriceDisplay>
                                                                <LeftPrice>${userDataWish.price}</LeftPrice>
                                                                <RightPrice>#145</RightPrice>
                                                            </LeftRightPriceDisplay>
                                                            <Price><Firstprice></Firstprice><Lastprice></Lastprice></Price>
                                                            <LastDiv>
                                                                <SosialN>
                                                                    <div style={{ color: "#3800B0", fontWeight: "bold" }}>Share</div>
                                                                    <a target="_blank" href={UserInfoProfile?.social?.facebook}>
                                                                        <BsFacebook className='Facebook' />
                                                                    </a>
                                                                    <a target="_blank" href={UserInfoProfile?.social?.twitter}>
                                                                        <BsTwitter className='twitter' />
                                                                    </a>
                                                                    <a target="_blank" href={UserInfoProfile?.social?.telegram}>
                                                                        <FaTelegram className='telegram' />
                                                                    </a>
                                                                    <a target="_blank" href={UserInfoProfile?.social?.whatsapp}>
                                                                        <BsWhatsapp className='whatsapp' />
                                                                    </a>
                                                                    <a target="_blank" href={UserInfoProfile?.social?.facebook}>
                                                                        <IoMailOutline className='mail' />
                                                                    </a>
                                                                    <a target="_blank" href={UserInfoProfile?.social?.facebook}>
                                                                        <RiLinksFill className='link' />
                                                                    </a>
                                                                </SosialN>
                                                                <div className='edit-details-btn' style={{ display: "flex"}}>
                                                                    <Edit onClick={(e) => getWishIdEdit(e.target.id)} id={userDataWish.id}>Edit</Edit>
                                                                    <Details id={userDataWish.id} onClick={(e)=>getWishIdForResultPage(e.target.id)}>Details</Details>
                                                                </div>
                                                            </LastDiv>
                                                        </div>
                                                    </div>
                                                </CardLong>
                                         ))
                                             :

                                                (<div>
                                                    <CardLonger>
                                                        <NotWishes>Yo don’t have any wishes</NotWishes>
                                                        <Buttons>
                                                            <a href='/creating-wish'><Buttonleft>Create a wish</Buttonleft></a>
                                                            <Buttonright onClick={getWishesListRoute}>Explore wishes</Buttonright>
                                                        </Buttons>
                                                        <Glasses src={file1} />
                                                    </CardLonger>
                                                    {/* <Division>
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
                                                    </Division> */}
                                                </div>
                                                ) : <Loader size="xl" />

                                        }
                                    </Grid>
                                </TabPanel>
                                <TabPanel value="com" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className='tab-panel'>
                                    {
                                        wait ? UserInfoProfile?.wishes?.complete.length !== 0 ? UserInfoProfile?.wishes?.complete?.map((userDataWish) => (

                                            <CardLong >
                                                <div className='com-cont'>
                                                    <div className='image-container-1'>
                                                        <Imagess src={`https://api.wishx.me/${userDataWish.image}`} />
                                                    </div>
                                                    <div className='content-title'>
                                                        <Title>
                                                            <p className='second-card-title'>
                                                                {userDataWish.title}
                                                            </p>
                                                        </Title>
                                                        <Seconddiv>
                                                            <Views>256 <br /><p className='title'>Views</p></Views>
                                                            <Views>8<br /><p className='title'>Gifts</p></Views>
                                                            <Views>$12 <br /><p className='title'>Avg gift amount</p></Views>
                                                        </Seconddiv>
                                                    <DisplayOnButtonText>for birthday on 25 Nov 2022</DisplayOnButtonText>
                                                    <div className='main-button'>
                                                        <Lastdiv>
                                                            <span className='star-card' style={{
                                                                fontSize: "20px", height: '100%', display: 'flex',
                                                                alignItems: 'center', width: '10%', justifyContent: 'center'
                                                            }}>✨</span>
                                                            <Raised>$2 542 raised</Raised>
                                                            <Targets>120%  of ${userDataWish.price} target</Targets>
                                                        </Lastdiv>

                                                    </div>
                                                    </div>
                                                </div>
                                            </CardLong>
                                        )) :
                                            (<div>
                                                <CardLonger>
                                                        <NotWishes>Yo don’t have any wishes</NotWishes>
                                                        <Buttons>
                                                            <Buttonleft>Create a wish</Buttonleft>
                                                            <Buttonright onClick={getWishesListRoute}>Explore wishes</Buttonright>
                                                        </Buttons>
                                                        <Glasses src={file1} />
                                                </CardLonger>
                                                {/* <Division>
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
                                                </Division> */}
                                            </div>
                                            ) : <Loader size="xl" />

                                    }
                                </TabPanel>
                                <TabPanel value="con" className='tab-panel-2'>
                                    {
                                        (Carddata.data) ? (Carddata.data.map((index) => (

                                            <CardSecond>
                                                <Hood>
                                                    <span className='coffee-icon'>☕</span>
                                                    <Parag>$10 to</Parag>
                                                    <Photo src='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/31jPSK41kEL.jpg' />
                                                    <Person>{index.person}Some Name Some Surname</Person>
                                                    <Parag1>Birthday {index.date}</Parag1>
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
                                                        <Buttonright onClick={getWishesListRoute}>Explore wishes</Buttonright>
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
                                </TabPanel>
                            </Tabs>
                        </Grid.Col>
                    </Grid>
                </div>
            </Body>
        )
    }
export default MyProfile;