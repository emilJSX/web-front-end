import { Menu } from "@mantine/core";
import moment from "moment";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useRef, useState } from "react";
import {
  BsFillHandThumbsUpFill,
  BsHandThumbsUp,
  BsThreeDots,
} from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { myaxiosprivate } from "../../../api/myaxios";
import { ReactComponent as SendIcon } from "./send.svg";

function Comment({ props, giftTypes, myWish, completeWish, isMe }) {
  const [like, setLike] = useState(props.likes.userLiked);
  let [likeCount, setLikeCount] = useState(props.likes.count);
  const [commentValue, setCommentValue] = useState(props.comment.comment);
  const [edit, setEdit] = useState(false);
  const [answer, setAnswer] = useState("");
  const currentDateRef = useRef(moment());
  const dateObjRef = useRef(moment(props.date));
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

  const handleLike = async () => {
    await myaxiosprivate
      .post("/api/v1/wish/comments/like", {
        comment_id: props.id,
      })
      .then(({ data }) => {
        setLike(!like);
        data.message === "system.comment.unliked"
          ? setLikeCount((likeCount -= 1))
          : setLikeCount((likeCount += 1));
      })
      .catch((err) => enqueueSnackbar(err.message));
  };
  const handleSendAnswer = async (id) => {
    setEdit(false);
    await myaxiosprivate
      .post("/api/v1/wish/comments/answer", {
        comment_id: id,
        answer: answer,
      })
      .then(({ data }) => enqueueSnackbar(data.message), location.reload())
      .catch((err) => enqueueSnackbar(err.message));
  };
  // const handleDeleteComment = async (id) => {
  //   await myaxiosprivate
  //     .post("/api/v1/wish/comments/delete", {
  //       comment_id: id,
  //     })
  //     .then(({ data }) => enqueueSnackbar(data.message))
  //     .catch((err) => enqueueSnackbar(err.message));
  // };

  return (
    <div className="rounded-[24px] md:h-fit px-6 py-2 bg-white my-2 z-50 mb-2 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {!props.user.private_status ? (
            <Link to={`/profile/${props.user.slug}`}>
              <img
                className="md:mr-3  w-[32px] h-[32px] rounded-full"
                src={props.user.avatar}
                alt={props.user.name}
              />{" "}
            </Link>
          ) : (
            <img
              className="md:mr-3  w-[32px] h-[32px] rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              alt={"guest"}
            />
          )}
          <div className="flex mt-3 mx-1 md:mt-0">
            {!props.user.private_status ? (
              <Link to={`/profile/${props.user.slug}`}>
                <p className="text-sm  md:leading-[1.4] mx-1 font-semibold text-[#0C0E19] md:mr-[6px]">
                  {props.user.name ? props.user.name : "Guest"}

                  <p className="text-[13px] leading-[1.4] font-medium text-[#8E93AF] md:mr-3  md:mt-1">
                    {timeDiff} <span>ago</span>
                  </p>
                </p>
              </Link>
            ) : (
              <p className="text-sm  md:leading-[1.4] mx-1 font-semibold text-[#0C0E19] md:mr-[6px]">
                Anonym
                <p className="text-[13px] leading-[1.4] font-medium text-[#8E93AF] md:mr-3  md:mt-1">
                  {timeDiff} <span>ago</span>
                </p>
              </p>
            )}

            <span className="flex font-medium  md:leading-[1.4] text-sm text-[#5D627D]">
              gave{" "}
              {props.donate.private_status ? (
                "a gift"
              ) : (
                <>
                  <img
                    className="w-[16px] h-[17px] mx-1"
                    src={`${process.env.REACT_APP_API_URL}/${getSelectedIcon(
                      props.donate.type
                    )}`}
                    alt=""
                  />
                  <span>${props.donate.amount}</span>
                </>
              )}
            </span>
          </div>
        </div>
        {/* {props.comment.access && (
          <div className="flex items-center">
            <Menu
              size={"sm"}
              position="right"
              classNames={{
                body: "rounded-[16px]",
              }}
              control={
                <button className="flex items-center text-[#3800B0]">
                  <BsThreeDots />
                </button>
              }
            >
              <Menu.Item>
                <button
                  className="flex items-center text-[#3800B0]"
                  onClick={() => setEdit(true)}
                >
                  <FaPen className="text-sm !text-[#3800B0]" />
                  <span className="ml-2 text-sm leading-[1.3] tracking-[0.01em] !text-[#3800B0]">
                    Edit
                  </span>
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  className="flex items-center text-[#3800B0]"
                  onClick={() => handleDeleteComment(props.id)}
                >
                  <RiDeleteBin6Line className="text-sm !text-[#3800B0]" />
                  <span className="ml-2 text-sm leading-[1.3] tracking-[0.01em] !text-[#3800B0]">
                    Delete
                  </span>
                </button>
              </Menu.Item>
            </Menu>
          </div>
        )}
       */}
      </div>
      <div className="flex justify-between my-6">
        <input
          type="text"
          disabled={!edit}
          className="text-[20px] bg-white leading-[1.4] font-semibold text-[#1A1C29] mr-3"
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
        />
        {/* {edit && (
          <SendIcon
            className="mt-[10px] mr-2 cursor-pointer"
            onClick={() => handleSendAnswer(props.id)}
          />
        )} */}
        <button className="flex items-center text-[#2D008D]">
          <span className="text-[13px] leading-[1.4] font-medium text-[#2D008D] mr-[6px]">
            {likeCount}
          </span>
          {like ? (
            <BsFillHandThumbsUpFill className="mb-2" onClick={handleLike} />
          ) : (
            <BsHandThumbsUp className="mb-2" onClick={handleLike} />
          )}
        </button>
      </div>
      {isMe && !props.answer && (
        <div className="flex w-full px-2 h-[48px]  rounded-[48px] !border-[2px] border-solid border-[#EBE5F7]  justify-between">
          <img
            className="w-6 shrink-0 mt-[10px] h-6 rounded-full mr-3"
            src={myWish}
            alt=""
          />
          <input
            type="text"
            className="text-sm  font-medium text-[#0C0E19] pt-[10px] mr-[6px] w-full focus:outline-none"
            placeholder="Your answer.."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <SendIcon
            className="mt-[10px] mr-2 cursor-pointer"
            onClick={() => handleSendAnswer(props.id)}
          />
          {/* <p className="text-sm mt-1 leading-[1.4] font-medium text-[#0C0E19] mr-[6px]">
              Thank you, brother from another mother
            </p> */}
        </div>
      )}
      {props.answer && (
        <div className="rounded-[48px] !border-[2px] border-solid border-[#EBE5F7] mt-1 p-2 w-full flex justify-between">
          <div className="flex">
            <img
              className="w-6 shrink-0 h-6 rounded-full mr-3"
              src={myWish}
              alt=""
            />
            <p className="text-sm mt-1 leading-[1.4] font-medium text-[#0C0E19] mr-[6px]">
              {props.answer.message}
            </p>
          </div>
          <p className="text-[13px] shrink-0 leading-[1.4] mt-1 font-medium text-[#8E93AF]">
            2 min ago
          </p>
        </div>
      )}
    </div>
  );
}

export default Comment;
