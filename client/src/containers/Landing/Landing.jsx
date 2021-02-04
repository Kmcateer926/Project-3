import React from "react";

const Landing = () => {
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
								You have <a href="/">2</a> sessions
							</h1>
							<div style={{ float: "right" }}>
								<p
									style={{
										fontFamily: "Special Elite, cursive",
									}}
								>
									You have a session with{" "}
									<a href="/">teacher</a> on 2/20/21 @ 4:00PM
									EST.{" "}
									<a
										class="fa"
										href="/"
										style={{ margin: "5px" }}
									>
										&#xf044;
									</a>
									<a
										class="fa "
										href="/"
										style={{ margin: "5px" }}
									>
										&#xf03a;
									</a>
									<a
										class="fa"
										href="/"
										style={{ margin: "5px" }}
									>
										&#xf1f8;
									</a>
								</p>
								<p
									style={{
										fontFamily: "Special Elite, cursive",
									}}
								>
									You have a session with{" "}
									<a href="/">teacher</a> on 2/22/21 @ 5:00PM
									EST.{" "}
									<a
										class="fa"
										href="/"
										style={{ margin: "5px" }}
									>
										&#xf044;
									</a>
									<a
										class="fa "
										href="/"
										style={{ margin: "5px" }}
									>
										&#xf03a;
									</a>
									<a
										class="fa"
										href="/"
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

export default Landing;
