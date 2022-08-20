import React from "react";
import ChangePassword from "../../../Components/ClientComponents/ChangePassword/ChangePassword";
import Verification from "../../../Components/ClientComponents/Verificationoptions/Verification";
export default function Password() {
  return (
    <>
      {/* <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    @import url(//db.onlinewebfonts.com/c/3def92f7b2ad644bd382798ecc8ca4c7?family=Canela);\n     {\n        .container {\n             ;\n        }\n    }\n\n    * {\n        margin: 0;\n        padding: 0;\n        \n\n    }\n    body{\n        ;\n\n    }\n",
        }}
      /> */}
      <div className="container ">
        <div className="row mb-2">
          <h5 className="fw-bold ps-3  ">Password & security</h5>
        </div>
      </div>

      <ChangePassword />

      <Verification />
    </>
  );
}
