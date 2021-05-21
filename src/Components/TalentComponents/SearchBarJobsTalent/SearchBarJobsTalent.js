import React,{ useState } from "react";
import firebaseApp from "../../../firebase";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";  



export default function SearchBarJobsTalent() {
  const { t }=useTranslation();
    const [verify, setverify] = useState(false);
  firebaseApp.auth().onAuthStateChanged((user) => {
    if (user) {
      //console.log(user.emailVerified);
      var verf = user.emailVerified;
      setverify(verf);
    }
  });

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
              id="input"
              type="search"
              className="form-control text-dark bg-white btn-outline-success"
              placeholder={t("Search For Jobs")}
            />
             <Link to="/Search">
            <button
              id="search-button"
              type="button"
              className="btn bg-upwork bg-invert"

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
