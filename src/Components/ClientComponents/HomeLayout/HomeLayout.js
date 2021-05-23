/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clientDataAction } from "./../../../Store/actions/clientData";
import { useTranslation } from "react-i18next";
import { auth } from "../../../firebase";
import { clientJobsAction } from "../../../Store/actions/clientJobAction";
import "./HomeLayout.css";
import j1 from "../../../assets/svg/jobs1.svg";
import j2 from "../../../assets/svg/jobs2.svg";
import j3 from "../../../assets/svg/jobs3.svg";
import j4 from "../../../assets/svg/jobs4.svg";
import s1 from "../../../assets/img/jobslide1.jpg";
import s2 from "../../../assets/img/jobslide2.jpg";
import s3 from "../../../assets/img/jobslide2.jpg";

export default function HomeLayout() {
  const { t } = useTranslation();
  const user = useSelector((state) => state.clientData);
  const jobs = useSelector((state) => state.clientJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clientDataAction());
    dispatch(clientJobsAction("job", "authID", "==", auth.currentUser.uid));
    console.log(jobs);
  }, []);

  return (
    <>
      <div className="container-md container-fluid-sm my-lg-4">
        <div className="row">
          <div className="col-1 d-none d-lg-block">.</div>
          <div className="col-lg-8 col-xs-12">
            <div className="row my-3">
              <div className="col-4">
                <h4>{user.firstName + " " + user.lastName}</h4>
              </div>
              <div className="col-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#37a000"
                  className="bi bi-person-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  <path
                    fillRule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </div>
            </div>

            <div className="list-group-item py-lg-4">
              <h4 className="d-inline-block">{t("My Postings")}</h4>
              <Link to="/all-job-posts" className="float-sm-end mt-0">
                {t("All Posts")}
              </Link>
            </div>
            {jobs !== null ? (
              <div className="list-group-item">
                <div className="row align-items-center">
                  <div className="col-lg-9 pt-lg-3">
                    <a
                      id="job-title-home-page "
                      className="link-dark job-title-hover"
                    >
                      <p className="fw-bold">{jobs[0]?.jobTitle}</p>
                    </a>
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
                        data-bs-toggle="dropdown"
                      >
                        <i className="fas fa-ellipsis-h" aria-hidden="true"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            View Proposals
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Invite freelancers
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Make Private
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share job posting
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Upgrade to Featured
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View Job posting
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit posting
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Reuse posting
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Remove posting
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: "0.9em" }}>
                  <span className="text-muted">
                    <span className="fw-bold" id="contract-type">
                      {jobs[0]?.jobPaymentType}
                    </span>
                    <span> - </span>
                    <span id="experience-level">
                      {jobs[0]?.jobExperienceLevel}
                    </span>
                    <span>-</span>
                    <span>Est. Budget: </span>
                    <span id="client-budget">${jobs[0]?.jobBudget}</span> -
                    posted
                    <span id="posting-time">
                      {" "}
                      {new Date(
                        jobs[0]?.postTime?.seconds * 1000
                      ).toLocaleString()}
                    </span>
                  </span>
                </p>
                <p id="job-description">{jobs[0]?.jobDescription}</p>
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

            <div className="my-3">
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

            {/* <ul
              className="list-group sidebar-homebage-ul mb-lg-3 d-none d-lg-block d-xl-none"
              style={{ fontSize: "0.9em" }}
            >
              <li
                className="list-group-item sidebar-homebage-ul-li"
                aria-current="true"
              >
                <a
                  href="#"
                  className="list-group-item-action advanced-search-link"
                  aria-current="true"
                >
                  {t("4 submitted proposals")}
                </a>
              </li>
              <li
                className="list-group-item sidebar-homebage-ul-li"
                aria-current="true"
              >
                <a
                  href="#"
                  className="list-group-item-action advanced-search-link"
                  aria-current="true"
                >
                  {t("60 availabale connects")}
                </a>
              </li>
              <li
                className="list-group-item sidebar-homebage-ul-li"
                aria-current="true"
              >
                <a
                  href="#"
                  className="list-group-item-action advanced-search-link"
                  aria-current="true"
                >
                  <i className="fas fa-stopwatch"></i> {t("Track time with the desktop app")}
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
}
