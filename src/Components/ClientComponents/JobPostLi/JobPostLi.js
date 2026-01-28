/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */

import { Link } from "react-router-dom";
import { db } from "../../../firebase";

export default function JobPostLi({ job, id, index }) {

  return (
    <div>
      <div className={`row ps-4 my-2 ${index !== 0 && "border-top pt-4"}`}>
        <div className="col-lg-5 col-md-6 col-sm-10 col-xs-9">
          <h4 className="m-0-bottom" id="all-postings-list-opening-title-0">
            <Link to={{ pathname: `/job-details/${id}`, state: id }}>
              {job.jobTitle}
            </Link>
          </h4>
          <p
            className="m-xs-bottom m-0 text-muted ng-binding"
            id="all-postings-list-created-by-block-0"
          >
            Posted
            <span className="">
              {" "}
              {new Date(job.postTime.seconds * 1000).toLocaleString()}{" "}
            </span>
          </p>
          <p className="m-xs-bottom m-0-top ng-binding">
            <span
              className="text-capitalize"
              id="all-postings-list-opening-type-0"
            >
              {job.jobPaymentType} - {job.status}
            </span>
          </p>
        </div>
        <div className="d-block col-sm-2 col-xs-3">
        </div>
        <div className="d-block col-sm-1 col-xs-3">
          {/* <div className="fw-bold">
            <span>0</span>
          </div> */}
          {/* <div className="text-muted">Proposals</div> */}
          {/* <div className="fw-bold">0</div> */}
          {/* <div className="text-muted">Messaged</div> */}
        </div>
        <div className="d-block col-sm-1 col-xs-3">
          {/* <div className="fw-bold">{job.hired}</div> */}
          {/* <div className="text-muted">Hired</div> */}
        </div>
        <div className="d-block col-sm-2 col-xs-3">
          <Link to={{ pathname: `/review-proposal/${id}`, state: id }} className="btn bg-upwork">
            View Proposals
          </Link>
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
              <Link className="dropdown-item" to={`/review-proposal/${job?.jobID}`}>
                View Proposals
                              </Link>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => { db.collection("job").doc(job?.jobID).update({ status: "private" }) }} >
                Make Private
                              </button>
            </li>

            <li>
              <Link className="dropdown-item" to={`/job-details/${job?.jobID}`}>
                View Job posting
                              </Link>
            </li>

            <li>
              <button className="dropdown-item" onClick={() => { db.collection("job").doc(job?.jobID).delete() }}>
                Remove posting
                              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
