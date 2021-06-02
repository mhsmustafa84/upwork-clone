/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-script-url */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../Components/SharedComponents/Loader/Loader";
import { db } from "../../../firebase";

export default function OneContract({ contract, ind }) {

    const [job, setJob] = useState();
    const [client, setClient] = useState();
    const [clientContract, setClientContract] = useState();

    useEffect(() => {
        db.collection("job")
            .doc(contract.jobId)
            .get().then(job => {

                setJob(job.data());

                db.collection("client")
                    .doc(job.data().authID)
                    .get().then(doc => setClient(doc.data()))

                db.collection("client")
                    .doc(job.data().authID)
                    .collection("contracts")
                    .where("talentResponse", "==", "accept")
                    .get().then(res => setClientContract(res.docs[0].data()))
                console.log(clientContract);
            });
    }, []);

    return (
        <section className="air-card-hover py-3" id="contract26184114" style={{ borderTop: ind !== 0 && "1px solid #00000020" }}>
            <div className="row">
                {
                    client
                        ?
                        <>
                            <div className="col-lg-5 col-md-5 col-xs-10 qa-wm-fl-cl-tile d-flex flex-direction-column justify-content-space-between">
                                <div>
                                    <div className="row qa-wm-fl-cl-title ">
                                        <div className="col-xs-12">
                                            <Link
                                                to={{
                                                    pathname: "/contract",
                                                    state: { job, client, clientContract }
                                                }}
                                                className="m-0 fw-bold"
                                            >
                                                {job?.jobTitle}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row qa-wm-fl-cl-client m-sm-bottom my-2">
                                        <div className="col-xs-6">
                                            <strong className="m-0 ellipsis d-block ng-binding">
                                                {client?.firstName + " " + client?.lastName}
                                            </strong>
                                        </div>
                                    </div>
                                    <div className="row qa-wm-fl-cl-dates">
                                        <div className="col-xs-12">
                                            <small className="text-muted ">
                                                <span>
                                                    {new Date(contract?.startContractTime.seconds * 1000).toLocaleString()}
                                                </span> - <span>
                                                    {contract?.endContractTime ? new Date(contract?.endContractTime.seconds * 1000).toLocaleString() : "active"}
                                                </span>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 col-xs-12 d-flex flex-direction-column justify-content-space-between">
                                <div className="row">
                                    <div className="col-xs-6 qa-wm-fl-cl-terms col-xs-12">
                                        <div>
                                            <strong>${clientContract?.jobBudget}</strong>/hr
                                        </div>
                                        <p className="m-0-top-bottom ng-binding">Completed Feb 4</p>
                                        <div>
                                            <div className="stars" style={{ visibility: "visible" }}>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        ind === 0 && <Loader />
                }
            </div>
        </section>
    );
}
