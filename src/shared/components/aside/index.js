import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { CustomAside } from "./Aside.Styled";
import { ReactComponent as FishSVG } from "../../../style/icons/fish-in-aside.svg";
import {
  asideLinkLogined,
  asideLinks,
} from "../../../utils/dummy-data/aside-links";
import { Button } from "../../ui/Button";
import { Login_ConnectionSystem } from "../../LoginSignUpSystem/ConnectionSystem/connection";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  drawerControll,
  loginControll,
} from "../../../store/slices/counterSlice";
import { useDrawer } from "../../../hooks/useDrawer";
import { myaxiosprivate } from "../../../api/myaxios";
import { useAuthSelector } from "../../../store/slices/authSlice";
export const AsideComponent = ({ user }) => {
  const isAuth = useSelector(useAuthSelector);
  const [showes, setShowes] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const toggle = useSelector((state) => state.counter.toggle);
  // const [isShow,setisShow] = useState(false);
  const navigate = useNavigate();
  function LogoutApi() {
    useDrawer();
    setError("");
    myaxiosprivate
      .post("/api/v1/logout")
      .then(() => {
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        setError(err.message);
      });
  }
  let myUserId = user && user.user_id;
  return (
    <CustomAside hidden={!toggle}>
      {isAuth ? (
        <div>
          <div className="aside-container">
            <ul>
              <img
                className="rounded-3xl"
                style={{ width: "50px" }}
                src={
                  !user?.info?.avatar
                    ? "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                    : `${user?.info.avatar}`
                }
              />
              <Link href="/my-profile">
                <li className="login-aside-element">
                  {!user?.info.full_name
                    ? "does not exist"
                    : user?.info.full_name}
                </li>
              </Link>
              <Link className="login-aside-element" to="/my-profile">
                <li>My wishes</li>
              </Link>
              <Link className="login-aside-element" to="/profile-edit">
                <li>Edit personal info</li>
              </Link>
              <Link className="login-aside-element" to="/settings">
                <li>Settings</li>
              </Link>
              <hr className="hr-aside" />
              <li
                className="login-aside-element cursor-pointer"
                onClick={() => navigate("/search", { state: { myUserId } })}
              >
                Search
              </li>
              {asideLinkLogined.map((e, i) => (
                <li key={i}>
                  <Link to={e.href} className="aside-link-element">
                    <p>{e.name}</p>
                  </Link>
                </li>
              ))}
              <p className="sign-out" onClick={LogoutApi}>
                {" "}
                Sign out{" "}
              </p>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <div className="aside-container">
            <ul>
              {asideLinks.map((e, i) => (
                <li key={i}>
                  <Link to={e.href} className="aside-link-element">
                    <p>{e.name}</p>
                  </Link>
                </li>
              ))}
              {showes ? (
                <Login_ConnectionSystem setShowes={setShowes} />
              ) : show ? (
                ""
              ) : (
                <p
                  className="log-in"
                  onClick={() => {
                    let body = document.querySelector("body");
                    body.setAttribute("style", "overflow-x: hidden");
                    setShowes(!show);
                  }}
                >
                  {" "}
                  Log in{" "}
                </p>
              )}
            </ul>
            <FishSVG className="mt-4" />
          </div>
        </div>
      )}
    </CustomAside>
  );
};
