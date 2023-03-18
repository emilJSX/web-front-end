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
  const theme = useMantineTheme();
  const currentDayRef = useRef(null);
  useEffect(() => {
    setError("");
    setLoading(true);
    const getFullCalendarDate = currentMonth.format(
      `${dateFormatDay}-${dateFormatMouth}-${dateFormatYear}`
    );
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
  }, [currentMonth]);

  const nextMonth = () => {
    setCurrentMonth((currentMonth) => currentMonth.add(1, "month"));
  };

  const prevMonth = () => {
    setCurrentMonth((currentMonth) => currentMonth.subtract(1, "month"));
  };

  const getCalendarThisDay = async (date) => {
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
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const getFormatMonthTxt = currentMonth.format(dateFormatMouthTxt);
  const getFormatMonthYear = currentMonth.format(dateFormatYear);

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
            <ShowToday onClick={showToday} className="cursor-pointer">Show today</ShowToday>
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
        <Accordion
          expanded
          style={{ background: "aliceblue", boxShadow: "none" }}
        >
          <>
            {/* {console.log(e)} */}
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                {/* {console.log(e)} */}
                <Middle_page_top>
                  <Middle_top_photo
                    src={
                      "https://s3-alpha-sig.figma.com/img/c7d0/94b8/f7a79cec1ce11b80662d8a8d0f1d0c49?Expires=1665360000&Signature=aFiqkqWq6TL0hBee09vOJs-WujxfC3eoa3GlCszilbnL5EY9ofvsY-qP1G1ybZSbvPApjvOoEO7W22LRroN8PDSkVyYHjtWatp30ZX82fJTdLL~nIoqPLBg2tBwiU4dHzBGHnkXWF1mZ2sBy08tFwyVHlGMnOAFv0NgebE~qOZgPudngw-QNmZSpv8Li4WEXCJpnAEIsmJ2-DD98njmkuwGUms2d~p2VDYg76hPADBcmwCF2d8WSHzrO8zypgqphfqzcWWGrte0qUWXpJg84H~NOAeN2Dv-cRB6HkpsTx4bwd5VbRyXWqgDZhkdpVBHW~bjHMdpK4cZHbwK0QsDO6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    }
                  />
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
          </>
        </Accordion>
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
