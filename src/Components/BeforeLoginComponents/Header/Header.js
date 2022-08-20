/* eslint-disable */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import LanguageList from '../../SharedComponents/LanguageBtn/LanguageList';
import './Header.css'

export default function Header() {
    let lang = useSelector(state => state.lang);
    const { t } = useTranslation();

    return (
        <header className="py-3 fixed-top bg-white">
            <div className="container">
                <div className="d-flex justify-content-around align-items-center mb-3">
                    <div className="d-flex align-items-center">
                        <div className="d-flex me-5">
                            <Link to="/">
                                <svg id="air-2-5-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.4 30" width="106" height="30" role="img" aria-hidden="true"><path fill="#1D4354" d="M65.4 6.9c-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1 8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm0 12.9c-2.6 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8c2.6 0 4.8 2.1 4.8 4.7 0 2.7-2.1 4.9-4.8 4.9zM83.4 10.8c-2.3 0-4.2 1.9-4.2 4.2v7.7h-3.5V7.4h3.5v2.4c1-1.5 2.7-2.4 4.5-2.4h1.1v3.4h-1.4zM48.2 7.4L50.8 18l2.9-10.6h3.4l-4.4 15.3h-3.5L46.5 12l-2.7 10.7h-3.5L35.9 7.4h3.4L42.2 18l2.7-10.6zM95 14.4c2.6-1.4 4.1-4.1 4.1-7.1h-3.4c0 2.6-2.1 4.6-4.6 4.6h-.5V0h-3.5v22.7h3.5v-7.2h.4c.4 0 .8.2 1 .5l4.9 6.7h4.2L95 14.4z" className="logo-work"></path> <path fill="#6fda44" d="M27.6 6.9c-3.8 0-6.7 2.5-7.9 6.5-1.8-2.7-3.1-5.7-4-8.8h-4.1v10.6c0 2.1-1.7 3.8-3.8 3.8S4 17.3 4 15.2V4.7H0v10.6c0 4.3 3.5 7.9 7.9 7.9s7.9-3.5 7.9-7.9v-1.8c.8 1.7 1.8 3.3 2.9 4.8L16.2 30h4.2l1.8-8.5c1.6 1.1 3.5 1.7 5.5 1.7 4.5 0 8.1-3.6 8.1-8.1-.1-4.5-3.7-8.2-8.2-8.2zm0 12.2c-1.7-.1-3.3-.7-4.6-1.8l.3-1.6v-.1c.3-1.7 1.3-4.6 4.2-4.6 2.2-.1 4 1.7 4.1 3.9.1 2.2-1.7 4-3.9 4.1l-.1.1z"></path></svg>
                            </Link>
                        </div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-0">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link n-l-c-cn dropdown-toggle fs-6" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {t("Find Talent")}
                                            <i className="fa fa-sort-down ms-1 px-2"></i>
                                        </a>
                                        <ul id="find-talent-dd-id" className={`dropdown-menu pb-4 ${lang === 'ar' && "text-end"}`} aria-labelledby="navbarDropdownMenuLink">
                                            <ul className="mt-3 d-inline-block typeOfwork-cn" >
                                                <span className="fw-bold">{t("TYPE OF WORK")}</span>
                                                <li><Link className="dropdown-item" to="dev-it">{t("Development & IT")}</Link></li>
                                                <li><a className="dropdown-item" href="#">{t("Design & Creative")}</a></li>
                                                <li><a className="dropdown-item" href="#">{t("Sales & Marketing")}</a></li>
                                                <li><a className="dropdown-item" href="#">{t("Writing & Translation")}</a></li>
                                                <li><a className="dropdown-item" href="#">{t("Admin & Customer Support")}</a></li>
                                                <li><a className="dropdown-item" href="#">{t("Finance & Accounting")}</a></li>
                                                <li><a className="dropdown-item" href="#">{t("See all specializations")}</a></li>
                                            </ul>
                                            {
                                                lang !== "ar" &&
                                                <div className="mt-3 ms-5 ps-4 d-inline-block waysToHire-cn">
                                                    <span className="fw-bold">{t("WAYS TO HIRE")}</span>
                                                    <div className="d-flex mt-3 pb-5">
                                                        <div>
                                                            <a href="#">
                                                                <p className="fw-bold">{t("Talent Marketplace")}</p>
                                                                <p className="">{t("Post a job and get proposals")}</p>
                                                            </a>
                                                            <a href="#">
                                                                <p className="fw-bold">{t("Talent Scout")}</p>
                                                                <p>{t("Have us find you an expert")}</p>
                                                            </a>
                                                        </div>
                                                        <div className="ms-5">
                                                            <a href="#">
                                                                <p className="fw-bold">{t("Talent Scout")}</p>
                                                                <p className="">{t("Have us find you an expert")}</p>
                                                            </a>
                                                            <a href="#">
                                                                <p className="fw-bold">{t("Enterprise Suite")}</p>
                                                                <p>{t("Revamp the way you hire")}</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className={`border-top mt-5 pt-4 ${lang === 'ar' && "fs-6"}`}>
                                                        <a href="#">{t("Learn how to hire on Upwork")}
                                                            <i className={`fa ${lang === 'ar' ? "fa-arrow-left pe-3 " : "fa-arrow-right"} ms-3 text-success `}></i></a>

                                                    </div>
                                                </div>
                                            }
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link n-l-c-cn dropdown-toggle fs-6" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {t("FindWork")}
                                            <i className="fa fa-sort-down ms-1  px-2"></i>
                                        </a>
                                        <ul id="find-work-dd-id" className="dropdown-menu pb-4" aria-labelledby="navbarDropdownMenuLink">
                                            <div className="d-flex text-end">
                                                <ul className="mt-3 d-inline-block ">
                                                    <span className="fw-bold">{t("TYPE OF WORK")}</span>
                                                    <li><Link className="dropdown-item mt-3" to="freelance-jobs">{t("Development & IT")}</Link></li>
                                                    <li><a className="dropdown-item" href="#">{t("Design & Creative")}</a></li>
                                                    <li><a className="dropdown-item" href="#">{t("Sales & Marketing")}</a></li>
                                                    <li><a className="dropdown-item" href="#">{t("Writing & Translation")}</a></li>
                                                </ul>
                                                <ul className="d-inline-block ms-5">
                                                    <li><a className="dropdown-item mt-5 pt-4" href="#">{t("Admin & Customer Support")}</a></li>
                                                    <li><a className="dropdown-item" href="#">{t("Finance & Accounting")}</a></li>
                                                    <li><a className="dropdown-item" href="#">{t("See all specializations")}</a></li>
                                                </ul>
                                            </div>
                                            <div className="mt-3 ps-4 d-inline-block">
                                                <div className="border-top pt-3">
                                                    <a href="#" className={` pt-4 ${lang === 'ar' && "fs-6"}`}>
                                                        {t("Learn how to get hired on Upwork")}
                                                        <i className={`fa ${lang === 'ar' ? "fa-arrow-left pe-3 " : "fa-arrow-right"} ms-3 text-success `}></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link n-l-c-cn dropdown-toggle fs-6" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {t("Why Upwork")}
                                            <i className="fa fa-sort-down ms-1  px-2"></i>
                                        </a>
                                        <ul id="why-work-dd-id" className={`dropdown-menu mt-3 ${lang === 'ar' && "fs-6 text-end"}`} aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item py-2 mt-3" href="#">{t("Success Stories")}</a></li>
                                            <li><a className="dropdown-item py-2" href="#">{t("Reviews")}</a></li>
                                            <li><a className="dropdown-item py-2" href="#">{t("Learn")}</a></li>
                                            <li><a className="dropdown-item py-2" href="#">{t("Forums")}</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="d-flex justify-content-between col-7">
                        <form id="search-form-id" className="d-flex">
                            <button className="btn position-relative search-btnn-cn ">
                                <i className="fa fa-search search-icon-cn"></i>
                            </button>
                            <div className="nav-item dropdown search-type-cn ">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-sort-down search-icon-cn"></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item px-4" href="#">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 mb-3"><i className="fas fa-user fs-6"></i></span>
                                            <div className="acc-cn ms-2">
                                                <p>{t("Talent")}</p>
                                                <p>{t("Hire professionals and agencies")}</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item px-4" href="#">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 mb-3"><i className="fas fa-clipboard-list fs-6"></i></span>
                                            <div className="acc-cn ms-2">
                                                <p>{t("Projects ")}<span id="search-type-projects-new" className="rounded-pill">{t("NEW")}</span>
                                                </p>
                                                <p>{t("Buy pre-defined projects")}</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item px-4" href="#">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 mb-3"><i className="fas fa-briefcase fs-6"></i></span>
                                            <div className="acc-cn ms-2">
                                                <p>{t("Jobs")}</p>
                                                <p>{t("Apply to jobs posted by clients")}</p>
                                            </div>
                                        </div>
                                    </a>
                                </ul>
                            </div>
                            <input className="form-control ms-1 ps-5 py-1 search-inputt-cn" type="search" placeholder={t("Search")} aria-label="Search" />
                        </form>
                        <div className="col-md-5 border-start ps-2 d-flex j justify-content-end">
                            <Link className={`btn login-btn-cn ${lang === 'ar' && "fs-6"}`} to="/login">{t("Log In")}</Link>
                            <Link className={`btn signup-btn-cn px-3 py-2 ${lang === 'ar' && "fs-6"}`} to="/sign-up">{t("Sign Up")}</Link>
                            <LanguageList />
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-nav-cn pt-2 pb-1">
                <div className="container">
                    <ul className="d-flex align-items-center ms-0 ps-0">
                        <li><a href="#" className="fs-6">{t("Development & IT")}</a></li>
                        <li><a href="#" className="fs-6">{t("Design & Creative")}</a></li>
                        <li><a href="#" className="fs-6">{t("Sales & Marketing")}</a></li>
                        <li><a href="#" className="fs-6">{t("Writing & Translation")}</a></li>
                        <li><a href="#" className="fs-6">{t("Admin & Customer Support")}</a></li>
                        <li><a href="#" className="fs-6">{t("Finance & Accounting")}</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
