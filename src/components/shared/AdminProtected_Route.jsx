import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const ProtectedRoutesAdmin = () => {
  const localStorageAdminToken = localStorage.getItem("token");

  return localStorageAdminToken === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/adminlogin" replace />
  );
};

export default ProtectedRoutesAdmin;
