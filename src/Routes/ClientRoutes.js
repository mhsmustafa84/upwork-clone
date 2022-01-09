import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import AllJobPosts from "../Pages/ClientPages/AllJobPost/AllJobPosts";
import Jobs from "../Pages/ClientPages/Jobs/Jobs";
import Header from "./../Components/ClientComponents/Header/Header";
import Footer from "./../Components/SharedComponents/Footer/Footer";
import Messages from "./../Pages/Messages/Messages";
import AllContract from "./../Pages/ClientPages/AllContract/AllContract";
import BringYourTalent from "./../Pages/ClientPages/BringYourTalent/BringYourTalent";
import PostJob from "./../Pages/ClientPages/PostJop/PostJob";
import Talent from "./../Pages/ClientPages/Talent/Talent";
import Reports from "./../Pages/ClientPages/Reports/Reports";
import PageNotFound from "./../Pages/PageNotFound/PageNotFound";
import ReviewProposals from "../Pages/ClientPages/ReviewProposals/ReviewProposals";
import EmailVerified from "./../Pages/EmailVerification/EmailVerified";
import TransactionHistory from "../Pages/TalentPages/Reports/TransactionHistory/TransactionHistory";
import TalentProfile from "../Pages/ClientPages/TalentProfile/talentProfile";
import PleaseVerifiy from "../Pages/EmailVerification/PleaseVerifiy";
import { SearchContextProvider } from "../Context/SearchContext";
import JobJobDetailsBeforeProposals from "../Pages/ClientPages/JobDetailsBeforeProposols/JobDetailsBeforeProposals";
import CreateContract from "../Pages/ClientPages/CreateContract/CreateContract";
import Notifications from "../Pages/Notifications/Notifications";
import Contract from './../Pages/ClientPages/AllContract/Contract';
import { BASE_ROUTE } from './../constant';


export default function ClientRoutes() {
    const [talentArr, settalentArr] = useState([]);
    const [talentSearchList, settalentSearchList] = useState("");

    return (
        <>
            <SearchContextProvider value={{ talentSearchList, settalentSearchList, talentArr, settalentArr }}>
                <Header />
                <Switch>
                    <Route path={`${BASE_ROUTE}/home`} exact component={Jobs} />
                    <Route path={`${BASE_ROUTE}/messages`} exact component={Messages} />
                    <Route path={`${BASE_ROUTE}/all-job-posts`} exact component={AllJobPosts} />
                    <Route path={`${BASE_ROUTE}/all-contracts`} exact component={AllContract} />
                    <Route
                        path={`${BASE_ROUTE}/bring-your-own-talent`}
                        exact
                        component={BringYourTalent}
                    />
                    <Route
                        path={`${BASE_ROUTE}/job-details/:id`}
                        exact
                        component={JobJobDetailsBeforeProposals}
                    />
                    <Route path={`${BASE_ROUTE}/contract`} component={Contract} />
                    <Route path={`${BASE_ROUTE}/email-verification`} component={EmailVerified} />
                    <Route path={`${BASE_ROUTE}/sign-up/please-verify`} exact component={PleaseVerifiy} />
                    <Route path={`${BASE_ROUTE}/post-job`} component={PostJob} />
                    <Route path={`${BASE_ROUTE}/talent`} component={Talent} />
                    <Route path={`${BASE_ROUTE}/talent-profile/:id`} exact component={TalentProfile} />
                    <Route path={`${BASE_ROUTE}/review-proposal/:id`} exact component={ReviewProposals} />
                    <Route path={`${BASE_ROUTE}/billing-history`} exact component={Reports} />
                    <Route
                        path={`${BASE_ROUTE}/transaction-history`}
                        exact
                        component={TransactionHistory}
                    />
                    <Route path={`${BASE_ROUTE}/create-contract`} component={CreateContract} />
                    <Route path={`${BASE_ROUTE}/notifications`} exact component={Notifications} />
                    <Route path="**" component={PageNotFound} />
                </Switch>
            </SearchContextProvider>
            <Footer />
        </>
    );
}
