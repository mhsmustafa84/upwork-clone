import React, { useContext, useEffect, useState } from "react";
import firebaseApp, { db } from "../../../firebase";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SearchContext } from "../../../Context/SearchContext";



export default function SearchBarJobsClient() {
  const { t } = useTranslation();
  const [verify, setverify] = useState(false);
  const { talentSearchList, settalentSearchList, settalentArr } = useContext(SearchContext)
  firebaseApp.auth().onAuthStateChanged((user) => {
    if (user) {
      var verf = user.emailVerified;
      setverify(verf);
    }
  });
  const handle = (e) => {
    settalentSearchList(e.target.value)
  }
  useEffect(() => {
  }, [talentSearchList])
  const searchDatabase = () => {
    let tempArr = [];
    db.collection('talent')
      .where('firstName', '==', talentSearchList)
      .onSnapshot(
        jobs => jobs.docs.map(
          item => {
            console.log(item.data());
            tempArr.push(item.data())
          })
      )
    if (talentSearchList != "") {
      console.log(tempArr);
      settalentArr([...tempArr])
    }
  }

  return (

    <div>
      {!verify && (
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Email Verification</strong> Your mail is not verified
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <div className="col-8 input-group form-outline has-success">
        <input
          id="input"
          type="search"
          onChange={handle}
          value={talentSearchList}
          className="form-control text-dark bg-white btn-outline-success"
          placeholder={t("Search For Jobs")}
        />
        <Link >
          <button
            id="search-button"
            type="button"
            className="btn bg-upwork bg-invert"
            onClick={searchDatabase}
          >
            <i className="fas fa-search" />
          </button>
        </Link>
      </div>
      <span>
        <a href="#" className="advanced-search-link">
          {t("AdvancedSearch")}
        </a>
      </span>
    </div>

  )
}
