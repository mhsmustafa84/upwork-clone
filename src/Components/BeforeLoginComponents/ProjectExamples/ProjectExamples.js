import React from 'react'
import talentMainSectionClientUseUpworkDevIT from '../../../assets/img/talent-main-section-client-use-upwork-Dev-IT.png'
import talentMainSectionClientDeveloperDev from '../../../assets/img/talent_main-section-client-developer-Dev-IT.jpeg'

export default function ProjectExamples() {
  return (
    <div>
      <div className="row mx-lg-5 mx-1 my-5 py-5">
        <div className="col-lg-7 col-12">
          <div className="row mb-4" id="Project-Examples-ID">
            <div className="col-md-1 col-3">
              <hr className="w-100 mb-0 mt-3" id="Project-Examples-text-line-ID" />
            </div>
            <div className="col fs-5 fw-bold">Project Examples</div>
          </div>
          <div className="row mb-3" id="Project-Examples-header-ID">
            <h1 className="fw-bolder">See how clients use Upwork</h1>
          </div>
          <div className="row mb-3" id="Project-Examples-sub-header-ID">
            <h4 className="fw-bold">iOS Swift designer for entertainment app</h4>
          </div>
          <div className="fw-bolder ms-0 mt-3 mb-3" id>
            <i className="fas fa-star fs-6" />
            <i className="fas fa-star fs-6" />
            <i className="fas fa-star fs-6" />
            <i className="fas fa-star fs-6" />
            <i className="fas fa-star fs-6" />
            <span className="fw-bold">5/5
        <pre className="d-inline-block" />
        Budget:$14,520</span>
          </div>
          <div className="ms-0 my-4 mb-3" id="quates">
            <i className="fas fa-quote-left display-4 text-secondary" />
          </div>
          <div className="row my-3 fs-md-5 fs-6 ms-0 mb-3 text-secondary" id="Project-Examples-paragraph-ID">
            "Yevhenii is a talented designer! We also had him manage a front-end
            team to make sure that design was pixel perfect to the design comps.
            On user testing he was able to take feedback and apply it to
            re-designs of landing pages that needed more information based on
            requirements. Best part is he's dedicated and interested in whatever
            project he is working on."
    </div>
          <div className="row my-4 small text-secondary ms-0 mb-3">
            <div className="col-2 bg-light rounded-pill text-center py-1 me-md-2 me-1">
              Sketch
      </div>
            <div className="col-2 bg-light rounded-pill text-center py-1 me-md-2 me-1">
              Swift
      </div>
            <div className="col-md-3 col-5 bg-light rounded-pill text-center py-1 me-md-2 me-1">
              iOS Development
      </div>
            <div className="col-2 bg-light rounded-pill text-center py-1 me-md-2 me-1">
              Cocoa
      </div>
          </div>
        </div>
        <div className="col-5 position-relative">
          <img className="position-absolute " id="client-ID" src={talentMainSectionClientUseUpworkDevIT} alt='' />
          <div className="col-5 px-3 py-2 position-absolute bottom-0 start-0 bg-white" id="client-dev-ID">
            <div className="row d-none d-lg-flex justify-content-between">
              <div className="col-3">
                <img className="d-inline-block px-0 rounded-circle border border-2 border-white" id="projected-by-Dev-ID" src={talentMainSectionClientDeveloperDev} alt='' style={{ zIndex: 2, left: '-40px' }} />
              </div>
              <div className="col-7 ">
                <div className="row text-secondary">Project by</div>
                <div className="row fw-bold">Nitesh S.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
