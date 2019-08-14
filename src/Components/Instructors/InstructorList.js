import React from "react";
import Instructor from "./Instructor";
import Row from "../Util/Row";
import Tile from "../Util/Tile";
import EricPhoto from "../../Assets/Vectors/eric-zoom.jpg";

export default function InstructorList(props) {
    return (
        <div className="instructor-list">
            <Row>
                <Tile>
                    <Instructor name="Eric Lemoine" image={EricPhoto}
                                bio="LOREM IPSUM LOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUM" classes="Adults/Kids"/>
                </Tile>

                <Tile>
                    <Instructor name="Eamon Mcneil" image={EricPhoto}
                                bio="LOREM IPSUM LOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUM" classes="Kids"/>
                </Tile>
            </Row>
        </div>
    );
}
