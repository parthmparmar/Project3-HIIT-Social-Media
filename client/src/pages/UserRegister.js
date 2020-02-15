import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select"
import "./styles/landing.css";
import { compareSync } from "bcryptjs";
import { Alert } from "react-bootstrap";

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
	firstNameError: false,
	lastNameError: false,
	birthdayError: false,
	weightError: false,
	formError: true,
	errorMsg: "",
	redirect: null
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};


	formValidation = () => {
		let firstNameError = true;
		let lastNameError = true;
		let birthdayError = true;
		let weightError = true;
		let errorMsg = "";
			// check first name
			if(this.state.firstName == ""){
				console.log("first name true")
				firstNameError = true;
				// this.setState({firstNameError : true});
			}
			else {
				firstNameError = false;
				// this.setState({firstNameError : false});
			};

			// check last name
			if(this.state.lastName == ""){
				console.log("last name true")
				lastNameError = true;
				// this.setState({lastNameError : true});
			}
			else {
				lastNameError = false;
				// this.setState({lastNameError : false});
			};

			if((Date.parse(this.state.birthday) < Date.parse("1/1/1920")) || (Date.parse(this.state.birthday) > new Date())) {
				birthdayError = true;
				errorMsg =  "Birthday Must be between 1/1/1920 and Today or you can leave it empty";
			}
			else {
				errorMsg =  "";
				birthdayError = false;
			};
			
			if(!this.state.weight){
				weightError = false;
			}
			else if (parseInt(this.state.weight) != "number" && parseInt(this.state.weight) < 0) {
				weightError = true;
				errorMsg = "Weight must be a positive number or you can leave it empty";
			}
			else {
				weightError = false;
				errorMsg = "";
			};

			if(firstNameError == false && lastNameError == false && birthdayError == false && weightError == false){

				this.setState({
						formError : false,
						firstNameError: firstNameError,
						lastNameError: lastNameError,
						birthdayError: birthdayError,
						weightError: weightError,
						errorMsg: errorMsg
					});
					return (false)
			}
			else{
				this.setState({
					formError : true,
					firstNameError: firstNameError,
					lastNameError: lastNameError,
					birthdayError: birthdayError,
					weightError: weightError,
					errorMsg: errorMsg
				});
				return (true)
			};
			
			
	}

	handleFormSubmit = event => {
		event.preventDefault();
		if (!this.formValidation()) {
			console.log("it will do API")
			API.updateUser({
        		userId: this.props.userData._id,
				firstName: this.state.firstName.toLowerCase(),
				lastName: this.state.lastName.toLowerCase(),
				birthday: this.state.birthday,
				gender: this.state.gender.toLowerCase(),
				box: this.state.box.toLowerCase(),
				height: parseInt(this.state.feet * 12) + parseInt(this.state.inches),
				weight: this.state.weight
			})
				.then(res => {
          console.log(res.data);
          this.props.assignUser(res.data);
					this.setState({ redirect: "/dashboard" });
				})
				.catch(err => console.log(err));
		} else {
      console.log("Error on the Form");
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
					{this.state.errorMsg ? <Alert variant="danger">{this.state.errorMsg}</Alert> : null}
						<div id="form-container" className="p-5 mx-2 mt-2 mt-sm-5">
							<h4 className="text-center">User Registration</h4>
							<form>
								<Input error= {this.state.firstNameError} id="firstName" name="firstName" type="text" change={this.handleInputChange} state={this.state.firstName}>
									First Name
								</Input>
								<Input error={this.state.lastNameError} id="lastName" name="lastName" type="text" change={this.handleInputChange} state={this.state.lastName}>
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
								<Input error= {this.state.birthdayError} id="birthday" name="birthday" type="date" change={this.handleInputChange} state={this.state.birthday}>
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
								<Input error={this.state.weightError} id="weight" name="weight" type="number" change={this.handleInputChange} state={this.state.weight} min="0" max="500"> 
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
