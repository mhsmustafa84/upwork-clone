import React from "react";
import "./Header.css"
export default function Header() {
  return (
    <>
      <header className="nav-bg-cn py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <button id="search-btn-res-id" className="btn d-none">
            <i className="fa fa-search text-white"></i>
          </button>

          <div className="d-flex">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 102.4 30"
                width="106"
                height="30"
                role="img"
                aria-hidden="true"
                style={{marginTop: "5px"}}
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

            <form id="search-form-id" className="d-flex ms-4">
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
                  className="dropdown-menu"
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
                className="form-control ms-1 ps-5 py-1 border-0 text-white search-input-cn"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>

          <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-0">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-expand" id="navbarNav-id">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link active dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Jobs
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <div className="nav-dd-cn"></div>
                    <li>
                      <a className="dropdown-item" href="#">
                        My Jobs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        All Job Posts
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        All Contracts
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bring Your Own Talent
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Post a Job
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Talent
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <div className="nav-dd-cn"></div>
                    <li>
                      <a className="dropdown-item" href="#">
                        My Hires
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Saved Talent
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Reports
                  </a>
                  <ul
                    id="nav-reports-id"
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <div className="nav-dd-cn"></div>
                    <li className="fw-bold py-1 ps-3">FINANCIALS</li>
                    <li>
                      <a className="dropdown-item ps-5" href="#">
                        Transactions
                      </a>
                    </li>
                    <li className="border-top fw-bold py-1 ps-3">
                      MORE REPORTS
                      <div>
                        <div className="text-center mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 145 130"
                            width="80"
                            height="80"
                            role="img"
                          >
                            <g fill="#e0e0e0">
                              <path d="M103.5 96.6H90.9l4.4 28h12.6zM41.5 96.6h12.6l-4.4 28H37.1z"></path>
                            </g>
                            <path
                              d="M140.8 91.1H4.2c-.6 0-1-.4-1-1V6.4c0-.6.4-1 1-1h136.6c.6 0 1 .4 1 1v83.7c0 .5-.4 1-1 1z"
                              fill="#1d4354"
                              className="report-board"
                            ></path>
                            <path
                              d="M32 67.3c-.2 0-.5-.1-.6-.3-.4-.4-.4-.9 0-1.3l27.5-28.5c.3-.3.8-.4 1.1-.1l25.5 15.5 23.2-23.2c.4-.4.9-.4 1.3 0s.4.9 0 1.3L86.3 54.4c-.3.3-.8.4-1.1.1L59.6 39.1l-27 28c-.1.1-.4.2-.6.2z"
                              fill="#fff"
                            ></path>
                            <circle
                              cx="109.4"
                              cy="30.1"
                              fill="#6fda44"
                              r="5.6"
                            ></circle>
                            <circle
                              cx="84.6"
                              cy="52.6"
                              fill="#6fda44"
                              r="5.6"
                            ></circle>
                            <circle
                              cx="59.8"
                              cy="38.6"
                              fill="#6fda44"
                              r="5.6"
                            ></circle>
                            <circle
                              cx="32"
                              cy="66.4"
                              fill="#6fda44"
                              r="5.6"
                            ></circle>
                            <path
                              d="M143.5 98.4H1.5c-.6 0-1-.4-1-1V85.5c0-.6.4-11-1h142c.6 0 1 .4 1 1v11.9c0 .6-.4 1-1 1z"
                              fill="#6fda44"
                            ></path>
                          </svg>
                        </div>
                        <p className="fw-normal p-3">
                          Access premium reports such as hourly timesheets, team
                          budgets, weekly summaries and more when you upgrade.
                        </p>
                        <a
                          style={{color: "#6fda44"}}
                          className="d-block text-center mb-3"
                        >
                          Learn More
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link" href="#">
                    Messages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fas fa-question fs-5"></i>
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#">
                    <i className="far fa-bell fs-5"></i>
                  </a>
                </li>
                <li className="nav-item border-start border-secondary ps-2">
                  <a className="nav-link" href="#">
                    <i className="fas fa-user-plus fs-5"></i>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
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
                      style={{marginTop: "-10px"}}
                      >
                      <path
                        fill-rule="evenodd"
                        fill="white"
                        d="M7 12.6a5.6 5.6 0 0 1-4.64-2.47C2.94 8.78 4.49 7.88 7 7.88s4.06.9 4.64 2.25A5.6 5.6 0 0 1 7 12.6M7 1.45a2.76 2.76 0 1 1 0 5.53 2.76 2.76 0 0 1 0-5.53M7 0a7 7 0 1 0 .02 14.02A7 7 0 0 0 7 0"
                      ></path>
                    </svg>
                  </a>
                  <ul
                    id="acc-id"
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <div className="nav-dd-acc-cn"></div>
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
                        <span style={{padding:"0 1px"}}></span>
                        <button type="button" className="btn">
                          Invisible
                        </button>
                      </div>
                    </li>
                    <li>
                      <a className="dropdown-item px-4" href="#">
                        <div className="d-flex align-items-center">
                          <span style={{marginLeft: "-5px"}}>
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
                        <span style={{marginLeft: "-5px"}}>
                            <i className="fa fa-user-circle fs-3"></i>
                          </span>
                          <div className="acc-cn ms-2">
                            <p>Name</p>
                            <p>Client</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item px-4" href="#">
                        <span>
                          <i className="fa fa-cog"></i>
                        </span>
                        <span className="ps-2">Settings</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item px-4" href="#">
                        <span>
                          <i className="fas fa-sign-out-alt"></i>
                        </span>
                        <span className="ps-2">Log Out</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* <!--  navigation menu collapse in small screens --> */}
        <div className="container">
          <div className="collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
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
                      className="dropdown-menu"
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
                    style={{marginTop: "-10px"}}
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
                  className="dropdown-menu"
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
                      <span style={{padding:" 0 1px"}}></span>
                      <button type="button" className="btn">
                        Invisible
                      </button>
                    </div>
                  </li>
                  <li>
                    <a className="dropdown-item px-4" href="#">
                      <div className="d-flex align-items-center">
                      <span style={{marginLeft: "-5px"}}>
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
                      <span style={{marginLeft: "-5px"}}>
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
                  Jobs
                  <i className="fa fa-sort-down text-white float-end"></i>
                </a>
                <ul
                  id="jobs-dd-id"
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
                      All Jobs Posts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      All Contracts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Bring Your Own Talent
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Post a Job
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
                  Talent
                  <i className="fa fa-sort-down text-white float-end"></i>
                </a>
                <ul
                  id="talent-dd-id"
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      My Hires
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Saved Talent
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
                  <li
                    className="fw-bold py-1 text-light"
                    style={{marginLeft: "-15px"}}
                    >
                    FINANCIALS
                  </li>
                  <li>
                    <a className="dropdown-item ps-3" href="#">
                      Transactions
                    </a>
                  </li>
                  <li
                    className="border-top-cn fw-bold py-1 text-light"
                    style={{marginLeft: "-15px"}}
                  >
                    MORE REPORTS
                    <div>
                      <div className="text-center mt-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 145 130"
                          width="80"
                          height="80"
                          role="img"
                        >
                          <g fill="#e0e0e0">
                            <path d="M103.5 96.6H90.9l4.4 28h12.6zM41.5 96.6h12.6l-4.4 28H37.1z"></path>
                          </g>
                          <path
                            d="M140.8 91.1H4.2c-.6 0-1-.4-1-1V6.4c0-.6.4-1 1-1h136.6c.6 0 1 .4 1 1v83.7c0 .5-.4 1-1 1z"
                            fill="#1d4354"
                            className="report-board"
                          ></path>
                          <path
                            d="M32 67.3c-.2 0-.5-.1-.6-.3-.4-.4-.4-.9 0-1.3l27.5-28.5c.3-.3.8-.4 1.1-.1l25.5 15.5 23.2-23.2c.4-.4.9-.4 1.3 0s.4.9 0 1.3L86.3 54.4c-.3.3-.8.4-1.1.1L59.6 39.1l-27 28c-.1.1-.4.2-.6.2z"
                            fill="#fff"
                          ></path>
                          <circle
                            cx="109.4"
                            cy="30.1"
                            fill="#6fda44"
                            r="5.6"
                          ></circle>
                          <circle
                            cx="84.6"
                            cy="52.6"
                            fill="#6fda44"
                            r="5.6"
                          ></circle>
                          <circle
                            cx="59.8"
                            cy="38.6"
                            fill="#6fda44"
                            r="5.6"
                          ></circle>
                          <circle
                            cx="32"
                            cy="66.4"
                            fill="#6fda44"
                            r="5.6"
                          ></circle>
                          <path
                            d="M143.5 98.4H1.5c-.6 0-1-.4-1-1V85.5c0-.6.4-11-1h142c.6 0 1 .4 1 1v11.9c0 .6-.4 1-1 1z"
                            fill="#6fda44"
                          ></path>
                        </svg>
                      </div>
                      <p className="fw-normal p-3">
                        Access premium reports such as hourly timesheets, team
                        budgets, weekly summaries and more when you upgrade.
                      </p>
                      <a
                        href=""
                        style={{color: "#6fda44"}}
                        className="d-block text-center mb-3"
                      >
                        Learn More
                      </a>
                    </div>
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
                  Invite a Coworker
                  <i
                    className="fas fa-user-plus float-end"
            style={{transform:"scaleX(-1)"}}
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
      </header>
      {/* <!-- end navbar --> */}
    </>
  );
}
