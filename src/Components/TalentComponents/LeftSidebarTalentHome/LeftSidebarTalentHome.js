/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { talentDataAction } from "../../../Store/actions/talentData";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { SearchContext } from '../../../Context/SearchContext'
import { db } from "../../../firebase";

export default function LeftSidebarTalentHome() {
  const { arr,setarr, setitemSearchList } = useContext(SearchContext);
  const { t } = useTranslation();
  const user = useSelector(state => state.talentData);
  const { push } = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(talentDataAction());
  setarr(JSON.parse(sessionStorage.getItem('searchArray')))
  }, []);
  const handleVal = (textSearch) => {
    setitemSearchList(textSearch)
    let tempArr=[];
    db.collection('job')
    .where('skills', 'array-contains', textSearch)
    .onSnapshot(
      jobs=>jobs.docs.map(
        item=>{
        tempArr.push(item.data())
        push({pathname:"/search",state:tempArr})
      }))
  }

  return (
    <div className="col d-none d-lg-block">
      <ul id="list-homepage" className="list-group sidebar-homebage-ul mb-lg-4">
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true"
        >
          <a
            href="#"
            className=" list-group-item-action sidebar-homebage-ul-li-aa activeside"
            aria-current="true"
          >
            {t("My Feed")}
          </a>
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true"
        >
          <a
            href="#"
            className=" list-group-item-action sidebar-homebage-ul-li-aa"
            aria-current="true"
          >
            {t("Best Matches")}

          </a>
          <span className="hotspot">
            <button className="hotspot__btn" />
          </span>
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true"
        >
          <a
            href="#"
            className=" list-group-item-action sidebar-homebage-ul-li-aa"
            aria-current="true"
          >
            {t("Recommended")}
          </a>
        </li>
      </ul>

      
      {arr!= null?
      <h5 className="mb-lg-2 display-inline-block end">{t("RecentSearch")}</h5>:
      null
      }
      {arr?.map((item,index) =>
      index >= arr.length-3 ? 
     
        <ul
          className="list-group sidebar-homebage-ul mb-lg-3 btn"
          style={{ fontSize: "0.9em" }}
        >

          <li
            className="list-group-item sidebar-homebage-ul-li text-success "
            aria-current="true"

          >
            <a
              onClick={() => handleVal(item)}
             
              className=" list-group-item-action advanced-search-link"
              aria-current="true"
            >
              {item}
            </a>

          </li>

        </ul>

     
        :null
       )}



      <h5 className="mb-lg-2 display-inline-block end">
        {t("My Categories")}

      </h5>
      <ul
        className="list-group sidebar-homebage-ul mb-lg-3 "
        style={{ fontSize: "0.9em" }}
      >
        <li
          className="list-group-item sidebar-homebage-ul-li "
          aria-current="true"
        >
          <a
            href="#"
            className=" list-group-item-action advanced-search-link"
            aria-current="true"
          >
            {user.jobCategory}
          </a>
        </li>
      </ul>
      <span className="btn-group float-sm-start px-lg-1">
        <button
          type="button"
          className="btn btn-light dropdown-toggle border border-1 rounded-circle collapsed"
          data-toggle="collapse"
          data-target="#collapse"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-pen" aria-hidden="true" />
        </button>
      </span>
    </div>
  );
}