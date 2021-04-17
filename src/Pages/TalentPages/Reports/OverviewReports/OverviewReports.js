import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation,
  useHistory,
} from "react-router-dom";
import Available from "../../../../Components/TalentComponents/Available/Available";
import InReview from "../../../../Components/TalentComponents/InReviewComponent/InReview";
import Pending from "../../../../Components/TalentComponents/Pending/pending";
import WorkinProgress from "../../../../Components/TalentComponents/WorkinProgress/WorkinProgress";
export default function OverviewReports() {
  const { pathname } = useLocation();
  const { push } = useHistory();
  pathname === "/overview" && push("/overview/work-in-progress");
  return (
    <Router>
      <>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        @import url(//db.onlinewebfonts.com/c/3def92f7b2ad644bd382798ecc8ca4c7?family=Canela);              .container .nav-tabs>li>a.active h4 {\n            color: #73bb44\n        }\n\n        .container .nav-tabs>li>a.active span {\n            color: #73bb44;\n            \n        }\n        .container .nav-tabs>li>a.active{\n            background-color:#f1f2f4;\n        }\n\n\n        .container .nav-tabs>li>a h4 {\n            color: black;\n        }\n\n        .container .nav-tabs>li>a span {\n            color: black;\n        }\n\n        .container .nav-tabs>li>a h1 {\n            color: black;\n        }\n        body{\n            background-color:#f1f2f4\n        }\n    ",
          }}
        />

        <div className="W-100%">
          <br />
        </div>
        <div className="container card">
          <div class="row">
            <ul className="nav nav-tabs nav-fill " id="ex1" role="tablist">
              <li
                className="nav-item"
                role="presentation"
                // style={{ backgroundColor: "#f1f2f4" }}
              >
                <NavLink
                  id="ex2-tab-1"
                  to="/overview/work-in-progress"
                  data-mdb-toggle="tab"
                  role="tab"
                  aria-controls="ex2-tabs-1"
                  aria-selected="true"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <h4 className="nowrap m-0-bottom">
                    Work in progress
                    <span className="m-0-left-right d-lg-inline">
                      <i
                        className="far fa-question-circle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="This includes hours logged for the current work week. They will be automatically sent to the client for review Sunday night UTC (the close of the work week).
                        This also includes any fixed-price milestones that have been assigned to you. Unlike hourly timesheets, work on fixed-price milestones must be submitted when ready."
                      />
                    </span>
                  </h4>
                  <h1 className="m-xs-top-bottom nowrap ">
                    <strong className="lead-lg">$0.00</strong>
                  </h1>
                  <p className="m-0-bottom text-muted nowrap d-none d-lg-block">
                    &nbsp;
                  </p>
                </NavLink>
              </li>
              <li className="nav-item" role="presentation">
                <NavLink
                  id="ex2-tab-1"
                  data-mdb-toggle="tab"
                  to="/overview/in-review"
                  role="tab"
                  style={{ textDecoration: "none" }}
                >
                  <h4 className="nowrap m-0-bottom">
                    In review
                    <span className="m-0-left-right d-lg-inline">
                      <i
                        className="far fa-question-circle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="This represents hours logged last week that are now under review by your clients. Clients have 5 days to review your work diary.
                       This also includes any fixed-price milestones you've submitted for review. Clients have 14 days to accept (or ask for changes on) submitted milestones."
                      />
                    </span>
                  </h4>
                  <h1 className="m-xs-top-bottom nowrap ">
                    <strong className="lead-lg">$0.00</strong>
                  </h1>
                  <p className="m-0-bottom text-muted nowrap d-lg-block">
                    &nbsp;
                  </p>
                </NavLink>
              </li>
              <li className="nav-item" role="presentation">
                <NavLink
                  id="ex2-tab-3"
                  to="/overview/pending"
                  data-mdb-toggle="tab"
                  role="tab"
                  style={{ textDecoration: "none" }}
                >
                  <h4 className="nowrap m-0-bottom">
                    Pending
                    <span className="m-0-left-right  d-lg-inline">
                      <i
                        className="far fa-question-circle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="This represents the standard security hold period in which funds cannot be withdrawn.

                       Hourly payments are in the security period from the time the client review ends on Friday to when the funds are released on Wednesday.
                       
                       Payments for fixed-price milestones (and bonuses) have a 5-day security period from the time payment is made to funds availability."
                      />
                    </span>
                  </h4>
                  <h1 className="m-xs-top-bottom nowrap ">
                    <strong className="lead-lg">$0.00</strong>
                  </h1>
                  <p className="m-0-bottom text-muted nowrap d-lg-block">
                    &nbsp;
                  </p>
                </NavLink>
              </li>

              <li className="nav-item" role="presentation">
                <NavLink
                  id="ex2-tab-4"
                  data-mdb-toggle="tab"
                  to="/overview/available"
                  role="tab"
                  style={{ textDecoration: "none" }}
                >
                  <h4 className="nowrap m-0-bottom">
                    Available
                    <span className="m-0-left-right  d-lg-inline">
                      <i
                        className="far fa-question-circle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="These are funds available to withdraw. If you've set up automatic payments, this will usually show a zero balance, with the last payment indicated below. Click this tab to see a history of payments already sent."
                      />
                    </span>
                  </h4>
                  <h1 className="m-xs-top-bottom nowrap ">
                    <strong className="lead-lg">$0.00</strong>
                  </h1>
                  <p className="m-0-bottom text-muted nowrap d-lg-block">
                    &nbsp;
                  </p>
                  <p className="m-0-bottom text-muted nowrap d-lg-block">
                    Last payment: $0.00
                  </p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </>

      <switch>
        <Route path="/overview/work-in-progress" exact>
          <WorkinProgress />
        </Route>
        <Route path="/overview/in-review" exact>
          <InReview />
        </Route>
        <Route path="/overview/pending" exact>
          <Pending />
        </Route>
        <Route path="/overview/available" exact>
          <Available />
        </Route>
      </switch>
    </Router>
  );
}
