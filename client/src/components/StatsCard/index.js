import React from "react";
import { Link } from "react-router-dom";
import StatsItem from "./StatsItem";
import "./style.css";

function UserStats(props) {
	function convertTime(time) {
		var minutes = Math.floor(time / 60);
		var seconds = time % 60;
		return minutes + ":" + seconds;
	}

	return (
		<div id="stats-card">
			<div id="stats-card__header">
				<h5>Stats</h5>
				{!props.disableAddBtn ? (
					<div id="edit-stats-btn">
						<Link to="/userStats">
							<img src="./icons/edit-stats.png" alt="" />
							Add
						</Link>
					</div>
				) : null}
			</div>
			<div className="stats-card__items">
				<StatsItem statsImg="./icons/deadlift.png" statsName="Deadlift" statsValue={props.userData.deadlift.deadlift} />
				<StatsItem statsImg="./icons/backsquat.png" statsName="Backsquat" statsValue={props.userData.backSquat.backSquat} />
				<StatsItem statsImg="./icons/snatch.png" statsName="Snatch" statsValue={props.userData.snatch.snatch} />
				<StatsItem statsImg="./icons/cleanAndJerk.png" statsName="Clean and Jerk" statsValue={props.userData.cleanJerk.cleanJerk} />
				<StatsItem statsImg="./icons/overheadPress.png" statsName="Overhead Press" statsValue={props.userData.overHeadPress.overHeadPress} />
				<StatsItem statsImg="./icons/pullUp.png" statsName="Max Pull-Ups" statsValue={props.userData.maxPullUps.maxPullUps} />
				<StatsItem statsImg="./icons/fran.png" statsName="Fran" statsValue={convertTime(props.userData.fran.fran)} />
				<StatsItem statsImg="./icons/grace.png" statsName="Grace" statsValue={convertTime(props.userData.grace.grace)} />
				<StatsItem statsImg="./icons/helen.png" statsName="Hellen" statsValue={convertTime(props.userData.hellen.hellen)} />
				<StatsItem statsImg="./icons/run.png" statsName="5K Run" statsValue={convertTime(props.userData.fiveK.fiveK)} />
				<StatsItem statsImg="./icons/sprint.png" statsName="400m Sprint" statsValue={convertTime(props.userData.fourHundredMeter.fourHundredMeter)} />
			</div>
		</div>
	);
}

export default UserStats;
