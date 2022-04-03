import React from "react";
import { Route, Routes } from "react-router-dom";
// import HomePage from "../Pages/BeforeLoginPages/HomePage/HomePage";
import SignUp from "../Pages/BeforeLoginPages/SignUp/SignUp";
import Login from "./../Pages/BeforeLoginPages/Login/Login";
import FindFreelancingJob from "../Pages/BeforeLoginPages/FindFreelancingJob/FindFreelancingJob";
import DevelopmentItTalent from "../Pages/BeforeLoginPages/FindTalent_Development_It_Talent/DevelopmentItTalent";
import PageNotFoundBeforeLogin from "./../Pages/PageNotFound/PageNotFoundBeforeLogin";
import SignupDetails from "../Pages/BeforeLoginPages/SignUp Details/SignupDetails";

export default function BeforeLoginRoutes() {
    return (
        <Routes>
            {/* <Route path={process.env.REACT_APP_BASE_ROUTE} element={<HomePage />} /> */}
            <Route path={process.env.REACT_APP_BASE_ROUTE} element={<Login />} />
            <Route path={`${process.env.REACT_APP_BASE_ROUTE}/login`} element={<Login />} />
            <Route path={`${process.env.REACT_APP_BASE_ROUTE}/sign-up`} element={<SignUp />} />
            <Route path={`${process.env.REACT_APP_BASE_ROUTE}/sign-up/details`} element={<SignupDetails />} />
            <Route path={`${process.env.REACT_APP_BASE_ROUTE}/freelance-jobs`} element={<FindFreelancingJob />} />
            <Route path={`${process.env.REACT_APP_BASE_ROUTE}/dev-it`} element={<DevelopmentItTalent />} />
            <Route path="**" element={<PageNotFoundBeforeLogin />} />
        </Routes>
    );
}
