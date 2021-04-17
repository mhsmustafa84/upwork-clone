import React from "react";
import { Link } from "react-router-dom";

export default function JobPostLi() {
  return (
    <div>
      <Link to="/review-proposal">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-10 col-xs-9">
            <h4 className="m-0-bottom" id="all-postings-list-opening-title-0">
              Graphic designer needed
            </h4>
            <p
              className="m-xs-bottom m-0 text-muted ng-binding"
              id="all-postings-list-created-by-block-0"
            >
              Posted
              <span className=""> 7 hours ago </span>
              by
              <span className=""> You</span>
            </p>
            <p className="m-xs-bottom m-0-top ng-binding">
              <span
                className="text-capitalize"
                id="all-postings-list-opening-type-0"
              >
                hourly
              </span>
            </p>
          </div>
          <div className="d-block col-sm-2 col-xs-3">
            <div className="fw-bold">
              <span>31</span> (<span> 31 </span> new)
            </div>
            <div className="text-muted">Proposals</div>
          </div>
          <div className="d-block col-sm-1 col-xs-3">
            <div className="fw-bold">0</div>
            <div className="text-muted">Messaged</div>
          </div>
          <div className="d-block col-sm-1 col-xs-3">
            <div className="fw-bold">0</div>
            <div className="text-muted">Hired</div>
          </div>
          <div className="d-block col-sm-2 col-xs-3">
            <button type="button" class="btn btn-success">
              View Proposals
            </button>
          </div>
          <div className="d-block col-sm-1 col-xs-3 btn-group float-sm-end ">
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
                  View Proposals
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Invite freelancers
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Make Private
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Share job posting
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Upgrade to Featured
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  View Job posting
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Edit posting
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Reuse posting
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Remove posting
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}
