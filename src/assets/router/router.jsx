import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Loader from "../../component/Loader";
import EventDetails from "../pages/EventDetails";
import EventCard from "../../component/EventCard";
import PrivateRout from "./PrivateRout";
import AboutOurself from "../layout/AboutOurself";

import ErrorPage from "../../component/ErrorPage";
import ForgetPassword from "../../component/ForgetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRout>
            <MyProfile></MyProfile>
          </PrivateRout>
        ),
      },
      {
        path: "/upcomingEvent",
        element: <EventCard></EventCard>,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgatPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
  {
    path: "/event-details/:id",
    element: (
      <PrivateRout>
        <EventDetails></EventDetails>
      </PrivateRout>
    ),
    loader: () => fetch("/event.json"),
    hydrateFallbackElement: <Loader></Loader>,
  },
  {
    path: "/eventCard",
    element: <EventCard></EventCard>,
  },
  {
    path: "/aboutOurself",

    element: (
      <PrivateRout>
        <AboutOurself></AboutOurself>,
      </PrivateRout>
    ),
  },

  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
