import React from "react";
import Input from "../Input";
import { PromiseProvider } from "mongoose";

function statUpdateBlock(props) {
	return (
        <div className="border p-2">
            {props.editState || <button className = "btn btn-primary" type="button" onClick={() => props.edit(props.name)}>Edit</button>}
        

        <p>{props.children}: {props.currentState}</p>
            {props.editState && 
            (<Input
                id={props.name}
                name={props.name}
                type={props.type}
                change={props.change}
                state={props.state}
            >
                New / Update {props.children}:
              </Input>) }
        </div>
	);
}

export default statUpdateBlock;
