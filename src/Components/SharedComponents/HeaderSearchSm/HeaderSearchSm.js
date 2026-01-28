/* eslint-disable */
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function HeaderSearchSm(props) {
    const { t } = useTranslation();

    return (
        <>
            <form className="d-flex mt-1">
                {
                    props.bg
                        ? <button className="btn">
                            <i className="fa fa-search text-white search-icon-cn"></i>
                        </button>
                        : <button className="btn position-relative search-btn-cn">
                            <i className="fa fa-search text-white search-icon-cn"></i>
                        </button>
                }
                <div className="dropdown search-type-cn">
                    {/* {
                        props.bg
                            ? <a className="nav-link dropdown-toggle" style={{ marginLeft: "-25px" }} href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-sort-down text-white search-icon-cn"></i>
                            </a>
                            : <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-sort-down text-white search-icon-cn"></i>
                            </a>
                    } */}
                    {/* <ul className="dropdown-menu header-s-s-cn" aria-labelledby="navbarDropdownMenuLink">
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
                                    <p>Projects <span id="search-type-projects-new"
                                        className="rounded-pill">{t("NEW")}</span>
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
                    </ul> */}
                </div>
                {
                    props.bg
                        ? <input className="form-control ps-4 py-1 border-0 text-white bg-transparent shadow-none" type="search" placeholder={t("Search")} aria-label="Search" />
                        : <input className="form-control ps-4 py-1 border-0 text-white search-input-cnn" type="search" placeholder={t("Search")} aria-label="Search" />
                }
            </form>
        </>
    )
}
