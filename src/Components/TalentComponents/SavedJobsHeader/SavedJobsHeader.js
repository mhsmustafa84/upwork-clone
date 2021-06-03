/* eslint-disable */
import React from "react";
import "./SavedJobsHeader.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SavedJobsHeader({ jobs }) {
  const { t } = useTranslation();
  return (
    <div>
      <ul
        id="list-homepage"
        className="navbar navbar-expand list-group-horizontal bg-white boder border-1 my-0"
      >
        <li
          className="list-group-item sidebar-homebage-ul-li bg-white boder border-0"
          aria-current="true"
        >
          <Link to="/Search">
            <a
              href="#"
              className=" list-group-item-action saved-homebage-ul-li bg-white"
              aria-current="true"
            >
              {t("SEARCH")}
            </a>
          </Link>
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li-aa active activesidesaved bg-white boder border-0"
          aria-current="true"
        >
          <Link to="/saved-jobs">
            <a
              href="#"
              className=" list-group-item-action saved-homebage-ul-li-aa bg-white"
              aria-current="true"
            >
              {t("SAVEDJOBS")} ({jobs})
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
