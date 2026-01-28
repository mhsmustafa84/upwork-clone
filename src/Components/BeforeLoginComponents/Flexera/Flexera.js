/* eslint-disable */
import React from "react";
import talentainSectionFlexeraDevIT from "../../../assets/img/talent-main-section-flexera-Dev-IT.png";
import talentMainSectionArticle2FlexeraHeaderDevIT from "../../../assets/img/talent-main-section-article2-flexera-header-Dev-IT.svg";
export default function Flexera() {
  return (
    <div>
      <div className="row mx-md-5 mx-1 my-5 py-md-5 d-flex flex-wrap-reverse">
        <div className="col-lg-6 col-12 position-relative">
          <img src={talentainSectionFlexeraDevIT} className="w-100" alt="" />
          <div
            className="col-6 px-4 py-4 position-absolute bottom-0 end-0 bg-white shadow-sm rounded"
            id="client-dev-ID"
          >
            <div className="row">
              <div className="col-5">
                <i className="fas fa-rocket display-2 text-secondary" />
              </div>
              <div className="col-7">
                <div className="row fw-bolder fs-3 text-secondary">
                  24x faster
                </div>
                <div className="row text-secondary fs-6">time to engage</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 pt-md-5">
          <div className="row pt-md-5 ms-3">
            <div className="col-4">
              <img src={talentMainSectionArticle2FlexeraHeaderDevIT} alt="" />
            </div>
          </div>
          <div className="row my-4 ms-3" id="flexera-sub-header-ID">
            <h4 className="fw-bold">
              Flexera adapts to changing business needs
            </h4>
          </div>
          <div
            className="row fs-6 ms-4 mb-3 text-secondary"
            id="flexera-paragraph-ID"
          >
            By leveraging remote talent, Flexera found the specialized skills
            needed to help accelerate their growth. They strengthened their IT
            system and turned projects around twice as fast. CEO Jim Ryan said
            remote expertise enabled them to quickly access the breadth of
            skills needed to keep up with market changes: “[They] knew exactly
            what needed to be done, jumped in, and got it done.”
          </div>
          <div className="d-flex fs-5 mx-1 ms-4 mt-4 mb-3">
            <a href="#" className="text-decoration-none">
              Read case study <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
