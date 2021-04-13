import React from "react";

export default function FillterComponent(props) {
  return (
    <div>
      <p>
        <button
          id="filterbtn"
          className="btn -btn-default border rounded"
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
          <span>filter</span>
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <form action="#">
          <div class="row">
            <div id="col1" className="col-md-3 col-sm-12 mb-5 ">
              <div className="dropdown text-start">
                <button
                  className="btn btn-default dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  search by transaction
                </button>
                <ul
                  className="dropdown-menu "
                  aria-labelledby="dropdownMenuButton2"
                  //   style={{ width: "100%" }}
                >
                  <li>
                    <i
                      class="fas fa-search"
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
                  <li>
                    <a className="dropdown-item " link to="#">
                      All Transactions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" link to="#">
                      All Credits
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" link to="#">
                      All debits
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" link to="#">
                      Hourly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" link to="#">
                      Fixed Price
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" link to="#">
                      Bonus
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" link to="#">
                      adjestment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" link to="#">
                      adjestment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" link to="#">
                      Expense
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div id="col2" className="col-md-4 col-sm-12 mb-5 ">
              <div className="dropdown text-start ">
                <button
                  className="btn btn-default dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ props }}
                  {/* search by clients */}
                  {/* search by freelancers */}
                </button>
                <ul
                  className="dropdown-menu "
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <i
                      class="fas fa-search"
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

                  <li>
                    <a className="dropdown-item " link to="#">
                      All clients
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
