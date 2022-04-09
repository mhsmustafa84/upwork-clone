import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, SignUp, SignupDetails } from '../Pages/unAuth';
import PageNotFoundBeforeLogin from "../Pages/PageNotFound/PageNotFoundBeforeLogin";

const routes = [
    {
        path: '',
        element: <Home />
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

const baseRoute = process.env.REACT_APP_BASE_ROUTE;

export const UnAuth = () => {
    return (
        <Routes>
            {routes.map(route => <Route key={route.path} path={baseRoute + route.path} element={route.element} />)}
        </Routes>
    );
}
