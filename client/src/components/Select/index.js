import React from "react";

function Select(props) {

    var optionArray = props.optionArray
	return (
		<div className="form-group">
			<label htmlFor={props.id}>{props.children}:</label>
			<select name = {props.itemName}class="form-control" onChange={props.change}>
                {optionArray.map(option=>{
                    return <option value={option}>{option}</option>
                })}
            </select>
		</div>
	);
}

export default Select;
