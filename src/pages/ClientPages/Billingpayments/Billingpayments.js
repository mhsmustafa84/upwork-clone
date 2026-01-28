import React from "react";
import { Link } from "react-router-dom";
export default function Billingpayments() {
  return (
    <>
      {/* <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    @import url(//db.onlinewebfonts.com/c/3def92f7b2ad644bd382798ecc8ca4c7?family=Canela);\n     {\n        .container {\n             ;\n        }\n    }\n\n    * {\n        margin: 0;\n        padding: 0;\n        \n\n    }\n    body{\n        ;\n\n    }\n",
        }}
      /> */}

      <div className="container mb-4 mt-3">
        <h5 className="fw-bold">Billing & payments</h5>
      </div>
      <div className="container card mt-3">
        <p className=" mt-3">
          <i className="fas fa-check-circle me-2"></i>By default, you'll be
          charged a 3% processing fee per payment. Setup or edit your billing
          methods to opt into your payment processing preference below.
        </p>

        <div className="W-100%">
          <br />
        </div>
        <div className="W-100%">
          <br />
        </div>
      </div>

      <div className="container card mt-3 mb-3">
        <h4 className="pt-3 fw-bold ps-3">Balance due</h4>
        <hr />
        <div className="row mt-3">
          <div className="col-md-6">
            <p className="ps-3">
              Your balance due is <span className="fw-bold">$0.00</span>
            </p>
          </div>
          <div className="col-md-6 text-end mb-2">
            <button
              type="button"
              className="btn btn-secondary  rounded-lg me-md-2 border border-rounded"
              disabled
            >
              pay Now
            </button>
          </div>

          <div className="W-100%">
            <br />
          </div>
          <div className="W-100%">
            <br />
          </div>
        </div>
      </div>

      <div className="container card mt-3 mb-3">
        <div className="row">
          <div className="col-md-6">
            <h4 className="fw-bold pt-3 ps-3">Billing methods</h4>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <Link
              type="button"
              className="btn btn-default me-2 d-flex justify-content-center border rounded-border"
              style={{
                width: "30px",
                height: "30px",
                textAlign: "center",
                paddingTop: "3px",
                paddingBottom: "3px",
              }}
              // data-bs-toggle="modal"
              // data-bs-target="#exampleModal4"
              to="/paymentmethods"
            >
              Add Method
            </Link>
          </div>
        </div>

        <hr />
        <h5 className="ps-3">You have not set up any billing methods yet.</h5>
        <p className="ps-3">
          Set up your billing methods so you'll be able to hire right away when
          you're ready.
        </p>
        <small className="mb-3 ps-3">
          A 3% processing fee will be assessed on all payments.
          <a
            href="https://support.upwork.com/hc/en-us/articles/218375638"
            style={{ textDecoration: "none", color: "#218329" }}
          >
            {" "}
            Learn more{" "}
          </a>
        </small>
      </div>
    </>
  );
}
