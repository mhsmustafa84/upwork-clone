/* eslint-disable react-hooks/exhaustive-deps */
import SavedJobsHeader from "./../../../Components/TalentComponents/SavedJobsHeader/SavedJobsHeader";
import SavedJobsJobComponent from "./../../../Components/TalentComponents/SavedJobsJobComponent/SavedJobsJobComponent";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { talentDataAction } from "../../../Store/actions/talentData";
import Loader from './../../../Components/SharedComponents/Loader/Loader';

export default function SavedJobs() {

  const user = useSelector((state) => state.talentData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(talentDataAction());
  }, [user]);

  return (
    <div className="container-md container-fluid-sm my-lg-4">
      <div className="col-12">
        <SavedJobsHeader jobs={user?.savedJobs?.length} />
        {
          user?.savedJobs ?
            user?.savedJobs?.map((item) => (
              <SavedJobsJobComponent jobId={item} key={item} />
            ))
            :
            <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
              <Loader />
            </div>
        }
      </div>
    </div>
  );
}