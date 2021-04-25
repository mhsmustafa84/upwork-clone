/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HeaderSearchSm from "../../SharedComponents/HeaderSearchSm/HeaderSearchSm";
import { Link, useHistory } from "react-router-dom";
import firebaseApp from "../../../firebase";
// import { useDispatch, useSelector } from 'react-redux';
// import { changeLayout } from '../../../Store/actions/changeLayout';

export default function NavSmallScreen() {
  const { push } = useHistory();
  const logout = () => {
    firebaseApp
      .auth()
      .signOut()
      .then((res) => {
        console.log(res);
        push("/login");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="collapse d-lg-none" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="mt-3">
            <HeaderSearchSm />
          </li>
          <li className="dropdown px-3">
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
                  fillRule="evenodd"
                  fill="white"
                  d="M7 12.6a5.6 5.6 0 0 1-4.64-2.47C2.94 8.78 4.49 7.88 7 7.88s4.06.9 4.64 2.25A5.6 5.6 0 0 1 7 12.6M7 1.45a2.76 2.76 0 1 1 0 5.53 2.76 2.76 0 0 1 0-5.53M7 0a7 7 0 1 0 .02 14.02A7 7 0 0 0 7 0"
                ></path>
              </svg>{" "}
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
                  <span style={{ padding: "0 1px" }}></span>
                  <button type="button" className="btn">
                    Invisible
                  </button>
                </div>
              </li>
              <li>
                <Link
                  className="dropdown-item px-4"
                  to="/find-work"
                  // onClick={changeLayOut}
                >
                  <div className="d-flex align-items-center">
                    <span style={{ marginLeft: "-5px" }}>
                      <i className="fa fa-user-circle fs-3"></i>
                    </span>
                    <div className="acc-cn ms-2">
                      <p>Name</p>
                      <p>Freelancer</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link className="dropdown-item px-4 mb-1" to="/home">
                  <div className="d-flex align-items-center">
                    <span style={{ marginLeft: "-5px" }}>
                      <i className="fa fa-user-circle fs-3"></i>
                    </span>
                    <div className="acc-cn ms-2">
                      <p>Name</p>
                      <p>Client</p>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown px-3">
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
              className="dropdown-menu sub-drop-cn"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <Link className="dropdown-item" to="/home">
                  My Jobs
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/all-job-posts">
                  All Jobs Posts
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/all-contracts">
                  All Contracts
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/bring-your-own-talent">
                  Bring Your Own Talent
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/post-job">
                  Post a Job
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown px-3">
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
              className="dropdown-menu sub-drop-cn"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <Link className="dropdown-item" to="/talent/my-hires">
                  My Hires
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/talent/saved-talent">
                  Saved Talent
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown px-3">
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
              className="dropdown-menu sub-drop-cn"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li
                className="fw-bold py-1 text-light"
                style={{ marginLeft: "-15px" }}
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
                style={{ marginLeft: "-15px" }}
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
                      <circle cx="32" cy="66.4" fill="#6fda44" r="5.6"></circle>
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
                    href="#"
                    style={{ color: "#6fda44" }}
                    className="d-block text-center mb-3"
                  >
                    Learn More
                  </a>
                </div>
              </li>
            </ul>
          </li>
          <li className="nav-item px-3">
            <Link className="nav-link mt-2 pt-3 border-top-cn" to="/c/messages">
              Messages
            </Link>
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
          <li className="nav-item pb-2" onClick={logout}>
            <a className="dropdown-item mt-2 pt-3 border-top-cn" href="#">
              <span>
                <i className="fas fa-sign-out-alt"></i>
              </span>
              <span className="ps-3">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
