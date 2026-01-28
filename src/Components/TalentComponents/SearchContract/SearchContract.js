import React from "react";
import { useTranslation } from "react-i18next";

export default function SearchContract() {
  const { t } = useTranslation();
  return (
    <div className="input-group w-50">
      <span className="input-group-text bg-white" id="basic-addon1">
        <i className="fas fa-search"></i>
      </span>
      <input
        type="search"
        className="form-control shadow-none"
        placeholder={t("Search contract")}
        aria-label="Input group example"
        aria-describedby="basic-addon1"
      />
    </div>
  );
}
