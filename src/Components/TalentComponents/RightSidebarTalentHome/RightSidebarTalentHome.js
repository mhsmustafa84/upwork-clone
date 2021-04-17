import React from "react";

export default function RightSidebarTalentHome() {
  return (
    <div className="col d-none d-lg-block">
      <div className="my-lg-1">
        <img
          src="https://www.upwork.com/profile-portraits/c1YEmhSMesFOnUBuFrsYLXSpe1nxlEMZDf8TkNaSsH7RKccybWLkNBn9DoEXC4-tpu"
          alt
          className="rounded-circle d-inline"
          width="30px"
          height="30px"
        />
        <h5 className="d-inline px-2">My Profile</h5>
      </div>
      <div className="my-lg-1">
        <a href="#" className="advanced-search-link ">
          <i className="fas fa-eye"> </i> View Profile
        </a>
      </div>
      <div className="my-lg-1 fw-bold">
        <p>Visibility</p>
      </div>
      <div className="my-lg-1 ">
        <i className="fas fa-globe"> </i>
        <span> Public</span>
        <span className="btn-group float-sm-end px-lg-1">
          <button
            type="button"
            className="btn btn-light dropdown-toggle border border-1 rounded-circle collapsed"
            data-toggle="collapse"
            data-target="#collapse"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-pen" aria-hidden="true" />
          </button>
        </span>
      </div>
      <div className="my-3" />
      <div className="my-lg-1 fw-bold">
        <p>Availability</p>
      </div>
      <div className="my-lg-1">
        <i className="far fa-clock" />
        <span>
          {" "}
          As Needed -{" "}
          <span className="btn-group float-sm-end px-lg-1">
            <button
              type="button"
              className="btn btn-light dropdown-toggle border border-1 rounded-circle collapsed"
              data-toggle="collapse"
              data-target="#collapse"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <i className="fas fa-pen" aria-hidden="true" />
            </button>
          </span>{" "}
          Open to offers
        </span>
        <div className="progress" style={{ height: 5, display: "inline" }}>
          <div
            className="progress-bar bg-upwork"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className style={{ fontSize: "0.7em", display: "inline" }}>
              100%
            </div>
          </div>
        </div>
      </div>
      <h5 className="mb-lg-2 display-inline-block ">Proposals</h5>
      <ul
        className="list-group sidebar-homebage-ul mb-lg-3 d-lg-block"
        style={{ fontSize: "0.9em" }}
      >
        <li
          className="list-group-item sidebar-homebage-ul-li "
          aria-current="true"
        >
          <a
            href="#"
            className=" list-group-item-action advanced-search-link"
            aria-current="true"
          >
            4 submitted proposals
          </a>
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true"
        >
          <a
            href="#"
            className=" list-group-item-action advanced-search-link"
            aria-current="true"
          >
            60 availabale connects
          </a>{" "}
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true"
        >
          <a
            href="#"
            className=" list-group-item-action advanced-search-link"
            aria-current="true"
          >
            <i className="fas fa-stopwatch" /> Track time with the desktop app
          </a>
        </li>
      </ul>
    </div>
  );
}
