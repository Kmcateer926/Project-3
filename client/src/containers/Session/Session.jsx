import React from "react";

const Session = () => {
	return (
		<div>
			<div className="spacer" style={{ height: "70px" }}></div>
			<div className="container">
				<div className="columns">
					<div
						className="column is-8 is-offset-2 is-centered"
						style={{
							border: "1px solid",
							height: "450px",
							borderRadius: "15px",
						}}
					>
						<h1
							style={{
								fontSize: "40px",
								fontFamily: "Special Elite, cursive",
								textAlign: "center",
							}}
						>
							Tutor Session
						</h1>
						<div
							className="spacer"
							style={{ height: "25px" }}
						></div>
						<div
							style={{
								fontSize: "25px",
								fontFamily: "Special Elite, cursive",
								textAlign: "left",
							}}
						>
							<p>
								<strong>
									<img
										src="https://res.cloudinary.com/fsgeoff/image/upload/v1612272864/business-headshots-professional-13_zj1mum.jpg"
										alt="head-shot"
										style={{
											height: "125px",
											width: "125px",
										}}
									></img>{" "}
								</strong>
							</p>
							<p>
								<strong>Tutor: </strong>
							</p>
							<p>
								<strong>Session Length: </strong>
							</p>
							<p>
								<strong>Date: </strong>
							</p>
							<p>
								<strong>Time: </strong>
							</p>

							<p style={{ textAlign: "center" }}>
								{" "}
								<a href="/">edit</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Session;
