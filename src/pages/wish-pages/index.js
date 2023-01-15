import { Birthday, Blue_div, Blue_top_div, Blue_loading_div,Last_title, Left_buttons, Left_div, Left_image, Left_report, Main_page, Main_page_top, Middle_title, Photo, Right_blue_div, Right_div, Right_top_div, Top_title, Blue_button_div, Vashed, Congratulate, Congratulate_button, Product, Product_part, Product_other, All_congrulation, Hbd, Hbd_title, Hbd_name, Hbd_footer, Photos, Hbday, Mcdonalds, Picture, Mcago, Freecofe, Bottom_div, Bottom_div_title, Bottom_div_show } from "./Wish-pages.styled";
// import watch from "../../style/icons/handwatch.png"
import { BsFacebook, BsTwitter, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { IoMailOutline, IoNotificationsOutline, IoWarningOutline} from 'react-icons/io5';
import { RiLinksFill} from 'react-icons/ri';
import { HiOutlineFilter, HiBadgeCheck} from 'react-icons/hi';
import { BiLike} from 'react-icons/bi';
import { AiTwotoneLike} from 'react-icons/ai';
import { Carddata } from "../search/CardData"
import {
    useWindowSize,
  } from '@react-hook/window-size'
import Confetti from 'react-confetti'
import FilterColumns from "./filter/filter";
// import './filter/styles.scss'

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
import React from "react";

class Wishpages extends React.Component {
    
        constructor(props) {
        super(props);
        this.state = {
          filterItems: [
            { name: "item1", selected: true },
            { name: "item2", selected: true }
          ],
          selectedValues: []
        };
      }
      filterHandler(selectedItems) {
        this.setState({ selectedValues: selectedItems });
      }
      
    render() {
        return(
            <Main_page>
                <Confetti
                    width={1700}
                    height={600}
                />
                <Main_page_top>
                 <Left_div>
                    <Left_image/>
                    <Left_buttons>Share
                        <BsFacebook className="facebook"/>
                        <BsTwitter className="twitter"/>
                        <BsTelegram className="telegram"/>
                        <BsWhatsapp className="whatsapp"/>
                        <IoMailOutline className="mail"/>
                        <RiLinksFill className="link"/>
                    </Left_buttons>
                    <Left_report><IoWarningOutline className="warning"/>Report</Left_report>
                 </Left_div>
                 <Right_div>
                    <Right_top_div>
                        <Top_title>
                            <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                            <Birthday>
                            Bradley Cooper <span style={{color:"#8E93AF"}}>for</span> birthday <span style={{color:"#8E93AF"}}>on</span> 25.10.2022
                            </Birthday>
                            <IoNotificationsOutline className="notification"/>
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
                            <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                            <Vashed>Ваше поздравление</Vashed>
                        </Top_title>
                        <Congratulate>
                            <Product>
                                <Product_part><span className="burger">🍔</span><br/>$10</Product_part>
                                <Product_part><span className="burger">🍔</span><br/>$10</Product_part>
                                <Product_part className="special"><span className="burger">🍔</span><br/>$10</Product_part>
                                <Product_part><span className="burger">🍔</span><br/>$10</Product_part>
                                <Product_part><span className="burger">🍔</span><br/>$10</Product_part>
                                <Product_other>other</Product_other>
    
                            </Product>
                            <Congratulate_button>Congratulate</Congratulate_button>
                        </Congratulate>
                    </Right_blue_div>
                    <All_congrulation>
                        All congratulations <span className="eight">8</span>
                        <FilterColumns
                            filterItems={this.state.filterItems}
                            filterHandler={this.state.filterHandler}
                        />
                    </All_congrulation>
                    <Hbd>
                        <Hbd_title>
                            <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                            <p className="title">You <span className="give">give</span> ☕ <span className="give">$10</span></p>
                            <p className="minago">2 min ago •••</p>
                        </Hbd_title>
                        <Hbd_name>Happy birthday bro! 
                            <span className="twofive">258 <BiLike className="like"/></span>
                        </Hbd_name>
                        <Hbd_footer>
                        <Photos src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                        <p className="thank">Thank you, brother from another mother</p>
                        <p className="twominag">2 min ago</p>
                        </Hbd_footer>
                    </Hbd>
                    <Hbd>
                        <Hbd_title>
                            <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                            <p className="title">Eleanor Pena <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                            <p className="minago">2 min ago •••</p>
                        </Hbd_title>
                        <Hbd_name>Happy bday! 
                            <span className="twofive">257 <AiTwotoneLike className="like"/></span>
                        </Hbd_name>
                        <Hbd_footer>
                        <Photos src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                        <p className="thank">Thank you, brother from another mother</p>
                        <p className="twominag">2 min ago</p>
                        </Hbd_footer>
                    </Hbd>
                    <Hbday>
                        <Hbd_title>
                            <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                            <p className="title">Eleanor Pena <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                            <p className="minago">2 min ago •••</p>
                        </Hbd_title>
                        <Hbd_name>Happy bday! 
                            <span className="twofive">257 <BiLike className="like"/></span>
                        </Hbd_name>
                        
                    </Hbday>
                    <Mcdonalds>
                        <Picture src="https://previews.123rf.com/images/toka74/toka741911/toka74191100219/137374809-russia-moscow-october-2019-mcdonalds-paper-cup-with-tea-or-drink-on-wooden-table-.jpg"/>
                        <Mcago>
                            <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                            <p className="title">Mcdonalds <span className="give">gave</span> </p>
                            <p className="minago">2 min ago •••</p>
                        </Mcago>
                        <Freecofe>
                            Free coffee or tea
                            <HiBadgeCheck className="check"/>
                        </Freecofe>
                    </Mcdonalds>
                    <Hbday>
                        <Hbd_title>
                            <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                            <p className="title">Robert Fox <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                            <p className="minago">2 min ago •••</p>
                        </Hbd_title>
                        <Hbd_name>Good Luck 
                            <span className="twofive">257 <BiLike className="like"/></span>
                        </Hbd_name>
                        
                    </Hbday>
                    <Hbday>
                        <Hbd_title>
                            <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                            <p className="title">Jacob Jones <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                            <p className="minago">2 min ago •••</p>
                        </Hbd_title>
                        <Hbd_name>Расти большим! 
                            <span className="twofive">257 <BiLike className="like"/></span>
                        </Hbd_name>
                        
                    </Hbday>
                    <Hbday>
                        <Hbd_title>
                            <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                            <p className="title">Cameron Williamson<span className="give">gave</span> ☕ <span className="give">$10</span></p>
                            <p className="minago">2 min ago •••</p>
                        </Hbd_title>
                        <Hbd_name>Mazal Tov 
                            <span className="twofive">257 <BiLike className="like"/></span>
                        </Hbd_name>
                        
                    </Hbday>
                    <Hbday>
                        <Hbd_title>
                            <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                            <p className="title">Wade Warren<span className="give">gave</span> ☕ <span className="give">$10</span></p>
                            <p className="minago">2 min ago •••</p>
                        </Hbd_title>
                        <Hbd_name>Ad günün mübarək olsun!  🎉 
                            <span className="twofive">257 <BiLike className="like"/></span>
                        </Hbd_name>
                        
                    </Hbday>
                    <Hbday>
                        <Hbd_title>
                            <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                            <p className="title">Jarema Boll <span className="give">gave</span> ☕ <span className="give">$10</span></p>
                            <p className="minago">2 min ago •••</p>
                        </Hbd_title>
                        <Hbd_name>Happy birthday bro!
                            <span className="twofive">257 <BiLike className="like"/></span>
                        </Hbd_name>
                        
                    </Hbday>
                    <Hbday>
                        <Hbd_title>
                            <Photo src="https://i2.wp.com/cigirbirlik.com/wp-content/uploads/2019/06/bank_respublika_logo_291018.jpg?resize=768%2C442&ssl=1"/>
                            <p className="title">Robert Fox<span className="give">gave</span> ☕ <span className="give">$10</span></p>
                            <p className="minago">2 min ago •••</p>
                        </Hbd_title>
                        <Hbd_name>Birthday bro! 
                            <span className="twofive">257 <BiLike className="like"/></span>
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
              {Carddata.data.map(({ url, title, username, userdesc, userphoto, leftprice, rightprice }) => (
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
            </Main_page>
        )
    }
}
 
export default Wishpages;