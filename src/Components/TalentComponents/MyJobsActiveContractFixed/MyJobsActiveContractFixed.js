import React from 'react'

export default function MyJobsActiveContractFixed() {
    return (
        <div className="row d-flex justify-content-between border border-1 py-3 px-5">
<div className="col">
    <div className="fw-bold text-success">Contract Name</div>
    <div className="text-muted">Hired by Client Name</div>
</div>
<div className="col">
<div>No active milestones</div>
    <div>$10.00 paid of $10.00
</div>
</div>
<div className="col">
<div className="btn-group float-sm-end ">
              <button
                type="button"
                className="btn btn-light dropdown-toggle border border-1 rounded-circle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-h " />
              </button>
              <ul className="dropdown-menu">
                
                <li>
                  <a className="dropdown-item" href="#">
                    Send a message
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Propose new contract
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Propose new milestones
                  </a>
                </li>
              </ul>
            </div>
</div>

        </div>
    )
}
