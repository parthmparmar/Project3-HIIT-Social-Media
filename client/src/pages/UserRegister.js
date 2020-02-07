import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import Input from "../components/Input";

class UserRegister extends Component {
	state = {
    firstName: "",
    lastName: "",
    gender: "",
    birthday: "",
    box: "",
    height: "",
    weight: "",
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
        userId: this.props.userData._id,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				birthday: this.state.birthday,
				gender: this.state.gender,
        box: this.state.box,
        height: this.state.height,
        weight: this.state.weight
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
          >
            First Name              
          </Input>
          <Input 
            id="lastName"
            name="lastName"
            type="text"
            change={this.handleInputChange}
            state={this.state.lastName}
          >
            Last Name              
          </Input>
          <Input 
            id="gender"
            name="gender"
            type="text"
            change={this.handleInputChange}
            state={this.state.gender}
          >
            Gender
          </Input>
          <Input 
            id="birthday"
            name="birthday"
            type="date"
            change={this.handleInputChange}
            state={this.state.birthday}
          >
            Birthday
          </Input>
          <Input 
            id="box"
            name="box"
            type="text"
            change={this.handleInputChange}
            state={this.state.box}
          >
            Box
          </Input>
          <Input 
            id="height"
            name="height"
            type="number"
            change={this.handleInputChange}
            state={this.state.height}
          >
            Height
          </Input>
          <Input 
            id="weight"
            name="weight"
            type="number"
            change={this.handleInputChange}
            state={this.state.weight}
          >
            Weight lb
          </Input>

					<button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}
export default UserRegister;
