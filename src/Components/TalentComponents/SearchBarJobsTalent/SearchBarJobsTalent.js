/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import firebaseApp from "../../../firebase";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { updateUserData } from '../../../Network/Network'
import { SearchContext } from '../../../Context/SearchContext'


export default function SearchBarJobsTalent() {
  const { t } = useTranslation();
  const [verify, setverify] = useState(false);
  firebaseApp.auth().onAuthStateChanged((user) => {
    if (user) {
      var verf = user.emailVerified;
      setverify(verf);
    }
  });
  const { arr, setarr, itemSearchList, setitemSearchList } = useContext(SearchContext)
  const handleOnClick = () => {
    if (itemSearchList !== "") {

      let arr2 = [itemSearchList, ...arr];
      setarr(arr2);
      console.log(itemSearchList);
      updateUserData('talent', { searchHistory: arr })
    }

  }
  const handle = (e) => {
    e.preventDefault();
    setitemSearchList(e.target.value)
  }
  return (
    <div>
      {!verify && (
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>{t("Email Verification")}</strong> {t("Your mail is not verified")}
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

          onChange={(e) => handle(e)}
          value={itemSearchList}
          id="input"
          type="search"
          className="form-control text-dark bg-white btn-outline-success"
          placeholder={t("Search For Jobs")}
        />
        <NavLink to="/Search" onClick={handleOnClick}>
          <button


            id="search-button"
            type="button"
            className="btn bg-upwork bg-invert search"

          >

            <i className="fas fa-search" />

          </button>
        </NavLink>
      </div>
      <span>
        <a href="#" className="advanced-search-link">
          {t("AdvancedSearch")}
        </a>
      </span>
    </div>

  )
}
