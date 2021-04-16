import React from "react";
import CustomButtonwithoutbackground from "./../CustomButtonwithoutbackground/CustomButton";
export default function Available() {
  return (
    <>
      <div className="container card mt-3">
        <section>
          <h5>You earned it! Where should we deliver your balance?</h5>
        </section>
        <footer className="mb-2">
          <CustomButtonwithoutbackground headers="Set Up Payments" />
        </footer>
        <div className="row text-center">
          <p>
            {" "}
            No transactions in the last 30 days.
            <a
              aria-label="Learn more about Connects"
              href="https://support.upwork.com/entries/61069964"
              rel="noopener noreferrer"
              target="_blank"
              className="d-none-mobile-app"
              style={{ color: "#008329", textDecoration: "none" }}
            >
              view all transaction
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
