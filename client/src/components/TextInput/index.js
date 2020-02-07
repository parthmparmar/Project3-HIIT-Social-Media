import React from "react";

function TextInput(props) {
	return (
		<div className="form-group">
			<label htmlFor={props.id}>{props.children}</label>
			<textarea row ="5" className="form-control" onChange={props.change} value={props.state} name={props.name} id={props.id} />
		</div>
	);
}

export default TextInput;
