import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const ProtectedRoutes = () => {
  // TODO: Use authentication token
  const localStorageToken = localStorage.getItem("token");

  return localStorageToken ? <Outlet /> : <Navigate to="/login" replace />;
};
// const ProtectedRoute = ({ children }) => {
//   const user = JSON.parse(localStorage.getItem("username"));

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

export default ProtectedRoutes;
