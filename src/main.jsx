import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import Layout from "./components/shared/Layout";
import UserLayout from "./components/shared/UserLayout.jsx";

import UserLogin from "./components/pages/user/UserLogin.jsx";
import Home from "./components/pages/user/Home.jsx";
import Reserve from "./components/pages/user/Reserve.jsx";
import MyBooking from "./components/pages/user/MyBooking.jsx";
import ProtectedRoute from "./components/shared/Protected_Route.jsx";
import AdminLogin from "./components/pages/AdminLogin.jsx";
import Approve from "./components/pages/Approve.jsx";
import BookingInfo from "./components/pages/BookingInfo.jsx";
import ManageRoom from "./components/pages/ManageRoom.jsx";
import AddRoom from "./components/pages/AddRoom.jsx";
import ApproveBooking from "./components/pages/ApproveBooking.jsx";
// import Dashboard from "./components/pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reserve",
        element: (
          <ProtectedRoute>
            <Reserve />
          </ProtectedRoute>
        ),
      },
      {
        path: "/mybooking",
        element: (
          <ProtectedRoute>
            <MyBooking />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        path: "/admin/approve",
        element: (
          <ProtectedRoute>
            <Approve />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/bookinginfo",
        element: (
          <ProtectedRoute>
            <BookingInfo />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/manageroom",
        element: (
          <ProtectedRoute>
            <ManageRoom />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/addroom",
        element: (
          <ProtectedRoute>
            <AddRoom />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/approvebooking",
        element: <ApproveBooking />,
      },
      // {
      //   path: "/admin/dashboard",
      //   element: <Dashboard />,
      // },
    ],
  },
  {
    path: "/login",
    element: <UserLogin />,
  },
  {
    path: "/admin/login",
    element: (
      <ProtectedRoute>
        <AdminLogin />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
