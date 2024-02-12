import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ isLoggedIn }) => {
  return <div>{isLoggedIn ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default PrivateRoutes;
