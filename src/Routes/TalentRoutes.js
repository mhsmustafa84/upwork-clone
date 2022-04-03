import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
import { BASE_ROUTE } from './../constant';

export default function TalentRoutes() {
    const [arr, setarr] = useState([]);
    const [itemSearchList, setitemSearchList] = useState("");
    const [searchList, setsearchList] = useState([]);
    const [switchJobs, setswitchJobs] = useState("")
    return (
        <>
            <SearchContextProvider
                value={{ arr, setarr, itemSearchList, setitemSearchList, searchList, setsearchList, switchJobs, setswitchJobs }}
            >
                <Header />
                <Routes>
                    <Route path={`${BASE_ROUTE}/create-profile`} element={<CreateProfile />} />
                    <Route path={`${BASE_ROUTE}/find-work`} element={<HomeTalent />} />
                    <Route path={`${BASE_ROUTE}/Search`} element={<Search />}>
                        <Route path={":searchValue"} element={<Search />} />
                    </Route>
                    <Route path={`${BASE_ROUTE}/job/`} element={<JobDetailsTalent />}>
                        <Route path={":id"} element={<JobDetailsTalent />} />
                    </Route>
                    <Route path={`${BASE_ROUTE}/job/apply/:id`} element={<SubmitProposal />} />
                    <Route path={`${BASE_ROUTE}/job/review-proposal/:id`} element={<ReviewProposalsCard />} />
                    <Route path={`${BASE_ROUTE}/job/applied/:id`} element={<JobAppliedDetails />} />
                    <Route path={`${BASE_ROUTE}/saved-jobs`} element={<SavedJobs />} />
                    <Route path={`${BASE_ROUTE}/proposals`} element={<Proposals />} />
                    <Route path={`${BASE_ROUTE}/profile/:id`} element={<Profile />} />
                    <Route path={`${BASE_ROUTE}/email-verification`} element={<EmailVerified />} />
                    <Route path={`${BASE_ROUTE}/sign-up/please-verify`} element={<PleaseVerifiy />} />
                    <Route path={`${BASE_ROUTE}/my-stats`} element={<MyStats />} />
                    <Route path={`${BASE_ROUTE}/my-jobs`} element={<MyJobs />} />
                    <Route path={`${BASE_ROUTE}/all-contract`} element={<AllContracts />} />
                    <Route path={`${BASE_ROUTE}/offers`} element={<Offers />} />
                    <Route path={`${BASE_ROUTE}/overview`} element={<OverviewReports />} />
                    <Route path={`${BASE_ROUTE}/my-reports`} element={<Reports />} />
                    <Route path={`${BASE_ROUTE}/life-time-billing`} element={<BillingByClients />} />
                    <Route path={`${BASE_ROUTE}/connects-history`} element={<ConnectsHistory />} />
                    <Route path={`${BASE_ROUTE}/buyconnects`} element={<BuyConnects />} />
                    <Route path={`${BASE_ROUTE}/messages`} element={<Messages />} />
                    <Route path={`${BASE_ROUTE}/contract`} element={<Contract />} />
                    <Route path={`${BASE_ROUTE}/notifications`} element={<Notifications />} />
                    <Route path="**" element={<PageNotFound />} />
                </Routes>

            </SearchContextProvider>
            <Footer />
        </>
    );
}
