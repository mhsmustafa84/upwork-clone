/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { db } from "../../../firebase";
import StarsRating from './../../SharedComponents/StarsRating/StarsRating';

export default function ClientInfo({ clientID }) {

  console.log(clientID);
  const { t } = useTranslation();
  const [client, setClient] = useState()
  const [clientJobs, setClientJobs] = useState({ closed: 0, hired: 0, public: 0, allJobs: 0 })

  useEffect(() => {
    db.collection("client")
      .doc(clientID)
      .get().then(doc => setClient(doc.data()))

    db.collection("job")
      .where("authID", "==", clientID)
      .get().then(res => {
        const closed = [];
        const puplic = [];
        const hired = [];
        res.docs.map(job => {
          job.data().status === "public" && puplic.push(job.data())
          job.data().status === "hired" && hired.push(job.data())
          job.data().status === "closed" && closed.push(job.data())
        })
        setClientJobs({ allJobs: res.docs.length, hired: hired.length, public: puplic.length, closed: closed.length })
      })
  }, [])

  const star = (clientReview, index) => {
    return <StarsRating clientReview={clientReview} index={index} />
  }

  return (
    <div className="bg-white py-lg-4 px-4 border border-1 py-sm-3 py-xs-5">
      <h5>{t("About the client")}</h5>
      <h6 className="fw-bold py-sm-3">
        <span className="fw-bold" style={{ color: client?.paymentVerified ? "#14bff4" : "red" }}>
          <i
            className={`${client?.paymentVerified ? "fas fa-check-circle" : "far fa-times-circle"} me-1`}
            style={{ color: client?.paymentVerified ? "#14bff4" : "red" }}
          />
          {client?.paymentVerified ? "Payment verified" : "Payment unverified"}
        </span>
      </h6>
      <p className="text-muted">
        {star(client?.review, 1)}
        {star(client?.review, 2)}
        {star(client?.review, 3)}
        {star(client?.review, 4)}
        {star(client?.review, 5)}
      </p>
      <p className="fw-bold"><span className="fw-bold ">
        <i className="fas fa-map-marker-alt me-2" /> {client?.location}
      </span></p>
      <p><span className="text-muted">Jobs posted: </span><strong>{clientJobs?.allJobs}</strong></p>
      <p><span className="text-muted">Hired: </span><strong>{clientJobs?.closed}</strong></p>
      <p><span className="text-muted">Hire rate: </span><strong>{clientJobs?.closed * 100 / clientJobs?.allJobs}%</strong></p>
      <p><span className="text-muted">Open jobs: </span><strong>{clientJobs?.public}</strong></p>
      <p><span className="text-muted">Spent: </span><strong>${client?.spentMoney}</strong></p>
      <p><span className="text-muted">Active: </span><strong>{clientJobs?.hired}</strong></p>
      <p><span className="text-muted">Member since: </span><strong>{new Date(client?.createdAt?.seconds * 1000).toLocaleDateString()}</strong></p>
    </div>
  );
}
