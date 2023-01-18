import React, { useState } from 'react'
import { Button } from '../../ui/Button'
// import { ReactComponent as BinIcon } from '../../../style/icons/binIcon.svg'
import { Card, CardIcon, CreateWishBtn, HeaderContainer, ProfilName, ProfilP, ProfilWish } from './Header.Styled'
import { ReactComponent as WishLogo } from '../../../style/icons/wish-x-logo-1.svg'
import { allwish, headerLists } from '../../../utils/dummy-data/header-list'
import { SearchInput } from '../search-bar'
import { Box, Burger, MediaQuery } from '@mantine/core'
import { DotsToggle } from '../../ui/dots-toggle-menu'
import { ReactComponent as StarsIcon } from '../../../style/icons/small-stars.svg'
import { ReactComponent as GridIcon } from '../../../style/icons/grid-icon.svg'
import { Link, useNavigate } from 'react-router-dom'
import MyProfile from '../../../pages/my-profile'
import {FiChevronDown} from 'react-icons/fi'
import {IoCalendarOutline, IoNotificationsOutline} from 'react-icons/io5'
import {AiOutlineMessage} from 'react-icons/ai'
import { useEffect } from 'react'
import axios from 'axios'
import Autholog from '../../../shared/LogIn-SingUp/Autholog';
import { ButtonDefault } from '../../../pages/home/Home.Styled'


export const HeaderShared = ({ toggle }) => {
    const [opened, setOpened] = useState(false)
    const [getUserLoginData, setUserLoginData] = useState()
    const [showes, setShowes] = useState(false)
    const [show, setShow] = useState(false)
    const GetUserToken = localStorage.getItem("UserToken=")

    const [getOpenedMenu, setOpenedMenu] = useState(false)
    const navigate = useNavigate()
    const toggleOptions = () => {
      setOpenedMenu(!getOpenedMenu);
    };

    function GetWishNameForCreation() {
  
      if(GetUserToken) {
        navigate('/creating-wish')
      } else  {
        setShowes(true)
      }
    }

    useEffect(()=> {
        axios.get("https://api.wishx.me/api/v1/user", {
            headers: {
                'Authorization': `Bearer ${GetUserToken}`,
                'Access-Control-Allow-Origin' : "*"
            }
        }).then((userData) => {
            setUserLoginData(userData.data.data.info)
        })
    },[])


    function LogoutApi() {
      axios.post("https://api.wishx.me/api/v1/logout", {}, {
        headers: {
          'Authorization': `Bearer ${GetUserToken}`,
          'Access-Control-Allow-Origin' : "*"
        }
      }).then((getLogoutResult) => {
        console.log(getLogoutResult)
        localStorage.clear();
        document.cookie = "UserToken=" + ""
        navigate('/')
      }).catch((err)=> {
        console.log(err)
      })
    }


    return (
        <HeaderContainer>
            <section className='logoSection'>
                <a href='/'><WishLogo /></a>
                <SearchInput iconHave={true} size='xl' />
                <ul>
                        <li className='all-wishes-btn'><Link to="/wish-list">All Wishes</Link></li>
                        {/* <li><Button variant='white'><Link>How it works</Link></Button></li> */}
                        {/* <li><Button variant='white'><Link>Partners</Link></Button></li> */}
                        {/* <li><Button variant='white'><Link>Blog</Link></Button></li> */}
                </ul>
            </section>
            {/*     float: right;
    position: absolute; */}
            {(GetUserToken?.length) ? (<>
            <div className='container-mobile-menu'>
                <CardIcon>
                    <a href='/calendar'><IoCalendarOutline style={{fontSize:"21px", margin:"13px 36px 0 0", color:"#3800B0", float:"left"}}/></a>
                    {/* <a href=''><AiOutlineMessage style={{fontSize:"21px", margin:"13px 36px 0 0", color:"#3800B0", float:"left"}}/></a> */}
                    <IoNotificationsOutline style={{fontSize:"21px", margin:"13px 36px 0 0", color:"#3800B0", float:"left"}}/>
                </CardIcon>
                <CreateWishBtn><Link to='/creating-wish'>Create a wish</Link></CreateWishBtn>
                <Card>
                        <a href='/my-profile'><ProfilP><img style={{borderRadius: "50%", width: "45px", objectFit: "cover" , marginTop: "-9.99px", height: "45px"}} src={`https://api.wishx.me${getUserLoginData?.avatar}` == null ? "https://cdn-icons-png.flaticon.com/512/1144/1144760.png" : `https://api.wishx.me${getUserLoginData?.avatar}`} /></ProfilP></a>
                        <a href='/my-profile'><ProfilName>{getUserLoginData?.full_name  == null ? "does not exist" == null : getUserLoginData?.full_name}</ProfilName></a><FiChevronDown onClick={toggleOptions} style={{marginLeft: "110px", fontSize:"20px", marginTop:"-8px", position: "absolute", top: "22px", left: "51px"}}/>
                        <ProfilWish>{getUserLoginData?.wishes_count} wishes • $0</ProfilWish>
                <div className='dropdown-menu-logined' style={{ display: !getOpenedMenu ? "none" : "block" }}>
                  <div className='body-menu-logined'>
                    <ul>
                      <a href='/profile-edit'><li className='edit-personal-info-btn'>Edit personal info</li></a>
                      <a href='/settings'><li className='settings-btn'>Settings</li></a>
                      <a onClick={LogoutApi}><li className='sign-out-btn'>Sign out</li></a>
                    </ul>
                  </div>
                </div>
                </Card>

            </div>
                    </>)
                    :
                (<section className='log-in-out-Section'>
                    {showes ? <Autholog setShow={setShow} setShowes={setShowes} /> : (show ? "" : <div style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <Button variant="white" className="log-buttons">
                          <ButtonDefault onClick={
                            () => {
                              let body = document.querySelector('body');
                              body.setAttribute('style', 'overflow-x: hidden');
                              setShowes(!show)
                            }
                          }

                            style={{
                              border: '0',
                              color: "#3800B0",
                              fontSize: '14px',
                              fontWeight: '600',

                            }}
                          >Log In</ButtonDefault>
                        </Button>

                      </div>)}
                    <Button><Link onClick={GetWishNameForCreation}>Create a wish</Link></Button>
                </section>)
            }
            <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <Box className='create-wish-btn'>
                    <Button icon={<StarsIcon />} >Create a wish</Button>
                </Box>
            </MediaQuery>
            <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <div>
                    <div className='dots-icon'>
                        <GridIcon />
                        <DotsToggle toggleDots={toggle?.open} setToggleDots={toggle?.setOpen} />
                    </div>
                </div>
            </MediaQuery>
        </HeaderContainer >
    )
}


export default HeaderShared;