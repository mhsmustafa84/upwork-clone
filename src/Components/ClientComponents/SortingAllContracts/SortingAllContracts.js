/* eslint-disable */
import React from "react";
import { useTranslation } from "react-i18next";

export default function SortingAllContracts() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="col-12 mb-3">
        <small className="fw-bold">{t("Sort By")}</small>
        <div className="btn-group btn-startdate col-4">
          <button
            type="button"
            className="btn border border-gray py-0 dropdown-toggle text-start mx-3"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            {t("Start date")}
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
        <button
          type="button"
          className="mx-auto btn btn-light btn-sm border-gray"
        >
          <svg
            xmlns=" http://www.w3.org/2000/svg"
            width={17}
            height={17}
            fill="#37a000"
            className="bi bi-arrow-down-up d-block "
            viewBox="0 0 19 16"
            style={{ marginLeft: 0 }}
          >
            <path
              fillRule="evenodd"
              stroke="#37a000"
              strokeWidth=".7"
              d=" M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5
0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5
0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708
0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </button>
        <span className="mx-2">0 </span>
        <span>{t("total")}</span>

        <a type="button" className="float-end text-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="currentColor"
            className="bi bi-download mx-1 stroke-2 csv2"
            viewBox="0 0 1616"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
          </svg>
          {t("Download csv")}
        </a>
      </div>
    </div>
  );
}
