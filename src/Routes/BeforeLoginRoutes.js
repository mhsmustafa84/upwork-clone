import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../Pages/BeforeLoginPages/HomePage/HomePage";
import SignUp from "../Pages/BeforeLoginPages/SignUp/SignUp";
import Login from "./../Pages/BeforeLoginPages/Login/Login";
import FindFreelancingJob from "../Pages/BeforeLoginPages/FindFreelancingJob/FindFreelancingJob";
import DevelopmentItTalent from "../Pages/BeforeLoginPages/FindTalent_Development_It_Talent/DevelopmentItTalent";
import PageNotFoundBeforeLogin from "./../Pages/PageNotFound/PageNotFoundBeforeLogin";
import SignupDetails from "../Pages/BeforeLoginPages/SignUp Details/SignupDetails";
import { BASE_ROUTE } from "../constant";

export default function BeforeLoginRoutes() {
    return (
        <>
            <Switch>
                <Route path={BASE_ROUTE} exact component={HomePage} />
                <Route path={`${BASE_ROUTE}/login`} exact component={Login} />
                <Route path={`${BASE_ROUTE}/sign-up`} exact component={SignUp} />
                <Route path={`${BASE_ROUTE}/sign-up/details`} exact component={SignupDetails} />
                <Route path={`${BASE_ROUTE}/freelance-jobs`} exact component={FindFreelancingJob} />
                <Route path={`${BASE_ROUTE}/dev-it`} exact component={DevelopmentItTalent} />
                <Route path="**" component={PageNotFoundBeforeLogin} />
            </Switch>
        </>
    );
}
