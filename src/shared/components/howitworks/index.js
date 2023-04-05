import React, { useState } from "react";
import { Image, Grid } from "@mantine/core";
import girlfoto from "../../../style/icons/girl.jpg";
import LeftArrow from "../../../assets/svg/arrow-left.svg";
import RightArrow from "../../../assets/svg/arrow-right.svg";
import {
  Description,
  HIWContainer,
  HiwSliderSection,
  HowItWorksTxt,
  NavigationTop,
} from "./HowItwors.styled.js";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect } from "react";
import CustomBreadcrumb from "../breadcrumb";
import { myaxiosprivate } from "../../../api/myaxios";
import Loader from "../../ui/Loader";

const HowItWorks = ({ isHome = false }) => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setError("");
    setLoading(true);
    myaxiosprivate
      .get("/api/v1/static_pages/instruction/get", {})
      .then(({ data }) => {
        setData(data.data.steps);
        setLoading(false);
      })
      .catch((err) => setError(err.message));

    window.scrollTo(0, 0);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <HIWContainer fluid>
      {!isHome ? (
        <>
          <NavigationTop>
            <CustomBreadcrumb
              links={[
                {
                  title: "Main",
                  to: "/",
                },
                {
                  title: "How it works",
                  to: "/faq",
                },
              ]}
            />
          </NavigationTop>
          <HowItWorksTxt>How it works</HowItWorksTxt>
          <Description>
            The software offers complete campaign <br /> transparency, email
            tracking, view success
          </Description>
        </>
      ) : null}
      <Grid
        style={{
          background: "#160046",
          borderRadius: "30px",
          minHeight: "730px",
        }}
        className="grid-hiw"
      >
        <Grid.Col className="grid-one" xl={6} lg={6} md={12} sm={12} xs={12}>
          <img
            className="img-girl"
            src={girlfoto}
            sizes="(max-width: 500px) 375px, 828px"
          />
        </Grid.Col>
        <Grid.Col className="grid-two" xl={6} lg={6} md={12} sm={12} xs={12}>
          <HiwSliderSection>
            <p className="hiw-txt">How it works</p>
            <OwlCarousel
              className="owl-theme"
              dots={false}
              loop
              autoplay
              margin={9}
              nav={true}
              items={1}
              navText={[
                `<img src="${LeftArrow}" alt="" />`,
                `<img src="${RightArrow}" alt=""/>`,
              ]}
            >
              {data?.map((item) => (
                <div key={item.step} className="item">
                  {/* <img
                    className="img-girl"
                    src={`${process.env.REACT_APP_API_URL}${item.image}`}
                  /> */}
                  <p className="counter">{item.step}</p>
                  <h1 className="title-txt">{item.title}</h1>
                  <h1 className="text-sect">{item.description}</h1>
                </div>
              ))}
            </OwlCarousel>
          </HiwSliderSection>
        </Grid.Col>
      </Grid>
    </HIWContainer>
  );
};

export default HowItWorks;
