import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
// import Input from "../components/Input";
import StatUpdateBlock from "../components/statUpdateBlock";

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
		franCurrentSeconds: deconstruct(this.props.userData.grace.grace, "s"),
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
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
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
		{height: this.state.height},
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
		let filteredDataArray  = dataArray.filter(value => Object.values(value) != "");
		console.log(filteredDataArray);
			if (filteredDataArray) {
				API.updateStats({
					userId: this.props.userData._id,
		            filteredDataArray
				})
					.then(res => {
		      console.log(res.data);
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
		console.log(this.props.userData.backSquat.backSquat)
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
		}

		return (
			<div className="container rounded shadow p-4 mt-4 w-25">
				<h4>User Registration</h4>
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

				<StatUpdateBlock
					name = "franMinutes"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.franMinutes}
					edit = {this.editMode}
					currentState = {this.state.franCurrentMinutes}
					editState = {this.state.franMinutesEdit}
				>
					Fran (Minutes)
				</StatUpdateBlock>
				<StatUpdateBlock
					name = "franSeconds"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.franSeconds}
					edit = {this.editMode}
					currentState = {this.state.franCurrentSeconds}
					editState = {this.state.franSecondsEdit}
				>
					Fran (Seconds)
				</StatUpdateBlock>

				<StatUpdateBlock
					name = "graceMinutes"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.graceMinutes}
					edit = {this.editMode}
					currentState = {this.state.graceCurrentMinutes}
					editState = {this.state.graceMinutesEdit}
				>
					Grace (Minutes)
				</StatUpdateBlock>
				<StatUpdateBlock
					name = "graceSeconds"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.graceSeconds}
					edit = {this.editMode}
					currentState = {this.state.graceCurrentSeconds}
					editState = {this.state.graceSecondsEdit}
				>
					Grace (Seconds)
				</StatUpdateBlock>

				<StatUpdateBlock
					name = "hellenMinutes"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.hellenMinutes}
					edit = {this.editMode}
					currentState = {this.state.hellenCurrentMinutes}
					editState = {this.state.hellenMinutesEdit}
				>
					Hellen (Minutes)
				</StatUpdateBlock>
				<StatUpdateBlock
					name = "hellenSeconds"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.hellenSeconds}
					edit = {this.editMode}
					currentState = {this.state.hellenCurrentSeconds}
					editState = {this.state.hellenSecondsEdit}
				>
					Hellen (Seconds)
				</StatUpdateBlock>

				<StatUpdateBlock
					name = "fiveKMinutes"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.fiveKMinutes}
					edit = {this.editMode}
					currentState = {this.state.fiveKCurrentMinutes}
					editState = {this.state.fiveKMinutesEdit}
				>
					5K (Minutes)
				</StatUpdateBlock>

				<StatUpdateBlock
					name = "fiveKSeconds"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.fiveKSeconds}
					edit = {this.editMode}
					currentState = {this.state.fiveKCurrentSeconds}
					editState = {this.state.fiveKSecondsEdit}
				>
					5K (Seconds)
				</StatUpdateBlock>

				<StatUpdateBlock
					name = "fourHundredMeterMinutes"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.fourHundredMeterMinutes}
					edit = {this.editMode}
					currentState = {this.state.fourHundredMeterCurrentMinutes}
					editState = {this.state.fourHundredMeterMinutesEdit}
				>
					400 Meter (Minutes)
				</StatUpdateBlock>

				<StatUpdateBlock
					name = "fourHundredMeterSeconds"
					type = "number"
					change = {this.handleInputChange}
					state = {this.state.fourHundredMeterSeconds}
					edit = {this.editMode}
					currentState = {this.state.fourHundredMeterCurrentSeconds}
					editState = {this.state.fourHundredMeterSecondsEdit}
				>
					400 Meter (Seconds)
				</StatUpdateBlock>

					<button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}
export default UserStats;
