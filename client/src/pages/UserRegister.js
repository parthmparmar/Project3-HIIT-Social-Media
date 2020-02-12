import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select"
import "./styles/landing.css";

const genderArray = ["Male", "Female"]
const feetArray = [3, 4, 5, 6, 7];
const inchesArray = [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

class UserRegister extends Component {
	state = {
    firstName: "",
    lastName: "",
    gender: "",
    birthday: "",
    box: "",
	feet: "",
	inches: "",
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
				firstName: this.state.firstName.toLowerCase(),
				lastName: this.state.lastName.toLowerCase(),
				birthday: this.state.birthday,
				gender: this.state.gender.toLowerCase(),
				box: this.state.box.toLowerCase(),
				height: (this.state.feet * 12) + this.state.inches,
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
			<main id="login-page">
				<div className="row">
					<div className="col-12 col-sm-10 col-md-6 col-lg-5 mx-auto">
						<div id="form-container" className="p-5 mx-2 mt-2 mt-sm-5">
							<h4 className="text-center">User Registration</h4>
							<form>
								<Input id="firstName" name="firstName" type="text" change={this.handleInputChange} state={this.state.firstName}>
									First Name
								</Input>
								<Input id="lastName" name="lastName" type="text" change={this.handleInputChange} state={this.state.lastName}>
									Last Name
								</Input>
								<Select
									id="gender-input"
									itemName="gender"
									optionArray = {genderArray}
									change = {this.handleInputChange}
                        		>
									Gender
								</Select>
								<Input id="birthday" name="birthday" type="date" change={this.handleInputChange} state={this.state.birthday}>
									Birthday
								</Input>
								<Input id="box" name="box" type="text" change={this.handleInputChange} state={this.state.box}>
									Box
								</Input>

								<Select
									id="feet-input"
									itemName="feet"
									optionArray = {feetArray}
									change = {this.handleInputChange}
                        		>
									Height - Feet
								</Select>
								<Select
									id="inches-input"
									itemName="inches"
									optionArray = {inchesArray}
									change = {this.handleInputChange}
                        		>
									Height - Inches
								</Select>
								<Input id="weight" name="weight" type="number" change={this.handleInputChange} state={this.state.weight} min="0" max="500"> 
									Weight lb (Optional)
								</Input>

								<button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</main>
		);
	}
}
export default UserRegister;
