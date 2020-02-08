import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar(props) {
	return (
		<nav className="navbar navbar-expand-lg">
			<Link to="/" className="navbar-bran">
				<img id="logo" src="/assets/images/logo.png" alt="logo" />
			</Link>
			<button
				id="togglerButton"
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarToggler"
				aria-controls="navbarToggler"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon">
					<i className="fas fa-bars"></i>
				</span>
			</button>
			{/* Navbar Links */}
			{/* mr-auto mr-4 mt-2 mt-lg-0 */}
			<div className="collapse navbar-collapse" id="navbarToggler">
				<ul className="navbar-nav ml-md-auto">
					{!props.isAuthed ? (
						<li className="nav-item">
							<Link to="/login" className="nav-link ">
								Log In
							</Link>
						</li>
					) : null}
					{!props.isAuthed ? (
						<li className="nav-item">
							<Link to="/register" className="nav-link btn btn-outline-light ml-0 ml-lg-4 mt-lg-1" id="signupButton">
								Sign Up
							</Link>
						</li>
					) : null}
					{props.isAuthed ? (
						<li className="nav-item" onClick={ ()=> props.logout()}>
							<Link to="/login" className="nav-link btn btn-outline-light ml-0 ml-lg-4 mt-lg-1" id="signupButton">
								Log out
							</Link>
						</li>
					) : null}
					{props.isAuthed ? (
						<li className="nav-item" >
							<Link to="/userStats" className="nav-link btn btn-outline-light ml-0 ml-lg-4 mt-lg-1" id="signupButton">
								User Stats
							</Link>
						</li>
					) : null}
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
