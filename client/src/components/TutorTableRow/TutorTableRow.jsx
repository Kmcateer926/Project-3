import React from "react";
import axios from "axios";
// import board from "../../components/ChalkBG/chalkBoard.jpg";
import "./TutorTableRow.css";
import PropTypes from "prop-types";
import Switch from "../../components/Switch/Switch";

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
	const editTutor = (id, approved) => {
		axios
			.put(`/api/tutors/${id}`, { approved: !approved })
			.then((response) => {
				console.log(response.data);
				getTutors();
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<>
			<tr id="data">
				<td>{name}</td>
				<td>{education}</td>
				<td>{subjects}</td>
				<td style={{textAlign:"center"}}>{experience}</td>
				<td style={{textAlign:"center"}}>
					<label class="checkbox" >
						<Switch
							isOn={approved}
							handleToggle={() => editTutor(_id, approved)}
						/>
					</label>
					{/* <button
          icon={approved}
         
        /> */}
				</td>

				<td style={{textAlign:"center"}}>
					<button
						className="fa fa-trash-alt" style={{fontSize:"24px", marginTop:"8px"}}
						onClick={() => {
							deleteTutor(_id);
						}}
					/>
				</td>
			</tr>
		</>
	);
};

TutorTableRow.propTypes = {
	_id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	imageURL: PropTypes.string.isRequired,
	education: PropTypes.string.isRequired,
	subjects: PropTypes.string.isRequired,
	approved: PropTypes.bool,
	experience: PropTypes.number.isRequired,
};

export default TutorTableRow;
