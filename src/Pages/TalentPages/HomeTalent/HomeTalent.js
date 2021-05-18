import FindWorkTalentHome from "../../../Components/TalentComponents/FindWorkTalentHome/FindWorkTalentHome";
import LeftSidebarTalentHome from "../../../Components/TalentComponents/LeftSidebarTalentHome/LeftSidebarTalentHome";
import RightSidebarTalentHome from "../../../Components/TalentComponents/RightSidebarTalentHome/RightSidebarTalentHome";
import SectionCenterTalentHome from "../../../Components/TalentComponents/SectionCenterTalentHome/SectionCenterTalentHome";
import SmallScreenOnlyTalentHome from "../../../Components/TalentComponents/SmallScreenOnlyTalentHome/SmallScreenOnlyTalentHome";
import "./HomeTalent.css";

export default function HomeTalent() {
  return (
    <div className="bg-gray">
      <div className="container-md container-fluid-sm my-lg-4">
        <FindWorkTalentHome />
        <SmallScreenOnlyTalentHome />
        <div className="row">
          <LeftSidebarTalentHome />
          <SectionCenterTalentHome />
          <RightSidebarTalentHome />
        </div>
      </div>
    </div>
  );
}
