import {
  Grid,
  Box,
  Container,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { myaxiosprivate } from "../../api/myaxios";
import { ReactComponent as LeftIcon } from "./chevronLeft.svg";
import { ReactComponent as RightIcon } from "./chevronRight.svg";
import { ReactComponent as CalendarIcon } from "./whiteCalendar.svg";
import CalendarDayItem from "./CalendarDayItem";
import Loader from "../../shared/ui/Loader";
import CalendarItem from "./CalendarItem";
const theme = createTheme();
function index() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentDay, setCurrentDay] = useState(moment());
  const [currentDate, setCurrentDate] = useState(moment());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [wishByDay, setWishByDay] = useState([]);
  const [allCalendar, setAllCalendar] = useState([]);
  const prevDay = () => setCurrentDay(currentDay.clone().subtract(1, "day"));
  const nextDay = () => setCurrentDay(currentDay.clone().add(1, "day"));

  const prevMonth = () =>
    setCurrentDate(currentDate.clone().subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.clone().add(1, "month"));
  useEffect(() => {
    setLoading(true);
    isMobile &&
      myaxiosprivate
        .get(
          `/api/v1/wish/calendar/day?skip=0&date=${currentDay.format(
            "DD.MM.YYYY"
          )}`
        )
        .then(({ data }) => {
          setWishByDay(data.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
  }, [currentDay]);

  useEffect(() => {
    setError("");
    setLoading("");
    !isMobile &&
      myaxiosprivate
        .get(`/api/v1/wish/calendar?date=${currentDate.format("DD.MM.YYYY")}`)
        .then(({ data }) => setAllCalendar(data.data))
        .catch((err) => setError(err.message));
  }, [currentDate]);
  // const startDay = moment()
  //   .startOf("month")
  //   .startOf("week")
  //   .format("DD.MM.YYYY");
  // const endDay = moment().endOf("month").startOf("week").format("DD.MM.YYYY");
  // console.log(startDay, endDay);
  // console.log(moment(allCalendar[0]?.date).format("DD.MM.YYYY"));

  if (loading) {
    <Loader />;
  }
  return (
    <Box className="!bg-[#F7F8FAA3] h-full w-full rounded-2xl shadow-2xl">
      <Box className="h-full">
        <Box className="mt-[24px] mb-[16px] sm:flex md:flex ">
          <p className="font-[600] text-[1.8rem] md:ml-0 ml-2 md:text-[56px]  text-[#0B0023]">
            Calendar
          </p>
          <Box className="flex my-3 mx-4 ">
            <Box
              onClick={isMobile ? prevDay : prevMonth}
              className="flex justify-center items-center border-[rgb(191,172,233)] border-solid border-[1px]  rounded-md w-[56px] h-[56px]"
            >
              <LeftIcon />
            </Box>
            <Box className="flex md:w-fit w-[215px] h-[56px] mx-2 bg-[#3800B0] text-white text-center px-4 py-3 rounded-md ">
              <CalendarIcon className="mx-1" />
              <p className="py-1 px-2 text-[14px]">
                {isMobile
                  ? currentDay.format("DD MMMM YYYY")
                  : currentDate.format("MMMM YYYY")}
              </p>
            </Box>
            <Box
              onClick={isMobile ? nextDay : nextMonth}
              className="flex justify-center items-center border-[rgb(191,172,233)] border-solid border-[1px] rounded-md w-[56px] h-[56px]"
            >
              <RightIcon className="ml-3 mt-1" />
            </Box>
          </Box>
        </Box>
        {isMobile ? (
          <Box>
            {wishByDay ? (
              wishByDay?.map((wish) => (
                <CalendarDayItem key={wish?.user.id} {...wish} />
              ))
            ) : (
              <Box className="!bg-[#ECEEF7] !rounded-lg py-3 my-2 text-center shadow-md">
                <p>No such wish found in this date</p>
              </Box>
            )}
          </Box>
        ) : (
          <CalendarItem daysOfMonth={allCalendar} />
        )}
      </Box>
    </Box>
  );
}

export default index;
