import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function CongratComments({ congrat, user }) {
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

  return (
    <div className="rounded-[24px] md:h-fit md:px-6 px-3 !py-2 w-full md:w-8/12 bg-white my-2 z-50 mb-2 shadow-md">
      <div className="flex justify-between">
        <div className="flex items-center ">
          {/* <img
              className="w-[16px] h-[17px] mx-1"
              src={`${process.env.REACT_APP_API_URL}/${getSelectedIcon(
                congrat.donate.type
              )}`}
              alt=""
            /> */}
          <div className="md:flex md:justify-between mt-3  md:mt-0">
            <p className="flex flex-wrap text-sm  font-bold text-[#0C0E19] md:mr-[6px]">
              <span className="flex font-medium text-sm text-[#5D627D] mr-1 ">
                ${congrat.donate.amount} to
              </span>
              <Link to={`/profile/${congrat.wisher.user_slug}`}>
                <span>
                  {congrat.wisher.user_name
                    ? congrat.wisher.user_name
                    : "Someone"}
                  `s
                </span>
              </Link>
              <span className="md:ml-1 text-sm font-normal text-[#5D627D]">
                birthday on {moment(congrat.date).format("DD.MM.YYYY")}
              </span>
            </p>
            <p className="text-[13px] leading-[1.4] font-medium text-[#8E93AF] md:mr-3 mt-0.5">
              {timeDiff} <span>ago</span>
            </p>
          </div>
          <Link to={`/profile/${congrat.wisher.user_slug}`}>
            <img
              className="md:mr-3 w-[32px] h-[32px] rounded-full"
              src={
                congrat.wisher.avatar
                  ? congrat.wisher.avatar
                  : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              }
              alt={
                congrat.wisher.user_name ? "guest" : congrat.wisher.user_name
              }
            />{" "}
          </Link>
        </div>
      </div>
      <div className="flex justify-between my-3">
        <div>
          <p className="text-[18px] leading-[1.4] font-semibold text-[#1A1C29] mr-3">
            {congrat.comment.comment}
          </p>
          <span className="text-[13px] leading-[1.4] font-medium text-[#2D008D] mr-[6px]">
            {congrat.likes.count} likes
          </span>
        </div>
        <div className=" text-[#2D008D]">
          <Link to={`/wish/${congrat.wish_slug}`}>
            <p>➔ to wish</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CongratComments;
