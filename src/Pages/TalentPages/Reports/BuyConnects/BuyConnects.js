/* eslint-disable */
import React, { useState } from "react";
import CustomButtonwithbackground from "../../../../Components/TalentComponents/CustomButtonwithBackground/CustomButton";
import CustomButtonwithoutbackground from "../../../../Components/TalentComponents/CustomButtonwithoutbackground/CustomButton";
import DropDownList from "../../../../Components/TalentComponents/DropDownList Component/dropdown";

export default function BuyConnects() {
  const [dropdown, setDropdown] = useState({
    label: " A mount of connects",
    names: [
      "  10 for $1.5",
      " 20 for $3",
      " 40 for $6",
      "60 for $9",
      " 80 for $12",
    ],
  });
  return (
    <>
      <section>
        <div className="W-100%">
          <br />
        </div>
        <div className="W-100%">
          <br />
        </div>
        <div className="W-100%">
          <br />
        </div>
        <div className="container card">
          <div className="row">
            <h2 id="heading" className="mb-4 pt-3 ps-5 fs-1 fw-bold ">
              Buy Connects
            </h2>
            <hr />
          </div>
          <div className="row">
            <h4 className="mb-0 pt-3 ps-5 para fs-3 ">
              Your available Connects
            </h4>
            <div className="mb-0 pt-3 ps-5 pb-4" style={{ color: "#008329" }}>
              116
            </div>
          </div>
          <div className="row">
            <h4 className="mb-0 pt-3 ps-5 fs-3 ">Select the amount to buy</h4>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12 mb-5 mt-2">
              <DropDownList dropdowndata={dropdown} />
            </div>
            <div className="row">
              <h4 className="mb-0 pt-3 ps-5 para">
                Your account will be charged
              </h4>
              <div className="mb-0 pt-3 ps-5 pb-4">$3.00</div>
            </div>
            <div className="row">
              <h4 className="mb-0 pt-3 ps-5 para fs-3 ">
                Your new Connects balance will be
              </h4>
              <div className="mb-0 pt-3 ps-5 pb-4">136</div>
            </div>
            <div className="row">
              <h4 className="mb-0 pt-3 ps-5 para fs-3 ">
                These Connects will expire on
              </h4>
              <div className="mb-0 pt-3 ps-5 pb-4">03/17/2022</div>
            </div>
            <h4 className="mt-30 mb-2 ps-5 para fs-3">
              <label htmlFor="promoCodeInput" className="up-label mb-0">
                Promo code
              </label>
            </h4>
            <form>
              <div className="row ps-5 mb-2">
                <div className="col-sm-7 col-md-5 col-lg-5 col-xl-5 mt-10">
                  <input
                    id="promoCodeInput"
                    type="text"
                    placeholder="Enter code"
                    maxLength={30}
                    autoComplete="off"
                    aria-describedby="promoInputError"
                    aria-required="true"
                    className="up-input form-control promo-code"
                  />
                </div>
                <div className="col-sm-5 col-md-7 col-lg-7 col-xl-7 mt-10">
                  <CustomButtonwithoutbackground headers=" Apply" />
                </div>
              </div>
              <div>
                {/**/}
                {/**/}
              </div>
            </form>
            <div className="mt-3 pt-10 ps-5 mb-3 text-muted">
              <span className="d-none-mobile-app">
                This bundle of Connects will expire 1 year from today.
              </span>
              Unused Connects rollover to the next month (maximum of 200).
              <a
                aria-label="Learn more about Connects"
                href="https://support.upwork.com/entries/61069964"
                rel="noopener noreferrer"
                target="_blank"
                className="d-none-mobile-app"
                style={{ color: "#008329", textDecoration: "none" }}
              >
                Learn more
              </a>
            </div>
            <div className="mt-20 ps-5 mb-3 text-muted d-none-mobile-app">
              You're authorizing Upwork to charge your account. If you have
              sufficient funds, we will withdraw from your account balance. If
              not, the full amount will be charged to your primary billing
              method.
              <a
                aria-label="Learn more about billing methods"
                href="https://support.upwork.com/entries/61070164"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "#008329", textDecoration: "none" }}
              >
                Learn more
              </a>
            </div>
            <div className="row">
              <div className="col-md-8 col-sm-8 "></div>
              <div className="col-md-4 col-sm-4  d-flex align-items-end text-end mb-2">
                <CustomButtonwithoutbackground headers=" Cancel" />
                <CustomButtonwithbackground headers="Buy Connects" />

                <button
                  id="footerButtonDisabled"
                  disabled="disabled"
                  className="up-btn up-btn-primary up-btn-block-sm mb-0 d-none d-block-mobile-app"
                >
                  Adding Connects unavailable in app
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
