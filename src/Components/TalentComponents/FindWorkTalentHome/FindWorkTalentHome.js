import React from "react";

export default function FindWorkTalentHome() {
  return (
    <div className="d-none d-lg-block">
      <div className="row my-lg-4">
        <div className="col">
          <h3>Find Work</h3>
        </div>
        <div className="col-8">
          <div className="col-8 input-group form-outline has-success">
            <input
              id="input"
              type="search"
              className="form-control text-dark bg-white btn-outline-success"
              placeholder="Search For Jobs"
            />
            <button
              id="search-button"
              type="button"
              className="btn bg-upwork bg-invert"
            >
              <i className="fas fa-search" />
            </button>
          </div>
          <span>
            <a href="#" className="advanced-search-link">
              Advanced Search
            </a>
          </span>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
