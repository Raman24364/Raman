import React from "react";
import './Part.css'
function Part({name}){

    return(
        <div className="item">
        <button className="h1">
            {name}
            </button>
        </div>
    )
}
export default Part;