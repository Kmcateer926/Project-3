import React from "react";
import { Link, NavLink } from "react-router-dom";


const styles = {
	navbar: {
		fontFamily: "Special Elite, cursive",
		background: " #94b8b8",
	},

	title: {
		color: "#FFFFFF",
		fontFamily: "Special Elite, cursive",
		marginTop: 20,
		paddingRight: 35,
	},
};

const NavbarSession = () => {

	return (
		<>
			<div>
				<nav
					className="navbar is-mobile"
					role="navigation"
					aria-label="main navigation"
					style={styles.navbar}
				>
					<div className="navbar-brand">
						<a
							role="button"
							className="navbar-burger"
							aria-label="menu"
							aria-expanded="false"
							data-target="navbarBasicExample"
							href="/"
						>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a>
					</div>

					<div id="navbarBasicExample" className="navbar-menu">
						<div className="navbar-start">
							{/* <a className="navbar-item">Home</a> */}
							<Link
								to="Home"
								className="navbar-item title is-1"
								style={styles.title}
							>
								Tutor Hub
							</Link>
						</div>

						<div className="navbar-end">
							{/* <a className="navbar-item">Documentation</a> */}
							<NavLink
								to="/directory"
								className="navbar-item title is-3"
								activeClassName="active"
							>
								<button
									class="button is-link is-rounded is-large"
									
									style={styles.title}
								>
									Tutors
								</button>
							</NavLink>
							<NavLink
								to="/directory"
								className="navbar-item title is-3"
								activeClassName="active"
								style={styles.title}
							>
								Directory
							</NavLink>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default NavbarSession;
