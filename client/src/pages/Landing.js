import React, { useState, useContext, useEffect } from "react";
import API from "../utils/API";
import { Redirect, Link } from "react-router-dom";
import "./styles/landing.css";
import { UserContext } from "../App";
import UserStats from "../components/StatsCard";
import { Alert } from "react-bootstrap";
const Cookies = require("js-cookie");

function Landing() {
	// Get Data from Context API
	const { userInfo, userAuth } = useContext(UserContext); // eslint-disable-next-line
	const [userData, setUserData] = userInfo; // eslint-disable-next-line
	const [isAuthenticated, setIsAuthenticated] = userAuth;
	// Create State
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [redirect, setRedirect] = useState(null);

	// Handle Submit Form
	const handleFormSubmit = event => {
		event.preventDefault();
		if (email && password) {
			API.getUser({
				email: email,
				password: password
			})
				.then(res => {
					Cookies.set("token", res.data.accessToken);
					setUserData(res.data);
					setIsAuthenticated(true);

					if (res.data.firstName) {
						setRedirect("/dashboard");
					} else {
						setRedirect("/userRegister");
					}
				})
				.catch((err) => {
					console.log(err);
					setErrorMsg("Incorrect Username or Password, please try again");
				});
		}
	};

	useEffect(()=>{
		if (isAuthenticated && userData.firstName) {
			setRedirect(Cookies.get("location") || "/dashboard");
		}
	});

	// If user is authenticated redirect to dashboard
	if (redirect) {
		return <Redirect to={redirect} />;
	}

	return (
		<main id="landing-page">
			<div className="row">
				<div className="col-12 col-lg-6 col-xl-7">
					<div className="jumbotron bg-transparent">
						<div className="container text-left mt-3 mt-md-1 ml-md-5">
							<h1 className="tittle">Build for Crossfitters</h1>
							<p className="lead">
								“There is no single sport or activity that trains for perfect fitness. True fitness requires a compromise in adaptation broader than
								the demands of most every sport.” – Greg Glassman – founder of CrossFit, Inc.
							</p>
						</div>
					</div>
					<div id="crossfitters-image" className="container">
						<img src="/assets/images/crossfitters.png" className="img-fluid" alt="Crossfitters" />
					</div>
				</div>

				<div className="col-lg-6 col-xl-5 px-5 d-none d-lg-block">
					<div id="form-container" className="p-5 m-5">
					{errorMsg ? <Alert variant="danger">{errorMsg}</Alert> : null}
						<div className="text-center text-white">
							<img src="/assets/images/icon.png" style={{ width: 45 }} alt="WODBook icon" />
							<h4 style={{ color: "#C0DEF4" }}>Sign in to WODBook</h4>
						</div>
						<form className="mt-5">
							<div className="form-group">
								<label htmlFor="email">Email Address</label>
								<input
									className="form-control"
									onChange={e => setEmail(e.target.value)}
									value={email}
									name="email"
									id="email"
									type="email"
									placeholder="e.g., email@address.com"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="password">Password</label>
								<input
									className="form-control"
									onChange={e => setPassword(e.target.value)}
									value={password}
									name="password"
									id="password"
									type="password"
									placeholder="●●●●●●●●●●●●"
								/>
							</div>
							<button type="submit" onClick={handleFormSubmit}>
								Sign in
							</button>
						</form>
						<p className="text-center m-4">
							New to WODBook?
							<Link className="pl-2" to="/register">
								Create an Account
							</Link>
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Landing;
