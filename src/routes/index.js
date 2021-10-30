import Login from "containers/Auth/Login/Login";
import Profile from "containers/Auth/Profile/Profile";
import SignUp from "containers/Auth/SignUp/SignUp";
import HomePage from "containers/home-module/HomePage/HomePage";
import UserInfo from "containers/Auth/Profile/UserInfo/UserInfo";
import CourseDetail from "containers/home-module/HomePage/CourseDetail/CourseDetail";
import AdminPage from "containers/admin-module/AdminPage/AdminPage";
import CourseManagement from "containers/admin-module/AdminPage/CourseManagement/CourseManagement";
import UserManagement from "containers/admin-module/AdminPage/UserManagement/UserManagement";
import Courses from "containers/home-module/HomePage/Courses/Courses";

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
  {
    path: "/courses",
    component: Courses,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/course-detail/:courseId",
    component: CourseDetail,
    exact: true,
    isPrivate: false,
  },
];

export const adminRoutes = [
  {
    path: "/admin",
    component: AdminPage,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/course-management",
    component: CourseManagement,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/user-management",
    component: UserManagement,
    exact: true,
    isPrivate: true,
  },
];
