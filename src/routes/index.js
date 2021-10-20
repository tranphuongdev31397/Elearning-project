import Login from "containers/Auth/Login/Login";
import HomePage from "containers/home-module/HomePage/HomePage";

export const clientRoutes = [
    {
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
    },
    {
        path: '/',
        component: HomePage,
        exact: true,
        isPrivate: false,
    }
]