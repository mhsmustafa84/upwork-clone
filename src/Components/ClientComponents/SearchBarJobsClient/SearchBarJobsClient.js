import React, { useContext, useEffect} from "react";
import  { db } from "../../../firebase";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SearchContext } from "../../../Context/SearchContext";



export default function SearchBarJobsClient() {
  const { t } = useTranslation();
  const { push } = useHistory();
  const { talentSearchList, settalentSearchList, settalentArr,talentArr } = useContext(SearchContext)
  const handle = (e) => {
    settalentSearchList(e.target.value)
  }
useEffect(() => {
    settalentArr([])
}, [talentSearchList])
const searchDatabase = () => {
  let tempArr = [];
db.collection('talent')
  .where('firstName', '==', talentSearchList)
  .onSnapshot(
    jobs => jobs.docs.map(
      item => {
        tempArr.push(item.data())
        if (talentSearchList != "") {
          settalentArr([...tempArr])
          push({pathname:"/talent/searchclient"})
      }

  })
      )
  if(tempArr.length<=0){
      settalentArr(null)
    push('/talent/searchclient')
  }
}


  return (

    <div>
    
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
