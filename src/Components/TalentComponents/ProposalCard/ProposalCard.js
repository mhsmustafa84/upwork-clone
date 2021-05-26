/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { auth, db, storage } from "../../../firebase";
import { Link } from "react-router-dom";

export default function ProposalCard({ jobId }) {
  const [jobdata, setJobData] = useState({});
  const { t } = useTranslation();
  useEffect(() => {
    db.collection("job")
      .doc(jobId)
      .get()
      .then((res) => {
        setJobData(res.data());
      });
    console.log(jobdata);
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col">
          <div>
            {new Date(jobdata?.postTime?.seconds * 1000).toLocaleString()}
          </div>
        </div>
        <Link
          to={`/job/applied/${jobId}`}
          className="col-6 fw-bold text-success "
        >
          {jobdata?.jobTitle}
        </Link>
        <div className="col text muted">{jobdata?.jobCategory}</div>
      </div>
      <hr />
    </div>
  );
}
