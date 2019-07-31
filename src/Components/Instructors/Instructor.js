import React from "react";

export default function Instructor(props){
    return (
        <div className="instructor">
            <h1>{props.firstName} {props.lastName}</h1>
            <p>{props.bio}</p>
            <img src={props.image} />
            {/* add belt type, and other useful information*/}
        </div>
    )
}