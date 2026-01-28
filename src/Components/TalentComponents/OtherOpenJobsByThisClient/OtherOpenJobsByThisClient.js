/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useTranslation } from "react-i18next";

export default function OtherOpenJobsByThisClient() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-white py-lg-1 px-4 mt-4  border  row py-xs-5">
        <h4 className="fw-bold py-3">
          {t("Other open jobs by this Client (4)")}
        </h4>
      </div>
      <div className="bg-white py-3 px-3 border  row py-xs-5">
        <a href="#" className="advanced-search-link">
          Agent for making motorcycle helmets with CE certification{" "}
          <span className="text-muted">Fixed-price</span>
        </a>
        <a href="#" className="advanced-search-link">
          agent dropshipping / I'm looking for sourcing watches for branding{" "}
          <span className="text-muted">Hourly</span>
        </a>
      </div>
    </div>
  );
}
