import React from "react";
import CustomButtonwithbackground from "../../../Components/TalentComponents/CustomButtonwithBackground/CustomButton";
export default function AccountInfo() {
  return (
    <>
      <div className="container card mt-2 mb-2">
        <div className="row">
          <div className="col-md-6 ">
            <h5 className="mt-3">Account</h5>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-default me-2  mt-3 d-flex justify-content-center border rounded-circle"
              style={{
                width: "30px",
                height: "30px",
                textAlign: "center",
                paddingTop: "3px",
                paddingBottom: "3px",
              }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
            >
              <div>
                <i className="fas fa-pen"></i>
              </div>
            </button>
          </div>
        </div>
        <hr />

        <img src="" className="rounded float-start" alt=""></img>
        <hr />
        <h4>
          {" "}
          A***emad <br />
        </h4>
        <p>
          ITI Frontend developers - Client <br />
        </p>

        <h4>
          Email
          <br />
        </h4>
        <p>
          e***5@gmail.com
          <br />
        </p>
      </div>

      <div className="container card mt-2 mb-2">
        <div className="row">
          <div className="col-md-6">
            <h5 className="ps-3 mt-3 ">Company Contacts</h5>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-default me-2  mt-3 d-flex justify-content-center border rounded-circle"
              style={{
                width: "30px",
                height: "30px",
                textAlign: "center",
                paddingTop: "3px",
                paddingBottom: "3px",
              }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              <div>
                <i className="fas fa-pen"></i>
              </div>
            </button>
          </div>
        </div>
        <hr />
        <div className="row ms-3">
          <p className="fw-bold">
            {" "}
            Owner <br />
          </p>
          <p>
            A***emad <br />
          </p>
        </div>
        <hr />
        <div className="row ms-3">
          <p className="fw-bold">
            {" "}
            Phone <br />
          </p>
          <p>
            {" "}
            0***2933 <br />
          </p>
        </div>
        <hr />
        <div className="row ms-2">
          <p className="fw-bold">
            {" "}
            VAT ID <br />
          </p>
          <p>
            {" "}
            <button
              type="button"
              className="btn btn-link"
              href="#"
              style={{ color: "#008329" }}
            >
              Enter your VAT ID to{" "}
            </button>
            enable VAT invoicing
          </p>
        </div>
        <hr />
        <div className="row ms-2">
          <p className="fw-bold">
            Time Zone <br />
          </p>
          <p>UTC-08:00 Pacific Time (US & Canada); Tijuana</p>
        </div>
        <hr />
        <div className="row ms-2 mb-2">
          <p className="fw-bold">
            {" "}
            Address <br />
          </p>
          <p>
            M***tree <br />
          </p>
          <p>
            C***3456 <br />
          </p>
          <p>
            Egypt <br />
          </p>
        </div>
      </div>

      <div className="container card mt-3 mb-2">
        <div className="row d-flex align-items-end text-start">
          <h6 className="pt-2">This is a Client account</h6>
          <div className="col-md-3 col-sm-3 mb-3 ">
            <CustomButtonwithbackground headers="Create new Account" />
          </div>
          <div className="col-md-9 col-sm-9 mb-3">
            <button
              type="button"
              className="btn btn-link"
              href="#"
              style={{ color: "#008329" }}
            >
              Close account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
