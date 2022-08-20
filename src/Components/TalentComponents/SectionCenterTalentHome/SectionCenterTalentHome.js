
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jobsDataAction } from "./../../../Store/actions/jobsData";
import { talentDataAction } from "../../../Store/actions/talentData";
import { updateUserData } from "../../../Network/Network";
import Loader from "../../SharedComponents/Loader/Loader";
import StarsRating from "../../SharedComponents/StarsRating/StarsRating";
import JobProposalsNumber from "./JobProposalsNumber";
import { SearchContext } from "../../../Context/SearchContext";
import JobCard from "./JobCard";
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
              <JobCard item={item} saveJob={saveJob} user={user} lang={lang} />
            </div>
          ))
          : <div className="d-flex justify-content-center align-items-center" style={{ height: "10vh" }}>
            <Loader />
          </div>
      }
    </div >
  );
}