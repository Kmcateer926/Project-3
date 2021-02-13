import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import board from "../ChalkBG/chalkBoard.jpg";
import SessionForm from "../../components/SessionForm/SessionForm";

const TutorCard = ({
	name,
	imageURL,
	education,
	subjects,
	_id,
	experience,
	email,
}) => {
	const history = useHistory();

	const handleFormSubmit = (event, formData) => {
		event.preventDefault();
		axios.post("/api/sessions", formData).then((response) => {
			console.log(response);
			history.push("/landing");
		});
	};

	return (
		<>
			<div
				className=" card column is-3"
				style={{
					margin: "20px",
					border: "solid 2px white",
					float: "left",
					borderRadius: "15px",
					padding: "10px",
					flexDirection: "row",
					display: "inline-block",
					fontFamily: "Special Elite, cursive",
					backgroundImage: `url(${board})`,
					color: "white",
				}}
			>
				<h1
					class="title"
					style={{ color: "white", textAlign: "center" }}
				>
					{name}
				</h1>
				<p>
					<img src={imageURL} alt={name} />
				</p>

				<div style={{ fontSize: "18px" }}>
					<p style={{ color: "white" }}>
						<strong style={{ color: "white" }}>Education: </strong>
						{education}
					</p>
					<p>
						<strong style={{ color: "white" }}>Subjects(s):</strong>{" "}
						{subjects}
					</p>
					<p>
						<strong style={{ color: "white" }}>
							Experience(Yrs):{" "}
						</strong>
						{experience}
					</p>
				</div>
				<hr />
				<SessionForm
					handleFormSubmit={handleFormSubmit}
					buttonText="Book Session"
				></SessionForm>
			</div>

			<div className="card-action">
				<Link to={`/tutors/${_id}`}></Link>
			</div>
			{/* </div> */}
		</>
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
