import React from "react";
import Footer from "../Components/TalentComponents/Footer/Footer";
import Header from "../Components/TalentComponents/Header/Header";
import TransactionHistory from "../Pages/TalentPages/Reports/TransactionHistory/TransactionHistory";

export default function Talent() {
  return (
    <>
      <Header />
      <TransactionHistory />
      <Footer />
    </>
  );
}
