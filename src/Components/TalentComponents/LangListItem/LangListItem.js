import React from "react";

export default function LangListItem(props)
{
    return(
        <>
       <div>
           <li>{props?.element[0]["language"]}</li>
           <i class="fas fa-trash"></i>
       </div>
   </>
    )
}