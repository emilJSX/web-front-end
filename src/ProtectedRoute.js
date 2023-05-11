import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, useLocation } from "react-router-dom";
import { useAuthSelector } from "./store/slices/authSlice";
function ProtectedRoute({ children }) {
  const isAuth = useSelector(useAuthSelector);
  const location = useLocation();
  return isAuth ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
}

export default ProtectedRoute;
