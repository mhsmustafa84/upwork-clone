/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavLargScreen() {
  return (
    <>
      <div className="navbar-expand" id="navbarNav-id">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Jobs
            </NavLink>
            <ul className="dropdown-menu">
              <div className="nav-dd-cn"></div>
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
          <li className="nav-item">
            <NavLink className="nav-link" to="/talent">
              Talent
            </NavLink>
            <ul className="dropdown-menu">
              <div className="nav-dd-cn"></div>
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
          <li className="nav-item">
            <NavLink className="nav-link" to="/billing-history">
              Reports
            </NavLink>
            <ul
              id="reports-dd-id"
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <div className="nav-dd-cn"></div>
              <li class="fw-bold py-1 ms-3">FINANCIALS</li>
              <li>
                <a class="dropdown-item ps-3" href="#">
                  Transactions
                </a>
              </li>
              <li class="border-top-cn fw-bold py-1 ms-3">
                MORE REPORTS
                <div>
                  <div class="text-center mt-2">
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
                        class="report-board"
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
                  <p class="fw-normal p-3">
                    Access premium reports such as hourly timesheets, team
                    budgets, weekly summaries and more when you upgrade.
                  </p>
                  <a
                    href=""
                    style={{ color: "#6fda44" }}
                    class="d-block text-center mb-3"
                  >
                    Learn More
                  </a>
                </div>
              </li>
            </ul>
          </li>
          <li className="nav-item me-5">
            <NavLink className="nav-link" to="messages">
              Messages
            </NavLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-question fs-5"></i>
            </a>
          </li>
          <li class="nav-item me-4">
            <a class="nav-link" href="#">
              <i class="far fa-bell fs-5"></i>
            </a>
          </li>
          <li class="nav-item border-start border-secondary ps-2">
            <a class="nav-link" href="#">
              <i class="fas fa-user-plus fs-5"></i>
            </a>
          </li>
          <li class="dropdown">
            <a
              class="nav-link dropdown-toggle"
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
            </a>
            <ul
              id="acc-id"
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <div class="nav-dd-acc-cn"></div>
              <li class="px-4 py-3">
                <div
                  id="acc-btns-id"
                  class="btn-group w-100"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" class="btn">
                    Online
                  </button>
                  <span style={{ padding: "0 1px" }}></span>
                  <button type="button" class="btn">
                    Invisible
                  </button>
                </div>
              </li>
              <li>
                <a class="dropdown-item px-4" href="#">
                  <div class="d-flex align-items-center">
                    <span style={{ marginLeft: "-5px" }}>
                      <i class="fa fa-user-circle fs-3"></i>
                    </span>
                    <div class="acc-cn ms-2">
                      <p>Name</p>
                      <p>Freelancer</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a class="dropdown-item px-4 mb-1" href="#">
                  <div class="d-flex align-items-center">
                    <span style={{ marginLeft: "-5px" }}>
                      <i class="fa fa-user-circle fs-3"></i>
                    </span>
                    <div class="acc-cn ms-2">
                      <p>Name</p>
                      <p>Client</p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a class="dropdown-item px-4" href="#">
                  <span>
                    <i class="fa fa-cog"></i>
                  </span>
                  <span class="ps-2">Settings</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item px-4" href="#">
                  <span>
                    <i class="fas fa-sign-out-alt"></i>
                  </span>
                  <span class="ps-2">Log Out</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
