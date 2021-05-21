/* eslint-disable */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import firebaseApp from "../../../firebase";
import { useHistory } from 'react-router-dom';
import LanguageList from "../../SharedComponents/LanguageBtn/LanguageList";
import { useTranslation } from "react-i18next";  


export default function NavLargScreen() {
  const { t }=useTranslation();
  const { push } = useHistory();
  const logout = () => {
    firebaseApp.auth().signOut()
      .then((res) => {
        console.log(res);
        push("/login");
        window.location.reload();
      }).catch((error) => {
        console.log(error.message);
      })
  }

  return (
    <>
      <div className="navbar-expand" id="navbarNav-id">
        <ul className="navbar-nav">
          <li className="nav-item hov-cn">
            <NavLink className="nav-link" to="/find-work">
              {t("Find Work")}
            </NavLink>
            <ul className="dropdown-menu">
              <div className="nav-dd-cn"></div>
              <li>
                <Link className="dropdown-item" to="/find-work">
                  {t("Find Work")}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/saved-jobs">
                  {t("Saved Jobs")}
                </Link>
              </li>
              {/* <li>
                <Link className="dropdown-item" to="/proposals">
                  Proposals
                </Link>
              </li> */}
              <li>
                <Link className="dropdown-item" to="/profile">
                  {t("Profile")}
                </Link>
              </li>
              {/* <li>
                <Link className="dropdown-item" to="/my-stats">
                  My Stats
                </Link>
              </li> */}
            </ul>
          </li>
          <li className="nav-item hov-cn">
            <NavLink className="nav-link" to="/my-jobs">
              {t("My Jobs")}
            </NavLink>
            <ul className="dropdown-menu">
              <div className="nav-dd-cn"></div>
              <li>
                <Link className="dropdown-item" to="/my-jobs">
                  {t("My Jobs")}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/all-contract">
                  {t("All Contracts")}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/work-diary">
                  {t("Work Diary")}
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item hov-cn">
            <NavLink className="nav-link" to="/overview">
              {t("Reports")}
            </NavLink>
            <ul className="dropdown-menu">
              <div className="nav-dd-cn"></div>
              <li>
                <Link className="dropdown-item" to="/overview">
                  {t("Overview")}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/my-reports">
                  {t("My Reports")}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/life-time-billing">
                  {t("Lifetime Billings by Client")}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/connects-history">
                  {t("Connects History")}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/transaction-history">
                  {t("Transaction History")}
                </Link>
              </li>
              {/* <li><a className="dropdown-item" href="#">Certificate of Earnings</a></li> */}
            </ul>
          </li>
          <li className="nav-item me-5">
            <NavLink className="nav-link" to="/messages">
              {t("Messages")}
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-question fs-5"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="far fa-bell fs-5"></i>
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/messages">
              <i
                className="far fa-paper-plane fs-5"
                style={{ transform: "scaleX(-1)" }}
              ></i>
            </Link>
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
                    {t("Online")}
                  </button>
                  <span style={{ padding: "0 1px" }}></span>
                  <button type="button" className="btn">
                    {T("Invisible")}
                  </button>
                </div>
              </li>
              <li>
                <NavLink className="dropdown-item px-4" to="/find-work">
                  <div className="d-flex align-items-center">
                    <span style={{ marginLeft: "-5px" }}>
                      <i className="fa fa-user-circle fs-3"></i>
                    </span>
                    <div className="acc-cn ms-2">
                      <p>{T("Name")}</p>
                      <p>{T("Freelancer")}</p>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="dropdown-item px-4 mb-1"
                  // onClick={changeLayOut}
                  to="/home"
                >
                  <div className="d-flex align-items-center">
                    <span style={{ marginLeft: "-5px" }}>
                      <i className="fa fa-user-circle fs-3"></i>
                    </span>
                    <div className="acc-cn ms-2">
                      <p>{T("Name")}</p>
                      <p>{T("Client")}</p>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <Link className="dropdown-item px-4" to="settings">
                  <span>
                    <i className="fa fa-cog"></i>
                  </span>
                  <span className="ps-2">{T("Settings")}</span>
                </Link>
              </li>
              <li>
                <button className="dropdown-item px-4" onClick={logout}>
                  <span>
                    <i className="fas fa-sign-out-alt"></i>
                  </span>
                  <span className="ps-2">{T("Log Out")}</span>
                </button>
              </li>
            </ul>
          </li>
          <li>
              <LanguageList />
          </li>
        </ul>
      </div>
    </>
  );
}
