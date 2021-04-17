import React from "react";
import ReviewProposalsCard from "../../../Components/ClientComponents/ReviewProposalsCard/ReviewProposalsCard";
import ReviewProposalsPageHeader from "../../../Components/ClientComponents/ReviewProposalsPageHeader/ReviewProposalsPageHeader";

export default function ReviewProposals() {
  return (
    <>
      <div className="container">
        <div className="row border border-1 py-4  bg-white my-5">
          <ReviewProposalsPageHeader />
          <ReviewProposalsCard />
        </div>
      </div>
    </>
  );
}
