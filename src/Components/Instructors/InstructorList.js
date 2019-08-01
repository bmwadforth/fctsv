import React from "react";
import Instructor from "./Instructor";
import Row from "../Util/Row";
import Tile from "../Util/Tile";

export default function InstructorList(props) {
  return (
    <div className="instructor-list">
      <h1>Meet our Instructors</h1>
      <Row>
        {[].map(instructor => {
          return (
            <Tile title={`${instructor.firstName} {instructor.lastName}`}>
              {" "}
              <Instructor bio="" image={""} />{" "}
            </Tile>
          );
        })}
      </Row>
    </div>
  );
}
