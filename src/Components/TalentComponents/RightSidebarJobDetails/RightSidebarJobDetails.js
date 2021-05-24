import React, { useState } from "react";
import ConnectsAndSubmit from "./../ConnectsAndSubmit/ConnectsAndSubmit";
import ClientInfo from "./../ClientInfo/ClientInfo";
import JobLink from "./../JobLink/JobLink";

export default function RightSidebarJobDetails({ jobdata }) {

  return (
    <div className="col-lg-3 col-xs-3">
      <ConnectsAndSubmit connects={jobdata} />
      <ClientInfo />
      <JobLink />
    </div>
  );
}
