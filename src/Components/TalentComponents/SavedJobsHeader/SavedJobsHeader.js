/* eslint-disable */
import React from 'react'
import { useTranslation } from 'react-i18next';
import './SavedJobsHeader.css';
export default function SavedJobsHeader() {
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
          <a
            href="#"
            className=" list-group-item-action saved-homebage-ul-li-aa bg-white"
            aria-current="true"
          >
            {t("SEARCH")}
              </a>
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li bg-white boder border-0"
          aria-current="true"
        >
          <a
            href="#"
            className=" list-group-item-action saved-homebage-ul-li-aa active activesidesaved bg-white"
            aria-current="true"
          >
            {t("SAVED JOBS(2)")}
              </a>
        </li>
      </ul>

    </div>
  )
}
