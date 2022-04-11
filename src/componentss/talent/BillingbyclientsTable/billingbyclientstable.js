import React from "react";
export default function Table({ tabledata }) {
  return (
    <div className="Table container">
      <div className=" tables">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col" className="text-start">
                Clients
              </th>
              <th scope="col" className="text-end">
                Total Billed
              </th>
            </tr>
          </thead>
          <tbody>
            {tabledata.Dates.map((element, index) => {
              return (
                <>
                  <tr>
                    <td scope="col" className="text-start" key={index}>
                      {element.x}
                    </td>
                    <td scope="col" className="text-end" key={index}>
                      {element.y}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
