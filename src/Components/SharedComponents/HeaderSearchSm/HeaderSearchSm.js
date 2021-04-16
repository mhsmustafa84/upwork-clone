/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function HeaderSearchSm(props) {
    console.log(props);
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
                    {
                        props.bg
                            ? <a className="nav-link dropdown-toggle" style={{ marginLeft: "-25px" }} href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-sort-down text-white search-icon-cn"></i>
                            </a>
                            : <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-sort-down text-white search-icon-cn"></i>
                            </a>
                    }
                    <ul className="dropdown-menu header-s-s-cn" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item px-4" href="#">
                            <div className="d-flex align-items-center">
                                <span className="me-2 mb-3"><i className="fas fa-user fs-6"></i></span>
                                <div className="acc-cn ms-2">
                                    <p>Talent</p>
                                    <p>Hire professionals and agencies</p>
                                </div>
                            </div>
                        </a>
                        <a className="dropdown-item px-4" href="#">
                            <div className="d-flex align-items-center">
                                <span className="me-2 mb-3"><i className="fas fa-clipboard-list fs-6"></i></span>
                                <div className="acc-cn ms-2">
                                    <p>Projects <span id="search-type-projects-new"
                                        className="rounded-pill">NEW</span>
                                    </p>
                                    <p>Buy pre-defined projects</p>
                                </div>
                            </div>
                        </a>
                        <a className="dropdown-item px-4" href="#">
                            <div className="d-flex align-items-center">
                                <span className="me-2 mb-3"><i className="fas fa-briefcase fs-6"></i></span>
                                <div className="acc-cn ms-2">
                                    <p>Jobs</p>
                                    <p>Apply to jobs posted by clients</p>
                                </div>
                            </div>
                        </a>
                    </ul>
                </div>
                {
                    props.bg
                        ? <input className="form-control ps-4 py-1 border-0 text-white bg-transparent shadow-none" type="search" placeholder="Search" aria-label="Search" />
                        : <input className="form-control ps-4 py-1 border-0 text-white search-input-cn" type="search" placeholder="Search" aria-label="Search" />
                }
            </form>
        </>
    )
}