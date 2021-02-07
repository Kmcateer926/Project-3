import React, { useState, useEffect } from "react";
import axios from "axios";
import SessionRow from "../../components/SessionRow/SessionRow";
import BookSession from "../../components/BookSession/BookSession"

const Landing = () => {
	const [sessions, setSessions] = useState([]);


	useEffect(() => {
		getSessions();
	},[]);

	const getSessions = () => {
		axios.get("/api/sessions").then((response) => {
			console.log(response.data);
			setSessions(response.data);
		
		}).catch((err) => {
			console.log(err);
		})
	};

	return (
		<div>
            {sessions.map((session) => (
                <SessionRow {...session} getSessions={getSessions}/>
            ))}
		{/* <BookSession {...teachers}/> */}
		</div>
	);
};

export default Landing;
