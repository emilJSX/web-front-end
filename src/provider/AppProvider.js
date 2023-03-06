import React, { useEffect } from 'react'
import { Provider } from 'react-redux';
import { Layout } from '../shared/components/layout';
import { useLocation } from "react-router-dom";

const AppProvider = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
      if (typeof window === "object") {
        setTimeout(() => {
          document.getElementById("root").scrollIntoView({ behavior: "smooth", block: "start" });
        }, 500)
      }
    }, [location.pathname])

    return (
      <Layout>
          {children}
      </Layout>
    )
}

export default AppProvider