import React,{ useContext, useEffect, useState } from "react";
import { db } from "../../../firebase";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";  
import { SearchContext } from '../../../Context/SearchContext';
import { updateUserData } from '../../../Network/Network'
import { useDispatch, useSelector } from "react-redux";
import { talentDataAction } from "../../../Store/actions/talentData";


export default function SearchBarJobsTalent(props) {
  const { t }=useTranslation();
  const { push } = useHistory();
  const { arr, setarr, itemSearchList, setitemSearchList } = useContext(SearchContext)
  const user = useSelector((state) => state.talentData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(talentDataAction());
    console.log(user);
  }, []);

  const handle = (e) => {
    setitemSearchList(e.target.value)
  }

  const searchDatabase = () => {
    let tempArr = [];
    db.collection('job')
    .where('skills', 'array-contains', itemSearchList)
    .onSnapshot(
      jobs=>jobs.docs.map(
        item=>{
        tempArr.push(item.data())
        push({pathname:"/search",state:tempArr})
      }))

      if (itemSearchList != "") {
       let  arr2 = [itemSearchList,...arr];       
        updateUserData('talent', { searchHistory: [...user?.searchHistory,...arr2] })
        setarr(arr2);
        sessionStorage.setItem('searchArray',JSON.stringify(arr2))
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
          className="form-control text-dark bg-white btn-outline-success"
          placeholder={t("Search For Jobs")}
        />
        <Link onClick={searchDatabase}>
          <button
            id="search-button"
            type="button"
            className="btn bg-upwork bg-invert search"
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
