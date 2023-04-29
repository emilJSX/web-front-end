import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CalendarModal from "./CalendarModal";

function CalendarItem({ daysOfMonth }) {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState();
  const [selectedDayWisher, setSelectedDayWisher] = useState();
  const firstDayOfMonth = daysOfMonth[0]?.weekly_day;
  const emptyCells = (firstDayOfMonth - 1 + 7) % 7 || 0;
  const emptyDays = new Array(emptyCells).fill(null);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Grid container spacing={4} className="mx-auto pl-3">
        {emptyDays.map((_, index) => (
          <Grid>
            <div
              disabled
              className="invisible w-[180px] h-[175px] !bg-[#3800b056] mx-1 my-2 rounded-[16px] shadow-md text-start"
              key={`empty-${index}`}
            >
              {/* <p className="px-2 py-2 font-bold text-[#0C0E19] text-[16px]">
                {index + 1}
              </p> */}
            </div>
          </Grid>
        ))}
        {daysOfMonth.map((day, index) => (
          <Grid key={index}>
            <div
              className={
                day.current
                  ? "border-[#3800B0] border-[1px] w-[180px] h-[175px] bg-[#fff] mx-1 my-2 rounded-[16px] shadow-md flex flex-col justify-between"
                  : "w-[180px] h-[175px] bg-[#fff] mx-1 my-2 rounded-[16px] shadow-md  flex flex-col justify-between"
              }
            >
              <p className="px-2 py-2 font-bold text-[#0C0E19] text-[16px]">
                {day.month_day}
              </p>
              <ul className="my-2">
                {day.wishes_list?.map((wish) => (
                  <li
                    className="hover:bg-[#ECEEF7] hover:rounded-lg h-[30px] mx-1  py-1"
                    key={wish.user.username}
                  >
                    <Box>
                      <Box className="flex ">
                        <Link
                          className="flex mx-2 hover:bg-[#9c9ea59f] hover:rounded-lg"
                          to={`/profile/${wish?.user?.username}`}
                        >
                          <img
                            src={wish?.user?.image}
                            alt=""
                            className="w-[20px] h-[20px] rounded-full"
                          />
                          <p className="font-bold text-[#0C0E19] text-[12px] mt-[4px] mx-2">
                            {wish?.user?.full_name}
                          </p>
                        </Link>
                        {wish?.wish_list?.map((item) => (
                          <Link key={item.title} to={`/wish/${item.slug}`}>
                            <Box className="hover:bg-[#9c9ea59f] hover:rounded-lg">
                              <img
                                src={`${process.env.REACT_APP_API_URL}/${item.image}`}
                                alt=""
                                className="w-[20px] h-[20px] object-cover rounded-md"
                              />
                            </Box>
                          </Link>
                        ))}
                      </Box>
                    </Box>
                  </li>
                ))}
                {day?.wishes_list?.length > 3 && (
                  <li
                    onClick={() => {
                      setShowModal(!showModal), setDate(day?.date);
                      setSelectedDayWisher(day?.wishes_list);
                    }}
                    className="text-[#3800b0] mx-2 mt-2 text-[12px] font-bold text-end"
                  >
                    See all wishers
                  </li>
                )}
              </ul>
            </div>
          </Grid>
        ))}
      </Grid>
      {showModal && (
        <CalendarModal
          data={selectedDayWisher}
          close={setShowModal}
          show={showModal}
          date={date}
        />
      )}{" "}
    </Box>
  );
}

export default CalendarItem;
