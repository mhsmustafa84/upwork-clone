import React from "react";
export default function OverviewTable({ overviewdate }) {
  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead>
            {overviewdate.Dates.map((element, index) => {
              return (
                <>
                  <tr>
                    <th colspan="3" key={index}>
                      JOB
                    </th>
                    <th scope="col" key={index}>
                      {element.Day1}{" "}
                    </th>
                    <th scope="col" key={index}>
                      {element.Day2}
                    </th>
                    <th scope="col" key={index}>
                      {element.Day3}
                    </th>
                    <th scope="col" key={index}>
                      {element.Day4}
                    </th>
                    <th scope="col" key={index}>
                      {element.Day5}
                    </th>
                    <th scope="col" key={index}>
                      {element.Day6}
                    </th>
                    <th scope="col" key={index}>
                      {element.Day7}
                    </th>
                    <th scope="col" key={index}>
                      Hours
                    </th>
                    <th scope="col" key={index}>
                      RATE
                    </th>
                    <th scope="col" key={index}>
                      AMOUNT
                    </th>
                  </tr>
                </>
              );
            })}
          </thead>
          <tbody>
            {overviewdate.Dates.map((element, index) => {
              return (
                <>
                  <tr>
                    <td colspan="3" key={index}>
                      {element.JOB}
                    </td>
                    <td key={index}>--</td>
                    <td key={index}>--</td>
                    <td key={index}>--</td>
                    <td key={index}>--</td>
                    <td key={index}>--</td>
                    <td key={index}>--</td>
                    <td key={index}>--</td>
                    <td key={index}>-</td>
                    <td>{element.RATE}</td>
                    <td>{element.PRICE}</td>
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
