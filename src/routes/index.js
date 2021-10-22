import Login from "containers/Auth/Login/Login";
import SignUp from "containers/Auth/SignUp/SignUp";
import HomePage from "containers/home-module/HomePage/HomePage";


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
