/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { SearchContext } from '../../../Context/SearchContext';
import { talentsDataAction } from '../../../Store/actions/talentsDataAction';


export default function HeaderSearchLg() {
  const { t } = useTranslation();
  const { push } = useHistory();
  const talents = useSelector((state) => state.talentsData);
  const { talentSearchList, settalentSearchList, settalentArr } = useContext(SearchContext)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(talentsDataAction());
  }, [])

  useEffect(() => {
    let tempArr = [];
    talents.map((tal) => tal.firstName.toLowerCase().includes(talentSearchList.toLowerCase()) && tempArr.push(tal))
    settalentArr([...tempArr])
    talentSearchList === "" && settalentArr([])
  }, [talentSearchList])

  const handle = (e) => {
    settalentSearchList(e.target.value)
  }

  const searchDatabase = () => {
    let tempArr = [];
    talents.map((tal) => tal.firstName.toLowerCase().includes(talentSearchList.toLowerCase()) && tempArr.push(tal))
    settalentArr([...tempArr])
    push({ pathname: "/talent/searchclient" })
  }


  return (
    <div>
      <form id="search-form-id" className="d-flex ms-4">
        <Link className="btn position-relative search-btn-cn"
          onClick={searchDatabase}
        >
          <i className="fa fa-search text-white search-icon-cn"></i>
        </Link>
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
