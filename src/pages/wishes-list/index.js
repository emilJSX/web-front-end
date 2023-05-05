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
import Loader from "../../shared/ui/Loader";

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
import { useEffect } from "react";
import { useState } from "react";
import { Tab } from "react-tabs";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../style/icons/search-icon.svg";
import useInfiniteScroll from "react-infinite-scroll-hook";
import CustomBreadcrumb from "../../shared/components/breadcrumb";
import { myaxios, myaxiosprivate } from "../../api/myaxios";

const WishList = () => {
  const [getAllWishData, setAllWishData] = useState([]);
  const [getSearchValue, setSearchValue] = useState("");
  const [getCategoryId, setCategoryId] = useState(null);

  const navigate = useNavigate();
  const [infiniteScrollWish, setInfinityScrollWish] = useState(0);
  const [isLastWish, setIsLastWish] = useState(null);

  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [skip, setSkip] = useState(0);
  const [error, setError] = useState(null);

  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const [categories, setCategories] = useState();

  const buttonTitles = [{ id: 0, title: "All" }];
  const loadMoreWish = (e) => {
    e.preventDefault();
    if (activeTab === 1) setActiveTab(1);
    !isLast && setInfinityScrollWish(infiniteScrollWish + 25);
  };
  useEffect(() => {
    setError("");
    setLoading(true);
    myaxiosprivate
      .get("/api/v1/wish/list?skip=0", {
        params: {
          skip: infiniteScrollWish,
        },
      })
      .then(({ data }) => {
        setAllWishData(data.data.results);
        setIsLastWish(data.data.last);
        setTotalWish(data.data.total);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [infiniteScrollWish]);
  // const [sentryRef] = useInfiniteScroll({
  //   loading: loading,
  //   hasNextPage: hasNextPage,
  //   disabled: getSearchValue || !!error,
  //   onLoadMore: () => {
  //     setLoading(true);

  //     let _skip = isFirstLoad ? 0 : skip + 10;
  //     setSkip(_skip);
  //     setIsFirstLoad(false);
  //     hasNextPage &&
  //       myaxiosprivate
  //         .get(`/api/v1/wish/list`, {
  //           params: {
  //             skip: _skip,
  //             ...(getSearchValue && { search: getSearchValue }),
  //             ...(getCategoryId && { category_id: +getCategoryId }),
  //           },
  //         })
  //         .then((res) => {
  //           setHasNextPage(!res.data.data.last);

  //           setAllWishData((prev = []) => [
  //             ...prev,
  //             ...(res.data.data.results || []),
  //           ]);
  //         })
  //         .catch((error) => {
  //           setError(error.response);
  //         })
  //         .finally(() => {
  //           setLoading(false);
  //         });
  //   },
  //   rootMargin: "0px 0px 400px 0px",
  // });

  // useEffect(() => {
  //   myaxios.get('/api/v1/wish/categories/get', {
  //   }).then((res)=> {
  //     setCategoryWish(res.data.data)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // },[])
  const { state } = useLocation();
  function getWishIdForResult(slug) {
    navigate("/wish/" + slug, {
      state: {
        slug: slug,
        name: state,
      },
    });
  }

  function getUserSlugForProfile(id) {
    if (!id) {
    } else {
      navigate("/profile/" + id, { state: id });
    }
  }

  const getResultWishesList = () => {
    setLoading(true);
    setError("");
    myaxiosprivate
      .get("/api/v1/wish/list", {
        params: {
          skip: 0,
          ...(getSearchValue && { search: getSearchValue }),
          ...(getCategoryId && { category_id: +getCategoryId }),
        },
      })
      .then(({ data }) => {
        setAllWishData(data.data.results);
        setSearchValue("");
        setSkip(0);
        // setIsFirstLoad(false);
        setHasNextPage(data.data.last);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    myaxios
      .get("/api/v1/wish/categories/get")
      .then(({ data }) => {
        setCategories(data?.data);
      })
      .catch((err) => setError(err.message));
  }, []);
  const handleClickGetIDCategory = (event) => {
    setCategoryId(event.currentTarget.id);
  };
  const handleKeyDown = (e) => {
    e.keyCode === 13 && getResultWishesList();
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <BlogMainSection fluid>
      <div className="instruction">
        {/*<p>Main {">"} Wishes</p>*/}
        <CustomBreadcrumb
          margins="mb-8"
          links={[
            {
              title: "Main",
              to: "/",
            },
            {
              title: "Wishes",
              to: "/wish-list",
            },
          ]}
        />
        <h2>Wishes</h2>
      </div>
      <ButtonSection>
        <div className="btn-section">
          <div className="btn-container">
            {buttonTitles?.map((category) => (
              <Tab key={category.id} value={category.title}>
                <button
                  className={
                    category.id == 0
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
                  id={category.id}
                >
                  {category.title}
                </button>
              </Tab>
            ))}
            {categories?.map((category) => (
              <Tab key={category.id} value={category.name}>
                <button
                  className={
                    category.id == 0
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
                  id={category.id}
                >
                  {category.name}
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
            onKeyDown={handleKeyDown}
            className="inp-sect"
            placeholder="Search by wishes"
            style={{
              borderRadius: "8px",
              background: "#F7F8FA",
              paddingLeft: "20px",
            }}
          />
          <SearchIcon
            onClick={getResultWishesList}
            style={{ transform: "translate(-50px, 0px)", cursor: "pointer" }}
          />
        </div>
      </ButtonSection>

      <BlogCard fluid>
        <Grid>
          {!getAllWishData && <p>No such wish found</p>}
          {getAllWishData?.map((getWishList) => (
            <Grid.Col key={getWishList.id} xs={12} sm={6} md={3} lg={3}>
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
                    src={`${process.env.REACT_APP_API_URL}${getWishList.image}`}
                  ></ImgWrapper>
                </div>
                <ContentWrapper>
                  <Title
                    id={getWishList.slug}
                    onClick={(e) => getWishIdForResult(e.currentTarget.id)}
                  >
                    {getWishList.title}
                  </Title>

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
                      src={`${getWishList.user.image}`}
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
          <div className="flex justify-center my-5">
            <Loading
              onClick={loadMoreWish}
              disabled={isLastWish}
              className={isLastWish && "!hidden"}
            >
              Get More Wishes
            </Loading>
          </div>
        </Grid>
      </BlogCard>
      {/* <Loading>
        Loading
      </Loading> */}
    </BlogMainSection>
  );
};

export default WishList;
