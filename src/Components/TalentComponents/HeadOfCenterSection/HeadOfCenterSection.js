/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function HeadOfCenterSection() {
  return (
    <div>
      <div className="list-group-item my-lg-2  rounded text-center ">
        <h6>
          <a href="#" className="text-decoration-none link-success">
            {" "}
            There are new jobs. Click to see them
          </a>
        </h6>
      </div>
      <div className="list-group-item py-lg-4">
        <h4>
          {" "}
          My Feed{" "}
          <span>
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
                    RSS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Atom
                  </a>
                </li>
              </ul>
            </div>
          </span>
        </h4>
      </div>
    </div>
  );
}
