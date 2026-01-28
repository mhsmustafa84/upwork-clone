/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";
import Loader from './../../SharedComponents/Loader/Loader';

export default function ProposalCard({ proposal, jobId, ind }) {

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
                  {
                    proposal.status === "proposal"
                      ? new Date(proposal.proposalTime?.seconds * 1000).toLocaleString()
                      : new Date(proposal.startContractTime?.seconds * 1000).toLocaleString()
                  }
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
          : ind === 0 && <Loader />
      }
    </>
  );
}
