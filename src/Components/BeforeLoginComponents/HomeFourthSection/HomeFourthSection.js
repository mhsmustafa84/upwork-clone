/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./HomeFourthSection.css";
import img1 from "../../../assets/img/cara.webp";
import img2 from "../../../assets/img/sam.webp";
import img3 from "../../../assets/svg/clearly-rated.e51d653.svg";

export default function HomeFourthSection() {
  return (
    <section>
      <div className="container">
        <p className="my-5 fw-bold ss-p-cn text-center">WHAT THEY SAY</p>
        <div className="row">
          <div>
            <div className="position-relative">
              <div className="w-50 ms-auto my-5 ps-5 pb-5 fth-div-cn">
                <p>
                  “The freelance talent that I’m able to access creates
                  productivity in a way that I don’t think any of us thought
                  possible.”
                </p>
                <span>
                  <strong>Cara Bedford</strong>
                </span>
                <p>Director Strategic Marketing, CompuVision</p>
              </div>
              <div className="w-50 position-absolute fth-abs-img1-cn">
                <img className="w-75" src={img1} />
              </div>
            </div>
            <div className="position-relative">
              <div className="w-50 me-auto my-5 pe-5 pt-5 fth-div-cn">
                <p>
                  “My relationship with Cara & CompuVision has grown over the
                  years. We’ve continued to work together on larger and more
                  technical projects.”
                </p>
                <span>
                  <strong>Sam Crockett</strong>
                </span>
                <p>Independent Web Developer</p>
              </div>
              <div className="w-50 position-absolute fth-abs-img2-cn">
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
              <strong>(352,169 REVIEWS)</strong>
              <img className="mb-3 ms-3" src={img3} />
            </div>
          </div>
        </div>
        <div className="row">
          <p className="my-5 fw-bold ss-p-cn text-center">TOP SKILLS</p>
          <div>
            <div className="text-center mt-4 mx-auto" style={{ width: "88%" }}>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  Data Entry Specialists
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  Video Editors
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  Data Analyst
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  Shopify Developer
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  Ruby on Rails Developer
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  Android Developer
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  Bookkeeper
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  Content Writer
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  Copywriter
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  Database Administrator
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  Data Scientist
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn me-2">
                  Front-End Developer
                </a>
              </span>
              <a style={{ color: "#37a000" }} href="#">
                <strong>See more</strong>
              </a>
            </div>
            <div className="text-center m-5">
              <button
                className="btn border shadow-none px-4 py-2 fs-5"
                style={{ color: "#37a000" }}
              >
                Browe all
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
