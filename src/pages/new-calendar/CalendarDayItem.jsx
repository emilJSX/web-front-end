import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinearProgress from "@mui/material/LinearProgress";
import { ReactComponent as VerifyIcon } from "./verify.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";

export const calculateProgress = (target, received) =>
  ((received / target) * 100).toFixed(2);

function CalendarDayItem(props) {
  const [progress, setProgress] = useState();
  useEffect(() => {
    const newProgress = calculateProgress(
      +props.wish_list[0].donate?.target,
      +props.wish_list[0].donate?.received
    );
    setProgress(newProgress);
  }, [progress]);
  return (
    <Box>
      <Accordion className="!bg-[#ECEEF7] !rounded-lg my-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box className="flex">
            <img
              src={props.user.image}
              className="w-[40px] h-[40px] rounded-full"
            />
            <div className="my-2 mx-2 flex">
              <Link to={`/profile/${props.user.username}`}>
                <p className="font-bold mx-1">{props.user.username}</p>
              </Link>
              {props.user.verify && <VerifyIcon />}
            </div>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <p className="font-bold">{props.wish_list[0].occassion}</p>

          <Box className="flex border-[#EBE5F7] border-[1px] rounded-[16px] bg-[#fff]">
            <img
              className="w-[120px] h-[120px] rounded-[16px] object-cover"
              src={`${process.env.REACT_APP_API_URL}/${props.wish_list[0].image}`}
            />
            <Box className="mx-2 my-1">
              <p className="font-bold my-1 text-[16px]">
                {props.wish_list[0].title}
              </p>
              <LinearProgress
                variant="determinate"
                className="my-4"
                value={+progress}
              />
              <Box className="flex justify-between text-[13px] text-[#110035] text-opacity-70">
                <p className="mx-2">
                  ${props.wish_list[0].donate?.received} raised
                </p>
                <p>${props.wish_list[0].donate?.left} left</p>
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default CalendarDayItem;
