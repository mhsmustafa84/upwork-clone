import React, { useEffect } from "react";
import SearchJobPosts from "./../../../Components/ClientComponents/SearchJobPosts/SearchJobPosts";
import JobPostsFilters from "./../../../Components/ClientComponents/JobPostsFilters/JobPostsFilters";
import JobPostLi from "./../../../Components/ClientComponents/JobPostLi/JobPostLi";
import JobPostingsPagination from "./../../../Components/ClientComponents/JobPostingsPagination/JobPostingsPagination";
import JobPostsHeader from "../../../Components/ClientComponents/JobPostsHeader/JobPostsHeader";
import { useDispatch, useSelector } from "react-redux";
import { clientJobsAction } from "../../../Store/actions/clientJobAction";
import { auth } from "../../../firebase";

export default function AllJobPosts() {
  const jobs = useSelector(state => state.clientJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clientJobsAction('authID', '==', auth.currentUser.uid));
    console.log(jobs);
  }, []);
  return (
    <div className="bg-light py-3">
      <div className="container ">
        <JobPostsHeader />
        <div className="row border border-1 py-4  bg-white">
          <SearchJobPosts />
        </div>
        <div
          className="row border border-1 py-4  bg-light collapse"
          id="collapseExample"
        >
          <JobPostsFilters />
        </div>
        <div className="row border border-1 py-4 bg-white">
          {jobs && jobs?.map(job => <JobPostLi job={job.data} id={job.docID} key={job.docID} />)}

        </div>
        <div className="row border border-1 py-4  bg-white">
          <JobPostingsPagination />
        </div>
      </div>
    </div>
  );
}
