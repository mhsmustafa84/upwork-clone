/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import firebaseApp from "../../../firebase";
import { langAction } from "../../../Store/actions/lang";
import language from './FindWorkTalentHomeLocal';

export default function FindWorkTalentHome() {
  const { t } = useTranslation();
  const [local, setLoc] = useState({});

  let lang = useSelector(state => state.lang);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(langAction(lang));
    lang === "ar" ? setLoc(language.ar) : setLoc(language.en)
  }, [lang]);

  const [verify, setverify] = useState(false);
  firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
      var verf = user.emailVerified;
      setverify(verf);
    }
  });

  return (
    <div className="d-none d-lg-block" >
      <div className="row my-lg-4">
        <div className="col">
          <h3>{local.FindWork}</h3>
        </div>
        <div className="col-8">
          {!verify && (
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>{t('Email Verification')}</strong>{t('Your mail is not verified')} 
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
          <div className="col-8 input-group form-outline has-success">
            <input
              id="input"
              type="search"
              className="form-control text-dark bg-white btn-outline-success"
              placeholder={t("Search For Jobs")}
            />
            <button
              id="search-button"
              type="button"
              className="btn bg-upwork bg-invert"
            >
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
