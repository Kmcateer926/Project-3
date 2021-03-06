import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// cards for tutor data with deconstructed props
// session cards are to be viewable in future development with details/feedback about the session that took place
const SessionCard = ({ student, date, sessionLength, time, _id }) => {
  return (
    <div className="col s4">
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <span className="card-title">
                {student} - {date}
              </span>
            </div>
            <div className="card-content">
              <p>{sessionLength}{time}</p>
            </div>
            <div className="card-action">
              <Link to={`/sessions/${_id}`}>Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//prototypes for sessionCard
SessionCard.propTypes = {
  _id: PropTypes.string.isRequired,
  student: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  sessionLength: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default SessionCard;