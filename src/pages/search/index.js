import {
  Wrapper,
  ImgWrapper,
  ContentWrapper,
  Titles,
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
  GridBody,
  Loading
} from "./SearchCard.styled";
import { Carddata } from "./CardData"
import {
  Grid,
  Progress,

} from "@mantine/core";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Mainly, Title,Name, Personal, Photo, Searchbar, Searchdiv, Tag } from "./Search.Styled";
import {HiBadgeCheck, HiOutlineFilter} from "react-icons/hi"
import {FiSearch} from "react-icons/fi"
import { useState, useEffect } from "react";
import axios from "axios";





function Search() {
  const getUserToken = localStorage.getItem("UserToken=")

  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchs, setSearchs] = useState("");
  const [filteredCountriesa, setFilteredCountriesa] = useState([]);

  const [getCategoryId,setCategoryId] = useState()
  console.log(getCategoryId)
  const[getAllPeopleData, setAllPeopleData] = useState([])
  console.log(getAllPeopleData, "GET ALL PEOPLE")
  const[getAllWishData, setAllWishData] = useState([])
  const[getSearchValue, setSearchValue] = useState("")
  const[getResultWishTotal, setResultWishTotal] = useState()
  const[getResultPeopleTotal, setResultPeopleTotal] = useState()
  console.log(getSearchValue)


  const getResultSearchingData = () => {
    if(getCategoryId == 1) {
    axios.get('https://api.wishx.me/api/v1/wish/list?skip=0', {
      params: {
        skip: 0,
        search: getSearchValue,
      },
      headers: {
        'Authorization': `Bearer ${getUserToken}`,
      }
    }).then((getResultWish) => {
      setAllWishData(getResultWish.data.data)
      setResultWishTotal(getResultWish.data.data.total)
    })
    }

    if(getCategoryId == 2) {
      axios.get('https://api.wishx.me/api/v1/profiles/search', {
        params: {
          skip: 0,
          search: getSearchValue,
        },
        headers: {
          'Authorization': `Bearer ${getUserToken}`,
        }
      }).then((getResultPeople) => {
        setAllPeopleData(getResultPeople.data.data)
        setResultPeopleTotal(getResultPeople.data.data.total)
      })
    }
  }


  useEffect(() => {
    axios.get('https://api.wishx.me/api/v1/profiles/search', {
      params: {
        skip: 0,
      },
      headers: {
        'Authorization': `Bearer ${getUserToken}`,
      }
    }).then((getResultPeople) => {
      setResultPeopleTotal((getResultPeople.data.data.total))
      setAllPeopleData(getResultPeople.data.data)
    })
  }, [])
  
  
  useEffect(() => {
    axios.get('https://api.wishx.me/api/v1/wish/list?skip=0', {
      params: {
        skip: 0,
      },
      headers: {
        'Authorization': `Bearer ${getUserToken}`,
      }
    }).then((getResultWish) => {
      setAllWishData(getResultWish.data.data)
      setResultWishTotal(getResultWish.data.data.total)
    })
  },[])



  return (
  <Mainly>
    <Title>Search results</Title>
    <Searchdiv>
    <Searchbar
    onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Bruno"
      />
      <FiSearch onClick={getResultSearchingData} className="lupa"/>
      <HiOutlineFilter className="filter"/>
      </Searchdiv>
    <Tabs
      defaultActiveKey="wish"
      id="uncontrolled-tab-example"
      className="mb-3 tabs-choose"
      
    >
      <Tab eventKey="wish" className="tabone tabsfirst"  title={(<p id="1" onClick={(e)=>setCategoryId(e.target.id)}>Wishes <span style={{marginLeft:"8px",color:"#160046", opacity:"0.56"}}>{getResultWishTotal}</span></p>) }>
        <GridBody>
        <Grid className="griddiv">
            {getAllWishData?.results?.map((getWishData) => (
            // <Grid.Col className="gridcol" xs={6} md={3} lg={3}>
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
                      <ImgWrapper src={`https://api.wishx.me${getWishData.image}`}></ImgWrapper>
                    </div>
                    <ContentWrapper>
                      <Titles>{getWishData.title}</Titles>

                      <UserWrapper>
                        <UserAbout>
                          <UserName>{getWishData.user.full_name}</UserName>
                          <UserDesc>for birthday on {getWishData.occasion}</UserDesc>
                        </UserAbout>
                        <UserPhoto src={getWishData.user.image}></UserPhoto>
                      </UserWrapper>

                      <PriceWrapper>
                        <ProgressWrapper>
                          <Progress size="sm" sections={[{ value: 50, color: "#3800B0" }]} />
                        </ProgressWrapper>
                        <Prices>
                          <LeftPrice>${getWishData.donate.received} raised</LeftPrice>
                          <RightPrice>${getWishData.donate.left} left</RightPrice>
                        </Prices>
                      </PriceWrapper>
                    </ContentWrapper>
              </Wrapper>
            // </Grid.Col>
            ))}
    </Grid>
          <Loading>Loading</Loading>
        </GridBody>
      </Tab>
      <Tab eventKey="profile" title={(<p id="2" onClick={(e)=>setCategoryId(e.target.id)}>Profile<span style={{marginLeft:"8px" ,color:"#160046", opacity:"0.56"}}>{getResultPeopleTotal}</span></p>) } className="tabtwo ">
    <GridBody>
      <Grid className="griddiv">
        {
          getAllPeopleData?.results?.map((index) =>(
            <Personal>
              <Photo src={`https://api.wishx.me${index?.image}`}/>
              <Name>{index?.name}</Name>
              <Tag>@{index?.username}</Tag>
            </Personal>

            //<HiBadgeCheck className="check"/>
          ))
        }
      </Grid>
      <Loading>Loading</Loading>
    </GridBody>
        </Tab>
    </Tabs>
  </Mainly>
  )
}
export default Search;