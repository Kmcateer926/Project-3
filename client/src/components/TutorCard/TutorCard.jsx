import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import SessionForm from "../../components/SessionForm/SessionForm";
const TutorCard = ({ name, education, subjects, _id, experience, email }) => {
	return (
		<div className="container">
			<div className="columns">
				<div className="column is-3">
					<div className="card" style={{display:"inline-block", position:"absolute"}}>
						<header class="card-header">
							<p class="card-header-title">{name}</p>
						</header>
						<div className="card-content">
							<div className="content">
								<p>
									<strong>Education: {education}</strong>
								</p>
								<p>
									<strong>Subjects(s): {subjects}</strong>
								</p>
								<p>
									<strong>
										Experience(Yrs): {experience}
									</strong>
								</p>
							</div>

							<footer class="card-footer">
								<a href="/" className="card-footer-item">
									Book Session
								</a>
							</footer>

							
							{/* <SessionForm></SessionForm> */}
							<div className="card-action">
								<Link to={`/tutors/${_id}`}></Link>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="row">
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
				</div> */}
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
