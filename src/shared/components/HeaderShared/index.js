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
import { Link, useNavigate } from "react-router-dom";
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
export const HeaderShared = () => {
  const [opened, setOpened] = useState(false);
  const [showes, setShowes] = useState(false);
  const [show, setShow] = useState(false);
  const [getOpenedMenu, setOpenedMenu] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const isAuth = useSelector(useAuthSelector);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState();
  const toggleOptions = () => {
    setOpenedMenu(!getOpenedMenu);
  };

  function GetWishNameForCreation() {
    if (isAuth) {
      navigate("/creating-wish");
    } else {
      setShowes(true);
    }
  }

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const { data } = await myaxiosprivate.get("/api/v1/user");
        setUserData(data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);
  const handleLogout = async () => {
    await myaxiosprivate
      .post("/api/v1/logout")
      .then(() => {
        localStorage.removeItem("token");
        dispatch(logout());
        updateToken(null);
        navigate("/", { replace: true });
      })
      .catch(() => {
        setError("Something went wrong...");
      });
  };
  console.log(userData?.user_id);
  return (
    <HeaderContainer>
      <section className="logoSection">
        <a href="/">
          <WishLogo />
        </a>
        <SearchInput iconHave={true} size="xl" myUserId={userData?.user_id} />
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
      {userData ? (
        <>
          <div className="container-mobile-menu">
            <CardIcon>
              <a href="/calendar">
                <IoCalendarOutline
                  style={{
                    fontSize: "21px",
                    margin: "13px 36px 0 0",
                    color: "#3800B0",
                    float: "left",
                  }}
                />
              </a>
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
            <CreateWishBtn>
              <Link to="/creating-wish">Create a wish</Link>
            </CreateWishBtn>

            <Card>
              <a href="/my-profile">
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
                      userData?.info?.avatar == null
                        ? "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                        : `${userData.info?.avatar}`
                    }
                  />
                </ProfilP>
              </a>
              <a href="/my-profile">
                <ProfilName>
                  {userData?.info.full_name == null
                    ? "does not exist"
                    : userData?.info.full_name}
                </ProfilName>
              </a>
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
              <ProfilWish>{userData?.info.wishes_count} wishes • $0</ProfilWish>
              <div
                className="dropdown-menu-logined"
                style={{ display: !getOpenedMenu ? "none" : "block" }}
              >
                <div className="body-menu-logined">
                  <ul>
                    <Link to="/profile-edit">
                      <li className="edit-personal-info-btn">
                        Edit personal info
                      </li>
                    </Link>
                    <Link to="/settings">
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
          {showes ? (
            <Login_ConnectionSystem setShowes={setShowes} />
          ) : show ? (
            ""
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
