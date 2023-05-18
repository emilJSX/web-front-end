import React, { useRef, useState } from "react";
import { Button } from "../../ui/Button";
// import { ReactComponent as BinIcon } from '../../../style/icons/binIcon.svg'
import {
  Card,
  CardIcon,
  CreateWishBtn,
  HeaderContainer,
  ProfilName,
  ProfilP,
  ProfilWish,
} from "./Header.Styled";
import { ReactComponent as WishLogo } from "../../../style/icons/wish-x-logo-1.svg";
import { ReactComponent as MessageIcon } from "../../../style/icons/button-icons/message.svg";
import { ReactComponent as NotificationIcon } from "../../../style/icons/button-icons/notification.svg";
import { ReactComponent as CalendarIcon } from "../../../style/icons/button-icons/calendar.svg";
import { SearchInput } from "../search-bar";
import { Box, Burger, Loader, MediaQuery } from "@mantine/core";
import { DotsToggle } from "../../ui/dots-toggle-menu";
import { ReactComponent as StarsIcon } from "../../../style/icons/small-stars.svg";
import { ReactComponent as GridIcon } from "../../../style/icons/grid-icon.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { useEffect } from "react";
import { ButtonDefault } from "../../../pages/home/Home.Styled";
import {
  Login_ConnectionSystem,
  SignUp_ConnectionSystem,
} from "../../LoginSignUpSystem/ConnectionSystem/connection";
import { logout, useAuthSelector } from "../../../store/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { myaxiosprivate, updateToken } from "../../../api/myaxios";
import Notification from "../NotificationMenu/Notification";
import { echo } from "../../../helpers/notif";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { enqueueSnackbar } from "notistack";

export const HeaderShared = ({ user, error }) => {
  let { pathname } = useLocation();

  const [notifShow, setNotifShow] = useState(false);
  const [showes, setShowes] = useState(false);
  const [show, setShow] = useState(false);
  const [getOpenedMenu, setOpenedMenu] = useState(false);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const isAuth = useSelector(useAuthSelector);
  const dispatch = useDispatch();
  const [notifications, setNotifications] = useState([]);
  const [unreadNot, setUnreadNot] = useState();
  const [event, setEvent] = useState(null);
  const notRef = useRef(null);
  const settingRef = useRef(null);
  const toggleOptions = (e) => {
    e.preventDefault();
    setOpenedMenu(!getOpenedMenu);
    notifShow && setNotifShow(false);
  };

  // useEffect(() => {
  //   const closeOpenMenus = (e) => {
  //     e.stopPropagation();
  //     if (
  //       getOpenedMenu &&
  //       settingRef.current &&
  //       !settingRef.current.contains(e.target)
  //     ) {
  //       setOpenedMenu(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", closeOpenMenus);
  //   return () => {
  //     document.removeEventListener("mousedown", closeOpenMenus);
  //   };
  // }, [getOpenedMenu, settingRef]);
  useEffect(() => {
    const closeNotif = (e) => {
      if (notRef.current && notifShow && !notRef.current.contains(e.target)) {
        setNotifShow(false);
      }
    };
    document.addEventListener("mousedown", closeNotif);

    return () => {
      document.removeEventListener("mousedown", closeNotif);
    };
  }, [notifShow]);

  function GetWishNameForCreation() {
    if (isAuth) {
      navigate("/creating-wish");
    } else {
      setShowes(true);
    }
  }

  const handleLogout = async () => {
    await myaxiosprivate
      .post("/api/v1/logout")
      .then(() => {
        localStorage.removeItem("token");
        dispatch(logout());
        updateToken(null);
        navigate("/", { replace: true });
        window.location.reload();
      })
      .catch(() => {
        setErrors("Something went wrong...");
      });
  };
  let [loadMore, setLoadMore] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const fetchNotifications = async () => {
      (await myaxiosprivate
        .get(`/api/v1/notifications/list?skip=${loadMore}`)
        .then(({ data }) => {
          setUnreadNot(data.data.unread);
          setNotifications(data.data.notifications);
          setLastPage(data.data.last_page);
          data.data.unread > 0 &&
            enqueueSnackbar("You have unreaded notifications");
        })
        .catch((err) => enqueueSnackbar(err.message)));
  };

  useEffect(() => {
    if (isAuth && user) {
      echo
        .private(`notifications.${user?.user_id}`)
        .listen("Notification", function (e) {
          e && setEvent(e);
          fetchNotifications();
        });
    }

    // return () => {
    //   echo.leave(`notifications.${user?.user_id}`);
    // };
  }, [isAuth, user, echo]);

  useEffect(() => {
    console.log(event);
    fetchNotifications();
  }, [event]);
  return (
    <HeaderContainer>
      <section className="logoSection">
        <Link to="/">
          <WishLogo />
        </Link>
        <SearchInput iconHave={true} size="xl" myUserId={user?.user_id} />
        <ul className="pt-2 !pl-0">
          <li
            className="all-wishes-btn cursor-pointer"
            onClick={() =>
              navigate("/wish-list", { state: user?.info?.full_name })
            }
          >
            All Wishes
          </li>
          {!user && (
            <div className="menu">
              <li className="all-wishes-btn pr-2">
                <Link to="/faq">How it works</Link>
              </li>
              <li className="all-wishes-btn pr-2">
                <Link to="/partners-coupon">Partners</Link>
              </li>
              <li className="all-wishes-btn pr-1">
                <Link to="/main-blog">Blog</Link>
              </li>
            </div>
          )}
        </ul>
      </section>
      {/*     float: right;
    position: absolute; */}
      {user ? (
        <>
          <div className="container-mobile-menu">
            <CardIcon className="flex">
              <Link to="/calendar">
                <CalendarIcon className="mt-[13px] mr-[24px]" />
              </Link>
              <MessageIcon
                className="cursor-pointer mt-[13px] mr-[24px]"
                onClick={() =>
                  enqueueSnackbar(
                    "This feature currently not available... Come back soon."
                  )
                }
              />
              <label className="relative">
                {unreadNot > 0 && (
                  <span className="absolute w-[8px] h-[8px] top-4 right-7 text-white text-xs bg-red-500 rounded-full"></span>
                )}

                <NotificationIcon
                  className="cursor-pointer  mt-[13px] mr-[24px]"
                  onClick={() => setNotifShow(!notifShow)}
                />
              </label>
            </CardIcon>

            {notifShow && (
              <ClickAwayListener onClickAway={() => setNotifShow(false)}>
                <div className="shadow-2xl">
                  <Notification
                    // innerRef={notRef}
                    setLoad={setLoadMore}
                    load={loadMore}
                    show={setNotifShow}
                    notifications={notifications}
                    unread={unreadNot}
                    setUnread={setUnreadNot}
                  />
                </div>
              </ClickAwayListener>
            )}

            <CreateWishBtn
              className="hover:shadow-md hover:bg-[#2D008D] "
              onClick={() => {
                user.wishes?.active?.length === 0
                  ? navigate("/creating-wish")
                  : enqueueSnackbar("You already have a wish");
              }}
            >
              Create a wish
            </CreateWishBtn>

            <Card>
              <Link to="/my-profile">
                <ProfilP>
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "45px",
                      objectFit: "cover",
                      marginTop: "-9.99px",
                      height: "45px",
                    }}
                    src={
                      user?.info?.avatar == null
                        ? "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                        : `${user.info?.avatar}`
                    }
                  />
                </ProfilP>
              </Link>
              <Link to="/my-profile">
                <ProfilName>
                  {user?.info.full_name == null
                    ? "does not exist"
                    : user?.info.full_name}
                </ProfilName>
              </Link>
              <FiChevronDown
                onClick={toggleOptions}
                className="cursor-pointer"
                style={{
                  marginLeft: "110px",
                  fontSize: "20px",
                  marginTop: "-8px",
                  position: "absolute",
                  top: "22px",
                  left: "51px",
                }}
              />
              <ProfilWish>
                {user?.info.wishes_count} wishes •{" "}
                {user?.balance ? "$" + user.balance : "$0"}
              </ProfilWish>

              {getOpenedMenu && (
                <ClickAwayListener onClickAway={() => setOpenedMenu(false)}>
                  <div className="dropdown-menu-logined z-10 shadow-2xl">
                    <div className="body-menu-logined" ref={settingRef}>
                      <ul className="!pl-0">
                        <Link
                          to="/profile-edit"
                          onClick={() => setOpenedMenu(false)}
                        >
                          <li
                            className={
                              pathname === "/profile-edit"
                                ? " !bg-[#22006A] px-1 rounded-md !text-white edit-personal-info-btn"
                                : "edit-personal-info-btn hover:shadow-lg  hover:!bg-[#2D008D] hover:!text-white hover:rounded-md"
                            }
                          >
                            Edit personal info
                          </li>
                        </Link>
                        <Link
                          to="/settings"
                          onClick={() => setOpenedMenu(false)}
                        >
                          <li
                            className={
                              pathname === "/settings"
                                ? "!bg-[#22006A] px-2 rounded-md !text-white settings-btn"
                                : "settings-btn hover:shadow-[#22006A3D]  hover:shadow-lg hover:!bg-[#2D008D] hover:!text-white hover:rounded-md"
                            }
                          >
                            Settings
                          </li>
                        </Link>
                        <Link onClick={handleLogout}>
                          <li className="settings-btn hover:px-2  hover:shadow-lg hover:!bg-[#2D008D] hover:!text-white hover:rounded-md">
                            Sign out
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </ClickAwayListener>
              )}
            </Card>
          </div>
        </>
      ) : (
        <section className="log-in-out-Section">
          {show && (
            <SignUp_ConnectionSystem
              setregisterModal={setShow}
              setShowes={setShowes}
            />
          )}
          {showes ? (
            <Login_ConnectionSystem
              setShowes={setShowes}
              showRegister={setShow}
            />
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button variant="white" className="log-buttons">
                <ButtonDefault
                  onClick={() => {
                    let body = document.querySelector("body");
                    body.setAttribute("style", "overflow-x: hidden");
                    setShowes(!show);
                  }}
                  style={{
                    border: "0",
                    color: "#3800B0",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Log In
                </ButtonDefault>
              </Button>
            </div>
          )}
          <Button>
            <Link onClick={GetWishNameForCreation}>Create a wish</Link>
          </Button>
        </section>
      )}
      <MediaQuery largerThan="md" styles={{ display: "none" }}>
        <Box className="create-wish-btn">
          <Button icon={<StarsIcon />}>Create a wish</Button>
        </Box>
      </MediaQuery>
      <MediaQuery largerThan="md" styles={{ display: "none" }}>
        <div>
          <div className="dots-icon">
            <GridIcon />
            <DotsToggle />
          </div>
        </div>
      </MediaQuery>
    </HeaderContainer>
  );
};

export default HeaderShared;
