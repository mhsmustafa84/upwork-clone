import React from "react";
import SearchJobPosts from "./../../../Components/ClientComponents/SearchJobPosts/SearchJobPosts";
import JobPostsFilters from "./../../../Components/ClientComponents/JobPostsFilters/JobPostsFilters";
import JobPostLi from "./../../../Components/ClientComponents/JobPostLi/JobPostLi";
import JobPostingsPagination from "./../../../Components/ClientComponents/JobPostingsPagination/JobPostingsPagination";
import JobPostsHeader from "../../../Components/ClientComponents/JobPostsHeader/JobPostsHeader";

export default function AllJobPosts() {
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
        <div className="row border border-1 py-4  bg-white">
          <JobPostLi />
        </div>
        <div className="row border border-1 py-4  bg-white">
          <JobPostingsPagination />
        </div>
      </div>
    </div>
  );
}
