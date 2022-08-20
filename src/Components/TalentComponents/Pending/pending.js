import React from "react";
import { useTranslation } from "react-i18next";

export default function Pending() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container card mt-3">
        <h5>{t("You have no pending payments")}</h5>
        <div className="W-100%">
          <br />
        </div>
        <div className="W-100%">
          <br />
        </div>
        <div className="W-100%">
          <br />
        </div>
      </div>
    </>
  );
}
