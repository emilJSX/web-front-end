import { AppShell, MediaQuery } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { AsideComponent } from "../aside";
import { Footer } from "../footer";
import { Header } from "../header";
import { useLocation } from "react-router-dom";
import HeaderLoginAuth from "../HeaderLogin";
import HeaderShared from "../HeaderShared";
import { useDispatch, useSelector } from "react-redux";
import { drawerControll } from "../../../store/slices/counterSlice";
import { useAuthSelector } from "../../../store/slices/authSlice";
import { myaxiosprivate } from "../../../api/myaxios";

export const Layout = ({ children }) => {
  // const [toggleOpen, setToggleOpen] = useState(false)
  const { toggle } = useSelector((state) => state.counter);
  const { pathname } = useLocation();
  const [userData, setUserData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const isAuth = useSelector(useAuthSelector);
  //flase -> active
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await myaxiosprivate.get("/api/v1/user");
        setUserData(data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    isAuth && fetchUser();
  }, []);
  return (
    <AppShell
      padding="0"
      style={{ backgroundColor: toggle ? "#22006a" : "#fff" }}
      header={
        pathname !== "/" &&
        pathname !== "/home" && (
          <HeaderShared user={userData} loading={loading} error={error} />
        )
      }
      footer={<Footer />}
      asideOffsetBreakpoint="sm"
      // aside={
      //     <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
      //         <div>
      //             <AsideComponent hidden={!toggle} hiddenBreakpoint="sm" />
      //         </div>
      //     </MediaQuery >
      // }
    >
      {children}
    </AppShell>
  );
};
