import React from "react";
import ConnectsAndSubmit from "./../ConnectsAndSubmit/ConnectsAndSubmit";
import ClientInfo from "./../ClientInfo/ClientInfo";
import JobLink from "./../JobLink/JobLink";

export default function RightSidebarJobDetails({ job }) {
  return (
    <div className="col-lg-3 col-xs-3 d-flex flex-column">
      <ConnectsAndSubmit />
      <ClientInfo clientID={job?.authID} />
      <JobLink />
    </div>
  );
}
