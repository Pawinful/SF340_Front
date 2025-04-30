import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const ProtectedRoutes = () => {
  const localStorageAdminToken = localStorage.getItem("token");

  return localStorageAdminToken ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
