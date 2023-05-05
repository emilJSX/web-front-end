import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import {
  BsFillHandThumbsUpFill,
  BsHandThumbsUp,
  BsThreeDots,
} from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  CardSecond,
  DisplayBirthdaytext,
  DisplayTime,
  DisplayTopText,
  Hood,
  Parag,
  Parag1,
  Paragraf,
  Paragrap,
  Parags,
  Pass,
  Person,
  Photo,
  Third,
  Titles,
} from "./MyprofilSecond.style";

function CongratComments({ congrat, user }) {
//   console.log(congrat);
//   console.log(user);
  const currentDateRef = useRef(moment());
  const dateObjRef = useRef(moment(congrat.date));
  const [diff, setDiff] = useState(
    moment.duration(currentDateRef.current.diff(dateObjRef.current))
  );
  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = moment();
      if (newDate.minute() !== currentDateRef.current.minute()) {
        currentDateRef.current = newDate;
        const newDiff = moment.duration(
          currentDateRef.current.diff(dateObjRef.current)
        );
        setDiff(newDiff);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [dateObjRef]);

  let timeDiff = "";
  const diffHours = diff.asHours();
  const diffDays = diff.asDays();
  const diffMinutes = diff.asMinutes();

  if (diffHours >= 24) {
    const days = Math.floor(diffDays);
    timeDiff = `${days} day${days !== 1 ? "s" : ""}`;
  } else if (diffHours >= 1) {
    const hours = Math.floor(diffHours);
    timeDiff = `${hours} hour${hours !== 1 ? "s" : ""}`;
  } else {
    const minutes = Math.floor(diffMinutes);
    timeDiff = `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  }
  function getSelectedIcon(id) {
    const selectedObj = giftTypes.find((obj) => obj.id === id);
    return selectedObj ? selectedObj.icon : null;
  }
  return (
    <div className="rounded-[24px] md:h-fit md:px-6 px-3 py-2 w-full md:w-11/12 bg-white my-2 z-50 mb-2 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="flex font-medium  md:leading-[1.4] text-sm text-[#5D627D]">
            <>
              {/* <img
              className="w-[16px] h-[17px] mx-1"
              src={`${process.env.REACT_APP_API_URL}/${getSelectedIcon(
                congrat.donate.type
              )}`}
              alt=""
            /> */}
              <span className="mx-2">${congrat.donate.amount} to</span>
            </>
          </span>
          <div className="flex mt-3 mx-1 md:mt-0">
            <p className="text-sm  md:leading-[1.4] font-bold text-[#0C0E19] md:mr-[6px]">
              {user.info.full_name && user.info.full_name}{" "}
              <span className="text-sm font-normal text-[#5D627D]">
                `s birthday on {moment(user.info.dob).format("DD.MM.YYYY")}
              </span>
              <p className="text-[13px] leading-[1.4] font-medium text-[#8E93AF] md:mr-3  md:mt-1">
                {timeDiff} <span>ago</span>
              </p>
            </p>
          </div>
        </div>
        <img
          className="md:mr-3  w-[32px] h-[32px] rounded-full"
          src={
            user.info.avatar
              ? user.info.avatar
              : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          }
          alt={user ? "guest" : user.name}
        />{" "}
      </div>
      <div className="flex justify-between my-6">
        <p className="text-[18px] leading-[1.4] font-semibold text-[#1A1C29] mr-3">
          {congrat.comment.comment}
        </p>
        <div className="flex items-center text-[#2D008D]">
          <span className="text-[13px] leading-[1.4] font-medium text-[#2D008D] mr-[6px]">
            {congrat.likes.count} likes
          </span>
        </div>
      </div>
    </div>
  );
}

export default CongratComments;
