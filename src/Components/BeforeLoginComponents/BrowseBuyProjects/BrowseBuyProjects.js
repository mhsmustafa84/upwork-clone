import React from "react";
import "./BrowseBuyProject.css";
import talentMainSectionBuyProjectByDevIT from "../../../assets/img/talent-main-section-buy-project-by-Dev-IT.png";
import talentMainSectionBuyProjectDevIT from "../../../assets/img/talent-main-section-buy-project-Dev-IT.png";

export default function BrowseBuyProjects() {
  return (
    <div>
      <div
        className="row mx-lg-5 mx-1 my-md-5 py-md-5 my-3"
        id="Project-Catalog-section-ID"
      >
        <div className="row" id="upper-Project-Catalog-section-ID">
          <div className="col-md-4" />
          <div className="col-md-8">
            <div className="row mb-4" id="Project-Catalog-ID">
              <div className="col-md-1 col-3">
                <hr
                  className="w-75 mb-0 mt-3"
                  id="Remote-professionals-lable-line-ID"
                />
              </div>
              <div className="col fs-5 fw-bold">Project Catalog</div>
            </div>
            <div className="row mb-3" id="Browse-buy-projects-ID">
              <h1 className="fw-bolder">
                Browse and buy projects for your immediate needs
              </h1>
            </div>
          </div>
        </div>
        <div className="row mb-3" id="medium-Project-Catalog-section-ID">
          <div
            className="col-12 col-lg-4 fs-md-5 fs-6"
            id="list-Project-Catalog-ID"
          >
            <ul className="list-group d-flex flex-lg-wrap flex-lg-column flex-row flex-nowrap overflow-auto mx-1 mb-3">
              <li className="list-group-item border-0 border-start border-4 border-success shadow-sm mb-2 text-success  col-md-12 col-8">
                Mobile App Development
              </li>
              <li className="list-group-item border-0 mb-2 col-md-12 col-8">
                Shopify Development
              </li>
              <li className="list-group-item border-0 mb-2 col-md-12 col-8">
                WordPress Development
              </li>
              <li className="list-group-item border-0 mb-2 col-md-12 col-8">
                Data Visualization
              </li>
              <li className="list-group-item border-0 mb-2 col-md-12 col-8">
                Machine Learning
              </li>
              <li className="list-group-item border-0 mb-2 col-12 ">
                Cybersecurity &amp; Data Protection
              </li>
            </ul>
          </div>
          <div className="col-lg-8 col-12 position-relative">
            <img
              className="w-100"
              src={talentMainSectionBuyProjectDevIT}
              alt=""
            />
            <div
              className="col-lg-3 col-md-5 col-6 px-3 py-2 position-absolute bottom-0 end-0 bg-white"
              id="projected-by-ID"
            >
              <div className="row d-flex justify-content-between">
                <div className="col-3">
                  <img
                    className="d-inline-block px-0 rounded-circle border border-2 border-white"
                    id="projected-by-Dev-ID"
                    src={talentMainSectionBuyProjectByDevIT}
                    alt=""
                    style={{ zIndex: 2, left: "-40px" }}
                  />
                </div>
                <div className="col-7">
                  <div className="row text-secondary">Project by</div>
                  <div className="row fw-bold">Nitesh S.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-1" id="lower-Project-Catalog-section-ID">
          <div className="col-lg-4" />
          <div className="col-lg-8 col-12">
            <div
              className="row mb-3 fs-md-5 fs-6"
              id="Browse-buy-projects-paragraph-ID"
            >
              A mobile presence is a necessity for any business. Get a custom
              mobile app experience that meets your needs.
            </div>
            <div className="row" id="Browse-buy-projects-button-ID">
              <button
                className="btn col-lg-2 col-12 mx-lg-0 mx-auto fw-bolder mb-3 bg-upwork"
                type="button"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
