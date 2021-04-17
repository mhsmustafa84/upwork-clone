import "./Talent.css";
import {
  Route,
  Switch,
  NavLink,
  useHistory,
  useLocation,
} from "react-router-dom";
import MyHires from "../../../Components/ClientComponents/MyHiresComponent/MyHires";
import Saved from "../../../Components/ClientComponents/SavedComponent/Saved";

export default function Talent() {

  const { pathname } = useLocation();
  const { push } = useHistory();
  pathname === "/talent" && push("/talent/my-hires");

  return (
    <div className="py-5" style={{ backgroundColor: "#f1f2f4" }}>
      <div className="container bg-white" >
        <div className="row tab-talent-CN">
          <ul className="nav nav-tabs pt-3">
            <li className="nav-item mx-2">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/talent/search"
              >
                Search
                </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/talent/my-hires"
              >
                My Hires
                </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/talent/saved-talent"
              >
                Saved
                </NavLink>
            </li>
          </ul>
          <Switch>
            {
              pathname === "/talent/my-hires"
              && <MyHires />
            }
            {
              pathname === "/talent/saved-talent"
              && <Saved />
            }
            <Route path="/talent/my-hires" exact component={MyHires} />
            <Route path="/talent/saved-talent" exact component={Saved} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
