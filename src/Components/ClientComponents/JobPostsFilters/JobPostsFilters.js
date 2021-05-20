import React from "react";
import "./JobPostsFilters.css";
import { useTranslation } from "react-i18next";

export default function JobPostsFilters() {
  const { t } = useTranslation();
  return (
    <div>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">{t("Posted by")}</th>
            <th scope="col">{t("Visibility")}</th>
            <th scope="col">{t("Status")}</th>
            <th scope="col">{t("Type")}</th>
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
                  <option selected>{t("All cowworkers")}</option>
                  <option value={1}> {t("Me")}</option>
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
                  {t("All")}
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
                  {t("All")}
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
                  {t("All")}
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
                  {t("Invite-only")}
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
                  {t("Drafts")}
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
                  {t("Fixed-Price")}
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
                  {t("Public")}
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
                  {t("Open")}
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
                  {t("Hourly")}
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" className="btn btn-success">
        {t("Close Filters")}
      </button>
    </div>
  );
}
