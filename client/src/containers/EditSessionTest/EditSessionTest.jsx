import React, { useState, useEffect } from "react";
import axios from "axios";
import board from "../../components/ChalkBG/chalkBoard.jpg";
import { useHistory } from "react-router-dom";
import EditBookSession from "../../components/EditBookSession/EditBookSession";


const EditSessionTest = () => {
	const history = useHistory();



	const handleFormSubmit = (e, sessionData, id) => {
		console.log(sessionData);
		console.log("click");
		e.preventDefault();
		axios
			.put(`/api/sessions/${id}`, sessionData)
			.then((response) => {
				console.log(response.data);
				// setSession(response.data);
				history.push("/landing");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const styles = {
		edit: {
			backgroundImage: `url(${board})`,			
			color: "white",
			textAlign: "center",
		},
	};


	return (
		<>
			<div style={styles.edit}>
				<EditBookSession
					handleFormSubmit={handleFormSubmit}
					buttonText="Update"
				/>
			</div>
			<div style={{height:"100px", backgroundImage: `url(${board})`}}></div>
		</>
	);
};

export default EditSessionTest;
