import React from "react";
import PropTypes from "prop-types";

export default function Button(props){
    return (
        <button className={`${props.size ? props.size : "medium"} ${props.status ? props.status : "default"}`}>{props.title}</button>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    status: PropTypes.oneOf(["primary", "danger", "default"])
};