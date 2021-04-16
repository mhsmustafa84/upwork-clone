import React from "react";
import "./Talent.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  NavLink,
} from "react-router-dom";
import MyHires from "../../../Components/ClientComponents/MyHiresComponent/MyHires";
import Saved from "../../../Components/ClientComponents/SavedComponent/Saved";

export default function Talent() {
  return (
    <div>
      <div className="container px-5 ">
        <div className="row tab-talent-CN">
          <Router>
            <ul className="nav nav-tabs pt-3">
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link"
                  exact
                  activeClassName="active"
                  to="/ab/profiles/search/"
                >
                  Search
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link"
                  exact
                  activeClassName="active"
                  to="/ab/profiles/search/hires"
                >
                  My Hires
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link"
                  exact
                  activeClassName="active"
                  to="/ab/profiles/search/saved"
                >
                  Saved
                </NavLink>
              </li>
            </ul>

            <Switch>
              <Route
                path="/ab/profiles/search/hires"
                exact
                component={MyHires}
              />
              <Route path="/ab/profiles/search/saved" exact component={Saved} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}
