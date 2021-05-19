import React from "react";
import ReviewProposalsCard from "../../../Components/ClientComponents/ReviewProposalsCard/ReviewProposalsCard";
import ReviewProposalsPageHeader from "../../../Components/ClientComponents/ReviewProposalsPageHeader/ReviewProposalsPageHeader";

export default function ReviewProposals() {
  return (
    
      <div className="container">
        <div className="row py-4 my-5">
          <ReviewProposalsPageHeader />
          <ReviewProposalsCard />
        </div>
      </div>

  );
}
