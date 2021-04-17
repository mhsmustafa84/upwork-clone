import React from "react";
import "./HomeLayout.css";
import RightSidebarTalentHome from "./../RightSidebarTalentHome/RightSidebarTalentHome";
import LeftSidebarTalentHome from "../LeftSidebarTalentHome/LeftSidebarTalentHome";
import SectionCenterTalentHome from "./../SectionCenterTalentHome/SectionCenterTalentHome";
import FindWorkTalentHome from "./../FindWorkTalentHome/FindWorkTalentHome";
import SmallScreenOnlyTalentHome from "./../SmallScreenOnlyTalentHome/SmallScreenOnlyTalentHome";

export default function HomeLayout() {
  return (
    <div className="container-md container-fluid-sm my-lg-4">
      <FindWorkTalentHome />
      <SmallScreenOnlyTalentHome />
      <div className="row">
        <LeftSidebarTalentHome />
        <SectionCenterTalentHome />
        <RightSidebarTalentHome />
      </div>
    </div>
  );
}
