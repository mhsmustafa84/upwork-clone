/* eslint-disable jsx-a11y/scope */
import React from "react";

export default function TransactionTable({ transactiondata }) {
  return (
    <>
      <div className="table-responsive">
        <table className="table">
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
                    <td key={index}>
                      {element.DATE}
                    </td>
                    <td key={index}>
                      {element.TYPE}
                    </td>
                    <td colspan="2" key={index}>
                      {element.DESCRIPTION}
                    </td>
                    <td key={index}>
                      {element.CLIENT}
                    </td>
                    <td key={index}>
                      {element.AMOUNT}
                    </td>
                    <td key={index}>
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
