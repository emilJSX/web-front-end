import { Grid, Image, Button, Slider } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
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
} from "./MyProfile.style";
import Loader from "../../shared/ui/Loader";
import estetika from "../../style/icons/estetika.png";
import tomcruse from "../../style/icons/tomcruse.png";
import { Tab, Tabs, TabPanel, TabList } from "react-tabs";
import { Carddata } from "./CardData";
import { BsFacebook, BsTwitter, BsWhatsapp, BsTelegram } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { RiLinksFill } from "react-icons/ri";
import {
  HiBadgeCheck,
  HiArrowNarrowRight,
  HiArrowNarrowLeft,
} from "react-icons/hi";
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
  DisplayTopImgCard,
} from "./MyprofilSecond.style";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import file1 from "../../style/icons/file1.png";
import { Component } from "react";
import instagram from "../../style/icons/instagram.svg";
import { Link, useNavigate } from "react-router-dom";
import { DateTime } from "luxon";
import { myaxiosprivate } from "../../api/myaxios";
import moment from "moment";
import Share from "../wish-pagess/Share";
import ErrorPage from "../404";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/slices/userSlice";
import CongratComments from "./CongratComments";
const MyProfile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [joinDate, setJoinDate] = useState();
  const [wishes, setWishes] = useState();
  const [coverImg, setCoverImg] = useState();
  const [congrats, setCongrats] = useState([]);

  var tabs_storage = [
    {
      value: "act",
      id: "1",
      className: "tabnameSelected tabButton",
      title: "Active wishes",
      spanTitle: userProfile?.wishes?.active?.length,
    },
    {
      value: "com",
      id: "2",
      className: "tabname tabButton",
      title: "Complete wishes",
      spanTitle: userProfile?.wishes?.complete?.length,
    },
    {
      value: "con",
      id: "3",
      className: "tabname tabButton",
      title: "Congratulations",
      spanTitle: congrats?.length,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //     const handler = e => this.setState({ matches: e.matches });
  //     window.matchMedia("(min-width: 500px)").addEventListener('change', handler);
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const { data } = await myaxiosprivate.get("/api/v1/user/");
        setUserProfile(data.data);
        setJoinDate(data.data.joined);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);
  useEffect(() => {
    const fetchUserWishes = async () => {
      try {
        const { data } = await myaxiosprivate.get("/api/v1/wish/get");
        setWishes(data.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchUserWishes();
  }, []);
  const navigate = useNavigate();
  function getWishesListRoute() {
    navigate("/wish-list");
  }

  function getWishIdEdit(wish_id) {
    const GetProfileWishId = wish_id;
    navigate("/wish-edit", { state: GetProfileWishId });
  }

  const getWithProfileToEdit = () => {
    navigate("/profile-edit");
  };

  function getContactsFollowsPage() {
    navigate("/contacts-profile");
  }

  function getWishIdForResultPage(slug) {
    navigate("/my-wish", { state: slug });
  }
  const fileInputRef = useRef();
  const handleInputOpen = () => {
    fileInputRef.current.click();
  };
  const [uploadMessage, setUploadMessage] = useState("");
  const [coverError, setCoverError] = useState("");
  const handleCoverChange = async (e) => {
    const file = e.target.files[0];

    if (!/^image\//.test(file.type)) {
      alert(`File ${file.name} is not an image.`);
      return false;
    } else {
      setCoverImg(file);
      const formData = new FormData();
      formData.append("file", file && file);

      file &&
        (await myaxiosprivate
          .post("/api/v1/profiles/cover-image/update", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            setTimeout(() => {
              setUploadMessage("File is uploading...");
              location.reload();
            }, 150);
          })
          .catch((err) => setCoverError(err.message))); //set error
    }
  };
  useEffect(() => {
    setError("");
    myaxiosprivate
      .get("/api/v1/wish/comments/my-congratulations/?skip=0")
      .then(({ data }) => setCongrats(data.data))
      .catch((err) => setError(err.message));
  }, []);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorPage />;
  }
  return (
    <Body>
      <div className="main-container">
        <div>
          <FotoSection fluid className="relative mt-3 sm:mt-5">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleCoverChange}
              className="file-uploader"
              style={{ display: "none" }}
            />
            <button
              onClick={handleInputOpen}
              className="change-photo-button absolute top-0 right-20 m-4 p-2 bg-white text-[#6033c0] text-sm font-semibold rounded"
            >
              Change cover photo
            </button>
            {uploadMessage ? (
              <div className="h-[300px]">
                <Loader size="md" />
                {uploadMessage}
              </div>
            ) : (
              <img
                id="rainbow"
                radius="lg"
                className="rainbow w-full h-[300px] bg-center bg-cover rounded-xl"
                src={
                  userProfile?.info?.background_image
                    ? userProfile?.info?.background_image
                    : estetika
                }
              />
            )}
          </FotoSection>
        </div>

        <Grid className="main-grid">
          <Grid.Col
            className="col-one mr-[7px] md:mr-0"
            xl={3}
            lg={3}
            md={3}
            sm={12}
            xs={12}
          >
            <div className="leftsection-style ">
              <MobileTopCoverImageSection>
                <img
                  id="rainbow"
                  radius="lg"
                  className="rainbow w-[99.1%] rounded-[16px] ml-[4px] h-[300px] bg-center bg-cover"
                  src={
                    userProfile?.info?.background_image
                      ? userProfile?.info?.background_image
                      : estetika
                  }
                />
              </MobileTopCoverImageSection>
              <LeftSection className="shadow-md">
                <DisplayTopImgCard>
                  <Image
                    radius="100px"
                    style={{ border: "3px solid white !important" }}
                    id="tomcrusemobile"
                    className="tomcrusemobile"
                    height={85}
                    src={
                      userProfile?.info?.avatar == null
                        ? "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                        : `${userProfile?.info?.avatar}`
                    }
                  />
                </DisplayTopImgCard>

                <Image
                  radius="100px"
                  className="tomcruse"
                  height={80}
                  src={
                    userProfile?.info?.avatar == null
                      ? "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                      : `${userProfile?.info?.avatar}`
                  }
                />
                <Namesurname>
                  {userProfile?.info?.full_name}
                  {userProfile?.verify && <HiBadgeCheck className="bluechek" />}
                </Namesurname>
                <TagName> @{userProfile?.info?.slug}</TagName>
                <Text>
                  {userProfile?.info?.interests
                    .map((item) => item.name)
                    .join(", ")}
                </Text>

                <DateSection>
                  <Date>
                    {moment(userProfile?.info?.dob).format("DD.MM.YYYY")}
                  </Date>
                  <DateText>Birthdate</DateText>
                </DateSection>
                <DisplayDateBirthaySection>
                  <Date>
                    {moment(userProfile?.info?.dob).format("DD.MM.YYYY")}{" "}
                    <DateText>Birthdate</DateText>
                  </Date>
                  <Follower onClick={getContactsFollowsPage}>
                    {userProfile?.contacts?.followers}{" "}
                    <DateText>followers</DateText>
                  </Follower>
                  <Following onClick={getContactsFollowsPage}>
                    {userProfile?.contacts?.follows}{" "}
                    <DateText>followings</DateText>
                  </Following>
                </DisplayDateBirthaySection>

                <FollowersSection>
                  <Follower onClick={getContactsFollowsPage}>
                    {userProfile?.contacts?.followers} <br />{" "}
                    <span style={{ fontSize: "12px" }}>followers</span>
                  </Follower>
                  <Following onClick={getContactsFollowsPage}>
                    {userProfile?.contacts?.follows} <br />{" "}
                    <span style={{ fontSize: "12px" }}>followings</span>
                  </Following>
                </FollowersSection>
                {/* <SocialSection>
                  <a href={userProfile?.social?.facebook} target="_blank">
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
                  <a href={userProfile?.social?.instagram} target="_blank">
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
                </SocialSection> */}
                <ButtonSection>
                  <Button className="second-btn" onClick={getWithProfileToEdit}>
                    Edit profile
                  </Button>
                </ButtonSection>
                {/* <MobileBtnSection>
                                            <Button className='mobile-btn' onClick={getWithProfileToEdit}>Edit profile</Button>
                                            <BsFacebook className='fb-icon' style={{ color: "#2D008D" }} />
                                            <Image src={instagram} className='insta-icon' style={{ color: "#2D008D", fontSize: "23px" }} />
                                            <BsTelegram className='insta-icon' style={{ color: "#2D008D" }} />
                                        </MobileBtnSection> */}
                <Joined>
                  Joined {DateTime.fromISO(joinDate).toFormat("MMMM yyyy")}
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
                      key={tab.id}
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
                <Grid className="cart-div">
                  {!loading ? (
                    userProfile?.wishes?.active.length !== 0 ? (
                      userProfile?.wishes?.active?.map((userDataWish) => (
                        <CardLong key={userDataWish.id}>
                          <div className="cont-text">
                            <div className="image-container">
                              <Imagess
                                id={userDataWish.id}
                                onClick={() =>
                                  getWishIdForResultPage(userDataWish.slug)
                                }
                                src={`https://api.wishx.me/${userDataWish.image}`}
                              />
                            </div>
                            <div className="other-container">
                              <Title
                                id={userDataWish.id}
                                onClick={(e) =>
                                  getWishIdForResultPage(userDataWish.slug)
                                }
                              >
                                {userDataWish.title}
                              </Title>
                              <TargetFinal>
                                <Target>Target: ${userDataWish.price}</Target>
                                <Final>
                                  Final:{" "}
                                  {moment(userProfile?.info?.dob).format(
                                    "DD.MM.YYYY"
                                  )}
                                </Final>
                              </TargetFinal>
                              <ShowBirtdayInWish>
                                for birthday on{" "}
                                {moment(userProfile?.info?.dob).format(
                                  "DD MMMM YYYY"
                                )}
                              </ShowBirtdayInWish>
                              <UserDesc></UserDesc>
                              <Slider
                                className="loading"
                                defaultValue={40}
                                disabled
                              />
                              <LeftRightPriceDisplay>
                                <LeftPrice>${userDataWish.price}</LeftPrice>
                                <RightPrice>#145</RightPrice>
                              </LeftRightPriceDisplay>
                              <Price>
                                <Firstprice></Firstprice>
                                <Lastprice></Lastprice>
                              </Price>
                              <LastDiv>
                                <Share slug={userDataWish.slug} page={"wish"} />
                                <div
                                  className="edit-details-btn"
                                  style={{ display: "flex" }}
                                >
                                  <Edit
                                    onClick={(e) => getWishIdEdit(e.target.id)}
                                    id={userDataWish.id}
                                  >
                                    Edit
                                  </Edit>
                                  <Details
                                    id={userDataWish.id}
                                    onClick={(e) =>
                                      getWishIdForResultPage(e.target.id)
                                    }
                                  >
                                    Details
                                  </Details>
                                </div>
                              </LastDiv>
                            </div>
                          </div>
                        </CardLong>
                      ))
                    ) : (
                      <div>
                        <CardLonger>
                          <NotWishes>You don’t have any wishes</NotWishes>
                          <Buttons>
                            <Buttonleft
                              onClick={() => navigate("/creating-wish")}
                            >
                              Create a wish
                            </Buttonleft>
                            <Buttonright onClick={getWishesListRoute}>
                              Explore wishes
                            </Buttonright>
                          </Buttons>
                          {/*<Glasses src={file1} />*/}
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
                {!loading ? (
                  userProfile?.wishes?.complete.length !== 0 ? (
                    userProfile?.wishes?.complete?.map((userDataWish) => (
                      <CardLong key={userDataWish.id}>
                        <div className="com-cont">
                          <div className="image-container-1">
                            <Imagess
                              onClick={() =>
                                navigate("/my-wish-complete", {
                                  state: userDataWish.slug,
                                })
                              }
                              src={`${process.env.REACT_APP_API_URL}/${userDataWish.image}`}
                            />
                          </div>
                          <div className="content-title">
                            <Title
                              onClick={() =>
                                navigate("/my-wish-complete", {
                                  state: userDataWish.slug,
                                })
                              }
                            >
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
                        <NotWishes>You don’t have any wishes</NotWishes>
                        <Buttons>
                          <Buttonleft
                            onClick={() => navigate("/creating-wish")}
                          >
                            Create a wish
                          </Buttonleft>
                          <Buttonright onClick={getWishesListRoute}>
                            Explore wishes
                          </Buttonright>
                        </Buttons>
                        {/* <Glasses src={file1} /> */}
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
                <div className="w-full flex flex-col justify-center">
                  {congrats ? (
                    congrats.map((congrat) => (
                      <CongratComments congrat={congrat} user={userProfile} />
                    ))
                  ) : (
                    <div>
                      <CardLonger>
                        <NotWishes>You don’t have any wishes</NotWishes>
                        <Buttons>
                          <Buttonleft>Create a wish</Buttonleft>
                          <Buttonright onClick={getWishesListRoute}>
                            Explore wishes
                          </Buttonright>
                        </Buttons>
                        <Glasses src={file1} />
                      </CardLonger>
                      <Division>
                        <Maybe>
                          Maybe you know{" "}
                          <HiArrowNarrowRight
                            style={{
                              float: "right",
                              fontSize: "20px",
                              color: "#3800B0",
                            }}
                          />
                          <HiArrowNarrowLeft
                            style={{
                              float: "right",
                              fontSize: "20px",
                              color: "#3800B0",
                            }}
                          />
                        </Maybe>
                        <Swiper
                          slidesPerView={4.5}
                          spaceBetween={16}
                          slidesPerGroup={5}
                          loop={true}
                          loopFillGroupWithBlank={true}
                          modules={[Pagination, Navigation]}
                          className="mySwiper"
                        >
                          {Carddata.popular.map((index) => (
                            <SwiperSlide>
                              <Picture src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5ODc1NTM4NjMyOTc2Mzcz/gettyimages-693134468.jpg" />
                              <Name>
                                {index.title}
                                <HiBadgeCheck
                                  style={{
                                    color: "blue",
                                    margin: "2px 0 0 5px",
                                    float: "right",
                                  }}
                                />
                              </Name>
                              <Tag>{index.time}</Tag>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </Division>
                    </div>
                  )}
                </div>
              </TabPanel>
            </Tabs>
          </Grid.Col>
        </Grid>
      </div>
    </Body>
  );
};
export default MyProfile;
