import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllJobPosts from '../pages/ClientPages/AllJobPost/AllJobPosts';
import Jobs from '../pages/ClientPages/Jobs/Jobs';
import Header from '../components/client/Header/Header';
import { Footer } from '../components/shared/footer/Footer';
import Messages from '../pages/Messages/Messages';
import AllContract from '../pages/ClientPages/AllContract/AllContract';
import PostJob from '../pages/ClientPages/PostJop/PostJob';
import Talent from '../pages/ClientPages/Talent/Talent';
import Reports from '../pages/ClientPages/Reports/Reports';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import ReviewProposals from '../pages/ClientPages/ReviewProposals/ReviewProposals';
import EmailVerified from '../pages/EmailVerification/EmailVerified';
import TransactionHistory from '../pages/TalentPages/Reports/TransactionHistory/TransactionHistory';
import TalentProfile from '../pages/ClientPages/TalentProfile/talentProfile';
import PleaseVerifiy from '../pages/EmailVerification/PleaseVerifiy';
import { SearchContextProvider } from '../Context/SearchContext';
import JobJobDetailsBeforeProposals from '../pages/ClientPages/JobDetailsBeforeProposols/JobDetailsBeforeProposals';
import CreateContract from '../pages/ClientPages/CreateContract/CreateContract';
import Notifications from '../pages/Notifications/Notifications';
import Contract from '../pages/ClientPages/AllContract/Contract';

export const Client = () => {
    const [talentArr, settalentArr] = useState([]);
    const [talentSearchList, settalentSearchList] = useState('');

    return (
        <>
            <SearchContextProvider
                value={{
                    talentSearchList,
                    settalentSearchList,
                    talentArr,
                    settalentArr,
                }}
            >
                <Header />
                <Routes>
                    <Route
                        path={`${process.env.PUBLIC_URL}/home`}
                        element={<Jobs />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/messages`}
                        element={<Messages />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/all-job-posts`}
                        element={<AllJobPosts />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/all-contracts`}
                        element={<AllContract />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/job-details/:id`}
                        element={<JobJobDetailsBeforeProposals />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/contract`}
                        element={<Contract />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/email-verification`}
                        element={<EmailVerified />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/sign-up/please-verify`}
                        element={<PleaseVerifiy />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/post-job`}
                        element={<PostJob />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/talent`}
                        element={<Talent />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/talent-profile/:id`}
                        element={<TalentProfile />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/review-proposal/:id`}
                        element={<ReviewProposals />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/billing-history`}
                        element={<Reports />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/transaction-history`}
                        element={<TransactionHistory />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/create-contract`}
                        element={<CreateContract />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/notifications`}
                        element={<Notifications />}
                    />
                    <Route path='**' element={<PageNotFound />} />
                </Routes>
            </SearchContextProvider>
            <Footer />
        </>
    );
};
