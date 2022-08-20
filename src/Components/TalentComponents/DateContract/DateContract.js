import React from "react";
import { useTranslation } from "react-i18next";

export default function DateContract() {
  const { t } = useTranslation();
  return (
    <div className="btn-group btn-startdate w-25">
      <button
        type="button"
        className="btn border border-gray py-0 dropdown-toggle text-start"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded="false"
      >
        {t("Start date")}
        <i className="fa fa-sort-down text-dark float-end"></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
        <li>
          <button className="dropdown-item" type="button">
            {t("Start date")}
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            {t("End date")}
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            {t("Client name")}
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            {t("Contract name")}
          </button>
        </li>
      </ul>
    </div>
  );
}
