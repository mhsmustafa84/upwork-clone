import React from "react";
export default function CustomButtonwithoutbackground({ headers }) {
  return (
    <div className="CustomButton">
      <button
        className="btn -btn-default rounded-lg me-md-2 border border-rounded"
        type="button" 
        style={{ color: "#008329", backgroundColor: "white" }}
      >
        {headers}
      </button>
    </div>
  );
}
