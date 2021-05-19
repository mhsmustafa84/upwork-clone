import React from 'react'
import { Route, Switch } from 'react-router'
import CreateProfileAside from '../../../Components/TalentComponents/CreateProfileAside/CreateProfileAside'
import CreateProfileCategory from '../../../Components/TalentComponents/CreateProfileCategory/CreateProfileCategory'
import CreateProfileEducationAndEmployment from '../../../Components/TalentComponents/CreateProfileEducationAndEmployment/CreateProfileEducationAndEmployment'
import CreateProfileExpertiseLevel from '../../../Components/TalentComponents/CreateProfileExpertiseLevel/CreateProfileExpertiseLevel'
import CreateProfileGetStart from '../../../Components/TalentComponents/CreateProfileGetStart/CreateProfileGetStart'
import CreateProfileHourlyRate from '../../../Components/TalentComponents/CreateProfileHourlyRate/CreateProfileHourlyRate'
import CreateProfileLanguage from '../../../Components/TalentComponents/CreateProfileLanguage/CreateProfileLanguage'
import CreateProfileLocation from '../../../Components/TalentComponents/CreateProfileLocation/CreateProfileLocation'
import CreateProfilePhoneNumber from '../../../Components/TalentComponents/CreateProfilePhoneNumber/CreateProfilePhoneNumber'
import CreateProfilePhoto from '../../../Components/TalentComponents/CreateProfilePhoto/CreateProfilePhoto'
import CreateProfileTitleAndOverview from '../../../Components/TalentComponents/CreateProfileTitleAndOverview/CreateProfileTitleAndOverview'
import { useLocation } from 'react-router-dom';
import CreateProfileSubmit from '../../../Components/TalentComponents/CreateProfileSubmit/CreateProfileSubmit'

export default function CreateProfile() {

    const { pathname } = useLocation();

    return (
        <section className="p-4" style={{ backgroundColor: "#F1F2F4" }}>
            <div className="container">
                <div className="row">
                    {
                        pathname !== "/create-profile/submit" &&
                        <div className="col-lg-3">
                            <CreateProfileAside />
                        </div>
                    }
                    <div className={pathname === "/create-profile/submit" ? "col-lg-12" : "col-lg-9"}>
                        <Switch>
                            <Route path="/create-profile" exact component={CreateProfileGetStart} />
                            <Route path="/create-profile/category" exact component={CreateProfileCategory} />
                            <Route path="/create-profile/expertise-level" exact component={CreateProfileExpertiseLevel} />
                            <Route path="/create-profile/education-and-employment" exact component={CreateProfileEducationAndEmployment} />
                            <Route path="/create-profile/language" exact component={CreateProfileLanguage} />
                            <Route path="/create-profile/hourly-rate" exact component={CreateProfileHourlyRate} />
                            <Route path="/create-profile/title-and-overview" exact component={CreateProfileTitleAndOverview} />
                            <Route path="/create-profile/profile-photo" exact component={CreateProfilePhoto} />
                            <Route path="/create-profile/location" exact component={CreateProfileLocation} />
                            <Route path="/create-profile/phone-number" exact component={CreateProfilePhoneNumber} />
                            <Route path="/create-profile/submit" exact component={CreateProfileSubmit} />
                        </Switch>
                    </div>
                </div>
            </div>
        </section>
    )
}
