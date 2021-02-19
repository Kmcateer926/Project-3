import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import axios from "axios";

const EditBookSession = ({ buttonText, handleFormSubmit }) => {
	const [student, setStudent] = useState("");
	const [sessionLength, setSessionLength] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [tutorImage, setTutorImage] = useState("");
	const [tutorName, setTutorName] = useState("");

	const { id } = useParams();

	const styles = {
		font: {
			fontFamily: "Special Elite, cursive",
		},
		heading: {
			//   paddingTop: 40,
		},
	};
	useEffect(() => {
		console.log(id);
		if (id) {
			axios
				.get(`/api/sessions/${id}`)
				.then((response) => {
					console.log(response.data);
					const {
						student,
						date,
						time,
						sessionLength,
						tutor,
					} = response.data;
					setStudent(student);
					setDate(date);
					setTime(time);
					setSessionLength(sessionLength);
					setTutorImage(tutor.imageURL);
					setTutorName(tutor.name);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [id]);

	return (
		<>
			<div style={{ height: "50px" }}></div>
			<div>
				<h1
					style={{
						fontFamily: "Special Elite, cursive",
						fontSize: "50px",
						textAlign: "center",
					}}
				>
					Edit Session
				</h1>
			</div>

			<div
				className="is-6 is-offset-3"
				style={{
					// marginBottom: "250px ",
					border: "1px solid",
					padding: "5px",
					width: "30%",
					display: "inline-block",
					flexDirection: "row",
					borderRadius: "15px",
				}}
			>
				<form className="column">
      <p><h1 style={{fontFamily: "Special Elite, cursive", fontSize:"24px"}}>{tutorName}</h1>
						{" "}
						<img src={tutorImage} alt={tutorName}></img>
					</p>
					<p>
						<strong
							style={{
								fontFamily: "Special Elite, cursive",
								color: "white",
								fontSize: "20px",
							}}
						>
							Student:{" "}
						</strong>

						<input
							className="input"
							type="text"
							id="tutor"
							style={{ fontFamily: "Special Elite, cursive" }}
							value={student}
							onChange={(e) => {
								setStudent(e.target.value);
							}}
						/>
					</p>

					<p>
						<strong
							style={{
								fontFamily: "Special Elite, cursive",
								color: "white",
								fontSize: "20px",
							}}
						>
							Date:{" "}
						</strong>{" "}
						<input
							className="input"
							type="date"
							id="date"
							style={{ fontFamily: "Special Elite, cursive" }}
							value={date}
							onChange={(e) => {
								setDate(e.target.value);
							}}
						/>
					</p>
					<div className="booking-dates">
						<p>
							<strong
								style={{
									fontFamily: "Special Elite, cursive",
									color: "white",
									fontSize: "20px",
								}}
							>
								Time:{" "}
								<div className="field">
									<div className="control">
										<div className="select">
											<select
												type="text"
												value={time}
												style={{
													fontFamily:
														"Special Elite, cursive",
												}}
												onChange={(e) => {
													setTime(e.target.value);
												}}
											>
												<option>Select a Time</option>
												<option>3:00 PM</option>
												<option>3:30 PM</option>
												<option>4:00 PM</option>
												<option>4:30 PM</option>
												<option>5:00 PM</option>
												<option>5:30 PM</option>
												<option>6:00 PM</option>
												<option>6:30 PM</option>
												<option>7:00 PM</option>
												<option>7:30 PM</option>
												<option>8:00 PM</option>
											</select>
										</div>
									</div>
								</div>
								Session Length:{" "}
								<div
									className="field"
									style={{
										paddingBottom: "25px",
										fontFamily: "Special Elite, cursive",
									}}
								>
									<div className="control">
										<div className="select">
											<select
												type="text"
												style={{
													fontFamily:
														"Special Elite, cursive",
												}}
												value={sessionLength}
												onChange={(e) => {
													setSessionLength(
														e.target.value
													);
												}}
											>
												<option>
													Select Session Length in
													Minutes
												</option>
												<option>30</option>
												<option>60</option>
												<option>90</option>
											</select>
										</div>
									</div>
								</div>
							</strong>
						</p>
						<button
							className="button  is-fullwidth is-light is-outlined"
							style={{
								borderRadius: "10px",
								color: "white",
								fontSize: "25px",
								fontWeight: "bold",
								fontFamily: "Special Elite, cursive",
							}}
							onClick={(e) => {
								handleFormSubmit(
									e,
									{
										student,
										date,
										time,
										sessionLength,
									},
									id
								);
							}}
						>
							<Link style={styles.link}>{buttonText}</Link>
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
export default EditBookSession;
