import React from 'react'
import { Switch, Route } from "react-router-dom";
import FindWork from './../Pages/TalentPages/FindWork/FindWork';
import MyJobs from './../Pages/ClientPages/MyJobs/MyJobs';
import Reports from './../Pages/ClientPages/Reports/Reports';
import Messages from './../Pages/TalentPages/Messages/Messages';

export default function TalentRoutes() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={FindWork} />
                <Route path="/my-jobs" exact component={MyJobs} />
                <Route path="/overview" exact component={Reports} />
                <Route path="/messages" exact component={Messages} />
            </Switch>
        </>
    )
}
