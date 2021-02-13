import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TutorTableRow = ({
	_id,
	name,
	education,
	subjects,
	experience,
	approved,

	getTutors,
}) => {
	const deleteTutor = (id) => {
		axios
			.delete(`/api/tutors/${id}`)
			.then(() => {
				getTutors();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<tr>
			<td>{name}</td>

			<td>{education}</td>
			<td>{subjects}</td>

			<td>{experience}</td>

			<td>
				<button className="fa fa-edit">
					<Link to={`/admin/${_id}`}></Link>
				</button>
			</td>

			<td>
				<button
					className="fa fa-trash"
					onClick={() => {
						deleteTutor(_id);
					}}
				/>
			</td>
		</tr>
	);
};

TutorTableRow.propTypes = {
	_id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	imageURL: PropTypes.string.isRequired,
	education: PropTypes.string.isRequired,
	subjects: PropTypes.string.isRequired,
	experience: PropTypes.number.isRequired,
};

export default TutorTableRow;
