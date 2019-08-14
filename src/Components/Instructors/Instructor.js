import React from "react";

export default function Instructor(props){
    return (
        <div className="instructor">
            <span className="title">
                <img src={props.image} alt="Instructor" />
                <span className="title-body">
                    <h1>{props.name}</h1>
                    <p>Classes: {props.classes}</p>
                </span>
            </span>
            <sub>{props.bio}</sub>
            {/* add belt type, and other useful information*/}
        </div>
    )
}