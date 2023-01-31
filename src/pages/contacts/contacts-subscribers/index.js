import React, { useEffect } from "react";
import { Tab, TabPanel, Tabs } from "react-tabs";
import { TabButtons } from "../../my-profile-edit/MyProfileEdit.styles";
import { ButtonFind, ButtonSection, ContactsMainContainer, ContactsNavigator, ContactsTxt, DontHaveDataSection, DontHaveDataText, FacebookTxt, GlasesImg, Subscribebtn, SuggestionTxt, TabTopContainer, Unsubscribe, UserContentDiv, UserImage, UserUsername } from "./CSubscribers.styled";
import { UnsubscribeDataCard } from "./UnsubscribeData";
import { UsersDataCard } from "./UsersCards";
import { BsCheckCircleFill } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { SuggestDataCard } from "./SuggestionData";
import { Component } from "react";
import file1 from "../../../style/icons/file1.png"
import { FacebookFriendsDataCard } from "./FacebookFriends";
import axios from "axios";
import { useState } from "react";
import { Loader } from "@mantine/core";
import CustomBreadcrumb from "../../../shared/components/breadcrumb";

const ContactsPage = () => {

    const[isVisible,setIsVisible] = useState(false);
    const[wait,setWait] = useState(true);
    const[waitFollows,setWaitFollows] = useState(true);
    const[isFollowersData, setFollowersData] = useState([])
    console.log(isFollowersData)
    const[checkUserMessageSubscribe, setUserMessageSubscribe] = useState("")
    const[checkUserStatusSubscribe, setUserStatusSubscribe] = useState()

    const[isFollowsData, setFollowsData] = useState([])


    const onToggle = () => {
        setIsVisible(((state)=>!state));
    }


    const fetchDataFollowing = () =>{
        const getUserToken = localStorage.getItem("UserToken=")
       let confing = {
        method:'get',
        url: `https://api.wishx.me/api/v1/follows/list?skip=0`,
        headers: {
            'Authorization': `Bearer ${getUserToken}`, 
            'Content-Type': 'application/json'
        }
       }
        return axios(confing).then((userFollowingData)=>userFollowingData)
    }

    
    const fetchDataSubscribe = (getUserId) => {
        const getUserToken = localStorage.getItem("UserToken=")
        let confing = {
            method:'get',
            url: `https://api.wishx.me/api/v1/follow?user_id=${+getUserId}`,
            headers: {
                'Authorization': `Bearer ${getUserToken}`, 
                'Content-Type': 'application/json',
            }
           }
             axios(confing).then((data)=>{console.log(data)}).catch((err) => {
                if(err) {
                    alert("You have already subscribed to this user!")
                }
             })
    }


    const fetchDataUnsubscribe = (getUserId) => {
        const getUserToken = localStorage.getItem("UserToken=")
        let confing = {
            method:'get',
            url: `https://api.wishx.me/api/v1/unfollow?user_id=${+getUserId}`,
            headers: {
                'Authorization': `Bearer ${getUserToken}`, 
                'Content-Type': 'application/json',
            }
           }
             axios(confing).then((data)=>console.log(data)).catch((err) => {
                if(err) {
                    alert("You have already unsubscribed to this user!")
                }
             })
    }

    const fetchDataFollowers = () =>{
        const getUserToken = localStorage.getItem("UserToken=")
       let confing = {
        method:'get',
        url: "https://api.wishx.me/api/v1/follows/list?skip=0",
        headers: {
            'Authorization': `Bearer ${getUserToken}`, 
            'Content-Type': 'application/json'
        }
       }
        return axios(confing).then((userFollowingData)=>userFollowingData.data.data)
    }

    useEffect(()=>{
        setWait(true);
        fetchDataFollowers().then(data => setFollowersData(data.list)).finally(()=>setWait(false))
        console.log("TEST FETCH")
    },[])

    useEffect(() => {
        setWaitFollows(true);
        fetchDataFollowing().then(data =>setFollowsData(data.data.data.list)).finally(() => setWaitFollows(false))
    },[])

    useEffect(() => {
        
    },[isFollowersData])

    useEffect(()=> {

    })
    
    

    return (
        <ContactsMainContainer>
            {/*<ContactsNavigator> Main {">"} Profile {'>'} Contacts </ContactsNavigator>*/}
            <CustomBreadcrumb
              margins="mt-10 mb-0"
              links={[
              {
                title: 'Main',
                to: '/'
              },
              {
                title: 'Profile',
              },
              {
                title: 'Contacts',
              },
            ]}
            />
            <ContactsTxt>Contacts</ContactsTxt>
            <Tabs defaultValue="followers">
                <TabTopContainer>
                    <div className='insider'>
                        <Tab value="followers" >
                            <button className='editing-buttons'>Followers <span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>   </span></button>
                        </Tab>
                        <Tab value="following">
                            <button className='editing-buttons'>Following <span style={{ color: "gray", fontFamily: "sans-serif", marginLeft: "8px" }}>   </span></button>
                        </Tab>
                        <Tab value="find-friends">
                            <button className='editing-buttons'>Find friends</button>
                        </Tab>
                    </div>
                </TabTopContainer>

                <TabPanel value="followers">
                    {
                        !wait ? isFollowersData?.length !== 0  ? isFollowersData?.map((data) => (
                            <UserContentDiv>
                                <UserImage src={`https://api.wishx.me/${data.image}`} />
                                <UserUsername>{data.full_name}</UserUsername>
                                {/* <BsCheckCircleFill className="check" /> */}
                                    <Subscribebtn id={data.id}  onClick={(e) => fetchDataSubscribe(e.target.id)}>Subscribe</Subscribebtn>
                                    {/* <Unsubscribe onClick={(e) => fetchDataUnsubscribe(e.target.id)} id={data.id}>Unsubscribe</Unsubscribe> */}
                            </UserContentDiv>

                        )) : <DontHaveDataSection>
                        <DontHaveDataText>You haven't subscribed to anyone yet</DontHaveDataText>
                        <ButtonSection>
                            <ButtonFind>Find friends</ButtonFind>
                        </ButtonSection>
                        <GlasesImg src={file1} />
                    </DontHaveDataSection>: <Loader size="xl" style={{ margin: "0 265 100px"}} />
                    }


                </TabPanel>

                <TabPanel value="following">
                    {
                        !waitFollows ? isFollowsData?.length !== 0 ? isFollowsData?.map((dataFollows) => (
                            <UserContentDiv>
                                <UserImage src={`https://api.wishx.me/${dataFollows.image}`} />
                                <UserUsername>{dataFollows.full_name}</UserUsername>
                                {/* <BsCheckCircleFill className="check" /> */}
                                    <Unsubscribe onClick={(e) => fetchDataUnsubscribe(e.target.id)} id={dataFollows.id}>Unsubscribe</Unsubscribe>
                            </UserContentDiv>
                        ))

                        :

                        <DontHaveDataSection>
                            <DontHaveDataText>You haven't subscribed to anyone yet</DontHaveDataText>
                            <ButtonSection>
                                <ButtonFind>Find friends</ButtonFind>
                            </ButtonSection>
                            <GlasesImg src={file1} />
                        </DontHaveDataSection> 
                        
                        : <Loader size="xl" style={{ margin: "0 265 100px"}} />
                        
                    }
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
        )
    }

// class ContactsPage extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {isVisible: false}
//         this.onToggle = this.onToggle.bind(this);
//     }

//     onToggle(e) {
//         this.setState({isVisible: !this.state.isVisible})
//     }

//     componentWillUnmount() {
//         console.log("TEST COMPONENT DID MOUNTTTTTTTTTTTTTTTTTTTT")
//         const GetUserAuthToken =  localStorage.getItem("UserToken=")
//         axios.get("https://api.wishx.me/api/v1/follows/list?skip=0", {
//             headers: {
//                 'Authorization': `Bearer ${GetUserAuthToken}` 
//             }
//         }).then((userFollowsData) => {
//             const getResultDataFollows = userFollowsData.data.data
//             this.setState({getResultDataFollows})
          
//         })
//     }

    
//     render() {
//         console.log(this.state, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
//         return (

export default ContactsPage;