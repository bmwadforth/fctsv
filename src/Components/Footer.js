import React from "react";
import Icon from "./Util/Icon";
import IFacebook from "../Assets/Icons/facebook.png";
import IInstagram from "../Assets/Icons/instagram.png";

export default function Footer(props){
    return (
        <div className="footer">
            <footer>
                <div className="social-media">
                    <p>Social Media</p>
                    <Icon href="https://www.facebook.com/FightClubTownsville/" src={IFacebook} />
                    <Icon href="https://www.instagram.com/fightclubtownsville/" src={IInstagram} />
                </div>
            </footer>
        </div>
    )
}