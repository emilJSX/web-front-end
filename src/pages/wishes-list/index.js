import React from 'react'
import { Grid, Container, Input, Image, Progress } from "@mantine/core";
import { BlogCard, BlogMainSection, ButtonSection, Loading, PaginationSection } from './WishesList.styled'
import { CustomInput } from '../../shared/ui/İnput';
import { Wrapper, ImgWrapper, ContentWrapper, Title, UserWrapper, UserAbout, UserDesc, UserName, UserPhoto, PriceWrapper, ProgressWrapper, Prices, LeftPrice, RightPrice } from '../../shared/components/home/homeCard/HomeCard.styled'
import { AiOutlineSearch, AiTwotoneLike } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Carddata } from './Cards';
import FilterColumns from '../wish-pages/filter/filter';
import { FiFilter } from 'react-icons/fi';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Tab } from 'react-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const WishList = () => {
  const [getAllWishData, setAllWishData] = useState([])
  const [getSearchValue, setSearchValue] = useState("")
  const [getCategoryId, setCategoryId] = useState()


  const getUserToken = localStorage.getItem("UserToken=")


  const GetResultWishesList = () => {
    axios.get("https://api.wishx.me/api/v1/wish/list?skip=0", {
      params: {
        skip: 0,
        search: getSearchValue,
        category_id: +getCategoryId,

      },
      headers: {
        'Authorization': `Bearer ${getUserToken}`,
      }
    }).then((searchResult) => {
      setAllWishData(searchResult.data.data)
    })
  }

  useEffect(() => {
    axios.get("https://api.wishx.me/api/v1/wish/list?skip=0", {
      params: {
        skip: 0,
      },
      headers: {
        'Authorization': `Bearer ${getUserToken}`,
      }
    }).then((searchResult) => {
      setAllWishData(searchResult.data.data)
    })
  }, [])

  const buttonTitles = [{ id: 0, title: 'All' }, { id: 1, title: 'Travel' },
  { id: 2, title: 'Sport' }, { id: 3, title: 'Gadgets' }, { id: 4, title: 'Foto & Videos' }, { id: 5, title: 'Clothes' }];

  const handleClickGetIDCategory = event => {
    setCategoryId(event.currentTarget.id);
};


  return (
    <BlogMainSection fluid>
      <div className='instruction'>
        <p>Main {">"} Wishes</p>
        <h2>Wishes</h2>
      </div>
      <ButtonSection>
        <div className='btn-section'>
          <div className='btn-container'>
            {buttonTitles.map((title) => (
              <Tab value={title.title}>
                <button className={title.id == 0 ? 'all-btn selection-button' : 'other-btn selection-button'}
                  onClick={(e) => {
                    handleClickGetIDCategory(e),
                      document.querySelectorAll('.selection-button').forEach(element => {
                        element.id === e.currentTarget.id ? element.className = 'all-btn selection-button' :
                          element.className = 'other-btn selection-button'
                      });
                  }} id={title.id}>
                  {title.title}
                </button>
              </Tab>))}
          </div>
        </div>
        <div className='input-section' style={{
          height: "50px", display: 'flex',
          alignItems: 'center', paddingLeft: '10px', paddingRight: '10px'
        }}>
          <input type='search' onChange={(e) => setSearchValue(e.target.value)} className='inp-sect' placeholder='Search by all blog articles'
            style={{ borderRadius: '8px', background: '#F7F8FA', paddingLeft: '20px' }} />
          <FontAwesomeIcon icon={faSearch} onClick={GetResultWishesList} style={{ transform: 'translate(-50px, 0px)' }} />
        </div>
      </ButtonSection>

      <BlogCard fluid>
        <Grid>
          {getAllWishData.map((getWishList) => (
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
                  <ImgWrapper src={`https://api.wishx.me${getWishList.image}`}></ImgWrapper>
                </div>
                <ContentWrapper>
                  <Title>{getWishList.title}</Title>

                  <UserWrapper>
                    <UserAbout>
                      <UserName>{getWishList.user.full_name}</UserName>
                      <UserDesc>{`for birthday on ${getWishList.occasion}`}</UserDesc>
                    </UserAbout>
                    <UserPhoto src={`https://api.wishx.me${getWishList.user.image}`}></UserPhoto>
                  </UserWrapper>

                  <PriceWrapper>
                    <ProgressWrapper>
                      <Progress size="sm" sections={[{ value: 50, color: "#3800B0" }]} />
                    </ProgressWrapper>
                    <Prices>
                      <LeftPrice>{`$${getWishList.donate.left} left`}</LeftPrice>
                      <RightPrice>{`$${getWishList.donate.received} raised`}</RightPrice>
                    </Prices>
                  </PriceWrapper>
                </ContentWrapper>
              </Wrapper>
            </Grid.Col>
          ))}
        </Grid>

      </BlogCard>
      <Loading>
        Loading
      </Loading>
    </BlogMainSection>
  )
}

export default WishList