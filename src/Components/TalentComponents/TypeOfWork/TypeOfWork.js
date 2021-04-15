import React from 'react'

export default function TypeOfWork() {
    return (
        <div>
            <>
  <div className="col-xl-3 px-5 d-none d-xl-block">
    <div className="fw-bold py-2 fs-6 ">
      Type of work
    </div>
    <div className="row ms-3">
      <div className="form-check py-2 px-2">
        <input className="form-check-input" type="radio" name="typeOfWorkChoices" id="main-section-type-of-work-choice1-ID" />
        <label className="form-check-label" htmlFor="main-section-type-of-work-choice1-ID">
          Any type of work
        </label>
      </div>
      <div className="form-check py-2 px-2">
        <input className="form-check-input" type="radio" name="typeOfWorkChoices" id="main-section-type-of-work-choice1-ID" />
        <label className="form-check-label" htmlFor="main-section-type-of-work-choice1-ID">
          Development &amp; IT
        </label>
      </div>
      <div className="form-check py-2 px-2">
        <input className="form-check-input" type="radio" name="typeOfWorkChoices" id="main-section-type-of-work-choice1-ID" />
        <label className="form-check-label" htmlFor="main-section-type-of-work-choice1-ID">
          Design &amp; Creative
        </label>
      </div>
      <div className="form-check py-2 px-2">
        <input className="form-check-input" type="radio" name="typeOfWorkChoices" id="main-section-type-of-work-choice1-ID" />
        <label className="form-check-label" htmlFor="main-section-type-of-work-choice1-ID">
          Finance &amp; Accounting
        </label>
      </div>
      <div className="form-check py-2 px-2">
        <input className="form-check-input" type="radio" name="typeOfWorkChoices" id="main-section-type-of-work-choice1-ID" />
        <label className="form-check-label" htmlFor="main-section-type-of-work-choice1-ID">
          Admin &amp; Customer Support
        </label>
      </div>
      <div className="form-check py-2 px-2">
        <input className="form-check-input" type="radio" name="typeOfWorkChoices" id="main-section-type-of-work-choice1-ID" />
        <label className="form-check-label" htmlFor="main-section-type-of-work-choice1-ID">
          Engineering &amp; Architecture
        </label>
      </div>
      <div className="form-check py-2 px-2">
        <input className="form-check-input" type="radio" name="typeOfWorkChoices" id="main-section-type-of-work-choice1-ID" />
        <label className="form-check-label" htmlFor="main-section-type-of-work-choice1-ID">
          Legal
        </label>
      </div>
      <div className="form-check py-2 px-2">
        <input className="form-check-input" type="radio" name="typeOfWorkChoices" id="main-section-type-of-work-choice1-ID" />
        <label className="form-check-label" htmlFor="main-section-type-of-work-choice1-ID">
          Sales &amp; Marketing
        </label>
      </div>
      <div className="form-check py-2 px-2">
        <input className="form-check-input" type="radio" name="typeOfWorkChoices" id="main-section-type-of-work-choice1-ID" />
        <label className="form-check-label" htmlFor="main-section-type-of-work-choice1-ID">
          Writing &amp; Translation
        </label>
      </div>
    </div>
  </div>
  <div className="row d-block d-xl-none px-lg-5 px-1 py-3">
    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
      <option value>Any type of work</option>
      <option value={2}>Development &amp; IT</option>
      <option value={3}>Design &amp; Creative</option>
      <option value={1}>
        Finance &amp; Accounting</option>
      <option value={2}>Admin &amp; Customer Support</option>
      <option value={3}>Engineering &amp; Architecture</option>
      <option value={2}>Legal</option>
      <option value={3}>
        Sales &amp; Marketing</option>
      <option value={2}>
        Writing &amp; Translation</option>
    </select>
  </div>
</>

        </div>
    )
}
