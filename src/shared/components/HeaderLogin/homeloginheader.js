import React, { useState } from 'react'
import { Button } from '../../ui/Button'
// import { ReactComponent as BinIcon } from '../../../style/icons/binIcon.svg'
import { Card, CardIcon, HeaderContainer, HeaderLoginHomePage, ProfilName, ProfilP, ProfilWish } from './homeloginheader.Styled'
import { ReactComponent as WishLogo } from '../../../style/icons/wish-x-logo-1.svg'
import { allwish, headerLists } from '../../../utils/dummy-data/header-list'
import { SearchInput } from '../search-bar'
import { Box, Burger, MediaQuery, Menu } from '@mantine/core'
import { DotsToggle } from '../../ui/dots-toggle-menu'
import { Link, useLocation } from 'react-router-dom'
import MyProfile from '../../../pages/my-profile'
import {FiChevronDown} from 'react-icons/fi'
import {IoCalendarOutline, IoNotificationsOutline} from 'react-icons/io5'
import {AiOutlineMessage} from 'react-icons/ai'
import axios from 'axios'
import { useEffect } from 'react'


export const HomeLoginHeader = () => {
    const [opened, setOpened] = useState(false)
      const [getUserLoginData, setUserLoginData] = useState()
      const [show, setShow] = useState(false)
      const [showes, setShowes] = useState(false)
  
      const GetUserToken = localStorage.getItem("UserToken=")
  
    //   useEffect(()=> {
    //       axios.get("https://api.wishx.me/api/v1/user", {
    //           headers: {
    //               'Authorization': `Bearer ${GetUserToken}`,
    //               'Access-Control-Allow-Origin' : "*"
    //           }
    //       }).then((userData) => {
    //           setUserLoginData(userData.data.data.info)
    //       })
    //   },[])
    return (
      <HeaderLoginHomePage> 
        <section className='logoSection'>
                  <WishLogo />
                  <SearchInput iconHave={true} size='xl' />
                  <ul>
                      <li><Button variant='white'><Link>All wishes</Link></Button></li>
                  </ul>
              </section>
              {(GetUserToken?.length) ? (<>
                  <div>
                      <CardIcon>
                          <IoCalendarOutline style={{fontSize:"21px", margin:"13px 36px 0 0", color:"#3800B0", float:"left"}}/>
                          <AiOutlineMessage style={{fontSize:"21px", margin:"13px 36px 0 0", color:"#3800B0", float:"left"}}/>
                          <IoNotificationsOutline style={{fontSize:"21px", margin:"13px 36px 0 0", color:"#3800B0", float:"left"}}/>
                      </CardIcon>
                  </div>
                  <Button style={{ marginBottom: "20px" }} ><Link to='/creating-wish'>Create a wish</Link></Button>
                  <Card>
                          <ProfilP><img style={{borderRadius: "50%", width: "45px", objectFit: "cover" , marginTop: "-9.99px", height: "45px"}} src={`https://api.wishx.me/${getUserLoginData?.avatar}`} /></ProfilP>
                          <ProfilName>{getUserLoginData?.full_name}<FiChevronDown style={{marginLeft: "110px", fontSize:"20px", marginTop:"-12px"}}/></ProfilName>
                          <ProfilWish>{getUserLoginData?.wishes_count} wishes • $567</ProfilWish>
                  </Card>
                      </>)
                      :
                  (<section className='log-in-out-Section'>
                      <Button variant='white'><Link to='/log-in'>Log in</Link></Button>
                      <Button className="ml-8"><Link to='/creating-wish'>Create a wish</Link></Button>
                  </section>)
              }
      </HeaderLoginHomePage>
    )
  }
  
  
  export default HomeLoginHeader;