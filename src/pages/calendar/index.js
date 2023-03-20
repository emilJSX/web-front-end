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
  MobileDateDiv,
  MobileDateBlue,
} from "./Calendar.styled";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IoChevronUpOutline, IoCalendarOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { BsCheckCircleFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { useMantineTheme, Modal, Loader } from "@mantine/core";
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
import { myaxiosprivate } from "../../api/myaxios";

const dateFormatMouthTxt = "MMMM";
const dateFormatMouth = "MM";
const dateFormatDay = "DD";
const dateFormatYear = "YYYY";

function Calendar() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [opened, setOpened] = useState(false);
  const [error, setError] = useState(null); //user error state to show message
  const [getAllCalendar, setAllCalendar] = useState([]);
  const [getCalendarthisday, setCalendarthisday] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [currentDay, setCurrentDay] = useState(dayjs());
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [expand, setExpand] = useState(false);
  const theme = useMantineTheme();
  const currentDayRef = useRef(null);

  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };

  useEffect(() => {
    setError("");
    const getFullCalendarDate = currentDate.format(
      `${dateFormatDay}-${dateFormatMouth}-${dateFormatYear}`
    );
    if (!/Mobi/.test(navigator.userAgent)) {
      myaxiosprivate
        .get("/api/v1/wish/calendar", {
          params: { date: getFullCalendarDate },
        })
        .then((res) => {
          setAllCalendar(res?.data?.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false); //show error message
          setError(err.message); //if error redirect or show error message
        });
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setError("");
    const getFullCalendarDate = currentDate.format(
      `${dateFormatDay}-${dateFormatMouth}-${dateFormatYear}`
    );
    !/Mobi/.test(navigator.userAgent) &&
      myaxiosprivate
        .get("/api/v1/wish/calendar", {
          params: { date: getFullCalendarDate },
        })
        .then(({ data }) => {
          setAllCalendar(data?.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
  }, [currentDate]);
  const nextMonth = () => {
    setCurrentDate((current) => current.add(1, "month"));
  };

  const prevMonth = () => {
    setCurrentDate((current) => current.subtract(1, "month"));
  };
  const nextDay = () => {
    const newDate = currentDate.add(1, "day");
    setCurrentDate(newDate);
    console.log(newDate);
    const formattedDate = dayjs(newDate.$d).format("DD.MM.YYYY");
    getCalendarThisDay(formattedDate);
    console.log(formattedDate);
  };

  const prevDay = () => {
    let checkLast = currentDay.startOf("month").$D;
    if (currentDay.$D === checkLast) {
      setCurrentDate((current) => current.subtract(1, "month"));
    }
    const newDate = currentDate.subtract(1, "day");
    setCurrentDate(newDate);
    console.log(newDate);
    const formattedDate = dayjs(newDate.$d).format("DD.MM.YYYY");

    getCalendarThisDay(formattedDate);
    console.log(formattedDate);
  };

  const getCalendarThisDay = async (date) => {
    setLoading(true);
    setError("");
    await myaxiosprivate
      .get("/api/v1/wish/calendar/day", {
        params: {
          skip: 0,
          date: date,
        },
      })
      .then((res) => {
        setCalendarthisday(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const getFormatMonthTxt = currentDate.format(dateFormatMouthTxt);
  const getFormatMonthYear = currentDate.format(dateFormatYear);
  const getFormatDay = currentDate.format(dateFormatDay);

  console.log(getFormatDay);
  console.log(currentDate);
  const showToday = () => {
    if (currentDayRef.current) {
      currentDayRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader size="xl" />
      </div>
    );
  }
  return (
    <Mainpage>
      {showModal ? (
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
            <ShowToday onClick={showToday} className="cursor-pointer">
              Show today
            </ShowToday>
          </Toppage>
          <Big_calendar_bigdiv>
            <Calendar_first_empty>{}</Calendar_first_empty>
            {getAllCalendar?.map((e) => (
              <Calendar_item
                ref={e.current ? currentDayRef : null}
                style={{ border: e.current == true ? "2px solid #3800B0" : "" }}
                className="calendar_item"
              >
                <Calendar_item_item>
                  <p className="numberblack">{e?.month_day}</p>
                  <Calendar_item_into>
                    {e?.wishes_list?.map((data) => (
                      <Link to={`/profile/${data.user.username}`}>
                        <Person_item_second>
                          <Photo_cycle
                            src={`${
                              data?.user?.image
                                ? data?.user?.image
                                : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                            }`}
                          />
                          <User_name>
                            {data?.user.full_name
                              ? data?.user.full_name
                              : "Fullname not exists"}
                          </User_name>
                        </Person_item_second>
                      </Link>
                    ))}

                    <Person_item_second>
                      <Link
                        onClick={() => {
                          setOpened(true);
                          getCalendarThisDay(e.date);
                        }}
                      >
                        {e.people_count ? (
                          <All_wishes>
                            See all {e.people_count} wishers
                          </All_wishes>
                        ) : (
                          ""
                        )}
                      </Link>
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
            <GrClose className="close" onClick={() => setShowModal(!show)} />
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
                <p className="pleft">$2,54ff raised</p>
                <p className="pright">$8.558 left</p>
              </Price_div>
            </Card>
          </Small_middle_page>
        </Small_main_page>
      )}
      <MobileCalendar>
        {/* {getCalendarthisday.map((e) => ( */}
        <MobileDateDiv>
          <BsChevronLeft onClick={() => prevDay()} className="left" />
          <MobileDateBlue>
            <p className="month_year">
              <p className="getFormatDay">{getFormatDay}</p>
              <p>
                {getFormatMonthTxt} {getFormatMonthYear}
              </p>
            </p>
          </MobileDateBlue>
          <BsChevronRight onClick={() => nextDay()} className="right" />
        </MobileDateDiv>
        {!getCalendarthisday && <p>No such wish found in this date</p>}
        {getCalendarthisday?.map((item) => (
          <Accordion
            expanded={expand}
            style={{ background: "aliceblue", boxShadow: "none" }}
          >
            <>
              {console.log(item)}
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={toggleAcordion}
              >
                <Typography>
                  <Middle_page_top>
                    <Middle_top_photo src={item?.user?.image} />
                    <Middle_top_word>{item?.user?.full_name}</Middle_top_word>
                    <BsCheckCircleFill className="check" />
                  </Middle_page_top>
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ background: "aliceblue" }}>
                <Typography>
                  <Birthday>{item.wish_list[0].occasion}</Birthday>
                  <Card>
                    <Card_photo
                      src={`${process.env.REACT_APP_API_URL}${item.wish_list[0].image}`}
                    />
                    <Card_title>{item?.wish_list[0]?.title}</Card_title>
                    <Loading_big>
                      <Loading_blue></Loading_blue>
                    </Loading_big>
                    <Price_div>
                      <p className="pleft">
                        ${item.wish_list[0]?.donate?.received} raised
                      </p>
                      <p className="pright">
                        ${item.wish_list[0]?.donate?.left} left
                      </p>
                    </Price_div>
                  </Card>
                </Typography>
              </AccordionDetails>
            </>
          </Accordion>
        ))}
        {/* ))} */}
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
        {getCalendarthisday?.map((e) => (
          <>
            <Small_top_p>
              Subscribe wishes for {e.wish_list[0]?.date}
            </Small_top_p>
            <Accordion
              style={{
                background: "aliceblue",
                boxShadow: "none",
                paddingBottom: "15px;",
              }}
            >
              {console.log(getCalendarthisday)}
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  <Middle_page_top>
                    <Middle_top_photo src={`${e.user.image}`} />
                    <Middle_top_word>{e.user.full_name}</Middle_top_word>
                    {/* <BsCheckCircleFill className="check"/> */}
                  </Middle_page_top>
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ background: "aliceblue" }}>
                <Typography>
                  {e.wish_list?.map((wishList) => (
                    <>
                      <Birthday>{wishList.occasion}</Birthday>
                      <Card>
                        <Link to={`/wish/${wishList.slug}`}>
                          <Card_photo
                            src={`https://api.wishx.me${wishList.image}`}
                          />
                        </Link>

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
                    </>
                  ))}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>
        ))}
      </Modal>
    </Mainpage>
  );
}

export default Calendar;
