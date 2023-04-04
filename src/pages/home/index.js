import { React, useEffect, useState } from "react";
import {
  Login_ConnectionSystem,
  SignUp_ConnectionSystem,
} from "../../shared/LoginSignUpSystem/ConnectionSystem/connection";
import {
  Image,
  MediaQuery,
  Menu,
  Box,
  Text,
  Grid,
  Container,
  Progress,
  Loader,
} from "@mantine/core";
import {
  Link,
  Navigate,
  Outlet,
  redirect,
  useNavigate,
} from "react-router-dom";
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
  ProgressWrapper,
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
  ButtonDefault,
  SeeAllWish,
} from "./Home.Styled";
import { Carddata } from "./CardData";
import FaqSection from "../../shared/components/faq";
import { sideImages } from "../../utils/dummy-data/main-top-images";
import { Button } from "../../shared/ui/Button";
import profile_picture from "../../assets/images/ffb7d96c688377cdff8f8399e25f6508.png";
import profile_picture1 from "../../assets/images/50a8343b26e4ea599ea4c76556db95d3.png";
import icon_1 from "../../assets/images/86dd3c4e9ee1a89490042c6a4a8895fb.png";
import icon_2 from "../../assets/images/d371531b922f3e8c0e8f0dfe4782d86e.png";
import { ReactComponent as ArrowDownIcon } from "../../style/icons/button-icons/arrow-down.svg";
import { ReactComponent as FireworkIcon } from "../../style/icons/big-star.svg";
import { CustomInput } from "../../shared/ui/İnput";
import img12 from "../../assets/images/image 12.png";
import img13 from "../../assets/images/image 13.png";
import { ReactComponent as Logo } from "../../style/icons/wl.svg";
import img14 from "../../assets/images/image 14.png";
import IphoneImage from "../../assets/images/preview@1x.png";
import { CarouselPartners } from "./PartnersFoto";
import { SmSliderItem } from "./SmSliderItem";
import OwlCarousel from "react-owl-carousel";
import Carousel from "react-bootstrap/Carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as GridIcon } from "../../style/icons/grid-icon.svg";
import Autholog from "../../shared/LogIn-SingUp/Autholog";
import Autho from "../../shared/LogIn-SingUp/Autho";
import { HomeLoginHeader } from "../../shared/components/HeaderLogin/homeloginheader";
import HeaderShared from "../../shared/components/HeaderShared";
import axios from "axios";
import HomeBanner from "./HomeBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { myaxios } from "../../api/myaxios";
import { useAuthSelector } from "../../store/slices/authSlice";
import { useSelector } from "react-redux";
const Home = () => {
  const isAuth = useSelector(useAuthSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/my-profile");
    }
  });

  const [modalShow, setModalShow] = useState(false);
  const [opened, setOpened] = useState(false);
  const [getWishName, setWishName] = useState("");
  const [getAllWishData, setAllWishData] = useState([]);

  function GetWishNameForCreation() {
    if (isAuth) {
      navigate("/creating-wish", { state: getWishName });
    } else {
      setShowes(true);
    }
  }
  const [error, setError] = useState("");
  const [getPopularWish, setPopularWish] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setError("");
    setLoading(true);
    myaxios
      .get("/api/v1/wish/list?skip=0", {
        params: {
          skip: 0,
        },
      })
      .then(({ data }) => {
        setAllWishData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });

    myaxios
      .get("/api/v1/wish/popular", {
        params: {
          skip: 0,
        },
      })
      .then(({ data }) => {
        setPopularWish(data.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  function getWishIdForResult(slug) {
    navigate("/wish/" + slug, { state: slug });
  }

  function getUserSlugForProfile(id) {
    id && navigate("/profile/" + id, { state: id });
  }

  const [show, setShow] = useState(false);

  // Login Modal Open
  const [showes, setShowes] = useState(false);
  // END MODAL LOGIN

  // Register Models Open
  const [registerModal, setregisterModal] = useState(false);
  const [emailConfirmModal, setEmailOtpModal] = useState(false);
  // END MODAL REGISTER

  const [swiper, setSwiper] = useState(null);

  const showLoginModal = () => {
    let body = document.querySelector("body");
    body.setAttribute("style", "overflow-x: hidden");
    setShowes(!show);
  };

  const showSignUpModal = () => {
    let body = document.querySelector("body");
    body.setAttribute("style", "overflow-x: hidden");
    setregisterModal(!show);
  };

  const showEmailConfirm = () => {
    let body = document.querySelector("body");
    body.setAttribute("style", "overflow-x: hidden");
    setEmailOtpModal(!show);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {showes && (
        <Login_ConnectionSystem
          setShowes={setShowes}
          showRegister={setregisterModal}
        />
      )}
      {registerModal && (
        <SignUp_ConnectionSystem
          setregisterModal={setregisterModal}
          setShowes={setShowes}
          setEmailOtpModal={setEmailOtpModal}
        />
      )}
      <HomeConatiner
        fluid
        p={0}
        style={{ overflow: "hidden", gap: 0 }}
        className="home-container"
      >
        <HomeBanner
          showLoginModal={showLoginModal}
          showSignUpModal={showSignUpModal}
          showEmailConfirm={showEmailConfirm}
          createWish={GetWishNameForCreation}
        />
        <HomeCenter
          className="slide-show-container"
          id="slideShowContainer"
          style={{ zIndex: "0", overflow: "hidden" }}
        >
          <div className="promo-view-container">
            <div className="background">
              <p className="title">Recent wishes come true</p>
            </div>
            <div className="wish__slider__wrapper">
              <Swiper
                spaceBetween={24}
                slidesPerView={2}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                }}
                modules={[Pagination, A11y]}
                a11y={{
                  enabled: true,
                }}
                pagination={{
                  clickable: true,
                }}
                setWrapperSize={true}
                onSwiper={(swiper) => setSwiper(swiper)}
              >
                {getAllWishData?.results?.map((getWishData) => (
                  <SwiperSlide
                    key={getWishData.slug}
                    className="wish__slider__slide"
                  >
                    <div className="wish__slider">
                      <div className="wish__slider__left">
                        <Link to={`/wish/${getWishData.slug}`}>
                          <img
                            className="wish__slider__image"
                            src={`${process.env.REACT_APP_API_URL}${getWishData.image}`}
                          />
                        </Link>
                        <Link to={`/profile/${getWishData.user.username}`}>
                          <img
                            className="wish__slider__icon"
                            id={getWishData.user.username}
                            onClick={(e) => getUserSlugForProfile(e.target.id)}
                            src={
                              getWishData.user.image
                                ? getWishData.user.image
                                : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                            }
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="wish__slider__right">
                        <div className="wish__slider__top">
                          <Link to={`/profile/${getWishData.user.username}`}>
                            <h5
                              id={getWishData.user.username}
                              onClick={(e) =>
                                getUserSlugForProfile(e.target.id)
                              }
                              className="wish__slider__top--title cursor-pointer"
                            >
                              {getWishData.user.full_name}
                            </h5>
                          </Link>
                          <h5 className="wish__slider__top--subtitle">
                            raised ${getWishData.donate.received}
                          </h5>
                        </div>
                        <div className="wish__slider__center">
                          <h5 className="wish__slider__top--subtitle">
                            and get a gift he wished of:
                          </h5>
                          <Link to={`/wish/${getWishData.slug}`}>
                            <h5 className="wish__slider__top--heading">
                              {getWishData.title}
                            </h5>
                          </Link>
                        </div>
                        <div className="wish__slider__link">
                          <Link to={`/wish/${getWishData.slug}`}>
                            View details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {swiper && (
                <>
                  <button
                    className="wish__slider--prev"
                    onClick={() => swiper.slidePrev()}
                  ></button>
                  <button
                    className="wish__slider--next"
                    onClick={() => swiper.slideNext()}
                  ></button>
                </>
              )}
            </div>
          </div>
        </HomeCenter>
      </HomeConatiner>
      <Container
        size="xl"
        style={{ overflow: "hidden" }}
        className="products-container mb-[50px] md:mb-[150px]"
      >
        <WishesText>
          <p className="wishes-text">Popular wishes</p>
        </WishesText>
        <Grid>
          {getPopularWish?.map((getWishData) => (
            <Grid.Col xs={12} sm={6} md={3} lg={3} key={getWishData.id}>
              <Wrapper
                key={getWishData.id}
                className="cart-item"
                onMouseOver={(e) => {
                  e.currentTarget.setAttribute(
                    "style",
                    "border: 1px solid #3800B0;"
                  );
                  e.currentTarget.children[0].children[0].setAttribute(
                    "style",
                    "visibility: visible"
                  );
                  e.currentTarget.children[0].children[1].setAttribute(
                    "style",
                    "visibility: visible"
                  );
                }}
                onMouseOut={(e) => {
                  e.currentTarget.setAttribute(
                    "style",
                    "border: 1px solid #EBE5F7;"
                  );
                  e.currentTarget.children[0].children[0].setAttribute(
                    "style",
                    "visibility: hidden"
                  );
                  e.currentTarget.children[0].children[1].setAttribute(
                    "style",
                    "visibility: hidden"
                  );
                }}
              >
                <div className="image-container">
                  <ButtonDefault
                    name={getWishData.slug}
                    onClick={(e) => getWishIdForResult(e.currentTarget.name)}
                    className="congralute-button"
                  >
                    Congralute
                  </ButtonDefault>
                  <div className="image-background"></div>
                  <ImgWrapper
                    src={`${process.env.REACT_APP_API_URL}/${getWishData.image}`}
                  ></ImgWrapper>
                </div>
                <ContentWrapper>
                  <Link to={`/wish/${getWishData.slug}`}>
                    <Title>{getWishData.title}</Title>
                  </Link>

                  <UserWrapper>
                    <UserAbout>
                      <UserName
                        id={getWishData.user.username}
                        onClick={(e) => getUserSlugForProfile(e.target.id)}
                      >
                        {getWishData.user.full_name}
                      </UserName>
                      <UserDesc>for birthday on {getWishData.date}</UserDesc>
                    </UserAbout>
                    <UserPhoto
                      id={getWishData.user.username}
                      onClick={(e) => getUserSlugForProfile(e.target.id)}
                      src={`${getWishData.user.image}`}
                    ></UserPhoto>
                  </UserWrapper>

                  <PriceWrapper>
                    <ProgressWrapper>
                      <Progress
                        size="sm"
                        sections={[{ value: 50, color: "#3800B0" }]}
                      />
                    </ProgressWrapper>
                    <Prices>
                      <LeftPrice>
                        ${getWishData.donate.received} raised
                      </LeftPrice>
                      <RightPrice>${getWishData.donate.left} left</RightPrice>
                    </Prices>
                  </PriceWrapper>
                </ContentWrapper>
              </Wrapper>
            </Grid.Col>
          ))}
          <WishesBtn></WishesBtn>
        </Grid>
        <a href="/wish-list">
          <SeeAllWish className="see-all-btn">See all wishes</SeeAllWish>
        </a>
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
      <HowItWorks isHome={true} />
      <FaqSection />
      <div
        style={{
          backgroundColor: "#0b0023",
          borderTopLeftRadius: "37px",
          borderTopRightRadius: "37px",
        }}
        className="inside-background"
      >
        <InsiderContainer fluid className="promote-bottom">
          <div className="insider-lg">
            <div className="title">
              <div className="top">
                <p className="top-title">Applications that makes sense</p>
              </div>
              <div className="bottom">
                <p className="bottom-title">
                  The software offers complete campaign transparency, email
                  tracking, view success and click-through rates, custom
                  reports, and the ability to manage subscribers and
                  un-subscribers
                </p>
              </div>
            </div>
            <div className="content">
              <div className="box">
                <div className="left">
                  <div className="top">
                    <div className="top-insider">
                      <i className="fa-brands fa-apple"></i>
                      <h5 className="download-content">Download from</h5>

                      <h1 className="apple-title">App Store</h1>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="bottom-insider">
                      <i className="fa-brands fa-google-play"></i>
                      <h5 className="download-content">Download from</h5>

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
      </div>
    </>
  );
};

export default Home;
