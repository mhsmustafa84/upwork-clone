/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jobsDataAction } from "./../../../Store/actions/jobsData";
import { Link } from "react-router-dom";
import ShowMore from "react-show-more-button/dist/module";
import { talentDataAction } from "../../../Store/actions/talentData";
import { updateUserData } from "../../../Network/Network";
import Loader from "../../SharedComponents/Loader/Loader";
import StarsRating from "../../SharedComponents/StarsRating/StarsRating";
import JobProposalsNumber from "./JobProposalsNumber";
import { SearchContext } from "../../../Context/SearchContext";
import "./SectionCenterTalentHome.css";


export default function SectionCenterTalentHome() {

  const jobs = useSelector(state => state.jobsData);
  const lang = useSelector(state => state.lang);
  const [isliked, setisliked] = useState(false)
  const user = useSelector(state => state.talentData);
  const { switchJobs } = useContext(SearchContext);
  const [switchedJobs, setswitchedJobs] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(talentDataAction());
  }, [isliked]);
  useEffect(() => {
    setswitchedJobs([...jobs])
    dispatch(jobsDataAction());
    dispatch(talentDataAction());
  }, [])

  useEffect(() => {

    let tempArr = [];
    if (switchJobs === "Best Matches") {
      jobs.map((e) => e.jobCategory === user.jobCategory && tempArr.push(e))
      setswitchedJobs([...tempArr]);
    }
    else {
      setswitchedJobs([...jobs])
    };
  }, [switchJobs, jobs, user])



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

  return (
    <div className="col-lg-8 col-xs-12">
      {/* <HeadOfCenterSection /> */}
      {
        jobs[0]?.jobID
          ? switchedJobs.map((item, index) => (
            <div key={index}>
              <div className="list-group-item p-4">
                <div className="row align-items-center">
                  <div className="col-lg-9 pt-lg-2">
                    <Link
                      to={{
                        pathname: `/job/${item.jobID}`,
                        state: `${item.jobID}`,
                      }}
                      className="job-title-link fw-bold"
                    >
                      {item?.jobTitle}
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <div className="btn-group float-sm-end">
                      <button
                        type="button"
                        className="btn btn-light dropdown-toggle border border-1 rounded-circle collapsed"
                        data-toggle="collapse"
                        data-target="#collapse"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i
                          onClick={
                            (e) => saveJob(e, item.jobID)
                          }
                          className={`${user.savedJobs?.includes(item.jobID) ? 'fas fa-heart text-upwork' : 'far fa-heart'}`
                          } aria-hidden="true" />

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
                    <span className="fw-bold" id="contract-type">
                      {lang === "ar" ? item?.jobPaymentTypeAr : item?.jobPaymentType}
                    </span>
                    <span> - </span>
                    <span id="experience-level">{lang === "ar" ? item?.jobExperienceLevelAr : item?.jobExperienceLevel}</span>
                    <span> - </span>
                    <span>Est. Budget: </span>
                    <span id="client-budget">${item?.jobBudget}</span> - posted
                <span id="posting-time"> {new Date(item.postTime.seconds * 1000).toLocaleString()}</span>
                  </span>
                </p>
                <ShowMore
                  maxHeight={100}
                  button={
                    <button
                      id="seemorebutton"
                      className="advanced-search-link "
                      style={{ color: "green", position: "absolute", left: 0 }}
                    >
                      more
                </button>
                  }
                >
                  {item?.jobDescription}
                </ShowMore>
                {item?.skills?.map((skill, index) => (
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
                      <JobProposalsNumber jobID={item?.jobID} />
                    </span>
                  </span>
                </p>
                <div style={{ fontSize: "0.85em" }} className="my-lg-1 mb-lg-2">
                  <span className="fw-bold" style={{ color: item.clientPaymentVerified ? "#14bff4" : "red" }}>
                    <i
                      className={`${item.clientPaymentVerified ? "fas fa-check-circle" : "far fa-times-circle"} me-1`}
                      style={{ color: item.clientPaymentVerified ? "#14bff4" : "red" }}
                    />
                    {item.clientPaymentVerified ? "Payment verified" : "Payment unverified"}
                  </span>
                  <span className="text-muted">
                    <span className="mx-2">
                      <StarsRating clientReview={item?.clientAllReviews} index={1} />
                      <StarsRating clientReview={item?.clientAllReviews} index={2} />
                      <StarsRating clientReview={item?.clientAllReviews} index={3} />
                      <StarsRating clientReview={item?.clientAllReviews} index={4} />
                      <StarsRating clientReview={item?.clientAllReviews} index={5} />
                    </span>
                    <span className="fw-bold "> ${item.clientSpentMoney} </span>
                    <span> spent </span>
                    <span className="fw-bold ">
                      <i className="fas fa-map-marker-alt ms-2" /> {item?.clientCountry}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))
          : <div className="d-flex justify-content-center align-items-center" style={{ height: "10vh" }}>
            <Loader />
          </div>
      }
    </div >
  );
}