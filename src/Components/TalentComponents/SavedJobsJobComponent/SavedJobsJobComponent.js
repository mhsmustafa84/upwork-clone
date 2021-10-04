/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { db } from "../../../firebase";
import { talentDataAction } from "../../../Store/actions/talentData";
import { updateUserData } from "../../../Network/Network";
import JobProposalsNumber from "../SectionCenterTalentHome/JobProposalsNumber";
import StarsRating from "../../SharedComponents/StarsRating/StarsRating";

export default function SavedJobsJobComponent({ jobId , setisliked ,  isliked}) {
  const { t } = useTranslation();
  const [jobdata, setJobData] = useState({});
  const user = useSelector((state) => state.talentData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(talentDataAction());
    db.collection("job")
      .doc(jobId)
      .get()
      .then((res) => {
        setJobData(res.data());
      });
    // console.log(jobdata);
  }, []);


  useEffect(() => {
    dispatch(talentDataAction());
  }, [isliked])

  
  const saveJob = (e, id) => {
    setisliked(!isliked)
    if (e.target.className === 'far fa-heart') {
      updateUserData("talent", { savedJobs: [...user?.savedJobs, id] });
      e.target.className = 'fas fa-heart text-upwork'
    }
    else {
      user?.savedJobs?.forEach((item, index) => {
        if (item === id) {
          user?.savedJobs?.splice(index, 1);
          updateUserData("talent", { savedJobs: [...user?.savedJobs] });
          e.target.className = 'far fa-heart'
        }
      })
    }
  }
  const star = (clientReview, index) => {
    return <StarsRating clientReview={clientReview} index={index} />
  }
  return (
    <div className="list-group-item">
      <div className="row align-items-center">
        <div className="col-lg-9 pt-lg-3">
          <Link
            to={`/job/${jobId}`}
            id="job-title-home-page "
            className="link-dark job-title-hover "
          >
            <p className="fw-bold ">{jobdata?.jobTitle}</p>
          </Link>
        </div>
        <div className="col-lg-3">
          <div className="btn-group float-sm-end px-lg-1">
            <button
              type="button"
              className="btn btn-light dropdown-toggle border border-1 rounded-circle collapsed"
              data-toggle="collapse"
              data-target="#collapse"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <i onClick={(e) => saveJob(e, jobdata.jobID)} className={`${user.savedJobs.includes(jobdata.jobID) ? 'fas fa-heart text-upwork' : 'far fa-heart'}`} aria-hidden="true" />
            </button>
          </div>
          <div className="btn-group float-sm-end  px-lg-1">
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  RSS
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Atom
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p style={{ fontSize: "0.9em" }}>
        <span className="text-muted">
          <span className="fw-bold " id="contract-type">
            {jobdata?.jobPaymentType}
          </span>
          <span>-</span>
          <span id="experience-level">{jobdata?.jobExperienceLevel}</span>
          <span>-</span>
          <span>{t("Est. Budget")}:</span>
          <span id="client-budget">${jobdata?.jobBudget}</span>- {t("posted")}
          <span id="posting-time">
            {" "}
            {new Date(jobdata?.postTime?.seconds * 1000).toLocaleString()}
          </span>
        </span>
      </p>
      <p id="job-description">
        {jobdata?.jobDescription}
        <span>
          <button
            onclick="seemorebuttonFUNC()"
            id="seemorebutton"
            className="advanced-search-link "
          >
            {t("more")}
          </button>
        </span>
      </p>
      {jobdata?.skills?.map((skill, index) => (
                  <button
                    key={index}
                    type="button"
                    className="btn text-light btn-sm rounded-pill skills mx-1"
                    style={{ backgroundColor: "#9b9d9f" }}
                  >
                    {skill}
                  </button>
                ))}

                <p style={{ fontSize: "0.9em" }} className="my-lg-1 py-2">
                  <span className="text-muted">
                    <span>Proposals: </span>
                    <span className="fw-bold " id="proposals-numbers">
                      <JobProposalsNumber jobID={jobId} />
                    </span>
                  </span>
                </p>
                <div style={{ fontSize: "0.85em" }} className="my-lg-1 mb-lg-2">
                  <span className="fw-bold" style={{ color: jobdata.clientPaymentVerified ? "#14bff4" : "red" }}>
                    <i
                      className={`${jobdata.clientPaymentVerified ? "fas fa-check-circle" : "far fa-times-circle"} me-1`}
                      style={{ color: jobdata.clientPaymentVerified ? "#14bff4" : "red" }}
                    />
                    {jobdata.clientPaymentVerified ? "Payment verified" : "Payment unverified"}
                  </span>
                  <span className="text-muted">
                    <span className="mx-2">
                      {star(jobdata.clientAllReviews, 1)}
                      {star(jobdata.clientAllReviews, 2)}
                      {star(jobdata.clientAllReviews, 3)}
                      {star(jobdata.clientAllReviews, 4)}
                      {star(jobdata.clientAllReviews, 5)}
                    </span>
                    <span className="fw-bold "> ${jobdata.clientSpentMoney} </span>
                    <span> spent </span>
                    <span className="fw-bold ">
                      <i className="fas fa-map-marker-alt ms-2" /> {jobdata?.clientCountry}
                    </span>
                  </span>
                </div>
    </div>
  );
}