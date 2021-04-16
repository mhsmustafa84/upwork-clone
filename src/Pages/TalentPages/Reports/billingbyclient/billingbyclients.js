import React, { useState } from "react";
// import Table from "../../../../Components/TalentComponents/BillingbyclientsTable/billingbyclientstable";
import CustomButtonwithoutbackground from "../../../../Components/TalentComponents/CustomButtonwithoutbackground/CustomButton";
export default function BillingByClients() {
  // const [Tablesdata, setTablesdata] = useState({
  //   Dates: [
  //     { x: "Beer", y: "$100" },
  //     { x: "jacabo", y: "$200" },
  //   ],
  // });

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    @import url(//db.onlinewebfonts.com/c/3def92f7b2ad644bd382798ecc8ca4c7?family=Canela);\n    @media (min-width: 1200px) {\n        .container {\n            max-width: 74%;\n        }\n    }\n\n    * {\n        margin: 0;\n        padding: 0;\n        \n\n    }\n    body{\n        background-color: #f1f2f4;\n\n    }\n",
        }}
      />

      <div className="container card mt-5 ">
        <div className="row mb-4">
          <div className="col">
            <div className="mt-3 d-md-none d-sm-none"></div>
            <h1
              className="mb-2 ms-2 mt-4 fw-bold"
              style={{
                lineHeight: "27px",
                fontSize: "21px",
                fontWeight: "700",
                textAlign: "left",
              }}
            >
              Billings By Clients
            </h1>
          </div>
          {/* <div className=" row mt-3">
            <Table tabledata={Tablesdata} />
          </div> */}
          <h4 className="text-center fw-bold fs-3">No billings so far.</h4>

          <div className=" d-md-block col-md-6 mx-auto text-center">
            {/* <button
              type="button"
              className="btn btn-light mb-3  mt-2 rounded-border "
              style={{ backgroundColor: "white", color: "#6fda44" }}
            > */}
            <CustomButtonwithoutbackground headers="Load more" />
            {/* </button> */}
          </div>

          <div className="container text-start">
            <div className="col ">
              <small className="text-muted ">Report updated weekly</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
