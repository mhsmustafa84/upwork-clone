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
  const { push } = useHistory();
  const { arr, setarr, itemSearchList, setitemSearchList } = useContext(SearchContext)
  const user = useSelector((state) => state.talentData);
  const dispatch = useDispatch();
  useEffect(() => {
    sessionStorage.setItem('searchArray', JSON.stringify(user.searchHistory))
    console.log(arr);
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
      })
    )
      if(tempArr.length<=0){
        
        push('/search')
      }
      if (itemSearchList !="") {
        let  arr2=[]
        arr != null ?arr2 = [itemSearchList,...arr] : 
        arr2=[itemSearchList]
        user.searchHistory !=null ?   
        updateUserData('talent', { searchHistory: [...user?.searchHistory,...arr2] })
        :updateUserData('talent', { searchHistory: [...arr2] })

        sessionStorage.setItem('searchArray',JSON.stringify(arr2))
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
      <span>
        <a href="#" className="advanced-search-link">
          {t("AdvancedSearch")}
        </a>
      </span>
    </div>

  )
}