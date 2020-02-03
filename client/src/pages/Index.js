import React, { Component } from "react";
import API from "../utils/API";

class index extends Component {
	state = {
		email: "",
		password: ""
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
			API.saveUser({
				email: this.state.email,
				password: this.state.password
			})
				.then(res => console.log(res.data))
				.catch(err => console.log(err));
		}
	};

	render() {
		return (
			<div className="container rounded shadow p-4 mt-4 w-25">
				<h4>Register</h4>
				<form>
					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input id="email" type="email" className="form-control" value={this.state.email} onChange={this.handleInputChange} name="email" />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input id="password" type="password" className="form-control" value={this.state.password} onChange={this.handleInputChange} name="password" />
					</div>
					<button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default index;
