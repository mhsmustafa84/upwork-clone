import React from 'react'
import { useTranslation } from "react-i18next";
import {
    Route,
    Switch,
    NavLink,
    useHistory,
    useLocation,
} from "react-router-dom";
import ContractEarnings from '../../../Components/TalentComponents/ContractEarnings/ContractEarnings';
import ContractFeedback from '../../../Components/TalentComponents/ContractFeedback/ContractFeedback';
import "../../ClientPages/Talent/Talent.css";

export default function Contract() {
    const { t } = useTranslation();
    const { pathname } = useLocation();
    const { push } = useHistory();
     pathname === "/contract" && push("/contract/earnings");

    return (
        <div className="container bg-gray">
            <div className="row mt-5 mb-3">
                <div className="col-10"></div>
                <button type="button" className="col-2 btn bg-upwork">
                    Propose New Contract
          </button>
            </div>
            <div className="row bg-white border border-rounded border-1">
                <div className="row py-3">
                    <div className="col-7">
                        <h3 className="">contract name</h3>
                        <div>
                            <small>
                                <i className="fas fa-check-circle text-success"> </i>
                                {"  "}Completed Feb 21{"  "}
                                <i className="fas fa-star text-bgUpwork"></i>
                                <i className="fas fa-star text-bgUpwork"></i>
                                <i className="fas fa-star text-bgUpwork"></i>
                                <i className="fas fa-star text-bgUpwork"></i>
                                <i className="fas fa-star text-bgUpwork"></i>
                            </small>
                        </div>
                    </div>
                    <div className="col-5 row">
                        <div className="col-4 ">
                            <img
                                src="cara.webp"
                                alt=""
                                className="rounded-circle d-inline"
                                width="50px"
                                height="50px"
                            />
                        </div>
                        <div className="col-8">
                            <h4>Client Name</h4>
                            <div className="text-muted">5:21 am Wed in United States</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <ul className="nav nav-tabs ">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                exact
                                activeClassName="active"
                                to="/contract/earnings"
                            >
                                Earnings
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink
                                className="nav-link"
                                exact
                                activeClassName="active"
                                to="/contract/feedback"
                            >
                                Feedback
                            </NavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/contract/earnings" exact component={ContractEarnings} />
                        <Route path="/contract/feedback" exact component={ContractFeedback} />
                    </Switch>

                </div>

            </div>

        </div>

    )
}
