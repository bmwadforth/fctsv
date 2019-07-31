import React from "react";

export default function Icon(props){
    return (
        <a href={props.href}><img src={props.src} alt="Icon" /></a>
    );
}