import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Grid, Button } from "@mantine/core";
import { FaqContainer, ImageSector } from "./faq.Styled";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import foto from "../../../style/icons/lamp.webp";
import { SetFaqSecId, SetFaqOpitions } from "./functions";
import { useEffect } from "react";
import { myaxios, myaxiosprivate } from "../../../api/myaxios";
import Loader from "../../ui/Loader";

const ChangeButtonStyle = (neededButton) => {
  const buttonsArray = document.querySelectorAll(".faq-button");

  buttonsArray.forEach((button) => {
    button.id === neededButton.id
      ? button.setAttribute("class", "faq-button first-btn")
      : button.setAttribute("class", "faq-button another-btn");
  });
};

// const buttonTitles = [
//   { id: 0, title: "All" },
//   { id: 1, title: "Travel" },
//   { id: 2, title: "Sport" },
//   { id: 3, title: "Gadgets" },
//   { id: 4, title: "Photo & Videos" },
//   { id: 5, title: "Clothes" },
// ];

const NavigatorSection = ({ button }) => {
  const buttonClass = ["faq-button first-btn", "faq-button another-btn"];

  return (
    <Button
      className={button.id < 1 ? buttonClass[0] : buttonClass[1]}
      onClick={(e) => {
        ChangeButtonStyle(e.currentTarget);
      }}
      id={button.id}
    >
      {button.title}
    </Button>
  );
};

const NavigatorSectionSm = ({ button }) => {
  const buttonClass = ["faq-button-sm first-btn", "faq-button-sm another-btn"];

  return (
    <Button
      className={button.id < 1 ? buttonClass[0] : buttonClass[1]}
      onClick={(e) => {
        ChangeButtonStyleSm(e.currentTarget);
      }}
      id={button.id}
    >
      {button.title}
    </Button>
  );
};

const ChangeButtonStyleSm = (neededButton) => {
  const buttonsArray = document.querySelectorAll(".faq-button-sm");

  buttonsArray.forEach((button) => {
    button.id === neededButton.id
      ? button.setAttribute("class", "faq-button-sm first-btn")
      : button.setAttribute("class", "faq-button-sm another-btn");
  });
};

const FaqSection = () => {
  // const [QuestionItem, setQuestionItem] = useState([]);
  const [FaqData, setFaqData] = useState([]);

  useEffect(() => {
    SetFaqSecId();
    window.scrollTo(0, 0);
  }, []);

  // API FAQ
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setError("");
    setLoading(true);
    myaxios
      .get("/api/v1/static_pages/faq/get")
      .then(({ data }) => {
        setFaqData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  // END API

  const AnswerQuestionData = [];
  const ResultAnQuData = [];
  const TestApi = [];

  FaqData.map((item) => {
    AnswerQuestionData.push(item);
    ResultAnQuData.push(item.parts);
  });

  {
    ResultAnQuData.forEach((questionItem) => {
      {
        questionItem.map((mapItems) => TestApi.push(mapItems));
      }
    });
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <FaqContainer p={0} fluid>
      <h1 className="faq-txt">FAQ</h1>
      <Tabs defaultValue="return-refunds">
        <Grid className="main-container">
          <Grid.Col md={4} className="left-col flex flex-col justify-between">
            <TabList className="navigator-section">
              {FaqData.map((button, index) => (
                <Tab key={index} value={button}>
                  <NavigatorSection button={button} />
                </Tab>
              ))}
            </TabList>
            <ImageSector>
              <img className="foto_faq" src={foto} />
            </ImageSector>
          </Grid.Col>
          <Grid.Col md={8} className="right-col">
            <div className="faq">
              {FaqData.map((mapItems, index) => (
                <TabPanel
                  key={index}
                  value={`faq-page-${index}`}
                  className="tab-panel"
                  id={`${index}`}
                >
                  {mapItems.parts.map((e, index) => (
                    <Accordion key={index} className="faq-sect">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className="faq-content">
                          {e.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{e.answer}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </TabPanel>
              ))}
            </div>
          </Grid.Col>
        </Grid>
      </Tabs>
    </FaqContainer>
  );
};

export default FaqSection;
