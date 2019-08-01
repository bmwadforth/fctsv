import React from "react";
import Instructor from "./Instructor";
import Row from "../Util/Row";
import Tile from "../Util/Tile";

export default function InstructorList(props) {
  return (
    <div className="instructor-list wrap">
      <h1>Meet our Instructors</h1>
      <Row>
        {[{firstName: "Eric", lastName: "Lemoine"}, {firstName: "Eamon", lastName: "LastName"}].map(instructor => {
          return (
            <Tile title={`${instructor.firstName} ${instructor.lastName}`}>
              {" "}
              <Instructor bio="" image={""} />{" "}
            </Tile>
          );
        })}
      </Row>
    </div>
  );
}
