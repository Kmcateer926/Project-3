// import React, { useContext } from "react";

import board from "../../components/ChalkBG/chalkBoard.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";

import TutorCard from "../../components/TutorCard/TutorCard";


const Tutors = () => {
	// const [tutors, setTutors] = useState([]);
const [approvedTutors, setApprovedTutors] = useState([]);
	useEffect(() => {
		axios
			.get("/api/tutors/approved")
			.then((response) => {
				setApprovedTutors(response.data);
				console.log(approvedTutors);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	

	return (
		 <>
		 <body style={{backgroundImage:`url(${board})`}}>
			<div style={{ height: "70px" }}></div>
			<div className="container">
				
				<div className="column">
					<h1
						style={{
							textAlign: "center",
							fontFamily: "Special Elite, cursive",
							fontSize: "50px",
							color:"white"
						}}
					>
						Tutor Directory
					</h1>
				</div>
				<div style={{ height: "70px" }}></div>
				<div
					className="columns"
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{approvedTutors.map((tutor) => (
						<TutorCard {...tutor} key={tutor._id} />
					))}
				</div>
			</div>
			</body>
		</>
	);
};

export default Tutors;


