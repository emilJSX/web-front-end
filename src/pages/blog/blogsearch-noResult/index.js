import React from "react";
import { Grid, Container, Input, Image } from "@mantine/core";
import { CustomInput } from "../../../shared/ui/İnput";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import glasses from "../../../style/icons/glasses.svg";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { BlogOtherPosts } from "./CardResult";
import {
  NotFoundSection,
  BlogMainSection,
  BlogCard,
} from "./BlogNoResult.Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CustomBreadcrumb from "../../../shared/components/breadcrumb";

const BlogSRNotFound = () => {
  const GetUserValueForApi = (e) => {
    navigate("/blog-search-result", {
      state: { GetUserSearch, GetUserCategoryId },
    });
  };
  const handleKeyDown = (e) => {
    e.keyCode === 13 && GetUserValueForApi();
  };
  return (
    <BlogMainSection fluid>
      <div className="instruction">
        {/*<p>Main {">"} Blog {">"} Search results</p>*/}
        <CustomBreadcrumb
          margins="mt-0 mb-8"
          links={[
            {
              title: "Main",
              to: "/",
            },
            {
              title: "Blog",
              to: "/main-blog",
            },
            {
              title: "Search results",
            },
          ]}
        />
        <h2>Search results</h2>
      </div>
      <Grid>
        <Grid.Col
          className="input-col-root"
          span={12}
          style={{ height: "50px", display: "flex" }}
        >
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
        </Grid.Col>
      </Grid>

      <NotFoundSection>
        <div className="notfound-section">
          <h1>There is no result by this request</h1>
          <p>Try another request or find other articles below</p>
          <Image className="glasses-img" src={glasses} />
        </div>
      </NotFoundSection>

      <BlogCard fluid>
        <div className="txt-section">Other posts</div>
        <Grid>
          {BlogOtherPosts.data.map(({ foto, date, category, title, text }) => (
            <Grid.Col xs={12} sm={6} md={4} lg={4}>
              <Card
                sx={{ maxWidth: 600 }}
                style={{ boxShadow: "none" }}
                className="cart-item"
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={foto}
                    height="230px"
                    style={{ borderRadius: "20px" }}
                  />
                  <CardContent style={{ padding: "0", paddingTop: "20px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <p className="date-category">
                        {date} - {category}
                      </p>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <h1 className="title-card">{title}</h1>
                      <p className="text-card">{text}</p>
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
      </BlogCard>
    </BlogMainSection>
  );
};

export default BlogSRNotFound;
