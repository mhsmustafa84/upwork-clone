import React, { useState } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import Messages from "../Pages/Messages/Messages";
import Header from "./../Components/TalentComponents/Header/Header";
import Footer from "./../Components/SharedComponents/Footer/Footer";
import SavedJobs from "./../Pages/TalentPages/SavedJobs/SavedJobs";
import Proposals from "./../Pages/TalentPages/Proposals/Proposals";
import Profile from "./../Pages/TalentPages/Profile/Profile";
import MyStats from "./../Pages/TalentPages/MyStats/MyStats";
import MyJobs from "./../Pages/TalentPages/MyJobs/MyJobs";
import AllContracts from "./../Pages/TalentPages/AllContracts/AllContracts";
import PageNotFound from "./../Pages/PageNotFound/PageNotFound";
import Reports from "../Pages/TalentPages/Reports/MyReports/MyReports";
import OverviewReports from "../Pages/TalentPages/Reports/OverviewReports/OverviewReports";
import BillingByClients from "../Pages/TalentPages/Reports/billingbyclient/billingbyclients";
import ConnectsHistory from "../Pages/TalentPages/Reports/connectshistory/connectshistory";
import BuyConnects from "../Pages/TalentPages/Reports/BuyConnects/BuyConnects";
import HomeTalent from "../Pages/TalentPages/HomeTalent/HomeTalent";
import JobDetailsTalent from "../Pages/TalentPages/JobDetailsTalent/JobDetailsTalent";
import CreateProfile from "../Pages/TalentPages/CreateProfile/CreateProfile";
import Search from "../Pages/TalentPages/Search/Search";
import EmailVerified from "./../Pages/EmailVerification/EmailVerified";
import SubmitProposal from "../Pages/Submit Proposal/SubmitProposal";
import ReviewProposalsCard from "../Components/ClientComponents/ReviewProposalsCard/ReviewProposalsCard";
import { SearchContextProvider } from "../Context/SearchContext";
import PleaseVerifiy from "../Pages/EmailVerification/PleaseVerifiy";
import JobAppliedDetails from "../Pages/TalentPages/JobAppliedDetails/JobAppliedDetails";
import Contract from "../Pages/TalentPages/Contract/Contract";
import Offers from "../Pages/TalentPages/Offers/Offers";
import Notifications from './../Pages//Notifications/Notifications';

export default function TalentRoutes() {
  const [arr, setarr] = useState([]);
  const [itemSearchList, setitemSearchList] = useState("");
  const [searchList, setsearchList] = useState([]);
  const [switchJobs, setswitchJobs] = useState("")
  // const { pathname } = useLocation();
  // const { push } = useHistory();
  // pathname === "/" && push("/find-work");
  return (
    <>
      <SearchContextProvider
        value={{ arr, setarr, itemSearchList, setitemSearchList, searchList, setsearchList, switchJobs, setswitchJobs }}
      >
        <Header />
        <div>
          <Switch>
            <Route path="/create-profile" component={CreateProfile} />
            <Route path="/find-work" exact component={HomeTalent} />
            <Route path="/" exact component={HomeTalent} />
            <Route path="/Search/:searchValue" exact component={Search} />
            <Route path="/Search" exact component={Search} />
            <Route path="/job/" exact component={JobDetailsTalent} />
            <Route path="/job/:id" exact component={JobDetailsTalent} />
            <Route path="/job/apply/:id" exact component={SubmitProposal} />
            <Route
              path="/job/review-proposal/:id"
              exact
              component={ReviewProposalsCard}
            />
            <Route path="/job/applied/:id" exact component={JobAppliedDetails} />
            <Route path="/saved-jobs" exact component={SavedJobs} />
            <Route path="/proposals" exact component={Proposals} />
            <Route path="/profile/:id" exact component={Profile} />
            <Route path="/email-verification" component={EmailVerified} />
            <Route
              path="/sign-up/please-verify"
              exact
              component={PleaseVerifiy}
            />
            <Route path="/my-stats" exact component={MyStats} />
            <Route path="/my-jobs" exact component={MyJobs} />
            <Route path="/all-contract" exact component={AllContracts} />
            <Route path="/offers" exact component={Offers} />
            <Route path="/overview" component={OverviewReports} />
            <Route path="/my-reports" exact component={Reports} />
            <Route path="/life-time-billing" exact component={BillingByClients} />
            <Route path="/connects-history" exact component={ConnectsHistory} />
            <Route path="/buyconnects" exact component={BuyConnects} />
            {/* <Route
              path="/transaction-history"
              exact
              component={TransactionHistory}
            /> */}
            <Route path="/messages" exact component={Messages} />
            <Route path="/contract" component={Contract} />
            <Route path="/notifications" exact component={Notifications} />
            <Route path="**" component={PageNotFound} />
          </Switch>
        </div>
      </SearchContextProvider>
      <Footer />
    </>
  );
}
