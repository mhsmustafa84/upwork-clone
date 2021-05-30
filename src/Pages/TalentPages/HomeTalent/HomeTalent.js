/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AcceptedAlert from "../../../Components/TalentComponents/AcceptedAlert/AcceptedAlert";
import FindWorkTalentHome from "../../../Components/TalentComponents/FindWorkTalentHome/FindWorkTalentHome";
import LeftSidebarTalentHome from "../../../Components/TalentComponents/LeftSidebarTalentHome/LeftSidebarTalentHome";
import RightSidebarTalentHome from "../../../Components/TalentComponents/RightSidebarTalentHome/RightSidebarTalentHome";
import SectionCenterTalentHome from "../../../Components/TalentComponents/SectionCenterTalentHome/SectionCenterTalentHome";
import { langAction } from "../../../Store/actions/lang";
import { talentDataAction } from "../../../Store/actions/talentData";
import "./HomeTalent.css";

export default function HomeTalent() {

  const lang = useSelector(state => state.lang);
  const user = useSelector(state => state.talentData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(talentDataAction(user));
    dispatch(langAction(lang));
  }, [lang, user]);

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} >
      <div className="container-md container-fluid-sm my-lg-4 px-3 pt-1">
        <div className="mx-3">
          {
            user.accepted === false &&
            <AcceptedAlert widthh="66%" />
          }
          <FindWorkTalentHome />
          <div className="row">
            <LeftSidebarTalentHome user={user} />
            <SectionCenterTalentHome user={user} />
            <RightSidebarTalentHome user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
