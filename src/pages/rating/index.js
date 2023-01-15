import { Grid, Image } from "@mantine/core";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCopy,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaTelegram } from 'react-icons/fa';
import { AffiliateDescriptionOne, AffiliateDescriptionTwo, AffiliateProgramContainer, AffiliateProgramTxt, BodyRating, BonusPoints, BrozeImageBlueSection, DescNumberOne, DescNumberThree, DescNumberTwo, DescriptionInviteOne, DescriptionInviteThree, DescriptionInviteTwo, DescriptionOne, DescriptionTwo, EarnText, HistoryAbout, HistoryAboutCount, HistorySection, HistoryText, RatingBadgedBlueImage, RatingBadgedBronzeImage, RatingBadgedGoldImage, RatingBadgedGoldUserCount, RatingBadgedGoldUserTxt, RatingBadgedSilverUserCount, RatingBadgedSilverUserTxt, RatingBadgedSimpleUserTxt, RatingBadgedSimpleUserTxtCount, RatingBadgedTrustedUserCount, RatingBadgedTrustedUserTxt, RatingBadgedUserImage, RatingBadges, RatingBlueSection, RatingContainer, RatingCount, RatingPoints, SharingContainer, SharingSocialIcons, SharingTxt, SilverImageTxt, TitleOne, TitleTwo, Topprovide, TopRatingTxt, YourCurrentRatingTxt } from "./Rating.styled";
import userimg from '../../style/icons/profile-circle.svg'
import blueimg from '../../style/icons/verify.svg'
import brozeimg from '../../style/icons/verify-1.svg'
import goldimg from '../../style/icons/verify-2.svg'
import fb from '../../style/icons/facebook.svg'
import twitter from '../../style/icons/twitter.svg'
import telegram from '../../style/icons/telegram.svg'
import whatsapp from '../../style/icons/whatsapp.svg'

function Rating() {
    return(
        <BodyRating>
            <Topprovide>Main {">"} Profile {">"} Rating {'&'} Affiliate</Topprovide>
            <TopRatingTxt>Rating {"&"} Affiliate</TopRatingTxt>

            <RatingContainer fluid>
                <Grid className="grid-root">
                    <Grid.Col className="col-root" sm={6}>
                        <TitleOne>What is rating system?</TitleOne>
                        <DescriptionOne>Get <BonusPoints>Bonus Points (BP)</BonusPoints> by completing tasks and get special badges near you name.</DescriptionOne>
                        <DescriptionTwo>Also get exclusive gift coupons from our partners. The higher the status, the better the gifts</DescriptionTwo>

                        <TitleTwo>How does the rating system work?</TitleTwo>
                        <DescriptionInviteOne>Invite friend by promolink: <DescNumberOne> + 5 RP</DescNumberOne></DescriptionInviteOne>
                        <DescriptionInviteTwo>Invited person gets: <DescNumberTwo> + 5 RP</DescNumberTwo></DescriptionInviteTwo>
                        <DescriptionInviteThree>Each dollar sent: <DescNumberThree> + 1 RP</DescNumberThree></DescriptionInviteThree>

                        <RatingBadges>Rating badges</RatingBadges>
                        <RatingBadgedSimpleUserTxt><RatingBadgedUserImage src={userimg} /> Simple User <RatingBadgedSimpleUserTxtCount> 0 – 249 RP</RatingBadgedSimpleUserTxtCount></RatingBadgedSimpleUserTxt>
                        <RatingBadgedTrustedUserTxt><RatingBadgedBlueImage src={blueimg} /> Trusted User <RatingBadgedTrustedUserCount> 250 – 499 RP</RatingBadgedTrustedUserCount></RatingBadgedTrustedUserTxt>
                        <RatingBadgedSilverUserTxt><RatingBadgedBronzeImage src={brozeimg} /> Silver User <RatingBadgedSilverUserCount> 500 – 999 RP</RatingBadgedSilverUserCount></RatingBadgedSilverUserTxt>
                        <RatingBadgedGoldUserTxt><RatingBadgedGoldImage src={goldimg} /> Gold User <RatingBadgedGoldUserCount> 1 000+ RP</RatingBadgedGoldUserCount></RatingBadgedGoldUserTxt>

                        <AffiliateProgramContainer>
                            <AffiliateProgramTxt>Affiliate program</AffiliateProgramTxt>
                            <AffiliateDescriptionOne>Dear users, now you can earn Rating Points with our affiliate program.</AffiliateDescriptionOne>
                            <AffiliateDescriptionTwo>Registration of new users is possible using referral link</AffiliateDescriptionTwo>
                        
                            <div className='cash-set-container'>
                                <div className='cash-set-container-insider'>
                                    <h5 className='link-label'>Copy link</h5>
                                    <div className='cash-quantity-container'>
                                    <FontAwesomeIcon icon={faLink} className='link-icon' />
                                    <input type='text' readOnly value='wishx.me/wx9214122222222' style={{ background: '#ECEEF7' }} />
                                    <button className='copy-button'>Copy</button>
                                    <FontAwesomeIcon icon={faCopy} className='copy-icon' />
                                    </div>
                                </div>
                            </div>
                            <SharingContainer>
                                <SharingTxt>Share link</SharingTxt>
                                <SharingSocialIcons>
                                    <Image src={fb} />
                                    <Image src={twitter} />
                                    <Image src={telegram} />
                                    <Image src={whatsapp} />
                                </SharingSocialIcons>
                            </SharingContainer>

                            <div className='text-area'>
                                <div className='text-area-insider'>
                                    <h5 className='invite-label'>Send link to email</h5>
                                    <input type='text' placeholder='Email' />
                                    <FontAwesomeIcon icon={faEnvelope} className='envelope-icon' />
                                    <FaTelegram className='telegram-icon' />
                                </div>
                            </div>
                        </AffiliateProgramContainer>

                    </Grid.Col>

                    <Grid.Col sm={6}>
                        <RatingBlueSection>
                            <YourCurrentRatingTxt>Your current rating</YourCurrentRatingTxt>
                            <BrozeImageBlueSection  src={brozeimg} />
                            <SilverImageTxt>Silver</SilverImageTxt>
                            <RatingCount>1 200</RatingCount>
                            <RatingPoints>Rating Points (RP)</RatingPoints>
                            <EarnText>Earn 200 more to get Gold</EarnText>
                        </RatingBlueSection>
                        <HistorySection>
                            <HistoryText>History</HistoryText>
                            <HistoryAbout>Anar Mustafayev registered by your referral link <HistoryAboutCount>+ 5 RP</HistoryAboutCount></HistoryAbout>
                            <hr className="line"/>
                            <HistoryAbout>You paid $100 for Yusif Gurbanov’s birthday wish <HistoryAboutCount>+ 100 RP</HistoryAboutCount></HistoryAbout>
                            <hr className="line"/>
                            <HistoryAbout>You paid $10 for Turxan Mammedov’s birthday wish <HistoryAboutCount>+ 10 RP</HistoryAboutCount></HistoryAbout>
                            <hr className="line"/>
                            <HistoryAbout>You paid $8 for Orxan Pirmemmedli’s birthday wish <HistoryAboutCount>+ 8 RP</HistoryAboutCount></HistoryAbout>
                            <hr className="line"/>
                            <HistoryAbout>You have registered by Urfan Jamalov referral link <HistoryAboutCount>+ 1 RP</HistoryAboutCount></HistoryAbout>
                            <hr className="line"/>
                        </HistorySection>
                    </Grid.Col>
                </Grid>
            </RatingContainer>
        </BodyRating>
    )
}

export default Rating;