/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
export default function MyJobsActiveContractHourly() {
  return (
    <div className="row d-flex justify-content-between border border-1 py-3 px-5">
      <div className="col">
        <Link to="/contract">
          <div className="fw-bold text-success">Contract Name</div>
        </Link>
        <div className="text-muted">Hired by Client Name</div>
      </div>
      <div className="col">
        <div><span className="fw-bold">$0.00 </span>| <span>$30.00 </span>/ hr</div>
        <div>0:00 hrs of 40 hrs this week
</div>
      </div>
      <div className="col">
        <div className="btn-group float-sm-end ">
          <button
            type="button"
            className="btn btn-light dropdown-toggle border border-1 rounded-circle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-h " />
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                View work diary
                  </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Send a message
                  </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Propose new contract
                  </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}
