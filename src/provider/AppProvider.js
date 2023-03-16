import React, { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Layout } from '../shared/components/layout';
import { useLocation } from "react-router-dom";
import { drawerControll } from "../store/slices/counterSlice";

const AppProvider = ({ children }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { toggle } = useSelector((state) => state.counter);

    useEffect(() => {
      if (typeof window === "object") {
        setTimeout(() => {
          document.getElementById("root").scrollIntoView({ behavior: "smooth", block: "start" });
        }, 500)
      }

      if (toggle) {
        dispatch(drawerControll())
      }

    }, [location.pathname])

    return (
      <Layout>
          {children}
      </Layout>
    )
}

export default AppProvider