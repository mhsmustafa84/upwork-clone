/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable */

import React from "react";
import "./HomeFourthSection.css";
import img1 from "../../../assets/img/cara.webp";
import img2 from "../../../assets/img/sam.webp";
import img3 from "../../../assets/svg/clearly-rated.e51d653.svg";
import { useTranslation } from "react-i18next";  
import { useSelector } from "react-redux";


export default function HomeFourthSection() {
  let lang = useSelector(state => state.lang);
  const { t }=useTranslation();
  return (
    <section>
      <div className="container">
        <p className={`my-5 fw-bold ss-p-cn text-center ${lang==='ar' && "fs-5"}`}>{t("WHATTHEYSAY")}</p>
        <div className="row">
          <div>
            <div className="position-relative">
              <div className="w-50 ms-auto my-5 ps-5 pb-5 fth-div-cn">
                <p>
                {t("ThefreelancetalentthatImabletoaccess")}
                </p>
                <span>
                  <strong>{t("CaraBedford")}</strong>
                </span>
                <p>{t("DirectorStrategicMarketing")}</p>
              </div>
              <div className="w-50 position-absolute fth-abs-img1-cn">
                <img className="w-75" src={img1} />
              </div>
            </div>
            <div className="position-relative">
              <div className="w-50 me-auto my-5 pe-5 pt-5 fth-div-cn">
                <p>
                {t("MyrelationshipwithCara")}
                </p>
                <span>
                  <strong>{t("SamCrockett")}</strong>
                </span>
                <p>{t("IndependentWebDeveloper")}</p>
              </div>
              <div className="w-50 position-absolute fth-abs-img2-cn"dir="ltr">
                <img className="w-75"  src={img2} />
              </div>
            </div>
            <div className="text-center mb-5">
              <span>4.6 / 5</span>
              <span className="mx-3" style={{ color: "#6FDA44" }}>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </span>
              <strong>{t("REVIEWS")}</strong>
              <img className="mb-3 ms-3" src={img3} />
            </div>
          </div>
        </div>
        <div className="row">
          <p className="my-5 fw-bold ss-p-cn text-center">{t("TOPSKILLS")}</p>
          <div>
            <div className="text-center mt-4 mx-auto" style={{ width: "88%" }}>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                {t("DataEntrySpecialists")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                {t("VideoEditors")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                {t("DataAnalyst")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                {t("ShopifyDeveloper")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                {t("RubyonRailsDeveloper")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                {t("AndroidDeveloper")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                {t("Bookkeeper")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                {t("ContentWriter")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                {t("Copywriter")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                {t("DatabaseAdministrator")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                {t("DataScientist")}
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                {t("FrontEndDeveloper")}
                </a>
              </span>
              <a style={{ color: "#37a000" }} href="#">
                <strong>{t("Seemore")}</strong>
              </a>
            </div>
            <div className="text-center m-5">
              <button
                className="btn border shadow-none px-4 py-2 fs-5"
                style={{ color: "#37a000" }}
              >
                {t("Browseall")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
