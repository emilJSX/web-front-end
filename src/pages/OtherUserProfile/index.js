import { Grid, Image, Button, Slider, Loader, Progress } from "@mantine/core";
import React, { useEffect, useState } from "react";
import {
  Body,
  ButtonSection,
  DateSection,
  LeftSection,
  CardLong,
  FollowersSection,
  Follower,
  Following,
  Details,
  Edit,
  Final,
  Date,
  DateText,
  Text,
  TagName,
  Firstprice,
  Namesurname,
  Imagess,
  LastDiv,
  Lastprice,
  Price,
  SosialN,
  Target,
  TargetFinal,
  Title,
  SocialSection,
  Joined,
  UserDesc,
  LeftRightPriceDisplay,
  LeftPrice,
  RightPrice,
  MenuScrollCards,
  DisplayDateBirthaySection,
  MobileBtnSection,
  FotoSection,
  MenuScrollCardsDesktop,
  MobileTopCoverImageSection,
  ShowBirtdayInWish,
  ImgWrapper,
  ContentWrapper,
  UserWrapper,
  UserAbout,
  UserName,
  UserPhoto,
  PriceWrapper,
  ProgressWrapper,
  Prices,
  Wrapper,
} from "./Oup.Style";
import estetika from "../../style/icons/estetika.png";
import { Tab, Tabs, TabPanel } from "react-tabs";
import { BsFacebook, BsTwitter, BsWhatsapp, BsTelegram } from "react-icons/bs";
import rainbow from "./../../style/icons/rainbowfoto.png";
import {
  Lastdiv,
  Seconddiv,
  Views,
  Targets,
  Raised,
  CardLonger,
  NotWishes,
  Buttons,
  Buttonleft,
  Buttonright,
  Glasses,
  DisplayOnButtonText,
  DisplayTopImgCard,
} from "./ProfileOther.Styled";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import file1 from "../../style/icons/file1.png";
import instagram from "../../style/icons/instagram.svg";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Autholog from "../../shared/LogIn-SingUp/Autholog";
import Autho from "../../shared/LogIn-SingUp/Autho";
import { DateTime } from "luxon";
import { myaxios, myaxiosprivate } from "../../api/myaxios";
import { useSelector } from "react-redux";
import { useAuthSelector } from "../../store/slices/authSlice";
const OtherUserProfile = () => {
  const [wait, setWait] = useState(true);
  const [UserInfoProfile, setUserInfoProfile] = useState([]);
  const [getJoined, setJoined] = useState();
  const [error, setError] = useState("");
  const { state } = useLocation();
  const { slug } = useParams();
  const [isFollowing, setIsFollowing] = useState();
  const [loading, setLoading] = useState(true);
  // const [displayFollow, setdisplayFollow] = useState("block");
  // const [displayUnfollow, setdisplayUnfollow] = useState("none");
  const isAuth = useSelector(useAuthSelector);
  const navigate = useNavigate();
  console.log(state);
  const tabs_storage = [
    {
      value: "act",
      id: "1",
      className: "tabnameSelected tabButton",
      title: "Active wishes",
      spanTitle: UserInfoProfile?.wishes?.active?.length,
    },
    {
      value: "com",
      id: "2",
      className: "tabname tabButton",
      title: "Complete wishes",
      spanTitle: UserInfoProfile?.wishes?.complete?.length,
    },
    {
      value: "con",
      id: "3",
      className: "tabname tabButton",
      title: "Congratulations",
      spanTitle: "0",
    },
  ];
  //     const handler = e => this.setState({ matches: e.matches });
  //     window.matchMedia("(min-width: 500px)").addEventListener('change', handler);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setLoading(true);
    setError("");
    isAuth
      ? myaxiosprivate
          .get(
            `/api/v1/user/other/slug?slug=${state?.slug ? state?.slug : slug}`
          )
          .then(({ data }) => {
            setUserInfoProfile(data.data);
            setJoined(data.data.info.joined);
            setIsFollowing(data.data.contacts.followedStatus);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          })
      : myaxios
          .get(`/api/v1/user/other/slug?slug=${slug}`)
          .then(({ data }) => {
            setUserInfoProfile(data.data);
            setJoined(data.data.info.joined);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
  }, []);

  function getWishIdEdit(wish_id) {
    const GetProfileWishId = wish_id;
    navigate("/wish-edit", { state: GetProfileWishId });
  }

  const getWithProfileToEdit = () => {
    navigate("/profile-edit");
  };

  function getWishIdForResultPage(id) {
    navigate("/wish/" + id, { state: { id } });
  }
  // Follow API

  const [show, setShow] = useState(false);
  const [showes, setShowes] = useState(false);
  const unfollowUser = (id) => {
    if (isAuth) {
      myaxiosprivate
        .get(`/api/v1/unfollow?user_id=${id}`)
        .then((res) => {
          res.status === 200 && setIsFollowing(false);
        })
        .catch((err) => {
          setIsFollowing(true);
          setError(err.message);
        });
    } else {
      setShowes(true);
    }
  };
  const followUser = async (id) => {
    if (isAuth) {
      await myaxiosprivate
        .get(`/api/v1/follow?user_id=${id}`)
        .then((res) => {
          res.status === 200 && setIsFollowing(true);
        })
        .catch((err) => {
          setIsFollowing(false);
          setError(err.message);
        });
    } else {
      setShowes(true);
    }
  };
  const handleClick = (id) => {
    if (isFollowing) {
      unfollowUser(id);
    } else {
      followUser(id);
    }
  };
  // END FOLLOW API

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader size="xl" />
      </div>
    );
  }
  return (
    <Body>
      {showes ? <Autholog setShow={setShow} setShowes={setShowes} /> : null}
      {show ? <Autho setShow={setShow} /> : null}
      <div className="main-container">
        <div>
          <FotoSection fluid>
            <img
              id="rainbow"
              radius="lg"
              className="rainbow"
              src={rainbow}
              height={300}
            />
          </FotoSection>
        </div>
        <Grid className="main-grid">
          <Grid.Col className="col-one" xl={3} lg={3} md={3} sm={12} xs={12}>
            <div className="leftsection-style">
              <MobileTopCoverImageSection>
                <img
                  id="rainbow"
                  radius="lg"
                  className="rainbow"
                  src={estetika}
                  height={300}
                />
              </MobileTopCoverImageSection>
              <LeftSection>
                <DisplayTopImgCard>
                  <Image
                    radius="100px"
                    style={{ border: "3px solid white !important;" }}
                    id="tomcrusemobile"
                    className="tomcrusemobile"
                    height={85}
                    src={`${UserInfoProfile?.info?.avatar}`}
                  />
                </DisplayTopImgCard>

                <Image
                  radius="100px"
                  className="tomcruse"
                  height={80}
                  src={`${UserInfoProfile?.info?.avatar}`}
                />
                <Namesurname>
                  {UserInfoProfile?.info?.full_name != null
                    ? UserInfoProfile?.info?.full_name
                    : "FullName does not exist"}
                </Namesurname>
                {/* <HiBadgeCheck className='bluechek' /> */}
                <TagName>@ {UserInfoProfile?.info?.slug}</TagName>
                <Text>Spec, Child, Chaos and Shadow</Text>

                <DateSection>
                  <Date>
                    {DateTime.fromSQL(UserInfoProfile?.info?.dob).toFormat(
                      "dd MMMM yyyy"
                    )}
                  </Date>
                  <DateText>Birthdate</DateText>
                </DateSection>
                <DisplayDateBirthaySection>
                  <Date>
                    {DateTime.fromSQL(UserInfoProfile?.info?.dob).toFormat(
                      "dd MMMM yyyy"
                    )}{" "}
                    <DateText>Birthdate</DateText>
                  </Date>
                  <Follower onClick={() => navigate("/contacts-profile")}>
                    {UserInfoProfile?.contacts?.followers}{" "}
                    <DateText>followers</DateText>
                  </Follower>
                  <Following onClick={() => navigate("/contacts-profile")}>
                    {UserInfoProfile?.contacts?.follows}{" "}
                    <DateText>followings</DateText>
                  </Following>
                </DisplayDateBirthaySection>

                <FollowersSection>
                  <Follower onClick={() => navigate("/contacts-profile")}>
                    {UserInfoProfile?.contacts?.followers} <br />{" "}
                    <span style={{ fontSize: "12px" }}>followers</span>
                  </Follower>
                  <Following onClick={() => navigate("/contacts-profile")}>
                    {UserInfoProfile?.contacts?.follows} <br />{" "}
                    <span style={{ fontSize: "12px" }}>followings</span>
                  </Following>
                </FollowersSection>
                <SocialSection>
                  <a href={UserInfoProfile?.social?.facebook} target="_blank">
                    <BsFacebook
                      style={{
                        color: "#2D008D",
                        fontSize: "23px",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        marginRight: "10px",
                        justifyContent: "flex-end",
                      }}
                    />{" "}
                  </a>
                  <a href={UserInfoProfile?.social?.instagram} target="_blank">
                    <Image
                      src={instagram}
                      style={{
                        color: "#2D008D",
                        fontSize: "23px",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "10px",
                        justifyContent: "flex-start",
                      }}
                    />
                  </a>
                </SocialSection>
                <ButtonSection>
                  <button
                    id={UserInfoProfile?.user_id}
                    // style={{ display: displayFollow }}
                    onClick={(e) => handleClick(e.target.id)}
                    className={
                      isFollowing ? "unfollow-btn block" : "follow-btn block"
                    }
                  >
                    {isFollowing ? "Unfollow" : "Follow"}
                  </button>
                  {/* <button
                    id={UserInfoProfile?.user_id}
                    style={{ display: displayUnfollow }}
                    onClick={(e) => UnfollowButton(e.target.id)}
                    className={!followState ? "hidden" : "unfollow-btn block"}
                  >
                    Unfollow
                  </button> */}
                  <button className="message-btn">Message</button>
                </ButtonSection>
                {/* <MobileBtnSection>
                                        <BsFacebook className='fb-icon' style={{ color: "#2D008D" }} />
                                        <Image src={instagram} className='insta-icon' style={{ color: "#2D008D", fontSize: "23px" }} />
                                        <BsTelegram className='insta-icon' style={{ color: "#2D008D" }} />
                                    </MobileBtnSection> */}
                <Joined>
                  Joined {DateTime.fromISO(getJoined).toFormat("MMMM yyyy")}
                </Joined>
              </LeftSection>
            </div>
          </Grid.Col>

          <Grid.Col xl={7} lg={7} md={7} sm={12} xs={12} className="col-two">
            <Tabs defaultValue="com" className="tabs">
              <MenuScrollCards>
                <div className="btn-section">
                  {tabs_storage.map((tab) => (
                    <Tab
                      value={tab.value}
                      id={tab.id}
                      className={tab.className}
                      onClick={(e) => {
                        document
                          .querySelectorAll(".tabButton")
                          .forEach((x) =>
                            x.id.includes(e.currentTarget.id)
                              ? (x.className = "tabnameSelected tabButton")
                              : (x.className = "tabname tabButton")
                          );
                      }}
                    >
                      {tab.title}
                      <span
                        style={{
                          color: "gray",
                          fontFamily: "sans-serif",
                          marginLeft: "8px",
                        }}
                      >
                        {tab.spanTitle}
                      </span>
                    </Tab>
                  ))}
                </div>
              </MenuScrollCards>

              <TabPanel value="act" className="tab-panel">
                <Grid className="grid-root-active-wishes">
                  {wait ? (
                    UserInfoProfile?.wishes?.active.length !== 0 ? (
                      UserInfoProfile?.wishes?.active?.map((userDataWish) => (
                        <Grid.Col
                          style={{ marginTop: "10px" }}
                          className="col-root-cards"
                          xl={4}
                          lg={4}
                          md={4}
                          sm={6}
                          xs={12}
                        >
                          <Wrapper
                            className="cart-item"
                            onMouseOver={(e) => {
                              e.currentTarget.setAttribute(
                                "style",
                                "border: 1px solid #3800B0;"
                              );
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.setAttribute(
                                "style",
                                "border: 1px solid #EBE5F7;"
                              );
                            }}
                          >
                            <ImgWrapper
                              id={userDataWish.slug}
                              onClick={(e) =>
                                getWishIdForResultPage(e.target.id)
                              }
                              src={`https://api.wishx.me/${userDataWish.image}`}
                            ></ImgWrapper>
                            <ContentWrapper>
                              <Title
                                id={userDataWish.slug}
                                onClick={(e) =>
                                  getWishIdForResultPage(e.target.id)
                                }
                              >
                                {userDataWish.title}
                              </Title>

                              <UserWrapper>
                                <UserAbout>
                                  <UserName>
                                    {UserInfoProfile?.info?.full_name != null
                                      ? UserInfoProfile?.info?.full_name
                                      : "FullName does not exist"}
                                  </UserName>
                                  <UserDesc>
                                    for birthday on{" "}
                                    {DateTime.fromSQL(
                                      UserInfoProfile?.info?.dob
                                    ).toFormat("dd MMMM yyyy")}
                                  </UserDesc>
                                </UserAbout>
                                <UserPhoto
                                  src={`${UserInfoProfile?.info?.avatar}`}
                                />
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
                                    ${userDataWish.price} raised
                                  </LeftPrice>
                                  <RightPrice>$32 left</RightPrice>
                                </Prices>
                              </PriceWrapper>
                            </ContentWrapper>
                          </Wrapper>
                        </Grid.Col>
                      ))
                    ) : (
                      <div>
                        <CardLonger>
                          <NotWishes>User doesn’t have any wishes</NotWishes>
                          <Buttons>
                            <Buttonleft>Message user</Buttonleft>
                            <a href="/wish-list">
                              <Buttonright>Explore wishes</Buttonright>
                            </a>
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
                    )
                  ) : (
                    <Loader size="xl" />
                  )}
                </Grid>
              </TabPanel>
              <TabPanel
                value="com"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                className="tab-panel"
              >
                {wait ? (
                  UserInfoProfile?.wishes?.complete.length !== 0 ? (
                    UserInfoProfile?.wishes?.complete?.map((userDataWish) => (
                      <CardLong>
                        <div className="com-cont">
                          <div className="image-container-1">
                            <Imagess
                              src={`https://api.wishx.me/${userDataWish.image}`}
                            />
                          </div>
                          <div className="content-title">
                            <Title>
                              <p className="second-card-title">
                                {userDataWish.title}
                              </p>
                            </Title>
                            <Seconddiv>
                              <Views>
                                256 <br />
                                <p className="title">Views</p>
                              </Views>
                              <Views>
                                8<br />
                                <p className="title">Gifts</p>
                              </Views>
                              <Views>
                                $12 <br />
                                <p className="title">Avg gift amount</p>
                              </Views>
                            </Seconddiv>
                            <DisplayOnButtonText>
                              for birthday on 25 Nov 2022
                            </DisplayOnButtonText>
                            <div className="main-button">
                              <Lastdiv>
                                <span
                                  className="star-card"
                                  style={{
                                    fontSize: "20px",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "10%",
                                    justifyContent: "center",
                                  }}
                                >
                                  ✨
                                </span>
                                <Raised>$2 542 raised</Raised>
                                <Targets>
                                  120% of ${userDataWish.price} target
                                </Targets>
                              </Lastdiv>
                            </div>
                          </div>
                        </div>
                      </CardLong>
                    ))
                  ) : (
                    <div>
                      <CardLonger>
                        <NotWishes>Yo don’t have any wishes</NotWishes>
                        <Buttons>
                          <Buttonleft>Create a wish</Buttonleft>
                          <Buttonright>Explore wishes</Buttonright>
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
                  )
                ) : (
                  <Loader size="xl" />
                )}
              </TabPanel>
              <TabPanel value="con" className="tab-panel-2">
                {/* {
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

                                    } */}
              </TabPanel>
            </Tabs>
          </Grid.Col>
        </Grid>
      </div>
    </Body>
  );
};
export default OtherUserProfile;
