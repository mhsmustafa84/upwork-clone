import React from "react";
import SavedJobsHeader from "./../../../Components/TalentComponents/SavedJobsHeader/SavedJobsHeader";
import SavedJobsJobComponent from "./../../../Components/TalentComponents/SavedJobsJobComponent/SavedJobsJobComponent";

export default function SavedJobs() {
  return (
    <div className="container-md container-fluid-sm my-lg-4">
      <div className="col-12">
        <SavedJobsHeader />
        <SavedJobsJobComponent />
      </div>
    </div>
  );
}
