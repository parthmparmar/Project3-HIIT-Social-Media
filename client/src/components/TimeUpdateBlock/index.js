import React from "react";
import Input from "../Input";
import "./style.css";

function TimeUpdateBlock(props) {
	return (
		<div className="time-update-block p-2">
			<p className="mb-0">
				{props.children}: {props.excercise}
			</p>
			{props.editState || (
				<button className="time-update-btn btn btn-sm mt-0" type="button" onClick={() => props.edit(props.name)}>
					Add
				</button>
			)}
			{props.editState && (
				<Input id={props.name} name={props.name} type={props.type} change={props.change} state={props.state}>
					New / Update {props.children} Minutes :
				</Input>
			)}
			{props.editState && (
				<Input id={props.name2} name={props.name2} type={props.type} change={props.change} state={props.state2}>
					New / Update {props.children} Seconds:
				</Input>
			)}
		</div>
	);
}

export default TimeUpdateBlock;
