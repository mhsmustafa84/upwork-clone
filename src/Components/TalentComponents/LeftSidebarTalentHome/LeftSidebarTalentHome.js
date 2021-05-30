/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { SearchContext } from "../../../Context/SearchContext";
import { db } from "../../../firebase";

export default function LeftSidebarTalentHome({ user }) {

  const { arr, setarr, setitemSearchList } = useContext(SearchContext);
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
    db.collection('job')
      .where('skills', 'array-contains', textSearch)
      .onSnapshot(
        jobs => jobs.docs.map(
          item => {
            tempArr.push(item.data())
            push({ pathname: "/search", state: tempArr })
          })
      )
    if (tempArr.length <= 0) {
      push('/search')
    }
  };

  return (
    <div className="col d-none d-lg-block">
      <ul id="list-homepage" className="list-group sidebar-homebage-ul mb-lg-4" >
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true" style={{ background: '#F1F2F4' }}
        >
          <a
            href="#"
            className=" list-group-item-action sidebar-homebage-ul-li-aa activeside"
            aria-current="true" style={{ background: '#F1F2F4', fontSize: '14px' }}
          >
            {t("My Feed")}
          </a>
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true" style={{ background: '#F1F2F4' }}
        >
          <a
            href="#"
            className=" list-group-item-action sidebar-homebage-ul-li-aa"
            aria-current="true" style={{ background: '#F1F2F4', fontSize: '14px' }}
          >
            {t("Best Matches")}
          </a>
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