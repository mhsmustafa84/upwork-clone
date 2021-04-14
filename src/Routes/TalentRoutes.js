import React from "react";
import { Switch, Route } from "react-router-dom";
import FindWork from "./../Pages/TalentPages/FindWork/FindWork";
import MyJobs from "./../Pages/ClientPages/MyJobs/MyJobs";
import Messages from "./../Pages/TalentPages/Messages/Messages";
import Contract from "../Pages/TalentPages/Contract/Contract";
import Reports from "../Pages/TalentPages/Reports/Reports";
import WorkDiary from "../Pages/TalentPages/WorkDiary/WorkDiary";

export default function TalentRoutes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={FindWork} />
        <Route path="/my-jobs" exact component={MyJobs} />
        <Route path="/overview" exact component={Reports} />
        <Route path="/all-contract" exact component={Contract} />
        <Route path="/work-diary" exact component={WorkDiary} />
        <Route path="/messages" exact component={Messages} />
      </Switch>
    </>
  );
}
