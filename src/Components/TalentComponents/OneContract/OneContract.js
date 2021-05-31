/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-script-url */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../firebase";
import Loader from "../../SharedComponents/Loader/Loader";

export default function OneContract({ contract, ind }) {

  const [job, setJob] = useState([]);
  const [client, setClient] = useState([]);
  useEffect(() => {
    db.collection("job")
      .doc(contract.jobId)
      .get().then(job => {
        setJob(job.data());
        db.collection("client")
          .doc(job.data().authID)
          .get().then(doc => setClient(doc.data()))
      });
  }, []);

  return (
    <section className="air-card-hover " id="contract26184114">
      <div className="row">
        {
          client?.firstName
            ?
            <>
              <div className="col-lg-4 col-md-5 col-xs-10 qa-wm-fl-cl-tile d-flex flex-direction-column justify-content-space-between">

                <div>
                  <div className="row qa-wm-fl-cl-title ">
                    <div className="col-xs-12">
                      <Link to="/contract" className="m-0">
                        {job?.jobTitle}
                      </Link>
                    </div>
                  </div>
                  <div className="row qa-wm-fl-cl-client m-sm-bottom">
                    <div className="col-xs-6">
                      <strong className="m-0 ellipsis d-block ng-binding">
                        {client?.firstName + " " + client?.lastName}
                      </strong>
                    </div>
                    <div className="text-muted text-right col-xs-6 ellipsis">
                      incen
                </div>
                  </div>
                  <div className="row qa-wm-fl-cl-dates">
                    <div className="col-xs-12">
                      <small className="text-muted ">
                        <span>Feb 3</span>-<span>Feb 4</span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-6 col-xs-12 d-flex flex-direction-column justify-content-space-between">
                <div className="row">
                  <div className="col-xs-6 qa-wm-fl-cl-terms col-xs-12">
                    <div>
                      <strong>$280.00</strong>/hr
                </div>
                    <div>5 max hrs/wk</div>
                    <p className="m-0-top-bottom ng-binding ">Completed Feb 4</p>
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
