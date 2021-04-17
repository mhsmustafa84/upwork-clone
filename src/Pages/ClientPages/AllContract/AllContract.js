import React from "react";
import SearchJobPosts from "./../../../Components/ClientComponents/SearchJobPosts/SearchJobPosts";
import JobPostsFilters from "./../../../Components/ClientComponents/JobPostsFilters/JobPostsFilters";
import AllContractsBottomSection from "./../../../Components/ClientComponents/AllContractsBottomSection/AllContractsBottomSection";
import SortingAllContracts from "./../../../Components/ClientComponents/SortingAllContracts/SortingAllContracts";

export default function AllContract() {
  return (
    <div className="bg-light py-3">
      <div className="container ">
        <h3 className="mt-5 mb-2 py-3">Contracts</h3>
        <div className="row border border-1 py-4  bg-white">
          <SearchJobPosts />
        </div>
        <div
          className="row border border-1 py-4  bg-light collapse"
          id="collapseExample"
        >
          <JobPostsFilters />
        </div>
        <div className="row border border-1 pt-3  bg-white">
          <SortingAllContracts />
        </div>
        <div className="row border border-1 py-4  bg-white">
          <AllContractsBottomSection />
        </div>
      </div>
    </div>
  );
}
