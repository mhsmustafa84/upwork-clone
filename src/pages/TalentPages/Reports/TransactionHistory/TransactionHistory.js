/* eslint-disable */
import CustomButtonwithbackground from "../../../../Components/TalentComponents/CustomButtonwithBackground/CustomButton";
import CustomButtonwithoutbackground from "../../../../Components/TalentComponents/CustomButtonwithoutbackground/CustomButton";
import Date from "../../../../Components/TalentComponents/DateComponent/Date";
import Fillter from "../../../../Components/TalentComponents/FilterComponent/filtercomponent";
import { useTranslation } from "react-i18next";

export default function TransactionHistory() {
  const { t } = useTranslation();
  // const [Tablesdata, setTablesdata] = useState({
  //   Dates: [
  //     {
  //       DATE: "Mar-17-2021",
  //       TYPE: "service fee",
  //       DESCRIPTION: "Service fee for fixed price Ref id",
  //       CLIENT: "John",
  //       AMOUNT: "$200",
  //       REFID: 234323455,
  //     },
  //   ],
  // });
  return (
    <>
      <div className="W-100%">
        <br />
      </div>
      <div className="W-100%">
        <br />
      </div>
      <div className="container mb-0">
        <div className="row">
          <h4 className="mb-2 mt-4">
            {t("Transaction history")}
            <span className="m-0-left-right d-lg-inline">
              <i className="far fa-question-circle"></i>
            </span>
          </h4>
          <h5 className="m-xs-top-bottom nowrap ">
            {t("Balance")}:
            <a href="#" style={{ color: "#73bb44", textDecoration: "none" }}>
              <small className="lead-lg">{t("$0.00")}</small>
            </a>
          </h5>
          <p className="m-0-bottom text-muted nowrap d-lg-block">&nbsp;</p>
        </div>
      </div>

      <div className="container card mt-0">
        <div className="row mb-3 ">
          <div className="col-md-8 ">
            <h5 className="mb-3 mt-3  ">{t("Statement period")}</h5>
            <Date />
          </div>
          <div className="col-md-4 mt-5 ">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
              <CustomButtonwithoutbackground headers={t("Download csv")} />
              <CustomButtonwithbackground headers={t("Download invoices")} />
            </div>
          </div>
        </div>

        <div className=" row mt-3 ">
          <Fillter headers={t("search by clients")} />
          <CustomButtonwithoutbackground headers={t("Apply")} />
        </div>
        <br />
        <div className="row mt-2 mb-2">
          <h3 className="text-center">
            {t("No transactions meet your selected criteria")}
          </h3>
          {/* <TransactionTable transactiondata={Tablesdata} /> */}
        </div>
      </div>
    </>
  );
}
