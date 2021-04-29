/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./HomeSecondSection.css";
export default function HomeSecondSection() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="text-center">
            <div className="fs-1 mt-4">
              <i className="fas fa-chevron-down scrol-d-icon-cn"></i>
            </div>
            <p className="my-5 fw-bold ss-p-cn">FOR CLIENTS</p>
            <h2 className="ss-h2-cn">Find talent your way</h2>
            <p className="my-5 ss-p2-cn">
              Develop trusted relationships and build your own virtual talent
              bench for quick project turnarounds or big transformations.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="shadow my-4 ss-box-cn position-relative">
              <a className="d-inline-block p-5" href="#">
                <h3>Post a job and hire a pro</h3>
                <p className="mb-5 pb-5">Talent Marketplace</p>
                <div className="position-absolute py-3 px-4 fs-2">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="shadow my-4 ss-box-cn position-relative">
              <a className="d-inline-block p-5" href="#">
                <h3>Browse and buy projects</h3>
                <p className="mb-5 pb-5">Project Catalog</p>
                <div className="position-absolute py-3 px-4 fs-2">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="shadow my-4 ss-box-cn position-relative">
              <a className="d-inline-block p-5" href="#">
                <h3>Let us find the right talent</h3>
                <p className="mb-5 pb-5">Talent Scout</p>
                <div className="position-absolute py-3 px-4 fs-2">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
          <p className="text-center my-3 fw-bold">
            Need a solution for large organizations?{" "}
            <a href="#" className="text-success">
              Enterprise Suite has you covered.
            </a>
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 col-sm-12">
            <ul>
              <li>
                <a href="#" className="ss-ul-a-cn" style={{ color: "#6FDA44" }}>
                  Development & IT
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn">
                  Design & Creative
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn">
                  Sales & Marketing
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn">
                  Writing
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn">
                  Accounting
                </a>
              </li>
              <li>
                <a href="#" className="ss-ul-a-cn" style={{ color: "#6FDA44" }}>
                  See all catrgories
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="ms-5 mt-4">
              <span>
                <a href="#" className="ss-span-a-cn">
                  AR/VR Development
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                  Automation Testing
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                  Back-End Development
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                  Business Applications Development
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                  CMS Development
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                  Cloud Engineering
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                  Coding Tutoring
                </a>
              </span>
              <span>
                <a href="#" className="ss-span-a-cn">
                  Database Administration
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
