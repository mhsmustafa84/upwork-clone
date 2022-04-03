/* eslint-disable */
import React from "react";
import "./HomeSecondSection.css";

import { useSelector } from "react-redux";
export default function HomeSecondSection() {
  let lang = useSelector(state => state.lang);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="text-center">
            <div className="fs-1 mt-4">
              <i className="fas fa-chevron-down scrol-d-icon-cn"></i>
            </div>
            <p className={`my-5 fw-bold ss-p-cn ${lang === 'ar' && "fs-5"}`}>FORCLIENTS</p>
            <h2 className="ss-h2-cn">Findtalentyourway</h2>
            <p className={`my-5 ss-p2-cn ${lang === 'ar' && "fs-4"}`}>
              "Developtrustedrelationships"
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="shadow my-4 ss-box-cn position-relative">
              <a className="d-inline-block p-5" href="#">
                <h3>Postajobandhireapro</h3>
                <p className={`mb-5 pb-5 ${lang === 'ar' && "fs-5"}`}>TalentMarketplace</p>
                <div className="position-absolute py-3 px-4 fs-2">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="shadow my-4 ss-box-cn position-relative">
              <a className="d-inline-block p-5" href="#">
                <h3>Browseandbuyprojects</h3>
                <p className={`mb-5 pb-5 ${lang === 'ar' && "fs-5"}`}>ProjectCatalog</p>
                <div className="position-absolute py-3 px-4 fs-2">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="shadow my-4 ss-box-cn position-relative">
              <a className="d-inline-block p-5" href="#">
                <h3>Letusfindtherighttalent</h3>
                <p className={`mb-5 pb-5 ${lang === 'ar' && "fs-5"}`}>TalentScout</p>
                <div className="position-absolute py-3 px-4 fs-2">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
          <p className={`text-center my-3 fw-bold ${lang === 'ar' && "fs-5"}`}>
            "Needasolutionforlargeorganizations"{" "}
            <a href="#" className="text-success">
              "EnterpriseSuitehasyoucovered"
            </a>
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 col-sm-12">
            <ul>
              <li>
                <a href="#" className="ss-ul-a-cn" style={{ color: "#6FDA44" }}>
                  "DevelopmentIT"
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn">
                  "DesignCreative"
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn">
                  "SalesMarketing"
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn">
                  "Writing"
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn">
                  "CustomerSupport"
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn">
                  "Accounting"
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn" style={{ color: "#6FDA44" }}>
                  "Seeallcatrgories"
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="ms-5 mt-4">
              <span>
                <a href="#" className="ss-span-a-cn ">
                  "ARVRDevelopment"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                  "AutomationTesting"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                  "BackEndDevelopment"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                  "BusinessApplicationsDevelopment"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                  "CMSDevelopment"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                  "CloudEngineering"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                  "CodingTutoring"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                  "DatabaseAdministration"
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
