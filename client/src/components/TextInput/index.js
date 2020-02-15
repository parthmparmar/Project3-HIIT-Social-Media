import React from "react";

function TextInput(props) {
	return (
		<div className="form-group">
			<label htmlFor={props.id}>{props.children}:</label>
			<textarea row ="5" className="form-control" ref={props.refInput} name={props.name} id={props.id} />
			<button type ="button" onClick = {props.click} className="btn btn-primary mt-2 mr-2">Update</button>
			<button type ="button" onClick = {props.clickCancel} className="btn btn-light mt-2">Cancel</button>
		</div>
	);
}

export default TextInput;
