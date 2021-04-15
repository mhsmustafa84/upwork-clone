/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function LoginHeader() {
  return (
    <header className="nav-bg-cn py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* <!-- collapse search icon button --> */}
        <button id="search-btn-res-id" className="btn d-none">
          <i className="fa fa-search text-white"></i>
        </button>

        {/* <!-- upwork logo --> */}
        <div className="d-flex">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 102.4 30"
              width="106"
              height="30"
              role="img"
              aria-hidden="true"
              style={{ marginTop: "5px" }}
            >
              <path
                fill="#fff"
                d="M65.4 6.9c-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1 8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm0 12.9c-2.6 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8c2.6 0 4.8 2.1 4.8 4.7 0 2.7-2.1 4.9-4.8 4.9zM83.4 10.8c-2.3 0-4.2 1.9-4.2 4.2v7.7h-3.5V7.4h3.5v2.4c1-1.5 2.7-2.4 4.5-2.4h1.1v3.4h-1.4zM48.2 7.4L50.8 18l2.9-10.6h3.4l-4.4 15.3h-3.5L46.5 12l-2.7 10.7h-3.5L35.9 7.4h3.4L42.2 18l2.7-10.6zM95 14.4c2.6-1.4 4.1-4.1 4.1-7.1h-3.4c0 2.6-2.1 4.6-4.6 4.6h-.5V0h-3.5v22.7h3.5v-7.2h.4c.4 0 .8.2 1 .5l4.9 6.7h4.2L95 14.4z"
                className="logo-work"
              ></path>
              <path
                fill="#6fda44"
                d="M27.6 6.9c-3.8 0-6.7 2.5-7.9 6.5-1.8-2.7-3.1-5.7-4-8.8h-4.1v10.6c0 2.1-1.7 3.8-3.8 3.8S4 17.3 4 15.2V4.7H0v10.6c0 4.3 3.5 7.9 7.9 7.9s7.9-3.5 7.9-7.9v-1.8c.8 1.7 1.8 3.3 2.9 4.8L16.2 30h4.2l1.8-8.5c1.6 1.1 3.5 1.7 5.5 1.7 4.5 0 8.1-3.6 8.1-8.1-.1-4.5-3.7-8.2-8.2-8.2zm0 12.2c-1.7-.1-3.3-.7-4.6-1.8l.3-1.6v-.1c.3-1.7 1.3-4.6 4.2-4.6 2.2-.1 4 1.7 4.1 3.9.1 2.2-1.7 4-3.9 4.1l-.1.1z"
              ></path>
            </svg>
          </a>
        </div>

        {/* <!-- search form --> */}

        {/* <!--  navigation menu collapse in small screens --> */}
        <div className="container">
          <div className="collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ul">
              <li className="nav-item">
                <form className="d-flex mt-1">
                  <button className="btn position-relative search-btn-cn">
                    <i className="fa fa-search text-white search-icon-cn"></i>
                  </button>
                  <div className="nav-item dropdown search-type-cn">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-sort-down text-white search-icon-cn"></i>
                    </a>
                    <ul
                      className="dropdown-menu ul"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a className="dropdown-item px-4" href="#">
                        <div className="d-flex align-items-center">
                          <span className="me-2 mb-3">
                            <i className="fas fa-user fs-6"></i>
                          </span>
                          <div className="acc-cn ms-2">
                            <p>Talent</p>
                            <p>Hire professionals and agencies</p>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item px-4" href="#">
                        <div className="d-flex align-items-center">
                          <span className="me-2 mb-3">
                            <i className="fas fa-clipboard-list fs-6"></i>
                          </span>
                          <div className="acc-cn ms-2">
                            <p>
                              Projects{" "}
                              <span
                                id="search-type-projects-new"
                                className="rounded-pill"
                              >
                                NEW
                              </span>
                            </p>
                            <p>Buy pre-defined projects</p>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item px-4" href="#">
                        <div className="d-flex align-items-center">
                          <span className="me-2 mb-3">
                            <i className="fas fa-briefcase fs-6"></i>
                          </span>
                          <div className="acc-cn ms-2">
                            <p>Jobs</p>
                            <p>Apply to jobs posted by clients</p>
                          </div>
                        </div>
                      </a>
                    </ul>
                  </div>
                  <input
                    className="form-control ps-4 py-1 border-0 text-white search-input-cn"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </li>
              <li className="nav-item dropdown px-3">
                <a
                  className="nav-link dropdown-toggle mt-4 pt-4 border-top-cn"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                    width="40"
                    height="40"
                    role="img"
                    style={{ marginTop: "-10px" }}
                  >
                    <path
                      fill-rule="evenodd"
                      fill="white"
                      d="M7 12.6a5.6 5.6 0 0 1-4.64-2.47C2.94 8.78 4.49 7.88 7 7.88s4.06.9 4.64 2.25A5.6 5.6 0 0 1 7 12.6M7 1.45a2.76 2.76 0 1 1 0 5.53 2.76 2.76 0 0 1 0-5.53M7 0a7 7 0 1 0 .02 14.02A7 7 0 0 0 7 0"
                    ></path>
                  </svg>
                  Name
                  <i className="fa fa-sort-down text-white float-end"></i>
                </a>
                <ul
                  id="acc-id"
                  className="dropdown-menu ul"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="px-4 py-3">
                    <div
                      id="acc-btns-id"
                      className="btn-group w-100"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" className="btn">
                        Online
                      </button>
                      <span style={{ padding: "0 1px" }}></span>
                      <button type="button" className="btn">
                        Invisible
                      </button>
                    </div>
                  </li>
                  <li>
                    <a className="dropdown-item px-4" href="#">
                      <div className="d-flex align-items-center">
                        <span style={{ marginLeft: "-5px" }}>
                          <i className="fa fa-user-circle fs-3"></i>
                        </span>
                        <div className="acc-cn ms-2">
                          <p>Name</p>
                          <p>Freelancer</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item px-4 mb-1" href="#">
                      <div className="d-flex align-items-center">
                        <span style={{ marginLeft: "-5px" }}>
                          <i className="fa fa-user-circle fs-3"></i>
                        </span>
                        <div className="acc-cn ms-2">
                          <p>Name</p>
                          <p>Client</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown px-3">
                <a
                  className="nav-link active dropdown-toggle mt-2 pt-3 border-top-cn"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Find Work
                  <i className="fa fa-sort-down text-white float-end"></i>
                </a>
                <ul
                  id="find-work-dd-id"
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Find Work
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Saved Jobs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Proposals
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      My Stats
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Upwork Readiness Test
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      My Project Dashboard
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown px-3">
                <a
                  className="nav-link dropdown-toggle mt-2 pt-3 border-top-cn"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Jobs
                  <i className="fa fa-sort-down text-white float-end"></i>
                </a>
                <ul
                  id="my-jobs-dd-id"
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      My Jobs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      All Contracts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Work Diary
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown px-3">
                <a
                  className="nav-link dropdown-toggle mt-2 pt-3 border-top-cn"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Reports
                  <i className="fa fa-sort-down text-white float-end"></i>
                </a>
                <ul
                  id="reports-dd-id"
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      My Reports
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Lifetime Billings by Client
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Connects History
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Transaction History
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Certificate of Earnings
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link mt-2 pt-3 border-top-cn" href="#">
                  Messages
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link mt-2 pt-3 border-top-cn" href="#">
                  Help
                  <i className="fas fa-question float-end"></i>
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link mt-2 pt-3 border-top-cn" href="#">
                  Notification
                  <i className="far fa-bell float-end"></i>
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link mt-2 pt-3 border-top-cn" href="#">
                  Direct Contracts
                  <i
                    className="far fa-paper-plane float-end"
                    style={{ transform: "scaleX(-1)" }}
                  ></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="dropdown-item mt-2 pt-3 border-top-cn" href="#">
                  <span>
                    <i className="fa fa-cog"></i>
                  </span>
                  <span className="ps-3">Settings</span>
                </a>
              </li>
              <li className="nav-item pb-2">
                <a className="dropdown-item mt-2 pt-3 border-top-cn" href="#">
                  <span>
                    <i className="fas fa-sign-out-alt"></i>
                  </span>
                  <span className="ps-3">Log Out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
