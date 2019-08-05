import React from "react";
import {ReactComponent as Facebook} from "../../Assets/Icons/facebook.svg";
import {ReactComponent as Instagram} from "../../Assets/Icons/instagram.svg";
import {ReactComponent as Philosophy} from "../../Assets/Icons/socrates.svg";
import {ReactComponent as Journey} from "../../Assets/Icons/map.svg";
import {ReactComponent as Ethics} from "../../Assets/Icons/ethics.svg";

export const ICON = {
    FACEBOOK: <Facebook />,
    INSTAGRAM: <Instagram />,
    PHILOSOPHY: <Philosophy />,
    JOURNEY: <Journey/>,
    ETHICS: <Ethics/>,
}

export default function Icon(props){
    return (
        <span>
            {props.icon}
        </span>
    );
}