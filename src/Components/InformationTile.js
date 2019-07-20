import React from "react";
import PropTypes from "prop-types";

export default function InformationTile(props){
    return (
        <section className="information-tile">
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <div className="content">
                <p>{props.content}</p>
            </div>
        </section>
    )
}

InformationTile.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};