/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-script-url */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../firebase";
import StarsRating from "../../SharedComponents/StarsRating/StarsRating";

export default function OneContract({ contract, ind }) {

  const [job, setJob] = useState();
  const [client, setClient] = useState();
  const [clientContract, setClientContract] = useState();

  useEffect(() => {
    db.collection("job")
      .doc(contract.jobId)
      .get().then(job => {
        if (job.exists) {
          setJob(job.data());

          db.collection("client")
            .doc(job?.data()?.authID)
            .collection("contracts")
            .where("jobID", "==", job.id)
            .get().then(res => {

              setClientContract(res.docs[0]?.data())

              db.collection("client")
                .doc(res.docs[0]?.data()?.clientID)
                .get().then(doc => setClient(doc.data()))
            })
        }
      });
    console.log(client);
  }, []);

  return (
    <section className="air-card-hover py-3" id="contract26184114" style={{ borderTop: ind !== 0 && "1px solid #00000020" }}>
      <div className="row justify-content-between">
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
                  {
                    client?.firstName + " " + client?.lastName
                  }
                </strong>
              </div>
            </div>
            <div className="row qa-wm-fl-cl-dates">
              <div className="col-xs-12">
                <small className="text-muted ">
                  <span>
                    {new Date(contract?.startContractTime?.seconds * 1000).toLocaleString()}
                  </span> - <span>
                    {contract?.endContractTime ? new Date(contract?.endContractTime?.seconds * 1000).toLocaleString() : "active"}
                  </span>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12 d-flex flex-direction-column justify-content-space-between">
          <div className="row">
            <div className="col-xs-6 qa-wm-fl-cl-terms col-xs-12">
              <div>
                <span className="text-muted">Budget: </span><strong>${clientContract?.jobBudget}</strong> {job?.jobPaymentType === "Hourly" && "/hr"}
              </div>
              {
                job?.status === "closed" &&
                <>
                  <p className="m-0-top-bottom mt-2">Completed Feb 4</p>
                  <div>
                    <StarsRating clientReview={job?.clientAllReviews} index={1} />
                    <StarsRating clientReview={job?.clientAllReviews} index={2} />
                    <StarsRating clientReview={job?.clientAllReviews} index={3} />
                    <StarsRating clientReview={job?.clientAllReviews} index={4} />
                    <StarsRating clientReview={job?.clientAllReviews} index={5} />
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
