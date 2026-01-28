/* eslint-disable */
// import OverviewTable from "./../overviewreportstables/overviewreporttable";
import { useTranslation } from "react-i18next";

export default function WorkinProgress() {

  const { t } = useTranslation();
  return (
    <>
      <div className="container card mt-3">
        {/* <h5 className="mt-3">
                  Timesheet for Mar 8-14 (this week) in progress
                </h5> */}
        <div className="row">
          <a
            className="text-end mt-2 ms-2 mb-2 "
            link
            to="#"
            style={{ textDecoration: "none", color: "#008329" }}
          >
            {t("When will I get paid")}
          </a>
          <h5 className="mt-2 ms-2 mb-2">
            {t("You have no work in progress")}
          </h5>
        </div>
        {/* <p className="text-end">
                  This Timesheet includes 0.00 hours in manual time
                  <i className="far fa-question-circle ms-2" />
                </p> */}
        {/* <div className="row">
            <OverviewTable overviewdate={Tablesdata} /> 
            </div> */}
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
