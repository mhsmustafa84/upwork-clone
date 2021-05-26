import React, { useState } from "react";
import ConnectsAndSubmit2 from "./../ConnectsAndSubmit2/ConnectsAndSubmit2";
import ClientInfo from "./../ClientInfo/ClientInfo";

export default function RightSidebarJobDetails2({ jobdata }) {
  return (
    <div className="col-lg-3 col-xs-3">
      <ConnectsAndSubmit2 connects={jobdata} />
      <ClientInfo />
    </div>
  );
}
