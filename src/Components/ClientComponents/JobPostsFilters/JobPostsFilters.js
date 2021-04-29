import React from "react";
import "./JobPostsFilters.css"

export default function JobPostsFilters() {
  return (
    <div>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Posted by</th>
            <th scope="col">Visibility</th>
            <th scope="col">Status</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="input-group rounded-3">
                <select
                  className="form-select border border-secondary text-dark  btn-outline-light "
                  id="inputGroupSelect01"
                >
                  <option selected>All cowworkers</option>
                  <option value={1}> Me</option>
                </select>
              </div>
            </td>
            <td>
              <div className="form-check py-2 my-0">
                <input
                  className="form-check-input btn-outline-success"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  All
                </label>
              </div>
            </td>
            <td>
              <div className="form-check py-2 my-0">
                <input
                  className="form-check-input btn-outline-success"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  All
                </label>
              </div>
            </td>
            <td>
              <div className="form-check py-2 my-0">
                <input
                  className="form-check-input btn-outline-success"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  All
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <div className="form-check py-2 my-0">
                <input
                  className="form-check-input btn-outline-success"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Invite-only
                </label>
              </div>
            </td>
            <td>
              <div className="form-check py-2 my-0">
                <input
                  className="form-check-input btn-outline-success"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Drafts
                </label>
              </div>
            </td>
            <td>
              <div className="form-check py-2 my-0">
                <input
                  className="form-check-input btn-outline-success"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Fixed-Price
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <div className="form-check py-2 my-0">
                <input
                  className="form-check-input btn-outline-success"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Public
                </label>
              </div>
            </td>
            <td>
              <div className="form-check py-2 my-0">
                <input
                  className="form-check-input btn-outline-success"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Open
                </label>
              </div>
            </td>
            <td>
              <div className="form-check py-2 my-0">
                <input
                  className="form-check-input btn-outline-success"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Hourly
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" className="btn btn-success">
        Close Filters
            </button>
    </div>
  );
}
