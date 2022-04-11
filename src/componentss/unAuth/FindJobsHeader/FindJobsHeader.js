import React from 'react'

export default function FindJobsHeader() {
    return (
        <div>
            <section className="container-fluid bg-light px-5 py-5 mt-5" id="header-section-ID">
  <div className="row mb-3 mt-5 pt-5" id="header-section-header-ID">
    <h1 className="text-center fw-bolder display-5">
      Find the best freelance jobs
    </h1>
  </div>
  <div className="row mb-4" id="header-section-paragraph-ID">
    <div className="col-md-6 col-12 mx-auto text-center small">
      Find the right freelance job for your next work from home opportunity
      on the world's largest hiring platform connecting savvy businesses and
      professional freelancers. Browse by Upwork's robust database of
      categories, skills, and deliverables.
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 col-12 mx-auto">
      <input type="search" className="form-control" id="header-section-search-ID" placeholder="Enter your desired skill name (e.g. PHP)" />
    </div>
  </div>
</section>

        </div>
    )
}
