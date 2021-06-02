/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useHistory } from "react-router-dom";
import firebaseApp from "../../../firebase";
import LanguageList from "../../SharedComponents/LanguageBtn/LanguageList";
import img from "../../../assets/img/icon-user.svg";
import { useDispatch, useSelector } from "react-redux";
import { clientDataAction } from "../../../Store/actions/clientData";

export default function NavLargScreen() {
  const { t } = useTranslation();
  const { push } = useHistory();
  const user = useSelector((state) => state.clientData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clientDataAction());
  }, []);

  const logout = () => {
    firebaseApp
      .auth()
      .signOut()
      .then((res) => {
        console.log(res);
        push("/login");
        window.location.reload();
        localStorage.removeItem('userType');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="navbar-expand" id="navbarNav-id">
        <ul className="navbar-nav align-items-center">
          <li className="nav-item hov-cn">
            <NavLink className="nav-link" to="/home">
              {t("Jobs")}
            </NavLink>
            <ul className="dropdown-menu" style={{ marginTop: "-8px" }}>
              <div className="nav-dd-cn"></div>
              <li>
                <Link className="dropdown-item" to="/home">
                  {t("My Jobs")}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/all-job-posts">
                  {t("All Jobs Posts")}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/all-contracts">
                  {t("All Contracts")}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/post-job">
                  {t("Post a Job")}
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item hov-cn ms-3">
            <NavLink className="nav-link" to="/talent">
              {t("Talent")}
            </NavLink>
            <ul className="dropdown-menu" style={{ marginTop: "-8px" }}>
              <div className="nav-dd-cn"></div>
              <li>
                <Link className="dropdown-item" to="/talent/my-hires">
                  {t("My Hires")}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/talent/saved-talent">
                  {t("Saved Talent")}
                </Link>
              </li>
            </ul>
          </li>
          {/* <li className="nav-item hov-cn">
            <NavLink className="nav-link" to="/transaction-history">
              {t("Reports")}
            </NavLink>
            <ul
              id="reports-dd-id"
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
              style={{ marginTop: "-8px" }}
            >
              <div className="nav-dd-cn"></div>
              <li className="fw-bold py-1 ms-3">{t("FINANCIALS")}</li>
              <li>
                <a className="dropdown-item ps-3" href="#">
                  {t("Transactions")}
                </a>
              </li>
              <li className="border-top-cn fw-bold py-1 ms-3">
                {t("MORE REPORTS")}
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
                    {t("Access premium reports such as hourly timesheets, team budgets, weekly summaries and more when you upgrade.")}
                  </p>
                  <a
                    href="#"
                    style={{ color: "#6fda44" }}
                    className="d-block text-center mb-3"
                  >
                    {t("Learn More")}
                  </a>
                </div>
              </li>
            </ul>
          </li> */}
          <li className="nav-item ms-5 me-3">
            <NavLink className="nav-link" to="/messages">
              <i
                className="far fa-paper-plane fs-5"
                style={{ transform: "scaleX(-1)" }}
              ></i>
            </NavLink>
          </li>
          {/* <li className="nav-item me-5">
            <NavLink className="nav-link" to="/messages">
              {t("Messages")}
            </NavLink>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-question fs-5"></i>
            </a>
          </li> */}
          <li className="nav-item me-3">
            <NavLink to="/notifications" className="nav-link" href="#">
              <i className="far fa-bell fs-5"></i>
            </NavLink>
          </li>
          {/* <li className="nav-item border-start border-secondary ps-2">
            <a className="nav-link" href="#">
              <i className="fas fa-user-plus fs-5"></i>
            </a>
          </li> */}
          <li className="me-3">
            <LanguageList />
          </li>
          <li className="dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img style={{ height: "40px", width: "40px" }} className="rounded-circle bg-white" src={user.profilePhoto ? user.profilePhoto : img} alt="" />
            </a>
            <ul
              id="acc-id"
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <div className="nav-dd-acc-cn"></div>
              {/* <li className="px-4 py-3">
                <div
                  id="acc-btns-id"
                  className="btn-group w-100"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn">
                    {t("Online")}
                  </button>
                  <span style={{ padding: "0 1px" }}></span>
                  <button type="button" className="btn">
                    {t("Invisible")}
                  </button>
                </div>
              </li> */}
              <li>
                <NavLink
                  className="dropdown-item px-4"
                  to="/find-work"
                >
                  <div className="d-flex align-items-center">
                    <span style={{ marginLeft: "-5px" }}>
                      <img style={{ height: "30px", width: "30px" }} className="rounded-circle bg-white" src={user.profilePhoto ? user.profilePhoto : img} alt="" />
                    </span>
                    <div className="acc-cn ms-2">
                      <p>{user?.firstName + " " + user?.lastName}</p>
                      <p>{t("Client")}</p>
                    </div>
                  </div>
                </NavLink>
              </li>
              {/* <li>
                <NavLink className="dropdown-item px-4 mb-1" to="/home">
                  <div className="d-flex align-items-center">
                    <span style={{ marginLeft: "-5px" }}>
                      <i className="fa fa-user-circle fs-3"></i>
                    </span>
                    <div className="acc-cn ms-2">
                      <p>{t("Name")}</p>
                      <p>{t("Client")}</p>
                    </div>
                  </div>
                </NavLink>
              </li> */}
              {/* <li>
                <a className="dropdown-item px-4" href="#">
                  <span>
                    <i className="fa fa-cog"></i>
                  </span>
                  <span className="ps-2">{t("Settings")}</span>
                </a>
              </li> */}
              <li onClick={logout}>
                <a className="dropdown-item px-4" href="#">
                  <span>
                    <i className="fas fa-sign-out-alt"></i>
                  </span>
                  <span className="ps-2">{t("Log Out")}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
