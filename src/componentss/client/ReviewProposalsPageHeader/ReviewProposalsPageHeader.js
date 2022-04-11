/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './ReviewProposalsPageHeader.css';

export default function ReviewProposalsPageHeader({ proposals }) {
  return (
    <div className="bg-white pt-3 border border-1">
      <ul
        id="list-homepage"
        className="navbar navbar-expand bg-white my-0 "
      >
        <li
          className="list-group-item sidebar-homebage-ul-li bg-white border-0"
          aria-current="true"
        >
          <span
            className="list-group-item-action bg-white activenavside"
          >
            All Proposals ( <span>{proposals}</span> )
          </span>
        </li>
        {/* <li
          className="list-group-item sidebar-homebage-ul-li bg-white border-0"
          aria-current="true"
        >
          <a
            href="#"
            className=" list-group-item-action sidebar-homebage-ul-li-a bg-white"
            aria-current="true"
          >
            Shortlisted (0)
            </a>
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li bg-white border-0"
          aria-current="true"
        >
          <a
            href="#"
            className=" list-group-item-action sidebar-homebage-ul-li-a bg-white"
            aria-current="true"
          >
            Messaged (0)
            </a>
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li bg-white border-0"
          aria-current="true"
        >
          <a
            href="#"
            className=" list-group-item-action sidebar-homebage-ul-li-a bg-white"
            aria-current="true"
          >
            Archived (0)
            </a>
        </li> */}
      </ul>
    </div>
  )
}
