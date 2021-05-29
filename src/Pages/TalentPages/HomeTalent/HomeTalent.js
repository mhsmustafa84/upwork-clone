/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FindWorkTalentHome from "../../../Components/TalentComponents/FindWorkTalentHome/FindWorkTalentHome";
import LeftSidebarTalentHome from "../../../Components/TalentComponents/LeftSidebarTalentHome/LeftSidebarTalentHome";
import RightSidebarTalentHome from "../../../Components/TalentComponents/RightSidebarTalentHome/RightSidebarTalentHome";
import SectionCenterTalentHome from "../../../Components/TalentComponents/SectionCenterTalentHome/SectionCenterTalentHome";
// import SmallScreenOnlyTalentHome from "../../../Components/TalentComponents/SmallScreenOnlyTalentHome/SmallScreenOnlyTalentHome";
import { langAction } from "../../../Store/actions/lang";
import "./HomeTalent.css";

export default function HomeTalent() {

  let lang = useSelector(state => state.lang);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(langAction(lang));

  }, [lang]);
  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} >
      <div className="container-md container-fluid-sm my-lg-4 px-3 pt-1">
        <div className="mx-3">
          <FindWorkTalentHome />
          {/* <SmallScreenOnlyTalentHome /> */}
          <div className="row">
            <LeftSidebarTalentHome />
            <SectionCenterTalentHome />
            <RightSidebarTalentHome />
          </div>
        </div>
      </div>
    </div>
  );
}
