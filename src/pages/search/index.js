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
  Loading,
} from "./SearchCard.styled";
import { Carddata } from "./CardData";
import { Grid, Progress } from "@mantine/core";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
  Mainly,
  Title,
  Name,
  Personal,
  Photo,
  Searchbar,
  Searchdiv,
  Tag,
} from "./Search.Styled";
import Loader from "../../shared/ui/Loader";

import { HiBadgeCheck, HiOutlineFilter } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../style/icons/search-icon.svg";
import { myaxios, myaxiosprivate } from "../../api/myaxios";

function Search() {
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchs, setSearchs] = useState("");
  const [filteredCountriesa, setFilteredCountriesa] = useState([]);
  const [getCategoryId, setCategoryId] = useState(1);
  const [getAllPeopleData, setAllPeopleData] = useState([]);
  const [getAllWishData, setAllWishData] = useState([]);
  const [getSearchValue, setSearchValue] = useState("");
  const [getInfinityScroll, setInfinityScroll] = useState(0);
  const [infiniteScrollWish, setInfinityScrollWish] = useState(0);
  const [activeTab, setActiveTab] = useState(1);
  const [isLast, setIsLast] = useState(null);
  const [isLastWish, setIsLastWish] = useState(null);
  const [total, setTotal] = useState(null);
  const [totalWish, setTotalWish] = useState(null);
  const [error, setError] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // INFINITY SCROLL
  const { myUserId } = state;

  // END INFINITY SCROLL

  const loadMore = (e) => {
    e.preventDefault();
    if (activeTab === 2) setActiveTab(2);
    !isLast && setInfinityScroll(getInfinityScroll + 25);
  };
  const loadMoreWish = (e) => {
    e.preventDefault();
    if (activeTab === 1) setActiveTab(1);
    !isLast && setInfinityScrollWish(infiniteScrollWish + 25);
  };
  function getWishIdForResult(slug) {
    navigate("/wish/s" + slug, { state: slug });
  }

  function getUserSlugForProfile(slug) {
    if (slug) {
      navigate("/profile/" + slug, { state: { slug, myUserId } });
    }
  }
  useEffect(() => {
    setError("");
    setLoading(true);
    setIsLast(null);
    myaxiosprivate
      .get("/api/v1/profiles/search", {
        params: {
          skip: getInfinityScroll,
          search: state.getSearchValue,
        },
      })
      .then((res) => {
        setIsLast(res.data.data.last);
        setTotal(res.data.data.total);
        const filteredData = res.data.data.results.filter(
          (item) => item.id !== state.myUserId
        );
        setAllPeopleData((last) => [...last, ...filteredData]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [state.getSearchValuem, getInfinityScroll]);

  useEffect(() => {
    setError("");
    setLoading(true);
    myaxiosprivate
      .get("/api/v1/wish/list?skip=0", {
        params: {
          skip: infiniteScrollWish,
          search: state.getSearchValue,
        },
      })
      .then((res) => {
        setIsLastWish(res.data.data.last);
        setTotalWish(res.data.data.total);
        setAllWishData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [state.getSearchValue, infiniteScrollWish]);

  const getResultSearchingData = () => {
    setError("");
    setLoading(true);
    myaxiosprivate
      .get("/api/v1/wish/list?skip=0", {
        params: {
          skip: 0,
          search: getSearchValue,
        },
      })
      .then((res) => {
        setAllWishData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });

    myaxiosprivate
      .get("/api/v1/profiles/search", {
        params: {
          skip: 0,
          search: getSearchValue,
        },
      })
      .then((res) => {
        const filteredData = res.data.data.results.filter(
          (item) => item.id !== state.myUserId
        );
        setAllPeopleData(filteredData);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Mainly>
      <Title>Search results</Title>
      <Searchdiv>
        <Searchbar
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Bruno"
        />
        <SearchIcon onClick={getResultSearchingData} className="lupa" />
        <HiOutlineFilter className="filter" />
      </Searchdiv>
      <Tabs
        defaultActiveKey="wish"
        id="uncontrolled-tab-example"
        className="mb-3 tabs-choose"
        activeKey={activeTab}
        onSelect={setActiveTab}
      >
        <Tab
          key={"wish"}
          eventKey={1}
          className="tabone tabsfirst"
          title={
            <p>
              Wishes{" "}
              <span
                style={{ marginLeft: "8px", color: "#160046", opacity: "0.56" }}
              >
                {getAllWishData?.total}
              </span>
            </p>
          }
        >
          <GridBody>
            <Grid className="griddiv">
              {getAllWishData?.results?.map((getWishData) => (
                // <Grid.Col className="gridcol" xs={6} md={3} lg={3}>
                <Wrapper
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
                    <button
                      name={getWishData.slug}
                      onClick={(e) => getWishIdForResult(e.currentTarget.name)}
                      className="congralute-button"
                    >
                      Congralute
                    </button>
                    <div className="image-background"></div>
                    <ImgWrapper
                      src={`${process.env.REACT_APP_API_URL}${getWishData.image}`}
                    ></ImgWrapper>
                  </div>
                  <ContentWrapper>
                    <Titles>{getWishData.title}</Titles>

                    <UserWrapper>
                      <UserAbout>
                        <UserName>{getWishData.user.full_name}</UserName>
                        <UserDesc>
                          for birthday on {getWishData.occasion}
                        </UserDesc>
                      </UserAbout>
                      <UserPhoto src={getWishData.user.image}></UserPhoto>
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
                // </Grid.Col>
              ))}
            </Grid>
            <div className="flex justify-center my-5">
              <Loading
                onClick={loadMoreWish}
                disabled={isLastWish}
                className={isLastWish && "!hidden"}
              >
                Get More Wishes
              </Loading>
            </div>
          </GridBody>
        </Tab>
        <Tab
          key={"people"}
          eventKey={2}
          title={
            <p>
              Profile
              <span
                style={{ marginLeft: "8px", color: "#160046", opacity: "0.56" }}
              >
                {getAllPeopleData.length}
              </span>
            </p>
          }
          className="tabtwo "
        >
          <GridBody>
            <Grid className="w-[90%] flex justify-center items-center mx-auto">
              {getAllPeopleData?.map((index) => (
                <Personal>
                  {/* {console.log(index)} */}
                  <Photo
                    src={
                      index?.image
                        ? index?.image
                        : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                    }
                  />
                  <Name
                    id={index.username}
                    onClick={(e) => getUserSlugForProfile(e.currentTarget.id)}
                  >
                    {index?.name}
                    {index?.verify && <HiBadgeCheck className="check" />}
                  </Name>
                  <Tag
                    id={index.username}
                    onClick={(e) => getUserSlugForProfile(e.currentTarget.id)}
                  >
                    @{index?.username}
                  </Tag>
                </Personal>
              ))}
            </Grid>
            <div className="flex justify-center my-5">
              <Loading
                onClick={loadMore}
                disabled={isLast}
                className={isLast && "!hidden"}
              >
                Get More Users
              </Loading>
            </div>
          </GridBody>
        </Tab>
      </Tabs>
    </Mainly>
  );
}
export default Search;
