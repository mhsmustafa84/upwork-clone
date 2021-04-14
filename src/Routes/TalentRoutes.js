import React from 'react'
import { Switch, Route } from "react-router-dom";
import FindWork from './../Pages/TalentPages/FindWork/FindWork';
import Reports from './../Pages/ClientPages/Reports/Reports';
import Messages from './../Pages/TalentPages/Messages/Messages';
import Header from './../Components/TalentComponents/Header/Header';
import Footer from './../Components/SharedComponents/Footer/Footer';
import SavedJobs from './../Pages/TalentPages/SavedJobs/SavedJobs';
import Proposals from './../Pages/TalentPages/Proposals/Proposals';
import Profile from './../Pages/TalentPages/Profile/Profile';
import MyStats from './../Pages/TalentPages/MyStats/MyStats';
import MyJobs from './../Pages/TalentPages/MyJobs/MyJobs';
import AllContracts from './../Pages/TalentPages/AllContracts/AllContracts';
import WorkDiary from './../Pages/TalentPages/WorkDiary/WorkDiary';

export default function TalentRoutes() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/find-work" exact component={FindWork} />
                <Route path="/saved-jobs" exact component={SavedJobs} />
                <Route path="/proposals" exact component={Proposals} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/my-stats" exact component={MyStats} />
                <Route path="/my-jobs" exact component={MyJobs} />
                <Route path="/all-contract" exact component={AllContracts} />
                <Route path="/work-diary" exact component={WorkDiary} />
                <Route path="/overview" exact component={Reports} />
                <Route path="/messages" exact component={Messages} />
            </Switch>
            <Footer />
        </>
    )
}
