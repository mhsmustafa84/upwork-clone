/* eslint-disable array-callback-return */
import React from "react";

export default function AddLanguage(props) {
    return (
        <>
            <p className="fw-bold">What is other language do you speake?</p>
            <button type="button" class="btn border border-success rounded-pill col-6 text-success" onClick={props.toggleAddLang}><i class="fas fa-plus"></i> Add Language</button>
            <ul>
                {props.languagesList.map((e, index) => (
                    <li className="col-5 d-flex justify-content-between py-2">
                        <span> <span className="fw-bold">{e["language"]}</span>
                            <span> : {e["langProf"]}</span></span>
                        <i class="fas fa-trash" onClick={() => props.deleteLang(index)}></i>
                    </li>
                ))}
            </ul>
        </>
    )
}