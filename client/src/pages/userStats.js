import React, { Component } from "react";
import API from "../utils/API";
import { Redirect, withRouter } from "react-router-dom";
import StatUpdateBlock from "../components/statUpdateBlock";
import TimeUpdateBlock from "../components/TimeUpdateBlock";
import "./styles/landing.css";

function deconstruct (fran, type) {
	var minutes = Math.floor(fran/60);
	var seconds = fran % 60;
	if (type === "m")
	return minutes;
	else if (type === "s")
	return seconds
}

class UserStats extends Component {
	state = {
		weight: "",
		weightCurrent: this.props.userData.weight.weight,
		weightEdit: this.props.userData.weight.weight ? false : true,
		backSquat: "",
		backSquatCurrent: this.props.userData.backSquat.backSquat,
		backSquatEdit: this.props.userData.backSquat.backSquat ? false : true,
		cleanJerk: "",
		cleanJerkCurrent: this.props.userData.cleanJerk.cleanJerk,
		cleanJerkEdit: this.props.userData.cleanJerk.cleanJerk ? false : true,
		snatch: "",
		snatchCurrent: this.props.userData.snatch.snatch,
		snatchEdit: this.props.userData.snatch.snatch ? false : true,
		deadlift: "",
		deadliftCurrent: this.props.userData.deadlift.deadlift,
		deadliftEdit: this.props.userData.deadlift.deadlift ? false : true,
		overHeadPress: "",
		overHeadPressCurrent: this.props.userData.overHeadPress.overHeadPress,
		overHeadPressEdit: this.props.userData.overHeadPress.overHeadPress ? false : true,
		maxPullUps: "",
		maxPullUpsCurrent: this.props.userData.maxPullUps.maxPullUps,
		maxPullUpsEdit: this.props.userData.maxPullUps.maxPullUps ? false : true,
		fran: "",
		franMinutes: "",
		franSeconds: "",
		franCurrentMinutes: deconstruct(this.props.userData.fran.fran, "m"),
		franCurrentSeconds: deconstruct(this.props.userData.fran.fran, "s"),
		franMinutesEdit: this.props.userData.fran.fran ? false : true,
		franSecondsEdit: this.props.userData.fran.fran ? false : true,
		grace: "",
		graceMinutes: "",
		graceSeconds: "",
		graceCurrentMinutes: deconstruct(this.props.userData.grace.grace, "m"),
		graceCurrentSeconds: deconstruct(this.props.userData.grace.grace, "s"),
		graceMinutesEdit: this.props.userData.grace.grace ? false : true,
		graceSecondsEdit: this.props.userData.grace.grace ? false : true,
		hellen: "",
		hellenMinutes: "",
		hellenSeconds: "",
		hellenCurrentMinutes: deconstruct(this.props.userData.hellen.hellen, "m"),
		hellenCurrentSeconds: deconstruct(this.props.userData.hellen.hellen, "s"),
		hellenMinutesEdit: this.props.userData.hellen.hellen ? false : true,
		hellenSecondsEdit: this.props.userData.hellen.hellen ? false : true,
		fiveK: "",
		fiveKMinutes: "",
		fiveKSeconds: "",
		fiveKCurrentSeconds: deconstruct(this.props.userData.fiveK.fiveK, "m"),
		fiveKCurrentMinutes: deconstruct(this.props.userData.fiveK.fiveK, "s"),
		fiveKMinutesEdit: this.props.userData.fiveK.fiveK ? false : true,
		fiveKSecondsEdit: this.props.userData.fiveK.fiveK ? false : true,
		fourHundredMeterMinutes: "",
		fourHundredMeterSeconds: "",
		fourHundredMeter: "",
		fourHundredMeterCurrentMinutes: deconstruct(this.props.userData.fourHundredMeter.fourHundredMeter, "m"),
		fourHundredMeterCurrentSeconds: deconstruct(this.props.userData.fourHundredMeter.fourHundredMeter, "s"),
		fourHundredMeterMinutesEdit: this.props.userData.fourHundredMeter.fourHundredMeter ? false : true,
		fourHundredMeterSecondsEdit: this.props.userData.fourHundredMeter.fourHundredMeter ? false : true,
		redirect: null
	};

	handleInputChange = event => {
    let { name, value } = event.target;
	
	/* Validate Input Stats: only numbers allowed */
	value = value.replace(/[^\d]/, "");

	if (parseInt(value) !== 0) {
		this.setState({
		[name]: value,
		});
  	}
  };

	handleCancel = event => {
		event.preventDefault();
		this.props.history.push('/dashboard');
	};

	editMode = field => {
		let fieldEdit = field+"Edit";
		this.setState({
			[fieldEdit]: true
		})
	}

	handleFormSubmit = event => {
		event.preventDefault();
		let dataArray = [
		{weight: this.state.weight},
		{backSquat: this.state.backSquat},
		{cleanJerk: this.state.cleanJerk},
		{snatch: this.state.snatch},
		{deadlift: this.state.deadlift},
		{overHeadPress: this.state.overHeadPress},
		{maxPullUps: this.state.maxPullUps},
		{fran: this.state.franMinutes ? parseInt(this.state.franMinutes * 60) + parseInt(this.state.franSeconds) : ""},
		{grace: this.state.graceMinutes ? parseInt(this.state.graceMinutes * 60) + parseInt(this.state.graceSeconds) : ""},
		{hellen: this.state.hellenMinutes ? parseInt(this.state.hellenMinutes * 60) + parseInt(this.state.hellenSeconds) : ""},
		{fiveK: this.state.fiveKMinutes ? parseInt(this.state.fiveKMinutes * 60) + parseInt(this.state.fiveKSeconds) : ""},
		{fourHundredMeter: this.state.fourHundredMeterMinutes ? parseInt(this.state.fourHundredMeterMinutes * 60) + parseInt(this.state.fourHundredMeterSeconds) : ""},
		];
		let filteredDataArray  = dataArray.filter(item => item[Object.keys(item)[0]] !== "");

			if (filteredDataArray) {
				API.updateStats({
					userId: this.props.userData._id,
		            filteredDataArray
				})
					.then(res => {
		    //   console.log(res.data);
		      this.props.assignUser(res.data);
						this.setState({ redirect: "/dashboard" });
					})
					.catch(err => console.log(err));
			} else {
		  console.log("No Edits Made");
		}
	};

	render() {
		require("js-cookie").remove("location");
		require("js-cookie").set("location", "/userStats");
		// console.log(this.props.userData.backSquat.backSquat)
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
		}

		return (
			<div id="user-stats-page" className="container rounded shadow my-4 p-4">
				<h4>Add Stats</h4>
				<form>

				<StatUpdateBlock
					name = "weight"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.weight}
					edit = {this.editMode}
					currentState = {this.state.weightCurrent}
					editState = {this.state.weightEdit}
				>
					Weight (lb)
				</StatUpdateBlock>

				<StatUpdateBlock
					name = "backSquat"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.backSquat}
					edit = {this.editMode}
					currentState = {this.state.backSquatCurrent}
					editState = {this.state.backSquatEdit}
				>
					Back Squat
				</StatUpdateBlock>

				<StatUpdateBlock
					name = "cleanJerk"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.cleanJerk}
					edit = {this.editMode}
					currentState = {this.state.cleanJerkCurrent}
					editState = {this.state.cleanJerkEdit}
				>
					Clean Jerk
				</StatUpdateBlock>

				<StatUpdateBlock
					name = "snatch"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.snatch}
					edit = {this.editMode}
					currentState = {this.state.snatchCurrent}
					editState = {this.state.snatchEdit}
				>
					Snatch
				</StatUpdateBlock>

				<StatUpdateBlock
					name = "deadlift"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.deadlift}
					edit = {this.editMode}
					currentState = {this.state.deadliftCurrent}
					editState = {this.state.deadliftEdit}
				>
					Dead Lift
				</StatUpdateBlock>

				<StatUpdateBlock
					name = "overHeadPress"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.overHeadPress}
					edit = {this.editMode}
					currentState = {this.state.overHeadPressCurrent}
					editState = {this.state.overHeadPressEdit}
				>
					Over Head Press
				</StatUpdateBlock>

				<StatUpdateBlock
					name = "maxPullUps"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.maxPullUps}
					edit = {this.editMode}
					currentState = {this.state.maxPullUpsCurrent}
					editState = {this.state.maxPullUpsEdit}
				>
					Max Pull Ups
				</StatUpdateBlock>

				<TimeUpdateBlock
					name = "franMinutes"
					name2 = "franSeconds"
					type = "number"
					change = {this.handleInputChange}
					change2 = {this.handleInputChange2}
					state = {this.state.franMinutes}
					state2 = {this.state.franSeconds}
					edit = {this.editMode}
					currentState1 = {this.state.franCurrentMinutes}
					currentState2 ={this.state.franCurrentSeconds}
					editState = {this.state.franMinutesEdit}
					editState2 = {this.state.franSecondsEdit}
					excercise = {(this.state.franCurrentMinutes
						 + ":" + this.state.franCurrentSeconds)}
					>
						Fran
				</TimeUpdateBlock>

				<TimeUpdateBlock
					name = "graceMinutes"
					name2 = "graceSeconds"
					type = "number"
					change = {this.handleInputChange}
					change2 = {this.handleInputChange2}
					state = {this.state.graceMinutes}
					state2 = {this.state.graceSeconds}
					edit = {this.editMode}
					currentState1 = {this.state.graceCurrentMinutes}
					currentState2 ={this.state.graceCurrentSeconds}
					editState = {this.state.graceMinutesEdit}
					editState2 = {this.state.graceSecondsEdit}
					excercise = {(this.state.graceCurrentMinutes
						 + ":" + this.state.graceCurrentSeconds)}
					>
						Grace
				</TimeUpdateBlock>

				<TimeUpdateBlock
					name = "hellenMinutes"
					name2 = "hellenSeconds"
					type = "number"
					change = {this.handleInputChange}
					change2 = {this.handleInputChange2}
					state = {this.state.hellenMinutes}
					state2 = {this.state.hellenSeconds}
					edit = {this.editMode}
					currentState1 = {this.state.hellenCurrentMinutes}
					currentState2 ={this.state.hellenCurrentSeconds}
					editState = {this.state.hellenMinutesEdit}
					editState2 = {this.state.hellenSecondsEdit}
					excercise = {(this.state.hellenCurrentMinutes
						 + ":" + this.state.hellenCurrentSeconds)}
					>
						Hellen
				</TimeUpdateBlock>

				<TimeUpdateBlock
					name = "fiveKMinutes"
					name2 = "fiveKSeconds"
					type = "number"
					change = {this.handleInputChange}
					change2 = {this.handleInputChange2}
					state = {this.state.fiveKMinutes}
					state2 = {this.state.fiveKSeconds}
					edit = {this.editMode}
					currentState1 = {this.state.fiveKCurrentMinutes}
					currentState2 ={this.state.fiveKCurrentSeconds}
					editState = {this.state.fiveKMinutesEdit}
					editState2 = {this.state.fiveKSecondsEdit}
					excercise = {(this.state.fiveKCurrentMinutes
						 + ":" + this.state.fiveKCurrentSeconds)}
					>
						Five K Run 
				</TimeUpdateBlock>

				<TimeUpdateBlock
					name = "fourHundredMeterMinutes"
					name2 = "fourHundredMeterSeconds"
					type = "number"
					change = {this.handleInputChange}
					// change2 = {this.handleInputChange}
					state = {this.state.fourHundredMeterMinutes}
					state2 = {this.state.fourHundredMeterSeconds}
					edit = {this.editMode}
					currentState1 = {this.state.fourHundredMeterCurrentMinutes}
					currentState2 ={this.state.fourHundredMeterCurrentSeconds}
					editState = {this.state.fourHundredMeterMinutesEdit}
					editState2 = {this.state.fourHundredMeterSecondsEdit}
					excercise = {(this.state.fourHundredMeterCurrentMinutes 
						+ ":" + this.state.fourHundredMeterCurrentSeconds)}
					>
						400 Meter
				</TimeUpdateBlock>

					<div style={{display: 'flex'}}>
						<button className="user-stats-submit-btn" type="submit" onClick={this.handleCancel}>
							Cancel
						</button>
						<button className="user-stats-submit-btn" type="submit" onClick={this.handleFormSubmit}>
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}
export default withRouter(UserStats);