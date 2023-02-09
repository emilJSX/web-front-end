import {
  Big_calendar_bigdiv,
  Calendar_first_empty,
  Small_middle_page,
  Calendar_item,
  Calendar_item_item,
  Calendar_item_into,
  Dateblue,
  Datediv,
  Mainpage,
  ShowToday,
  Title,
  Toppage,
  Person_item,
  Person_item_second,
  Photo_cycle,
  User_name,
  Photo_right_one,
  Photo_right_two,
  All_wishes,
  Small_main_page,
  Small_top_p,
  Small_top_page,
  Middle_page_top,
  Middle_top_photo,
  Middle_top_word,
  Birthday,
  Card,
  Card_title,
  Card_photo,
  Loading_big,
  Loading_blue,
  Price_div,
  MobileCalendar,
  BlurCount,
} from "./Calendar.styled";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IoChevronUpOutline, IoCalendarOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { BsCheckCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useMantineTheme, Modal } from "@mantine/core";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import DatePicker from "react-date-picker";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import locale from "dayjs/locale/en";
import dayjs from "dayjs";

function Calendar() {
  const [show, setShow] = useState(true);
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const GetUserTokenCreationWish = localStorage.getItem("UserToken=");
  const [getAllCalendar, setAllCalendar] = useState();
  const [getCalendarthisday, setCalendarthisday] = useState();
  const [getSlugName, setSlugName] = useState("");
  const { userSlug } = useParams();

  // Calendar Date functions
  // .format("MMMM, MMMM DD YYYY");
  const dateFormatMouthTxt = "MMMM";
  const dateFormatMouth = "MM";
  const dateFormatDay = "DD";
  const dateFormatYear = "YYYY";
  const now = dayjs().locale({
    ...locale,
  });
  const [currentMonth, setCurrentMonth] = useState(now);

  const nextMonth = () => {
    // const plus = currentMonth.add(1,"month");
    setCurrentMonth((plus) => plus.add(1, "month"));
  };

  const prevMonth = () => {
    // const minus = currentMonth.subtract(1, "month");
    setCurrentMonth((minus) => minus.subtract(1, "month"));
  };

  const getFormatMonthTxt = currentMonth.format(dateFormatMouthTxt);
  const getFormatMonth = currentMonth.format(dateFormatMouth);
  const getFormatMonthDay = currentMonth.format(dateFormatDay);
  const getFormatMonthYear = currentMonth.format(dateFormatYear);

  // End Calendar Date functions

  // useEffect(() => {
  //   axios
  //     .get("https://api.wishx.me/api/v1/user", {
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         xsrfHeaderName: "X-XSRF-TOKEN",
  //         Authorization: `Bearer ${GetUserTokenCreationWish}`,
  //       },
  //     })
  //     .then((datauser) => setSlugName(datauser.data.data.info.slug));

  //   const getFullCalendarDate =
  //     getFormatMonthDay + "-" + getFormatMonth + "-" + getFormatMonthYear;
  //   axios
  //     .get("https://api.wishx.me/api/v1/wish/calendar", {
  //       params: {
  //         date: getFullCalendarDate,
  //       },
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         xsrfHeaderName: "X-XSRF-TOKEN",
  //         Authorization: `Bearer ${GetUserTokenCreationWish}`,
  //       },
  //     })
  //     .then((getAllDataCalendar) => {
  //       setAllCalendar(getAllDataCalendar?.data?.data);
  //       var getCurrentCalendar = getAllDataCalendar?.data?.data;
  //     });
  // }, []);

  useEffect(() => {
    getCalendarFullDate();
  }, [currentMonth])

  function getCalendarFullDate() {
    const getFullCalendarDate =
      getFormatMonthDay + "-" + getFormatMonth + "-" + getFormatMonthYear;
    axios
      .get("https://api.wishx.me/api/v1/wish/calendar", {
        params: {
          date: getFullCalendarDate,
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          xsrfHeaderName: "X-XSRF-TOKEN",
          Authorization: `Bearer ${GetUserTokenCreationWish}`,
        },
      })
      .then((getAllDataCalendar) => {
        setAllCalendar(getAllDataCalendar?.data?.data);
      });
  }

  const getCalendarThisDay = () => {
    axios
      .get("https://api.wishx.me/api/v1/wish/calendar/day", {
        params: {
          skip: 0,
          date: "2022-12-20 00:00:00",
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          xsrfHeaderName: "X-XSRF-TOKEN",
          Authorization: `Bearer ${GetUserTokenCreationWish}`,
        },
      })
      .then((getCalendarThisDay) => {
        setCalendarthisday(getCalendarThisDay.data.data);
      });
  };

  return (
    <Mainpage>
      {show ? (
        <div>
          <Toppage>
            <Title>Calendar</Title>
            <Datediv>
              <BsChevronLeft onClick={() => prevMonth()} className="left" />
              <Dateblue>
                <IoCalendarOutline className="calendar" />
                <p className="month_year">
                  {getFormatMonthTxt} {getFormatMonthYear}
                </p>
              </Dateblue>
              <BsChevronRight onClick={() => nextMonth()} className="right" />
            </Datediv>
            <ShowToday>Show today</ShowToday>
          </Toppage>
          <Big_calendar_bigdiv>
            <Calendar_first_empty>{}</Calendar_first_empty>
            {getAllCalendar?.map((e) => (
              <Calendar_item
                style={{ border: e.current == true ? "2px solid #3800B0" : "" }}
                className="calendar_item"
              >
                <Calendar_item_item>
                  <p className="numberblack">{e?.month_day}</p>
                  <Calendar_item_into>
                    {e?.wishes_list?.map((data) => (
                      <Link to="/my-profile/:userSlug">
                        <Person_item_second>
                          <Photo_cycle
                            src={`https://api.wishx.me${data?.user?.image}`}
                          />
                          <User_name>
                            {data?.user?.full_name != null
                              ? data?.user?.full_name
                              : "FullName not exists"}
                          </User_name>
                        </Person_item_second>
                      </Link>
                    ))}

                    <Person_item_second>
                      <a
                        href="#"
                        onClick={() => {
                          setOpened(true);
                          getCalendarThisDay();
                        }}
                      >
                        {e.people_count ? (
                          <All_wishes>
                            See all {e.people_count} wishers
                          </All_wishes>
                        ) : (
                          ""
                        )}
                      </a>
                    </Person_item_second>
                  </Calendar_item_into>
                </Calendar_item_item>
              </Calendar_item>
            ))}
          </Big_calendar_bigdiv>
        </div>
      ) : (
        <Small_main_page>
          <Small_top_page>
            <Small_top_p>Subscribe wishes for 8 June 2020</Small_top_p>
            <GrClose className="close" onClick={() => setShow(!show)} />
          </Small_top_page>
          <Small_middle_page>
            <Middle_page_top>
              <Middle_top_photo src="https://media.istockphoto.com/photos/serious-girl-picture-id472168067?k=20&m=472168067&s=612x612&w=0&h=cm0NWRmeRzPBAYdnq-log5esENxDqTn836qXVe8A5Ow=" />
              <Middle_top_word>Cody Fisher</Middle_top_word>
              <BsCheckCircleFill className="check" />
              <IoChevronUpOutline className="up" />
            </Middle_page_top>
            <Birthday>For son's birthday</Birthday>
            <Card>
              <Card_photo src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-elegant-beige-suit-fashion-male-posing-studio-near-blue-wall_158538-24031.jpg?w=2000" />
              <Card_title>
                Sneakers for boys Adidas GZ0648, blue, mesh, size 35
              </Card_title>
              <Loading_big>
                <Loading_blue></Loading_blue>
              </Loading_big>
              <Price_div>
                <p className="pleft">$2,542 raised</p>
                <p className="pright">$8.558 left</p>
              </Price_div>
            </Card>
            <Card>
              <Card_photo src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-elegant-beige-suit-fashion-male-posing-studio-near-blue-wall_158538-24031.jpg?w=2000" />
              <Card_title>
                Sneakers for boys Adidas GZ0648, blue, mesh, size 35
              </Card_title>
              <Loading_big>
                <Loading_blue></Loading_blue>
              </Loading_big>
              <Price_div>
                <p className="pleft">$2,542 raised</p>
                <p className="pright">$8.558 left</p>
              </Price_div>
            </Card>
          </Small_middle_page>
          <Small_middle_page>
            <Middle_page_top>
              <Middle_top_photo src="https://media.istockphoto.com/photos/serious-girl-picture-id472168067?k=20&m=472168067&s=612x612&w=0&h=cm0NWRmeRzPBAYdnq-log5esENxDqTn836qXVe8A5Ow=" />
              <Middle_top_word>Cody Fisher</Middle_top_word>
              <BsCheckCircleFill className="check" />
              <IoChevronUpOutline className="up" />
            </Middle_page_top>
            <Birthday>For son's birthday</Birthday>
            <Card>
              <Card_photo src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-elegant-beige-suit-fashion-male-posing-studio-near-blue-wall_158538-24031.jpg?w=2000" />
              <Card_title>
                Sneakers for boys Adidas GZ0648, blue, mesh, size 35
              </Card_title>
              <Loading_big>
                <Loading_blue></Loading_blue>
              </Loading_big>
              <Price_div>
                <p className="pleft">$2,542 raised</p>
                <p className="pright">$8.558 left</p>
              </Price_div>
            </Card>
            <Card>
              <Card_photo src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-elegant-beige-suit-fashion-male-posing-studio-near-blue-wall_158538-24031.jpg?w=2000" />
              <Card_title>
                Sneakers for boys Adidas GZ0648, blue, mesh, size 35
              </Card_title>
              <Loading_big>
                <Loading_blue></Loading_blue>
              </Loading_big>
              <Price_div>
                <p className="pleft">$2,542 raised</p>
                <p className="pright">$8.558 left</p>
              </Price_div>
            </Card>
          </Small_middle_page>
        </Small_main_page>
      )}
      <div></div>

      <MobileCalendar>
        <Accordion
          expanded
          style={{
            background: "aliceblue",
            paddingTop: "20px",
            position: "inherit",
            boxShadow: "none",
            paddingBottom: "15px;",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              <Middle_page_top>
                <Middle_top_photo src="https://s3-alpha-sig.figma.com/img/b296/2adf/6b1cae8f3518b15bc334f6e50dab65f4?Expires=1665360000&Signature=Zw-ESPSJAp9e1JeamqK~aIfiJpME-~1PYu2ZE4MeNziYq9KtzSQEkE3PaDqRXKpM54Odj-TYEvjDLVw~jcJCtjbq7EYfQjsanYg9WYXfdcE1sD7cQj4O1sN-050QXWTfnyCIzx~PCTguoTLuffRCsJYw84jJ66zJZc5S4eMrg99rXbr1pqzt6PYHYg29N~cFGZYplsRMDmKGbZUUfxaU5phlkTzFTmNShYjggk6xD56x3bgtypi5nfWglzyupdIjXvddvg8ouwEoZkBXsJO3a9Rnk8z207KfNJ9jH5jvvRq-rhDL1ztlQB82XRY630OxBlpjz5Ms6SnO18p0LQOjAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                <Middle_top_word>Cody Fisher</Middle_top_word>
                <BsCheckCircleFill className="check" />
              </Middle_page_top>
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ background: "aliceblue" }}>
            <Typography>
              <Birthday>For son's birthday</Birthday>
              <Card>
                <Card_photo src="https://s3-alpha-sig.figma.com/img/bab9/ddf9/d36e1495c54bc1a11e4978d73671aea9?Expires=1665360000&Signature=SF12~MS1Ycpv8OnJoAOI1qUL8~DHDlxMIR7l25fkth82SgJbcN-hmLGBLaBRKxSlzWp9hU83u36h1mcLvpkouOZxKsiO2iKhIPwCtP32p94NIE3zLBpAY3aKOgtdyDInrUc4lfkP8q6evqlh4VYig6QyQcej0XVsh-imqdqPDE7p1tbUxA8NW5xxESFSqgH0NC9XuBGQiCbXE~wjX~hln6I5R1r6y7GtYYyy~s6Ka50bolikrz6KLRYhkZP5lQCDlJ8gewUb1KKjwgg1FngxhkE-6-NCIp1gFjr3JCZrsxVxgDCsqEln7-URsnnOoWvvII8BeXVEruzeOU2q0bsEgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                <Card_title>
                  Sneakers for boys Adidas GZ0648, blue, mesh, size 35
                </Card_title>
                <Loading_big>
                  <Loading_blue></Loading_blue>
                </Loading_big>
                <Price_div>
                  <p className="pleft">$2,542 raised</p>
                  <p className="pright">$8.558 left</p>
                </Price_div>
              </Card>
              <Card>
                <Card_photo src="https://s3-alpha-sig.figma.com/img/df1e/4947/51e248dfbb00f96b8b62c3d545de820a?Expires=1665360000&Signature=ZnV9DmSWYLFKdda5GPEibN-W4fIHX6aqXGLGbiZKhhcZZyTt~pGWNgJDfqq-Fw0GQlEIO5qQS4RZTkxuRTZsq0ZsYz-eNuVCibFjneCwxQ6v0NnkvZZnUq7Cnj6vS-vMHGESXXvczYhuLvjf-c17FcN2oQ3fk-AN22OHT58zYt6x1gV8J5BKuU6ah7iGQI5HMNX-hN1fe7ioROp~Yl1WPuAAREkrCLv8KzWtcJJQsKKd61IPeJtw-s2scoZwTiv6acvNRhTzehMc2NkPt6~6kVPyyFSqVeYfP2IkzMivAZz5Blr93q4pyQ4yo2-KXuFAGysEamWhSRwe3pAaQpUSVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                <Card_title>
                  Sneakers for boys Adidas GZ0648, blue, mesh, size 35
                </Card_title>
                <Loading_big>
                  <Loading_blue></Loading_blue>
                </Loading_big>
                <Price_div>
                  <p className="pleft">$2,542 raised</p>
                  <p className="pright">$8.558 left</p>
                </Price_div>
              </Card>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded
          style={{ background: "aliceblue", boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              <Middle_page_top>
                <Middle_top_photo src="https://s3-alpha-sig.figma.com/img/05cf/540e/f9953449a469d519cab6d0aed5e02023?Expires=1665360000&Signature=CxJQa2OQ76JCvy4NkF9bASItXCCHSLJUsmpnSsMDxQbDtqsIimlUA5tDkNtUL6y3QZuRVw9IDbJ3YjpkA2JGP9kVsFs~IG0X5fQd5poYqFJNOLzKDkBEqs-YnkyUiYfT12yt6NHvkYUxO6CFxT4VtT-ARky4IxITkx0Wv3CY6XqQlfwSq9mfuG2HQTEvLyQzdVMOhrD0XBUfcSBWfo1oqekZ00FlTvU78SoolBkgh7exO7HosS4R8ycF8KZveY14NTDqCmlHfFfxj5NzPhBivR0~~1KNqinKN-vh0panGDmyXKVTs6Ai1jIQJOQ3vqH4yciW76KliGdDfULSXI5Rgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                <Middle_top_word>Charlyn Kitchen</Middle_top_word>
                <BsCheckCircleFill className="check" />
              </Middle_page_top>
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ background: "aliceblue" }}>
            <Typography>
              <Birthday>For son's birthday</Birthday>
              <Card>
                <Card_photo src="https://s3-alpha-sig.figma.com/img/c7d0/94b8/f7a79cec1ce11b80662d8a8d0f1d0c49?Expires=1665360000&Signature=aFiqkqWq6TL0hBee09vOJs-WujxfC3eoa3GlCszilbnL5EY9ofvsY-qP1G1ybZSbvPApjvOoEO7W22LRroN8PDSkVyYHjtWatp30ZX82fJTdLL~nIoqPLBg2tBwiU4dHzBGHnkXWF1mZ2sBy08tFwyVHlGMnOAFv0NgebE~qOZgPudngw-QNmZSpv8Li4WEXCJpnAEIsmJ2-DD98njmkuwGUms2d~p2VDYg76hPADBcmwCF2d8WSHzrO8zypgqphfqzcWWGrte0qUWXpJg84H~NOAeN2Dv-cRB6HkpsTx4bwd5VbRyXWqgDZhkdpVBHW~bjHMdpK4cZHbwK0QsDO6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                <Card_title>
                  Sneakers for boys Adidas GZ0648, blue, mesh, size 35
                </Card_title>
                <Loading_big>
                  <Loading_blue></Loading_blue>
                </Loading_big>
                <Price_div>
                  <p className="pleft">$2,542 raised</p>
                  <p className="pright">$8.558 left</p>
                </Price_div>
              </Card>
              <Card>
                <Card_photo src="https://s3-alpha-sig.figma.com/img/7a13/853d/5d0d146ae7a6e4682bc61537b7b633d4?Expires=1665360000&Signature=L8HGJ-bGQZ~0ftE0Y4wVuz~GkSb-a-qvgZKR65wV8CnIvBCMaZOyd4TkQfDePyKk1q6-usYss9-Bmq7L0X1Tu6Qb-4C~F967nZ8VdFwpfyRAddYmIFnK5Zm6Kz4YVgC42pPKKCjcbbgEmODx5WEnrZ1xeL4h42TjYeG-kI2dJ8Vgm3rU0cg3HwQF7M4u-nnGkTbpCyGWIqSw6vv5WvM6gLvIe3l6Vs9hg14mn2-cJUXx7zKO5OZKVjm9GnaUQhma-qDKlVWnXhXYBbkTh-uoDq87evaiON7LVXbf~UEck8VJxZe7lld2SkmHYi4nzPk8QnDcj~KEAp4Th3C75jVW4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                <Card_title>
                  Sneakers for boys Adidas GZ0648, blue, mesh, size 35
                </Card_title>
                <Loading_big>
                  <Loading_blue></Loading_blue>
                </Loading_big>
                <Price_div>
                  <p className="pleft">$2,542 raised</p>
                  <p className="pright">$8.558 left</p>
                </Price_div>
              </Card>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </MobileCalendar>

      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <Small_top_p>Subscribe wishes for 8 June 2020</Small_top_p>
        {getCalendarthisday?.map((e) => (
          <Accordion
            style={{
              background: "aliceblue",
              boxShadow: "none",
              paddingBottom: "15px;",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                <Middle_page_top>
                  <Middle_top_photo
                    src={`https://api.wishx.me${e.user.image}`}
                  />
                  <Middle_top_word>{e.user.full_name}</Middle_top_word>
                  {/* <BsCheckCircleFill className="check"/> */}
                </Middle_page_top>
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: "aliceblue" }}>
              <Typography>
                <Birthday>For son's birthday</Birthday>
                {e.wish_list.map((wishList) => (
                  <Card>
                    <Card_photo src={`https://api.wishx.me${wishList.image}`} />
                    <Card_title>{wishList.title}</Card_title>
                    <Loading_big>
                      <Loading_blue></Loading_blue>
                    </Loading_big>
                    <Price_div>
                      <p className="pleft">
                        ${wishList.donate.received} raised
                      </p>
                      <p className="pright">${wishList.donate.left} left</p>
                    </Price_div>
                  </Card>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Modal>
    </Mainpage>
  );
}

export default Calendar;
