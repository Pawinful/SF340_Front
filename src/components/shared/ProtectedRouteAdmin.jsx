import { Navigate, Outlet } from "react-router-dom";
import React from 'react';

const ProtectedRoutesAdmin = () => {
    const localStorageAdminToken = localStorage.getItem("admin");

    return localStorageAdminToken ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoutesAdmin