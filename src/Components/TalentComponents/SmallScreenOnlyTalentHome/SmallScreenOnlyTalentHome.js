import React from 'react'
import { useTranslation } from "react-i18next";  


export default function SmallScreenOnlyTalentHome() {
  const { t }=useTranslation();
    return (
       
      <div className="col-xs-12 d-lg-none d-md-block d-sm-block my-md-4 mb-sm-2">
      <li
        className="list-group-item my-lg-2  rounded  d-grid gap-2"
        type="button"
      >
        <h4>{t("MyProposals")}</h4>
      </li>
      <li
        className="list-group-item my-lg-2  rounded  d-grid gap-2"
        type="button"
      >
        <h4>{t("MyProfile")}</h4>
      </li>
    </div>
    )
}
