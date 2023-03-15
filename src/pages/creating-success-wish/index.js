import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faCopy,
  faEnvelope,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Grid, Loader, Progress } from "@mantine/core";
import ponchik from "../../style/icons/poncik.png";
import userphoto from "../../style/icons/userphoto.png";
import navigationArrowIcon from "../../style/navigationIcons/arrow-right.png";
import copyIcon from "../../style/navigationIcons/copy.png";
import linkIcon from "../../style/navigationIcons/link-2.png";
import RedoIcon from "../../style/navigationIcons/redo.png";
import sendIcon from "../../style/navigationIcons/send-2.png";
import smsIcon from "../../style/navigationIcons/sms.png";

import {
  MainContainer,
  Container,
  Hedaer,
  Section,
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
  CartContainer,
} from "./MyCreatedWishSuccess.Styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CustomBreadcrumb from "../../shared/components/breadcrumb";
import { myaxiosprivate } from "../../api/myaxios";

const Created_Success_Wish = () => {
  const navigate = useNavigate();
  const [GetUserWishData, setGetUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function GetUserWishData() {
      setLoading(true);
      setError("")
      await myaxiosprivate
        .get("https://api.wishx.me/api/v1/wish/show", {
          params: { wish_id: state },
        })
        .then((GetUserWish) => {
          setGetUserData(GetUserWish.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }
    GetUserWishData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const GetUserEditWishPage = () => {
    navigate("/wish-edit", { state: GetUserWishData.id });
  };
  console.log(GetUserWishData)
  const [userData, setUserData] = useState();
  const { state } = useLocation();
  const getCopySlug = GetUserWishData.slug;
  const getCopyLinkValue = `wishx.me/${getCopySlug}`;
  const WishCreationImage = GetUserWishData.image;
  const UserGetCreationImgWish = `${process.env.REACT_APP_API_URL}/${WishCreationImage}`;
  useEffect(() => {
    setError("");
    myaxiosprivate
      .get("/api/v1/user")
      .then(({ data }) => {
        setUserData(data.data.info);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader size="xl" />
      </div>
    );
  }

  return (
    <MainContainer>
      <Container>
        <div className="container-insider">
          <Hedaer>
            {/*<p className='path-title'>Main {'>'} Create Wish {'>'} Success</p>*/}
            <p className="path-title">
              <CustomBreadcrumb
                links={[
                  {
                    title: "Main",
                    to: "/",
                  },
                  {
                    title: "Create Wish",
                    to: "/creating-wish",
                  },
                  {
                    title: "Success",
                  },
                ]}
              />
            </p>
            <h1 className="edit-wish-title">Ready</h1>
          </Hedaer>
          <CartContainer>
              <div className='cover'>
              <Grid style={{display: 'flex', justifyContent: 'center'}}>
                <Wrapper>
                  <div className="image-container">
                    <button className="congralute-button">Congralute</button>
                    <div className="image-background"></div>
                    <ImgWrapper
                      style={{ objectFit: "cover" }}
                      src={UserGetCreationImgWish}
                    ></ImgWrapper>
                  </div>
                  <ContentWrapper>
                    <Title>{GetUserWishData.title}</Title>
                    <UserWrapper>
                      <UserAbout>
                        <UserName>{userData?.full_name}</UserName>
                        <UserDesc>
                          for birthday on {GetUserWishData.date}
                        </UserDesc>
                      </UserAbout>
                      <UserPhoto
                        src={userData?.avatar ? userData?.avatar : userphoto}
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
                        <LeftPrice>$2,542 raised</LeftPrice>
                        <RightPrice>${GetUserWishData.price} left</RightPrice>
                      </Prices>
                    </PriceWrapper>
                  </ContentWrapper>
                </Wrapper>
              </Grid>
            </div>
          </CartContainer>
          <Section>
            <h5 className="description-title">
              Share your wish to more people can see it
            </h5>
            <div className="wish-name">
              <div className="icon-container">
                <FaFacebook />
              </div>
              <div className="icon-container">
                <FaInstagram />
              </div>
              <div className="icon-container">
                <FaTwitter />
              </div>
              <div className="icon-container">
                <FaWhatsapp />
              </div>
              <div className="icon-container">
                <FaTelegram />
              </div>
            </div>
            <div className="lg:pr-[120px]">
              <div className='cash-set-container'>
                <div className='cash-set-container-insider'>
                  <h5 className='link-label'>Copy link</h5>
                  <div className='cash-quantity-container'>
                    <img src={linkIcon} className='link-icon' />
                    <input type='text' value={getCopyLinkValue} style={{ background: '#ECEEF7' }} />
                    <button  className='copy-button'>Copy</button>
                    <img src={copyIcon} className='copy-icon' />
                  </div>
                </div>
              </div>
              <div className='text-area'>
                <div className='text-area-insider'>
                  <h5 className='invite-label'>Invite</h5>
                  <input type='text' style={{paddingTop: "5px" }} placeholder='Emails, comma separated' />
                  <img src={smsIcon} className='envelope-icon' />
                  <img src={sendIcon} className='telegram-icon' />
                </div>
              </div>
              <div className='multi-select'>
                <div className='sended-peoples-email'>
                  <h5 className='sent-invitations-title'>Sent invitations:</h5>
                  <div className='email-inputs'>
                    <div className='email-input-text-area'>mustang123@gmail.com</div>
                    <FontAwesomeIcon icon={faRotateLeft} className='fa-rotate'/>
                    <button className='resend-button'>Resend</button>
                  </div>
                  <div className='email-inputs'>
                    <div className='email-input-text-area'>keshaf@gmail.com</div>
                    <FontAwesomeIcon icon={faRotateLeft} className='fa-rotate'/>
                    <button className='resend-button'>Resend</button>
                  </div>
                  <div className='email-inputs'>
                    <div className='email-input-text-area'>fillshore@gmail.com</div>
                    <FontAwesomeIcon icon={faRotateLeft} className='fa-rotate'/>
                    <button className='resend-button'>Resend</button>
                  </div>
                  <div className='email-inputs'>
                    <div className='email-input-text-area'>katamarn@hotmail.com</div>
                    <FontAwesomeIcon icon={faRotateLeft} className='fa-rotate'/>
                    <button className='resend-button'>Resend</button>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
        <div className="container-insider-sm">
          <div className="content-container">
            <Grid>
              <Grid.Col>
                <Wrapper style={{ width: "100%" }}>
                  <div className="image-container">
                    <button className="congralute-button">Congralute</button>
                    <div className="image-background"></div>
                    <ImgWrapper src={UserGetCreationImgWish}></ImgWrapper>
                  </div>
                  <ContentWrapper>
                    <Title>{GetUserWishData.title}</Title>
                    <UserWrapper>
                      <UserAbout>
                        <UserName>{userData?.full_name}</UserName>
                        <UserDesc>
                          for birthday on {GetUserWishData.date}
                        </UserDesc>
                      </UserAbout>
                      <UserPhoto
                        src={userData?.avatar ? userData.avatar : userphoto}
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
                        <LeftPrice> $0 raised</LeftPrice>
                        <RightPrice>${GetUserWishData.price} left</RightPrice>
                      </Prices>
                    </PriceWrapper>
                  </ContentWrapper>
                </Wrapper>
              </Grid.Col>
            </Grid>
            <div className="edit-button">
              <button onClick={GetUserEditWishPage}>Edit wish</button>
            </div>
          </div>
        </div>
      </Container>
    </MainContainer>
  );
};

export default Created_Success_Wish;
