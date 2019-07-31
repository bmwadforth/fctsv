import React from "react";
import Instructor from "./Instructor";

export default function InstructorList(props){
    return (
        <div className="instructor-list">
            <h1>Meet Our Instructors</h1>
            {[].map(instructor => {
                return  <Instructor firstName="" lastName="" bio="" image={""} />
            })}
        </div>
    )
}