import React from "react";
import apple from "../../../assets/svg/apple.svg";

export default function SignUpSecondForm() {
  return (
    <div className="col-sm-12 col-md-6 mx-auto">
      <div className="shadow-sm p-3 mb-5 bg-white rounded mx-auto mt-5 w-100 border">
        <form>
          <h4 className="text-center m-0">
            <span
              style={{
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "1.3em",
              }}
            >
              Complete your free account setup
            </span>
          </h4>
          <div className="row pt-3">
            <div className="input-group col-6 w-50">
              <span className="input-group-text bg-white" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </span>
              <input
                type="text"
                className="form-control  border-start-0"
                placeholder="First Name"
                aria-label="Input group example"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group col-6 w-50">
              <span className="input-group-text bg-white" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </span>
              <input
                type="text"
                className="form-control  border-start-0"
                placeholder="Last Name"
                aria-label="Input group example"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="input-group pt-3">
            <span className="input-group-text bg-white" id="basic-addon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-lock-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
            </span>
            <input
              type="text"
              className="form-control  border-start-0"
              placeholder="Password"
              aria-label="Input group example"
              aria-describedby="basic-addon1"
            />
          </div>
          <div>
            <h3 className="text-center mt-3">i want to:</h3>
            <div
              className="btn-group d-flex  border-gray rounded"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                defaultChecked
              />
              <label className="btn btn-outline-upwork" htmlFor="btnradio1">
                Hire for a project
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
              />
              <label className="btn btn-outline-upwork" htmlFor="btnradio2">
                Work as a freelancer
              </label>
            </div>
          </div>
          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <p>
                Yes, I understand and agree to the
                <a
                  data-v-c17031dc=""
                  href="https://www.upwork.com/legal#terms"
                  target="_blank"
                >
                  Upwork Terms of Service
                </a>
                , including the
                <a
                  data-v-c17031dc=""
                  href="https://www.upwork.com/legal#useragreement"
                  target="_blank"
                >
                  User Agreement
                </a>
                and{" "}
                <a
                  data-v-c17031dc=""
                  href="https://www.upwork.com/legal#privacy"
                  target="_blank"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </label>
          </div>

          <div className="d-grid gap-2 col-8 mx-auto mt-3 hitbtn-class loginpcolor mb-4">
            <button className="btn bg-upwork " type="button">
              Continue with Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
