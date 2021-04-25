/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./HomeLayout.css";
import j1 from "../../../assets/svg/jobs1.svg";
import j2 from "../../../assets/svg/jobs2.svg";
import j3 from "../../../assets/svg/jobs3.svg";
import j4 from "../../../assets/svg/jobs4.svg";
import { Link } from "react-router-dom";
import s1 from "../../../assets/img/jobslide1.jpg";
import s2 from "../../../assets/img/jobslide2.jpg";
import s3 from "../../../assets/img/jobslide2.jpg";

export default function HomeLayout() {
  return (
    <>
      <div className="container-md container-fluid-sm my-lg-4">
        <div className="row">
          <div className="col-1 d-none d-lg-block">.</div>
          <div className="col-lg-8 col-xs-12">
            <div className="row">
              <div className="col-4">
                <h2>Ahmed Gamal</h2>
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
              <h4>My Postings</h4>
              <a className="float-sm-end mt-0">All Posts</a>
            </div>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-lg-9 pt-lg-3">
                  <a
                    href="#"
                    id="job-title-home-page "
                    className="link-dark job-title-hover"
                  >
                    <p className="fw-bold">
                      Create xml from wordpress listing plug in
                    </p>
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
                    >
                      <i
                        className="far fa-heart"
                        aria-hidden="true"
                        onclick="this.classNameList.toggle('fas')"
                      ></i>
                    </button>
                  </div>

                  <div className="btn-group float-sm-end px-lg-1">
                    <button
                      type="button"
                      className="btn btn-light dropdown-toggle border border-1 rounded-circle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="far fa-thumbs-down"></i>
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
                    Fixed Price
                  </span>
                  <span>-</span>
                  <span id="experience-level">Expert</span>
                  <span>-</span>
                  <span>Est. Budget:</span>
                  <span id="client-budget">$200</span>- posted
                  <span id="posting-time">4 Hours ago</span>
                </span>
              </p>
              <p id="job-description">
                Hi there - I'm looking to get help with my webinar presentation
                design. It's about 97 slides in total. I have examples of how
                I'd like certain slides to look, whereas others I'll leave it up
                to you. The demographic is adults
                <span id="dots">...</span>
                <span id="more">
                  who want more out of life ages 25-35. Objective: Take the
                  content on my presentation and design it so it gives viewers
                  trust and appeal. Guidelines: 1. I'd like the colors to be
                  dark, not light. 2. I'd also like it to look young, fresh and
                  hip and easily legible. 3. I have specific slides I'd like to
                  look a certain way - I'll attach them for the chosen partner.
                  4. I am expecting revisions; I'll pay you hourly for
                  revisions, and I'll pay you a flat rate for the entire project
                  to start. Resources: 1. I'll provide you all the
                  graphics/assets and any explanations you need 2. I'll provide
                  you with a sample webinar presentation that you can base your
                  design ideas off of Accountabilities: 1. I'll likely have a
                  few revisions as this is a somewhat complex presentation that
                  I'll be doing live. Just want to set that expectation upfront.
                  2. Ask me when you aren't sure of the answer 3. I'd like it
                  back within 5 days Consequences: I have another presentation
                  to be designed and if this one goes well with you, I'll hire
                  you for the other one too.
                </span>
                <span>
                  <button
                    onclick="seemorebuttonFUNC()"
                    id="seemorebutton"
                    className="advanced-search-link"
                  >
                    more
                  </button>
                </span>
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
            </div>
            <div className="card mt-5">
              <div className="card-body">
                <h5 className="card-title">How it works</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex">
                  <div className="col-4">
                    <img src={j1} width="150em" />
                  </div>
                  <div className="col-6">
                    <div className="media-body">
                      <h4 className="m-0-top-bottom">
                        1. Post a job to get free quotes
                      </h4>
                      <p className="m-xs-top-bottom">
                        Write a clear, detailed description of your job to share
                        with qualified freelancers. Start receiving proposals in
                        less than 24 hours.
                      </p>
                      <a
                        href="https://www.upwork.com/hiring/writing-an-awesome-job-post/"
                        target="_blank"
                        rel="noopener"
                        data-ng-click="sbdEventLogger.clickHowItWorksViewExamples()"
                      >
                        View great job post examples
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
                        2. Evaluate freelancers and hire
                      </h4>
                      <p className="m-xs-top-bottom">
                        Review proposals or invite qualified freelancers to your
                        project. Quickly chat live or video call with favorites,
                        and offer a contract to the best match.
                      </p>
                      <a
                        href="https://www.upwork.com/hiring/education/how-to-hire-freelancers/"
                        target="_blank"
                        rel="noopener"
                        data-ng-click="sbdEventLogger.clickHowItWorksReviewTips()"
                      >
                        Review tips on finding talent
                      </a>
                      <br />
                      <a
                        href="https://www.upwork.com/hiring/startup/how-to-choose-and-interview-freelancer/"
                        target="_blank"
                        rel="noopener"
                        data-ng-click="sbdEventLogger.clickHowItWorksPrepareForInterview()"
                      >
                        Prepare to interview freelancers
                      </a>
                      <contact-talent-specialist data-talent-specialist-url="urls.upworkPlus.talentSpecialist">
                        <div className="ng-hide" data-ng-show="isEnabled">
                          <a href="javascript:" data-ng-click="triggerModal()">
                            Contact your Talent Specialist
                          </a>
                        </div>
                      </contact-talent-specialist>
                    </div>
                  </div>
                </li>
                <li className="list-group-item d-flex">
                  <div className="col-4">
                    <img src={j3} width="150em" />
                  </div>
                  <div className="col-6">
                    <div className="media-body">
                      <h4 className="m-0-top-bottom">3. Work together</h4>
                      <p className="m-xs-top-bottom">
                        Use
                        <a
                          href="https://www.upwork.com/hiring/for-clients/upwork-messages-your-one-stop-collaboration-tool/"
                          target="_blank"
                          rel="noopener"
                        >
                          Upwork Messages
                        </a>{" "}
                        to securely chat, share files, and collaborate on
                        projects. View progress against project goals with the
                        <a
                          href="https://www.upwork.com/hiring/for-clients/whats-the-work-diary-and-why-to-use-it/"
                          target="_blank"
                          rel="noopener"
                        >
                          Work Diary
                        </a>{" "}
                        tool.
                      </p>
                      <a
                        href="https://www.upwork.com/i/trust-safety-mission//#/clients"
                        target="_blank"
                        rel="noopener"
                        data-ng-click="sbdEventLogger.clickHowItWorksSeeTips()"
                      >
                        See tips for staying safe on Upwork
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
                        4. Pay and invoice through Upwork
                      </h4>
                      <p className="m-xs-top-bottom">
                        Get invoices and make payments after reviewing time
                        billed or approving milestones. With
                        <a
                          href="https://www.upwork.com/hiring/for-clients/how-to-manage-your-first-project-with-upwork-payment-protection/"
                          target="_blank"
                          rel="noopener"
                        >
                          Upwork Payment Protection
                        </a>
                        , only pay for work you authorize.
                      </p>
                      <a
                        href="https://www.upwork.com/i/pricing/"
                        target="_blank"
                        rel="noopener"
                        data-ng-click="sbdEventLogger.clickHowItWorksLearnAboutPricing()"
                      >
                        Learn about Upwork pricing
                      </a>
                      <br />
                      <a
                        href="https://www.upwork.com/hiring/startup/how-much-to-pay-freelancer/"
                        target="_blank"
                        rel="noopener"
                        data-ng-click="sbdEventLogger.clickHowItWorksDetermineHowMuchPay()"
                      >
                        Determine how much to pay freelancers
                      </a>
                    </div>
                  </div>
                </li>{" "}
              </ul>
              <div className="card-body">
                <h4 className="card-link">Question?</h4>
                <p>
                  Visit <a className="card-link">help center</a> to contact
                </p>
              </div>
            </div>
          </div>
          <div className="col d-none d-lg-block">
            <div className="my-lg-1">
              <Link to="/post-job" className="btn bg-upwork">Post a job</Link>
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
                      <span className="visually-hidden">Previous</span>
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
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Web Design</h5>
                  <p className="card-text">You think you might like help</p>
                  <a href="#" className="btn bg-upwork ">
                    learn More
                  </a>
                </div>
              </div>
            </div>

            <ul
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
                  4 submitted proposals
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
                  60 availabale connects
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
                  <i className="fas fa-stopwatch"></i> Track time with the
                  desktop app
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
