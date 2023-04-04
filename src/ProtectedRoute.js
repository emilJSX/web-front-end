import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import { useAuthSelector } from "./store/slices/authSlice";
function ProtectedRoute({ children }) {
  const isAuth = useSelector(useAuthSelector);

  return isAuth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
