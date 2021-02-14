import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import TutorForm from "../../components/TutorForm/TutorForm";
// import AlertContext from "../../utils/alertContext";

const NewTutor = () => {
	//   const alert = useContext(AlertContext);
	const history = useHistory();

	const handleFormSubmit = (e, tutorData) => {
		e.preventDefault();
		axios
			.post("/api/tutors", tutorData)
			.then((response) => {
				console.log(response.data);
				history.push("/admin");
			})
			.catch((err) => {
				console.log(err);
				// alert.setAlert({
				// 	message: "Failed to create new tutor.",
				// 	type: "danger",
				// });
			});
	};

	return (
		<>
			<div className="container">
				<TutorForm
					handleFormSubmit={handleFormSubmit}
					buttonText="Create New Tutor"
				/>
			</div>
		</>
	);
};

export default NewTutor;
