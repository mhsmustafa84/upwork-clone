import React from "react";

export default function TransactionTable({ transactiondata }) {
  return (
    <>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">DATE</th>
              <th scope="col">TYPE</th>
              <th colspan="2">DESCRIPTION</th>
              <th scope="col">CLIENT</th>
              <th scope="col">AMOUNT/BALANCE</th>
              <th scope="col">REF ID</th>
            </tr>
          </thead>
          <tbody>
            {transactiondata.Dates.map((element, index) => {
              return (
                <>
                  <tr>
                    <td scope="col" key={index}>
                      {element.DATE}
                    </td>
                    <td scope="col" key={index}>
                      {element.TYPE}
                    </td>
                    <td colspan="2" key={index}>
                      {element.DESCRIPTION}
                    </td>
                    <td scope="col" key={index}>
                      {element.CLIENT}
                    </td>
                    <td scope="col" key={index}>
                      {element.AMOUNT}
                    </td>
                    <td scope="col" key={index}>
                      {element.REFID}
                    </td>
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
