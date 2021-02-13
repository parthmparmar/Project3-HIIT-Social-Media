import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import "./styles/landing.css";
import { Alert } from "react-bootstrap";

class Register extends Component {
	state = {
		email: "",
		password: "",
		password2: "",
		errorMsg: "",
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
		if (this.state.password !== this.state.password2) {
			this.setState({errorMsg: "Password must be the same!, Try Again"})
			console.error("Password must be the same!, Try Again");
		} else {
			if (this.state.email && this.state.password) {
				API.saveUser({
					email: this.state.email.toLowerCase(),
					password: this.state.password
				})
					.then(res => {
						//console.log(res.data);
						this.setState({ redirect: "/login" });
					})
					.catch((err) => {
						this.setState({errorMsg: "Email Already exists, please try a different email"})
						console.error("Email Already exists, please try a different email")
						
					});
			}
		}
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
		}

		return (
			<main id="login-page">
				<div className="row">
					<div className="col-12 col-sm-8 col-md-7 col-lg-5 col-xl-4 mx-auto">
						{this.state.errorMsg ? <Alert variant="danger">{this.state.errorMsg}</Alert> : null}
						<div id="form-container" className="p-5 mx-2 mt-2 mt-sm-5">
							<h4 className="text-center">Join WODBook</h4>
							<form className="mt-4">
								<div className="form-group">
									<label htmlFor="email">Email Address*</label>
									<input
										className="form-control"
										onChange={this.handleInputChange}
										value={this.state.email}
										name="email"
										id="email"
										type="email"
										placeholder="e.g., email@address.com"
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="password">Password*</label>
									<input
										className="form-control"
										onChange={this.handleInputChange}
										value={this.state.password}
										name="password"
										id="password"
										type="password"
										placeholder="●●●●●●●●●●●●"
										required
									/>
								</div>

								<div className="form-group">
									<label htmlFor="password2">Confirm Password*</label>
									<input
										className="form-control"
										onChange={this.handleInputChange}
										value={this.state.password2}
										name="password2"
										id="password2"
										type="password"
										placeholder="●●●●●●●●●●●●"
										required
									/>
								</div>

								<button type="submit" onClick={this.handleFormSubmit}>
									Join
								</button>
							</form>
						</div>
					</div>
				</div>
			</main>
		);
	}
}
export default Register;
