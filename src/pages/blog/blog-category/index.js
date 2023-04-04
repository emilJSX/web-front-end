import react, { useEffect, useState } from "react";
import { Grid } from "@mantine/core";
import Loader from "../../../shared/ui/Loader";

import {
  BlogCard,
  BlogMainSection,
  ButtonSection,
  PaginationSection,
} from "./BlogC.Styled";
import Card from "@mui/material/Card";
import { Tab, Tabs, TabPanel } from "react-tabs";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { CardsCategory } from "./Cards";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomBreadcrumb from "../../../shared/components/breadcrumb";
import React from "react";
import { myaxios } from "../../../api/myaxios";
const BlogCategory = () => {
  const navigate = useNavigate();
  const [GetUserCategoryId, setUserCategoryId] = useState();
  const [GetUserSearch, setUserSearch] = useState();
  const [categories, setCategories] = useState();
  const [getResultApiSearch, setResultApiSearch] = useState();
  const [DataSkip, setDataSkip] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    myaxios
      .get("/api/v1/blog/categories/get")
      .then(({ data }) => {
        setCategories(data?.data);
      })
      .catch((err) => setError(err.message));
  }, []);

  const buttonTitles = [{ id: 0, title: "All" }];

  useEffect(() => {
    setLoading(true);
    myaxios
      .get("/api/v1/blog/articles/get", {
        params: {
          skip: 0,
        },
      })
      .then((data) => {
        setResultApiSearch(data.data.data.list);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  const handleClickGetIDCategory = (event) => {
    setUserCategoryId(event.currentTarget.id);
  };

  let setLoadingBlog = [];
  getResultApiSearch?.map((AllBlog) =>
    AllBlog.partials.map((e) => setLoadingBlog.push(e))
  );

  const GetUserValueForApi = (e) => {
    navigate("/blog-search-result", {
      state: { GetUserSearch, GetUserCategoryId },
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <BlogMainSection fluid>
      <div className="instruction">
        {/*<p>Main {">"} Blog {">"} Travel</p>*/}
        <CustomBreadcrumb
          margins="mt-0 mb-8"
          links={[
            {
              title: "Main",
              to: "/",
            },
            {
              title: "Blog",
            },
          ]}
        />
        <h2>Travel articles</h2>
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
              className="inp-sect"
              placeholder="Search by all blog articles"
              style={{
                borderRadius: "8px",
                background: "#F7F8FA",
                paddingLeft: "20px",
              }}
            />
            <FontAwesomeIcon
              icon={faSearch}
              onClick={GetUserValueForApi}
              style={{ transform: "translate(-50px, 0px)" }}
            />
          </div>
        </ButtonSection>

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
                  <Card sx={{ maxWidth: 600 }} style={{ boxShadow: "none" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={`${process.env.REACT_APP_API_URL}${AllBlog?.thumb}`}
                        height="230px"
                        style={{ borderRadius: "20px" }}
                      />
                      <CardContent style={{ padding: "0", paddingTop: "20px" }}>
                        <Typography gutterBottom variant="h5" component="div">
                          <p className="date-category">
                            {AllBlog.date} - category
                          </p>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
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
        <a>
          <h3>Show more</h3>
        </a>
      </PaginationSection>
    </BlogMainSection>
  );
};

export default BlogCategory;
