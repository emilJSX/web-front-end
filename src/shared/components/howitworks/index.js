import React, { useState } from "react";
import {Image,Grid} from "@mantine/core"
import girlfoto from '../../../style/icons/girl.jpg'
import { Description, HIWContainer, HiwSliderSection, HowItWorksTxt, NavigationTop } from "./HowItwors.styled.js"
import OwlCarousel from 'react-owl-carousel'
import { HIWSliderData } from './HiwSlider'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import axios from "axios";

const HowItWorks = () => {

    return(
        <HIWContainer fluid>
           <NavigationTop>Main {">"} How it works</NavigationTop>
           <HowItWorksTxt>How it works</HowItWorksTxt>
           <Description>The software offers complete campaign <br/> transparency, email tracking, view success</Description>
            <Grid style={{ background: "#160046", borderRadius: "30px"}}  className="grid-hiw">
                    <Grid.Col className="grid-one" xl={6} lg={6} md={12} sm={12} xs={12}>
                        <img className="img-girl" src={girlfoto} />
                    </Grid.Col>
                    <Grid.Col className="grid-two" xl={6} lg={6} md={12} sm={12} xs={12}>
                            <HiwSliderSection>
                                <p className="hiw-txt">How it works</p>
                                <OwlCarousel  className='owl-theme' dots={false} loop autoplay margin={9} nav={true} items={1} >
                                    {HIWSliderData.data.map(({ title, txt, count }) => (
                                    <div className='item'>
                                        <p className="counter">{count}</p>
                                        <h1 className="title-txt">{title}</h1>
                                        <h1 className="text-sect">{txt}</h1>
                                    </div>
                                    ))}
                                </OwlCarousel>
                            </HiwSliderSection>
                    </Grid.Col>
            </Grid>
        </HIWContainer>
    )
}

export default HowItWorks