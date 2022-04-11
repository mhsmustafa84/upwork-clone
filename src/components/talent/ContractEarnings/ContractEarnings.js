import React from 'react'

export default function ContractEarnings({ client, clientContract, job }) {
    console.log(client);
    console.log(clientContract);
    console.log(job);
    return (
        <div className=" pt-4 pb-5 ps-4 mt-3">
            <div className="row">
                <div className="col">
                    <h6>Budget</h6>
                    <h4>${clientContract?.jobBudget}</h4>
                </div>
                <div className="col">
                    <h6>Total Earnings</h6>
                    <h4>$0</h4>
                </div>
            </div>
            {/* <hr />
            <div className="">
                <h5>{job?.jobTitle}</h5>
                <h6>${clientContract?.jobBudget}</h6>
                {
                    job?.clientJobReview?.review &&
                    <h6>Completed Feb 21</h6>
                }
            </div> */}
        </div>

    )
}
