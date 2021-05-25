/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import { db } from "../../../firebase";
import { updateJob } from "../../../Network/Network";
import "./PostJobReview.css";
import { useTranslation } from "react-i18next";

export default function PostJobReview() {

  const { t } = useTranslation();

  const [job, setJob] = useState({});

  const id = localStorage.getItem("docID");

  useEffect(() => {
    db.collection("job")
      .doc(id)
      .get()
      .then((doc) => {
        setJob({ ...doc.data() });
        console.log(job);
      })
      .catch((err) => console.log(err));
  }, []);

  const publishJob = () => {
    updateJob(
      { postTime: firebase.firestore.Timestamp.now(), status: "public" },
      id
    );
    localStorage.removeItem("docID");
  };

  const deletePost = () => {
    db.collection("job").doc(id).delete();
    localStorage.removeItem("docID");
  }

  return (
    <>
      <section className=" bg-white border rounded mt-3">
        <div className="ps-4 d-flex border-bottom justify-content-between align-items-center py-4">
          <h4>{t("Review and post")}</h4>
          <Link className="btn bg-upwork me-4 px-5" to="/" onClick={publishJob}>{t("Post Job Now")}</Link>
        </div>
        <div className="px-4 mt-4">
          <h5>{t("Title")}</h5>
          <div>
            <div className="my-4">
              <h6>{t("Title")}</h6>
              <p>{job.jobTitle}</p>
            </div>
            <div>
              <h6>{t("Job Category")}</h6>
              <p>{job.jobCategory}</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-white border rounded mt-4">
        <div className="px-4 mt-4">
          <h5>{t("Description")}</h5>
          <div>
            <div className="my-4">
              <h6>{t("Description")}</h6>
              <p>{job.jobDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-white border rounded mt-4">
        <div className="px-4 mt-4">
          <h5>{t("Details")}</h5>
          <div>
            <div className="my-4">
              <h6>{"Type of Project"}</h6>
              <p>{job.jobType}</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-white border rounded mt-4">
        <div className="px-4 mt-4">
          <h5>{t("Expertise")}</h5>
          <div>
            <div className="my-4">
              <h6>{t("Experience Level")}</h6>
              <p>{job.jobExperienceLevel}</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-white border rounded mt-4">
        <div className="px-4 mt-4">
          <h5>{t("Visibility")}</h5>
          <div>
            <div className="my-4">
              <h6>{t("Job Posting Visibility")}</h6>
              <p>{job.jobVisibility}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border rounded mt-4">
        <div className="px-4 mt-4">
          <h5>{t("Budget")}</h5>
          <div className="d-flex">
            <div className="my-4 w-50">
              <h6>{t("JobHourly or Fixed-Price")}</h6>
              <p>{job.jobPaymentType}</p>
            </div>
            <div className="my-4">
              <h6>{"Budget"}</h6>
              <p>{job.jobBudget}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border rounded mt-4">
        <div className="px-4 mt-4">
          <h5><i className="fas fa-user-plus text-success me-3"></i>{t("Coworkers")}</h5>
          <div className="my-5">
            <h6>{t("Email Addresses")}</h6>
            <input type="text" className="form-control shadow-none" placeholder={t("Comma-separated emails")} />
          </div>
          <div className="my-5">
            <h6>{t("Add a personal message (optional)")}</h6>
            <textarea placeholder={t("Comma-separated emails")} rows="5" className="form-control shadow-none"></textarea>
          </div>
        </div>
        <div className="ps-4 my-3 border-top pt-4">
          <Link className="btn bg-upwork me-4 px-5" to="/" onClick={publishJob}>{t("Post Job Now")}</Link>
          <Link className="btn border text-success px-5" to="/home" onClick={deletePost}>{t("Delete & Exit")}</Link>
        </div>
      </section>
    </>
  )
}
