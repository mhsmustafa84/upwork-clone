import AddandeditExperience from "../../../Components/TalentComponents/AddandeditExperience/AddandeditExperiences";
import TestimonialsProfileTalent from "../../../Components/TalentComponents/TestimonialsProfileTalent/TestimonialsProfileTalent";
import AddandeditEmployementHistory from "./../../../Components/TalentComponents/Addeditemploymenthistory/Addeditemployementhistory";
import CertificatProfileTalent from "./../../../Components/TalentComponents/CertificatProfileTalent/CertificatProfileTalent";
import FirstSectionProfileTalent from "./../../../Components/TalentComponents/FirstSectionProfileTalent/FirstSectionProfileTalent";

export default function Profile() {

  return (
    <>
      <FirstSectionProfileTalent />
      <TestimonialsProfileTalent />
      <CertificatProfileTalent />
      <AddandeditEmployementHistory />
      <AddandeditExperience />
    </>
  );
}
