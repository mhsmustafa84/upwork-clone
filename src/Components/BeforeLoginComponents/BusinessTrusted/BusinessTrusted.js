import React from "react";
import talentMainSectionLogoMicrosoftDevIT from "../../../assets/img/talent_main-section-logo-microsoft-Dev-IT.svg";
import talentMainSectionLogoAirbnbDevIT from "../../../assets/img/talent_main-section-logo-airbnb-Dev-IT.svg";
import talentMainSectionLogoGeDevIT from "../../../assets/img/talent_main-section-logo-ge-Dev-IT.svg";
import talentMainSectionLogoAutomaticDevIT from "../../../assets/img/talent_main-section-logo-automatic-Dev-IT.svg";
import talentMainSectionLogoBissellDevIT from "../../../assets/img/talent_main-section-logo-bissell-Dev-IT.svg";
import talentMainSectionLogoCotyDevIT from "../../../assets/img/talent_main-section-logo-coty-Dev-IT.svg";
import talentMainSectionLogoGoDaddyDevIT from "../../../assets/img/talent_main-section-logo-GoDaddy-Dev-IT.svg";

export default function BusinessTrusted() {
  return (
    <div>
      <div
        className="d-flex flex-wrap justify-content-evenly mx-5 my-md-5 mb-5"
        id="trusted-by-ID"
      >
        <div className="col-4 col-lg-2 pe-5 border-end small text-secondary">
          Trusted by 5M+businesses
        </div>
        <div className="col-4 col-lg-2">
          <img
            className="mx-auto d-block"
            src={talentMainSectionLogoMicrosoftDevIT}
            alt=""
          />
        </div>
        <div className="col-3 col-lg-1">
          <img
            className="mx-auto d-block"
            src={talentMainSectionLogoAirbnbDevIT}
            alt=""
          />
        </div>
        <div className="col-1 col-lg-1">
          <img
            className="mx-auto d-block"
            src={talentMainSectionLogoGeDevIT}
            alt=""
          />
        </div>
        <div className="col-5 col-lg-2">
          <img
            className="mx-auto d-block"
            src={talentMainSectionLogoAutomaticDevIT}
            alt=""
          />
        </div>
        <div className="col-2 col-lg-1">
          <img
            className="mx-auto d-block"
            src={talentMainSectionLogoBissellDevIT}
            alt=""
          />
        </div>
        <div className="col-3 col-lg-1">
          <img
            className="mx-auto d-block"
            src={talentMainSectionLogoCotyDevIT}
            alt=""
          />
        </div>
        <div className="col-3 col-lg-1">
          <img
            className="mx-auto d-block"
            src={talentMainSectionLogoGoDaddyDevIT}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
