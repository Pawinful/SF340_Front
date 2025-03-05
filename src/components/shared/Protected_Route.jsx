import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const ProtectedRoutes = () => {
  // TODO: Use authentication token
  const localStorageUserToken = localStorage.getItem("user");

  return localStorageUserToken ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
