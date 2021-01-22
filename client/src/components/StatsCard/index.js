import React, {useState} from "react";
import API from "../../utils/API";
import ChartModal from "../ChartModal";
import { Link } from "react-router-dom";
import StatsItem from "./StatsItem";
import "./style.css";

function UserStats(props) {
	function convertTime(time) {
		var minutes = Math.floor(time / 60);
		var seconds = time % 60;
		return minutes + ":" + seconds;
	}

  const [data, setData] = useState("");
  const [labels, setLabels] = useState("");
  const [display, setDisplay] = useState(false);
  const [stat, setStat] = useState("");

  function getStat(item, statName){
    if(window.location.pathname === "/dashboard"){
      API.getStat(item, props.userData._id)
      .then(res => {
        // console.log(res.data);
        setStat(statName);
        splitData(res.data, item);
        setDisplay(true);
      });
    };
  };

  function splitData(array, item){
    var dataPoints = [];
    var labels = [];

    array.forEach(element => {
      dataPoints.unshift(element[item]);
      labels.unshift(new Date(element.date));
    });

    setData(dataPoints);
    setLabels(labels);

  }

  function setShowFalse () {
      setDisplay(false);
    };

    return (
      <div>
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
				<StatsItem statsImg="./icons/deadlift.png" statsName="Deadlift" statsValue={props.userData.deadlift.deadlift} click={getStat} item="deadlift"/>
				<StatsItem statsImg="./icons/backsquat.png" statsName="Backsquat" statsValue={props.userData.backSquat.backSquat} click={getStat} item="backSquat"/>
				<StatsItem statsImg="./icons/snatch.png" statsName="Snatch" statsValue={props.userData.snatch.snatch} click={getStat} item="snatch"/>
				<StatsItem statsImg="./icons/cleanAndJerk.png" statsName="Clean and Jerk" statsValue={props.userData.cleanJerk.cleanJerk} click={getStat} item="cleanJerk"/>
				<StatsItem statsImg="./icons/overheadPress.png" statsName="Overhead Press" statsValue={props.userData.overHeadPress.overHeadPress} click={getStat} item="overHeadPress"/>
				<StatsItem statsImg="./icons/pullUp.png" statsName="Max Pull-Ups" statsValue={props.userData.maxPullUps.maxPullUps} click={getStat} item="maxPullups"/>
				<StatsItem statsImg="./icons/fran.png" statsName="Fran" statsValue={convertTime(props.userData.fran.fran)} click={getStat} item="fran"/>
				<StatsItem statsImg="./icons/grace.png" statsName="Grace" statsValue={convertTime(props.userData.grace.grace)} click={getStat} item="grace"/>
				<StatsItem statsImg="./icons/helen.png" statsName="Hellen" statsValue={convertTime(props.userData.hellen.hellen)} click={getStat} item="hellen"/>
				<StatsItem statsImg="./icons/run.png" statsName="5K Run" statsValue={convertTime(props.userData.fiveK.fiveK)} click={getStat} item="fiveK"/>
				<StatsItem statsImg="./icons/sprint.png" statsName="400m Sprint" statsValue={convertTime(props.userData.fourHundredMeter.fourHundredMeter)} click={getStat} item="fourHundredMeter"/>
			</div>
		</div>
    <div>
        {data && <ChartModal
            show={display}
            onHide={() => setShowFalse()}
            labels = {labels}
            data = {data}
            stat = {stat}
        >
        </ChartModal>}
    </div>
    </div>
    )
}

export default UserStats;
