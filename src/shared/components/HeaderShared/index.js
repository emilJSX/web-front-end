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
import { Link } from 'react-router-dom'
import MyProfile from '../../../pages/my-profile'
import {FiChevronDown} from 'react-icons/fi'
import {IoCalendarOutline, IoNotificationsOutline} from 'react-icons/io5'
import {AiOutlineMessage} from 'react-icons/ai'
import { useEffect } from 'react'
import axios from 'axios'


export const HeaderShared = ({ toggle }) => {
    const [opened, setOpened] = useState(false)
    const [getUserLoginData, setUserLoginData] = useState()

    const GetUserToken = localStorage.getItem("UserToken=")

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

    return (
        <HeaderContainer>
            <section className='logoSection'>
                <WishLogo />
                <SearchInput iconHave={true} size='xl' />
                <ul>
                        <li className='all-wishes-btn'><Button variant='white'><Link to="/wish-list">All Wishes</Link></Button></li>
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
                    <IoCalendarOutline style={{fontSize:"21px", margin:"13px 36px 0 0", color:"#3800B0", float:"left"}}/>
                    <AiOutlineMessage style={{fontSize:"21px", margin:"13px 36px 0 0", color:"#3800B0", float:"left"}}/>
                    <IoNotificationsOutline style={{fontSize:"21px", margin:"13px 36px 0 0", color:"#3800B0", float:"left"}}/>
                </CardIcon>
                <CreateWishBtn><Link to='/creating-wish'>Create a wish</Link></CreateWishBtn>
                <Card>
                        <ProfilP><img style={{borderRadius: "50%", width: "45px", objectFit: "cover" , marginTop: "-9.99px", height: "45px"}} src={`https://api.wishx.me/${getUserLoginData?.avatar}`} /></ProfilP>
                        <ProfilName>{getUserLoginData?.full_name}<FiChevronDown style={{marginLeft: "110px", fontSize:"20px", marginTop:"-8px"}}/></ProfilName>
                        <ProfilWish>{getUserLoginData?.wishes_count} wishes • $567</ProfilWish>
                </Card>
            </div>
                    </>)
                    :
                (<section className='log-in-out-Section'>
                    <Button variant='white'><Link to='/log-in'>Log in</Link></Button>
                    <Button><Link to='/creating-wish'>Create a wish</Link></Button>
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