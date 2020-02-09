import React from "react";

function TextInput(props) {
	return (
		<div className="form-group">
			<label htmlFor={props.id}>{props.children}:</label>
			<textarea row ="5" className="form-control" ref={props.refInput} name={props.name} id={props.id} />
			<button type ="button" onClick = {props.click} className="btn btn-primary"></button>
		</div>
	);
}

export default TextInput;
