import React, { useState } from "react";
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
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
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
export const HeaderShared = ({ user, error, loading }) => {
  const [opened, setOpened] = useState(false);
  const [showes, setShowes] = useState(false);
  const [show, setShow] = useState(false);
  const [getOpenedMenu, setOpenedMenu] = useState(false);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const isAuth = useSelector(useAuthSelector);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState();
  const toggleOptions = () => {
    setOpenedMenu(!getOpenedMenu);
  };

  function GetWishNameForCreation() {
    if (isAuth) {
      console.log("TRUE");
      navigate("/creating-wish");
    } else {
      setShowes(true);
      console.log("False");
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
  return (
    <HeaderContainer>
      <section className="logoSection">
        <Link to="/">
          <WishLogo />
        </Link>
        <SearchInput iconHave={true} size="xl" myUserId={user?.user_id} />
        <ul>
          <li className="all-wishes-btn">
            <Link to="/wish-list">All Wishes</Link>
          </li>
          {/* <li><Button variant='white'><Link>How it works</Link></Button></li> */}
          {/* <li><Button variant='white'><Link>Partners</Link></Button></li> */}
          {/* <li><Button variant='white'><Link>Blog</Link></Button></li> */}
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
              />
            </CardIcon>
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
              <ProfilWish>{user?.info.wishes_count} wishes • $0</ProfilWish>
              <div
                className={
                  !getOpenedMenu
                    ? "hidden dropdown-menu-logined"
                    : "block dropdown-menu-logined z-10"
                }
                // style={{ display: !getOpenedMenu ? "none" : "block" }}
              >
                <div className="body-menu-logined">
                  <ul>
                    <Link
                      to="/profile-edit"
                      onClick={() => setOpenedMenu(false)}
                    >
                      <li className="edit-personal-info-btn">
                        Edit personal info
                      </li>
                    </Link>
                    <Link to="/settings" onClick={() => setOpenedMenu(false)}>
                      <li className="settings-btn">Settings</li>
                    </Link>
                    <Link onClick={handleLogout}>
                      <li className="settings-btn">Sign out</li>
                    </Link>
                  </ul>
                </div>
              </div>
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
