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
import { HiBadgeCheck, HiOutlineFilter } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
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
  const [getResultWishTotal, setResultWishTotal] = useState();
  const [getResultPeopleTotal, setResultPeopleTotal] = useState();
  const [getInfinityScroll, setInfinityScroll] = useState(0);
  const [error, setError] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // INFINITY SCROLL

  useEffect(() => {
    const fetchProfileUser = async () => {
      try {
        await myaxios
          .get(`/api/v1/profiles/search`, {
            params: { skip: getInfinityScroll },
          })
          .then((res) => {
            setAllPeopleData((last) => [...last, res.data]);
          });
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProfileUser();
  }, [getInfinityScroll]);

  // const OnclickProfileInfinity = () => {
  //   setInfinityScroll(getInfinityScroll + 10)
  // }

  // END INFINITY SCROLL

  function getWishIdForResult(slug) {
    navigate("/wish/s" + slug, { state: slug });
  }

  function getUserSlugForProfile(slug) {
    if (!slug) {
      console.log(" ");
    } else {
      navigate("/profile/" + slug, { state: slug });
    }
  }

  useEffect(() => {
    setError("");
    myaxiosprivate
      .get("/api/v1/profiles/search", {
        params: {
          skip: 0,
          search: state,
        },
      })
      .then((res) => {
        setResultPeopleTotal(res.data.data.total);
        setAllPeopleData(res.data.data);
        console.log(getResultPeople);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    setError("");
    myaxiosprivate
      .get("/api/v1/wish/list?skip=0", {
        params: {
          skip: 0,
          search: state,
        },
      })
      .then((res) => {
        setAllWishData(res.data.data);
        setResultWishTotal(res.data.data.total);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const getResultSearchingData = () => {
    setError("");
    myaxiosprivate
      .get("/api/v1/wish/list?skip=0", {
        params: {
          skip: 0,
          search: getSearchValue,
        },
      })
      .then((res) => {
        setAllWishData(res.data.data);
        setResultWishTotal(res.data.data.total);
      })
      .catch((err) => {
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
        setAllPeopleData(res.data.data);
        setResultPeopleTotal(res.data.data.total);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

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
      >
        <Tab
          eventKey="wish"
          className="tabone tabsfirst"
          title={
            <p>
              Wishes{" "}
              <span
                style={{ marginLeft: "8px", color: "#160046", opacity: "0.56" }}
              >
                {getResultWishTotal}
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
                      src={`https://api.wishx.me${getWishData.image}`}
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
            {/* <Loading onClick={(p)=>getInfinityScrolling(p + 10)}>Loading</Loading> */}
          </GridBody>
        </Tab>
        <Tab
          eventKey="profile"
          title={
            <p>
              Profile
              <span
                style={{ marginLeft: "8px", color: "#160046", opacity: "0.56" }}
              >
                {getResultPeopleTotal}
              </span>
            </p>
          }
          className="tabtwo "
        >
          <GridBody>
            <Grid className="griddiv">
              {getAllPeopleData?.results?.map((index) => (
                <Personal>
                  <Photo src={`https://api.wishx.me${index?.image}`} />
                  <Name
                    id={index.username}
                    onClick={(e) => getUserSlugForProfile(e.currentTarget.id)}
                  >
                    {index?.name}
                  </Name>
                  <Tag
                    id={index.username}
                    onClick={(e) => getUserSlugForProfile(e.currentTarget.id)}
                  >
                    @{index?.username}
                  </Tag>
                </Personal>

                //<HiBadgeCheck className="check"/>
              ))}
            </Grid>
            {/* <Loading onClick={OnclickProfileInfinity}>Get More Users</Loading> */}
          </GridBody>
        </Tab>
      </Tabs>
    </Mainly>
  );
}
export default Search;
