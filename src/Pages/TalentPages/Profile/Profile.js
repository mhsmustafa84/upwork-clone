import React from "react";
import AddandeditExperience from "../../../Components/TalentComponents/AddandeditExperience/AddandeditExperiences";
import AddandeditEmployementHistory from "./../../../Components/TalentComponents/Addeditemploymenthistory/Addeditemployementhistory";
export default function Profile() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    @import url(//db.onlinewebfonts.com/c/3def92f7b2ad644bd382798ecc8ca4c7?family=Canela);\n     {\n        .container {\n             ;\n        }\n    }\n\n    * {\n        margin: 0;\n        padding: 0;\n        \n\n    }\n    body{\n        ;\n\n    }\n",
        }}
      />
      <AddandeditEmployementHistory />
      <AddandeditExperience />
    </>
  );
}
