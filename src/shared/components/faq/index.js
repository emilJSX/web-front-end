import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Grid, Button } from '@mantine/core';
import { FaqContainer, ImageSector } from "./faq.Styled";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import foto from '../../../style/icons/lamp.png';
import { SetFaqSecId, SetFaqOpitions } from "./functions";
import { useEffect } from "react";
import axios from "axios";


const ChangeButtonStyle = (neededButton) => {
  
  const buttonsArray = document.querySelectorAll('.faq-button');
  
  buttonsArray.forEach((button) => {
    button.id ===
    neededButton.id ? button.setAttribute('className', 'faq-button first-btn')
    : button.setAttribute('className', 'faq-button another-btn')
  })
  
  
  
}

const NavigatorSection = ({ button, data, idbtn }) => {
  console.log(button, data, idbtn, "HEREE")
  
  const buttonClass = ['faq-button first-btn', 'faq-button another-btn'];
  
  return (
    <Button className={idbtn < 1 ? buttonClass[0] : buttonClass[1]} onClick={(e) => {
      
      ChangeButtonStyle(e.currentTarget);
      
    }} id={idbtn}>
      {data.title}
    </Button>
  )
}



const ChangeButtonStyleSm = (neededButton) => {
  
  const buttonsArray = document.querySelectorAll('.faq-button-sm');
  
  
  buttonsArray.forEach((button) => {
    button.id ===
    neededButton.id ? button.setAttribute('className', 'faq-button-sm first-btn')
    : button.setAttribute('className', 'faq-button-sm another-btn')
  })
}

const FaqSection = () => {
  const [QuestionItem, setQuestionItem] = useState([])
  const [TestingData, setTestingData] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  
  useEffect(() => {
    SetFaqSecId();
  });

  var GetAnswer = []
  
  // API FAQ
  useEffect(() => {
    axios.get("https://api.wishx.me/api/v1/static_pages/faq/get", {
      'Access-Control-Allow-Origin' : "*"
    }).then((config) => {
      // console.log(config.data.data)
      const CreationDataParse = config.data.data
      setTestingData(CreationDataParse)
    })
    
    
  }, [])



  // END API
  
  const ChangeButtonStyleSm = (neededButton) => {
    
    const buttonsArray = document.querySelectorAll('.faq-button-sm');
    
    buttonsArray.forEach((button) => {
      button.id ===
      neededButton.id ? button.setAttribute('className', 'faq-button-sm first-btn')
      : button.setAttribute('className', 'faq-button-sm another-btn')
    })
  }
  
  
  const NavigatorSectionSm = ({ button }) => {
    
    const buttonClass = ['faq-button-sm first-btn', 'faq-button-sm another-btn'];
    
    return (
      <Button className={button.id < 1 ? buttonClass[0] : buttonClass[1]} onClick={(e) => {
        
        ChangeButtonStyleSm(e.currentTarget);
        
      }} id={button.id}>
        
      </Button>
    )
  }
  
  const AnswerQuestionData = []
  const ResultAnQuData = []
  const TestApi = []
  console.log(ResultAnQuData)





  TestingData.map((item) => {
    AnswerQuestionData.push(item)
    ResultAnQuData.push(item.parts)
  })



  {ResultAnQuData.forEach((questionItem)=> {
    {questionItem.map((mapItems) => (
      TestApi.push(mapItems)
    ))}
  })}

  
  return (
    <FaqContainer p={0} fluid>
      <h1 className="faq-txt">FAQ</h1>
      <Tabs defaultValue="return-refunds">
        <Grid className="main-container">
          <Grid.Col md={4} className='left-col flex flex-col justify-between'>
            <div className="navigator-section">
              {TestingData.map((item, index) => (
                <Tab value={index} >
                  <NavigatorSection data={item} idbtn={index} button={index} />
                </Tab>
              ))}
            </div>
            <ImageSector>
              <img className="foto_faq" src={foto} />
            </ImageSector>
          </Grid.Col>
          <Grid.Col md={8} className="right-col">
            <div className="faq">
              
              {TestingData.map((mapItems, index) => (
                <TabPanel key={index} value={`faq-page-${index}`} className='tab-panel' id={`${index}`}>
                {mapItems.parts.map((e) => (
                  <Accordion className="faq-sect">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="faq-content">{e.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    {e.answer}
                    </Typography>
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
  )
}

export default FaqSection

