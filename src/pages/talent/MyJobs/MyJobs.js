/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

import MyJobsActiveContractFixed from '../../../components/talent/MyJobsActiveContractFixed/MyJobsActiveContractFixed';
import MyJobsActiveContractHourly from '../../../components/talent/MyJobsActiveContractHourly/MyJobsActiveContractHourly';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MyJobs() {
    const user = useSelector((state) => state.talentData);

    useEffect(() => {

    }, [])
    return (
        <>
            <div className=" bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12 my-5 d-flex">
                            <h3 style={{ fontWeight: "bold" }}>My jobs</h3>
                            <h3 className="ms-auto bold">
                                "Earnings available now":
                                <a href="#">${user?.totalEarnings}</a>
                            </h3>
                        </div>
                        <div className="col-12 bg-white border border-gray rounded">
                            {/* <div className="col-11 mx-auto bg-gray border border-gray rounded p-5 mb-4">
                <span className>
                  <span className="circle">
                    <i className="fas fa-exclamation dangericon pt-2" />
                  </span>
                  "Currently you have no active jobs"
                </span>
              </div> */}
                            <MyJobsActiveContractFixed />
                            <MyJobsActiveContractHourly />
                        </div>
                        <div className="col-12 bg-white mb-5  border border-gray rounded d-flex flex-column py-3 justify-content-center align-items-center">

                            <Link to={`${process.env.PUBLIC_URL}/all-contract`}>
                                <button className="btn bg-white btn-outline-secondary border border-rounded">
                                    <span className="text-success fw-bold">view All Contracts</span>
                                </button>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}
