/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";
import Loader from './../../SharedComponents/Loader/Loader';

export default function ProposalCard({ jobId }) {

  const [jobData, setJobData] = useState({});

  useEffect(() => {
    db.collection("job")
      .doc(jobId)
      .onSnapshot(doc => {
        setJobData(doc.data());
      });
  }, []);

  return (
    <>
      {
        jobId
          &&
          jobData?.jobTitle ?
          <div>
            <div className="row">
              <div className="col">
                <div>
                  {new Date(jobData.postTime?.seconds * 1000).toLocaleString()}
                </div>
              </div>
              <Link
                to={`/job/applied/${jobId}`}
                className="col-6 fw-bold text-success "
              >
                {jobData.jobTitle}
              </Link>
              <div className="col text muted">{jobData.jobCategory}</div>
            </div>
            <hr />
          </div>
          : <Loader />
      }
    </>
  );
}
