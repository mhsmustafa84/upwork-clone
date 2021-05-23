/* eslint-disable */
import React from "react";
import "./HomeSecondSection.css";
import { useTranslation } from "react-i18next";  
import { useSelector } from "react-redux";
export default function HomeSecondSection() {
  let lang = useSelector(state => state.lang);
  const { t }=useTranslation();
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="text-center">
            <div className="fs-1 mt-4">
              <i className="fas fa-chevron-down scrol-d-icon-cn"></i>
            </div>
            <p className={`my-5 fw-bold ss-p-cn ${lang==='ar'&& "fs-5"}`}>{t("FORCLIENTS")}</p>
            <h2 className="ss-h2-cn">{t("Findtalentyourway")}</h2>
            <p className={`my-5 ss-p2-cn ${lang==='ar'&& "fs-4"}`}>
            {t("Developtrustedrelationships")}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="shadow my-4 ss-box-cn position-relative">
              <a className="d-inline-block p-5" href="#">
                <h3>{t("Postajobandhireapro")}</h3>
                <p className={`mb-5 pb-5 ${lang==='ar'&& "fs-5"}`}>{t("TalentMarketplace")}</p>
                <div className="position-absolute py-3 px-4 fs-2">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="shadow my-4 ss-box-cn position-relative">
              <a className="d-inline-block p-5" href="#">
                <h3>{t("Browseandbuyprojects")}</h3>
                <p className={`mb-5 pb-5 ${lang==='ar'&& "fs-5"}`}>{t("ProjectCatalog")}</p>
                <div className="position-absolute py-3 px-4 fs-2">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="shadow my-4 ss-box-cn position-relative">
              <a className="d-inline-block p-5" href="#">
                <h3>{t("Letusfindtherighttalent")}</h3>
                <p className={`mb-5 pb-5 ${lang==='ar'&& "fs-5"}`}>{t("TalentScout")}</p>
                <div className="position-absolute py-3 px-4 fs-2">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
          <p className={`text-center my-3 fw-bold ${lang==='ar'&& "fs-5"}`}>
          {t("Needasolutionforlargeorganizations")}{" "}
            <a href="#" className="text-success">
            {t("EnterpriseSuitehasyoucovered")}
            </a>
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 col-sm-12">
            <ul>
              <li>
                <a href="#" className="ss-ul-a-cn" style={{ color: "#6FDA44" }}>
                {t("DevelopmentIT")}
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn">
                {t("DesignCreative")}
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn">
                {t("SalesMarketing")}
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn">
                {t("Writing")}
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn">
                {t("CustomerSupport")}
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn">
                {t("Accounting")}
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn" style={{ color: "#6FDA44" }}>
                {t("Seeallcatrgories")}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="ms-5 mt-4">
              <span>
                <a href="#" className="ss-span-a-cn ">
                {t("ARVRDevelopment")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                {t("AutomationTesting")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                {t("BackEndDevelopment")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                {t("BusinessApplicationsDevelopment")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                {t("CMSDevelopment")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                {t("CloudEngineering")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                {t("CodingTutoring")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                {t("DatabaseAdministration")}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
