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
import { allwish, headerLists } from "../../../utils/dummy-data/header-list";
import { SearchInput } from "../search-bar";
import { Box, Burger, Loader, MediaQuery } from "@mantine/core";
import { DotsToggle } from "../../ui/dots-toggle-menu";
import { ReactComponent as StarsIcon } from "../../../style/icons/small-stars.svg";
import { ReactComponent as GridIcon } from "../../../style/icons/grid-icon.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MyProfile from "../../../pages/my-profile";
import { FiChevronDown } from "react-icons/fi";
import { IoCalendarOutline, IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { useEffect } from "react";
import axios from "axios";
import Autholog from "../../../shared/LogIn-SingUp/Autholog";
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

  useEffect(() => {
    isAuth &&
      echo
        .private(`notifications.${user?.user_id}`)
        .listen("Notification", (e) => {
          setNotifications(e);
        });
  }, []);
  return (
    <HeaderContainer>
      <section className="logoSection">
        <Link to="/">
          <WishLogo />
        </Link>
        <SearchInput iconHave={true} size="xl" myUserId={user?.user_id} />
        <ul className="pt-2">
          <li className="all-wishes-btn">
            <Link to="/wish-list">All Wishes</Link>
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
            <CardIcon>
              <Link to="/calendar">
                <IoCalendarOutline
                  style={{
                    fontSize: "21px",
                    margin: "13px 36px 0 0",
                    color: "#3800B0",
                    float: "left",
                  }}
                />
              </Link>
              {/* <a href=''><AiOutlineMessage style={{fontSize:"21px", margin:"13px 36px 0 0", color:"#3800B0", float:"left"}}/></a> */}
              <IoNotificationsOutline
                style={{
                  fontSize: "21px",
                  margin: "13px 36px 0 0",
                  color: "#3800B0",
                  float: "left",
                }}
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setNotifShow(!notifShow);
                }}
              />
            </CardIcon>
            <Notification
              innerRef={notRef}
              show={notifShow}
              notifications={notifications}
            />

            {user.wishes?.active?.length === 0 && (
              <CreateWishBtn>
                <Link to="/creating-wish">Create a wish</Link>
              </CreateWishBtn>
            )}

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
                  <div className="dropdown-menu-logined z-10">
                    <div className="body-menu-logined" ref={settingRef}>
                      <ul>
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
