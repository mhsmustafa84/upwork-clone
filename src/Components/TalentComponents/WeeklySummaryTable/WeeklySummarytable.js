import React from "react";
export default function WeeklySummaryTable({ WeeklySummarydata }) {
  return (
    <>
      <div class="table-responsive">
        <table class="table mb-5 mt-3">
          <thead>
            <tr>
              <th colspan="3" class="fs-5">
                CONTRACT
              </th>
              <th scope="col" class="fs-5">
                HOURS
              </th>
              <th scope="col" class="fs-5">
                AMOUNT
              </th>
              <th colspan="2" class="fs-5">
                PAYMENT TYPE
              </th>
            </tr>
          </thead>
          <tbody>
            {WeeklySummarydata.Dates.map((element, index) => {
              return (
                <>
                  <tr class="table-light">
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
                  <tr class="table-light">
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
