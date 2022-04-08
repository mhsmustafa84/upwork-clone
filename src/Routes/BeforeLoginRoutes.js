import React from "react";
import { Route, Routes } from "react-router-dom";
// import HomePage from "../Pages/BeforeLoginPages/HomePage/HomePage";
import SignUp from "../Pages/BeforeLoginPages/SignUp/SignUp";
import Login from "./../Pages/BeforeLoginPages/Login/Login";
import FindFreelancingJob from "../Pages/BeforeLoginPages/FindFreelancingJob/FindFreelancingJob";
import PageNotFoundBeforeLogin from "./../Pages/PageNotFound/PageNotFoundBeforeLogin";
import SignupDetails from "../Pages/BeforeLoginPages/SignUp Details/SignupDetails";
import HomePage from './../Pages/BeforeLoginPages/HomePage/HomePage';

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
        path: '/freelance-jobs',
        element: <FindFreelancingJob />
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
