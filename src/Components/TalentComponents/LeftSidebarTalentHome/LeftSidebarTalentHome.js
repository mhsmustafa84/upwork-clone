/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { SearchContext } from "../../../Context/SearchContext";
import { db } from "../../../firebase";

export default function LeftSidebarTalentHome() {

  const { arr, setarr, setitemSearchList, setsearchList, setswitchJobs} = useContext(SearchContext);
  const user = useSelector((state) => state.talentData);
  const jobs = useSelector((state) => state.jobsData);
  const { t } = useTranslation();
  const { push } = useHistory();

  useEffect(() => {
    user.searchHistory != null ?
      sessionStorage.setItem("searchArray", user?.searchHistory) :
      setarr(user?.searchHistory)
  }, []);

  const handleVal = (textSearch) => {
    setitemSearchList(textSearch);
    let tempArr = [];
    jobs.map((e) => e.skills.includes(textSearch) && tempArr.push(e))
    setsearchList(tempArr)
    push({ pathname: "/search" })
  };

const switchJobs =(txt)=>
{
switch (txt) {
  case "Best Matches":
    setswitchJobs("Best Matches")
    break;
    case "My Feed":
      setswitchJobs("My Feed")
      break;

  default:setswitchJobs("My Feed")
    break;
}
}


  return (
    <div className="col d-none d-lg-block">
      <ul id="list-homepage" className="list-group sidebar-homebage-ul mb-lg-4" >
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true" style={{ background: '#F1F2F4' }}
        >
          <Link
            className=" list-group-item-action sidebar-homebage-ul-li-aa activeside"
            aria-current="true" style={{ background: '#F1F2F4', fontSize: '14px' }}
            onClick={()=>switchJobs("My Feed")}
          >
            {t("My Feed")}
          </Link>
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true" style={{ background: '#F1F2F4' }}
        >
          <Link
            
            className=" list-group-item-action sidebar-homebage-ul-li-aa"
            aria-current="true" style={{ background: '#F1F2F4', fontSize: '14px' }}
            onClick={()=>switchJobs("Best Matches")}
          >
            {t("Best Matches")}
          </Link>
          <span className="hotspot">
            <button className="hotspot__btn" />
          </span>
        </li>
      </ul>

      {arr != null ? (
        <h5 className="mb-lg-2 display-inline-block end">
          {t("RecentSearch")}
        </h5>
      ) : null
      }
      {arr?.slice().reverse()?.map((item, index) =>
        index >= arr.length - 4 ? (
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
                className=" list-group-item-action advanced-search-link text-upwork"
                aria-current="true"
              >
                
                {item}
              </a>
            </li>
          </ul>
        ) : null
      )}

      <h5 className="mb-lg-2 display-inline-block end">{t("My Category")}</h5>
      <ul
        className="list-group sidebar-homebage-ul mb-lg-3 "
        style={{ fontSize: "0.9em" }}
      >
        <li
          className="list-group-item sidebar-homebage-ul-li "
          aria-current="true" style={{ background: '#F1F2F4' }}
        >
          <a
            href="#"
            className=" list-group-item-action advanced-search-link"
            aria-current="true" style={{ background: '#F1F2F4' }}
          >
            {user.jobCategory}
          </a>
        </li>
      </ul>
    </div>
  );
}