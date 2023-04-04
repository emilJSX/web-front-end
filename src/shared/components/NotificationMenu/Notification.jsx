import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
function Notification({ show, notifications }) {
  // let notifications = [
  //   {
  //     id: 1,
  //     userPhoto:
  //       "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png",
  //     title: "User 1 has followed you",
  //     time: "9:00,Today",
  //   },
  //   {
  //     id: 2,
  //     userPhoto:
  //       "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png",
  //     title: "User 2 has followed you",
  //     time: "12:00,Yesterday",
  //   },
  // ];
  return (
    <div
      className={
        show
          ? "block z-50 absolute top-[70px] md:top-[70px] right-0 left-0 md:left-[46%] xl:left-[40%] mt-[21px]  bg-white  rounded-lg  w-full  md:h-fit md:w-[320px]"
          : "hidden"
      }
    >
      <p className="pt-2 px-2 font-bold text-sm md:text-[14px] tracking-[0.03em]">
        Notifications
      </p>
      <p className="md:hidden pt-2 px-2 font-bold text-sm">Today, 14 July</p>
      <ul className="py-2 text-sm">
        {notifications.length === 0 ? (
          <li className="rounded-lg border border-[#3800B0] px-2 py-2 my-1 mx-2 min-h-[72px] flex  align-center">
            {" "}
            <p className="text-[#3800B0] text-[14px]">
              There is no notification for you right now. Check out later...
            </p>
          </li>
        ) : (
          notifications.map((item) => (
            <li
              key={item.id}
              className="rounded-lg border border-[#3800B0] px-2 py-2 my-1 mx-2 min-h-[72px] flex  align-center"
            >
              <img
                src={item.userPhoto}
                alt=""
                className="md:w-[48px] md:h-[48px] w-[36px] h-[36px] rounded-full mx-2"
              />
              <div className="font-medium flex ">
                <div>
                  <p className="block px-4  text-[#3800B0] text-[14px]">
                    {item.title}
                  </p>
                  <p className="block px-4 pt-2 text-[#6033C0] text-[13px]">
                    {item.time}
                  </p>
                </div>
                <GoPrimitiveDot className="mt-3 text-[20px] text-[#3800B0]" />
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Notification;
