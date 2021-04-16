import React from "react";
export default function DropDownList({ dropdowndata }) {
  return (
    <div className="DropDownList">
      <div className="ms-3 me-3 col-md-6 col-sm-12">
        <button
          className="btn btn-light dropdown-toggle show fw-bold border border-rounded "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="true"
          style={{ backgroundColor: "white", color: "black" }}
        >
          {dropdowndata.label}
        </button>
        <ul
          className="dropdown-menu ps-2 show border rounded-border "
          data-popper-placement="bottom-start"
          data-popper-reference-hidden=""
          data-popper-escaped=""
          style={{
            margin: "0px",
            position: "absolute",
            inset: "0px auto auto 0px",
            transform: "translate(0px, 40px)",
          }}
        >
          {dropdowndata.names.map((name, index) => {
            return (
              <li key={index} className="fw-bold">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={index}
                  id="flexCheckDefault"
                />
                <label className="form-check-label ms-3" for="flexCheckDefault">
                  {name}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
