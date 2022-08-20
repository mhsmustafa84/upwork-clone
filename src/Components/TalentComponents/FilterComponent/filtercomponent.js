/* eslint-disable */
import React from "react";
import { useTranslation } from "react-i18next";

export default function Fillter({ headers }) {
  const { t } = useTranslation();
  return (
    <div>
      <p>
        <button
          id="filterbtn"
          className="btn -btn-default border rounded-border rounded mt-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          style={{ color: "white", backgroundColor: "#008329" }}
        >
          <svg
            width="40px"
            height="20px"
            xmlns="http://www.w3.org/200/svg"
            aria-hidden="true"
            role="img"
          >
            <path d="M11.91 2.48a3.18 3.18 0 00-6 0H0v2h5.86a3.18 3.18 0 006.05 0H14v-2zM5.39 7.32a3.2 3.2 0 00-3.1 2.45H0v2h2.45a3.2 3.2 0 005.88 0H14v-2H8.49a3.2 3.2 0 00-3.1-2.45z"></path>
          </svg>
          <span>{t("Filters")}</span>
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <form action="#">
          <div className="row">
            <div id="col1" className="col-md-2 col-sm-12 mb-5 me-3 ">
              <div className="dropdown text-start">
                <button
                  className="btn btn-default dropdown-toggle me-2 mb-3 border rounded-border fw-bold"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("search by transaction")}
                </button>
                <ul
                  className="dropdown-menu fw-bold "
                  aria-labelledby="dropdownMenuButton2"
                  //   style={{ width: "100%" }}
                >
                  <li>
                    <i
                      className="fas fa-search"
                      style={{
                        position: "absolute",
                        paddingTop: "10px",
                        paddingLeft: "3px",
                        textAlign: "center",
                      }}
                    ></i>
                    <input
                      type="search"
                      id="form1"
                      style={{ paddingLeft: "3px" }}
                      className="form-control"
                    />
                  </li>
                  <li className="fw-bold">
                    <a className="dropdown-item " link to="#">
                      {t("All Transactions")}
                    </a>
                  </li>
                  <li className="fw-bold">
                    <a className="dropdown-item" link to="#">
                      {t("All Credits")}
                    </a>
                  </li>
                  <li className="fw-bold">
                    <a className="dropdown-item" link to="#">
                      {t("All debits")}
                    </a>
                  </li>
                  <li className="fw-bold">
                    <a className="dropdown-item" link to="#">
                      {t("Hourly")}
                    </a>
                  </li>
                  <li className="fw-bold">
                    <a className="dropdown-item" link to="#">
                      {t("Fixed Price")}
                    </a>
                  </li>
                  <li className="fw-bold">
                    <a className="dropdown-item" link to="#">
                      {t("Bonus")}
                    </a>
                  </li>
                  
                  <li className="fw-bold">
                    <a className="dropdown-item" link to="#">
                      {t("Expense")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div id="col2" className="col-md-4 ms-3 col-sm-12 mb-5  ">
              <div className="dropdown text-start ">
                <button
                  className="btn btn-default dropdown-toggle border rounded-border fw-bold ms-2 "
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {headers}
                  {/* search by clients */}
                  {/* search by freelancers */}
                </button>
                <ul
                  className="dropdown-menu "
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <i
                      className="fas fa-search"
                      style={{
                        position: "absolute",
                        paddingTop: "10px",
                        paddingLeft: "3px",
                      }}
                    ></i>
                    <input
                      type="search"
                      id="form1"
                      className="form-control"
                      //   style={{ width: "100%" }}
                    />
                  </li>

                  <li className="fw-bold">
                    <a className="dropdown-item " link to="#">
                      {t("All clients")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="col3" className="col-md-5 col-sm-12 mb-5 "></div>
          </div>
        </form>
      </div>
    </div>
  );
}
