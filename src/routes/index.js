import Login from "containers/Auth/Login/Login";
import Profile from "containers/Auth/Profile/Profile";
import SignUp from "containers/Auth/SignUp/SignUp";
import HomePage from "containers/home-module/HomePage/HomePage";
import UserInfo from "containers/Auth/Profile/UserInfo/UserInfo";

export const clientRoutes = [
  {
    path: "/login",
    component: Login,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/",
    component: HomePage,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/signup",
    component: SignUp,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/profile/userinfo",
    component: UserInfo,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/profile",
    component: Profile,
    exact: true,
    isPrivate: false,
  },
];
