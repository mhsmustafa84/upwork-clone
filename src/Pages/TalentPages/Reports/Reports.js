import React from "react";

export default function Reports() {
  return (
    <>
      <div className="MyReports">
        <div className="container">
          <div className="row mb-4">
            <div className="col">
              <div className="mt-3 d-md-none d-sm-none"></div>

              <h1
                className="mb-2 ms-2 mt-4"
                style={{
                  lineHeight: "27px",

                  fontSize: "21px",

                  fontWeight: "700",

                  textAlign: "left",
                }}
              >
                My Reports
              </h1>
            </div>
          </div>
        </div>

        <div ClassName="container" style={{ backgroundColor: "white" }}>
          <div ClassName="row" style={{ paddingLeft: "20px" }}>
            <h3
              ClassName="mb-10 mt-4"
              style={{
                lineHeight: "24px",
                fontSize: "17px",
                fontWeight: "700",
              }}
            >
              <a
                href="weeklysummary.html"
                style={{ textDecoration: "none", color: "#38a000" }}
              >
                Weekly summary
              </a>
            </h3>
          </div>

          <div ClassName="row d-flex flex-row" style={{ paddingLeft: "20px" }}>
            <div ClassName="col-md-6">
              <p ClassName="mb-0">
                <i ClassName="far fa-calendar-check me-2"></i>
                <span>Current week</span>
              </p>
            </div>

            <div ClassName="col-md-6 text-end">
              <button ClassName="btn btn-default border rounded-circle ">
                <i ClassName="fas fa-file-csv"></i>
              </button>
            </div>
          </div>

          <div ClassName=" row border-top mt-4" style={{ paddingLeft: "20px" }}>
            <h3
              ClassName="mb-10 mt-4 text-muted"
              style={{
                lineHeight: "24px",
                fontSize: "17px",
                fontWeight: "700",
              }}
            >
              <i ClassName="fas fa-lock me-2"></i>

              <a
                ClassName="text-muted"
                link
                to="#"
                // style="text-decoration: none;color: black"
                style={{ textDecoration: " none", color: "black" }}
              >
                Weekly summary By Client
              </a>
            </h3>
          </div>

          <div ClassName="row d-flex flex-row" style={{ paddingLeft: "20px" }}>
            <div ClassName="col-md-6">
              <p ClassName="mb-0 text-muted">
                <i ClassName="far fa-calendar-check me-2"></i>
                <span>Current week</span>
              </p>
            </div>

            <div ClassName="col-md-6 text-end text-muted">
              <button
                ClassName="btn btn-default  border rounded-circle text-muted"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i ClassName="fas fa-file-csv"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
