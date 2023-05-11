import { useMantineTheme, Modal } from "@mantine/core";
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  LinearProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { calculateProgress } from "./CalendarDayItem";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as VerifyIcon } from "./verify.svg";

function CalendarModal({ data, date, close, show }) {
  const theme = useMantineTheme();
  const [progress, setProgress] = useState();
  useEffect(() => {
    const newProgress = calculateProgress(
      +data[0].wish_list[0].donate?.target,
      +data[0].wish_list[0].donate?.received
    );
    setProgress(newProgress);
  }, []);
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={show}
      onClose={() => close(false)}
    >
      <Box className="mt-[-40px]">
        <p className="font-bold text-md">
          Subscriber wishes for {moment(date).format("DD MMMM YYYY")}
        </p>
      </Box>
      <Box>
        {data?.map((item) => (
          <Accordion
            key={item.user.image}
            className="!bg-[#ECEEF7] !rounded-lg my-2"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box className="flex">
                <img
                  src={item.user.image}
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div className="my-2 mx-2 flex">
                  <Link to={`/profile/${item.user.username}`}>
                    <p className="font-bold mx-1">{item.user.username}</p>
                  </Link>
                  {item.user.verify && <VerifyIcon />}
                </div>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <p className="font-bold">{item.wish_list[0].occassion}</p>

              <Box className="flex border-[#EBE5F7] border-[1px] rounded-[16px] bg-[#fff]">
                <Link to={`/wish/${item.wish_list[0].slug}`}>
                  <img
                    className="w-[120px] h-[120px] rounded-[16px] object-cover"
                    src={`${process.env.REACT_APP_API_URL}/${item.wish_list[0].image}`}
                  />
                </Link>
                <Box className="mx-2 my-1">
                  <Link to={`/wish/${item.wish_list[0].slug}`}>
                    <p className="font-bold my-1 text-[16px]">
                      {item.wish_list[0].title}
                    </p>
                  </Link>
                  <LinearProgress
                    variant="determinate"
                    className="my-4"
                    value={+progress}
                  />
                  <Box className="flex justify-between text-[13px] text-[#110035] text-opacity-70">
                    <p className="mx-2">
                      ${item.wish_list[0].donate?.received} raised
                    </p>
                    <p>${item.wish_list[0].donate?.left} left</p>
                  </Box>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Modal>
  );
}

export default CalendarModal;
