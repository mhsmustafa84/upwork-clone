/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router";

import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import JobDescriptionJobDetails from "../../../components/talent/JobDescriptionJobDetails/JobDescriptionJobDetails";
import RightSidebarJobDetails from "../../../components/talent/RightSidebarJobDetails/RightSidebarJobDetails";

export default function JobAppliedDetails() {
  const { id } = useParams();
  const [jobData, setJobData] = useState({});

  useEffect(() => {
    db.collection("job")
      .doc(id)
      .get()
      .then((res) => {
        setJobData(res.data());
      });
  }, []);


  return (
    <div className="container-md container-fluid-sm my-lg-4 my-sm-4 py-xs-5">
      <div className="d-lg-block">
        <div className="row my-lg-4 px-0 mx-0 d-lg-block d-none py-xs-5">
          <h3>Job details</h3>
        </div>
        <div className="row ">
          <JobDescriptionJobDetails job={jobData} />
          <RightSidebarJobDetails job={jobData} />
        </div>
      </div>
    </div>
  );
}
