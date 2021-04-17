import React from 'react'
import './ReviewProposalsPageHeader.css';

export default function ReviewProposalsPageHeader() {
    return (
        <div className="row px-3  border-1">
            <ul
          id="list-homepage"
          className="navbar navbar-expand list-group-horizontal bg-white boder border-1 my-0 "
        >
          <li
            className="list-group-item sidebar-homebage-ul-li bg-white boder border-0"
            aria-current="true"
          >
            <a
              href="#"
              className=" list-group-item-action sidebar-homebage-ul-li-a bg-white activenavside "
              aria-current="true"
            >
              All Proposals ( <span>32</span> )
            </a>
          </li>
          <li
            className="list-group-item sidebar-homebage-ul-li bg-white boder border-0"
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
            className="list-group-item sidebar-homebage-ul-li bg-white boder border-0"
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
            className="list-group-item sidebar-homebage-ul-li bg-white boder border-0"
            aria-current="true"
          >
            <a
              href="#"
              className=" list-group-item-action sidebar-homebage-ul-li-a bg-white"
              aria-current="true"
            >
              Archived (0)
            </a>
          </li>
        </ul>
        </div>
    )
}
