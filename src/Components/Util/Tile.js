import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

export default function Tile(props){
    return (
        <div className="tile">
            <div className="title">
                <h1>{props.icon && <Icon src={props.icon}/>} {props.title}</h1>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

Tile.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOf([PropTypes.object, PropTypes.array])
};