import React from "react";
export default function WeeklySummaryTable({ WeeklySummarydata }) {
  return (
    <>
      <div className="table-responsive">
        <table className="table mb-5 mt-3">
          <thead>
            <tr>
              <th colspan="3" className="fs-5">
                CONTRACT
              </th>
              <th scope="col" className="fs-5">
                HOURS
              </th>
              <th scope="col" className="fs-5">
                AMOUNT
              </th>
              <th colspan="2" className="fs-5">
                PAYMENT TYPE
              </th>
            </tr>
          </thead>
          <tbody>
            {WeeklySummarydata.Dates.map((element, index) => {
              return (
                <>
                  <tr className="table-light">
                    <td colspan="7" key={index}>
                      {element.date}
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" style={{ color: "#73bb44" }} key={index}>
                      {element.CONTRACT}
                    </td>
                    <td scope="col" key={index}>
                      {element.HOURS}
                    </td>
                    <td scope="col" key={index}>
                      {element.AMOUNT}
                    </td>
                    <td scope="col" key={index}>
                      {element.PAYMENTTYPE}
                    </td>
                  </tr>
                  <tr className="table-light">
                    <td colspan="4" key={index}>
                      {" "}
                      Total For {element.date}{" "}
                    </td>
                    <td scope="col" key={index}>
                      {element.AMOUNT}
                    </td>
                    <td scope="col" key={index}></td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
