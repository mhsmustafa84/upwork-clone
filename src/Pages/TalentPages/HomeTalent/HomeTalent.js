/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "../../../components/shared/Loader";
import AcceptedAlert from "../../../components/talent/AcceptedAlert/AcceptedAlert";
import FindWorkTalentHome from "../../../components/talent/FindWorkTalentHome/FindWorkTalentHome";
import LeftSidebarTalentHome from "../../../components/talent/LeftSidebarTalentHome/LeftSidebarTalentHome";
import RightSidebarTalentHome from "../../../components/talent/RightSidebarTalentHome/RightSidebarTalentHome";
import SectionCenterTalentHome from "../../../components/talent/SectionCenterTalentHome/SectionCenterTalentHome";
import "./HomeTalent.css";

export default function HomeTalent() {

    const user = useSelector(state => state.talentData);

    return (
        <div>
            <div className="container-md container-fluid-sm my-lg-4 px-3 pt-1">
                {
                    user.firstName
                        ? <div className="mx-3">
                            {
                                user.accepted === false &&
                                <AcceptedAlert widthh="66%" />
                            }
                            <FindWorkTalentHome />
                            <div className="row">
                                <LeftSidebarTalentHome />
                                <SectionCenterTalentHome />
                                <RightSidebarTalentHome />
                            </div>
                        </div>
                        : <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
                            <Loader />
                        </div>
                }
            </div>
        </div>
    );
}
