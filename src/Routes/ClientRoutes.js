import React from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import AllJobPosts from "../Pages/ClientPages/AllJobPost/AllJobPosts";
import Jobs from "../Pages/ClientPages/Jobs/Jobs";
import Header from "./../Components/ClientComponents/Header/Header";
import Footer from "./../Components/SharedComponents/Footer/Footer";
import Messages from "./../Pages/ClientPages/Messages/Messages";
import AllContract from "./../Pages/ClientPages/AllContract/AllContract";
import BringYourTalent from "./../Pages/ClientPages/BringYourTalent/BringYourTalent";
import PostJob from "./../Pages/ClientPages/PostJop/PostJob";
import Talent from "./../Pages/ClientPages/Talent/Talent";
import Reports from "./../Pages/ClientPages/Reports/Reports";
import PageNotFound from "./../Pages/Page Not Found/PageNotFound";
import ReviewProposals from "../Pages/ClientPages/ReviewProposals/ReviewProposals";

export default function ClientRoutes() {
  const { pathname } = useLocation();
  const { push } = useHistory();
  pathname === "/" && push("/home");

  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" exact component={Jobs} />
        <Route path="/c/messages" exact component={Messages} />
        <Route path="/all-job-posts" exact component={AllJobPosts} />
        <Route path="/all-contracts" exact component={AllContract} />
        <Route path="/bring-your-own-talent" exactcomponent={BringYourTalent} />
        <Route path="/post-job" component={PostJob} />
        <Route path="/talent" component={Talent} />
        <Route path="/review-proposal" component={ReviewProposals} />
        <Route path="/billing-history" exact component={Reports} />
        <Route path="**" component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  );
}
