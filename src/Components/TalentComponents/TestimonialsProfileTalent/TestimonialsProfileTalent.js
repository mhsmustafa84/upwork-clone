/* eslint-disable */
import React from "react";
import { useTranslation } from "react-i18next";

export default function TestimonialsProfileTalent() {
  const { t } = useTranslation();
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    @import url(//db.onlinewebfonts.com/c/3def92f7b2ad644bd382798ecc8ca4c7?family=Canela);\n     {\n        .container {\n             ;\n        }\n    }\n\n    * {\n        margin: 0;\n        padding: 0;\n        \n\n    }\n    body{\n        ;\n\n    }\n",
        }}
      />
      <div className="container card mb-3 mt-5">
        <div className="row mt-3">
          <div className="col">
            <h2 className="mb-0">{t("Testimonials")}</h2>
            <h6 className="mb-3">Endorsements from past clients</h6>
          </div>
          <div className="col d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-default me-4 d-flex justify-content-center border rounded-circle"
              style={{
                width: 30,
                height: 30,
                textAlign: "center",
                paddingTop: 3,
                paddingBottom: 3,
              }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              <div>
                <i className="fas fa-plus" />
              </div>
            </button>
          </div>
          <hr />
          <div className="row">
            {/*  employment skills */}
            <div className="col-md-6">
              <h5>Romany Mounir</h5>
              <p className="mb-3">
                He was a great freelancer to work with
              </p>
            </div>
            {/* icons */}
            <div className="col-md-6 d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-default me-2 d-flex justify-content-center border rounded-circle"
                style={{
                  width: 30,
                  height: 30,
                  textAlign: "center",
                  paddingTop: 3,
                  paddingBottom: 3,
                }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal13"
              >
                <div>
                  <i className="fas fa-pen" />
                </div>
              </button>
              <button
                type="button"
                className="btn btn-default d-flex justify-content-center border rounded-circle mb-3"
                style={{
                  width: 30,
                  height: 30,
                  textAlign: "center",
                  paddingTop: 3,
                  paddingBottom: 3,
                }}
              >
                <div>
                  <i className="far fa-trash-alt" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* model for add employment */}

      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Employment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label fw-bold"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label fw-bold"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                  />
                </div>

                <div className="row">
                  <h5 className="fw-blod">Period</h5>
                  <div className="col-md-6">
                    <div className="dropdown">
                      <a
                        className="btn btn-light dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        month
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            January
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            february
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            March
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Apirl
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            May
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            June
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            July
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            August
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            October
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            November
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Decemeber
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="dropdown">
                      <a
                        className="btn btn-light dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        year
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            2021
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2020
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2019
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2018
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2017
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2016
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2015
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2014
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2013
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2012
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2011
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="row">
                    <h5 className="fw-blod">Through</h5>
                    <div className="col-md-6">
                      <div className="dropdown">
                        <a
                          className="btn btn-light dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          month
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              January
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              february
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              March
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Apirl
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              May
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              June
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              July
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              August
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              October
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              November
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Decemeber
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="dropdown">
                        <a
                          className="btn btn-light dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          year
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              2021
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2020
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2019
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2018
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2017
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2016
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2015
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2014
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2013
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2012
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              2011
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-text ">
                      <input
                        className="form-check-input mt-0 "
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                      />
                      I currently worked here
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-link border rounded-border "
                data-bs-dismiss="modal"
                style={{
                  color: "#008329",
                  backgroundColor: "white",
                  textDecoration: "none",
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-default border rounded-border"
              >
                Save{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal13"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Employment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label fw-bold"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="form-label fw-bold"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                  />
                </div>

                <div className="row">
                  <h5 className="fw-blod">Period</h5>
                  <div className="col-md-6">
                    <div className="dropdown">
                      <a
                        className="btn btn-light dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        month
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            January
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            february
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            March
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Apirl
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            May
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            June
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            July
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            August
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            October
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            November
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Decemeber
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="dropdown">
                      <a
                        className="btn btn-light dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        year
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            2021
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2020
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2019
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2018
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2017
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2016
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2015
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2014
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2013
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2012
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2011
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-link border rounded-border "
                data-bs-dismiss="modal"
                style={{
                  color: "#008329",
                  backgroundColor: "white",
                  textDecoration: "none",
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-default border rounded-border"
              >
                Save{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
