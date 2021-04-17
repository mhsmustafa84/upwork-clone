import React, { useState } from "react";
import OverviewTable from "./../overviewreportstables/overviewreporttable";
export default function WorkinProgress() {
  // const [Tablesdata, setTablesdata] = useState({
  //   Dates: [
  //     {
  //       Day1: " MON 3/8",
  //       Day2: "TUE 3/9",
  //       Day3: "WED 3/10",
  //       Day4: "THU 3/11",
  //       Day5: "FRI 3/12",
  //       Day6: "STA 3/13",
  //       Day7: "SUN 3/14",
  //       JOB: "Service fee for fixed price Ref id",
  //       RATE: "$3/hr",
  //       PRICE: "$20",
  //     },
  //   ],
  // });
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
            When will I get paid{" "}
          </a>
          <h5 className="mt-2 ms-2 mb-2">You have no work in progress</h5>
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
