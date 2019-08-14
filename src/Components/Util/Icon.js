import React from "react";
import {ReactComponent as Facebook} from "../../Assets/Icons/facebook.svg";
import {ReactComponent as Instagram} from "../../Assets/Icons/instagram.svg";
import {ReactComponent as Philosophy} from "../../Assets/Icons/socrates.svg";
import {ReactComponent as Journey} from "../../Assets/Icons/map.svg";
import {ReactComponent as Ethics} from "../../Assets/Icons/ethics.svg";
import {ReactComponent as Gym} from "../../Assets/Icons/gym.svg";
import {ReactComponent as Cost} from "../../Assets/Icons/cost.svg";
import {ReactComponent as Wrestling} from "../../Assets/Icons/wrestling.svg";

export const ICON = {
    FACEBOOK: <Facebook />,
    INSTAGRAM: <Instagram />,
    PHILOSOPHY: <Philosophy />,
    JOURNEY: <Journey/>,
    ETHICS: <Ethics/>,
    GYM: <Gym/>,
    COST: <Cost/>,
    WRESTLING: <Wrestling />
};

export default function Icon(props){
    return (
        <span>
            {props.icon}
        </span>
    );
}