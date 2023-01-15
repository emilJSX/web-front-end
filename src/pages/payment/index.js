import React from "react";
import { Grid, Image, TextInput  } from '@mantine/core'
import { BlueContainer, PaymentBody, PaymentContainer, WishLogo, ArrowWishLogoContainer, WishXText, MobileDetailsArrow, MobileDetailsText, PayWishTxt, Cost, WatchImage, WatchTxtCost, WatchTxt, WatchCost, SubtotalSection, SubtotalCost, SubtotalTxt, SubTotalContainer, SalesTxtCost, SalestaxTxt, BottomTextSection, StripeTxt, TermsTxt, PrivacyTxt, PoweredStripeTxt, InputContainer, OrPayWithCardText, MobileWatchImage, PayWishMobile, PayWishCostMobile, StripeTxtMobile, PoweredTextMobile, TermsPrivacyContainer, TermsTextMobile, PrivacyTextMobile } from "./Payment.styled";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import {FaApple} from 'react-icons/fa'
import wishlogo from '../../style/icons/wish-x-white-logo.svg'
const Payment = () => {
    return (
        <PaymentBody>
            <PaymentContainer fluid>
                <Grid>
                    <Grid.Col md={6}>
                        <BlueContainer>
                            <ArrowWishLogoContainer>
                                <AiOutlineArrowLeft style={{ color: 'grey', fontWeight: "bold", fontSize: "20px" }} />
                                <WishLogo src={wishlogo} /> <WishXText>WishX</WishXText>
                            </ArrowWishLogoContainer>
                            <MobileDetailsArrow>
                                <MobileDetailsText>Details</MobileDetailsText>
                                <IoIosArrowDown style={{ color: 'grey', fontSize: '15px', }} />
                            </MobileDetailsArrow>

                            <MobileWatchImage  src="https://s3-alpha-sig.figma.com/img/381d/2f96/783fd1064e1e1fd3551e89d1b126bdcc?Expires=1665360000&Signature=HTV68ybQrb4idfuv~oHzBtBmdfCepZuhHBIPQum4Fb5i3vIwvrmitblEjXuwuUvUf9gS-gXBUAgVZAR7YH6vwccsqC3bSHOWODSVCO8AdNt9M6-VHBXU-d51mJmJpFOpcFm8qaluYO513eJ4BazmkEiqUBn99Yta9JCFKG51VlsKFxpUmxO73j1dpBQLErmg6N9z49a750cn8FbBMcJUyNpJUoxKen3KtDHoHxmeRGAb2EYyjU~Vmzko5DjIkRpOKoI56zgFF9fnMrnj-Ih~-d99vX-60jTGUA9kX~9J6RMyXMM40l~uRA~~PkEDk7hrMhleKMivnzIdaYLAw6Awng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                            <PayWishMobile>Pay WishX</PayWishMobile>
                            <PayWishCostMobile>$133.23</PayWishCostMobile>

                            <PayWishTxt>Pay WishX</PayWishTxt>
                            <Cost>$133.23</Cost>

                            <WatchTxtCost>
                                <WatchImage src="https://s3-alpha-sig.figma.com/img/381d/2f96/783fd1064e1e1fd3551e89d1b126bdcc?Expires=1665360000&Signature=HTV68ybQrb4idfuv~oHzBtBmdfCepZuhHBIPQum4Fb5i3vIwvrmitblEjXuwuUvUf9gS-gXBUAgVZAR7YH6vwccsqC3bSHOWODSVCO8AdNt9M6-VHBXU-d51mJmJpFOpcFm8qaluYO513eJ4BazmkEiqUBn99Yta9JCFKG51VlsKFxpUmxO73j1dpBQLErmg6N9z49a750cn8FbBMcJUyNpJUoxKen3KtDHoHxmeRGAb2EYyjU~Vmzko5DjIkRpOKoI56zgFF9fnMrnj-Ih~-d99vX-60jTGUA9kX~9J6RMyXMM40l~uRA~~PkEDk7hrMhleKMivnzIdaYLAw6Awng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                <WatchTxt>Apple Watch Graphite Stainless Steel Case with Milanese Loop for Bradley Cooper’s Birthday</WatchTxt>
                                <WatchCost>$129.00</WatchCost>
                            </WatchTxtCost>
                            <SubTotalContainer>

                                <SubtotalSection>
                                    <SubtotalTxt>Subtotal</SubtotalTxt><SubtotalCost>$129.00</SubtotalCost>
                                </SubtotalSection>
                                    <hr className="line"/>

                                <SubtotalSection>
                                    <SalestaxTxt>Sales tax {'(6.5%)'}</SalestaxTxt><SalesTxtCost>$4.23</SalesTxtCost>
                                </SubtotalSection>
                                    <hr className="line"/>

                                <SubtotalSection>
                                    <SubtotalTxt>Total due</SubtotalTxt><SubtotalCost>$133.23</SubtotalCost>
                                </SubtotalSection>
                                    <hr className="line"/>
                            </SubTotalContainer>

                            <BottomTextSection>
                                <PoweredStripeTxt>Powered by <StripeTxt>stripe</StripeTxt></PoweredStripeTxt>
                                <hr style={{writingMode: 'tb-rl'}} />
                                <TermsTxt>Terms</TermsTxt>
                                <PrivacyTxt>Privacy</PrivacyTxt>
                            </BottomTextSection>

                        </BlueContainer>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <InputContainer>
                            <button className='log-in-with-apple-button'>
                                <FaApple className='apple-icon'/>
                                <h5 className='apple-title'>Pay</h5>
                            </button>

                            <div className="mt-5 mb-5" style={{width: '100%', height: '12px', borderBottom: '1px solid grey', textAlign: 'center'}}>
                                <span style={{fontSize: '14px', color: 'grey' , backgroundColor: '#F3F5F3', padding: '0 10px'}}>
                                    Or pay with card
                                </span>
                            </div>


                                <OrPayWithCardText></OrPayWithCardText>

                            <TextInput
                                style={{ width: "100%" }}
                                label="Email"
                            />

                            <div className="address mt-4">
                                <p className="dis mb-3">Card information</p>
                                <input class="form-control" type="text" placeholder="1234 1234 1234 1234" />
                                <div className="d-flex">
                                    <input className="form-control zip" type="text" placeholder="MM/YY" />
                                    <input className="form-control state" type="text" placeholder="CVC"></input>
                                </div>
                            </div>

                            <TextInput
                                style={{ width: "100%" }}
                                label="Name on card"
                                className="mt-4"
                            />

                            <div className="address mt-4">
                                <p className="dis mb-3">Country or region</p>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected hidden>United States</option>
                                    <option value="1">United States</option>
                                    <option value="2">Australia</option>
                                    <option value="3">Canada</option>
                                </select>
                                <div className="d-flex">
                                    <input className="form-control zip" type="text" placeholder="ZIP" />
                                </div>
                            </div>

                            <button className='pay-btn mt-5'>
                                <h5 className='pay-title'>Pay</h5>
                            </button>

                            <PoweredTextMobile>Powered by <StripeTxtMobile>stripe</StripeTxtMobile></PoweredTextMobile>
                            <TermsPrivacyContainer>
                                <TermsTextMobile>Terms</TermsTextMobile>
                                <PrivacyTextMobile>Privacy</PrivacyTextMobile>
                            </TermsPrivacyContainer>
                        </InputContainer>
                    </Grid.Col>
                </Grid>
            </PaymentContainer>
        </PaymentBody>
    )
}

export default Payment