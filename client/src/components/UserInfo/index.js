import React, { useState, useRef } from "react";
import TextInput from "../TextInput";
import API from "../../utils/API";
import Avatar from "avataaars";
// import { Tooltip } from "react-bootstrap";
import "./style.css";

function UserInfo(props) {
	const [statusEdit, setStatusEdit] = useState(false);
	const statusInput = useRef("");

	function convertHeight(heightInches) {
		var feet = Math.floor(heightInches / 12);
		var leftover = heightInches % 12;
		return feet + "' " + leftover + '"';
	}

	function clickStatusUpdate() {
		setStatusEdit(false);
		if (statusInput.current.value) {
			let filteredDataArray = [{ status: statusInput.current.value.trim() }];
			if (filteredDataArray) {
				API.updateStats({
					userId: props.userData._id,
					filteredDataArray
				})
					.then(res => {
						console.log(res.data);
						props.assignUser(res.data);
					})
					.catch(err => console.log(err));
			} else {
				console.log("New status not added");
			}
		}
	}

	function clickCancelStatusUpdate() {
		setStatusEdit(false);
	}

	return (
		<div>
			<div id="user-info-card" className="card mb-3">
				<div className="row no-gutters">
					<div className="col-4">
						<div id="avatar">
							<Avatar
								style={{ width: "70%", height: "150px" }}
								avatarStyle="Transparent"
								topType={props.userData.avatar.topType || ""}
								hairColor={props.userData.avatar.hairColor || ""}
								facialHairType={props.userData.avatar.facialHairType || ""}
								facialHairColor={props.userData.avatar.facialHairColor || ""}
								clotheType="Hoodie"
								clotheColor={props.userData.avatar.clotheColor || ""}
								skinColor={props.userData.avatar.skinColor || ""}
							/>
							<h5 className="card-title">
								{firstLetterCap(props.userData.firstName)} {firstLetterCap(props.userData.lastName)}
							</h5>
						</div>
					</div>
					<div className="col-8">
						<div className="card-body pl-0">
							<p className="card-text">{props.userData.status.status ? props.userData.status.status : "No Status"}</p>
							{props.edit
								? statusEdit || (
										<div id="edit-status-btn" className="" onClick={() => setStatusEdit(true)}>
											<img src="./icons/edit-status.png" alt="Edit icon"/>
										</div>
								  )
								: null}

							{statusEdit && (
								<TextInput
									id="status-input"
									name="status"
									click={() => clickStatusUpdate()}
									clickCancel={() => clickCancelStatusUpdate()}
									refInput={statusInput}
									currentStatus={props.userData.status.status ? props.userData.status.status : " "}
								>
									Edit Status
								</TextInput>
							)}
						</div>
					</div>
				</div>
				<div id="userInfo">
					<div className="userInfo__item">
						<div>DIVISION</div>
						<div className="userInfo__value">{props.userData.gender ? firstLetterCap(props.userData.gender) : "None"}</div>
					</div>
					<div className="userInfo__item">
						<div>AGE</div>
						<div className="userInfo__value">{props.userData.birthday ? props.userData.age : "None"}</div>
					</div>
					<div className="userInfo__item">
						<div>HEIGHT</div>
						<div className="userInfo__value">{props.userData.height.height ? convertHeight(props.userData.height.height) : "None"}</div>
					</div>
					<div className="userInfo__item">
						<div>WEIGHT</div>
						<div className="userInfo__value">{props.userData.weight.weight ? props.userData.weight.weight + "Lbs" : "None"} </div>
					</div>
					<div className="userInfo__item">
						<div>BOX</div>
						<div className="userInfo__value">{props.userData.box || "None"}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function firstLetterCap(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export default UserInfo;
