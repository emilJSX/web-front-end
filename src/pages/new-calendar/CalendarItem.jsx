import { Box, Grid } from "@mui/material";
import React from "react";

const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function CalendarItem({ daysOfMonth }) {
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
          <Grid>
            <div
              className={
                day.current
                  ? "border-[#3800B0] border-[1px] w-[180px] h-[175px] bg-[#fff] mx-1 my-2 rounded-[16px] shadow-md"
                  : "w-[180px] h-[175px] bg-[#fff] mx-1 my-2 rounded-[16px] shadow-md"
              }
            >
              <p className="px-2 py-2 font-bold text-[#0C0E19] text-[16px]">
                {console.log(day)}
                {day.month_day}
              </p>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CalendarItem;
{
  /* <Box
          sx={{
            width: "100%",
          }}
        >
          <Grid container spacing={4} className="mx-auto">
            
                <Grid>
                  <button className="w-[220px] h-[175px] bg-[#fff] mx-2 my-2 rounded-[16px] shadow-md">
                    {item.weekly_day}
                    {day}
                  </button>
                </Grid>
          </Grid>
        </Box> */
}
