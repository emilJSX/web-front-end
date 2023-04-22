import react, { useEffect } from "react";
import { Button, Grid, Image } from "@mantine/core";
import Loader from "../../../shared/ui/Loader";

import {
  BlogCard,
  BlogMainSection,
  ButtonSection,
  CardTopSection,
  PaginationSection,
} from "./BlogMain.Styled";
// import mountn from "../../../style/icons/moutn.jpg";
import { Tab, Tabs, TabPanel } from "react-tabs";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
// import { BlogDataCard } from "./BlogCardData";
// import Pagination from "@mui/material/Pagination";
// import PaginationItem from "@mui/material/PaginationItem";
// import Stack from "@mui/material/Stack";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../../style/icons/search-icon.svg";
import CustomBreadcrumb from "../../../shared/components/breadcrumb";
import React from "react";
import { myaxios } from "../../../api/myaxios";

const MainBlog = () => {
  const navigate = useNavigate();
  const [GetUserCategoryId, setUserCategoryId] = useState();
  const [GetUserSearch, setUserSearch] = useState();
  const [DataSkip, setDataSkip] = useState(0);
  const [getResultApiSearch, setResultApiSearch] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState();
  const [showMore, setShowMore] = useState(0);
  const [isLast, setIsLast] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    myaxios
      .get("/api/v1/blog/categories/get")
      .then(({ data }) => {
        setCategories(data?.data);
      })
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    myaxios
      .get("/api/v1/blog/articles/get", {
        params: {
          skip: showMore,
        },
      })
      .then(({ data }) => {
        setResultApiSearch(data.data.list);
        setIsLast(data.data.last);
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [showMore]);

  const GetUserValueForApi = (e) => {
    navigate("/blog-search-result", {
      state: { GetUserSearch, GetUserCategoryId },
    });
  };
  const handleKeyDown = (e) => {
    e.keyCode === 13 && GetUserValueForApi();
  };
  let setLoadingBlog = [];
  getResultApiSearch?.map((AllBlog) =>
    AllBlog.partials.map((e) => setLoadingBlog.push(e))
  );

  const buttonTitles = [{ id: 0, title: "All" }];

  const handleClickGetIDCategory = (event) => {
    setUserCategoryId(event.currentTarget.id);
  };

  const truncate = (input) =>
    input?.length > 300 ? `${input.substring(0, 100)}...` : input;
  if (loading) {
    return <Loader />;
  }
  const breadCrumb = [
    {
      title: "Main",
      to: "/",
    },
    {
      title: "Blog",
      to: "/main-blog",
    },
  ];
  return (
    // if something wrong show only error message here error ? (<div>{error}</div>) : else show ui

    <BlogMainSection fluid>
      <div className="instruction">
        {/*<p>Main {">"} Blog</p>*/}
        <CustomBreadcrumb margins="mt-0 mb-8" links={breadCrumb} />
        <h2>Blog</h2>
      </div>
      <Tabs defaultValue="personalinfo">
        <ButtonSection>
          <div className="btn-section">
            <div className="btn-container">
              {buttonTitles?.map((category) => (
                <Tab value={category.title}>
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
                <Tab value={category.name}>
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
              onChange={(e) => setUserSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              className="inp-sect"
              placeholder="Search by all blog articles"
              style={{
                borderRadius: "8px",
                background: "#F7F8FA",
                paddingLeft: "20px",
              }}
            />
            <SearchIcon
              onClick={GetUserValueForApi}
              style={{ transform: "translate(-50px, 0px)" }}
            />
          </div>
        </ButtonSection>
        <CardTopSection fluid>
          <Grid className="grid-root">
            <Grid.Col className="col-root-img" p={0} md={6}>
              <Link
                to={`/blog-post/${
                  getResultApiSearch && getResultApiSearch[0]?.slug
                }`}
              >
                <Image
                  className="img-section"
                  src={`${process.env.REACT_APP_API_URL}${
                    getResultApiSearch && getResultApiSearch[0]?.thumb
                  }`}
                />
              </Link>
            </Grid.Col>
            <Grid.Col md={6}>
              <div className="read-section">
                <p className="top-txt"></p>
                <Link
                  to={`/blog-post/${
                    getResultApiSearch && getResultApiSearch[0]?.slug
                  }`}
                  className="break-all"
                >
                  <p className="top-title md:pr-4">
                    {getResultApiSearch && getResultApiSearch[0]?.title}
                  </p>
                </Link>
                <p className="txt">
                  {truncate(
                    getResultApiSearch &&
                      getResultApiSearch[0]?.partials[0]?.content
                  )}
                </p>
                <Link
                  to={`/blog-post/${
                    getResultApiSearch && getResultApiSearch[0]?.slug
                  }`}
                >
                  Read article
                </Link>
              </div>
            </Grid.Col>
          </Grid>
        </CardTopSection>

        <BlogCard fluid className="my-4">
          <TabPanel>
            <Grid className="grid-card-root">
              {getResultApiSearch?.map((AllBlog) => (
                <Grid.Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Card
                    className="card-blog"
                    sx={{ maxWidth: 600 }}
                    style={{ boxShadow: "none" }}
                  >
                    <CardActionArea className="card-blog">
                      <Link to={`/blog-post/${AllBlog?.slug}`}>
                        <CardMedia
                          component="img"
                          image={`${process.env.REACT_APP_API_URL}${AllBlog?.thumb}`}
                          height="230px"
                          style={{ borderRadius: "20px" }}
                        />
                      </Link>
                      <CardContent
                        className="card-blog"
                        style={{ padding: "0", paddingTop: "20px" }}
                      >
                        <Typography
                          className="card-blog"
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          <p className="date-category">
                            {AllBlog.date} - Travel
                          </p>
                        </Typography>
                        <Typography
                          className="card-blog"
                          variant="body2"
                          color="text.secondary"
                        >
                          <Link to={`/blog-post/${AllBlog.slug}`}>
                            <h1 className="title-card break-all p-2">
                              {AllBlog?.title}
                            </h1>
                          </Link>
                          <p className="text-card">
                            {truncate(AllBlog?.partials[0]?.content)}
                          </p>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className="p-0">
                      <Link to={`/blog-post/${AllBlog.slug}`}>
                        Read article
                      </Link>
                    </CardActions>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </TabPanel>
        </BlogCard>
      </Tabs>
      {!isLast && (
        <PaginationSection
          onClick={() => setShowMore(showMore + 1)}
          className="cursor-pointer"
        >
          <p style={{ color: "#3800B0", fontWeight: "bold" }}>Show More</p>
        </PaginationSection>
      )}
    </BlogMainSection>
  );
};

export default MainBlog;
