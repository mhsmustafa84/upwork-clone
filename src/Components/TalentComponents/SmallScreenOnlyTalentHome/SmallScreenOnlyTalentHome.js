import React from 'react'

export default function SmallScreenOnlyTalentHome() {
    return (
       
      <div className="col-xs-12 d-lg-none d-md-block d-sm-block my-md-4 mb-sm-2">
      <li
        className="list-group-item my-lg-2  rounded  d-grid gap-2"
        type="button"
      >
        <h4>My Proposals</h4>
      </li>
      <li
        className="list-group-item my-lg-2  rounded  d-grid gap-2"
        type="button"
      >
        <h4>My Profile</h4>
      </li>
    </div>
    )
}
