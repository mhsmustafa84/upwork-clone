import React from "react";
import "./JobPostingsPagination.css"

export default function JobPostingsPagination() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <span>1</span>-<span>1</span> of <span> 1</span> Job postings
        </div>
        <div className="col-5"></div>
        <div className="col">
          <nav aria-label="Page navigation" className="paging">
            <ul className="pagination  fw-bold ">
              <li className="page-item">
                <a className href="#">
                  <i className="fa fa-angle-left px-2"> </i>
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="active" href="#" >
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="" href="#">
                  Next<i className="fa fa-angle-right px-2"> </i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
