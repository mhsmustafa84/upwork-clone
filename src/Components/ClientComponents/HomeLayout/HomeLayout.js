/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clientDataAction } from "./../../../Store/actions/clientData";
import { useTranslation } from "react-i18next";
import { auth, db } from "../../../firebase";
import { clientJobsAction } from "../../../Store/actions/clientJobAction";
import "./HomeLayout.css";
import j1 from "../../../assets/svg/jobs1.svg";
import j2 from "../../../assets/svg/jobs2.svg";
import j3 from "../../../assets/svg/jobs3.svg";
import j4 from "../../../assets/svg/jobs4.svg";
import s1 from "../../../assets/img/jobslide1.jpg";
import s2 from "../../../assets/img/jobslide2.jpg";
import s3 from "../../../assets/img/jobslide2.jpg";
import Loader from "../../SharedComponents/Loader/Loader";

export default function HomeLayout() {
  const { t } = useTranslation();
  const user = useSelector(state => state.clientData);
  const jobs = useSelector(state => state.clientJobs);
  const dispatch = useDispatch();
  const [proposals, setProposals] = useState(0);

  useEffect(async () => {
    dispatch(clientDataAction());
    dispatch(clientJobsAction("authID", "==", auth.currentUser.uid));
    await db.collection("job").doc(jobs[0]?.docID).collection("proposals").get().then(res => {
      const length = res.docs.length;
      setProposals(length)
    })
  }, []);


  const job = jobs[0]?.data;

  return (
    <>
      {
        user.firstName
          ?
          <div className="container container-fluid-sm my-lg-4">
            <div className="row px-5 my-5">
              <div className="col-lg-8 col-xs-12">
                <div className="row my-3">
                  <div className="col-4">
                    <h4>{user.firstName + " " + user.lastName}</h4>
                  </div>
                </div>
                <div className="list-group-item py-lg-4">
                  <h4 className="d-inline-block">{t("My Postings")}</h4>
                  <Link to="/all-job-posts" className="float-sm-end mt-0">
                    {t("All Posts")}
                  </Link>
                </div>
                {jobs ? (
                  <div className="list-group-item">
                    <div>
                      <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-10 col-xs-9">
                          <h4
                            className="m-0-bottom"
                            id="all-postings-list-opening-title-0"
                          >
                            <Link to={`/review-proposal/${jobs[0]?.docID}`}>{job?.jobTitle}</Link>
                          </h4>
                          <p
                            className="m-xs-bottom m-0 text-muted ng-binding"
                            id="all-postings-list-created-by-block-0"
                          >
                            Posted
                        <span className="ms-2">
                              {new Date(
                                job?.postTime.seconds * 1000
                              ).toLocaleString()}
                            </span>
                          </p>
                          <p className="m-xs-bottom m-0-top ng-binding">
                            <span
                              className="text-capitalize"
                              id="all-postings-list-opening-type-0"
                            >
                              {job?.jobPaymentType} - {job?.status}
                            </span>
                          </p>
                        </div>
                        <div className="d-block col-sm-2 col-xs-3">
                        </div>
                        <div className="d-block col-sm-2 col-xs-3">
                          {/* <div className="fw-bold">0</div>
                          <div className="text-muted">Messaged</div> */}
                        </div>
                        <div className="d-block col-sm-2 col-xs-3">
                          {/* <div className="fw-bold">
                            <span>{proposals}</span>
                          </div>
                          <div className="text-muted">Proposals</div> */}
                          {/* <div className="fw-bold">{job?.hired}</div>
                          <div className="text-muted">Hired</div> */}
                        </div>

                        <div className="d-block col-sm-1 col-xs-3 btn-group float-sm-end ">
                          <button
                            type="button"
                            className="btn btn-light dropdown-toggle border border-1 rounded-circle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-h " />
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item" to={`/review-proposal/${job?.jobID}`}>
                                View Proposals
                              </Link>
                            </li>
                            <li>
                              <button className="dropdown-item" onClick={() => { db.collection("job").doc(job?.jobID).update({ status: "private" }) }} >
                                Make Private
                              </button>
                            </li>

                            <li>
                              <Link className="dropdown-item" to={`/job-details/${job?.jobID}`}>
                                View Job posting
                              </Link>
                            </li>

                            <li>
                              <button className="dropdown-item" onClick={() => { db.collection("job").doc(job?.jobID).delete() }}>
                                Remove posting
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="list-group-item">
                    <div className="row align-items-center">
                      <div className="col-lg-9 p-lg-3">No posts yet</div>
                    </div>
                  </div>
                )}

                <div className="card mt-5">
                  <div className="card-body">
                    <h5 className="card-title">{t("How it works")}</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex">
                      <div className="col-4">
                        <img src={j1} width="150em" />
                      </div>
                      <div className="col-6">
                        <div className="media-body">
                          <h4 className="m-0-top-bottom">
                            {t("1. Post a job to get free quotes")}
                          </h4>
                          <p className="m-xs-top-bottom">
                            {t(
                              "Write a clear, detailed description of your job to share with qualified freelancers. Start receiving proposals in less than 24 hours"
                            )}
                        .
                      </p>
                          <a
                            href="https://www.upwork.com/hiring/writing-an-awesome-job-post/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {t("View great job post examples")}
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item d-flex">
                      <div className="col-4">
                        <img src={j2} width="150em" />
                      </div>
                      <div className="col-6">
                        <div className="media-body">
                          <h4 className="m-0-top-bottom">
                            {t("2. Evaluate freelancers and hire")}
                          </h4>
                          <p className="m-xs-top-bottom">
                            {t(
                              "Review proposals or invite qualified freelancers to your project. Quickly chat live or video call with favorites, and offer a contract to the best match."
                            )}
                          </p>
                          <a
                            href="https://www.upwork.com/hiring/education/how-to-hire-freelancers/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {t("Review tips on finding talent")}
                          </a>
                          <br />
                          <a
                            href="https://www.upwork.com/hiring/startup/how-to-choose-and-interview-freelancer/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {t("Prepare to interview freelancers")}
                          </a>
                          <div className="ng-hide">
                            <a href="#">{t("Contact your Talent Specialist")}</a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item d-flex">
                      <div className="col-4">
                        <img src={j3} width="150em" />
                      </div>
                      <div className="col-6">
                        <div className="media-body">
                          <h4 className="m-0-top-bottom">
                            {t("3. Work together")}
                          </h4>
                          <p className="m-xs-top-bottom">
                            {t("Use")}{" "}
                            <a
                              href="https://www.upwork.com/hiring/for-clients/upwork-messages-your-one-stop-collaboration-tool/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {t("Upwork Messages")}
                            </a>{" "}
                            {t(
                              "to securely chat, share files, and collaborate on projects. View progress against project goals with the"
                            )}
                            <a
                              href="https://www.upwork.com/hiring/for-clients/whats-the-work-diary-and-why-to-use-it/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              {t("Work Diary")}
                            </a>{" "}
                            {t("tool")} .
                      </p>
                          <a
                            href="https://www.upwork.com/i/trust-safety-mission//#/clients"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {t("See tips for staying safe on Upwork")}
                          </a>
                        </div>
                      </div>
                    </li>{" "}
                    <li className="list-group-item d-flex">
                      <div className="col-4">
                        <img src={j4} width="150em" />
                      </div>
                      <div className="col-6">
                        <div className="media-body">
                          <h4 className="m-0-top-bottom">
                            {t("4. Pay and invoice through Upwork")}
                          </h4>
                          <p className="m-xs-top-bottom">
                            {t(
                              "Get invoices and make payments after reviewing time billed or approving milestones. With"
                            )}
                            <a
                              href="https://www.upwork.com/hiring/for-clients/how-to-manage-your-first-project-with-upwork-payment-protection/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {t("Upwork Payment Protection")}
                            </a>
                        , {t("only pay for work you authorize")} .
                      </p>
                          <a
                            href="https://www.upwork.com/i/pricing/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {t("Learn about Upwork pricing")}
                          </a>
                          <br />
                          <a
                            href="https://www.upwork.com/hiring/startup/how-much-to-pay-freelancer/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {t("Determine how much to pay freelancers")}
                          </a>
                        </div>
                      </div>
                    </li>{" "}
                  </ul>
                  <div className="card-body">
                    <h4 className="card-link">{t("Question?")}</h4>
                    <p>
                      {t("Visit")} <a className="card-link">{t("help center")}</a>{" "}
                      {t("to contact")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col d-none d-lg-block">
                <div className="my-lg-1">
                  <Link to="/post-job" className="btn bg-upwork">
                    {t("Post a job")}
                  </Link>
                </div>

                <div className="my-3 mt-4">
                  <div className="card">
                    <div className="" alt="...">
                      <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src={s1} className="d-block w-100" alt="..." />
                          </div>
                          <div className="carousel-item">
                            <img src={s2} className="d-block w-100" alt="..." />
                          </div>
                          <div className="carousel-item">
                            <img src={s3} className="d-block w-100" alt="..." />
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">{t("Previous")}</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">{t("Next")}</span>
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{t("Web Design")}</h5>
                      <p className="card-text">
                        {t("You think you might like help")}
                      </p>
                      <a href="#" className="btn bg-upwork ">
                        {t("learn More")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
            <Loader />
          </div>
      }
    </>
  );
}


