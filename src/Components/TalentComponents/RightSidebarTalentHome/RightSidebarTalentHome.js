/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { talentDataAction } from "../../../Store/actions/talentData";
import img from "../../../assets/img/icon-user.svg";

export default function RightSidebarTalentHome() {
  const { t } = useTranslation();

  const user = useSelector((state) => state.talentData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(talentDataAction());
  }, []);

  return (
    <div className="col d-none d-lg-block">
      <div className="my-lg-1">
        <img
          src={user.profilePhoto ? user.profilePhoto : img}
          alt=""
          className="rounded-circle d-inline"
          width="50px"
          height="50px"
        />

        <h5 className="d-inline ps-1">{`${user.firstName}`}</h5>
      </div>
      <div className="my-lg-1">
        <Link to="/profile" className="advanced-search-link ">
          <i className="fas fa-eye"> </i> {t("View Profile")}
        </Link>
      </div>
      <div className="my-lg-1 fw-bold">
        <p>{t("Visibility")}</p>
      </div>
      <div className="my-lg-1 ">
        <i className="fas fa-globe"> </i>
        <span> {t("Public")}</span>
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
        <p>{t("Availability")}</p>
      </div>
      <div className="my-lg-1">
        <i className="far fa-clock" />
        <span>
          As Needed
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
        </span>
        <div className="progress" style={{ height: 5, display: "inline" }}>
          <div
            className="progress-bar bg-upwork"
            role="progressbar"
            style={{ width: `${user.profileCompletion}%` }}
            aria-valuenow={60}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div style={{ fontSize: "0.7em", display: "inline" }}>
              {`${user.profileCompletion}%`}
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
            <i className="fas fa-stopwatch" /> Track time with the desktop app
          </a>
        </li>
      </ul>
    </div>
  );
}
