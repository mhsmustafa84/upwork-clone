/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useContext, useEffect } from "react";
import './SearchBarJobsTalent.css'
import { db } from "../../../firebase";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SearchContext } from '../../../Context/SearchContext';
import { updateUserData } from '../../../Network/Network'
import { useDispatch, useSelector } from "react-redux";
import { talentDataAction } from "../../../Store/actions/talentData";


export default function SearchBarJobsTalent(props) {
  const { t } = useTranslation();
  let lang = useSelector(state => state.lang);
  const { arr, setarr, itemSearchList, setitemSearchList, setsearchList } = useContext(SearchContext)
  const { push } = useHistory();
  const user = useSelector((state) => state.talentData);
  const jobs = useSelector((state) => state.jobsData);
  const dispatch = useDispatch();
  useEffect(() => {
    sessionStorage.setItem('searchArray', JSON.stringify(user.searchHistory))
    dispatch(talentDataAction());

  }, []);

  const handle = (e) => {
    setitemSearchList(e.target.value)
  }

  useEffect(() => {
   itemSearchList === "" && setsearchList([])
  }, [itemSearchList])

  const searchDatabase = () => {
    let tempArr = [];
    jobs.map((e) => e.skills?.includes(itemSearchList) && tempArr.push(e))
    console.log(tempArr);
    setsearchList(tempArr)
    push({ pathname: "/search" })
    if (itemSearchList !== "") {
      let arr2 = []
      arr != null ? arr2 = [itemSearchList, ...arr] :
        arr2 = [itemSearchList]
      user.searchHistory != null ?
        updateUserData('talent', { searchHistory: [...user?.searchHistory, ...arr2] })
        : updateUserData('talent', { searchHistory: [...arr2] })
      sessionStorage.setItem('searchArray', JSON.stringify(arr2))
      setarr([...arr2])
    }
  }
  return (
    <div>
      <div className="col-8 input-group form-outline has-success">
        <input
          onChange={handle}
          value={itemSearchList}
          id="input"
          type="search"
          style={{height: "35.5px" , borderRadius : 0 }}
          className={`form-control text-dark bg-white ${lang =='ar' ?"rounded-end" :  "rounded-start"}`}
          placeholder={t("Search For Jobs")}
        />
        <Link onClick={searchDatabase}>
          <button
            id="search-button"
            type="button"
            style = {{borderRadius : 0 , fontSize:'10px' }}
            className={`btn bg-upwork bg-invert search  ${lang =='ar' ?"rounded-start" :  "rounded-end"}`}
          >

            <i className="fas fa-search" style={{lineHeight : '22px'}} />
          </button>
        </Link>
      </div>
      <span className="d-block pt-2">
        <Link to='/Search' className="advanced-search-link" style={{fontSize:'13.5px' , color:'#3CAF24', fontWeight:"600"}}>
          {t("AdvancedSearch")}
        </Link>
      </span>
    </div>

  )
}
