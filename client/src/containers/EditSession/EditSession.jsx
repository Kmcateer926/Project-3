import React from "react";
import axios from "axios";
import EditSessionForm from "../../components/EditSessionForm/EditSessionForm";
import ChalkBG from "../../components/ChalkBG/ChalkBG";

const EditSession = () => {
	const handleFormSubmit = (e, sessionData) => {
		e.preventDefault();
		axios
			.put("/api/sessions", sessionData)
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			{/* <div className="container"> */}
				<div className="column">
					<div className="is-10" style={{ height: "50px" }}></div>
					<h1 className="center-align">Edit Session</h1>
				</div>

				<div className="column">
					<EditSessionForm handleFormSubmit={handleFormSubmit} />
				</div>
			{/* </div> */}
		</>
	);
};

export default EditSession;
