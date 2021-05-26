import SavedJobsHeader from "./../../../Components/TalentComponents/SavedJobsHeader/SavedJobsHeader";
import SavedJobsJobComponent from "./../../../Components/TalentComponents/SavedJobsJobComponent/SavedJobsJobComponent";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { db } from "../../../firebase";
import { talentDataAction } from "../../../Store/actions/talentData";

export default function SavedJobs() {
  const user = useSelector((state) => state.talentData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(talentDataAction());
  }, []);
  return (
    <div className="container-md container-fluid-sm my-lg-4">
      <div className="col-12">
        <SavedJobsHeader jobs={user?.savedJobs?.length} />
        {user?.savedJobs?.map((item) => (
          <SavedJobsJobComponent jobId={item} />
        ))}
      </div>
    </div>
  );
}
