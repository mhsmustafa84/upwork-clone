/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { auth, db } from "../../../firebase";
import img from "../../../assets/img/icon-user.svg";
import { useSelector } from "react-redux";

export default function RightSidebarTalentHome({  lang }) {

  const { t } = useTranslation();
  const [talentData, setTalentData] = useState([]);
  const user = useSelector((state) => state.talentData);

  useEffect(() => {
    db.collection("talent")
      .doc(auth.currentUser.uid)
      .collection("jobProposal")
      .where("status", "==", "proposal")
      .get()
      .then((res) => {
        setTalentData(res.docs);
      });
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
        <Link to={`/profile/${auth.currentUser.uid}`} className="advanced-search-link">
          <i className="fas fa-eye"> </i> {t("View Profile")}
        </Link>
      </div>
      {/* <div className="my-lg-1 fw-bold">
        <p>{t("Visibility")}</p>
      </div>
      <div className="my-lg-1 ">
        <i className="fas fa-globe"> </i>
        <span> {t("Public")}</span>

      </div> */}
      <div className="my-3" />
      <div className="my-lg-1 fw-bold">
        <p className="text-muted">{t("Availability")}</p>
      </div>
      <div className="my-lg-1">
        <i className="far fa-clock me-2" />
        <span>
          {lang === "ar" ? user?.availability === true ? "متاح" : "غير متاح" : user?.availability === true ? "available" : "not available"}
        </span>
        <div className="progress" style={{ height: 5, display: "inline" }}>
          <div
            className="progress-bar bg-upwork my-3"
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
          <Link
            to={`/proposals`}
            className=" list-group-item-action advanced-search-link"
            aria-current="true"
          >
            {talentData?.length} submitted proposals
          </Link>
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
            {user.connects} availabale connects
          </a>
        </li>
      </ul>
    </div>
  );
}
