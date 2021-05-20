import React from "react";
import { useTranslation } from "react-i18next";

export default function SearchJobPosts() {
  const { t } = useTranslation();

  return (
    <div>
      <form className="row align-items-center">
        <div className="col-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control btn-outline-success bg-white"
              id="SearchForJobPosts"
              placeholder={t("Search job postings")}
            />
            <div className="input-gruop-text">
              <button type="button" className="btn bg-upwork ">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-2 mx-3">
          <button
            type="button"
            className="btn btn-white border border-secondary btn-outline-success bg-light text-success "
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i className="fas fa-filter" /> {t("Filters")}
          </button>
        </div>
      </form>
    </div>
  );
}
