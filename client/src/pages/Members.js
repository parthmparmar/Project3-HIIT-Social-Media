import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import "./styles/landing.css";
import MembersCard from "../components/MembersCard";
import UserModal from "../components/UserModal";
import "./styles/landing.css";

class Members extends Component {
	state = {
		dbMembers: [],
		clickedId: "",
		display: false
	};

	componentDidMount() {
		API.getAllMembers().then(res => {
			this.setState({
				dbMembers: res.data
			});
			console.log(this.state.dbMembers);
		});
	}

	setClickedId = index => {
		let newState = {
			clickedId: index,
			display: true
		};
		this.setState(newState);
	};

	displayModal = () => {
		if (parseInt(this.state.clickedId) > -1) {
			return (
				<UserModal show={this.state.display} onHide={() => this.setShowFalse()} selectedUser={this.state.dbMembers[this.state.clickedId]}></UserModal>
			);
		}
	};

	setShowFalse = () => {
		this.setState({
			display: false
		});
	};

	render() {
		require("js-cookie").remove("location");
		require("js-cookie").set("location", "/Members");
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />;
		}

		return (
			<div className="members-page">
				{this.state.dbMembers.map((userData, index) => {
					return <MembersCard userData={userData} key={index} id={index} click={this.setClickedId} />;
				})}

				{this.displayModal()}
			</div>
		);
	}
}
export default Members;
