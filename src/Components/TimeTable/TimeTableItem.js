import React from "react";
import PropTypes from "prop-types";

export default function TimeTableItem({schedule}){
    return (
        <div className="time-table-item">
            <div className="time-table schedule">
                {schedule.map((s, idx) =>  {
                    return <p className={`time-table-demographic-${s.demographic}`}>{s.time} - {s.class}</p>
                })}
            </div>
        </div>
    )

}

TimeTableItem.propTypes = {
    schedule: PropTypes.arrayOf(PropTypes.shape({
        demographic: PropTypes.string.isRequired, 
        class: PropTypes.string.isRequired, 
        time: PropTypes.string.isRequired})).isRequired
};