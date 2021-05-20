import React from 'react'
import talentMainSectionVideoPreviewDevIT from '../../../assets/img/talent_main-section-video-preview-Dev-IT.jpeg'
import VID from '../../../assets/videos/VID-20210318-WA0020.mp4'
export default function GetStarted() {
    return (
        <div>
            <div className="row mx-lg-5 mx-1 my-md-5 my-3 py-5" id="get-started-section-ID">
                <div className="col-lg-5 col-12">
                    <div className="row mb-4" id="get-started-ID">
                        <div className="col-md-1 col-3">
                            <hr className="w-100 mb-0 mt-3" id="Remote-professionals-lable-line-ID" />
                        </div>
                        <div className="col fs-5 fw-bold">How to get started</div>
                    </div>
                    <div className="row mb-3" id="get-started-header-ID">
                        <h1 className="fw-bolder">
                            Tap into the world's largest talent network
      </h1>
                    </div>
                    <div className="row mb-3" id="get-started-sub-header-ID">
                        <h4 className="fw-bold">Find and hire specialized talent.</h4>
                    </div>
                    <div className="row mb-3 mx-1" id="get-started-list-ID">
                        <ul className="fs-6 ms-3">
                            <li>Quickly generate a shortlist of qualified talent</li>
                            <li>Browse rated and reviewed professionals</li>
                            <li>Scale your teams up or down as business dynamics change</li>
                        </ul>
                    </div>
                    <div className="row mb-3 mx-1" id="get-started-button-ID">
                        <button className="btn col-lg-6 col-12 mx-lg-0 mx-auto fw-bolder mb-3 bg-upwork" type="button">
                            Connect with Talent
      </button>
                    </div>
                </div>
                <div className="col-lg-7 col-12">
                    <video className="w-100" poster={talentMainSectionVideoPreviewDevIT} controls>
                        <source src={VID} type="video/mp4" />
                        <source src={VID} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
                </div>
            </div>

        </div>
    )
}
