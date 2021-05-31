/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom'
import { SearchContext } from '../../../Context/SearchContext';
import { db } from '../../../firebase';

export default function HeaderSearchLg() {
  const { t } = useTranslation();
  const { push } = useHistory();
  const { talentSearchList, settalentSearchList, settalentArr } = useContext(SearchContext)
  const handle = (e) => {
    settalentSearchList(e.target.value)
  }

  const searchDatabase = () => {
    let tempArr = [];
    db.collection('talent')
      .where('firstName', '==', talentSearchList)
      .onSnapshot(
        jobs => jobs.docs.map(
          item => {
            tempArr.push(item.data())
            if (talentSearchList !== "") {
              settalentArr([...tempArr])
              push({ pathname: "/talent/searchclient" })
            }

          })
      )
    if (tempArr.length <= 0) {
      settalentArr(null)
      push('/talent/searchclient')
    }
  }


  return (
    <div>
      <form id="search-form-id" className="d-flex ms-4">
        <button className="btn position-relative search-btn-cn"
          onClick={searchDatabase}
        >
          <i className="fa fa-search text-white search-icon-cn"></i>
        </button>
        <div className="dropdown search-type-cn">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          </a>
        </div>
        <input
          className="form-control ms-1 ps-5 py-1 border-0 text-white search-input-cnn"
          type="search"
          onChange={handle}
          value={talentSearchList}
          style={{ color: 'white' }}
          placeholder={t("Search")}
          aria-label="Search"
        />
      </form>
    </div>
  )
}
