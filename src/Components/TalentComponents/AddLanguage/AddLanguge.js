/* eslint-disable array-callback-return */
import React from "react";
import LangListItem from "../LangListItem/LangListItem";

export default function AddLanguage(props) {
    const listItems = props.languagesList.map((number) =>  {
        console.log(number.language);
    <li> {number.language} </li>  
   });
    return (
        <>
            <p className="fw-bold">What is other language do you speake?</p>
            <button type="button" class="btn border border-success rounded-pill col-6 text-success" onClick={props.toggleAddLang}><i class="fas fa-plus"></i> Add Language</button>
            {/* <ul>
                {props.languagesList.map((e, index) => {
                    console.log(e.language);
               
                    <li>{listItems}</li>
                    console.log(e.language);

                })} 
                <li>{props.languagesList[0]["language"]}</li>
            </ul> */}
            <div>  
      <h2>React Map Example</h2>  
          <ul> {listItems} </ul>  
    </div>
        </>
    )
}