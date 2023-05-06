import React from "react";
import { ReactComponent as ErrorFoto } from "../../style/icons/404.svg";
import { Buttons, ErrorImage, ErrorSection } from "./404.Styled";
import { Button } from "@mantine/core";
import FaqSection from "../../shared/components/faq";
import { useLocation, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();

  const { state } = useLocation();

  function HomePageURL() {
    navigate("/");
  }

  function WishesPageURL() {
    navigate("/wish-list");
  }

  return (
    <ErrorSection fluid>
      <ErrorImage>
        <ErrorFoto />
      </ErrorImage>
      <div className="text">
        <h2>{state ? state : "Page not found"}</h2>
      </div>

      <Buttons>
        <Button onClick={WishesPageURL} style={{ background: "#3800B0" }}>
          Go to wishes list page
        </Button>
        <div style={{ width: 162 }}>
          <Button
            onClick={HomePageURL}
            className="btn"
            fullWidth
            variant="outline"
          >
            Go to main page
          </Button>
        </div>
      </Buttons>
    </ErrorSection>
  );
};

export default ErrorPage;
