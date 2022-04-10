import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AllJobPosts from "../Pages/ClientPages/AllJobPost/AllJobPosts";
import Jobs from "../Pages/ClientPages/Jobs/Jobs";
import Header from "./../Components/ClientComponents/Header/Header";
import { Footer } from "../Components/SharedComponents/footer/Footer";
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

export const Client = () => {

    const [talentArr, settalentArr] = useState([]);
    const [talentSearchList, settalentSearchList] = useState("");

    return (
        <>
            <SearchContextProvider value={{ talentSearchList, settalentSearchList, talentArr, settalentArr }}>
                <Header />
                <Routes>
                    <Route path={`${process.env.PUBLIC_URL}/home`} element={<Jobs />} />
                    <Route path={`${process.env.PUBLIC_URL}/messages`} element={<Messages />} />
                    <Route path={`${process.env.PUBLIC_URL}/all-job-posts`} element={<AllJobPosts />} />
                    <Route path={`${process.env.PUBLIC_URL}/all-contracts`} element={<AllContract />} />
                    <Route path={`${process.env.PUBLIC_URL}/bring-your-own-talent`} element={<BringYourTalent />} />
                    <Route path={`${process.env.PUBLIC_URL}/job-details/:id`} element={<JobJobDetailsBeforeProposals />} />
                    <Route path={`${process.env.PUBLIC_URL}/contract`} element={<Contract />} />
                    <Route path={`${process.env.PUBLIC_URL}/email-verification`} element={<EmailVerified />} />
                    <Route path={`${process.env.PUBLIC_URL}/sign-up/please-verify`} element={<PleaseVerifiy />} />
                    <Route path={`${process.env.PUBLIC_URL}/post-job`} element={<PostJob />} />
                    <Route path={`${process.env.PUBLIC_URL}/talent`} element={<Talent />} />
                    <Route path={`${process.env.PUBLIC_URL}/talent-profile/:id`} element={<TalentProfile />} />
                    <Route path={`${process.env.PUBLIC_URL}/review-proposal/:id`} element={<ReviewProposals />} />
                    <Route path={`${process.env.PUBLIC_URL}/billing-history`} element={<Reports />} />
                    <Route path={`${process.env.PUBLIC_URL}/transaction-history`} element={<TransactionHistory />} />
                    <Route path={`${process.env.PUBLIC_URL}/create-contract`} element={<CreateContract />} />
                    <Route path={`${process.env.PUBLIC_URL}/notifications`} element={<Notifications />} />
                    <Route path="**" element={<PageNotFound />} />
                </Routes>

            </SearchContextProvider>
            <Footer />
        </>
    );
}
