import React, {useState} from "react";
import {CLIENT_ROUTES} from "../constants";

export default function Navigation(props){
    return (
        <div className="navigation">
            <nav className="page-links">
                <ol>
                    <li className="page-link"><a href={CLIENT_ROUTES.HOME}>Home</a></li>
                    <li className="page-link"><a href={CLIENT_ROUTES.CONTACT}>Contact</a></li>
                </ol>
            </nav>
        </div>
    );
}