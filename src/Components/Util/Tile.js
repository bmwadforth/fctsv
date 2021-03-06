import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

export default function Tile(props) {
  return (
    <div className="tile">
      <div className="title">
        <h2>
          {props.icon && <Icon icon={props.icon} />}
          {props.title}
        </h2>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

Tile.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
