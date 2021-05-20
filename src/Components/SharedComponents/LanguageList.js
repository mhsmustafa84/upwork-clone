import React, { useEffect } from 'react'
import i18next from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { langAction } from '../../Store/actions/lang';


export default function LanguageList() {
    const language =
    [{
      code: 'ar',
      name: 'عربي',
      flag: 'eg',
    },
    {
      code: 'en',
      name: 'English',
      flag: 'gb',
    },]
    //debugger
    let lang = useSelector(state => state.lang)
    const dispatch = useDispatch();
    //why use effect dont re render
    useEffect(() => {
        dispatch(langAction(lang));
        i18next.changeLanguage(lang)
        console.log('renddddddddddddddddd');
    }, []);

    const change = (code) => {
        dispatch(langAction(lang));
        localStorage.setItem("lang", JSON.stringify(code));
        i18next.changeLanguage(code)
        // window.location.reload();
    }

    return (
        <>
              <div className="dropdown">
              <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Languages
                </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {language.map(({ code, name, flag }) => (
                  <li key={flag} onClick={()=>change(code,name,flag)}>
                    <button className="dropdown-item" >
                      <i className={`flag-icon flag-icon-${flag} mx-2`}>
                      </i>
                      <span> {name}</span>
                    </button>
                  </li>
                ))}

              </ul>
            </div>
         
        </>
    )
}
