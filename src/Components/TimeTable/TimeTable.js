import React, {useState} from "react";
import Row from "../Util/Row";
import Tile from "../Util/Tile";
import TimeTableItem from "./TimeTableItem";
import moment, { months } from "moment";

const m = moment();
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function buildCalendar(month, year){
    const currentDay = m.date();
    const currentMonth = m.month();
    const currentYear = m.year();

    //TODO: Load moment with month and year supplied (this way when a user clicks on prev/next month the calendar is built automatically)
    const mLoaded = moment(`${month}-${currentDay}-${year}`, "MM-DD-YYYY");
    const daysInMonth = mLoaded.daysInMonth();

    console.log(mLoaded.day())

    const calendarInstance = [];

    for(let i = 0; i <= daysInMonth; i++){
        //Push date object into calendarInstance so that react can map over calendar objects and populate timetable appropriately 
    }

    console.log(calendarInstance);

    return (
        <div className="timetable">
            <div className="timetable-heading">
                <h1>{moment().format(`MMMM - YYYY`, month, year)}</h1>
            </div>
            <div className="timetable-schedule">
                {}
            </div>
        </div>
    )

}

export default function TimeTable(props){
    const [date, setDate] = useState({month: m.month(), year: m.year()});
    return (
        <div className="time-table">
            <Row squeeze>
                <Tile title="Our Schedule">
                    {buildCalendar(date.month, date.year)}
                </Tile>
            </Row>
        </div>
    )
}