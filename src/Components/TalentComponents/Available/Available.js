import React from "react";
import CustomButtonwithoutbackground from "./../CustomButtonwithoutbackground/CustomButton";
export default function Available() {
  return (
    <>
      <div className="container card mt-3">
        <section>
          <h5>You earned it! Where should we deliver your balance?</h5>
        </section>
        <CustomButtonwithoutbackground headers="Set Up Payments" />
        <div className="row text-center">
          <p>No transactions in the last 30 days.</p>
        </div>
      </div>
    </>
  );
}
