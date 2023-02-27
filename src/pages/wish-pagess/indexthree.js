import React, { useEffect, useState } from 'react'
import { Birthday, Blue_div, Blue_top_div, Blue_loading_div, Last_title, Left_buttons, Left_div, Left_image, Left_report, Main_page, Main_page_top, Middle_title, Photo, Right_blue_div, Right_div, Right_top_div, Top_title, Blue_button_div, Vashed, Congratulate, Congratulate_button, Product, Product_part, Product_other, All_congrulation, Hbd, Hbd_title, Hbd_name, Hbd_footer, Photos, Hbday, Mcdonalds, Picture, Mcago, Freecofe, Bottom_div, Bottom_div_title, Bottom_div_show, RightBlueDivForThree, PhotoMacDon } from "./Wish-pages.styled";
import watch from "../../style/icons/handwatch.png"
import { BsFacebook, BsTwitter, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { IoMailOutline, IoNotificationsOutline, IoWarningOutline } from 'react-icons/io5';
import { RiLinksFill } from 'react-icons/ri';
import { HiOutlineFilter, HiBadgeCheck, HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { BiLike } from 'react-icons/bi';
import { AiOutlinePlusCircle, AiTwotoneLike } from 'react-icons/ai';
import { Carddata } from "../search/CardData"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {
    Wrapper,
    ImgWrapper,
    ContentWrapper,
    Titles,
    UserWrapper,
    UserAbout,
    UserName,
    UserDesc,
    UserPhoto,
    PriceWrapper,
    Prices,
    LeftPrice,
    RightPrice,
    ProgressWrapper,
    GridBody,
} from "../search/SearchCard.styled";
import {
    Grid,
    Progress,

} from "@mantine/core";
import { Right_three_div, Time_div, Time_div_p } from './Add.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import StampIcon from "../../assets/svg/stamp.svg";

function MyVerticallyCenteredModal(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{border: '0'}}>
          <Modal.Title id="contained-modal-title-vcenter" style={{
            fontFamily: 'Steppe',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '30px',
            transform: 'translate(20px, 20px)',
            lineHeight: '120%'
          }}>
            Report the Wish
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{paddingTop: '20px', paddingBottom: '30px', paddingLeft: '40px'}}>
          <div className='delete-causes-items-container'>
            <p style={{
                paddingBottom: '5px', 
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '20px',
                lineHight: '160%',
            }}>Choose the reason</p>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="Reason 1" control={<Radio />} label="Reason 1" />
                <FormControlLabel value="Reason 2" control={<Radio />} label="Reason 2" />
                <FormControlLabel value="Reason 3" control={<Radio />} label="Reason 3" />
                <FormControlLabel value="Other Reson" control={<Radio />} label="Other Reson" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className='reson-text-input' style={{paddingTop: '20px', height: '80px'}}>
            <input type='text' className='info_input' placeholder='Describe your reason' style={{
              height: '100%',
              width: '465px',
              paddingLeft: '20px',
              background: '#F7F8FA',
              borderRadius: '8px'

            }}/>
          </div>
        </Modal.Body>
        <Modal.Footer style={{border: '0'}}>
          <Button onClick={props.onHide} style={{background: '#3800B0'}}>Send</Button>
        </Modal.Footer>
      </Modal>
    );
  }


function Wish_pages() {
    const { state } = useLocation()
    const navigate = useNavigate();

    const GetUserTokenCreationWish = localStorage.getItem("UserToken=")
    const [modalShow, setModalShow] = useState(false);
    const [GetUserWishDataResult, setGetUserData] = useState([])
    const [getUserId, setUserId] = useState()
    const [getUserName, setUserName] = useState()
    const [getUserBirthday, setUserBirthday] = useState()

    useEffect(() => {

        axios.get("https://api.wishx.me/api/v1/wish/slug/",{
        params: {
            slug: state
        }
    }).then((GetUserWish)=> {
        setGetUserData(GetUserWish?.data?.data)
        console.log(GetUserWish)
      }).catch((err) => {
        console.log("")
      })


        axios.get("https://api.wishx.me/api/v1/user",{
         headers: {
           'Access-Control-Allow-Origin': '*',  xsrfHeaderName: 'X-XSRF-TOKEN', 'Authorization': `Bearer ${GetUserTokenCreationWish}`
         }
       }).then((datauser) => {
        setUserName(datauser.data.data.info)
        setUserId(datauser.data.data.user_id)
        console.log(datauser.data.data.user_id, "USER ID")
       })

    //    axios.get("https://api.wishx.me/api/v1/user/other", {
    //     params: {
    //         user_id: getUserId
    //     },
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',  xsrfHeaderName: 'X-XSRF-TOKEN', 'Authorization': `Bearer ${GetUserTokenCreationWish}`
    //     }
    // }).then((getDataDob) => {
    //     setUserBirthday(getDataDob.data.data.info.dob)
    // })
    }, [])

    useEffect(()=> {

    async function GetUserWishData () {
      await axios.get("https://api.wishx.me/api/v1/wish/show", {
        params: {
            wish_id: state?.id 
        },
        headers: {
          'Access-Control-Allow-Origin': '*',  xsrfHeaderName: 'X-XSRF-TOKEN', 'Authorization': `Bearer ${GetUserTokenCreationWish}`
        }
      }).then((GetUserWish)=> {
        setGetUserData(GetUserWish?.data?.data)
      }).catch((err) => {
        console.log("")
      })
    }
    GetUserWishData()
}, [])

console.log(state)


//   Get WISH IMAGE API
  const WishCreationImage = GetUserWishDataResult.image
  const UserGetCreationImgWish = `https://api.wishx.me/${WishCreationImage}`
//   END

    return (
        <Main_page>
            <div className="content-container">
                <Main_page_top className="main-page-top">
                    <Left_div>
                        <div className="relative flex items-center justify-center py-[80px] px-6 bg-white rounded-[24px]">
                          <Left_image src={UserGetCreationImgWish} />
                        </div>
                        <Left_buttons>Share
                            <BsFacebook className="facebook" />
                            <BsTwitter className="twitter" />
                            <BsTelegram className="telegram" />
                            <BsWhatsapp className="whatsapp" />
                            <IoMailOutline className="mail" />
                            <RiLinksFill className="link" />
                            <AiOutlinePlusCircle id="plus" />
                        </Left_buttons>
                        <Button variant="primary" className='save-changes-button' onClick={() => setModalShow(true)}
                            style={{ border: '0', display: 'none', justifyContent: 'center' }}>
                            <Left_report><IoWarningOutline className="warning" />
                                Report
                            </Left_report>
                        </Button>
                    </Left_div>
                    <Right_div>
                        <Right_top_div>
                            <Top_title>
                                {/* <Photo src={`https://api.wishx.me/${getUserName?.avatar}`} /> */}
                                <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1" />
                                <Birthday>
                                    <span style={{ fontWeight: "bold"}}>{getUserName?.full_name}</span> <span style={{ color: "#8E93AF" }}>for</span> birthday <span style={{ color: "#8E93AF" }}>on</span> 27.02.2022
                                </Birthday>
                                <IoNotificationsOutline className="notification ml-auto" />
                            </Top_title>
                            <Middle_title>{GetUserWishDataResult?.title}</Middle_title>
                            <Last_title>
                                {GetUserWishDataResult?.description}
                            </Last_title>
                          <div className="rounded-[20px] p-10 bg-[#EBE5F7]">
                            <div className="flex items-center justify-between">
                              <p className="text-[14px] leading-[1.4] font-semibold text-[#3800B0]">Target: ${GetUserWishDataResult?.donate?.target}</p>
                              <p className="text-[14px] leading-[1.4] font-semibold text-[#3800B0]">Final: ${GetUserWishDataResult?.date}</p>
                            </div>
                            <div className="w-full rounded-[56px] h-[4px] bg-[#BFACE9] my-6">
                              <div className="w-[25%] h-full rounded-[56px] bg-[#2D008D]"></div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <p className="text-[14px] leading-[1.4] font-semibold text-[#3800B0] mr-4">Target: ${GetUserWishDataResult?.donate?.received} raised</p>
                                <p className="text-[14px] leading-[1.4] font-semibold text-[#8866D0]">25%</p>
                              </div>
                              <p className="text-[14px] leading-[1.4] font-semibold text-[#3800B0]">${GetUserWishDataResult?.donate?.left} left</p>
                            </div>
                          </div>
                          <RightBlueDivForThree>
                          <Time_div>
                            <Time_div_p>
                              256 <br/><span className="bottomword">Views</span>
                            </Time_div_p>
                            <Time_div_p>
                              8 <br/><span className="bottomword">Gifts</span>
                            </Time_div_p>
                            <Time_div_p>
                              $12 <br/><span className="bottomword">Avg gift amount</span>
                            </Time_div_p>
                            <Time_div_p>
                              3d<span className="dot">:</span>23h<span className="dot">:</span>14m<span className="dot">:</span>51s <br/><span className="bottomword">Funding ends</span>
                            </Time_div_p>

                          </Time_div>


                        </RightBlueDivForThree>
                        </Right_top_div>

                        <All_congrulation>
                            All congratulations <span className="eight">8</span>
                            <HiOutlineFilter className="filterclass" />
                        </All_congrulation>
                        <Hbd>
                            <Hbd_title>
                                <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1" />
                                <p className="title">You <span className="give">give</span> ☕ <span className="give">$10</span></p>
                                <p className="minago">2 min ago •••</p>
                            </Hbd_title>
                            <Hbd_name>Happy birthday bro!
                                <span className="twofive">258 <BiLike className="like" /></span>
                            </Hbd_name>
                            <Hbd_footer>
                                <Photos src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1" />
                                <p className="thank">Thank you, brother from another mother</p>
                                <p className="twominag">2 min ago</p>
                            </Hbd_footer>
                        </Hbd>
                        <Hbd>
                            <Hbd_title>
                                <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1" />
                                <p className="title">Eleanor Pena <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                                <p className="minago">2 min ago •••</p>
                            </Hbd_title>
                            <Hbd_name>Happy bday!
                                <span className="twofive">257 <AiTwotoneLike className="like" /></span>
                            </Hbd_name>
                            <Hbd_footer>
                                <Photos src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1" />
                                <p className="thank">Thank you, brother from another mother</p>
                                <p className="twominag">2 min ago</p>
                            </Hbd_footer>
                        </Hbd>
                        <Hbday>
                            <Hbd_title>
                                <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1" />
                                <p className="title">Eleanor Pena <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                                <p className="minago">2 min ago •••</p>
                            </Hbd_title>
                            <Hbd_name>Happy bday!
                                <span className="twofive">257 <BiLike className="like" /></span>
                            </Hbd_name>

                        </Hbday>
                        <Mcdonalds>
                            <Picture src="https://previews.123rf.com/images/toka74/toka741911/toka74191100219/137374809-russia-moscow-october-2019-mcdonalds-paper-cup-with-tea-or-drink-on-wooden-table-.jpg" />
                            <Mcago>
                                <PhotoMacDon src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1" />
                                <p className="title">Mcdonalds <span className="give">gave</span> </p>
                                <p className="minago">2 min ago •••</p>
                            </Mcago>
                            <Freecofe>
                                Free coffee or tea
                                <HiBadgeCheck className="check" />
                            </Freecofe>
                        </Mcdonalds>
                        <Hbday>
                            <Hbd_title>
                                <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1" />
                                <p className="title">Robert Fox <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                                <p className="minago">2 min ago •••</p>
                            </Hbd_title>
                            <Hbd_name>Good Luck
                                <span className="twofive">257 <BiLike className="like" /></span>
                            </Hbd_name>

                        </Hbday>
                        <Hbday>
                            <Hbd_title>
                                <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1" />
                                <p className="title">Jacob Jones <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                                <p className="minago">2 min ago •••</p>
                            </Hbd_title>
                            <Hbd_name>Расти большим!
                                <span className="twofive">257 <BiLike className="like" /></span>
                            </Hbd_name>

                        </Hbday>
                        <Hbday>
                            <Hbd_title>
                                <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1" />
                                <p className="title">Cameron Williamson<span className="give">gave</span> ☕ <span className="give">$10</span></p>
                                <p className="minago">2 min ago •••</p>
                            </Hbd_title>
                            <Hbd_name>Mazal Tov
                                <span className="twofive">257 <BiLike className="like" /></span>
                            </Hbd_name>

                        </Hbday>
                        <Hbday>
                            <Hbd_title>
                                <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1" />
                                <p className="title">Wade Warren<span className="give">gave</span> ☕ <span className="give">$10</span></p>
                                <p className="minago">2 min ago •••</p>
                            </Hbd_title>
                            <Hbd_name>Ad günün mübarək olsun!  🎉
                                <span className="twofive">257 <BiLike className="like" /></span>
                            </Hbd_name>

                        </Hbday>
                        <Hbday>
                            <Hbd_title>
                                <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1" />
                                <p className="title">Jarema Boll <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                                <p className="minago">2 min ago •••</p>
                            </Hbd_title>
                            <Hbd_name>Happy birthday bro!
                                <span className="twofive">257 <BiLike className="like" /></span>
                            </Hbd_name>

                        </Hbday>
                        <Hbday>
                            <Hbd_title>
                                <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1" />
                                <p className="title">Robert Fox<span className="give">gave</span> ☕ <span className="give">$10</span></p>
                                <p className="minago">2 min ago •••</p>
                            </Hbd_title>
                            <Hbd_name>Birthday bro!
                                <span className="twofive">257 <BiLike className="like" /></span>
                            </Hbd_name>

                        </Hbday>
                    </Right_div>

                </Main_page_top>
                <Bottom_div>
                    <Bottom_div_title>
                        Breadley Cooper’s other wishes
                    </Bottom_div_title>
                    <GridBody>
                        <Grid className="griddivwish">
                            {Carddata.datab.map(({ url, title, username, userdesc, userphoto, leftprice, rightprice }) => (
                                // <Grid.Col className="gridcol" xs={6} md={3} lg={3}>
                                <Wrapper className="cart-item" onMouseOver={(e) => {
                                    e.currentTarget.setAttribute('style', 'border: 1px solid #3800B0;');
                                    e.currentTarget.children[0].children[0].setAttribute('style', 'visibility: visible');
                                    e.currentTarget.children[0].children[1].setAttribute('style', 'visibility: visible');

                                }} onMouseOut={(e) => {
                                    e.currentTarget.setAttribute('style', 'border: 1px solid #EBE5F7;')
                                    e.currentTarget.children[0].children[0].setAttribute('style', 'visibility: hidden');
                                    e.currentTarget.children[0].children[1].setAttribute('style', 'visibility: hidden');
                                }}>
                                    <div className="image-container">
                                        <button className='congralute-button'>Congralute</button>
                                        <div className="image-background"></div>
                                        <ImgWrapper src={url}></ImgWrapper>
                                    </div>
                                    <ContentWrapper>
                                        <Titles>{title}</Titles>

                                        <UserWrapper>
                                            <UserAbout>
                                                <UserName>{username}</UserName>
                                                <UserDesc>{userdesc}</UserDesc>
                                            </UserAbout>
                                            <UserPhoto src={userphoto}></UserPhoto>
                                        </UserWrapper>

                                        <PriceWrapper>
                                            <ProgressWrapper>
                                                <Progress size="sm" sections={[{ value: 50, color: "#3800B0" }]} />
                                            </ProgressWrapper>
                                            <Prices>
                                                <LeftPrice>{leftprice}</LeftPrice>
                                                <RightPrice>{rightprice}</RightPrice>
                                            </Prices>
                                        </PriceWrapper>
                                    </ContentWrapper>
                                </Wrapper>
                                // </Grid.Col>
                            ))}
                        </Grid>
                    </GridBody>
                    <Bottom_div_show>Show more wishes</Bottom_div_show>
                </Bottom_div>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Main_page>
    )
}

export default Wish_pages;