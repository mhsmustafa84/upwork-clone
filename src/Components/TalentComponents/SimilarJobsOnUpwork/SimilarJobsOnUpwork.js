/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useTranslation } from "react-i18next";

export default function SimilarJobsOnUpwork() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-white py-lg-1 px-4 mt-4  border  row py-xs-5">
        <h4 className="fw-bold py-3">{t("Similar Jobs on Upwork")}</h4>
      </div>
      <div className="bg-white py-3 px-3 border  row">
        <a href="#" className="advanced-search-link">
          Agent for making motorcycle helmets with CE certification{" "}
          <span className="text-dark">
            I have various logo design examples that I would like to use as
            inspiration for rebra
          </span>
        </a>
      </div>
    </div>
  );
}
