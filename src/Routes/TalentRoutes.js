import React from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import Reports from "./../Pages/ClientPages/Reports/Reports";
import Messages from "./../Pages/TalentPages/Messages/Messages";
import Header from "./../Components/TalentComponents/Header/Header";
import Footer from "./../Components/SharedComponents/Footer/Footer";
import SavedJobs from "./../Pages/TalentPages/SavedJobs/SavedJobs";
import Proposals from "./../Pages/TalentPages/Proposals/Proposals";
import Profile from "./../Pages/TalentPages/Profile/Profile";
import MyStats from "./../Pages/TalentPages/MyStats/MyStats";
import MyJobs from "./../Pages/TalentPages/MyJobs/MyJobs";
import AllContracts from "./../Pages/TalentPages/AllContracts/AllContracts";
import WorkDiary from "./../Pages/TalentPages/WorkDiary/WorkDiary";
import PageNotFound from "./../Pages/Page Not Found/PageNotFound";
import HomeTalent from "../Pages/TalentPages/HomeTalent/HomeTalent";
import JobDetailsTalent from "../Pages/TalentPages/JobDetailsTalent/JobDetailsTalent";

export default function TalentRoutes() {
  const { pathname } = useLocation();
  const { push } = useHistory();
  pathname === "/" && push("/find-work");

  return (
    <>
      <Header />
      <Switch>
        <Route path="/find-work" exact component={HomeTalent} />
        <Route path="/job/" exact component={JobDetailsTalent} />
        <Route path="/saved-jobs" exact component={SavedJobs} />
        <Route path="/proposals" exact component={Proposals} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/my-stats" exact component={MyStats} />
        <Route path="/my-jobs" exact component={MyJobs} />
        <Route path="/all-contract" exact component={AllContracts} />
        <Route path="/work-diary" exact component={WorkDiary} />
        <Route path="/overview" exact component={Reports} />
        <Route path="/t/messages" exact component={Messages} />
        <Route path="**" component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  );
}
