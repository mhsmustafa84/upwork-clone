/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import JobPostsFilters from "./../../../components/client/JobPostsFilters/JobPostsFilters";
import JobPostLi from "./../../../components/client/JobPostLi/JobPostLi";
import JobPostsHeader from "../../../components/client/JobPostsHeader/JobPostsHeader";
import { useDispatch, useSelector } from "react-redux";
import { clientJobsAction } from "../../../Store/actions/clientJobAction";
import { fbAuth } from "../../../firebase";
import { Loader } from "../../../components/shared/Loader";

export default function AllJobPosts() {
    const jobs = useSelector((state) => state.clientJobs);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clientJobsAction("authID", "==", fbAuth.auth.currentUser.uid));
        console.log(jobs);
    }, []);
    return (
        <div className="bg-light py-3">
            <div className="container px-5">
                <JobPostsHeader />
                {/* <div className="row border border-1 py-4  bg-white">
          <SearchJobPosts />
        </div> */}
                <div
                    className="row border border-1 py-4  bg-light collapse"
                    id="collapseExample"
                >
                    <JobPostsFilters />
                </div>
                <div className="row border border-1 py-4 bg-white">
                    {
                        jobs?.length > 0 ?
                            jobs?.map((job, ind) => (
                                <JobPostLi job={job?.data} id={job?.docID} key={job?.docID} index={ind} />
                            ))
                            : <Loader />
                    }
                </div>
                {/* <div className="row border border-1 py-4  bg-white">
          <JobPostingsPagination />
        </div> */}
            </div>
        </div>
    );
}
