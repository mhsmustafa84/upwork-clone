import React from "react";

export default function DateContract() {
  return (
    <div className="btn-group btn-startdate w-25">
      <button
        type="button"
        className="btn border border-gray py-0 dropdown-toggle text-start"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded="false"
      >
        Start date
        <i className="fa fa-sort-down text-dark float-end"></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
        <li>
          <button className="dropdown-item" type="button">
            Action
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            Another action
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            Something else here
          </button>
        </li>
      </ul>
    </div>
  );
}
