import React from "react";
import Instructor from "./Instructor";
import Row from "../Util/Row";
import Tile from "../Util/Tile";
import EricPhoto from "../../Assets/Vectors/eric-zoom.jpg";

export default function InstructorList(props) {
    document.title = "Fight Club | Townsville - Instructors";

    return (
        <div className="instructor-list">
            <Row>
                <Tile>
                    <Instructor name="Eric Lemoine" image={EricPhoto}
                                bio="Eric is a 4th stripe purple belt under the guidance of Prof Daniel Lima.
                                Eric has over 20 yrs martial arts experience and is specialised in performance,
                                self-defence and competition training for adults and kids.
                                Eric has taught Military self-defence to the Australian Army including the Elite Special Forces SASR and gyms such as the prestigious SASR gym The Mill.
                                Eric started his BJJ journey with Australia’s first BJJ black belt Prof Paulo Guimaraes back in 2000, during this time Eric has deployed
                                on multiple overseas operations with the army.  Eric discharged from the army in 2013 and has pursued his dream of owning his own gym under the
                                Fight Club banner. Eric holds great value in what he has learnt from Prof Paulo Guimaraes and now Prof Daniel Lima and is passionate in passing his knowledge on to his students."
                                classes="Adults/Kids"/>
                </Tile>
            </Row>
        </div>
    );
}
