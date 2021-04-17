import React from "react";

export default function OtherOpenJobsByThisClient() {
  return (
    <div>
      <div className="bg-white py-lg-1 px-4 mt-4  border  row py-xs-5">
        <h4 className="fw-bold py-3">Other open jobs by this Client (4)</h4>
      </div>
      <div className="bg-white py-3 px-3 border  row py-xs-5">
        <a href className="advanced-search-link">
          Agent for making motorcycle helmets with CE certification{" "}
          <span className="text-muted">Fixed-price</span>
        </a>
        <a href className="advanced-search-link">
          agent dropshipping / I'm looking for sourcing watches for branding{" "}
          <span className="text-muted">Hourly</span>
        </a>
      </div>
    </div>
  );
}
