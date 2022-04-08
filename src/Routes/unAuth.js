import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, Login, SignUp, SignupDetails } from '../Pages/unAuth';
import PageNotFoundBeforeLogin from "../Pages/PageNotFound/PageNotFoundBeforeLogin";

const routes = [
    {
        path: '',
        element: <HomePage />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/sign-up',
        element: <SignUp />
    },
    {
        path: '/sign-up/details',
        element: <SignupDetails />
    },
    {
        path: '**',
        element: <PageNotFoundBeforeLogin />
    }
]

export default function BeforeLoginRoutes() {
    const baseRoute = process.env.REACT_APP_BASE_ROUTE;
    return (
        <Routes>
            {routes.map(route => <Route key={route.path} path={baseRoute + route.path} element={route.element} />)}
        </Routes>
    );
}
