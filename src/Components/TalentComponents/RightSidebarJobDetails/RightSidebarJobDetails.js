import React, { useState } from "react";
import ConnectsAndSubmit from "./../ConnectsAndSubmit/ConnectsAndSubmit";
import ClientInfo from "./../ClientInfo/ClientInfo";
import JobLink from "./../JobLink/JobLink";

export default function RightSidebarJobDetails({ jobsdata }) {
  console.log(jobsdata);

  return (
    <div className="col-lg-3 col-xs-3">
      <ConnectsAndSubmit connects={jobsdata} />
      <ClientInfo />
      <JobLink />
    </div>
  );
}
