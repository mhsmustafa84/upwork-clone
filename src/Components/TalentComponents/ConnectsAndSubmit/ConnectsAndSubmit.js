import React from "react";

export default function ConnectsAndSubmit() {
  return (
    <div className="bg-white py-lg-4 px-4 border border-1 row py-sm-3">
      <div className="d-lg-grid gap-2  mx-auto d-none">
        <button className="btn bg-upwork" type="button">
          Submit a proposal
        </button>
        <button className="btn btn-light border border-1 my-lg-2" type="button">
          <i className="far fa-heart" aria-hidden="true" /> Save Job
        </button>
      </div>
      <a href className="advanced-search-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          aria-hidden="true"
          role="img"
          fill="green"
          width="15px"
          className="my-lg-4"
        >
          <path d="M10.559 3.97l2.31-3.757C12.94.095 12.888 0 12.753 0H4v8h8.753c.136 0 .187-.1.116-.217l-2.31-3.814zM1.999 0h1v14H1V0h1z"></path>
        </svg>{" "}
        Flag as inappropriate
      </a>
      <p>
        Required Connects to submit a proposal: 2{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          aria-hidden="true"
          role="img"
          width="15px"
          fill="green"
        >
          <path d="M7 0a7 7 0 100 14A7 7 0 007 0zm3.017 4.981c0 1.57-1.128 2.278-2.52 2.52l-.131 1.03h-.96l-.251-2.015.059-.06c1.608-.06 2.327-.588 2.327-1.44v-.023c0-.72-.551-1.236-1.462-1.236-.804 0-1.464.36-2.064 1.008l-.9-.948c.72-.827 1.644-1.39 3-1.39 1.738 0 2.902.983 2.902 2.53v.024zm-3.958 6.284V9.598h1.606v1.667H6.059z"></path>
        </svg>
      </p>
      <p>Available Connects: 60</p>
    </div>
  );
}
