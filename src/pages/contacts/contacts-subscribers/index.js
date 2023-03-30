import React, { useEffect } from "react";
import { Tab, TabPanel, Tabs } from "react-tabs";
import { TabButtons } from "../../my-profile-edit/MyProfileEdit.styles";
import {
  ButtonFind,
  ButtonSection,
  ContactsMainContainer,
  ContactsNavigator,
  ContactsTxt,
  DontHaveDataSection,
  DontHaveDataText,
  FacebookTxt,
  GlasesImg,
  Subscribebtn,
  SuggestionTxt,
  TabTopContainer,
  Unsubscribe,
  UserContentDiv,
  UserImage,
  UserUsername,
} from "./CSubscribers.styled";
import { UnsubscribeDataCard } from "./UnsubscribeData";
import { UsersDataCard } from "./UsersCards";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SuggestDataCard } from "./SuggestionData";
import { Component } from "react";
import file1 from "../../../style/icons/file1.png";
import { FacebookFriendsDataCard } from "./FacebookFriends";
import axios from "axios";
import { useState } from "react";
import { Loader } from "@mantine/core";
import CustomBreadcrumb from "../../../shared/components/breadcrumb";
import { myaxiosprivate } from "../../../api/myaxios";
import { Link } from "react-router-dom";

const ContactsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState("");
  const [errorFollowing, setErrorFollowing] = useState("");
  const [wait, setWait] = useState(true);
  const [waitFollows, setWaitFollows] = useState(true);
  const [isFollowersData, setFollowersData] = useState([]);
  const [checkUserMessageSubscribe, setUserMessageSubscribe] = useState("");
  const [checkUserStatusSubscribe, setUserStatusSubscribe] = useState();
  const [isFollowing, setIsFollowing] = useState({});

  const [isFollowsData, setFollowsData] = useState([]);

  const onToggle = () => {
    setIsVisible((state) => !state);
  };

  const fetchDataFollowing = () => {
    setErrorFollowing("");
    myaxiosprivate
      .get("/api/v1/follows/list?skip=0")
      .then(({ data }) => {
        setFollowsData(data.data.list);
      })
      .catch((err) => {
        setErrorFollowing(err.message);
      });
  };
  const fetchDataFollowers = () => {
    setError("");
    myaxiosprivate
      .get("/api/v1/followers/list?skip=0")
      .then(({ data }) => {
        setFollowersData(data.data.list);
        if (data.data.list) {
          const followedUser = {};
          data.data.list.forEach((user) => {
            followedUser[user.id] = user.followed;
          });
          setIsFollowing(followedUser);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const followUser = (data) => {
    setError("");
    myaxiosprivate
      .get(`/api/v1/follow?user_id=${+data.id}`)
      .then((res) => {
        setIsFollowing((prevStatus) => ({
          ...prevStatus,
          [data.id]: true,
        }));
        return res.data.data;
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const unfollowUser = (data) => {
    setError("");
    myaxiosprivate
      .get(`/api/v1/unfollow?user_id=${+data.id}`)
      .then((res) => {
        setIsFollowing((prevStatus) => ({
          ...prevStatus,
          [data.id]: false,
        }));
        return res.data.data;
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    setWait(true);
    fetchDataFollowers();
    setWait(false);
  }, []);

  useEffect(() => {
    setWaitFollows(true);
    fetchDataFollowing();
    setWaitFollows(false);
  }, []);

  const handleClick = (data) => {
    setIsFollowing((prevState) => ({
      ...prevState,
      [data.id]: !prevState[data.id],
    }));
    if (isFollowing[data.id]) {
      unfollowUser(data);
    } else {
      followUser(data);
    }
  };

  useEffect(() => {}, [isFollowersData]);

  useEffect(() => {});

  return (
    <ContactsMainContainer>
      {/*<ContactsNavigator> Main {">"} Profile {'>'} Contacts </ContactsNavigator>*/}
      <CustomBreadcrumb
        margins="mt-10 mb-0"
        links={[
          {
            title: "Main",
            to: "/",
          },
          {
            title: "Profile",
            to: "/my-profile",
          },
          {
            title: "Contacts",
          },
        ]}
      />
      <ContactsTxt>Contacts</ContactsTxt>
      <Tabs defaultValue="followers">
        <TabTopContainer>
          <div className="insider">
            <Tab value="followers">
              <button className="editing-buttons">
                Followers{" "}
                <span
                  style={{
                    color: "gray",
                    fontFamily: "sans-serif",
                    marginLeft: "8px",
                  }}
                >
                  {" "}
                </span>
              </button>
            </Tab>
            <Tab value="following">
              <button className="editing-buttons">
                Following{" "}
                <span
                  style={{
                    color: "gray",
                    fontFamily: "sans-serif",
                    marginLeft: "8px",
                  }}
                >
                  {" "}
                </span>
              </button>
            </Tab>
            <Tab value="find-friends">
              <button className="editing-buttons">Find friends</button>
            </Tab>
          </div>
        </TabTopContainer>

        <TabPanel value="followers">
          {error && <p className="mx-14 mt-2 text-red-500 text-xs">{error}</p>}
          {!wait ? (
            !isFollowersData ? (
              <DontHaveDataSection>
                <DontHaveDataText>
                  You haven't subscribed to anyone yet
                </DontHaveDataText>
                <ButtonSection>
                  <ButtonFind>Find friends</ButtonFind>
                </ButtonSection>
                <GlasesImg src={file1} />
              </DontHaveDataSection>
            ) : (
              isFollowersData?.map((data) => (
                <UserContentDiv key={data?.id}>
                  <UserImage
                    src={`${
                      data?.image
                        ? data?.image
                        : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                    }`}
                  />
                  <Link to={`/profile/${data?.name}`}>
                    <UserUsername>{data?.full_name}</UserUsername>
                  </Link>
                  {data.verify && <BsCheckCircleFill className="check" />}
                  <Subscribebtn
                    className="cursor-pointer"
                    id={data.id}
                    onClick={() => handleClick(data)}
                  >
                    {isFollowing[data.id] ? "Unsubscribe" : "Subscribe"}
                  </Subscribebtn>
                  {/* <Unsubscribe onClick={(e) => fetchDataUnsubscribe(e.target.id)} id={data.id}>Unsubscribe</Unsubscribe> */}
                </UserContentDiv>
              ))
            )
          ) : (
            <Loader size="xl" style={{ margin: "0 265 100px" }} />
          )}
        </TabPanel>
        <TabPanel value="following">
          {errorFollowing && (
            <p className="mx-14 mt-2 text-red-500 text-xs">{errorFollowing}</p>
          )}

          {!waitFollows ? (
            !isFollowsData ? (
              <DontHaveDataSection>
                <DontHaveDataText>
                  You haven't subscribed to anyone yet
                </DontHaveDataText>
                <ButtonSection>
                  <ButtonFind>Find friends</ButtonFind>
                </ButtonSection>
                <GlasesImg src={file1} />
              </DontHaveDataSection>
            ) : (
              isFollowsData?.map((dataFollows) => (
                <UserContentDiv key={dataFollows?.id}>
                  <UserImage
                    src={`${
                      dataFollows.image
                        ? dataFollows.image
                        : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                    }`}
                  />
                  <Link to={`/profile/${dataFollows?.name}`}>
                    <UserUsername>{dataFollows.full_name}</UserUsername>
                  </Link>
                  {dataFollows.verify && (
                    <BsCheckCircleFill className="check" />
                  )}
                  <Unsubscribe
                    className="cursor-pointer"
                    onClick={() => unfollowUser(dataFollows)}
                    id={dataFollows.id}
                  >
                    Unsubscribe
                  </Unsubscribe>
                </UserContentDiv>
              ))
            )
          ) : (
            <Loader size="xl" style={{ margin: "0 265 100px" }} />
          )}
        </TabPanel>

        {/* <TabPanel value="find-friends">
                    <FacebookTxt>Facebook friends</FacebookTxt>
                    {!this.state.isVisible &&
                        <button className='facebook-button' onClick={this.onToggle}>
                            <FaFacebook className='facebook-icon'></FaFacebook>
                            <h1 className='facebook-title' style={{ margin: '0' }}>Connect Facebook</h1>
                        </button>
                    }
                    <div className="mb-5">
                        {this.state.isVisible &&
                            <div>
                                {
                                (FacebookFriendsDataCard.data) ? (FacebookFriendsDataCard.data.map(({ foto, username }) => (
                                        <UserContentDiv>
                                            <UserImage src={foto} />
                                            <UserUsername>{username}</UserUsername>
                                            <BsCheckCircleFill className="check" />
                                            <Subscribebtn href="#">Subscribe</Subscribebtn>
                                        </UserContentDiv>
                                    )))

                                    :

                                    <DontHaveDataSection>
                                        <DontHaveDataText>You haven't subscribed to anyone yet</DontHaveDataText>
                                        <ButtonSection>
                                            <ButtonFind>Find friends</ButtonFind>
                                        </ButtonSection>
                                        <GlasesImg src={file1} />
                                    </DontHaveDataSection>
                                }
                            </div>
                        }
                    </div>

                    <div>
                        <SuggestionTxt>Suggestion</SuggestionTxt>

                    </div>

                    {

                    (SuggestDataCard.data) ? (SuggestDataCard.data.map(({ foto, username }) => (
                            <UserContentDiv>
                                <UserImage src={foto} />
                                <UserUsername>{username}</UserUsername>
                                <BsCheckCircleFill className="check" />
                                <Subscribebtn href="#">Subscribe</Subscribebtn>
                            </UserContentDiv>
                        )))

                        :

                        <DontHaveDataSection>
                            <DontHaveDataText>You haven't subscribed to anyone yet</DontHaveDataText>
                            <ButtonSection>
                                <ButtonFind>Find friends</ButtonFind>
                            </ButtonSection>
                            <GlasesImg src={file1} />
                        </DontHaveDataSection>

                    }

                        
                </TabPanel> */}
      </Tabs>
    </ContactsMainContainer>
  );
};

export default ContactsPage;
