import React from "react";
import "./FindFreelancingJob.css";
import FindJobsHeader from "../../../Components/BeforeLoginComponents/FindJobsHeader/FindJobsHeader";
import ListOfWork from "../../../Components/BeforeLoginComponents/ListOfWork/ListOfWork";
import TypeOfWork from "../../../Components/BeforeLoginComponents/TypeOfWork/TypeOfWork";
import TypeOfWorkSmallSize from "../../../Components/BeforeLoginComponents/TypeOfWorkSmallSize/TypeOfWorkSmallSize";
import Header from "../../../Components/BeforeLoginComponents/Header/Header";
import Footer from "../../../Components/BeforeLoginComponents/Footer/Footer";

export default function FindFreelancingJob() {
  return (
    <div>
      <Header />
      <FindJobsHeader />
      <section className="container py-3 px-5 small" id="main-section-ID">
        <div className="row ">
          <div className="col-xl-3 px-5 d-none d-xl-block">
            <TypeOfWork />
          </div>
          <div className="row d-block d-xl-none px-lg-5 px-1 py-3">
            <TypeOfWorkSmallSize />
          </div>
          <div className="col-xl-9 col-12 px-lg-5 px-1 py-3">
            <ListOfWork character="A" />
            <ListOfWork character="B" />
            <ListOfWork character="C" />
            <ListOfWork character="D" />
            <ListOfWork character="E" />
            <ListOfWork character="F" />
            <ListOfWork character="G" />
            <ListOfWork character="H" />
            <ListOfWork character="I" />
            <ListOfWork character="J" />
            <ListOfWork character="K" />
            <ListOfWork character="L" />
            <ListOfWork character="M" />
            <ListOfWork character="N" />
            <ListOfWork character="O" />
            <ListOfWork character="P" />
            <ListOfWork character="Q" />
            <ListOfWork character="R" />
            <ListOfWork character="S" />
            <ListOfWork character="T" />
            <ListOfWork character="U" />
            <ListOfWork character="V" />
            <ListOfWork character="W" />
            <ListOfWork character="X" />
            <ListOfWork character="Y" />
            <ListOfWork character="Z" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
