import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, SignUp, SignupDetails } from '../pages/unAuth';
import PageNotFoundBeforeLogin from "../pages/PageNotFound/PageNotFoundBeforeLogin";

const routes = [
    {
        path: '/',
        element: () => <Home />
    },
    {
        path: '/login',
        element: () => <Login />
    },
    {
        path: '/sign-up',
        element: () => <SignUp />
    },
    {
        path: '/sign-up/details',
        element: () => <SignupDetails />
    },
    {
        path: '**',
        element: () => <PageNotFoundBeforeLogin />
    }
]

const baseRoute = process.env.PUBLIC_URL;

export const UnAuth = () => {
    return (
        <Routes>
            {
                routes.map(route =>
                    <Route
                        key={route.path}
                        path={`${baseRoute}${route.path}`}
                        element={<route.element />}
                    />
                )
            }
        </Routes>
    );
}
