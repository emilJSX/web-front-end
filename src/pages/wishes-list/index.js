import React from "react";
import { Grid, Container, Input, Image, Progress } from "@mantine/core";
import {
  BlogCard,
  BlogMainSection,
  ButtonSection,
  Loading,
  PaginationSection,
} from "./WishesList.styled";
import { CustomInput } from "../../shared/ui/İnput";
import {
  Wrapper,
  ImgWrapper,
  ContentWrapper,
  Title,
  UserWrapper,
  UserAbout,
  UserDesc,
  UserName,
  UserPhoto,
  PriceWrapper,
  ProgressWrapper,
  Prices,
  LeftPrice,
  RightPrice,
} from "../../shared/components/home/homeCard/HomeCard.styled";
import { AiOutlineSearch, AiTwotoneLike } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Carddata } from "./Cards";
import FilterColumns from "../wish-pagess/filter/filter";
import { FiFilter } from "react-icons/fi";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Tab } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../style/icons/search-icon.svg";
import useInfiniteScroll from "react-infinite-scroll-hook";

const WishList = () => {
  const [getAllWishData, setAllWishData] = useState([]);
  const [getSearchValue, setSearchValue] = useState("");
  const [getCategoryId, setCategoryId] = useState(null);

  const getUserToken = localStorage.getItem("UserToken=");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [skip, setSkip] = useState(0);
  const [error, setError] = useState(null);

  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const [sentryRef] = useInfiniteScroll({
    loading: loading,
    hasNextPage: hasNextPage,
    disabled: !!error,
    onLoadMore: () => {
      setLoading(true);
      
      let _skip = isFirstLoad ? 0 : skip + 10;
      setSkip(_skip);
      setIsFirstLoad(false);

      axios
        .get(`https://api.wishx.me/api/v1/wish/list`, {
          params: {
            skip: _skip,
            ...(getSearchValue && { search: getSearchValue }),
            ...(getCategoryId && { category_id: +getCategoryId }),
          },
          headers: {
            Authorization: `Bearer ${getUserToken}`,
          },
        })
        .then((searchResult) => {
          setHasNextPage(!searchResult.data.data.last);

          setAllWishData((prev) => [...prev, ...searchResult.data.data.results || []]);
        }).catch((error) => {
          setError(error.response);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    rootMargin: "0px 0px 400px 0px",
  });

  function getWishIdForResult(slug) {
    navigate("/wish/" + slug, { state: slug });
  }

  function getUserSlugForProfile(id) {
    if (!id) {
      console.log(" ");
    } else {
      navigate("/profile/" + id, { state: id });
    }
  }

  const GetResultWishesList = () => {
    setLoading(true);
    axios
      .get("https://api.wishx.me/api/v1/wish/list", {
        params: {
          skip: 0,
          ...(getSearchValue && { search: getSearchValue }),
          ...(getCategoryId && { category_id: +getCategoryId }),
        },
        headers: {
          Authorization: `Bearer ${getUserToken}`,
        },
      })
      .then((searchResult) => {
        setAllWishData(searchResult.data.data.results);
        setSkip(0);
        setIsFirstLoad(false);
        setHasNextPage(!searchResult.data.data.last);
      }).finally(() => {
        setLoading(false);
      })
  };

  // useEffect(() => {
  //   axios
  //     .get("https://api.wishx.me/api/v1/wish/list?skip=0", {
  //       params: {
  //         skip: 0,
  //       },
  //       headers: {
  //         Authorization: `Bearer ${getUserToken}`,
  //       },
  //     })
  //     .then((searchResult) => {
  //       setAllWishData(searchResult.data.data.results);
  //     });
  // }, []);

  const buttonTitles = [
    { id: 0, title: "All" },
    { id: 1, title: "Travel" },
    { id: 2, title: "Sport" },
    { id: 3, title: "Gadgets" },
    { id: 4, title: "Foto & Videos" },
    { id: 5, title: "Clothes" },
  ];

  const handleClickGetIDCategory = (event) => {
    setCategoryId(event.currentTarget.id);
  };

  return (
    <BlogMainSection fluid>
      <div className="instruction">
        <p>Main {">"} Wishes</p>
        <h2>Wishes</h2>
      </div>
      <ButtonSection>
        <div className="btn-section">
          <div className="btn-container">
            {buttonTitles.map((title) => (
              <Tab value={title.title}>
                <button
                  className={
                    title.id == 0
                      ? "all-btn selection-button"
                      : "other-btn selection-button"
                  }
                  onClick={(e) => {
                    handleClickGetIDCategory(e),
                      document
                        .querySelectorAll(".selection-button")
                        .forEach((element) => {
                          element.id === e.currentTarget.id
                            ? (element.className = "all-btn selection-button")
                            : (element.className =
                                "other-btn selection-button");
                        });
                  }}
                  id={title.id}
                >
                  {title.title}
                </button>
              </Tab>
            ))}
          </div>
        </div>
        <div
          className="input-section"
          style={{
            height: "50px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <input
            type="search"
            onChange={(e) => setSearchValue(e.target.value)}
            className="inp-sect"
            placeholder="Search by wishes"
            style={{
              borderRadius: "8px",
              background: "#F7F8FA",
              paddingLeft: "20px",
            }}
          />
          <SearchIcon
            onClick={GetResultWishesList}
            style={{ transform: "translate(-50px, 0px)" }}
          />
        </div>
      </ButtonSection>

      <BlogCard fluid>
        <Grid>
          {getAllWishData?.map((getWishList) => (
            <Grid.Col xs={12} sm={6} md={3} lg={3}>
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
                    name={getWishList.slug}
                    onClick={(e) => getWishIdForResult(e.currentTarget.name)}
                    className="congralute-button"
                  >
                    Congralute
                  </button>
                  <div className="image-background"></div>
                  <ImgWrapper
                    src={`https://api.wishx.me${getWishList.image}`}
                  ></ImgWrapper>
                </div>
                <ContentWrapper>
                  <Title>{getWishList.title}</Title>

                  <UserWrapper>
                    <UserAbout>
                      <UserName
                        id={getWishList.user.username}
                        onClick={(e) => getUserSlugForProfile(e.target.id)}
                      >
                        {getWishList.user.full_name}
                      </UserName>
                      <UserDesc>{`for birthday on ${getWishList.occasion}`}</UserDesc>
                    </UserAbout>
                    <UserPhoto
                      id={getWishList.user.username}
                      onClick={(e) => getUserSlugForProfile(e.target.id)}
                      src={`https://api.wishx.me${getWishList.user.image}`}
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
                      <LeftPrice>{`$${getWishList.donate.left} left`}</LeftPrice>
                      <RightPrice>{`$${getWishList.donate.received} raised`}</RightPrice>
                    </Prices>
                  </PriceWrapper>
                </ContentWrapper>
              </Wrapper>
            </Grid.Col>
          ))}
          {loading ||
            (hasNextPage && (
              <div ref={sentryRef}>
                <Loading />
              </div>
            ))}
        </Grid>
      </BlogCard>
      {/* <Loading>
        Loading
      </Loading> */}
    </BlogMainSection>
  );
};

export default WishList;
