/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import firebaseApp from "../../../firebase";
import SearchBarJobsTalent from "../SearchBarJobsTalent/SearchBarJobsTalent";

import { langAction } from "../../../Store/actions/lang";
import language from './FindWorkTalentHomeLocal';

export default function FindWorkTalentHome() {
  const { t } = useTranslation();
  // const [local, setLoc] = useState({});

  // let lang = useSelector(state => state.lang);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(langAction(lang));
  //   lang === "ar" ? setLoc(language.ar) : setLoc(language.en)
  // }, [lang]);
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
          <h3>{t("FindWork")}</h3>
        </div>
        <div className="col-8">
        <SearchBarJobsTalent/>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
