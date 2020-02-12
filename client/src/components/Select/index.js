import React from "react";

function Select(props) {

    var optionArray = props.optionArray
	return (
		<div className="form-group">
			<label htmlFor={props.id}>{props.children}:</label>
			<select name = {props.itemName}className="form-control" onChange={props.change}>
				<option key="empty" value="">Select An Option</option>
                {optionArray.map(option=>{
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
		</div>
	);
}

export default Select;
