import React from "react";

export default function Row(props){
    return (
        <div className={`row ${props.col && "col"} ${props.squeeze && "squeeze"}`}>
            {props.children}
        </div>
    )
}