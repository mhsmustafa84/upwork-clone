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
