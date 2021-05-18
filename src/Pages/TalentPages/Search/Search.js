import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDataAction } from "../../../Store/actions/userData";
import JobPostTalentHome from "../../../Components/TalentComponents/JobPostTalentHome/JobPostTalentHome";
import SearchBarJobsTalent from "../../../Components/TalentComponents/SearchBarJobsTalent/SearchBarJobsTalent";
import ReviewProposalsCard from "../../../Components/ClientComponents/ReviewProposalsCard/ReviewProposalsCard";

export default function Search() {
    let user = useSelector((state) => state.userData);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userDataAction());
    }, []);
    return (
        <div className="container-md container-fluid-sm my-lg-4">
            <div className="row">
                <div className="col d-none d-lg-block">
                    <h5 className="mb-lg-4 display-inline-block">Filter By</h5>
                    <hr/>
                    <h6 className="mb-lg-2 display-inline-block mt-lg-2">Category</h6>
                    <ul
                        className="list-group sidebar-homebage-ul mb-lg-3 "
                        style={{ fontSize: "0.9em" }}
                    >
                        <li
                            className="list-group-item sidebar-homebage-ul-li "
                            aria-current="true"
                        >
                            <a
                                href="#"
                                className=" list-group-item-action advanced-search-link"
                                aria-current="true"
                            >
                                {user.jobCategory}
                            </a>
                        </li>

                        <li
                            className="list-group-item sidebar-homebage-ul-li"
                            aria-current="true"
                        >
                            <a
                                href="#"
                                className=" list-group-item-action advanced-search-link"
                                aria-current="true"
                            >
                                Ecommerce Development
          </a>{" "}
                        </li>
                    </ul>
                    
                </div>

                <div className="col-lg-10 col-xs-12">
                    <div>
                        <div>
                            <ul
                                id="list-homepage"
                                className="navbar navbar-expand list-group-horizontal bg-white boder border-1 my-0"
                            >
                                <li
                                    className="list-group-item sidebar-homebage-ul-li bg-white boder border-0"
                                    aria-current="true"
                                >
                                    <a
                                        href="#"
                                        className=" list-group-item-action saved-homebage-ul-li-aa active activesidesaved bg-white"
                                        aria-current="true"
                                    >
                                        SEARCH
              </a>
                                </li>
                                <li
                                    className="list-group-item sidebar-homebage-ul-li bg-white boder border-0"
                                    aria-current="true"
                                >
                                    <a
                                        href="#"
                                        className=" list-group-item-action saved-homebage-ul-li-aa bg-white"
                                        aria-current="true"
                                    >
                                        SAVED JOBS(2)
              </a>
                                </li>
                            </ul>

                        </div>
                        <div className="list-group-item py-lg-4">
                            <SearchBarJobsTalent />
                        </div>
                    </div>

                    <JobPostTalentHome />
                    {/* <div className="mx-2">
                    <ReviewProposalsCard/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}