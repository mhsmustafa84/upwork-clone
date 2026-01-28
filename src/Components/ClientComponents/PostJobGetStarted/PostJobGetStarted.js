/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import createDocument, { updateJob } from "../../../Network/Network";
import { auth } from "./../../../firebase";
import { useSelector } from "react-redux";

export default function PostJobGetStarted({ start, isStart, setBtns, btns }) {

  const { t } = useTranslation();
  const client = useSelector(state => state.clientData)
  const [job, setJob] = useState({ jobDuration: "" });

  const createJob = () => {
    isStart();
    console.log();
    createDocument("job",
      {
        jobID: "",
        authID: auth.currentUser.uid,
        postTime: "",
        status: "private",
        hired: 0,
        dueDate: "",
        clientCountry: client.location,
        clientAllReviews: client.review,
        clientSpentMoney: client.spentMoney,
        clientPaymentVerified: client.paymentVerified,
        talentJobReview: {},
        clientJobReview: {},
      });
  }

  const getData = ({ target }) => {
    job.jobDuration = target.value;
    setJob({ ...job, jobDuration: job.jobDuration });
  };

  const addData = () => {
    console.log(job);
    const id = localStorage.getItem("docID");
    console.log(id);
    updateJob({ jobID: id, jobDuration: job.jobDuration, jobDurationAr: job.jobDuration === "short term" ? "فترة قصيرة" : "فترة طويلة" }, id);
    setBtns({ ...btns, title: false });
  };

  return (
    <section className=" bg-white border rounded mt-3 pt-4">
      <div className="border-bottom ps-4 pb-3">
        <h4>{t("Getting started")}</h4>
      </div>
      {
        !start
          ?
          <div className="ps-4 my-3">
            <button className="btn bg-upwork" onClick={createJob}>{t("Get Start")}</button>
          </div>
          :
          <>
            <div className="ps-4 my-3">
              <p className="fw-bold">{t("What would you like to do?")}</p>
              <div className=" w-75 my-4 ms-4 d-flex justify-content-between" onInput={getData}>
                <label className="border border-success rounded p-3 text-center">
                  <input type="radio" className="float-end" name="short-long-job" value="short term" />
                  <div><i className="far fa-clock"></i></div>
                  <h5 className="my-3">{t("Short-term or part-time work")}</h5>
                  <div>{t("Less than 30 hrs/week")}</div>
                  <div>{t("Less than 3 months")}</div>
                </label>
                <label className="border border-success rounded p-3 text-center">
                  <input type="radio" className="float-end" name="short-long-job" value="long term" />
                  <div><i className="far fa-calendar-plus"></i></div>
                  <h5 className="my-3">{t("Designated, longer term work")}</h5>
                  <div>{t("More than 30 hrs/week")}</div>
                  <div>{t("3+ months")}</div>
                </label>
              </div>
            </div>
            <div className="ps-4 my-3">
              <button className="btn">
                <Link className="btn border text-success me-4 px-5 fw-bold" to="/home">{t("Cancel")}</Link>
              </button>
              <button className={`btn ${job.jobDuration === "" ? "disabled" : ""}`}>
                <Link className="btn bg-upwork px-5" to="/post-job/title" onClick={addData}>{t("Continue")}</Link>
              </button>
            </div>
          </>
      }
    </section>
  )
}
