import React, { Component } from "react";
import API from "../utils/API";
import { Redirect, Link } from "react-router-dom";
import "./styles/landing.css";
const Cookies = require("js-cookie");

class Landing extends Component {
	state = {
		email: "",
		password: "",
		redirect: null
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.email && this.state.password) {
			API.getUser({
				email: this.state.email.toLowerCase(),
				password: this.state.password
			})
				.then(res => {
					Cookies.set("token", res.data.accessToken);
					this.props.assignUser(res.data);
					this.props.isAuthed(true);
					if (res.data.firstName) {
						this.setState({ redirect: "/dashboard" });
					} else {
						this.setState({ redirect: "/userRegister" });
					}
				})
				.catch(err => console.log(err));
		}
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
		}

		return (
			<main id="login-page">
				<div className="row">
					<div className="col-12 col-sm-8 col-md-5 col-lg-4 mx-auto">
						<div id="form-container" className="p-5 mx-2 mt-2 mt-sm-5">
							<div className="text-center text-white">
								<img src="/assets/images/icon.png" style={{ width: 45 }} alt="WODBook icon" />
								<h4 style={{ color: "#C0DEF4" }}>Sign in to WODBook</h4>
							</div>
							<form className="mt-5">
								<div className="form-group">
									<label htmlFor="email">Email Address</label>
									<input
										className="form-control"
										onChange={this.handleInputChange}
										value={this.state.email}
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
										onChange={this.handleInputChange}
										value={this.state.password}
										name="password"
										id="password"
										type="password"
										placeholder="●●●●●●●●●●●●"
									/>
								</div>
								<button type="submit" onClick={this.handleFormSubmit}>
									Sign in
								</button>
							</form>
							<p className="text-center mt-4 mx-n1">
								New to WODBook?
								<Link className="ml-1" to="/register">
									Create an Account
								</Link>
							</p>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default Landing;
