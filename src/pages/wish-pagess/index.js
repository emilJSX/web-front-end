import React, { useState } from 'react'
import { Birthday, Blue_div, Blue_top_div, Blue_loading_div, Last_title, Left_buttons, Left_div, Left_image, Left_report, Main_page, Main_page_top, Middle_title, Photo, Right_blue_div, Right_div, Right_top_div, Top_title, Blue_button_div, Vashed, Congratulate, Congratulate_button, Product, Product_part, Product_other, All_congrulation, Hbd, Hbd_title, Hbd_name, Hbd_footer, Photos, Hbday, Mcdonalds, Picture, Mcago, Freecofe, Bottom_div, Bottom_div_title, Bottom_div_show, ActiveMac, PhotoMacDon } from "./Wish-pages.styled";
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
          <Button onClick={props.onHide} style={{background: '#3800B0'}}>Delete account</Button>
        </Modal.Footer>
      </Modal>
    );
  }


function Wish_pages() {

    const [modalShow, setModalShow] = useState(false);

    return (
        <Main_page>
            <div className="content-container">
                <Main_page_top className="main-page-top">
                    <Left_div>
                        <Left_image src={watch} />
                        <Left_buttons>Share
                            <BsFacebook className="facebook" />
                            <BsTwitter className="twitter" />
                            <BsTelegram className="telegram" />
                            <BsWhatsapp className="whatsapp" />
                            <IoMailOutline className="mail" />
                            <RiLinksFill className="link" />
                            <AiOutlinePlusCircle id="plus" />
                        </Left_buttons>
                        {/* <Button variant="primary" className='save-changes-button' onClick={() => setModalShow(true)}
                            style={{ border: '0', display: 'flex', justifyContent: 'center' }}> */}
                            <Left_report><IoWarningOutline className="warning" />
                                Report
                            </Left_report>
                        {/* </Button> */}
                    </Left_div>
                    <Right_div>
                        <Right_top_div>
                            <Top_title>
                                <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1" />
                                <Birthday>
                                    Bradley Cooper <span style={{ color: "#8E93AF" }}>for</span> birthday <span style={{ color: "#8E93AF" }}>on</span> 25.10.2022
                                </Birthday>
                                <HiOutlineDotsCircleHorizontal className='dots-menu' />
                                <IoNotificationsOutline className="notification" />
                            </Top_title>
                            <Middle_title>Apple Watch Graphite Stainless Steel Case with Milanese Loop</Middle_title>
                            <Last_title>
                                The stainless steel case is durable and polished to a shiny, mirror-like finish.
                                The Milanese Loop is made from a smooth stainless steel mesh that’s fully magnetic,
                                so it’s infinitely adjustable for a perfect fit.
                            </Last_title>
                        </Right_top_div>
                        <Right_blue_div>
                            <Blue_div>
                                <Blue_top_div>
                                    <p className="raised">$2 542 raised</p>
                                    <p className="percant">33%</p>
                                    <p className="left8">$8 558 left</p>
                                </Blue_top_div>
                                <Blue_loading_div>
                                    <div className="colorpart"></div>
                                </Blue_loading_div>
                                <Blue_button_div>
                                    <p className="percant">Target: $10 000</p>
                                    <p className="left8">Final: 25.10.2022</p>
                                </Blue_button_div>
                            </Blue_div>
                            <Top_title>
                                <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1" />
                                <Vashed>Ваше поздравление</Vashed>
                            </Top_title>
                            <Congratulate>
                                <Product>
                                    <Product_part className="burgerclass"><span className="burger">🍔</span><br />$10</Product_part>
                                    <Product_part className="burgerclass"><span className="burger">🍔</span><br />$10</Product_part>
                                    <Product_part className="burgerclass"><span className="burger">🍔</span><br />$10</Product_part>
                                    <Product_part className="burgerclass"><span className="burger">🍔</span><br />$10</Product_part>
                                    <Product_part className="burgerclass"><span className="burger">🍔</span><br />$10</Product_part>
                                    <Product_other>other</Product_other>

                                </Product>
                                <Congratulate_button>Congratulate</Congratulate_button>
                            </Congratulate>

                        </Right_blue_div>
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
                                <a style={{textDecoration: 'none'}} href='#'><ActiveMac>Activete</ActiveMac></a>
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