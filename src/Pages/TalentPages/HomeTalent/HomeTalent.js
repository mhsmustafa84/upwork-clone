/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FindWorkTalentHome from "../../../Components/TalentComponents/FindWorkTalentHome/FindWorkTalentHome";
import LeftSidebarTalentHome from "../../../Components/TalentComponents/LeftSidebarTalentHome/LeftSidebarTalentHome";
import RightSidebarTalentHome from "../../../Components/TalentComponents/RightSidebarTalentHome/RightSidebarTalentHome";
import SectionCenterTalentHome from "../../../Components/TalentComponents/SectionCenterTalentHome/SectionCenterTalentHome";
import { langAction } from "../../../Store/actions/lang";
import "./HomeTalent.css";

export default function HomeTalent() {

  const lang = useSelector(state => state.lang);
  const user = useSelector(state => state.talentData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(langAction(lang));
  }, [lang]);

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} >
      <div className="container-md container-fluid-sm my-lg-4 px-3 pt-1">
        <div className="mx-3">
          {
            user.accepted === false &&
            <div class="alert alert-warning d-flex align-items-center mt-4 mx-auto" style={{ width: "60%" }} role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <div>
                Your profile is under review, so you can't submit a proposal yet.
                </div>
            </div>
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
