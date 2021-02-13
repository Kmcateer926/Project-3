import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";
import TutorTableRow from "../../components/TutorTableRow/TutorTableRow";

const Admin = () => {
	// 1. hard code the render
	// 2. move the values to this.state
	// 3. make the api call to return the data dynamically.
	// 3a. Import useEffect - when to go get the data.
	// 3b. Import axios
	// 3c. Inside useEffect, make an axios call.
	// 3d. set the response.data on state (setProducts) NEVER DIRECTLY MUTATE STATE

	const [tutors, setTutors] = useState([]);

	useEffect(() => {
		getTutors();
	}, []);

	const getTutors = () => {
		axios
			.get("/api/tutors")
			.then((response) => {
				console.log(response.data);
				setTutors(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<div className="column is-12">
				<h1 style={{textAlign:"center", fontSize:"40px", fontFamily:"Special Elite, cursive"}}>Admin View</h1>
			</div>
			<div style={{ height: "50px" }}></div>
<div className="container">
			<table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
				<thead>
					<tr>
						<th>Name</th>
						<th>Education</th>
						<th>Subjects</th>
						<th>Experience(Yrs)</th>
						<th>Approved</th>
						<th>Delete</th>
					</tr>
				</thead>

				<tbody>
					{tutors.map((tutor) => (
						<TutorTableRow
							key={tutor._id}
							{...tutor}
							getTutors={getTutors}
						/>
					))}
				</tbody>
			</table>
      </div>
		</>
	);
};

export default Admin;
