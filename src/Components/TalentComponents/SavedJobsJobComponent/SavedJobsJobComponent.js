/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { db } from "../../../firebase";
import { talentDataAction } from "../../../Store/actions/talentData";

export default function SavedJobsJobComponent({ jobId }) {
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
              <i
                className="far fa-heart"
                aria-hidden="true"
                onclick="this.classList.toggle('fas')"
              />
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
      {jobdata?.skills?.map((item) => (
        <button
          type="button"
          className="btn btn-secondary btn-sm rounded-pill skills"
        >
          {item}
        </button>
      ))}

      <p style={{ fontSize: "0.9em" }} className="my-lg-1">
        <span className="text-muted">
          <span>{t("Proposals")}: </span>
          <span className="fw-bold ">{t("Less than")} </span>
          <span className="fw-bold " id="proposals-numbers">
            {t("5")}
          </span>
        </span>
      </p>
      <p style={{ fontSize: "0.85em" }} className="my-lg-1 mb-lg-2">
        <span className="fw-bold " style={{ color: "#14bff4" }}>
          <i className="fas fa-check-circle primary" />
          {t("Payment verified")}
        </span>
        <span className="text-muted">
          <span>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </span>
          <span className="fw-bold "> ${t("0")}</span>
          <span> {t("spent")}</span>
          <span className="fw-bold ">
            <i className="fas fa-map-marker-alt" /> {t("United States")}
          </span>
        </span>
      </p>
    </div>
  );
}
