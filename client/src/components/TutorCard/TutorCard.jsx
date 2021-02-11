import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import SessionForm from "../../components/SessionForm/SessionForm";
const TutorCard = ({ name, education, subjects, experience, _id, email }) => {
    
  return (
    <div className="col s4">
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <span className="card-title">
                {name} - {education}
              </span>
            </div>
            <div className="card-content">
              <p>
                {subjects}
                {experience}
                {email}
              </p>
            </div>
            {/* <SessionForm></SessionForm> */}
            <div className="card-action">
              <Link to={`/tutors/${_id}`}></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div>
            <SessionForm
        //   handleFormSubmit={handleFormSubmit}
          buttonText="Create New Session"
        />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TutorCard.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  subjects: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default TutorCard;
