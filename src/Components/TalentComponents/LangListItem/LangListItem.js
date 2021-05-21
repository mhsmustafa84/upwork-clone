import React from "react";

export default function LangListItem(props)
{
    return(
        <>
       <li className="col-5 d-flex justify-content-between py-2">
          <span> <span className="fw-bold">{props.element["language"]}</span>
           <span> : {props.element["langProf"]}</span></span>
           <i class="fas fa-trash" onClick={()=>props.del(props.element)}></i>
       </li>
   </>
    )
}