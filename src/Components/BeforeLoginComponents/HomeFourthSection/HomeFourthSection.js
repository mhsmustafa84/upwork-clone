/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable */

import React from "react";
import "./HomeFourthSection.css";
import img1 from "../../../assets/Img/cara.webp";
import img2 from "../../../assets/Img/sam.webp";
import img3 from "../../../assets/svg/clearly-rated.e51d653.svg";

import { useSelector } from "react-redux";


export default function HomeFourthSection() {
  let lang = useSelector(state => state.lang);

  return (
    <section>
      <div className="container">
        <p className={`my-5 fw-bold ss-p-cn text-center ${lang === 'ar' && "fs-5"}`}>WHATTHEYSAY</p>
        <div className="row">
          <div>
            <div className="position-relative">
              <div className="w-50 ms-auto my-5 ps-5 pb-5 fth-div-cn">
                <p>
                  "ThefreelancetalentthatImabletoaccess"
                </p>
                <span>
                  <strong>CaraBedford</strong>
                </span>
                <p>DirectorStrategicMarketing</p>
              </div>
              <div className="w-50 position-absolute fth-abs-img1-cn">
                <img className="w-75" src={img1} />
              </div>
            </div>
            <div className="position-relative">
              <div className="w-50 me-auto my-5 pe-5 pt-5 fth-div-cn">
                <p>
                  "MyrelationshipwithCara"
                </p>
                <span>
                  <strong>SamCrockett</strong>
                </span>
                <p>IndependentWebDeveloper</p>
              </div>
              <div className="w-50 position-absolute fth-abs-img2-cn" dir="ltr">
                <img className="w-75" src={img2} />
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
              <strong>REVIEWS</strong>
              <img className="mb-3 ms-3" src={img3} />
            </div>
          </div>
        </div>
        <div className="row">
          <p className="my-5 fw-bold ss-p-cn text-center">TOPSKILLS</p>
          <div>
            <div className="text-center mt-4 mx-auto" style={{ width: "88%" }}>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  "DataEntrySpecialists"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  "VideoEditors"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  "DataAnalyst"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  "ShopifyDeveloper"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  "RubyonRailsDeveloper"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  "AndroidDeveloper"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  "Bookkeeper"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  "ContentWriter"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  "Copywriter"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  "DatabaseAdministrator"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  "DataScientist"
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  "FrontEndDeveloper"
                </a>
              </span>
              <a style={{ color: "#37a000" }} href="#">
                <strong>Seemore</strong>
              </a>
            </div>
            <div className="text-center m-5">
              <button
                className="btn border shadow-none px-4 py-2 fs-5"
                style={{ color: "#37a000" }}
              >
                "Browseall"
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
