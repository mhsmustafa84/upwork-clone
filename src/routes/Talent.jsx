import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Messages from '../pages/Messages/Messages';
import Header from '../components/talent/Header/Header';
import { Footer } from '../components/shared/Footer';
import SavedJobs from '../pages/talent/SavedJobs/SavedJobs';
import Proposals from '../pages/talent/Proposals/Proposals';
import Profile from '../pages/talent/Profile/Profile';
import MyStats from '../pages/talent/MyStats/MyStats';
import MyJobs from '../pages/talent/MyJobs/MyJobs';
import AllContracts from '../pages/talent/AllContracts/AllContracts';
import Reports from '../pages/talent/Reports/MyReports/MyReports';
import OverviewReports from '../pages/talent/Reports/OverviewReports/OverviewReports';
import BillingByClients from '../pages/talent/Reports/billingbyclient/billingbyclients';
import ConnectsHistory from '../pages/talent/Reports/connectshistory/connectshistory';
import BuyConnects from '../pages/talent/Reports/BuyConnects/BuyConnects';
import HomeTalent from '../pages/talent/HomeTalent/HomeTalent';
import JobDetailsTalent from '../pages/talent/JobDetailsTalent/JobDetailsTalent';
import CreateProfile from '../pages/talent/CreateProfile/CreateProfile';
import Search from '../pages/talent/Search/Search';
import EmailVerified from '../pages/EmailVerification/EmailVerified';
import SubmitProposal from '../pages/Submit Proposal/SubmitProposal';
import ReviewProposalsCard from '../components/client/ReviewProposalsCard/ReviewProposalsCard';
import { SearchContextProvider } from '../Context/SearchContext';
import PleaseVerifiy from '../pages/EmailVerification/PleaseVerifiy';
import JobAppliedDetails from '../pages/talent/JobAppliedDetails/JobAppliedDetails';
import Contract from '../pages/talent/Contract/Contract';
import Offers from '../pages/talent/Offers/Offers';
import Notifications from '../pages/Notifications/Notifications';
import { NotFound } from '../pages/shared/NotFound';

export const Talent = () => {
    const [arr, setarr] = useState([]);
    const [itemSearchList, setitemSearchList] = useState('');
    const [searchList, setsearchList] = useState([]);
    const [switchJobs, setswitchJobs] = useState('');
    return (
        <>
            <SearchContextProvider
                value={{
                    arr,
                    setarr,
                    itemSearchList,
                    setitemSearchList,
                    searchList,
                    setsearchList,
                    switchJobs,
                    setswitchJobs,
                }}
            >
                <Header />
                <Routes>
                    <Route
                        path={`${process.env.PUBLIC_URL}/create-profile`}
                        element={<CreateProfile />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/find-work`}
                        element={<HomeTalent />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/Search`}
                        element={<Search />}
                    >
                        <Route path={':searchValue'} element={<Search />} />
                    </Route>
                    <Route
                        path={`${process.env.PUBLIC_URL}/job/`}
                        element={<JobDetailsTalent />}
                    >
                        <Route path={':id'} element={<JobDetailsTalent />} />
                    </Route>
                    <Route
                        path={`${process.env.PUBLIC_URL}/job/apply/:id`}
                        element={<SubmitProposal />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/job/review-proposal/:id`}
                        element={<ReviewProposalsCard />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/job/applied/:id`}
                        element={<JobAppliedDetails />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/saved-jobs`}
                        element={<SavedJobs />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/proposals`}
                        element={<Proposals />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/profile/:id`}
                        element={<Profile />}
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
                        path={`${process.env.PUBLIC_URL}/my-stats`}
                        element={<MyStats />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/my-jobs`}
                        element={<MyJobs />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/all-contract`}
                        element={<AllContracts />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/offers`}
                        element={<Offers />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/overview`}
                        element={<OverviewReports />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/my-reports`}
                        element={<Reports />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/life-time-billing`}
                        element={<BillingByClients />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/connects-history`}
                        element={<ConnectsHistory />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/buyconnects`}
                        element={<BuyConnects />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/messages`}
                        element={<Messages />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/contract`}
                        element={<Contract />}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/notifications`}
                        element={<Notifications />}
                    />
                    <Route path='**' element={<NotFound />} />
                </Routes>
            </SearchContextProvider>
            <Footer />
        </>
    );
};
