import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const user = useSelector((state) => state.userReducer.User);
  const checktoken = localStorage.getItem("token");

  return (
    <>
      {checktoken && user.role == "admin" ? children : <Navigate to="/" />}
    </>
  );
}

export default AdminRoute;
