/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { auth } from "../../../firebase";
import { useHistory } from 'react-router-dom';
import LanguageList from "../../SharedComponents/LanguageBtn/LanguageList";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { talentDataAction } from "../../../Store/actions/talentData";
import img from "../../../assets/img/icon-user.svg";


export default function NavLargScreen() {

  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { push } = useHistory();
  let lang = useSelector(state => state.lang);
  const user = useSelector(state => state.talentData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(talentDataAction());
  }, []);


  const logout = () => {
    auth.signOut()
      .then((res) => {
        console.log(res);
        push("/login");
        window.location.reload();
        localStorage.removeItem('userType');
      }).catch((error) => {
        console.log(error.message);
      })
  }

  return (
    <>
      <div className="navbar-expand" id="navbarNav-id">
        <ul className="navbar-nav align-items-center">
          <li className="nav-item hov-cn ">
            <NavLink
              className={
                `nav-link
                ${lang === 'ar' && "fs-6"}
                ${pathname === "/saved-jobs" || pathname === "/proposals" ? "active" : ""}`
              }
              to="/find-work"
            >
              {t("FindWork")}
            </NavLink>
            <ul className={`dropdown-menu findWork-cn ${lang === 'ar' && 'text-end'}`} style={{ marginTop: "-8px" }}>
              <div className="nav-dd-cn"></div>
              <li>
                <Link className={`dropdown-item  ${lang === 'ar' && "fs-6"}`} to="/find-work">
                  {t("FindWork")}
                </Link>
              </li>
              <li>
                <Link className={`dropdown-item  ${lang === 'ar' && "fs-6"}`} to="/saved-jobs">
                  {t("Saved Jobs")}
                </Link>
              </li>
              <li>
                <Link className={`dropdown-item  ${lang === 'ar' && "fs-6"}`} to="/proposals">
                  {t("Proposals")}
                </Link>
              </li>
              <li>
                <Link className={`dropdown-item  ${lang === 'ar' && "fs-6"}`} to={`/profile/${auth.currentUser?.uid}`}>
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
          <li className="nav-item hov-cn mx-3">
            <NavLink
              className={
                `nav-link
                ${lang === 'ar' && "fs-6"}
                ${pathname === "/all-contract" || pathname === "/offers" ? "active" : ""}`
              }
              to="/my-jobs"
            >
              {t("My Jobs")}
            </NavLink>
            <ul className={`dropdown-menu myJobs-cn ${lang === 'ar' && 'text-end'}`} style={{ marginTop: "-8px" }}>
              <div className="nav-dd-cn"></div>
              <li>
                <Link className={`dropdown-item  ${lang === 'ar' && "fs-6"}`} to="/my-jobs">
                  {t("My Jobs")}
                </Link>
              </li>
              <li>
                <Link className={`dropdown-item  ${lang === 'ar' && "fs-6"}`} to="/all-contract">
                  {t("All Contracts")}
                </Link>
              </li>
              <li>
                <Link className={`dropdown-item  ${lang === 'ar' && "fs-6"}`} to="/offers">
                  {t("Offerss")}
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item hov-cn">
            <NavLink className={`nav-link reports-cn ${lang === 'ar' && "fs-6"}`} to="/overview">
              {t("Reports")}
            </NavLink>
            <ul className={`dropdown-menu Reports-cn ${lang === 'ar' && 'text-end'}`} style={{ marginTop: "-8px" }}>
              <div className="nav-dd-cn"></div>
              <li>
                <Link className={`dropdown-item  ${lang === 'ar' && "fs-6"}`} to="/overview">
                  {t("Overview")}
                </Link>
              </li>
              {/* <li>
                <Link className={`dropdown-item  ${lang === 'ar' && "fs-6"}`} to="/my-reports">
                  {t("My Reports")}
                </Link>
              </li> */}
              <li>
                <Link className={`dropdown-item  ${lang === 'ar' && "fs-6"}`} to="/life-time-billing">
                  {t("Lifetime Billings by Client")}
                </Link>
              </li>
              {/* <li>
                <Link className={`dropdown-item  ${lang === 'ar' && "fs-6"}`} to="/connects-history">
                  {t("Connects History")}
                </Link>
              </li> */}
              {/* <li>
                <Link className={`dropdown-item  ${lang === 'ar' && "fs-6"}`} to="/transaction-history">
                  {t("Transaction History")}
                </Link>
              </li> */}
              {/* <li><a className="dropdown-item" href="#">Certificate of Earnings</a></li> */}
            </ul>
          </li>
          {/* <li className="nav-item me-5">
            <NavLink className={`nav-link  ${lang === 'ar' && "fs-6"}`} to="/messages">
              {t("Messages")}
            </NavLink>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-question fs-5"></i>
            </a>
          </li> */}
          <li className="nav-item ms-5 me-3">
            <NavLink className="nav-link" to="/messages">
              <i
                className="far fa-paper-plane fs-5"
                style={{ transform: "scaleX(-1)" }}
              ></i>
            </NavLink>
          </li>
          <li className="nav-item me-2">
            <NavLink to="/notifications" className="nav-link">
              <i className="far fa-bell fs-5"></i>
            </NavLink>
          </li>
          <li className="ms-1 me-3">
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
                  <button type="button" className={`btn ${lang === 'ar' && "fs-5 "}`}>
                    {t("Online")}
                  </button>
                  <span style={{ padding: "0 1px" }}></span>
                  <button type="button" className={`btn invisible-cn ${lang === 'ar' && "fs-6"}`} >
                    {t("Invisible")}
                  </button>
                </div>
              </li> */}
              <li>
                <NavLink className={`dropdown-item px-4 ${lang === 'ar' && "text-end"}`} to="/find-work">
                  <div className="d-flex align-items-center">
                    <span style={{ marginLeft: "-5px" }}>
                      <img style={{ height: "30px", width: "30px" }} className="rounded-circle bg-white" src={user.profilePhoto ? user.profilePhoto : img} alt="" />
                    </span>
                    <div className="acc-cn ms-2">
                      <p className={`${lang === 'ar' && "fs-6"}`} >{user?.firstName + " " + user?.lastName}</p>
                      <p className={`${lang === 'ar' && "fs-6"}`} >{t("Freelancer")}</p>
                    </div>
                  </div>
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className={`dropdown-item px-4 mb-1 ${lang === 'ar' && "text-end"}`}
                  to="/home"
                >
                  <div className="d-flex align-items-center">
                    <span style={{ marginLeft: "-5px" }}>
                      <i className={`fa fa-user-circle fs-3 ${lang === 'ar' && "px-3"}`}></i>
                    </span>
                    <div className="acc-cn ms-2">
                      <p className={`${lang === 'ar' && "fs-6"}`} >{t("Name")}</p>
                      <p className={`${lang === 'ar' && "fs-6"}`} >{t("Client")}</p>
                    </div>
                  </div>
                </NavLink>
              </li> */}
              {/* <li>
                <Link className={`dropdown-item px-4 ${lang === 'ar' && "fs-6 text-end"}`} to="settings">
                  <span>
                    <i className={`fa fa-cog ${lang === 'ar' && "px-3 fs-5"}`}></i>
                  </span>
                  <span className="ps-2">{t("Settings")}</span>
                </Link>
              </li> */}
              <li>
                <button className={`dropdown-item px-4 ${lang === 'ar' && "fs-6 text-end"}`} onClick={logout}>
                  <span>
                    <i className={`fas fa-sign-out-alt ${lang === 'ar' && "px-3 fs-5"}`}></i>
                  </span>
                  <span className="ps-2">{t("Log Out")}</span>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
