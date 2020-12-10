import React from "react";

function Input(props) {
	return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.children}</label>
      <input
        onKeyDown={(e) => (e.key ==='.' || e.key === '+' || e.key === "-") && e.preventDefault()}
        className={"form-control " + (props.error ? "is-invalid" : "")}
        onChange={props.change}
        value={props.state}
        name={props.name}
        id={props.id}
        type={props.type}
      />
    </div>
  );
}

export default Input;
