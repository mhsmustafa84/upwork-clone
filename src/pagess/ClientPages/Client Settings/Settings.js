import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from "react-router-dom";
import Billingpayments from "../Billingpayments/Billingpayments";
import AccountInfo from "../ContactInfo/ContactInfo";
import Password from "./../../ClientPages/Password/Password";

export default function Settings() {
  return (
    <>
      <Router>
        {/* <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        @import url(//db.onlinewebfonts.com/c/3def92f7b2ad644bd382798ecc8ca4c7?family=Canela);\n\n         {\n            .container {\n                 ;\n            }\n        }\n\n        * {\n            margin: 0;\n            padding: 0;\n        }\n    ",
          }}
        /> */}
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-2 mt-5">
              <div className="row">
                <NavLink
                  to="/contactinfo"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="fas fa-id-card-alt mt-3 me-2"></i>My Info
                </NavLink>
              </div>

              <div className="row">
                <NavLink
                  to="/billingpayment"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="fas fa-credit-card mt-3 me-2"></i>Billing
                  Methods
                </NavLink>
              </div>
              <div className="row">
                <NavLink
                  to="/password"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="fas fa-lock mt-3 me-2"></i>Password & Security
                </NavLink>
              </div>
              <div className="row">
                <NavLink
                  to="#"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="fas fa-address-card mt-3 me-2"></i>Membership
                </NavLink>
              </div>
              <div className="row">
                <NavLink
                  to="#"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="fas fa-users mt-3 me-2"></i>Teams
                </NavLink>
              </div>
              <div className="row">
                <NavLink
                  to="#"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="fas fa-envelope mt-3 me-2"></i>Notification
                  Setting
                </NavLink>
              </div>
              <div className="row">
                <NavLink
                  to="#"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="fas fa-users mt-3 me-2"></i>Members &
                  Permissions
                </NavLink>
              </div>
              <div className="row">
                <NavLink
                  to="#"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="fas fa-money-bill mt-3 me-2"></i>Tax Information
                </NavLink>
              </div>
              <div className="row">
                <NavLink
                  to="#"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="fas fa-link mt-3 me-2"></i>Connected Services
                </NavLink>
              </div>
            </div>

            <div className="col-md-10">
              <switch>
                <Route path="/password" exact>
                  <Password />
                </Route>
                <Route path="/billingpayment" exact>
                  <Billingpayments />
                </Route>
                <Route path="/contactinfo" exact>
                  <AccountInfo />
                </Route>
              </switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}
