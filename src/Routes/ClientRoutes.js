import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
                <Routes>
                    <Route path={`${BASE_ROUTE}/home`} element={<Jobs />} />
                    <Route path={`${BASE_ROUTE}/messages`} element={<Messages />} />
                    <Route path={`${BASE_ROUTE}/all-job-posts`} element={<AllJobPosts />} />
                    <Route path={`${BASE_ROUTE}/all-contracts`} element={<AllContract />} />
                    <Route path={`${BASE_ROUTE}/bring-your-own-talent`} element={<BringYourTalent />} />
                    <Route path={`${BASE_ROUTE}/job-details/:id`} element={<JobJobDetailsBeforeProposals />} />
                    <Route path={`${BASE_ROUTE}/contract`} element={<Contract />} />
                    <Route path={`${BASE_ROUTE}/email-verification`} element={<EmailVerified />} />
                    <Route path={`${BASE_ROUTE}/sign-up/please-verify`} element={<PleaseVerifiy />} />
                    <Route path={`${BASE_ROUTE}/post-job`} element={<PostJob />} />
                    <Route path={`${BASE_ROUTE}/talent`} element={<Talent />} />
                    <Route path={`${BASE_ROUTE}/talent-profile/:id`} element={<TalentProfile />} />
                    <Route path={`${BASE_ROUTE}/review-proposal/:id`} element={<ReviewProposals />} />
                    <Route path={`${BASE_ROUTE}/billing-history`} element={<Reports />} />
                    <Route path={`${BASE_ROUTE}/transaction-history`} element={<TransactionHistory />} />
                    <Route path={`${BASE_ROUTE}/create-contract`} element={<CreateContract />} />
                    <Route path={`${BASE_ROUTE}/notifications`} element={<Notifications />} />
                    <Route path="**" element={<PageNotFound />} />
                </Routes>

            </SearchContextProvider>
            <Footer />
        </>
    );
}
