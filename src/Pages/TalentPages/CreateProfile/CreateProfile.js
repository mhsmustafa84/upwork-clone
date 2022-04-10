import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import CreateProfileAside from '../../../components/talent/CreateProfileAside/CreateProfileAside'
import CreateProfileCategory from '../../../components/talent/CreateProfileCategory/CreateProfileCategory'
import CreateProfileEducationAndEmployment from '../../../components/talent/CreateProfileEducationAndEmployment/CreateProfileEducationAndEmployment'
import CreateProfileExpertiseLevel from '../../../components/talent/CreateProfileExpertiseLevel/CreateProfileExpertiseLevel'
import CreateProfileGetStart from '../../../components/talent/CreateProfileGetStart/CreateProfileGetStart'
import CreateProfileHourlyRate from '../../../components/talent/CreateProfileHourlyRate/CreateProfileHourlyRate'
import CreateProfileLanguage from '../../../components/talent/CreateProfileLanguage/CreateProfileLanguage'
import CreateProfileLocation from '../../../components/talent/CreateProfileLocation/CreateProfileLocation'
import CreateProfilePhoneNumber from '../../../components/talent/CreateProfilePhoneNumber/CreateProfilePhoneNumber'
import CreateProfilePhoto from '../../../components/talent/CreateProfilePhoto/CreateProfilePhoto'
import CreateProfileTitleAndOverview from '../../../components/talent/CreateProfileTitleAndOverview/CreateProfileTitleAndOverview'
import { useLocation } from 'react-router-dom';
import CreateProfileSubmit from '../../../components/talent/CreateProfileSubmit/CreateProfileSubmit'

export default function CreateProfile() {

    const { pathname } = useLocation();

    const [btns, setBtns] = useState({
        category: true,
        expertiseLevel: true,
        eduAndEmp: true,
        language: true,
        hourlyRate: true,
        titleAndOverview: true,
        profilePhoto: true,
        location: true,
        PhoneNumber: true,
    })

    return (
        <section className="p-4" style={{ backgroundColor: "#F1F2F4" }}>
            <div className="container">
                <div className="row">
                    {
                        pathname !== "/create-profile/submit" &&
                        <div className="col-lg-3">
                            <CreateProfileAside btns={btns} />
                        </div>
                    }
                    <div className={pathname === "/create-profile/submit" ? "col-lg-12" : "col-lg-9"}>
                        <Routes>
                            <Route path="/create-profile">
                                <CreateProfileGetStart setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/create-profile/category">
                                <CreateProfileCategory setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/create-profile/expertise-level">
                                <CreateProfileExpertiseLevel setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/create-profile/education-and-employment">
                                <CreateProfileEducationAndEmployment setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/create-profile/language">
                                <CreateProfileLanguage setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/create-profile/hourly-rate">
                                <CreateProfileHourlyRate setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/create-profile/title-and-overview">
                                <CreateProfileTitleAndOverview setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/create-profile/profile-photo">
                                <CreateProfilePhoto setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/create-profile/location">
                                <CreateProfileLocation setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/create-profile/phone-number">
                                <CreateProfilePhoneNumber setBtns={setBtns} btns={btns} />
                            </Route>
                            <Route path="/create-profile/submit">
                                <CreateProfileSubmit />
                            </Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </section>
    )
}
