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
export const AsideComponent = ({ hidden }) => {
  const isAuth = useSelector(useAuthSelector);
  const [showes, setShowes] = useState(false);
  const [show, setShow] = useState(false);
  const [getUserLoginData, setUserLoginData] = useState();
  const [error, setError] = useState("");
  // const [isShow,setisShow] = useState(false);
  const navigate = useNavigate();

  // onClik = () =>{setShow(!show)}

  useEffect(() => {
    myaxiosprivate
      .get("/api/v1/user", {})
      .then(({ data }) => {
        setUserLoginData(data.data.info);
      })
      .catch((err) => setError(err.message));
  }, []);
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

  return (
    <CustomAside hidden={hidden}>
      {isAuth ? (
        <div>
          <div className="aside-container">
            <ul>
              <img
                style={{ width: "50px" }}
                src={
                  getUserLoginData?.avatar == null
                    ? "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                    : `${getUserLoginData.avatar}`
                }
              />
              <a href="/my-profile">
                <li className="login-aside-element">
                  {getUserLoginData?.full_name == null
                    ? "does not exist"
                    : getUserLoginData?.full_name}
                </li>
              </a>
              <a className="login-aside-element" href="/my-profile">
                <li>My wishes</li>
              </a>
              <a className="login-aside-element" href="/profile-edit">
                <li>Edit personal info</li>
              </a>
              <a className="login-aside-element" href="/settings">
                <li>Settings</li>
              </a>
              <hr className="hr-aside" />
              {asideLinkLogined.map((e, i) => (
                <li>
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
                <li>
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
