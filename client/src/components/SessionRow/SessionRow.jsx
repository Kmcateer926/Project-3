import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

const SessionRow = ({ _id, tutor, date, sessionLength, time }) => {
	const deleteSession = (id) => {
		console.log(id, "test");
		axios
			.delete(`/api/sessions/${id}`)
			.then(() => {
                // getSessions();
                console.log("getSessions");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<div className="spacer" style={{ height: "75px" }}></div>
			<div className="columns">
				<div
					className="column is-10 is-offset-1"
					style={{
						border: "1px solid",
						height: "400px",
						borderRadius: "15px",
						boxShadow: "5px 2px 2px grey",
					}}
				>
					<h1
						style={{
							fontSize: "40px",
							fontFamily: "Special Elite, cursive",
						}}
					>
						Welcome to Your Teacher Hub <u>Parent</u> Account!
					</h1>
					<div className="spacer" style={{ height: "30px" }}></div>
					<div className="columns">
						<div
							className="column is-10 is-offset-1"
							style={{
								height: "200px",
								border: "1px solid",
								borderRadius: "15px",
							}}
						>
							<h1
								style={{
									fontSize: "35px",
									fontFamily: "Special Elite, cursive",
								}}
							>
								Tutor Sessions
							</h1>
							<div style={{ float: "right" }}>
								
								<p
									style={{
										fontFamily: "Special Elite, cursive",
									}}
								>
									You have a session with {tutor} on {date} at{" "}
									{time} for {sessionLength}.
									<Link to={`/landing/${_id}`}
										class="fa"
										// href="/admin/:id"
										// style={{ margin: "5px" }}
									>
										&#xf044;
									</Link>
									
									<a
										class="fa "
										href="/"
										style={{ margin: "5px" }}
									>
										&#xf03a;
									</a>
									<a
										class="fa"
										
										onClick={() => {
											deleteSession(_id);
										}}
										style={{ margin: "5px" }}
									>
										&#xf1f8;
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

SessionRow.propTypes = {
	_id: PropTypes.string.isRequired,
	tutor: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	sessionLength: PropTypes.number.isRequired,
	date: PropTypes.string.isRequired,
};

export default SessionRow;
