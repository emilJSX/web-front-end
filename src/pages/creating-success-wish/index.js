import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCopy, faEnvelope, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Grid, Progress } from "@mantine/core";
import ponchik from '../../style/icons/poncik.png';
import userphoto from '../../style/icons/userphoto.png'
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
  CartContainer
} from './MyCreatedWishSuccess.Styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const Created_Success_Wish = () => {
  const navigate = useNavigate();
  const [GetUserWishData, setGetUserData] = useState([])
  useEffect(()=> {
    async function GetUserWishData () {
      await axios.get("https://api.wishx.me/api/v1/wish/view", {
        params: {wish_id: state},
        headers: {
          'Access-Control-Allow-Origin': '*',  xsrfHeaderName: 'X-XSRF-TOKEN', 'Authorization': `Bearer ${GetUserTokenCreationWish}`
        }
      }).then((GetUserWish)=> {
        setGetUserData(GetUserWish.data.data)
      }).catch((err) => {
        console.log(err)
      })
    }
    GetUserWishData()
  
  })

  const GetUserEditWishPage = () => {
    navigate("/wish-edit", {state:GetUserWishData })
  }

  const [getUserName, setUserName] = useState()
  const { state } = useLocation()
  const getCopySlug = GetUserWishData.slug
  const getCopyLinkValue = `wishx.me/${getCopySlug}`
  const WishCreationImage = GetUserWishData.image
  const UserGetCreationImgWish = `https://api.wishx.me/${WishCreationImage}`

  const GetUserTokenCreationWish = localStorage.getItem("UserToken=")
  useEffect(()=> {
    axios.get("https://api.wishx.me/api/v1/user",{
         headers: {
           'Access-Control-Allow-Origin': '*',  xsrfHeaderName: 'X-XSRF-TOKEN', 'Authorization': `Bearer ${GetUserTokenCreationWish}`
         }
       }).then((datauser) => {
        setUserName(datauser.data.data.info.full_name)
       })
  }, [])
 
  


  return (
    <MainContainer>
      <Container>
        <div className='container-insider'>
          <Hedaer>
            <p className='path-title'>Main {'>'} Create Wish {'>'} Success</p>
            <h1 className='edit-wish-title'>Ready</h1>
          </Hedaer>
          <CartContainer>
              <div className='cover'>
              <Grid style={{display: 'flex', justifyContent: 'center'}}>
                <Wrapper style={{width: '350px', minWidth: '375px'}}>
                  <div className="image-container">
                    <button className='congralute-button'>Congralute</button>
                    <div className="image-background"></div>
                    <ImgWrapper style={{ objectFit: 'cover'}} src={ponchik}></ImgWrapper>
                  </div>
                  <ContentWrapper>
                    <Title>Light, fluffy, delicious red velvet donuts.</Title>
                    <UserWrapper>
                      <UserAbout>
                        <UserName>Wade Warren</UserName>
                        <UserDesc>for birthday on 25 Nov 2022</UserDesc>
                      </UserAbout>
                      <UserPhoto src={userphoto}></UserPhoto>
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
            </Grid>
              </div>
          </CartContainer>
          <Section>
            <h5 className='description-title'>Share your wish to more people can see it</h5>
            <div className='wish-name'>
              <div className='icon-container'>
                <FaFacebook />
              </div>
              <div className='icon-container'>
                <FaInstagram />
              </div>
              <div className='icon-container'>
                <FaTwitter />
              </div>
              <div className='icon-container'>
                <FaWhatsapp />
              </div>
              <div className='icon-container'>
                <FaTelegram />
              </div>
            </div>
            <div className='cash-set-container'>
              <div className='cash-set-container-insider'>
                <h5 className='link-label'>Copy link</h5>
                <div className='cash-quantity-container'>
                  <FontAwesomeIcon icon={faLink} className='link-icon' />
                  <input type='text' value={getCopyLinkValue} style={{ background: '#ECEEF7' }} />
                  <button className='copy-button'>Copy</button>
                  <FontAwesomeIcon icon={faCopy} className='copy-icon' />
                </div>
              </div>
            </div>
            <div className='text-area'>
              <div className='text-area-insider'>
                <h5 className='invite-label'>Invite</h5>
                <input type='text' placeholder='Emails, comma separated' />
                <FontAwesomeIcon icon={faEnvelope} className='envelope-icon' />
                <FaTelegram className='telegram-icon' />
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
          </Section>
        </div>
        <div className='container-insider-sm'>
          <div className='content-container'>
            <Grid>
              <Grid.Col>
                <Wrapper style={{width: '100%'}}>
                  <div className="image-container">
                    <button className='congralute-button'>Congralute</button>
                    <div className="image-background"></div>
                    <ImgWrapper src={UserGetCreationImgWish}></ImgWrapper>
                  </div>
                  <ContentWrapper>
                    <Title>{GetUserWishData.title}</Title>
                    <UserWrapper>
                      <UserAbout>
                       
                        <UserName>{getUserName}</UserName>
                        <UserDesc>for birthday on {GetUserWishData.date}</UserDesc>
                      </UserAbout>
                      <UserPhoto src={userphoto}></UserPhoto>
                    </UserWrapper>

                    <PriceWrapper>
                      <ProgressWrapper>
                        <Progress size="sm" sections={[{ value: 50, color: "#3800B0" }]} />
                      </ProgressWrapper>
                      <Prices>
                        <LeftPrice> $9 raised</LeftPrice>
                        <RightPrice>${GetUserWishData.price} left</RightPrice>
                      </Prices>
                    </PriceWrapper>
                  </ContentWrapper>
                </Wrapper>
              </Grid.Col>
            </Grid>
            <div className='edit-button'>
              <button onClick={GetUserEditWishPage}>Edit wish</button>
            </div>
          </div>
        </div>
      </Container>
    </MainContainer>
  )
}

export default Created_Success_Wish
