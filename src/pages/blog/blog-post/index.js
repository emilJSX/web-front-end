import React, { useEffect, useState } from "react";
import { Grid, Image } from "@mantine/core";
import Loader from "../../../shared/ui/Loader";

import {
  BlogPostSection,
  OtherBlogPost,
  BlogOtherCard,
  ColaImg,
  LineImage,
  BottomSection,
} from "./BlogPost.Styled";
import colapostimg from "../../../style/icons/cola-blogpost.png";
import colagrid from "../../../style/icons/colagrid.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { OtherBlogpost } from "./OtherBlogPostData";
import { Lineimg } from "./LineImg";
import fb from "../../../style/icons/facebook.svg";
import twitter from "../../../style/icons/twitter.svg";
import telegram from "../../../style/icons/telegram.svg";
import whatsapp from "../../../style/icons/whatsapp.svg";
import sms from "../../../style/icons/sms.svg";
import link from "../../../style/icons/link-2.svg";
import CustomBreadcrumb from "../../../shared/components/breadcrumb";
import { Link, useLocation, useParams } from "react-router-dom";
import { myaxios } from "../../../api/myaxios";
import Share from "../../wish-pagess/Share";
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
};
const BlogPost = () => {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState([]);
  const [otherBlogs, setOtherBlogs] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const date = new Date(blogPost.date);
  const readableDate = date.toLocaleString("en-Us", options);

  useEffect(() => {
    setLoading(true);
    myaxios
      .get(`/api/v1/blog/articles/by-slug?slug=${slug}`)
      .then(({ data }) => {
        setBlogPost(data.data.article);
        myaxios
          .get(
            `/api/v1/blog/articles/get?category_id=${data.data.article.category.id}`
          )
          .then(({ data }) => {
            setOtherBlogs(data.data.list);
          })
          .catch((err) => setError(err.message));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const truncate = (input) =>
    input?.length > 300 ? `${input.substring(0, 100)}...` : input;
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <BlogPostSection>
        <div className="rule-section">
          {/*<p>Main {">"} Blog {">"} Travel {">"} </p>*/}
          <CustomBreadcrumb
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
                title: "Travel",
              },
              {
                title: blogPost.title,
              },
            ]}
          />
        </div>
        <div className="main-txt">
          <h1 className="break-all">{blogPost.title}</h1>
          <p>{readableDate + " | " + blogPost?.category?.name}</p>
        </div>
        <ColaImg className="first-image-container">
          <img
            className="first-image"
            alt={blogPost.title}
            src={`${process.env.REACT_APP_API_URL}${blogPost.thumb}`}
          />
        </ColaImg>
        <div className="mt-5">
          <p className="first-txt">{blogPost?.partials[0]?.content}</p>
        </div>{" "}
        {/*
        <h1 className="custom-txt">{blogPost?.partials[0]?.title}</h1>
        <p className="second-txt">{blogPost?.partials[0]?.content}</p>
        <ColaImg className="first-image-container">
          {blogPost?.partials[0]?.image && (
            <img
              className="first-image"
              alt=""
              src={`${process.env.REACT_APP_API_URL}${blogPost?.partials[0]?.image}`}
            />
          )}
        </ColaImg> */}
        {/* <p className="second-txt">
          <p className="first-txt">
            {blogPost?.partials[0]?.content
              ? blogPost?.partials[0]?.content
              : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
          </p>
        </p>
        {/* <h3 className="finishing-touch">The finishing touch</h3> */}
        {/* <p className="second-txt">
          {" "}
          {blogPost?.partials[0]?.content
            ? blogPost?.partials[0]?.content
            : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
        </p>  */}
        <div className="social-icons">
          <Share slug={blogPost?.slug} page={"blog-post"} />
        </div>
      </BlogPostSection>

      <LineImage
        className="md:block hidden"
        p={0}
        style={{ paddingBottom: "50px" }}
        fluid
      >
        <div className="line-flex">
          {Lineimg.data.map(({ url }) => (
            <Image width={126.6} src={url} />
          ))}
        </div>
      </LineImage>

      <OtherBlogPost>
        <h1 className="blogposttop-text">Other posts by the theme</h1>
        <BlogOtherCard style={{ maxWidth: "1180px" }}>
          <Grid>
            {otherBlogs.map((item) => (
              <Grid.Col xs={12} sm={6} md={4} lg={4}>
                <Card sx={{ maxWidth: 600 }} style={{ boxShadow: "none" }}>
                  <CardActionArea className="card-action-area">
                    <CardMedia
                      component="img"
                      image={`${process.env.REACT_APP_API_URL}${item.thumb}`}
                      width="340px"
                      height="230px"
                      style={{ borderRadius: "20px" }}
                    />
                    <CardContent style={{ padding: "0", paddingTop: "20px" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <p className="date-category">
                          {item.date} - {item?.category?.name}
                        </p>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <h1 className="title-card">{item.title}</h1>
                        <p className="text-card break-all">
                          {truncate(item.partials[0].content)}
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className="p-0">
                    <Link
                      to={`/blog-post/${item.slug}`}
                      className="read-article"
                    >
                      Read article
                    </Link>
                  </CardActions>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </BlogOtherCard>
      </OtherBlogPost>
    </>
  );
};

export default BlogPost;
