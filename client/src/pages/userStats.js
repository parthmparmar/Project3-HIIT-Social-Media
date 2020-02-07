import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import Input from "../components/Input";

class UserStats extends Component {
	state = {
        backsquat: "",
        cleanJerk: "",
        snatch: "",
        deadlift: "",
        overHeadPress: "",
        maxPullUps: "",
        fran: "",
        grace: "",
        hellen: "",
        fiveK: "",
        fourHundredMeter: "",
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
		if (this.state.firstName && this.state.lastName) {
			API.updateUser({
                // need to update this with only items that were changed
			})
				.then(res => {
          console.log(res.data);
          this.props.assignUser(res.data);
					this.setState({ redirect: "/dashboard" });
				})
				.catch(err => console.log(err));
		} else {
      console.log("First name and Last name are required");
    }
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
		}

		return (
			<div className="container rounded shadow p-4 mt-4 w-25">
				<h4>User Registration</h4>
				<form>
          <Input 
            id="firstName"
            name="firstName"
            type="text"
            change={this.handleInputChange}
			state={this.state.firstName}
			value={this.state.backsquat.backsquat}
          >
            Back Squat            
          </Input>
         
					<button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}
export default UserStats;
