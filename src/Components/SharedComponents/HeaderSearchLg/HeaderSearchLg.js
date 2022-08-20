/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { db } from '../../../firebase';
import { SearchContext } from '../../../Context/SearchContext';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { talentDataAction } from '../../../Store/actions/talentData';
import { updateUserData } from '../../../Network/Network';
import { Link } from 'react-router-dom';
import './HeaderSearchLg.css'

export default function HeaderSearchLg() {

  const { arr, setarr, itemSearchList, setitemSearchList, setsearchList } = useContext(SearchContext)
  const { t } = useTranslation();
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
    <>
      <form id="search-form-id" className="d-flex ms-4">
        <Link className="btn position-relative search-btn-cn" onClick={searchDatabase}>
          <i className="fa fa-search text-white search-icon-cn"></i>
        </Link>
        <div className="dropdown search-type-cn">
          <Link
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          </Link>
        </div>
        <input
          className="form-control ms-1 ps-5 py-1 border-0 text-white search-input-cnn place-h-cn"
          type="search"
          onChange={handle}
          value={itemSearchList}
          style={{ color: 'white' }}
          placeholder={t("Search")}
          aria-label="Search"
        />
      </form>
    </>
  )
}



