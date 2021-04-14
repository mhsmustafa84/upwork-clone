import React from "react";
import { Switch, Route } from "react-router-dom";
import AllJobPosts from "../Pages/ClientPages/AllJobPost/AllJobPosts";
import Jobs from "../Pages/ClientPages/Jobs/Jobs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Header from './../Components/ClientComponents/Header/Header';
import Footer from './../Components/SharedComponents/Footer/Footer';
import Messages from './../Pages/ClientPages/Messages/Messages';
import AllContract from './../Pages/ClientPages/AllContract/AllContract';
import BringYourTalent from './../Pages/ClientPages/BringYourTalent/BringYourTalent';
import PostJob from './../Pages/ClientPages/PostJop/PostJob';
import Talent from './../Pages/ClientPages/Talent/Talent';
import Reports from './../Pages/ClientPages/Reports/Reports';

export default function ClientRoutes() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/home" exact component={Jobs} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/messages" exact component={Messages} />
                <Route path="/all-job-posts" exact component={AllJobPosts} />
                <Route path="/all-contracts" exact component={AllContract} />
                <Route path="/bring-your-own-talent" exact component={BringYourTalent} />
                <Route path="/post-job" exact component={PostJob} />
                <Route path="/talent" exact component={Talent} />
                <Route path="/talent/my-hires" exact component={Talent} />
                <Route path="/talent/saved-talent" exact component={Talent} />
                <Route path="/billing-history" exact component={Reports} />
            </Switch>
            <Footer />
        </>
    );
}
