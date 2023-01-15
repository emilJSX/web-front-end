import React from "react";
import { Grid, Image } from "@mantine/core";
import { BlogPostSection, OtherBlogPost, BlogOtherCard, ColaImg, LineImage, BottomSection } from "./BlogPost.Styled";
import colapostimg from '../../../style/icons/cola-blogpost.png'
import colagrid from '../../../style/icons/colagrid.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { OtherBlogpost } from './OtherBlogPostData';
import { Lineimg } from './LineImg';
import fb from '../../../style/icons/facebook.svg'
import twitter from '../../../style/icons/twitter.svg'
import telegram from '../../../style/icons/telegram.svg'
import whatsapp from '../../../style/icons/whatsapp.svg'
import sms from '../../../style/icons/sms.svg'
import link from '../../../style/icons/link-2.svg'

const BlogPost = () => {
    return (
        <>
            <BlogPostSection>
                <div className="rule-section">
                    <p>Main {">"} Blog {">"} Travel {">"} Custom Las Vegas-Themed Corporate Event Gifts for Coca-Cola</p>
                </div>
                <div className="main-txt">
                    <h1>Custom Las Vegas-Themed Corporate Event Gifts for Coca-Cola</h1>
                    <p>May 20 {"|"} Travel</p>
                </div>
                <ColaImg className="first-image-container">
                    <Image className="first-image" radius={20}
                        src={colapostimg}
                    />
                </ColaImg>
                <div className="mt-5">
                    <p className="first-txt">
                        Now that the event is mere weeks away, it dawned on me that I've never actually done a bridal show booth before, or any booth for that matter. Yikes. Just as I was getting ready to hit the panic button, the ultra-talented Sarah Campbell from Intrigue Design invited me to her Annapolis studio to borrow props from her collection. Thank you, Jesus.<br />
                        <br />
                        When a creative-at-heart person such as myself invests fifteen years in the corporate world and then finally takes a leap of faith to start over where they really belong, getting the chance to tour an award-winning design studio is like heaven on earth. Not to mention, the opportunity to brainstorm with an expert like Sarah. Priceless. <br />
                        <br />
                        I arrived in the morning and Sarah and her team were busy at work on their last big wedding of the year! White blooms for days. Just breathtaking.
                    </p>
                </div>
                <h1 className="custom-txt">Custom Las Vegas-Themed Corporate Event Gifts for Coca-Cola</h1>
                <p className="second-txt">
                    When a creative-at-heart person such as myself invests fifteen years in the corporate world and then finally takes a leap of faith to start over where they really belong, getting the chance to tour an award-winning design studio is like heaven on earth. Not to mention, the opportunity to brainstorm with an expert like Sarah. Priceless. <br />
                    <br />
                    I arrived in the morning and Sarah and her team were busy at work on their last big wedding of the year! White blooms for days. Just breathtaking.
                </p>
                <Image className="colapostimg" src={colagrid} />
                <p className="second-txt">
                    When a creative-at-heart person such as myself invests fifteen years in the corporate world and then finally takes a leap of faith to start over where they really belong, getting the chance to tour an award-winning design studio is like heaven on earth. Not to mention, the opportunity to brainstorm with an expert like Sarah. Priceless. <br />
                    <br />
                    I arrived in the morning and Sarah and her team were busy at work on their last big wedding of the year! White blooms for days. Just breathtaking.
                </p>
                <h3 className="finishing-touch">The finishing touch</h3>
                <p className="second-txt"> We included a custom branded double sided notecard with Coca-Cola's logo in white text. We love how the notecard coordinated perfectly with the Coca-Cola red ribbon and gift tag. <br />
                    <br />
                    We hoped you enjoyed learning about these unique custom corporate event gifts! If you enjoyed reading this, you'll love this blog post where we break down our favorite in-person corporate event gifts of 2021. And since corporate events are back in full swing, if you're interested in creating your own custom gift design, we'd love to connect. Happy {"(corporate)"} gifting!
                </p>
                <div className="social-icons">
                    <p style={{ color: "#3800B0", textAlign: "start" }}>Share</p>
                    <a href="#"><Image className="icon" src={fb} /></a>
                    <a href="#"><Image className="icon" src={twitter} /></a>
                    <a href="#"><Image className="icon" src={telegram} /></a>
                    <a href="#"><Image className="icon" src={whatsapp} /></a>
                    <a href="#"><Image className="icon" src={sms} /></a>
                    <a href="#"><Image className="icon" src={link} /></a>
                </div>
            </BlogPostSection>

            <LineImage p={0} style={{paddingBottom: "50px"}} fluid>
                <div className="line-flex">
                    {Lineimg.data.map(({ url }) => (
                        <Image width={126.6} src={url} />
                    ))}
                </div>
            </LineImage>

            <OtherBlogPost>
                    <h1 className="blogposttop-text">Other posts by the theme</h1>
                    <BlogOtherCard style={{maxWidth: "1180px"}}>
                        <Grid>
                            {OtherBlogpost.data.map(({ foto, date, category, title, text }) => (
                                <Grid.Col xs={12} sm={6} md={4} lg={4}>
                                    <Card sx={{ maxWidth: 600 }} style={{ boxShadow: "none" }} >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                image={foto}
                                                width="340px"
                                                height="230px"
                                                style={{ borderRadius: "20px" }}
                                            />
                                            <CardContent style={{ padding: "0", paddingTop: "20px" }}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    <p className='date-category'>{date} - {category}</p>
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <h1 className='title-card'>{title}</h1>
                                                    <p className='text-card'>{text}</p>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions className="p-0">
                                            <a href="#" className="read-article">Read article</a>
                                        </CardActions>
                                    </Card>
                                </Grid.Col>
                            ))}
                        </Grid>

                    </BlogOtherCard>
                </OtherBlogPost>
        </>
    )
}

export default BlogPost