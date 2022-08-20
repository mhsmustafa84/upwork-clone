/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateUserData } from "./../../../Network/Network";
import "./CreateProfileHourlyRate.css";

export default function CreateProfileHourlyRate({ setBtns, btns }) {
  let [rate, setRate] = useState(0);
  const rateNum = ({ target }) => {
    rate = parseInt(target.value);
    setRate(rate);
  };
  const addRate = () => {
    console.log(rate);
    updateUserData("talent", { hourlyRate: rate, profileCompletion: 60 });
    setBtns({ ...btns, titleAndOverview: false })
  };
  return (
    <section className=" bg-white border rounded mt-3 pt-4">
      <div className="border-bottom ps-4 pb-3">
        <h4>Hourly Rate</h4>
      </div>
      <div className="p-4 my-3">
        <p>
          Clients will see this rate on your profile and in search results once
          you publish your profile. You can adjust your rate every time you
          submit a proposal.
        </p>
        <div>
          <div className="mb-3 d-flex justify-content-between">
            <div>
              <span>
                <strong>Hourly Rate</strong>
              </span>
              <p>Total amount the client will see</p>
            </div>
            <div className="me-5 mt-2 position-relative jd-inp-cn">
              <div className="position-absolute">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <input
                className="form-control text-end"
                type="number"
                placeholder="00.00"
                onInput={rateNum}
              />
              <span className="position-absolute">/hr</span>
            </div>
          </div>
          <div className="mb-3 d-flex justify-content-between border-top pt-3">
            <div>
              <span>
                <strong>Upwork Service Fee</strong>
                <a className="upw-c-cn fw-normal ms-3" href="">
                  Explain this
                </a>
              </span>
              <p className="w-75">
                The Upwork Service Fee is 20% when you begin a contract with a
                new client. Once you bill over $500 with your client, the fee
                will be 10%.
              </p>
            </div>
            <div className="me-5 mt-4 d-flex">
              <span style={{ position: "relative", right: "148px" }}>
                <i className="fas fa-dollar-sign"></i>
              </span>
              <span className="text-end">{(rate * 20) / 100}</span>
              <span style={{ position: "relative", right: "-30px" }}>/hr</span>
            </div>
          </div>
          <div className="mb-3 d-flex justify-content-between border-top pt-3">
            <div>
              <span>
                <strong>You'll Receive</strong>
              </span>
              <p>The estimated amount you'll receive after service fees</p>
            </div>
            <div className="me-5 mt-2 position-relative jd-inp-cn">
              <div className="position-absolute">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <input
                className="form-control text-end"
                type="number"
                placeholder="00.00"
                value={(rate * 80) / 100}
              />
              <span className="position-absolute">/hr</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
        <button className="btn">
          <Link
            className="btn border text-success me-4 px-5 fw-bold"
            to="/create-profile/language"
          >
            Back
          </Link>
        </button>
        <button className={`btn ${rate === 0 || rate === "" ? "disabled" : ""}`}>
          <Link
            className="btn bg-upwork px-5"
            to="/create-profile/title-and-overview"
            onClick={addRate}
          >
            Next
        </Link>
        </button>
      </div>
    </section>
  );
}
