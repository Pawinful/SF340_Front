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
import Home from "./components/pages/Home";
import BookingInfo from "./components/pages/BookingInfo.jsx";
import ManageRoom from "./components/pages/ManageRoom.jsx";
import AddRoom from "./components/pages/AddRoom.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import Admin from "./components/pages/Admin";
import Login from "./components/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookinginfo",
        element: <BookingInfo />,
      },
      {
        path: "/manageroom",
        element: <ManageRoom />,
      },
      {
        path: "/addroom",
        element: <AddRoom />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
