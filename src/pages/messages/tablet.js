import {React, useState, Component} from "react";
import { Grid, Input,Button, Image, Slider, Progress } from "@mantine/core";
import { FiAlertTriangle } from "react-icons/fi";
import { AlertText, BackIconImageDiv, BlockText, ButtonSection, CardLong, ClearAllAttaches, Date, DateSection, DateText, DeleteImageContainer, DeleteSectionImageOne, DeleteSectionImageTwo, DisplayDateBirthaySection, DisplayTopImgCard, Firstprice, Follower, FollowersSection, Following, ImageSectionOne, ImageSectionTwo, Imagess, Joined, Lastprice, LeftMessage, LeftMessageSection, LiListMessage, LiListMessageDclicked, MessageClickButton, MessageClickButtondclicked, MessageContainerUserWriting, MessageContent, MessageDate, MessageDeletePopupSection, MessageInputUserDiv, MessageItem, MessagesContainer, MessageScroll, MessageSectionUser, MessageTime, MessageTimedclicked, MessageTopUserFoto, MessageTopUsername, MessageUserFoto, MessageUserFotodclicked, MessageUserInfo, MessageUserInfodclicked, MessageUserInput, MessageUserInputContainer, MessageUsername, MessageUsernamedclicked, MessageUserSection, MessageUserSectiondclicked, Namesurname, OnlineTxt, Price, RightMessage, RightSection, SearchContainer, SearchInput, SocialSection, TagName, Text, Title, TrashBackgroundDiv, TrashIconAttachesDiv, UlListMessage, UllistMessageDclicked, UserLastWishText } from "./Messages.styled";
import { BsSearch, BsDot } from 'react-icons/bs'
import { FiTrash2 } from 'react-icons/fi'
import { HiBadgeCheck } from 'react-icons/hi';
import { MdVerified } from 'react-icons/md'
import { AiOutlinePicture } from 'react-icons/ai'
import { RiSendPlaneLine } from 'react-icons/ri'
import {IoIosArrowBack} from 'react-icons/io'
import tomcruse from '../../style/icons/tomcruse.png'
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs';
import './Message-list.css'
import { Block } from "@mui/icons-material";

class MobileMessage extends Component {
    constructor(props) {
        super(props)
            this.state = {isVisible: false};
            this.onToggle = this.onToggle.bind(this);
        }
    
        onToggle(e) {
            this.setState({isVisible: !this.state.isVisible});
        }
    render() {
        return (
            <Grid>
                <Grid.Col md={4} style={{ display: this.state.isVisible ? 'none' : 'block' }}>
                    <LeftMessageSection>
                        <SearchContainer>
                            <SearchInput placeholder="Search by all blog articles" />
                            <a href="#"><BsSearch className="search-icon" /></a>
                        </SearchContainer>
                        <MessageScroll>
                            <UllistMessageDclicked onClick={this.onToggle}>
                                <LiListMessageDclicked>
                                    <MessageClickButtondclicked>
                                        <MessageUserSectiondclicked>
                                            <MessageUserFotodclicked src="https://s3-alpha-sig.figma.com/img/2d64/31a1/53d9d3b5efd0efe87648846f6bd08e5e?Expires=1665964800&Signature=gs6nSGc8WEiR3bVWNE9Co-YbcX-eahJYf0~nS4oa8wjOOdeWpX8O4b~bPNJyNLujuxHXcxWmDoiwDK9s-U0fIX1-MjPS71VLh8fMucl1O9XF-Csg7oEP0GWa9IOCyM0a6PRNzy3TOgoZneKpSZ-H10vPvruFypBK-dAb-txbzMvyrVWi-Ay0xF88UTd~6YheGhXJRGUvxzRXG6aurDB~vCakMd~73ZB2px27EbiEBAey2e4CwzIGn1s0zCz7IxZxlDqQYXvxdhpSK8I3tvFFFwuZiOO3quLg0q4lXMHrVuhe7VklwD5-jfZmje5IfAIUJ5I1wa2UMfBTvijI8B1lxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA  " />
                                            <MessageUsernamedclicked className="username">Jenny Wilson <MdVerified style={{ float: 'right', color: "#1A76F2", margin: "0px 5px" }} /></MessageUsernamedclicked>
                                        </MessageUserSectiondclicked>
                                            <BlockText>
                                                <MessageUserInfodclicked className="info-message">Hey buddy! What’s up?</MessageUserInfodclicked>
                                                <MessageTimedclicked className="message-time">Today, 12:51</MessageTimedclicked><BsDot className="select-dot" />
                                            </BlockText>
                                    </MessageClickButtondclicked>
                                </LiListMessageDclicked>
                            </UllistMessageDclicked>

                            <UllistMessageDclicked onClick={this.onToggle}>
                                <LiListMessageDclicked>
                                    <MessageClickButtondclicked>
                                        <MessageUserSectiondclicked>
                                            <MessageUserFotodclicked src="https://s3-alpha-sig.figma.com/img/25ee/9634/4db8ced5f79287d1d9e29311e0276f12?Expires=1665964800&Signature=b6m9IGVbN3zWJTrUbAUOuZha8JkD2Vs5sb~kcdO0VpgtLbCjuXJTwzyVxNvu7T23wjzkVka0DxK6KZS7GfP0okb4HNmPfIMLJrYxBTA2nLgMT0SifN4YmA5aCUOI8EPYiSOAbZR2jhYdypjJgdlil4hmbAewaQ7IcN7ypu8lLyg209KlwFS8K7iWbjBZLTkxDRqMz78E0Af9~YRsqSoGtTGDIO2-saIB6uTtquuc9cfs7B-gvf0ytJ13~muKFJyEneHBwwjbBCEHhqJ6qgtfIZroIUvLEGuL3st2q18uasquCTmVMOIss009yB9RLerr~Z9w4LS9M7KGG5g04hQyuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                            <MessageUsernamedclicked className="username">Devon Lane <MdVerified style={{ float: 'right', color: "#1A76F2", margin: "0px 5px" }} /></MessageUsernamedclicked>
                                        </MessageUserSectiondclicked>
                                        <MessageUserInfodclicked className="info-message">Hey buddy! What’s up?</MessageUserInfodclicked>
                                        <MessageTimedclicked className="message-time">Today, 12:51</MessageTimedclicked><BsDot className="select-dot" />
                                    </MessageClickButtondclicked>
                                </LiListMessageDclicked>
                            </UllistMessageDclicked>

                            <UllistMessageDclicked onClick={this.onToggle}>
                                <LiListMessageDclicked>
                                    <MessageClickButtondclicked>
                                        <MessageUserSectiondclicked>
                                            <MessageUserFotodclicked src="https://s3-alpha-sig.figma.com/img/9f30/cc79/fd4d13bf6a676dee1fd50103d9985ab5?Expires=1665964800&Signature=JBSoaOntuv43R4wWiC48WFtea6ILc~FJuKRvNn6ilFM31qoo1f6z72TPgf6jmOC4aQ46uud0D4kQuLKAOyw~m-kmKQ9xcMogjLAcMkPqfb8-mXbd1lZjjb8pWdsfS8VHkPIX1TUpJl5UnSzIyuHUZz1sbUVrZuAmWYUUBQq4IXJc6ek-bNg50u5Dq-dGJVGYZ7BPe3lMEA4iG39G4sUtUZkdKNAs6bymou5ju2l66JBVCyIEoTKoUTWU9~F7ANy~9vzzajQbQZWCHTtNSCL7BkhCObCtCzzKtpWv5bMlI4QneNikwgIyt1vlqgieUJzNYbA4hEcBLpBiLsBHxXoIBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                            <MessageUsernamedclicked className="username">Guy Hawkins <MdVerified style={{ float: 'right', color: "#1A76F2", margin: "0px 5px" }} /></MessageUsernamedclicked>
                                        </MessageUserSectiondclicked>
                                        <MessageUserInfodclicked className="info-message">Hey buddy! What’s up?</MessageUserInfodclicked>
                                        <MessageTimedclicked className="message-time">Today, 12:51</MessageTimedclicked><BsDot className="select-dot" />
                                    </MessageClickButtondclicked>
                                </LiListMessageDclicked>
                            </UllistMessageDclicked>

                            {/* -------------------------------------------------------------------------------------------------------------------------------- */}

                            <UlListMessage onClick={this.onToggle}>
                                <LiListMessage>
                                    <MessageClickButton>
                                        <MessageUserSection>
                                            <MessageUserFoto src="https://s3-alpha-sig.figma.com/img/9c01/bb0f/66d7f7d96f7898fdf9acd09f79a039da?Expires=1665964800&Signature=EHoHTcsNCPjKUlG1HZz--8k5-drY-9rH37mDI-F0zgMIXY-N0DukkA737UZHcLXHqQq1C2SG80Z5~EhKaeEj-TekVbtw7y8Opagi7pTuMJZ860KAYziOFaZl6Y9BbZxQFx4fuoz02vTZoHnlBqdrbOgLLKc4Zgcy8WnT4IEW4Wq5ODmIeoOt3H5BwLWOmAE-wqz0-xuCx4qisEq~3LIwKL4P-nerD22GWAlZ~I3IrBsL79aDzGXbRHJMcn4Ku7PpXadtjrlCEezNcW4Vhqp4ob~3TMhMDoz5-LPMcW6JjXTWuU2tY36fpTQpjfFEdfDnFsRwQ5pQfRWSmXo027bOqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                            <MessageUsername className="username">Cameron Williamson <MdVerified style={{ float: 'right', color: "#1A76F2", margin: "0px 5px" }} /></MessageUsername>
                                        </MessageUserSection>
                                        <MessageUserInfo className="info-message">Hey buddy! What’s up?</MessageUserInfo>
                                        <MessageTime className="message-time">Today, 12:51</MessageTime>
                                    </MessageClickButton>
                                </LiListMessage>
                            </UlListMessage>

                            <UlListMessage onClick={this.onToggle}>
                                <LiListMessage>
                                    <MessageClickButton>
                                        <MessageUserSection>
                                            <MessageUserFoto src="https://s3-alpha-sig.figma.com/img/c3bd/6542/d9e927a568c3036f671919df4800b82e?Expires=1665964800&Signature=g5iIW12RGSFBQUCDbLVGwFx~weQ1AX2P-qYZHJeHKCXh22DxvUvVZucPzLmDJIkIBMuN2RZwqgO~~DsStv2agnLyDaHPLq8pxkIeJvzozwREfCXOnhwHzAdUtCr0UNV~OVkp3iiqXPjAKY1lU03vELzVROUJ-j0LdLxgdYb3o27iV0ggOVX8e0OpeCyIfaqNYSW5Rlp9PuoZhQZqFoYEZjRnd8z5IkqfreWIWdqgm5H37V5qxo-XGpsqegM5RNXjNLynJN03u5KbRzj1WIuBvVN2EjYjID~3BKeQ1cYhhb4AFnj0gzaXH0hcr3xpcJ165kntuAUXQOH~vI1HdAEc3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                            <MessageUsername className="username">Wade Warren <MdVerified style={{ float: 'right', color: "#1A76F2", margin: "0px 5px" }} /></MessageUsername>
                                        </MessageUserSection>
                                        <MessageUserInfo className="info-message">Hey buddy! What’s up?</MessageUserInfo>
                                        <MessageTime className="message-time">Today, 12:51</MessageTime>
                                    </MessageClickButton>
                                </LiListMessage>
                            </UlListMessage>

                            <UlListMessage onClick={this.onToggle}>
                                <LiListMessage>
                                    <MessageClickButton>
                                        <MessageUserSection>
                                            <MessageUserFoto src="https://s3-alpha-sig.figma.com/img/4b30/8ad2/b8f693b78f0929daf8fdf1dfc036ced0?Expires=1665964800&Signature=eweh-6WPNmS7Y34oRgHGZqq4TrEc-ThTBnieanjcGqjb7RQHOvVxUyeGusWW78LZzZOu6jNunOi4ZM86hfxXX36wqd4hBqwvegwkUqiBxsl4ncCJ4OjsHfC-0k~sgng~gyrT6nvhh8N9RKS8DngzWJcRaTFsbLpvuEiZKOxxcTATuuGkRTLpplgQY-Mblsbk1~2jHBgzPiFU-l8ZVHbtOqFQbdOa7-58ea9j~21MHSYXzL0tDWhf7MYEh9DwCoU9DWV1aBvi864t9I~9UGxbqaqXfWQrFp4RNzZ2VfpjJWw-mlEVI~8NKQ0EIph~7UalXzz3jivXLGrtuGb~cyqloA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                            <MessageUsername className="username">Annette Black <MdVerified style={{ float: 'right', color: "#1A76F2", margin: "0px 5px" }} /></MessageUsername>
                                        </MessageUserSection>
                                        <MessageUserInfo className="info-message">Hey buddy! What’s up?</MessageUserInfo>
                                        <MessageTime className="message-time">Today, 12:51</MessageTime>
                                    </MessageClickButton>
                                </LiListMessage>
                            </UlListMessage>

                            <UlListMessage onClick={this.onToggle}>
                                <LiListMessage>
                                    <MessageClickButton>
                                        <MessageUserSection>
                                            <MessageUserFoto src="https://s3-alpha-sig.figma.com/img/3f3d/bb87/58dac2f877d760740ad8f617cc9fe0e8?Expires=1665964800&Signature=YbKmB90Qg6g4BlSx-1Qp0gJvE6M3vEjo5ot2p4ByW~e5IUc5rTGf3gq32RniCbjuQerW5k5NVSifcMcZcGjDIgp-fEtaK73bDykdHPjFiSholaEgYAeGISq8JvQ8qC5L3mgEvjsd5e1ZHdEfHoOQW4OhC9W1R5VqDnNBh~UXmSrNDlGbMJu1IHxf~T3AFjmJ84N5clCOISeLsOv6OXrsh62Y2qqq7CAqsJApxhLvTYUmBr2SZdjX1vw~wfQKdnssvS6vy8vLgFA6gqJSH1YfKyGJmS6K52qJFyuul56LkY866BkEpT2SsxG8WQ0kWEp~DIIH7CzJP1TDBgOxmxlIEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                            <MessageUsername className="username">Leslie Alexander <MdVerified style={{ float: 'right', color: "#1A76F2", margin: "0px 5px" }} /></MessageUsername>
                                        </MessageUserSection>
                                        <MessageUserInfo className="info-message">Hey buddy! What’s up?</MessageUserInfo>
                                        <MessageTime className="message-time">Today, 12:51</MessageTime>
                                    </MessageClickButton>
                                </LiListMessage>
                            </UlListMessage>

                            <UlListMessage onClick={this.onToggle}>
                                <LiListMessage>
                                    <MessageClickButton>
                                        <MessageUserSection>
                                            <MessageUserFoto src="https://s3-alpha-sig.figma.com/img/6ff3/7cae/9c02f7cbfb66cc1db240390cf5a504ef?Expires=1665964800&Signature=CylezrEkAT902n9QnO~kQfEuOVLiYzoMKR9zCjPTg8cv59ntJAkkIBXtdVt756xsQoYIXU4Vh8BgMyi3zoCzw1JSTcgGQBprzzOVR-xfn7gVYQQYkkGVg3X401~0M1toDvXqINmipZExiCKSKiBEFgXxPykTBZgV68wjph3TmLmwwdxvMK1QBm7iYvMlry7EitPVmiVOxJecvNpiWeeCO9WsADxnA4kDX95jVYYH9bHNXIbeiXxOz4MFkM8Yopm9FzQurLmM0VXr4j5AGlsxPySzDHd1ACYntcUJuaxFyZy~zrIYs90xBxRD3hVGu02GVvtcctXf4nzPBD6vQlhEsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                            <MessageUsername className="username">Courtney Henry <MdVerified style={{ float: 'right', color: "#1A76F2", margin: "0px 5px" }} /></MessageUsername>
                                        </MessageUserSection>
                                        <MessageUserInfo className="info-message">Hey buddy! What’s up?</MessageUserInfo>
                                        <MessageTime className="message-time">Today, 12:51</MessageTime>
                                    </MessageClickButton>
                                </LiListMessage>
                            </UlListMessage>

                            <UlListMessage onClick={this.onToggle}>
                                <LiListMessage>
                                    <MessageClickButton>
                                        <MessageUserSection>
                                            <MessageUserFoto src="https://s3-alpha-sig.figma.com/img/a90f/0b99/4892bc643b9f4e95d63edf2d04ac8180?Expires=1665964800&Signature=gq2a8dnHxXyaOzU3W9p5YfhweFmqvq4uNkDQfGEXPzygPdKzcIiP4D14isRIqFCbAUIU0BpfsHNala3ENlJJimnQP3MUCie7APAAta28MDMDucCEIaXua9zET6M4H4M1zkG49BPL1ErMd0WvnuNblcqpTApvc5C~UzZiKhWPvma-IUpUh4566Ob~uFM8H0y8d7zOuVpdgqQ55cCi7f5Gw5P2S5LQNK7D-619Cjoc4d0yuf82w3YQteLe00GUZo6Js7-zmBhaiQqTeR6dI2zfvUEbiCWVHaCuca006TLCFR2mi1nzU2Bh-Q8IM8Xz4FaISqQdoEMeRRS5ZwNd6pSRzA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                            <MessageUsername className="username">Theresa Webb <MdVerified style={{ float: 'right', color: "#1A76F2", margin: "0px 5px" }} /></MessageUsername>
                                        </MessageUserSection>
                                        <MessageUserInfo className="info-message">Hey buddy! What’s up?</MessageUserInfo>
                                        <MessageTime className="message-time">Today, 12:51</MessageTime>
                                    </MessageClickButton>
                                </LiListMessage>
                            </UlListMessage>

                            <UlListMessage onClick={this.onToggle}>
                                <LiListMessage>
                                    <MessageClickButton>
                                        <MessageUserSection>
                                            <MessageUserFoto src="https://s3-alpha-sig.figma.com/img/45d9/1162/d78ab141e51c842b36a29299ca246991?Expires=1665964800&Signature=YcE~0jksV~~9vP~q~gYLlELKSQIbfgMc6ysXtcN1MaBXBXTCGN~~-DiAsE854aOXgWuYzNdMOdGevbJBL~FhrG4-GdBtaARWFbIG6L6WWz2R4LCmQ7F4D0l8w1Sw9HWjKh0WASAwK-4zfHBNZF2vblagt9ZQeYfyqCrnyocIcrSlX0Fx209dAhtxTmnJk7AqV3H8NqZdgu5apHyuIDr0FcsTPmvGdCtRu6RB4bhyCEekHIyX--lTQqNKkZMSpzXioUDtDzv4AVhrGUw6DLit3ZdZd5eU2eExL1lYFeGizpFDs-JRjBki3kGJ2dxQggfBmQQdM74k~oO02olHlE9S0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                            <MessageUsername className="username">Cody Fisher <MdVerified style={{ float: 'right', color: "#1A76F2", margin: "0px 5px" }} /></MessageUsername>
                                        </MessageUserSection>
                                        <MessageUserInfo className="info-message">Hey buddy! What’s up?</MessageUserInfo>
                                        <MessageTime className="message-time">Today, 12:51</MessageTime>
                                    </MessageClickButton>
                                </LiListMessage>
                            </UlListMessage>
                        </MessageScroll>

                        {/* --------------------------------------------------------------------------------------------------- */}

                    </LeftMessageSection>
                </Grid.Col>
                {this.state.isVisible &&
                <Grid.Col md={8} style={{ background: '#F7F8FA',boxShadow: '0px 5px 60px #0000000f', display: this.state.isVisible ? 'block' : 'none'}}>
                    <MessageSectionUser>
                        <BackIconImageDiv>
                            <IoIosArrowBack className="arrow-back-icon" onClick={this.onToggle}/>
                            <MessageTopUserFoto src="https://s3-alpha-sig.figma.com/img/2d64/31a1/53d9d3b5efd0efe87648846f6bd08e5e?Expires=1665964800&Signature=gs6nSGc8WEiR3bVWNE9Co-YbcX-eahJYf0~nS4oa8wjOOdeWpX8O4b~bPNJyNLujuxHXcxWmDoiwDK9s-U0fIX1-MjPS71VLh8fMucl1O9XF-Csg7oEP0GWa9IOCyM0a6PRNzy3TOgoZneKpSZ-H10vPvruFypBK-dAb-txbzMvyrVWi-Ay0xF88UTd~6YheGhXJRGUvxzRXG6aurDB~vCakMd~73ZB2px27EbiEBAey2e4CwzIGn1s0zCz7IxZxlDqQYXvxdhpSK8I3tvFFFwuZiOO3quLg0q4lXMHrVuhe7VklwD5-jfZmje5IfAIUJ5I1wa2UMfBTvijI8B1lxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                            <MessageTopUsername>Jenny Wilson</MessageTopUsername>
                            <OnlineTxt>Online</OnlineTxt>
                        </BackIconImageDiv>
                    </MessageSectionUser>
                    <MessageDate>Today, 4 July</MessageDate>
                    <div id="chat-message-list" className="mb-4">

                        <div className="message-img image-field">
                            <div className="message-image">
                                <img className="image-message" src="https://s3-alpha-sig.figma.com/img/6b7a/21ad/7df5ed592ac955c313412d5a13108311?Expires=1665964800&Signature=CBueXpUH8XHXOwarnESJdcpXCNjEXfPahk~Ou6aIyZzHtkN66riOe3pZ7VmJNJuSPnf3-0VmDC0xCFHUSNZbURumnb2ZrZbwx5pkC1D3qZfcewiegGSkIP5WQA9YNDLDFlMXx5KukzxxY-ArL-PJN-CGgZ1dHc1Ozk~YrYsmQvTiTxhTedKUxyM-kibMQR-LiT0QaIYCQzqmjbOBP0~B7X60MSSg0IVgLs3-C1bETSnCquhcDgujzR~jcaPSXxWDPiuTolCLGP-iGFkQ0Ol-RsY-evMyj6uPHSioc~xeRCDPZcUbVcWQwmyVesHxF-y2gqVC~GSBFm~~IGkxxWPbpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                <div className="message-time-foto mt-4 pt-2">12:51</div>
                            </div>
                        </div>
                        
                        <div className="message-row you-message d-flex">
                            <div className="message-content d-flex gap-2">
                            <div className="message-time mt-4 pt-2">12:51</div>
                                <div className="message-text">
                                    Nothing
                                </div>
                            </div>
                        </div>
                        <div className="message-row other-message">
                            <div className="message-content d-flex gap-2">
                                <div className="message-text">
                                Fine, TY
                                </div>
                                <div className="message-time mt-4 pt-2">12:51</div>
                            </div>
                            <div className="message-content d-flex gap-2">
                                <div className="message-text">
                                Just want to ask, what do you wish for your BD?
                                </div>
                                <div className="message-time mt-4 pt-2">12:51</div>
                            </div>
                            
                        </div>
                        <div className="message-row you-message d-flex">
                            <div className="message-content d-flex gap-2">
                            <div className="message-time mt-4 pt-2">12:51</div>
                                <div className="message-text">
                                    All right, man. U?
                                </div>
                            </div>
                        </div>
                        <div className="message-row other-message">
                            <div className="message-content d-flex gap-2">
                                <div className="message-text">
                                    Hey mate what's up?
                                </div>
                                <div className="message-time mt-4 pt-2">12:51</div>
                            </div>
                        </div>
                    </div>

                    {/* Message Foto Delete Section */}
                    <DeleteImageContainer>
                        <TrashIconAttachesDiv>
                                <FiTrash2 style={{ color: '#3800B0' }} className="trash-attaches" /><ClearAllAttaches>Clear all attaches</ClearAllAttaches>
                        </TrashIconAttachesDiv>
                        <MessageDeletePopupSection>
                            <ImageSectionOne>
                                <DeleteSectionImageOne src="https://s3-alpha-sig.figma.com/img/4717/223e/2ca32322fbe19c5a1471920a1d2e5b51?Expires=1665964800&Signature=FPITsZZf8mmvr1aF2eDbeVVtn93J9r9enkEBKLmhqO2TUlL~tsnKsJ-QAfjpOpCwksmrwCe8DmdfLSyYhN6PqCrPfUe3oxQSr3LoIJ9vqdAggdGSKbBz5GzuRYAiFKMGB-O3ssppGQhiB1OrrXt5A7xXbi5xL-6Soy7oYUMBNrXOlSZonzjcqhA2ktg68oQ~R0jUG6Y6u7f~BkfWlfEwrw7-hLZzHIr~zEodn7mtCbeZxlqDwAZYimLbEoKIpOU09J2dylUtCkyuj3eIXLYbw5iRbg1hIPejLO5j7UUIa0TXd53xWMi8UqizCTKPnuoJyypJNJg1SaBM3S~R-PiB8A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                <FiTrash2 style={{ color: '#3800B0' }} className="trash-icon" />
                            </ImageSectionOne>

                            <ImageSectionTwo>
                                <DeleteSectionImageTwo src="https://s3-alpha-sig.figma.com/img/527c/d459/76f80a15d32a5f69cda87960d573fa1f?Expires=1665964800&Signature=Q1R9Rn~5rWcB68putFIzS~nPR8SRvX74loXBnMATnGlAdGIC9IGUY3H4STJyrzkEpH010IHAtsgXKrUeaOGEtCGhtblFi1tkR~eHW-EaWamMRZzekDWtsSbDE-5qIgDbcK6xpzqYqHT3T9bCAknoaWf6tV49IOf3-DtylNMQCvh~PRySSx-5nk2N3B7jTz4cV93tCw~N0zJNRB~LG~12AA7DuDdAsbSGvm1SnAijZkp5iSzoN0FP3Nh-nENpyj2LsrB5ov4uFSWcP8eJCKeddoU5LP7FMdQCW0VZUIjHmGhHmlxkl7o9e79TLS7ylmqrDoPnK6SSaaULAON5OCa7bQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                <FiTrash2 style={{ color: '#3800B0' }} className="trash-icon1" />
                            </ImageSectionTwo>
                        </MessageDeletePopupSection>

                    <MessageUserInputContainer>
                        <MessageInputUserDiv>
                            <Input name="user-input-message" className="user-message-input" placeholder="Write a message" />
                            <RiSendPlaneLine className="send-icon" />
                            <AiOutlinePicture className="gallery-icon" />
                        </MessageInputUserDiv>
                    </MessageUserInputContainer>

                    </DeleteImageContainer>


                    {/* END Message Foto Delete Section */}
                </Grid.Col>}
                </Grid>

        )
    }
}

export default MobileMessage;