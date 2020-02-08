import React, { Component } from "react";
import API from "../utils/API";
import { Redirect, Link } from "react-router-dom";
import "./styles/landing.css";

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
				email: this.state.email,
				password: this.state.password
			})
				.then(res => {
					this.props.isAuthed();
					this.props.assignUser(res.data);
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
			<main id="landing-page">
				<div className="row">
					<div className="col-12 col-lg-6 col-xl-7">
						<div clasName="jumbotron bg-transparent">
							<div className="container text-left mt-3 mt-md-5 ml-md-5">
								<h1 className="tittle">Build for Crossfitters</h1>
								<p className="lead">
									“There is no single sport or activity that trains for perfect fitness. True fitness requires a compromise in adaptation broader than
									the demands of most every sport.” – Greg Glassman – founder of CrossFit, Inc.
								</p>
							</div>
						</div>
						<div id="crossfitters-image" className="container mt-0">
							<img src="/assets/images/crossfitters.png" className="img-fluid" />
						</div>
					</div>

					<div className="col-lg-6 col-xl-5 px-5 d-none d-lg-block">
						<div id="form-container" className="p-5 m-5">
							<div className="text-center text-white">
								<img src="/assets/images/icon.png" style={{ width: 45 }} />
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
}

export default Landing;
