import React from 'react'
import './HeaderForDevItTalent.css'
import talentHeaderDevIT from '../../../assets/img/talent-header-Dev-IT.png'
import talentHeaderBgSvg1DevIT from "../../../assets/img/talent-header-bg-svg1-Dev-IT.svg"
import talentHeaderBgSvg2DevIT from "../../../assets/img/talent-header-bg-svg2-Dev-IT.svg"
import { Link } from 'react-router-dom'

export default function HeaderForDevItTalent() {
    return (
        <div>
            <section id="body-header-bg-ID" className="container-fluid pt-5 mt-5 pb-5 position-relative">
                <div className="container pt-5 pb-lg-5">
                    <div className="row d-flex justify-content-evenly mb-lg-5 pb-5 pt-5 me-3 ms-3" id="body-header-ID">
                        <div className="col-xl-5 col-lg-6 position-relative col-12" id="header-text-ID">
                            <h1 className="fw-bolder display-4 text-lg-start text-center">
                                Specialized development and IT talent, for any scope.
                            </h1>
                            <p className="fs-6 text-lg-start text-center col-lg-10 col-7 mx-lg-0 mx-auto mb-5">
                                Get matched in minutes with proven, remote development and IT
                                talent.
                            </p>
                            <div className="row" id="header-buttons-ID">
                                <Link  to="/login" className="btn col-lg-3 col-10 mx-lg-0 mx-auto fw-bolder me-lg-4 ms-lg-2 mb-3" type="button" id="header-btn-1">
                                    Post a Job
                                </Link>
                                <button className="btn col-lg-5 col-10 mx-lg-0 mx-auto fw-bolder mb-3" type="button" id="header-btn-2">
                                    Talk to a Recruiter
                                </button>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4" id="header-images-ID">
                            <img src={talentHeaderDevIT} id="header-man-ID" className="rounded mx-auto d-lg-block position-relative d-none" width={320} alt='' />
                            <img src={talentHeaderBgSvg1DevIT} id="header-svg-1-ID" className="position-absolute" alt='' />
                            <img src={talentHeaderBgSvg2DevIT} id="header-svg-2-ID" className="position-absolute" alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
