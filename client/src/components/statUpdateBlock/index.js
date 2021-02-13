import React from "react";
import Input from "../Input";
import "./style.css";

function statUpdateBlock(props) {
	return (
		<div className="stats-update-block p-2">
			<p className="mb-0">
				{props.children}: {props.currentState}
			</p>
			{props.editState || (
				<button className="stats-update-btn btn btn-sm mt-0" type="button" onClick={() => props.edit(props.name)}>
					Add
				</button>
			)}
			{props.editState && (
				<Input id={props.name} name={props.name} type={props.type} change={props.change} state={props.state}>
					New / Update {props.children}:
				</Input>
			)}
		</div>
	);
}

export default statUpdateBlock;
