import React, { useState, useEffect } from "react";
import axios from "axios";
import SessionRow from "../../components/SessionRow/SessionRow";

const Landing = () => {
	const [sessions, setSessions] = useState([]);

	const getSessions = () => {
		axios.get("/api/sessions").then((response) => {
			setSessions(response.data);
		});
	};

	useEffect(() => {
		getSessions();
	},[]);

	return (
		<div>
            {sessions.map((session) => (
                <SessionRow {...session} getSessions={getSessions}/>
            ))}
			
		</div>
	);
};

export default Landing;
