import moment from "moment";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { myaxiosprivate } from "../../../api/myaxios";
import { ReactComponent as Wishlogo } from "../../../style/icons/wishy.svg";
import logo from "../../ui/avatarnotifications.png";
function NotificationItem({ item, setShow, setUnread, unread }) {
  const [read, setRead] = useState(item.status);
  const navigate = useNavigate();
  const handleClick = async () => {
    read === false &&
      (await myaxiosprivate
        .get(`/api/v1/notifications/view?notification_id=${item.id}`)
        .then(({ data }) => {
          enqueueSnackbar("Notification readed");
          setRead(true);
          setUnread(!unread !== 0 && unread - 1);
        })
        .catch((err) => enqueueSnackbar(err.message)));
    // item.credentials.wish &&
    //   navigate(`/wish/${item.credentials.wish.wish_slug}`);
    setShow(false);
  };
  return (
    <li
      onClick={() => {
        handleClick(item);
      }}
      key={item.id}
      className={`${
        read && "bg-[#e5e5e5]"
      } cursor-pointer hover:!border-[2px] hover:!border-[#3800B0] rounded-lg mx-2 border border-[#3800B0] py-2 my-1 min-w-[368px] min-h-[72px] flex justify-between`}
    >
      <div className="flex mx-2 w-fit justify-around items-center">
        <Link
          to={`/profile/${
            item?.credentials?.user?.user_slug
              ? item?.credentials?.user?.user_slug
              : item?.credentials?.user?.slug
          }`}
        >
          <img
            src={
              item.credentials.user
                ? item?.credentials?.user?.avatar
                  ? item?.credentials?.user?.avatar
                  : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                : logo
            }
            alt=""
            className="md:w-[48px] md:h-[48px] w-[36px] h-[36px] rounded-full  mx-2"
          />
        </Link>
        <div className="font-medium flex relative py-2 max-w-[260px]">
          <div>
            <Link
              to={`/profile/${
                item?.credentials?.user?.user_slug
                  ? item?.credentials?.user?.user_slug
                  : item?.credentials?.user?.slug
              }`}
              
            >
              <p className="text-[14px] !mb-0 text-[#3800B0]">
                {item.credentials?.user?.full_name
                  ? item.credentials?.user?.full_name
                  : item.credentials?.user?.name}
              </p>
            </Link>
            <Link
              to={
                (item?.credentials?.wish || item.credentials?.wish_slug) &&
                `/wish/${
                  item?.credentials?.wish?.wish_slug
                    ? item?.credentials?.wish?.wish_slug
                    : item?.credentials?.wish_slug
                }`
              }
            >
              <p className=" text-[#3800B0] !mb-0 text-[14px]">
                {item?.credentials?.text}
              </p>
            </Link>
            <p className="!mb-0 text-[#6033C0] text-[13px]">
              {moment(item.date).format("DD.MM.YYYY")}
            </p>
          </div>
        </div>
      </div>
      {!read && (
        <div className="flex items-center justify-center mr-2">
          <GoPrimitiveDot className="text-[20px] text-[#3800B0]" />
        </div>
      )}
    </li>
  );
}

export default NotificationItem;
