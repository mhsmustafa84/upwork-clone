import React,{ useEffect, useState } from "react";
import firebaseApp, { db } from "../../../firebase";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";  


export default function SearchBarJobsTalent(props) {
  const { t }=useTranslation();
  let [searchValue, setsearchValue] = useState('');
  const [verify, setverify] = useState(false);
  const { push } = useHistory();
 

  const handlSearchValue=(e)=>{
     searchValue=e.target.value
    setsearchValue(searchValue);
  }

  const searchDatabase = () => {
    let arr = [];
    db.collection('job')
    .where('skills', 'array-contains', searchValue)
    .onSnapshot(
      jobs=>jobs.docs.map(
        item=>{
        arr.push(item.data())
         push({pathname:"/search",state:arr})
      }
      
      ))
}

  
  firebaseApp.auth().onAuthStateChanged((user) => {
    if (user) {
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
            onInput={handlSearchValue}
              id="input"
              type="search"
              className="form-control text-dark bg-white btn-outline-success"
              placeholder={t("Search For Jobs")}
            />
           
            <Link
              id="search-button"
              type="button"
              className="btn bg-upwork bg-invert"
              onClick={searchDatabase} 
            >
              <i className="fas fa-search" />
            </Link>
        
          </div>
          
        </div>
        
    )
}
