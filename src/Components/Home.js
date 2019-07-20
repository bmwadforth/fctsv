import React from "react";
import InformationTile from "./InformationTile";

export default function Home(props) {
    return (
        <div className="home">
            <h1>Fight Club - Townsville</h1>
            <sub>Brazilian Jiu-Jitsu</sub>

            {/*Join Us Button That Takes User To Register Page*/}

            <InformationTile title="Our Philosophy" content="WHAT BJJ MEANS TO US."/>
            <InformationTile title="The Journey" content="FROM WHITE TO BLACK."/>
            <InformationTile title="The History" content="FROM THE BEGINNING TO THE END."/>
        </div>
    );
}