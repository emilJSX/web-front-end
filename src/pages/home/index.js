import { React, useEffect, useState } from "react";
import {
  Image,
  MediaQuery,
  Menu,
  Box,
  Text,
  Grid,
  Container,
  Progress,
} from "@mantine/core";
import { Link, Navigate, Outlet, redirect, useNavigate } from "react-router-dom";
import HowItWorks from "../../shared/components/howitworks";
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
  Prices,
  LeftPrice,
  RightPrice,
  ProgressWrapper
} from "../../shared/components/home/homeCard/HomeCard.styled";
import {
  HomeCenter,
  HomeConatiner,
  HomeTop,
  GifwRAP,
  Gifname,
  GifDesc,
  GifImg,
  GridCutoms,
  GifHeader,
  WishesText,
  WishesBtn,
  CardSections,
  InsiderContainer,
  PartnersText,
  Item,
  WishCreationInput,
  WishCreationButton,
} from "./Home.Styled";
import { Carddata } from "./CardData"
import FaqSection from "../../shared/components/faq";
import { sideImages } from "../../utils/dummy-data/main-top-images";
import { Button } from "../../shared/ui/Button";
import profile_picture from '../../assets/images/ffb7d96c688377cdff8f8399e25f6508.png';
import profile_picture1 from '../../assets/images/50a8343b26e4ea599ea4c76556db95d3.png';
import icon_1 from '../../assets/images/86dd3c4e9ee1a89490042c6a4a8895fb.png';
import icon_2 from '../../assets/images/d371531b922f3e8c0e8f0dfe4782d86e.png';
import { ReactComponent as ArrowDownIcon } from "../../style/icons/button-icons/arrow-down.svg";
import { ReactComponent as FireworkIcon } from "../../style/icons/big-star.svg";
import { CustomInput } from "../../shared/ui/İnput";
import img12 from "../../assets/images/image 12.png";
import img13 from "../../assets/images/image 13.png";
import { ReactComponent as Logo } from "../../style/icons/wl.svg";
import img14 from "../../assets/images/image 14.png";
import IphoneImage from "../../assets/images/preview@1x.png"
import { CarouselPartners } from "./PartnersFoto";
import { SmSliderItem } from "./SmSliderItem";
import OwlCarousel from 'react-owl-carousel';
import Carousel from 'react-bootstrap/Carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as GridIcon } from '../../style/icons/grid-icon.svg'
import Autholog from '../../shared/LogIn-SingUp/Autholog';
import Autho from '../../shared/LogIn-SingUp/Autho'
import { HomeLoginHeader } from "../../shared/components/HeaderLogin/homeloginheader";
import HeaderShared from "../../shared/components/HeaderShared";
const Home = () => {


  
  const [modalShow, setModalShow] = useState(false);
  const [opened, setOpened] = useState(false)
  const [getWishName, setWishName] = useState("")
  const GetUserToken = localStorage.getItem("UserToken=")
  
  const navigate = useNavigate()
  
  function GetWishNameForCreation() {

    if(GetUserToken) {
      navigate('/creating-wish', {state: getWishName})
    } else if (!GetUserToken) {
      setShowes(true)
    }
  }

  useEffect(() => {

    let counter_top = 1;
    let counter_bottom = 1;

    const leftImageContainer = document.querySelector('.leftImageContainer');
    const rightImageContainer = document.querySelector('.rightImageContainer');

    const interval = setInterval(() => {

      leftImageContainer.setAttribute('style', `transform: translate(0, -${counter_top}00px)`);
      rightImageContainer.setAttribute('style', `transform: translate(0, ${counter_bottom}00px)`);

      if (counter_top < 3) {
        ++counter_top;
      }
      else {
        counter_top = 0;
      }
      if (counter_bottom < 3) {
        ++counter_bottom;
      }
      else {
        counter_bottom = 0;
      }


    }, 3000);
    return () => clearInterval(interval);

  }, []);


  const [show, setShow] = useState(false)
  const [showes, setShowes] = useState(false)

  // GET TOKEN AND LOGIN API START

// GET TOKEN AND LOGIN API END
  return (
    <>
    
      <HomeConatiner fluid p={0} style={{ overflow: 'hidden' }} className="home-container">
        <HomeTop columns={24} className="home-top">
          <HomeTop.Col lg={3} xl={3} md={3} sm={3} xs={0} className="col-left">
            <div className="leftImageContainer">
              {sideImages.left.map(({ id, url }) => (
                <Image
                  key={id}
                  className="img"
                  radius={24}
                  id={id}
                  width={252}
                  height={400}
                  src={url}
                />
              ))}
            </div>
          </HomeTop.Col>

          <HomeTop.Col
            lg={18}
            xl={18}
            md={18}
            sm={18}
            xs={24}
            className="col-center"
            style={{ overflow: 'hidden' }}
          >
          
            <div className="colCenterHeader" >
              <div id="head-logo">
                <Logo fill="#3800B0" />
                <Button variant="white">
                  <Link className="how-it-works" to="/home/how-it-works">How it works</Link>
                </Button>
              </div>
              <div id="head-center">
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                  <Box
                    sx={() => ({
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    })}
                  >
                    <GridIcon />
                    <p>All wishes</p>
                  </Box>
                </MediaQuery>
                
              </div>
              <div id="head-end">
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                  <Menu className="head-menu">
                    <Menu.Item>
                      {showes ? <Autholog setShow={setShow} setShowes={setShowes} /> : (show ? "" : <div onScroll={false} style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <Button variant="white" className="log-buttons">
                          <button onClick={
                            () => {
                              let body = document.querySelector('body');
                              body.setAttribute('style', 'overflow-y: hidden; overflow-x: hidden');
                              setShowes(!show)
                            }
                          }

                            style={{
                              border: '0',
                              background: '#EBE5F7',
                              color: "#3800B0",
                              fontSize: '14px',
                              fontWeight: '600',

                            }}
                          >Log In</button>
                        </Button>

                      </div>)}

                    </Menu.Item>
                    <Menu.Item>

                      {show ? <Autho setShow={setShow} /> : (showes ? "" : <div onScroll={false} style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}>

                        <Button variant="white" className="log-buttons" >
                          <button
                            onClick={() => {
                              let body = document.querySelector('body');
                              body.setAttribute('style', 'overflow-y: hidden; overflow-x: hidden');
                              setShow(!show)
                            }}

                            style={{
                              border: '0',
                              background: '#EBE5F7',
                              color: "#3800B0",
                              fontSize: '14px',
                              fontWeight: '600',

                            }}
                          >
                            Sing Up
                          </button>
                        </Button>
                      </div>)}
                    </Menu.Item>
                  </Menu>
                </MediaQuery>

                {showes ? <Autholog setShow={setShow} setShowes={setShowes} /> : (show ? "" : <div onScroll={false} style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Button variant="white" className="log-buttons">
                    <button onClick={
                      () => {
                        let body = document.querySelector('body');
                        body.setAttribute('style', 'overflow-y: hidden; overflow-x: hidden');
                        setShowes(!show)
                      }
                    }

                      style={{
                        border: '0',
                        background: '#EBE5F7',
                        color: "#3800B0",
                        fontSize: '14px',
                        fontWeight: '600',

                      }}
                    >Log In</button>
                  </Button>

                </div>)}

                {show ? <Autho setShow={setShow} /> : (showes ? "" : <div onScroll={false} style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>

                  <Button variant="white" className="log-buttons" >
                    <button
                      onClick={() => {
                        let body = document.querySelector('body');
                        body.setAttribute('style', 'overflow-y: hidden; overflow-x: hidden');
                        setShow(!show)
                      }}

                      style={{
                        border: '0',
                        background: '#EBE5F7',
                        color: "#3800B0",
                        fontSize: '14px',
                        fontWeight: '600',

                      }}
                    >
                      Sing Up
                    </button>
                  </Button>
                </div>)}
              </div>
            </div>

            <div className="colCenterCenter">
              <div id="head">
                <p size="xl">Give yourself</p>
                <FireworkIcon id="fireworkIcon" />
                <p>emotions</p>
              </div>
              {/* ---- */}
              <div className="colCenterBottom">
                <div>
                  <p>I wish</p>
                  <WishCreationInput
                    placeholder="Describe your wish"
                    onChange={(e) => setWishName(e.target.value)}
                  />
                  <p>On my birthday</p>
                </div>
                <WishCreationButton onClick={GetWishNameForCreation}>Create a wish</WishCreationButton>
              </div>
              {/* ---- */}
            </div>

            <div id="last-e">
              <Button variant="outlined" size="s">
                <ArrowDownIcon width={20} height={20} />
              </Button>
              <Button variant="outlined" size="s">
                Recent
              </Button>
              <Button variant="outlined" size="s">
                Popular
              </Button>
              <Button variant="outlined" size="s">
                Info
              </Button>
              <Button variant="outlined" size="s">
                Faq
              </Button>
            </div>
          </HomeTop.Col>

          <HomeTop.Col lg={3} xl={3} md={3} sm={3} xs={0} className="col-right">
            <div className="rightImageContainer">
              {sideImages.right.map(({ id, url }) => (
                <Image
                  key={id}
                  className="img"
                  radius={24}
                  id={id}
                  width={252}
                  height={400}
                  src={url}
                />
              ))}
            </div>
          </HomeTop.Col>
        </HomeTop>
        <HomeCenter className="slide-show-container" style={{ zIndex: '0', overflow: 'hidden' }} >
          <div className="promo-view-container">
            <div className="background">
              <p className='title'>Recent wishes come true</p>
            </div>
            <div className="slide-show">
              <div className="slide-show-container">
                <div className="slider">
                  <Carousel>
                    <Carousel.Item interval={5000}>
                      <div className="insider">

                        <div className="slider-content">
                          <div className="image">
                            <div class='icon'>
                              <img src={icon_1} alt="" />
                            </div>
                            <img src={profile_picture}></img>
                          </div>
                          <div className="title">
                            <div className="top">
                              <h5 className="user-name">Leslie Alexander</h5>
                              <h5 className="summ">raised $10,000</h5>
                            </div>
                            <div className="center">
                              <h5 className="main-subtitle">and get a gift she wished of:</h5>
                              <h5 className="main-title">Apple Watch 7</h5>
                            </div>
                            <div className="bottom">
                              <h5 className="bottom-title">View details</h5>
                            </div>
                          </div>
                        </div>
                        <div className="slider-content">
                          <div className="image">
                            <div class='icon'>
                              <img src={icon_2} alt="" />
                            </div>
                            <img src={profile_picture1}></img>
                          </div>
                          <div className="title">
                            <div className="top">
                              <h5 className="user-name">Leslie Alexander</h5>
                              <h5 className="summ">raised $10,000</h5>
                            </div>
                            <div className="center">
                              <h5 className="main-subtitle">and get a gift she wished of:</h5>
                              <h5 className="main-title">Apple Watch 7</h5>
                            </div>
                            <div className="bottom">
                              <h5 className="bottom-title">View details</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                      <div className="insider">

                        <div className="slider-content">
                          <div className="image">
                            <div class='icon'>
                              <img src={icon_1} alt="" />
                            </div>
                            <img src={profile_picture}></img>
                          </div>
                          <div className="title">
                            <div className="top">
                              <h5 className="user-name">Leslie Alexander</h5>
                              <h5 className="summ">raised $10,000</h5>
                            </div>
                            <div className="center">
                              <h5 className="main-subtitle">and get a gift she wished of:</h5>
                              <h5 className="main-title">Apple Watch 7</h5>
                            </div>
                            <div className="bottom">
                              <h5 className="bottom-title">View details</h5>
                            </div>
                          </div>
                        </div>
                        <div className="slider-content">
                          <div className="image">
                            <div class='icon'>
                              <img src={icon_2} alt="" />
                            </div>
                            <img src={profile_picture1}></img>
                          </div>
                          <div className="title">
                            <div className="top">
                              <h5 className="user-name">Leslie Alexander</h5>
                              <h5 className="summ">raised $10,000</h5>
                            </div>
                            <div className="center">
                              <h5 className="main-subtitle">and get a gift she wished of:</h5>
                              <h5 className="main-title">Apple Watch 7</h5>
                            </div>
                            <div className="bottom">
                              <h5 className="bottom-title">View details</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                      <div className="insider">

                        <div className="slider-content">
                          <div className="image">
                            <div className='icon'>
                              <img src={icon_1} alt="" />
                            </div>
                            <img src={profile_picture}></img>
                          </div>
                          <div className="title">
                            <div className="top">
                              <h5 className="user-name">Leslie Alexander</h5>
                              <h5 className="summ">raised $10,000</h5>
                            </div>
                            <div className="center">
                              <h5 className="main-subtitle">and get a gift she wished of:</h5>
                              <h5 className="main-title">Apple Watch 7</h5>
                            </div>
                            <div className="bottom">
                              <h5 className="bottom-title">View details</h5>
                            </div>
                          </div>
                        </div>
                        <div className="slider-content">
                          <div className="image">
                            <div class='icon'>
                              <img src={icon_2} alt="" />
                            </div>
                            <img src={profile_picture1}></img>
                          </div>
                          <div className="title">
                            <div className="top">
                              <h5 className="user-name">Leslie Alexander</h5>
                              <h5 className="summ">raised $10,000</h5>
                            </div>
                            <div className="center">
                              <h5 className="main-subtitle">and get a gift she wished of:</h5>
                              <h5 className="main-title">Apple Watch 7</h5>
                            </div>
                            <div className="bottom">
                              <h5 className="bottom-title">View details</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
            <Item className="slide-show-sm 2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-0 px-0">
              <OwlCarousel className='owl-theme' dots={true} loop autoplay margin={9} nav={false} items={2} style={{ height: '90%' }}>
                {SmSliderItem.data.map(({ picture, icon }) => (
                  console.log(picture),
                  <div className='item'>
                    <div className="slider-content">
                      <div className="image">
                        <div class='icon'>
                          <img src={icon} alt="" />
                        </div>
                        <img src={picture}></img>
                      </div>
                      <div className="title">
                        <div className="top">
                          <h5 className="user-name">Leslie Alexander</h5>
                          <h5 className="summ">raised $10,000</h5>
                        </div>
                        <div className="center">
                          <h5 className="main-subtitle">and get a gift she wished of:</h5>
                          <h5 className="main-title">Apple Watch 7</h5>
                        </div>
                        <div className="bottom">
                          <h5 className="bottom-title">View details</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </Item>
          </div>

        </HomeCenter>
      </HomeConatiner>
      <Container size="xl" style={{ overflow: 'hidden' }} className='products-container'>
        <WishesText>
          <p className="wishes-text">Popular wishes</p>
        </WishesText>
        <Grid>
          {Carddata.data.map(({ url, title, username, userdesc, userphoto, leftprice, rightprice }) => (
            <Grid.Col xs={12} sm={6} md={3} lg={3}>
              <Wrapper className="cart-item" onMouseOver={(e) => {
                e.currentTarget.setAttribute('style', 'border: 1px solid #3800B0;');
                e.currentTarget.children[0].children[0].setAttribute('style', 'visibility: visible');
                e.currentTarget.children[0].children[1].setAttribute('style', 'visibility: visible');

              }} onMouseOut={(e) => {
                e.currentTarget.setAttribute('style', 'border: 1px solid #EBE5F7;')
                e.currentTarget.children[0].children[0].setAttribute('style', 'visibility: hidden');
                e.currentTarget.children[0].children[1].setAttribute('style', 'visibility: hidden');
              }}>
                <div className="image-container">
                  <button className='congralute-button'>Congralute</button>
                  <div className="image-background"></div>
                  <ImgWrapper src={url}></ImgWrapper>
                </div>
                <ContentWrapper>
                  <Title>{title}</Title>

                  <UserWrapper>
                    <UserAbout>
                      <UserName>{username}</UserName>
                      <UserDesc>{userdesc}</UserDesc>
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
          ))}
          <WishesBtn><Button className="wish-btn">See all wishes</Button>
            <PartnersText>
              <h5 className="partners-text">Get gifts from our partners</h5>
            </PartnersText>
            <OwlCarousel className='owl-theme' dots={false} loop autoplay margin={9} nav={true} items={6} >
              {CarouselPartners.data.map(({ url }) => (
                <div className='item'>
                  <Image src={url} className="partner-img" />
                </div>
              ))}
            </OwlCarousel>
            <Button className="partner-btn">See all partners</Button>
          </WishesBtn>
        </Grid>
        <GridCutoms justify="center">
          <Grid.Col>
            <GifHeader>We help desires come true</GifHeader>
          </Grid.Col>

          <Grid.Col className="GridCebter" xs={12} sm={6} md={4} lg={4}>
            <GifImg src={img13} />
          </Grid.Col>
          <Grid.Col className="GridCebter" xs={12} sm={6} md={4} lg={4}>
            <GifwRAP>
              <Gifname>3 000</Gifname>
              <GifDesc>gifts from partners</GifDesc>
            </GifwRAP>
          </Grid.Col>
          <Grid.Col className="GridCebter" xs={12} sm={6} md={4} lg={4}>
            <GifImg src={img12} />
          </Grid.Col>
          <Grid.Col className="GridCebter" xs={12} sm={6} md={4} lg={4}>
            <GifwRAP>
              <Gifname>3 000</Gifname>
              <GifDesc>gifts from partners</GifDesc>
            </GifwRAP>
          </Grid.Col>
          <Grid.Col className="GridCebter" xs={12} sm={6} md={4} lg={4}>
            <GifImg src={img14} />
          </Grid.Col>
          <Grid.Col className="GridCebter" xs={12} sm={6} md={4} lg={4}>
            <GifwRAP>
              <Gifname>3 000</Gifname>
              <GifDesc>gifts from partners</GifDesc>
            </GifwRAP>
          </Grid.Col>
        </GridCutoms>
      </Container>
      <HowItWorks />
      <FaqSection />

      <InsiderContainer fluid className="promote-bottom">
        <div className="insider-lg">
          <div className="title">
            <div className="top">
              <p className="top-title">
                Application
                that <br /> makes sense
              </p>
            </div>
            <div className="bottom">
              <p className="bottom-title">
                The software offers complete campaign transparency, email tracking, view success and click-through rates, custom reports, and the ability to manage subscribers and un-subscribers
              </p>
            </div>
          </div>
          <div className="content">
            <div className="box">
              <div className="left">
                <div className='top'>
                  <div className='top-insider'>
                    <i class="fa-brands fa-apple"></i>
                    <h5 className='download-content'>Download from</h5>

                    <h1 className="apple-title">App Store</h1>
                  </div>
                </div>
                <div className="bottom">
                  <div className='bottom-insider'>
                    <i class="fa-brands fa-google-play"></i>
                    <h5 className='download-content'>Download from</h5>

                    <h1 className="apple-title">Google Play</h1>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="central">
                  <img src={IphoneImage} className="iphone-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </InsiderContainer>
    </>
  );
};

export default Home;
