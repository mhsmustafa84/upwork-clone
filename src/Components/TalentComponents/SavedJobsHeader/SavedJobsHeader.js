/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './SavedJobsHeader.css';
export default function SavedJobsHeader() {
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
            SEARCH
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
            SAVED JOBS(2)
              </a>
        </li>
      </ul>

    </div>
  )
}
