/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { auth, db, storage } from "../../../firebase";

export default function ProposalCard2({ job }) {
  console.log(job);
  const [jobdata, setJobData] = useState({});
  const { t } = useTranslation();
  useEffect(() => {
    let id = job;
    
    console.log(id);
    db.collection("job")
      .doc(id)
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
        <a href="#" className="col-6 fw-bold text-success ">
          {jobdata?.jobTitle}
        </a>
        <div className="col text muted">{jobdata?.jobCategory}</div>
      </div>
      <hr />
    </div>
  );
}
