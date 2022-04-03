import React from "react";


export default function SearchContract() {

  return (
    <div className="input-group w-50">
      <span className="input-group-text bg-white" id="basic-addon1">
        <i className="fas fa-search"></i>
      </span>
      <input
        type="search"
        className="form-control shadow-none"
        placeholder="Search contract"
        aria-label="Input group example"
        aria-describedby="basic-addon1"
      />
    </div>
  );
}
