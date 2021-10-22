import Login from "containers/Auth/Login/Login";
import HomePage from "containers/home-module/HomePage/HomePage";
import SignUp from "containers/SignUp/SignUp";

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
];
