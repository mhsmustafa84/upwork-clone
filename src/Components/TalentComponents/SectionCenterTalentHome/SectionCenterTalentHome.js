/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeadOfCenterSection from "./../HeadOfCenterSection/HeadOfCenterSection";
import "./SectionCenterTalentHome.css";
import { jobsDataAction } from "./../../../Store/actions/jobsData";
import { Link } from "react-router-dom";

export default function SectionCenterTalentHome() {
  const jobs = useSelector((state) => state.jobsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobsDataAction());
    console.log(jobs);
  }, []);
  return (
    <div className="col-lg-8 col-xs-12">
      <HeadOfCenterSection />
      {jobs.map((item) => (
        <div>
          <div className="list-group-item">
            <div className="row align-items-center">
              <div className="col-lg-9 pt-lg-2">
                <Link to="/job" className="job-title-link fw-bold">
                  {item?.jobTitle}
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
                    <i className="far fa-heart" aria-hidden="true" />
                  </button>
                </div>
                <div className="btn-group float-sm-end  px-lg-1">
                  <button
                    type="button"
                    className="btn btn-light dropdown-toggle border border-1 rounded-circle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="far fa-thumbs-down" />
                  </button>
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
                <span className="fw-bold" id="contract-type">
                  {item?.jobPaymentType}
                </span>
                <span> - </span>
                <span id="experience-level">{item?.jobExperienceLevel}</span>
                <span> - </span>
                <span>Est. Budget: </span>
                <span id="client-budget">{item?.jobBudget}</span> - posted
                <span id="posting-time"> 4 Hours ago</span>
              </span>
            </p>
            <p id="job-description">
              {item.jobDescription?.length > 300
                ? item.jobDescription?.substr(1, 300)
                : item.jobDescription}
              {item.jobDescription?.length > 300 && (
                <>
                  <span id="dots">...</span>
                  <span id="more">{item.jobDescription}</span>
                  <span className="advanced-search-link ">more</span>
                </>
              )}
            </p>
            <button
              type="button"
              className="btn btn-secondary btn-sm rounded-pill skills"
            >
              Training
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm rounded-pill skills"
            >
              Education presentation
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm rounded-pill skills"
            >
              Marketing
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm rounded-pill skills"
            >
              Microsof PowerPoint
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm rounded-pill skills"
            >
              Html
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm rounded-pill skills"
            >
              Css
            </button>
            <p style={{ fontSize: "0.9em" }} className="my-lg-1">
              <span className="text-muted">
                <span>Proposals: </span>
                <span className="fw-bold ">Less than </span>
                <span className="fw-bold " id="proposals-numbers">
                  5
                </span>
              </span>
            </p>
            <p style={{ fontSize: "0.85em" }} className="my-lg-1 mb-lg-2">
              <span className="fw-bold" style={{ color: "#14bff4" }}>
                <i className="fas fa-check-circle primary me-1" />
                Payment verified
              </span>
              <span className="text-muted">
                <span className="mx-2">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
                <span className="fw-bold "> $0 </span>
                <span> spent </span>
                <span className="fw-bold ">
                  <i className="fas fa-map-marker-alt ms-2" /> United States
                </span>
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
