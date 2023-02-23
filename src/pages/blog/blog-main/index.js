import react, { useEffect } from "react";
import { Button, Grid, Image, Loader } from "@mantine/core";
import {
  BlogCard,
  BlogMainSection,
  ButtonSection,
  CardTopSection,
  PaginationSection,
} from "./BlogMain.Styled";
import mountn from "../../../style/icons/moutn.jpg";
import { Tab, Tabs, TabPanel } from "react-tabs";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { BlogDataCard } from "./BlogCardData";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  useEffect(() => {
    myaxios
      .get("/api/v1/blog/articles/get", {
        params: {
          skip: 0,
        },
      })
      .then((res) => {
        setResultApiSearch(res.data.data.list);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const GetUserValueForApi = (e) => {
    navigate("/blog-search-result", {
      state: { GetUserSearch, GetUserCategoryId },
    });
  };

  var setLoadingBlog = [];
  getResultApiSearch?.map((AllBlog) =>
    AllBlog.partials.map((e) => setLoadingBlog.push(e))
  );

  getResultApiSearch?.map((AllBlog) => console.log(AllBlog));

  const buttonTitles = [
    { id: 0, title: "All" },
    { id: 1, title: "Travel" },
    { id: 2, title: "Sport" },
    { id: 3, title: "Gadgets" },
    { id: 4, title: "Foto & Videos" },
    { id: 5, title: "Clothes" },
  ];

  const handleClickGetIDCategory = (event) => {
    setUserCategoryId(event.currentTarget.id);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader size="xl" />;
      </div>
    );
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
              onChange={(e) => setUserSearch(e.target.value)}
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
            <Grid.Col className="col-root-img" p={0} span={6}>
              <Image
                className="img-section"
                src={`${process.env.REACT_APP_API_URL}${setLoadingBlog[0]?.image}`}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <div className="read-section">
                <p className="top-txt"></p>
                <h2>{setLoadingBlog[0]?.title}</h2>
                <p className="txt">{setLoadingBlog[0]?.content}</p>
                <a href="#">Read article</a>
              </div>
            </Grid.Col>
          </Grid>
        </CardTopSection>

        <BlogCard fluid>
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
                      <CardMedia
                        component="img"
                        image={`https://api.wishx.me${AllBlog?.thumb}`}
                        height="230px"
                        style={{ borderRadius: "20px" }}
                      />
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
                          <h1 className="title-card">{AllBlog?.title}</h1>
                          <p className="text-card">
                            {AllBlog?.partials[0]?.content}
                          </p>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className="p-0">
                      <a href="#" className="read-article">
                        Read article
                      </a>
                    </CardActions>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </TabPanel>
        </BlogCard>
      </Tabs>
      <PaginationSection>
        <h1 style={{ color: "#3800B0", fontWeight: "bold" }}>Show More</h1>
      </PaginationSection>
    </BlogMainSection>
  );
};

export default MainBlog;
