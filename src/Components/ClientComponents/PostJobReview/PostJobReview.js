/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import { db } from "../../../firebase";
import { updateJob } from "../../../Network/Network";
import "./PostJobReview.css";
import { useTranslation } from "react-i18next";
import Loader from "../../SharedComponents/Loader/Loader";

export default function PostJobReview() {

  const { t } = useTranslation();

  const [job, setJob] = useState(null);

  const id = localStorage.getItem("docID");

  useEffect(() => {
    db.collection("job")
      .doc(id)
      .onSnapshot((doc) => {
        setJob({ ...doc.data() });
        console.log(job);
      })
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
      {
        job !== null
          ? <>
            <section className=" bg-white border rounded mt-3">
              <div className="ps-4 d-flex border-bottom justify-content-between align-items-center py-4">
                <h4>{t("Review and post")}</h4>
                <Link className="btn bg-upwork me-4 px-5" to="/" onClick={publishJob}>{t("Post Job Now")}</Link>
              </div>
              <div className="px-4 mt-4">
                <h5>{t("Title")}</h5>
                <div>
                  <div className="my-4">
                    <p>{job.jobTitle}</p>
                  </div>
                  <div>
                    <h6 className="text-muted">{t("Job Category")}</h6>
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
                    <h6 className="text-muted">{"Type of Project"}</h6>
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
                    <h6 className="text-muted">{t("Experience Level")}</h6>
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
                    <h6 className="text-muted">{t("Job Posting Visibility")}</h6>
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
                    <h6 className="text-muted">{t("JobHourly or Fixed-Price")}</h6>
                    <p>{job.jobPaymentType}</p>
                  </div>
                  <div className="my-4">
                    <h6 className="text-muted">{"Budget"}</h6>
                    <p>{job.jobBudget}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white border rounded mt-4">
              <div className="ps-4 my-3 py-2">
                <Link className="btn bg-upwork me-4 px-5" to="/" onClick={publishJob}>{t("Post Job Now")}</Link>
                <Link className="btn border text-success px-5" to="/home" onClick={deletePost}>{t("Delete & Exit")}</Link>
              </div>
            </section>
          </>
          : <Loader />
      }
    </>
  )
}
