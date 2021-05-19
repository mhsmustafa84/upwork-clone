/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { langAction } from '../../../Store/actions/lang';

export default function LangButton() {

    let lang = useSelector(state => state.lang);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(langAction(lang));
    }, []);

    const change = () => {
        lang === "en"
            ? lang = "ar"
            : lang = "en";
        dispatch(langAction(lang));
        localStorage.setItem("lang", JSON.stringify(lang));
        window.location.reload();
    }

    return (
        <button
            className="btn btn-warning"
            style={{ width: "70px", position: "fixed", top: "50%", transform: "translateY(-50%)", zIndex: "99999" }}
            onClick={change}
        >
            {lang === "ar" ? "en" : "ar"}
        </button>
    )
}
